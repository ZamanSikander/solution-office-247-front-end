import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChoosePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  selectedService: string;
}

interface FormData {
  name: string;
  email: string;
}

const ChoosePlanModal: React.FC<ChoosePlanModalProps> = ({ isOpen, onClose, selectedPlan, selectedService }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  }, [error]);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '' });
    setError(null);
    setSuccess(false);
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name.trim(), 
          email: formData.email.trim(), 
          plan: selectedPlan,
          service: selectedService
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Auto-close after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }, [formData, selectedPlan, selectedService, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative mx-4"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
              onClick={handleClose}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Choose Plan: <span className="text-primary">{selectedPlan}</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Service: <span className="font-medium">{selectedService}</span>
            </p>

            {success ? (
              <motion.div 
                className="text-green-600 font-medium text-center py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-2">✅</div>
                <div>Your request has been sent!</div>
                <div className="text-sm text-gray-600 mt-1">We'll contact you shortly.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div 
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors duration-200"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors duration-200"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                    Selected Plan
                  </label>
                  <input
                    id="plan"
                    type="text"
                    value={selectedPlan}
                    readOnly
                    className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 cursor-not-allowed"
                    aria-label={`Selected plan: ${selectedPlan}`}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Selected Service
                  </label>
                  <input
                    id="service"
                    type="text"
                    value={selectedService}
                    readOnly
                    className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 cursor-not-allowed"
                    aria-label={`Selected service: ${selectedService}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChoosePlanModal;
