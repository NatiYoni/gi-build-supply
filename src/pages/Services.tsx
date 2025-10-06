import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sandProduct from "@/assets/sand-product.jpg";
import stonesProduct from "@/assets/stones-product.jpg";
import gravelPile from "@/assets/gravel-pile.jpg";
import gravelFine from "@/assets/gravel-fine.jpg";
import machinerySand from "@/assets/machinery-sand.jpg";
import machineryLoader from "@/assets/machinery-loader.jpg";
import cementPowder from "@/assets/cement-powder.jpg";
import machineryGroup from "@/assets/machinery-group.jpg";
import machineryDuo from "@/assets/machinery-duo.jpg";
import machineryFleet from "@/assets/machinery-fleet.jpg";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Construction Sand",
      images: [sandProduct, machinerySand],
      description: "Premium quality sand in various types perfect for all construction projects, from residential to commercial builds.",
      features: [
        "Fine grain sand for masonry work",
        "Coarse sand for concrete mixing",
        "River sand for plastering",
        "Washed and screened for purity",
        "Available in bulk quantities",
      ],
      comingSoon: false,
    },
    {
      title: "Gravel & Aggregates",
      images: [stonesProduct, gravelPile, gravelFine],
      description: "High-quality gravel and aggregates in various sizes and types for different construction applications.",
      features: [
        "Multiple size options (3/8\", 3/4\", 1.5\")",
        "Crushed stone for base material",
        "Decorative gravel options",
        "Fine and coarse aggregates",
        "Drainage and landscaping aggregates",
      ],
      comingSoon: false,
    },
    {
      title: "Cement & Building Materials",
      images: [cementPowder],
      description: "Quality cement and construction materials to meet your building requirements.",
      features: [
        "Portland cement",
        "Rapid-setting cement",
        "Construction adhesives",
        "Various cement grades",
        "Bulk orders available",
      ],
      comingSoon: true,
    },
    {
      title: "Construction Machinery",
      images: [machineryGroup, machineryDuo, machineryFleet, machineryLoader],
      description: "Modern construction equipment and machinery for efficient project execution.",
      features: [
        "Excavators and loaders",
        "Dump trucks",
        "Backhoe loaders",
        "Professional operators available",
        "Flexible rental periods",
      ],
      comingSoon: true,
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {service.images.length === 1 ? (
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-card">
                      <img 
                        src={service.images[0]} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {service.comingSoon && (
                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
                          <Badge className="text-lg px-6 py-3 bg-white text-primary">
                            <Clock className="mr-2 h-5 w-5" />
                            Coming Soon
                          </Badge>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {service.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className={`relative rounded-lg overflow-hidden shadow-card ${
                            imgIndex === 0 && service.images.length === 3 ? "col-span-2 h-64" : "h-48"
                          } ${
                            service.images.length === 4 ? "h-44" : ""
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {service.comingSoon && imgIndex === 0 && (
                            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
                              <Badge className="text-base px-4 py-2 bg-white text-primary">
                                <Clock className="mr-2 h-4 w-4" />
                                Coming Soon
                              </Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Card className={`shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-3xl gradient-text">{service.title}</CardTitle>
                      {service.comingSoon && (
                        <Badge variant="outline" className="text-accent border-accent">
                          <Clock className="mr-1 h-3 w-3" />
                          Coming Soon
                        </Badge>
                      )}
                    </div>
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
                      <Button 
                        className="gradient-hero text-white shadow-glow mt-4"
                        disabled={service.comingSoon}
                      >
                        {service.comingSoon ? "Notify Me" : "Request Quote"}
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
