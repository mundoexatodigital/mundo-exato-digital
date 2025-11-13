import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, Thermometer, Beaker, Play, RotateCcw, Eye, Zap, Wind, Atom } from "lucide-react";

const SimuladorCalorSensivel = () => {
  const [mass1, setMass1] = useState<number>(100);
  const [temp1, setTemp1] = useState<number>(25);
  const [mass2, setMass2] = useState<number>(100);
  const [temp2, setTemp2] = useState<number>(25);
  const [material1, setMaterial1] = useState<string>("agua");
  const [material2, setMaterial2] = useState<string>("areia");
  const [result, setResult] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [animationTemp, setAnimationTemp] = useState<number>(0);

  const materials = {
    agua: { name: "Água", c: 1.0 },
    areia: { name: "Areia", c: 0.2 },
    gelo: { name: "Gelo", c: 0.5 },
    madeira: { name: "Madeira", c: 0.42 },
    vidro: { name: "Vidro", c: 0.16 },
    ferro: { name: "Ferro", c: 0.11 },
    prata: { name: "Prata", c: 0.06 }
  };

  const calculateThermalEquilibrium = () => {
    const m1 = mass1;
    const t1 = temp1;
    const m2 = mass2;
    const t2 = temp2;
    const c1 = materials[material1 as keyof typeof materials].c;
    const c2 = materials[material2 as keyof typeof materials].c;

    // Q1 + Q2 = 0
    // m1*c1*(T - t1) + m2*c2*(T - t2) = 0
    // T = (m1*c1*t1 + m2*c2*t2) / (m1*c1 + m2*c2)

    const numerator = m1 * c1 * t1 + m2 * c2 * t2;
    const denominator = m1 * c1 + m2 * c2;
    const equilibriumTemp = numerator / denominator;

    setResult(`Temperatura de equilíbrio: ${equilibriumTemp.toFixed(2)} °C`);

    // Start animation
    setShowAnimation(true);
    setAnimationTemp(equilibriumTemp);
  };

  const calculateHeatRequired = () => {
    const m = mass1;
    const t1 = temp1;
    const t2 = temp2;
    const c = materials[material1 as keyof typeof materials].c;
    const deltaT = t2 - t1;

    const heat = m * c * deltaT;
    setResult(`Calor necessário: ${heat.toFixed(2)} cal`);
  };

  const resetSimulation = () => {
    setMass1(100);
    setTemp1(25);
    setMass2(100);
    setTemp2(25);
    setMaterial1("agua");
    setMaterial2("areia");
    setResult("");
    setShowAnimation(false);
    setAnimationTemp(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-8 h-8" />
              Simulador de Calor Sensível
            </h1>
            <p className="text-lg text-muted-foreground">
              Calcule quantidades de calor e equilíbrio térmico de forma interativa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulador */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Simulador Interativo
                  </CardTitle>
                  <CardDescription>
                    Calcule quantidades de calor e equilíbrio térmico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="heat" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="heat">Calor Necessário</TabsTrigger>
                      <TabsTrigger value="equilibrium">Equilíbrio Térmico</TabsTrigger>
                    </TabsList>

                    <TabsContent value="heat" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mass-heat">Massa (g)</Label>
                          <Slider
                            value={[mass1]}
                            onValueChange={(value) => setMass1(value[0])}
                            max={500}
                            min={10}
                            step={10}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{mass1}g</div>
                        </div>
                        <div>
                          <Label htmlFor="material-heat">Material</Label>
                          <Select value={material1} onValueChange={setMaterial1}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o material" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(materials).map(([key, material]) => (
                                <SelectItem key={key} value={key}>
                                  {material.name} (c = {material.c} cal/g°C)
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="temp-initial">Temperatura Inicial (°C)</Label>
                          <Slider
                            value={[temp1]}
                            onValueChange={(value) => setTemp1(value[0])}
                            max={100}
                            min={0}
                            step={5}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{temp1}°C</div>
                        </div>
                        <div>
                          <Label htmlFor="temp-final">Temperatura Final (°C)</Label>
                          <Slider
                            value={[temp2]}
                            onValueChange={(value) => setTemp2(value[0])}
                            max={100}
                            min={0}
                            step={5}
                            className="mt-2"
                          />
                          <div className="text-center mt-1 text-sm text-muted-foreground">{temp2}°C</div>
                        </div>
                      </div>
                      <Button onClick={calculateHeatRequired} className="w-full">
                        Calcular Calor Necessário
                      </Button>
                    </TabsContent>

                    <TabsContent value="equilibrium" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Corpo 1</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="mass1-eq">Massa (g)</Label>
                              <Slider
                                value={[mass1]}
                                onValueChange={(value) => setMass1(value[0])}
                                max={500}
                                min={10}
                                step={10}
                                className="mt-2"
                              />
                              <div className="text-center mt-1 text-sm text-muted-foreground">{mass1}g</div>
                            </div>
                            <div>
                              <Label htmlFor="temp1-eq">Temperatura Inicial (°C)</Label>
                              <Slider
                                value={[temp1]}
                                onValueChange={(value) => setTemp1(value[0])}
                                max={100}
                                min={0}
                                step={5}
                                className="mt-2"
                              />
                              <div className="text-center mt-1 text-sm text-muted-foreground">{temp1}°C</div>
                            </div>
                            <div>
                              <Label htmlFor="material1-eq">Material</Label>
                              <Select value={material1} onValueChange={setMaterial1}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.entries(materials).map(([key, material]) => (
                                    <SelectItem key={key} value={key}>
                                      {material.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Corpo 2</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="mass2-eq">Massa (g)</Label>
                              <Slider
                                value={[mass2]}
                                onValueChange={(value) => setMass2(value[0])}
                                max={500}
                                min={10}
                                step={10}
                                className="mt-2"
                              />
                              <div className="text-center mt-1 text-sm text-muted-foreground">{mass2}g</div>
                            </div>
                            <div>
                              <Label htmlFor="temp2-eq">Temperatura Inicial (°C)</Label>
                              <Slider
                                value={[temp2]}
                                onValueChange={(value) => setTemp2(value[0])}
                                max={100}
                                min={0}
                                step={5}
                                className="mt-2"
                              />
                              <div className="text-center mt-1 text-sm text-muted-foreground">{temp2}°C</div>
                            </div>
                            <div>
                              <Label htmlFor="material2-eq">Material</Label>
                              <Select value={material2} onValueChange={setMaterial2}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.entries(materials).map(([key, material]) => (
                                    <SelectItem key={key} value={key}>
                                      {material.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <Button onClick={calculateThermalEquilibrium} className="w-full">
                        Calcular Equilíbrio Térmico
                      </Button>
                    </TabsContent>
                  </Tabs>

                  {result && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-center">{result}</p>
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
                    Visualização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Imagem ilustrativa */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg">
                      <div className="text-center">
                        <Thermometer className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                        <h3 className="text-lg font-semibold mb-2">Equilíbrio Térmico</h3>
                        <p className="text-sm text-muted-foreground">
                          Dois corpos em contato térmico atingem a mesma temperatura final
                        </p>
                      </div>
                    </div>

                    {/* Corpo 1 */}
                    <div className="border-2 border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div>
                          <p className="font-medium">{materials[material1 as keyof typeof materials].name}</p>
                          <p className="text-sm text-muted-foreground">
                            {mass1}g • {temp1}°C • c = {materials[material1 as keyof typeof materials].c} cal/g°C
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Corpo 2 */}
                    <div className="border-2 border-red-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div>
                          <p className="font-medium">{materials[material2 as keyof typeof materials].name}</p>
                          <p className="text-sm text-muted-foreground">
                            {mass2}g • {temp2}°C • c = {materials[material2 as keyof typeof materials].c} cal/g°C
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Resultado visual */}
                    {result && (
                      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 rounded-lg p-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold text-lg">T</span>
                          </div>
                          <p className="font-semibold text-green-700 dark:text-green-300">
                            {result}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fórmulas Utilizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-mono text-sm">Qₛ = m · c · Δθ</p>
                      <p className="text-xs text-muted-foreground mt-1">Calor sensível</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-mono text-sm">T = (m₁·c₁·θ₁ + m₂·c₂·θ₂) / (m₁·c₁ + m₂·c₂)</p>
                      <p className="text-xs text-muted-foreground mt-1">Equilíbrio térmico</p>
                    </div>
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

export default SimuladorCalorSensivel;
