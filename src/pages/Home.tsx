import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Clock, Award, Phone } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import sandDark from "@/assets/sand-dark.jpg";
import gravelConveyor from "@/assets/gravel-conveyor.jpg";
import loaderSand from "@/assets/loader-sand.jpg";

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Premium Quality",
      description: "Certified materials meeting industry standards",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "On-time delivery to your construction site",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
    {
      icon: Award,
      title: "Trusted Partner",
      description: "Years of experience in the industry",
    },
  ];

  const products = [
    {
      name: "Construction Sand",
      image: sandDark,
      description: "High-quality sand for all construction needs",
    },
    {
      name: "Gravel & Stones",
      image: gravelConveyor,
      description: "Various sizes of premium aggregates",
    },
    {
      name: "Construction Machinery",
      image: loaderSand,
      description: "Modern equipment for efficient projects",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/60 via-background to-blue-50/60 pb-20 md:pb-32">
        {/* Animated Gradient Blob - DESKTOP ONLY */}
        <div className="absolute top-0 left-0 w-full h-full opacity-80 hidden md:block">
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-purple-400/50 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-blue-400/50 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* --- Desktop Layout --- */}
          <div className="hidden md:grid grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="max-w-3xl text-left animate-fade-in-left">
              <h1 className="mb-6 text-foreground">
                Building Your Dreams with Premium Materials
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                GI Technology delivers top-quality construction sand, stones, and aggregates
                to power your building projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Link to="/services">
                  <Button size="lg" className="gradient-hero text-white shadow-glow text-lg px-8 py-6">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-lg"> <strong>+251-911-711-111</strong></span>
              </div>
            </div>
            {/* Image Content */}
            <div className="relative w-full h-full flex items-center justify-center animate-fade-in-right">
              <img
                src={heroImage}
                alt="GI Technology Construction Materials"
                className="max-w-full max-h-[60vh] object-contain rounded-lg [filter:drop-shadow(0_25px_30px_rgba(0,0,0,0.15))]"
              />
            </div>
          </div>

          {/* --- Mobile Layout --- */}
          <div className="md:hidden relative my-8 rounded-lg overflow-hidden shadow-xl">
            <img
              src={heroImage}
              alt="GI Technology Construction Materials"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-primary/80 to-primary/60 text-white">
              <h1 className="mb-4 text-white text-4xl leading-tight">
                Building Your Dreams with Premium Materials
              </h1>
              <p className="text-md text-white/90 mb-6">
                Top-quality sand, stones, and aggregates for your projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
                <Link to="/services" className="w-full">
                  <Button size="lg" className="w-full gradient-hero text-white shadow-glow">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-white/10 border-white hover:bg-white/20">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 gradient-hero p-1.5 rounded-md">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-lg"> <strong>+251-911-711-111</strong></span>
              </div>

            </div>
          </div>
        </div>

        {/* Shaped Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose GI Technology?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and quality materials for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300 bg-white">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of construction materials for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/90">{product.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-hero text-white shadow-glow">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a free quote and discover how GI Technology can help bring your construction vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-6">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;