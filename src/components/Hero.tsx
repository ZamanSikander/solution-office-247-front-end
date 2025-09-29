
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Play from 'lucide-react/dist/esm/icons/play';
import Star from 'lucide-react/dist/esm/icons/star';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

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
              <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                {/* Pre-rendered stars as static SVG for performance */}
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.9 7.6.6-5.7 4.9 1.8 7.5L12 17.8l-6.6 4.1 1.8-7.5L1.5 9.5l7.6-.6L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.9 7.6.6-5.7 4.9 1.8 7.5L12 17.8l-6.6 4.1 1.8-7.5L1.5 9.5l7.6-.6L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.9 7.6.6-5.7 4.9 1.8 7.5L12 17.8l-6.6 4.1 1.8-7.5L1.5 9.5l7.6-.6L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.9 7.6.6-5.7 4.9 1.8 7.5L12 17.8l-6.6 4.1 1.8-7.5L1.5 9.5l7.6-.6L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.9 7.6.6-5.7 4.9 1.8 7.5L12 17.8l-6.6 4.1 1.8-7.5L1.5 9.5l7.6-.6L12 2z" />
                  </svg>
                </div>
                <span className="ml-2 text-yellow-400">Trusted by 500+ clients</span>
              </div>

            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-gradient-premium">
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
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="btn-premium text-lg group"
                    aria-label="Open portfolio modal"
                  >
                    <span>Our Portfolio</span>
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-display text-gradient-premium">Explore Our Portfolio</DialogTitle>
                    <DialogDescription>
                      Browse selected work from our core service areas.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-2 grid grid-cols-1 gap-3">
                    <Link to="/portfolio/ecommerce" className="w-full">
                      <Button variant="outline" className="w-full justify-between btn-outline-premium group">
                        <span>E-commerce Portfolio</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Button>
                    </Link>
                    <Link to="/portfolio/frontend-development" className="w-full">
                      <Button variant="outline" className="w-full justify-between btn-outline-premium group">
                        <span>Front-end Development Portfolio</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Button>
                    </Link>
                    <Link to="/portfolio/academic" className="w-full">
                      <Button variant="outline" className="w-full justify-between btn-outline-premium group">
                        <span>Academic Portfolio</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog> */}
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
