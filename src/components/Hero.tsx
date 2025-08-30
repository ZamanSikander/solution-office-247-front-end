
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { HashLink } from 'react-router-hash-link';
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero bg-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 scroll-reveal animate">
            {/* Trust Badge */}
            <div className="flex justify-center">
              <div className="glass-card px-4 py-2 rounded-full text-white text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className='text-yellow-400'>Trusted by 500+ clients</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold leading-tight  text-gradient-premium">
                Powering Your Ideas with Words, Code & eCommerce
              </h1>
              <p className="text-sm lg:text-xl text-gray-900/70 leading-relaxed max-w-3xl mx-auto">
                Expert academic writing, cutting-edge front-end development, and comprehensive eCommerce solutions.
                <span className='hidden sm:inline'> Your success is our mission.</span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-lilac" />
                <span className="text-sm font-medium text-gradient-premium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-lilac" />
                <span className="text-sm font-medium text-gradient-premium">Ultra-Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-lilac" />
                <span className="text-sm font-medium text-gradient-premium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-lilac" />
                <span className="text-sm font-medium text-gradient-premium">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink smooth to='#services'>
                <Button
                  className="btn-premium text-lg group"
                  aria-label="Start Your Project" // Accessible label for screen readers
                >
                  <span>Start Your Project</span>
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true" // Hide icon from screen readers
                  />
                </Button>

              </HashLink>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-sm md:text-3xl lg:text-4xl text-gray-900/70">500+</div>
                <div className=" text-sm font-medium text-gradient-premium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-sm md:text-3xl text-gray-900/70 lg:text-4xl">98%</div>
                <div className=" text-sm text-gradient-premium font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-sm md:text-3xl lg:text-4xl text-gray-900/70 ">24/7</div>
                <div className="text-sm text-gradient-premium font-medium">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
