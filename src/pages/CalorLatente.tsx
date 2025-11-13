import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Calculator, CheckCircle } from "lucide-react";

const CalorLatente = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Calor Latente</h1>
            <p className="text-lg text-muted-foreground">
              Mudança de estado físico sem variação de temperatura
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Conceito de Calor Latente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  O calor latente é a quantidade de calor absorvida ou liberada durante uma mudança de estado físico
                  sem variação de temperatura. Esse calor é usado para quebrar ou formar ligações intermoleculares.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-center text-lg">
                    Q = m · L
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><strong>Q:</strong> calor latente (cal ou J)</li>
                  <li><strong>m:</strong> massa (g ou kg)</li>
                  <li><strong>L:</strong> calor latente específico (cal/g ou J/kg)</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Tipos de Calor Latente</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Fusão (sólido → líquido)</p>
                      <p className="text-sm text-muted-foreground">L = 80 cal/g (água)</p>
                    </div>
                    <div>
                      <p className="font-medium">Vaporização (líquido → gás)</p>
                      <p className="text-sm text-muted-foreground">L = 540 cal/g (água)</p>
                    </div>
                    <div>
                      <p className="font-medium">Solidificação (líquido → sólido)</p>
                      <p className="text-sm text-muted-foreground">L = 80 cal/g (água)</p>
                    </div>
                    <div>
                      <p className="font-medium">Condensação (gás → líquido)</p>
                      <p className="text-sm text-muted-foreground">L = 540 cal/g (água)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Simulador de Calor Latente
                </CardTitle>
                <CardDescription>
                  Calcule quantidades de calor para mudanças de estado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pratique os conceitos aprendidos com nosso simulador interativo.
                  Clique no botão abaixo para acessar o simulador dedicado.
                </p>
                <Button asChild className="w-full">
                  <a href="/simulador-calor-latente">
                    <Calculator className="w-4 h-4 mr-2" />
                    Acessar Simulador
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Exercícios de Calor Latente
                </CardTitle>
                <CardDescription>
                  Pratique com exercícios específicos do tema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Resolva exercícios focados em calor latente e mudanças de estado.
                </p>
                <Button asChild className="w-full">
                  <a href="/exercicios-calor-latente">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fazer Exercícios
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exemplos Práticos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Fusão do Gelo</h4>
                    <p>Quanto calor é necessário para derreter 50g de gelo a 0°C?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Q = 50 × 80 = 4000 cal
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Vaporização da Água</h4>
                    <p>Quanto calor é liberado quando 10g de vapor d'água condensam a 100°C?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Q = 10 × 540 = 5400 cal (liberados)
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Refrigerador</h4>
                    <p>Como funciona o calor latente no processo de refrigeração?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      O refrigerante absorve calor latente ao evaporar, resfriando o ambiente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalorLatente;
