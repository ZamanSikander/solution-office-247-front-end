import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-accent-orange rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-accent-lilac rounded-full blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-28 h-28 bg-secondary rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🚀 Professional Services Available 24/7
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Your <span className="text-accent-orange">One-Stop</span> Solution for
                <span className="block text-accent-lilac">Digital Success</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                From academic excellence to cutting-edge web development and eCommerce solutions. 
                We deliver professional results that exceed expectations, 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full text-lg group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-slide-in-up animate-delay-200">
            <div className="hero-float relative">
              <img 
                src={heroImage} 
                alt="Office 24/7 Digital Services" 
                className="w-full h-auto rounded-3xl shadow-glow"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-accent-orange text-white p-4 rounded-2xl shadow-lg floating-element">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Available</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg floating-element" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-primary">✨</div>
              <div className="text-sm text-muted-foreground">Premium Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;