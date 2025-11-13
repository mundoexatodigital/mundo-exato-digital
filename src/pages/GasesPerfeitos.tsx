import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wind, Calculator, CheckCircle } from "lucide-react";

const GasesPerfeitos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Gases Perfeitos</h1>
            <p className="text-lg text-muted-foreground">
              Leis dos gases ideais e equação de estado
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Conceito de Gases Perfeitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Os gases perfeitos seguem a equação de estado de Clapeyron, que relaciona pressão, volume,
                  temperatura e quantidade de matéria. São ideais para modelar o comportamento de gases reais
                  em condições normais.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-center text-lg">
                    P · V = n · R · T
                  </p>
                  <p className="text-sm text-center mt-2">R = 0,0821 L·atm/mol·K</p>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><strong>P:</strong> pressão (atm)</li>
                  <li><strong>V:</strong> volume (L)</li>
                  <li><strong>n:</strong> quantidade de matéria (mol)</li>
                  <li><strong>R:</strong> constante universal dos gases</li>
                  <li><strong>T:</strong> temperatura absoluta (K)</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Leis dos Gases</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Lei de Boyle (T constante)</p>
                      <p className="font-mono text-sm">P₁ · V₁ = P₂ · V₂</p>
                      <p className="text-sm text-muted-foreground">Pressão e volume são inversamente proporcionais</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Lei de Charles (P constante)</p>
                      <p className="font-mono text-sm">V₁/T₁ = V₂/T₂</p>
                      <p className="text-sm text-muted-foreground">Volume e temperatura são diretamente proporcionais</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Lei de Gay-Lussac (V constante)</p>
                      <p className="font-mono text-sm">P₁/T₁ = P₂/T₂</p>
                      <p className="text-sm text-muted-foreground">Pressão e temperatura são diretamente proporcionais</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Simulador de Gases Perfeitos
                </CardTitle>
                <CardDescription>
                  Calcule propriedades dos gases usando as leis fundamentais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pratique os conceitos aprendidos com nosso simulador interativo.
                  Clique no botão abaixo para acessar o simulador dedicado.
                </p>
                <Button asChild className="w-full">
                  <a href="/simulador-gases-perfeitos">
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
                  Exercícios de Gases Perfeitos
                </CardTitle>
                <CardDescription>
                  Pratique com exercícios específicos do tema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Resolva exercícios focados nas leis dos gases e equação de estado.
                </p>
                <Button asChild className="w-full">
                  <a href="/exercicios-gases-perfeitos">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fazer Exercícios
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volume Molar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  O volume molar é o volume ocupado por 1 mol de gás nas condições normais de temperatura e pressão (CNTP).
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="font-semibold">Condições Normais:</p>
                  <p>T = 273 K (0°C)</p>
                  <p>P = 1 atm</p>
                  <p>V_molar = 22,4 L/mol</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exemplos Práticos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 1: Balão de Ar Quente</h4>
                    <p>Como o ar quente faz um balão subir?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ar quente expande (Lei de Charles), tornando-se menos denso que o ar frio
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 2: Mergulhador</h4>
                    <p>Por que o ar nos pulmões comprime ao mergulhar?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Aumento da pressão com a profundidade (Lei de Boyle)
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 3: Pneu de Bicicleta</h4>
                    <p>Por que o pneu murcha no inverno?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Diminuição da temperatura reduz a pressão (Lei de Gay-Lussac)
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

export default GasesPerfeitos;
