
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                  <span>Trusted by 500+ clients</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight text-balance">
                Your Premium
                <span className="block text-gradient-premium bg-clip-text">Digital Partner</span>
                <span className="block text-accent-coral">Available 24/7</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                From academic excellence to cutting-edge development and eCommerce solutions. 
                We deliver exceptional results with premium quality, every time.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-accent-teal" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-accent-coral" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-accent-lilac" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-secondary-light" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-premium text-lg group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline-premium text-lg group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm font-medium">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
