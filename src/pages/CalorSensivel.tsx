import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, Thermometer, Beaker, CheckCircle } from "lucide-react";

const CalorSensivel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Calor Sensível</h1>
            <p className="text-lg text-muted-foreground">
              Conceitos fundamentais de calor sensível e equilíbrio térmico
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5" />
                  Conceito de Calor Sensível
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  O calor sensível está relacionado à massa do corpo (m), à variação de temperatura (Δθ) e a uma propriedade
                  associada ao material que constitui o corpo, chamada de calor específico (c).
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-center text-lg">
                    Qₛ = m · c · Δθ
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><strong>Qₛ:</strong> quantidade de calor sensível (cal ou J)</li>
                  <li><strong>m:</strong> massa (g ou kg)</li>
                  <li><strong>c:</strong> calor específico (cal/g°C ou J/kg°C)</li>
                  <li><strong>Δθ:</strong> variação de temperatura (°C ou K)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calor Específico vs Capacidade Térmica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Calor Específico (c)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Grandeza intensiva - independente da quantidade de matéria
                    </p>
                    <p>Quantidade de calor necessária para elevar 1 unidade de massa em 1°C</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Capacidade Térmica (C)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Grandeza extensiva - depende da quantidade de matéria
                    </p>
                    <p>C = m · c</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Calor Específico de Alguns Materiais</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 p-2">Material</th>
                          <th className="border border-gray-300 p-2">Calor Específico (cal/g°C)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">Água</td>
                          <td className="border border-gray-300 p-2">1.0</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Areia</td>
                          <td className="border border-gray-300 p-2">0.2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Gelo</td>
                          <td className="border border-gray-300 p-2">0.5</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Madeira</td>
                          <td className="border border-gray-300 p-2">0.42</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Vidro</td>
                          <td className="border border-gray-300 p-2">0.16</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Ferro</td>
                          <td className="border border-gray-300 p-2">0.11</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">Prata</td>
                          <td className="border border-gray-300 p-2">0.06</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equilíbrio Térmico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Em um sistema termicamente isolado, a quantidade de calor cedida por um corpo é igual
                  à quantidade de calor recebida pelo outro corpo.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-center">Q₁ + Q₂ = 0</p>
                  <p className="font-mono text-center">m₁·c₁·Δθ₁ + m₂·c₂·Δθ₂ = 0</p>
                </div>
                <p>
                  Temperatura final: T = (m₁·c₁·θ₁ + m₂·c₂·θ₂) / (m₁·c₁ + m₂·c₂)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exemplo Prático: Areia vs Água na Praia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Por que a areia próxima à orla está mais quente que a areia próxima ao mar?
                </p>
                <p>
                  A areia tem calor específico menor (0,2 cal/g°C) que a água (1,0 cal/g°C).
                  Para a mesma quantidade de calor recebida, a areia aquece mais rapidamente.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-4">
                  <p className="font-semibold">Cálculo exemplo:</p>
                  <p>10g de areia: Q = 10 × 0,2 × 15°C = 30 cal</p>
                  <p>10g de água: Q = 10 × 1,0 × 15°C = 150 cal</p>
                  <p>A areia precisa de menos calor para aquecer!</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Simulador de Calor Sensível
                </CardTitle>
                <CardDescription>
                  Calcule quantidades de calor e equilíbrio térmico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pratique os conceitos aprendidos com nosso simulador interativo.
                  Clique no botão abaixo para acessar o simulador dedicado.
                </p>
                <Button asChild className="w-full">
                  <a href="/simulador-calor-sensivel">
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
                  Exercícios de Calor Sensível
                </CardTitle>
                <CardDescription>
                  Pratique com exercícios específicos do tema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Resolva exercícios focados em calor sensível e equilíbrio térmico.
                </p>
                <Button asChild className="w-full">
                  <a href="/exercicios-calor-sensivel">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fazer Exercícios
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Exemplos Práticos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 1: Aquecimento de Areia e Água</h4>
                    <p>10g de areia e 10g de água recebem a mesma quantidade de calor. Qual aquece mais?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Resposta: A areia aquece mais porque tem calor específico menor (0,2 vs 1,0 cal/g°C)
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 2: Mistura de Líquidos (FUVEST 1983)</h4>
                    <p>200g de água a 0°C + 250g de líquido a 40°C → equilíbrio a 20°C</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Calor específico do líquido: c = 0,8 cal/g°C
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Exemplo 3: Aquecedor Solar</h4>
                    <p>Para aquecer água de 25°C para 70°C, qual a razão entre massas de água quente e fria?</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Razão: 0,125 (para banho a 30°C)
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

export default CalorSensivel;
