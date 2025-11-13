import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, Thermometer, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero py-20 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground dark:text-white animate-fade-in" style={{ animationDelay: "120ms" }}>
                  Física Interativa
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground dark:text-white/90 mb-6 animate-fade-in" style={{ animationDelay: "240ms" }}>
                  Aprenda conceitos de Física através de explicações claras e simuladores práticos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="shadow-medium" asChild>
                    <Link to="/physics-lesson">Ver Aula: Calor Sensível</Link>
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in">
                <Card className="p-6 shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Thermometer className="w-6 h-6 text-primary" />
                      Calor Sensível
                    </CardTitle>
                    <CardDescription>
                      Mudança de temperatura sem mudança de estado físico
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Explore os conceitos fundamentais de calor específico, capacidade térmica e equilíbrio térmico através de exemplos práticos e cálculos interativos. Inclui tópicos avançados como calor latente e leis dos gases perfeitos.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="w-4 h-4" />
                        Teoria completa com fórmulas
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calculator className="w-4 h-4" />
                        Simuladores avançados
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recursos Disponíveis
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ferramentas práticas para o aprendizado de Física
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Conteúdo Teórico</CardTitle>
                  <CardDescription>
                    Explicações claras dos conceitos de Física com exemplos práticos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Simuladores</CardTitle>
                  <CardDescription>
                    Cálculos interativos para entender fórmulas e resolver problemas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Thermometer className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Exemplos Práticos</CardTitle>
                  <CardDescription>
                    Aplicações reais dos conceitos estudados com resolução passo a passo
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
