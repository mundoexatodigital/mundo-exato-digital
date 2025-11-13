import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, RotateCcw, Eye } from "lucide-react";

const SimuladorCalorLatente = () => {
  const [latentMass, setLatentMass] = useState<number>(100);
  const [latentType, setLatentType] = useState<string>("fusion");
  const [latentResult, setLatentResult] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  // Constantes para calor latente (cal/g)
  const latentHeats = {
    fusion: { name: "Fusão (Gelo → Água)", L: 80, icon: "🧊", color: "blue" },
    vaporization: { name: "Vaporização (Água → Vapor)", L: 540, icon: "💨", color: "purple" },
    solidification: { name: "Solidificação (Água → Gelo)", L: 80, icon: "❄️", color: "cyan" },
    condensation: { name: "Condensação (Vapor → Água)", L: 540, icon: "💧", color: "indigo" }
  };

  const calculateLatentHeat = () => {
    const m = latentMass;
    const L = latentHeats[latentType as keyof typeof latentHeats].L;
    const heat = m * L;
    setLatentResult(`Calor latente: ${heat.toFixed(2)} cal`);
    setShowAnimation(true);
  };

  const resetSimulation = () => {
    setLatentMass(100);
    setLatentType("fusion");
    setLatentResult("");
    setShowAnimation(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-8 h-8" />
              Simulador de Calor Latente
            </h1>
            <p className="text-lg text-muted-foreground">
              Calcule quantidades de calor para mudanças de estado físico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulador */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Simulador Interativo
                  </CardTitle>
                  <CardDescription>
                    Calcule quantidades de calor para mudanças de estado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="mb-4">
                      O calor latente (L) é a quantidade de calor necessária para mudar o estado físico de uma substância
                      sem alterar sua temperatura.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-mono text-center text-lg">
                        Q = m · L
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="latent-mass">Massa (g)</Label>
                      <Slider
                        value={[latentMass]}
                        onValueChange={(value) => setLatentMass(value[0])}
                        max={1000}
                        min={10}
                        step={10}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{latentMass}g</div>
                    </div>
                    <div>
                      <Label htmlFor="latent-type">Tipo de Mudança</Label>
                      <Select value={latentType} onValueChange={setLatentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(latentHeats).map(([key, heat]) => (
                            <SelectItem key={key} value={key}>
                              {heat.icon} {heat.name} (L = {heat.L} cal/g)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={calculateLatentHeat} className="w-full mt-4">
                    Calcular Calor Latente
                  </Button>

                  {latentResult && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-center">{latentResult}</p>
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
                    Visualização da Mudança de Estado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Processo atual */}
                    <div className={`p-6 rounded-lg border-2 ${
                      latentType === 'fusion' ? 'border-blue-300 bg-blue-50 dark:bg-blue-950' :
                      latentType === 'vaporization' ? 'border-purple-300 bg-purple-50 dark:bg-purple-950' :
                      latentType === 'solidification' ? 'border-cyan-300 bg-cyan-50 dark:bg-cyan-950' :
                      'border-indigo-300 bg-indigo-50 dark:bg-indigo-950'
                    }`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {latentHeats[latentType as keyof typeof latentHeats].icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {latentHeats[latentType as keyof typeof latentHeats].name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          L = {latentHeats[latentType as keyof typeof latentHeats].L} cal/g
                        </p>

                        {/* Barra de progresso visual */}
                        {showAnimation && (
                          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                            <div
                              className={`h-3 rounded-full transition-all duration-1000 ${
                                latentType === 'fusion' ? 'bg-blue-500' :
                                latentType === 'vaporization' ? 'bg-purple-500' :
                                latentType === 'solidification' ? 'bg-cyan-500' :
                                'bg-indigo-500'
                              }`}
                              style={{ width: '100%' }}
                            ></div>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-medium">Estado Inicial</div>
                            <div className="text-muted-foreground">
                              {latentType === 'fusion' ? 'Sólido (0°C)' :
                               latentType === 'vaporization' ? 'Líquido (100°C)' :
                               latentType === 'solidification' ? 'Líquido (0°C)' :
                               'Gasoso (100°C)'}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">Estado Final</div>
                            <div className="text-muted-foreground">
                              {latentType === 'fusion' ? 'Líquido (0°C)' :
                               latentType === 'vaporization' ? 'Gasoso (100°C)' :
                               latentType === 'solidification' ? 'Sólido (0°C)' :
                               'Líquido (100°C)'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Massa visual */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl mb-2">⚖️</div>
                        <p className="font-medium">Massa: {latentMass}g</p>
                        <p className="text-sm text-muted-foreground">de água</p>
                      </div>
                    </div>

                    {/* Resultado */}
                    {latentResult && (
                      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🔥</div>
                          <p className="font-semibold text-green-700 dark:text-green-300">
                            {latentResult}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Calor necessário para a mudança de estado
                          </p>
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
                    <p className="font-mono text-sm text-center">Q = m · L</p>
                    <p className="text-xs text-muted-foreground mt-1 text-center">Calor latente</p>
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

export default SimuladorCalorLatente;
