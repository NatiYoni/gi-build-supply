import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sandProduct from "@/assets/sand-product.jpg";
import stonesProduct from "@/assets/stones-product.jpg";
import constructionMaterials from "@/assets/construction-materials.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Construction Sand",
      image: sandProduct,
      description: "Premium quality sand perfect for all types of construction projects, from residential to commercial builds.",
      features: [
        "Fine grain sand for masonry work",
        "Coarse sand for concrete mixing",
        "Washed and screened for purity",
        "Available in bulk quantities",
      ],
    },
    {
      title: "Gravel & Aggregates",
      image: stonesProduct,
      description: "High-quality gravel and aggregates in various sizes for different construction applications.",
      features: [
        "Multiple size options (3/8\", 3/4\", 1.5\")",
        "Crushed stone for base material",
        "Decorative gravel options",
        "Drainage and landscaping aggregates",
      ],
    },
    {
      title: "Building Materials",
      image: constructionMaterials,
      description: "Complete range of construction materials and supplies to meet all your building requirements.",
      features: [
        "Cement and concrete products",
        "Construction adhesives",
        "Reinforcement materials",
        "Custom material orders available",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Our Products & Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive range of premium construction materials delivered with excellence and reliability
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-card">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <Card className={`shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-3xl gradient-text">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button className="gradient-hero text-white shadow-glow mt-4">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why Our Materials?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    All our materials undergo rigorous quality testing to ensure they meet 
                    industry standards and exceed your expectations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    We offer the best prices in the market without compromising on quality. 
                    Bulk discounts available for large orders.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Reliable Delivery</h3>
                  <p className="text-muted-foreground">
                    Our fleet ensures timely delivery to your site. We understand the importance 
                    of keeping your project on schedule.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Expert Support</h3>
                  <p className="text-muted-foreground">
                    Our team of experienced professionals is always ready to help you choose 
                    the right materials for your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
