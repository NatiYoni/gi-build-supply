import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.jpg";
import logobgrem from "@/assets/logobgrem.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on the quality of our materials, ensuring every product meets the highest industry standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through exceptional service.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We constantly evolve and improve our processes to serve you better and meet the changing needs of the industry.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Honest pricing, clear communication, and reliable service - we believe in doing business the right way.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white mb-6">About GI Technology</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Building Excellence Since Day One
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  GI Technology was founded with a simple mission: to provide the construction 
                  industry with the highest quality materials and most reliable service available. 
                  What started as a small operation has grown into a trusted partner for contractors 
                  and builders across the region.
                </p>
                <p>
                  We understand that every construction project, whether big or small, requires 
                  materials you can depend on. That's why we've built our reputation on quality, 
                  reliability, and customer service that goes above and beyond.
                </p>
                <p>
                  Today, GI Technology stands as a leader in construction material supply, 
                  offering everything from premium sand and gravel to complete building supplies. 
                  Our commitment to excellence remains unchanged, and we continue to grow alongside 
                  our customers' success.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary blur-3xl opacity-30 rounded-full"></div>
                <img 
                  src={logo} 
                  alt="GI Technology Logo" 
                  className="relative h-80 w-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To deliver premium construction materials with unmatched service, helping our 
                  customers build stronger, better, and more efficiently. We strive to be the 
                  first choice for contractors and builders who demand quality and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the most trusted and respected construction materials supplier in the 
                  industry, known for our unwavering commitment to quality, innovation, and 
                  customer satisfaction. We aim to set the standard for excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Behind GI Technology is a dedicated team of professionals committed to your success. 
            From our experienced sales staff to our skilled logistics team, every member plays a 
            crucial role in delivering the quality and service you deserve.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We invest in our people because we know that great service comes from a team that 
            cares. Our staff undergoes continuous training to stay current with industry trends 
            and best practices, ensuring we can provide you with expert guidance and support.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
