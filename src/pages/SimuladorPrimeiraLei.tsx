import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Atom, RotateCcw, Eye } from "lucide-react";

const SimuladorPrimeiraLei = () => {
  const [thermoMass, setThermoMass] = useState<number>(2);
  const [thermoInitialTemp, setThermoInitialTemp] = useState<number>(300);
  const [thermoFinalTemp, setThermoFinalTemp] = useState<number>(400);
  const [thermoHeat, setThermoHeat] = useState<number>(1000);
  const [thermoWork, setThermoWork] = useState<number>(500);
  const [thermoResult, setThermoResult] = useState<string>("");
  const [thermoProcess, setThermoProcess] = useState<string>("isobaric");

  // Constante universal dos gases (L·atm/mol·K)
  const R = 0.0821;

  const calculateThermoFirstLaw = () => {
    const deltaU = (3/2) * thermoMass * R * (thermoFinalTemp - thermoInitialTemp);
    const heat = thermoHeat;
    const work = thermoWork;

    let result = `ΔU = ${deltaU.toFixed(2)} J\nQ = ${heat} J\nτ = ${work} J\nVerificação: ΔU = Q - τ → ${deltaU.toFixed(2)} = ${heat} - ${work}`;

    setThermoResult(result);
  };

  const resetSimulation = () => {
    setThermoMass(2);
    setThermoInitialTemp(300);
    setThermoFinalTemp(400);
    setThermoHeat(1000);
    setThermoWork(500);
    setThermoResult("");
    setThermoProcess("isobaric");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Atom className="w-8 h-8" />
              Simulador da Primeira Lei
            </h1>
            <p className="text-lg text-muted-foreground">
              Calcule variações de energia em processos termodinâmicos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulador */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Atom className="w-5 h-5" />
                    Simulador Interativo
                  </CardTitle>
                  <CardDescription>
                    Calcule variações de energia em processos termodinâmicos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="mb-4">
                      A Primeira Lei da Termodinâmica relaciona a variação da energia interna (ΔU),
                      o calor trocado (Q) e o trabalho realizado (τ).
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-mono text-center text-lg">
                        ΔU = Q - τ
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="thermo-process">Tipo de Processo</Label>
                      <Select value={thermoProcess} onValueChange={setThermoProcess}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="isobaric">Isobárico</SelectItem>
                          <SelectItem value="isochoric">Isocórico</SelectItem>
                          <SelectItem value="adiabatic">Adiabático</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="thermo-mass">Massa (mol)</Label>
                      <Slider
                        value={[thermoMass]}
                        onValueChange={(value) => setThermoMass(value[0])}
                        max={10}
                        min={0.1}
                        step={0.1}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{thermoMass} mol</div>
                    </div>
                    <div>
                      <Label htmlFor="thermo-initial-temp">Temperatura Inicial (K)</Label>
                      <Slider
                        value={[thermoInitialTemp]}
                        onValueChange={(value) => setThermoInitialTemp(value[0])}
                        max={500}
                        min={200}
                        step={10}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{thermoInitialTemp} K</div>
                    </div>
                    <div>
                      <Label htmlFor="thermo-final-temp">Temperatura Final (K)</Label>
                      <Slider
                        value={[thermoFinalTemp]}
                        onValueChange={(value) => setThermoFinalTemp(value[0])}
                        max={500}
                        min={200}
                        step={10}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{thermoFinalTemp} K</div>
                    </div>
                    <div>
                      <Label htmlFor="thermo-heat">Calor (J)</Label>
                      <Slider
                        value={[thermoHeat]}
                        onValueChange={(value) => setThermoHeat(value[0])}
                        max={5000}
                        min={-5000}
                        step={100}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{thermoHeat} J</div>
                    </div>
                    <div>
                      <Label htmlFor="thermo-work">Trabalho (J)</Label>
                      <Slider
                        value={[thermoWork]}
                        onValueChange={(value) => setThermoWork(value[0])}
                        max={5000}
                        min={-5000}
                        step={100}
                        className="mt-2"
                      />
                      <div className="text-center mt-1 text-sm text-muted-foreground">{thermoWork} J</div>
                    </div>
                  </div>
                  <Button onClick={calculateThermoFirstLaw} className="w-full mt-4">
                    Calcular Primeira Lei
                  </Button>

                  {thermoResult && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-center whitespace-pre-line">{thermoResult}</p>
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
                    Visualização Energética
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Sistema termodinâmico */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-6xl mb-4">⚡</div>
                        <h3 className="text-lg font-semibold mb-2">Sistema Termodinâmico</h3>
                        <p className="text-sm text-muted-foreground">
                          Energia não se cria nem se destrói, apenas se transforma
                        </p>
                      </div>
                    </div>

                    {/* Fluxos de energia */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">🔥</div>
                        <p className="font-medium">Calor (Q)</p>
                        <p className="text-sm text-muted-foreground">{thermoHeat > 0 ? '+' : ''}{thermoHeat} J</p>
                        <p className="text-xs text-muted-foreground">
                          {thermoHeat > 0 ? 'Recebido' : 'Cedido'}
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">⚙️</div>
                        <p className="font-medium">Trabalho (τ)</p>
                        <p className="text-sm text-muted-foreground">{thermoWork > 0 ? '+' : ''}{thermoWork} J</p>
                        <p className="text-xs text-muted-foreground">
                          {thermoWork > 0 ? 'Realizado' : 'Recebido'}
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">💚</div>
                        <p className="font-medium">ΔU</p>
                        <p className="text-sm text-muted-foreground">
                          {(3/2) * thermoMass * R * (thermoFinalTemp - thermoInitialTemp) > 0 ? '+' : ''}
                          {((3/2) * thermoMass * R * (thermoFinalTemp - thermoInitialTemp)).toFixed(1)} J
                        </p>
                        <p className="text-xs text-muted-foreground">Energia Interna</p>
                      </div>
                    </div>

                    {/* Processo atual */}
                    <div className={`p-4 rounded-lg border-2 ${
                      thermoProcess === 'isobaric' ? 'border-blue-300 bg-blue-50 dark:bg-blue-950' :
                      thermoProcess === 'isochoric' ? 'border-green-300 bg-green-50 dark:bg-green-950' :
                      'border-purple-300 bg-purple-50 dark:bg-purple-950'
                    }`}>
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">
                          {thermoProcess === 'isobaric' ? 'Processo Isobárico' :
                           thermoProcess === 'isochoric' ? 'Processo Isocórico' :
                           'Processo Adiabático'}
                        </h4>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="font-medium">P</p>
                            <p className="text-muted-foreground">
                              {thermoProcess === 'isobaric' ? 'Constante' : 'Variável'}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium">V</p>
                            <p className="text-muted-foreground">
                              {thermoProcess === 'isochoric' ? 'Constante' : 'Variável'}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium">Q</p>
                            <p className="text-muted-foreground">
                              {thermoProcess === 'adiabatic' ? '0' : 'Variável'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Balanço energético */}
                    {thermoResult && (
                      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-2">⚖️</div>
                          <p className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            Balanço Energético
                          </p>
                          <div className="text-sm whitespace-pre-line text-center">
                            {thermoResult}
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
                    <p className="font-mono text-sm text-center">ΔU = Q - τ</p>
                    <p className="text-xs text-muted-foreground mt-1 text-center">Primeira Lei da Termodinâmica</p>
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

export default SimuladorPrimeiraLei;
