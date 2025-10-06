import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Clock, Award } from "lucide-react";
import heroImage from "@/assets/home.png";
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
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img 
          src={heroImage} 
          alt="GI Technology Construction Materials"
          className="absolute inset-0 w-full h-full object-contain object-center bg-gradient-to-r from-primary/20 to-primary/10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Building Your Dreams with Premium Materials
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              GI Technology delivers top-quality construction sand, stones, and aggregates 
              to power your building projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" className="gradient-hero text-white shadow-glow text-lg px-8 py-6">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 text-lg px-8 py-6">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
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
                <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of construction materials for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
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
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10 text-lg px-8 py-6">
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
