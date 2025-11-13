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

const PhysicsLesson = () => {
  const [mass1, setMass1] = useState<number>(100);
  const [temp1, setTemp1] = useState<number>(25);
  const [mass2, setMass2] = useState<number>(100);
  const [temp2, setTemp2] = useState<number>(25);
  const [material1, setMaterial1] = useState<string>("agua");
  const [material2, setMaterial2] = useState<string>("areia");
  const [result, setResult] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [animationTemp, setAnimationTemp] = useState<number>(0);

  // Novos estados para calor latente
  const [latentMass, setLatentMass] = useState<number>(100);
  const [latentType, setLatentType] = useState<string>("fusion");
  const [latentResult, setLatentResult] = useState<string>("");

  // Novos estados para gases perfeitos
  const [gasPressure, setGasPressure] = useState<number>(1);
  const [gasVolume, setGasVolume] = useState<number>(22.4);
  const [gasTemp, setGasTemp] = useState<number>(273);
  const [gasMoles, setGasMoles] = useState<number>(1);
  const [gasResult, setGasResult] = useState<string>("");
  const [gasLaw, setGasLaw] = useState<string>("clapeyron");

  // Estados para Termodinâmica - Primeira Lei
  const [thermoMass, setThermoMass] = useState<number>(2);
  const [thermoInitialTemp, setThermoInitialTemp] = useState<number>(300);
  const [thermoFinalTemp, setThermoFinalTemp] = useState<number>(400);
  const [thermoHeat, setThermoHeat] = useState<number>(1000);
  const [thermoWork, setThermoWork] = useState<number>(500);
  const [thermoResult, setThermoResult] = useState<string>("");
  const [thermoProcess, setThermoProcess] = useState<string>("isobaric");

  // Estados para Ciclos Termodinâmicos
  const [cycleWorkAB, setCycleWorkAB] = useState<number>(50);
  const [cycleWorkBC, setCycleWorkBC] = useState<number>(70);
  const [cycleWorkCD, setCycleWorkCD] = useState<number>(-30);
  const [cycleWorkDA, setCycleWorkDA] = useState<number>(-40);
  const [cycleHeatAB, setCycleHeatAB] = useState<number>(50);
  const [cycleHeatBC, setCycleHeatBC] = useState<number>(70);
  const [cycleHeatCD, setCycleHeatCD] = useState<number>(-30);
  const [cycleHeatDA, setCycleHeatDA] = useState<number>(-40);
  const [cycleResult, setCycleResult] = useState<string>("");

  // Estados para Exercícios
  const [exercise1Answer, setExercise1Answer] = useState<string>("");
  const [exercise2Answer, setExercise2Answer] = useState<string>("");
  const [exercise3Answer, setExercise3Answer] = useState<string>("");
  const [exercise1Result, setExercise1Result] = useState<string>("");
  const [exercise2Result, setExercise2Result] = useState<string>("");
  const [exercise3Result, setExercise3Result] = useState<string>("");

  const materials = {
    agua: { name: "Água", c: 1.0 },
    areia: { name: "Areia", c: 0.2 },
    gelo: { name: "Gelo", c: 0.5 },
    madeira: { name: "Madeira", c: 0.42 },
    vidro: { name: "Vidro", c: 0.16 },
    ferro: { name: "Ferro", c: 0.11 },
    prata: { name: "Prata", c: 0.06 }
  };

  // Constantes para calor latente (cal/g)
  const latentHeats = {
    fusion: { name: "Fusão (Gelo → Água)", L: 80 },
    vaporization: { name: "Vaporização (Água → Vapor)", L: 540 },
    solidification: { name: "Solidificação (Água → Gelo)", L: 80 },
    condensation: { name: "Condensação (Vapor → Água)", L: 540 }
  };

  // Constante universal dos gases (L·atm/mol·K)
  const R = 0.0821;

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

  // Funções para calor latente
  const calculateLatentHeat = () => {
    const m = latentMass;
    const L = latentHeats[latentType as keyof typeof latentHeats].L;
    const heat = m * L;
    setLatentResult(`Calor latente: ${heat.toFixed(2)} cal`);
  };

  // Funções para gases perfeitos
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

  // Funções para Termodinâmica - Primeira Lei
  const calculateThermoFirstLaw = () => {
    const deltaU = (3/2) * thermoMass * R * (thermoFinalTemp - thermoInitialTemp);
    const heat = thermoHeat;
    const work = thermoWork;

    let result = "";
    if (thermoProcess === "isobaric") {
      result = `ΔU = ${deltaU.toFixed(2)} J\nQ = ${heat} J\nτ = ${work} J\nVerificação: ΔU = Q - τ → ${deltaU.toFixed(2)} = ${heat} - ${work}`;
    } else if (thermoProcess === "isochoric") {
      result = `ΔU = ${deltaU.toFixed(2)} J\nQ = ${heat} J\nτ = 0 J (processo isocórico)\nVerificação: ΔU = Q - τ → ${deltaU.toFixed(2)} = ${heat} - 0`;
    } else if (thermoProcess === "adiabatic") {
      result = `ΔU = ${deltaU.toFixed(2)} J\nQ = 0 J (processo adiabático)\nτ = -ΔU = ${(-deltaU).toFixed(2)} J\nVerificação: ΔU = Q - τ → ${deltaU.toFixed(2)} = 0 - ${(-deltaU).toFixed(2)}`;
    }

    setThermoResult(result);
  };

  // Funções para Ciclos Termodinâmicos
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

  // Funções para exercícios
  const checkExercise1 = () => {
    // UFSC 2007: 2 mols, ΔU = 100J, τ = 1280J, Q = 1380J
    const correct = exercise1Answer === "10" || exercise1Answer === "02+08";
    return correct ? "Correto! Soma das afirmações corretas: 02 + 08 = 10" : "Incorreto. Tente novamente.";
  };

  const checkExercise2 = () => {
    // FUVEST 2020: 1 mol, T1 = T, T1/3, τ = R·T
    const correct = exercise2Answer === "R·T1" || exercise2Answer === "R*T1";
    return correct ? "Correto! τ = R·T₁" : "Incorreto. Tente novamente.";
  };

  const checkExercise3 = () => {
    // UFV 2010: Q = U + P·V_B - V_A + W_BC
    const correct = exercise3Answer === "U+P·V_B−V_A+W_BC" || exercise3Answer === "U + P·V_B - V_A + W_BC";
    return correct ? "Correto! Q = U + P·V_B - V_A + W_BC" : "Incorreto. Tente novamente.";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Termodinâmica e Gases Perfeitos</h1>
            <p className="text-lg text-muted-foreground">
              Calor sensível, calor latente, gases perfeitos e termodinâmica
            </p>
          </div>

          <Tabs defaultValue="theory" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="theory">Teoria</TabsTrigger>
              <TabsTrigger value="simulator">Simulador</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
              <TabsTrigger value="exercises">Exercícios</TabsTrigger>
            </TabsList>

            <TabsContent value="theory" className="space-y-6">
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
                          {Object.entries(materials).map(([key, material]) => (
                            <tr key={key}>
                              <td className="border border-gray-300 p-2">{material.name}</td>
                              <td className="border border-gray-300 p-2">{material.c}</td>
                            </tr>
                          ))}
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
                    <Zap className="w-5 h-5" />
                    Calor Latente
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
                    <Wind className="w-5 h-5" />
                    Gases Perfeitos
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
            </TabsContent>

            <TabsContent value="simulator" className="space-y-6">
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
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Calor Latente
                  </CardTitle>
                  <CardDescription>
                    Mudança de estado físico sem variação de temperatura
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
                              {heat.name} (L = {heat.L} cal/g)
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="w-5 h-5" />
                    Gases Perfeitos
                  </CardTitle>
                  <CardDescription>
                    Leis dos gases ideais
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Atom className="w-5 h-5" />
                    Termodinâmica - Primeira Lei
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
                    <RotateCcw className="w-5 h-5" />
                    Ciclos Termodinâmicos
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
                    Aplicações da Primeira Lei
                  </CardTitle>
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
            </TabsContent>

            <TabsContent value="exercises" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exercício 1 - UFSC 2007</CardTitle>
                  <CardDescription>
                    Um gás ideal monoatômico sofre um processo termodinâmico. São dadas as seguintes informações:
                    2 mols, ΔU = 100 J, τ = 1280 J, Q = 1380 J.
                    Determine a soma das afirmações corretas:
                    01) O processo é isocórico
                    02) O processo é isobárico
                    08) O processo é adiabático
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="exercise1">Resposta (soma das afirmações)</Label>
                      <Input
                        id="exercise1"
                        value={exercise1Answer}
                        onChange={(e) => setExercise1Answer(e.target.value)}
                        placeholder="Ex: 10 ou 02+08"
                      />
                    </div>
                    <Button onClick={() => setExercise1Result(checkExercise1())} className="w-full">
                      Verificar Resposta
                    </Button>
                    {exercise1Result && (
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <p className="font-semibold">{exercise1Result}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercício 2 - FUVEST 2020</CardTitle>
                  <CardDescription>
                    Um gás ideal sofre um processo isotérmico reversível. Inicialmente, tem volume V₁ e pressão P₁.
                    O volume é reduzido à metade. Determine o trabalho realizado pelo gás.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="exercise2">Resposta</Label>
                      <Input
                        id="exercise2"
                        value={exercise2Answer}
                        onChange={(e) => setExercise2Answer(e.target.value)}
                        placeholder="Ex: R·T1"
                      />
                    </div>
                    <Button onClick={() => setExercise2Result(checkExercise2())} className="w-full">
                      Verificar Resposta
                    </Button>
                    {exercise2Result && (
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <p className="font-semibold">{exercise2Result}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercício 3 - UFV 2010</CardTitle>
                  <CardDescription>
                    Em um processo termodinâmico, a variação da energia interna é ΔU, o calor trocado é Q,
                    o trabalho realizado pelo sistema é τ, e o trabalho realizado sobre o sistema é W.
                    Qual é a expressão correta para Q?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="exercise3">Resposta</Label>
                      <Input
                        id="exercise3"
                        value={exercise3Answer}
                        onChange={(e) => setExercise3Answer(e.target.value)}
                        placeholder="Ex: U+P·V_B−V_A+W_BC"
                      />
                    </div>
                    <Button onClick={() => setExercise3Result(checkExercise3())} className="w-full">
                      Verificar Resposta
                    </Button>
                    {exercise3Result && (
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <p className="font-semibold">{exercise3Result}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhysicsLesson;
