import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Eye } from "lucide-react";

const SimuladorCiclos = () => {
  const [cycleWorkAB, setCycleWorkAB] = useState<number>(50);
  const [cycleWorkBC, setCycleWorkBC] = useState<number>(70);
  const [cycleWorkCD, setCycleWorkCD] = useState<number>(-30);
  const [cycleWorkDA, setCycleWorkDA] = useState<number>(-40);
  const [cycleHeatAB, setCycleHeatAB] = useState<number>(50);
  const [cycleHeatBC, setCycleHeatBC] = useState<number>(70);
  const [cycleHeatCD, setCycleHeatCD] = useState<number>(-30);
  const [cycleHeatDA, setCycleHeatDA] = useState<number>(-40);
  const [cycleResult, setCycleResult] = useState<string>("");

  const calculateCycle = () => {
    const totalWork = cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA;
    const totalHeat = cycleHeatAB + cycleHeatBC + cycleHeatCD + cycleHeatDA;
    const deltaU = totalHeat - totalWork;

    let result = `Trabalho total: ${totalWork} J\nCalor total: ${totalHeat} J\nΔU total: ${deltaU} J\n`;

    if (totalWork > 0) {
      result += "O ciclo realiza trabalho sobre o ambiente (motor térmico)";
    } else if (totalWork < 0) {
      result += "O ambiente realiza trabalho sobre o sistema (bomba térmica)";
    } else {
      result += "Ciclo sem realização de trabalho líquido";
    }

    setCycleResult(result);
  };

  const resetSimulation = () => {
    setCycleWorkAB(50);
    setCycleWorkBC(70);
    setCycleWorkCD(-30);
    setCycleWorkDA(-40);
    setCycleHeatAB(50);
    setCycleHeatBC(70);
    setCycleHeatCD(-30);
    setCycleHeatDA(-40);
    setCycleResult("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <RotateCcw className="w-8 h-8" />
              Simulador de Ciclos Termodinâmicos
            </h1>
            <p className="text-lg text-muted-foreground">
              Calcule trabalho e calor em um ciclo termodinâmico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulador */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Simulador Interativo
                  </CardTitle>
                  <CardDescription>
                    Calcule trabalho e calor em um ciclo termodinâmico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Insira os valores de trabalho e calor para cada etapa do ciclo (AB, BC, CD, DA).
                    Valores positivos indicam trabalho realizado pelo sistema ou calor recebido.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Trabalho (τ)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="work-ab">Trabalho AB (J)</Label>
                          <Slider
                            value={[cycleWorkAB]}
                            onValueChange={(value) => setCycleWorkAB(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleWorkAB} J</div>
                        </div>
                        <div>
                          <Label htmlFor="work-bc">Trabalho BC (J)</Label>
                          <Slider
                            value={[cycleWorkBC]}
                            onValueChange={(value) => setCycleWorkBC(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleWorkBC} J</div>
                        </div>
                        <div>
                          <Label htmlFor="work-cd">Trabalho CD (J)</Label>
                          <Slider
                            value={[cycleWorkCD]}
                            onValueChange={(value) => setCycleWorkCD(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleWorkCD} J</div>
                        </div>
                        <div>
                          <Label htmlFor="work-da">Trabalho DA (J)</Label>
                          <Slider
                            value={[cycleWorkDA]}
                            onValueChange={(value) => setCycleWorkDA(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleWorkDA} J</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Calor (Q)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="heat-ab">Calor AB (J)</Label>
                          <Slider
                            value={[cycleHeatAB]}
                            onValueChange={(value) => setCycleHeatAB(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleHeatAB} J</div>
                        </div>
                        <div>
                          <Label htmlFor="heat-bc">Calor BC (J)</Label>
                          <Slider
                            value={[cycleHeatBC]}
                            onValueChange={(value) => setCycleHeatBC(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleHeatBC} J</div>
                        </div>
                        <div>
                          <Label htmlFor="heat-cd">Calor CD (J)</Label>
                          <Slider
                            value={[cycleHeatCD]}
                            onValueChange={(value) => setCycleHeatCD(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleHeatCD} J</div>
                        </div>
                        <div>
                          <Label htmlFor="heat-da">Calor DA (J)</Label>
                          <Slider
                            value={[cycleHeatDA]}
                            onValueChange={(value) => setCycleHeatDA(value[0])}
                            max={200}
                            min={-200}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{cycleHeatDA} J</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Button onClick={calculateCycle} className="w-full mt-4">
                    Calcular Ciclo
                  </Button>

                  {cycleResult && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-center whitespace-pre-line">{cycleResult}</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button onClick={resetSimulation} variant="outline" className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Resetar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visualização */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Diagrama do Ciclo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Diagrama visual do ciclo */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🔄</div>
                        <h3 className="text-lg font-semibold mb-2">Ciclo Termodinâmico</h3>
                        <p className="text-sm text-muted-foreground">
                          Processo cíclico que retorna ao estado inicial
                        </p>
                      </div>
                    </div>

                    {/* Etapas do ciclo */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl mb-2">A→B</div>
                          <p className="font-medium">Trabalho: {cycleWorkAB} J</p>
                          <p className="text-sm text-muted-foreground">Calor: {cycleHeatAB} J</p>
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl mb-2">B→C</div>
                          <p className="font-medium">Trabalho: {cycleWorkBC} J</p>
                          <p className="text-sm text-muted-foreground">Calor: {cycleHeatBC} J</p>
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl mb-2">C→D</div>
                          <p className="font-medium">Trabalho: {cycleWorkCD} J</p>
                          <p className="text-sm text-muted-foreground">Calor: {cycleHeatCD} J</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl mb-2">D→A</div>
                          <p className="font-medium">Trabalho: {cycleWorkDA} J</p>
                          <p className="text-sm text-muted-foreground">Calor: {cycleHeatDA} J</p>
                        </div>
                      </div>
                    </div>

                    {/* Totais */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="font-medium">Στ</p>
                          <p className="text-sm text-muted-foreground">
                            {cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA} J
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">ΣQ</p>
                          <p className="text-sm text-muted-foreground">
                            {cycleHeatAB + cycleHeatBC + cycleHeatCD + cycleHeatDA} J
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">ΔU</p>
                          <p className="text-sm text-muted-foreground">
                            {(cycleHeatAB + cycleHeatBC + cycleHeatCD + cycleHeatDA) -
                             (cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA)} J
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tipo de ciclo */}
                    <div className={`p-4 rounded-lg border-2 ${
                      (cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) > 0
                        ? 'border-green-300 bg-green-50 dark:bg-green-950'
                        : (cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) < 0
                        ? 'border-blue-300 bg-blue-50 dark:bg-blue-950'
                        : 'border-gray-300 bg-gray-50 dark:bg-gray-900'
                    }`}>
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Tipo de Ciclo</h4>
                        <div className="text-3xl mb-2">
                          {(cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) > 0 ? '🚗' :
                           (cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) < 0 ? '❄️' : '⚖️'}
                        </div>
                        <p className="text-sm">
                          {(cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) > 0
                            ? 'Motor Térmico (produz trabalho)'
                            : (cycleWorkAB + cycleWorkBC + cycleWorkCD + cycleWorkDA) < 0
                            ? 'Bomba Térmica (consome trabalho)'
                            : 'Ciclo equilibrado'}
                        </p>
                      </div>
                    </div>

                    {/* Resultado detalhado */}
                    {cycleResult && (
                      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📊</div>
                          <p className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            Análise do Ciclo
                          </p>
                          <div className="text-sm whitespace-pre-line text-center">
                            {cycleResult}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fórmula Utilizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-mono text-sm text-center">Q_total - τ_total = 0</p>
                    <p className="text-xs text-muted-foreground mt-1 text-center">Para ciclo completo: ΔU = 0</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimuladorCiclos;
