import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Atom, Calculator, CheckCircle } from "lucide-react";

const PrimeiraLei = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Primeira Lei da Termodinâmica</h1>
            <p className="text-lg text-muted-foreground">
              Conservação da energia nos processos termodinâmicos
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Atom className="w-5 h-5" />
                  Conceito da Primeira Lei
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A Primeira Lei da Termodinâmica estabelece que a energia não pode ser criada nem destruída,
                  apenas transformada. Para sistemas termodinâmicos, relaciona a variação da energia interna (ΔU),
                  o calor trocado (Q) e o trabalho realizado (τ).
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="font-mono text-center text-lg">
                    ΔU = Q - τ
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><strong>ΔU:</strong> variação da energia interna (J)</li>
                  <li><strong>Q:</strong> calor trocado com o ambiente (J)</li>
                  <li><strong>τ:</strong> trabalho realizado pelo sistema (J)</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Convenções de Sinal</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-green-600">Q positivo</p>
                      <p className="text-sm">Calor recebido pelo sistema</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-red-600">Q negativo</p>
                      <p className="text-sm">Calor cedido pelo sistema</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-blue-600">τ positivo</p>
                      <p className="text-sm">Trabalho realizado pelo sistema</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-orange-600">τ negativo</p>
                      <p className="text-sm">Trabalho realizado sobre o sistema</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Processos Especiais</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Isocórico (V = constante)</p>
                      <p className="font-mono text-sm">τ = 0 → ΔU = Q</p>
                      <p className="text-sm text-muted-foreground">Não há trabalho de volume</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Isobárico (P = constante)</p>
                      <p className="font-mono text-sm">τ = P·ΔV</p>
                      <p className="text-sm text-muted-foreground">Trabalho de expansão/compressão</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Adiabático (Q = 0)</p>
                      <p className="font-mono text-sm">ΔU = -τ</p>
                      <p className="text-sm text-muted-foreground">Sem troca de calor</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Simulador da Primeira Lei
                </CardTitle>
                <CardDescription>
                  Calcule variações de energia em processos termodinâmicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Pratique os conceitos aprendidos com nosso simulador interativo.
                  Clique no botão abaixo para acessar o simulador dedicado.
                </p>
                <Button asChild className="w-full">
                  <a href="/simulador-primeira-lei">
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
                  Exercícios da Primeira Lei
                </CardTitle>
                <CardDescription>
                  Pratique com exercícios específicos do tema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Resolva exercícios focados na primeira lei da termodinâmica.
                </p>
                <Button asChild className="w-full">
                  <a href="/exercicios-primeira-lei">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fazer Exercícios
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calores Específicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Calor Específico a Volume Constante</h4>
                    <p className="mb-2">Para gases ideais: C_V = (∂U/∂T)_V</p>
                    <p className="text-sm text-muted-foreground">
                      C_V = 3/2 R para gases monoatômicos (energia cinética apenas)
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Relação entre Calores Específicos</h4>
                    <p className="mb-2">C_P - C_V = R (Lei de Mayer)</p>
                    <p className="text-sm text-muted-foreground">
                      γ = C_P/C_V = razão entre calores específicos
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Trabalho em Processos</h4>
                    <ul className="text-sm space-y-1">
                      <li>{`Isotérmico: τ = n·R·T·ln(V₂/V₁)`}</li>
                      <li>{`Isobárico: τ = P·ΔV = n·R·ΔT`}</li>
                      <li>{`Adiabático: τ = (C_V/(γ-1))·(T₁ - T₂)`}</li>
                    </ul>
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

export default PrimeiraLei;
