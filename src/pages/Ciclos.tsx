import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Calculator, CheckCircle } from "lucide-react";

const Ciclos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Ciclos Termodinâmicos</h1>
            <p className="text-lg text-muted-foreground">
              Motores térmicos, bombas térmicas e eficiência
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5" />
                  Conceito de Ciclos Termodinâmicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Um ciclo termodinâmico é um processo onde o sistema retorna ao estado inicial.
                  A Primeira Lei se aplica a cada etapa, mas para o ciclo completo: ΔU_total = 0.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-center text-lg">
                    Q_total - τ_total = 0
                  </p>
                  <p className="font-mono text-center">
                    Q_total = τ_total
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Tipos de Ciclos</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Motor Térmico</p>
                      <p className="text-sm">τ_total {'>'} 0</p>
                      <p className="text-sm text-muted-foreground">Converte calor em trabalho</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Bomba Térmica</p>
                      <p className="text-sm">τ_total {'<'} 0</p>
                      <p className="text-sm text-muted-foreground">Transfere calor contra gradiente</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Eficiência</h4>
                  <p className="mb-2">
                    Para motores térmicos, a eficiência máxima é dada pelo Ciclo de Carnot:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="font-mono text-center">η = 1 - (T_fria / T_quente)</p>
                    <p className="text-sm text-center mt-2">Temperaturas em Kelvin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Simulador de Ciclos
                </CardTitle>
                <CardDescription>
                  Calcule trabalho e calor em um ciclo termodinâmico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pratique os conceitos aprendidos com nosso simulador interativo.
                  Clique no botão abaixo para acessar o simulador dedicado.
                </p>
                <Button asChild className="w-full">
                  <a href="/simulador-ciclos">
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
                  Exercícios de Ciclos
                </CardTitle>
                <CardDescription>
                  Pratique com exercícios específicos do tema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Resolva exercícios focados em ciclos termodinâmicos.
                </p>
                <Button asChild className="w-full">
                  <a href="/exercicios-ciclos">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fazer Exercícios
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ciclo de Carnot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  O Ciclo de Carnot é o ciclo mais eficiente teoricamente possível, composto por quatro processos reversíveis:
                  duas isotérmicas e duas adiabáticas.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Processo 1-2: Expansão Isotérmica</p>
                    <p className="text-sm text-muted-foreground">T = T_quente, Q = τ</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Processo 2-3: Expansão Adiabática</p>
                    <p className="text-sm text-muted-foreground">Q = 0, T diminui</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Processo 3-4: Compressão Isotérmica</p>
                    <p className="text-sm text-muted-foreground">T = T_fria, |Q| = |τ|</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Processo 4-1: Compressão Adiabática</p>
                    <p className="text-sm text-muted-foreground">Q = 0, T aumenta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aplicações Práticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Motores de Combustão Interna</h4>
                    <p>Ciclo Otto (gasolina) e Ciclo Diesel</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Eficiência típica: 25-40%
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Turbinas a Gás</h4>
                    <p>Ciclo Brayton para aviões e geração de energia</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Alta potência específica
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Refrigeradores</h4>
                    <p>Ciclo de compressão de vapor</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      COP = Q_fria / τ (coeficiente de performance)
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

export default Ciclos;
