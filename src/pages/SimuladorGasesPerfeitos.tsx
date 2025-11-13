import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wind, RotateCcw, Eye } from "lucide-react";

const SimuladorGasesPerfeitos = () => {
  const [gasPressure, setGasPressure] = useState<number>(1);
  const [gasVolume, setGasVolume] = useState<number>(22.4);
  const [gasTemp, setGasTemp] = useState<number>(273);
  const [gasMoles, setGasMoles] = useState<number>(1);
  const [gasResult, setGasResult] = useState<string>("");
  const [gasLaw, setGasLaw] = useState<string>("clapeyron");

  // Constante universal dos gases (L·atm/mol·K)
  const R = 0.0821;

  const calculateGasLaw = () => {
    let result = "";
    switch (gasLaw) {
      case "clapeyron":
        result = `P·V = n·R·T = ${(gasMoles * R * gasTemp).toFixed(2)} atm·L`;
        break;
      case "boyle":
        result = `P₁·V₁ = P₂·V₂ (Temperatura constante)`;
        break;
      case "charles":
        result = `V₁/T₁ = V₂/T₂ (Pressão constante)`;
        break;
      case "gay-lussac":
        result = `P₁/T₁ = P₂/T₂ (Volume constante)`;
        break;
      default:
        result = "Selecione uma lei dos gases";
    }
    setGasResult(result);
  };

  const resetSimulation = () => {
    setGasPressure(1);
    setGasVolume(22.4);
    setGasTemp(273);
    setGasMoles(1);
    setGasResult("");
    setGasLaw("clapeyron");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Wind className="w-8 h-8" />
              Simulador de Gases Perfeitos
            </h1>
            <p className="text-lg text-muted-foreground">
              Calcule propriedades dos gases usando as leis fundamentais
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulador */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="w-5 h-5" />
                    Simulador Interativo
                  </CardTitle>
                  <CardDescription>
                    Calcule propriedades dos gases usando as leis fundamentais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="mb-4">
                      A equação de Clapeyron relaciona pressão (P), volume (V), temperatura (T) e quantidade de matéria (n).
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-mono text-center text-lg">
                        P·V = n·R·T
                      </p>
                      <p className="text-sm text-center mt-2">R = 0,0821 L·atm/mol·K</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gas-law">Lei dos Gases</Label>
                      <Select value={gasLaw} onValueChange={setGasLaw}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clapeyron">Equação de Clapeyron</SelectItem>
                          <SelectItem value="boyle">Lei de Boyle</SelectItem>
                          <SelectItem value="charles">Lei de Charles</SelectItem>
                          <SelectItem value="gay-lussac">Lei de Gay-Lussac</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="gas-moles">Mols (n)</Label>
                      <Slider
                        value={[gasMoles]}
                        onValueChange={(value) => setGasMoles(value[0])}
                        max={10}
                        min={0.1}
                        step={0.1}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{gasMoles} mol</div>
                    </div>
                    <div>
                      <Label htmlFor="gas-temp">Temperatura (K)</Label>
                      <Slider
                        value={[gasTemp]}
                        onValueChange={(value) => setGasTemp(value[0])}
                        max={500}
                        min={200}
                        step={10}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{gasTemp} K</div>
                    </div>
                    <div>
                      <Label htmlFor="gas-volume">Volume (L)</Label>
                      <Slider
                        value={[gasVolume]}
                        onValueChange={(value) => setGasVolume(value[0])}
                        max={100}
                        min={1}
                        step={1}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{gasVolume} L</div>
                    </div>
                  </div>
                  <Button onClick={calculateGasLaw} className="w-full mt-4">
                    Calcular
                  </Button>

                  {gasResult && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-center">{gasResult}</p>
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
                    Visualização do Gás
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Container do gás */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🫧</div>
                        <h3 className="text-lg font-semibold mb-2">Gás Perfeito</h3>
                        <p className="text-sm text-muted-foreground">
                          Moléculas em movimento constante
                        </p>
                      </div>
                    </div>

                    {/* Propriedades atuais */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🌡️</div>
                        <p className="font-medium">Temperatura</p>
                        <p className="text-sm text-muted-foreground">{gasTemp} K</p>
                        <p className="text-xs text-muted-foreground">({(gasTemp - 273.15).toFixed(1)} °C)</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">📏</div>
                        <p className="font-medium">Volume</p>
                        <p className="text-sm text-muted-foreground">{gasVolume} L</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">⚖️</div>
                        <p className="font-medium">Mols</p>
                        <p className="text-sm text-muted-foreground">{gasMoles} mol</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">💨</div>
                        <p className="font-medium">Pressão</p>
                        <p className="text-sm text-muted-foreground">{gasPressure} atm</p>
                      </div>
                    </div>

                    {/* Lei selecionada */}
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Lei Selecionada:</h4>
                      <div className="text-center">
                        {gasLaw === 'clapeyron' && (
                          <>
                            <p className="font-mono text-lg">P·V = n·R·T</p>
                            <p className="text-sm text-muted-foreground mt-1">Equação de Estado</p>
                          </>
                        )}
                        {gasLaw === 'boyle' && (
                          <>
                            <p className="font-mono text-lg">P₁·V₁ = P₂·V₂</p>
                            <p className="text-sm text-muted-foreground mt-1">T = constante</p>
                          </>
                        )}
                        {gasLaw === 'charles' && (
                          <>
                            <p className="font-mono text-lg">V₁/T₁ = V₂/T₂</p>
                            <p className="text-sm text-muted-foreground mt-1">P = constante</p>
                          </>
                        )}
                        {gasLaw === 'gay-lussac' && (
                          <>
                            <p className="font-mono text-lg">P₁/T₁ = P₂/T₂</p>
                            <p className="text-sm text-muted-foreground mt-1">V = constante</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Resultado */}
                    {gasResult && (
                      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🧮</div>
                          <p className="font-semibold text-green-700 dark:text-green-300">
                            {gasResult}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volume Molar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="font-semibold text-center">Condições Normais:</p>
                    <p className="text-center">T = 273 K (0°C)</p>
                    <p className="text-center">P = 1 atm</p>
                    <p className="text-center font-mono">V_molar = 22,4 L/mol</p>
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

export default SimuladorGasesPerfeitos;
