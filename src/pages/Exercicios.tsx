import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator } from "lucide-react";

const Exercicios = () => {
  const [exercise1Answer, setExercise1Answer] = useState<string>("");
  const [exercise2Answer, setExercise2Answer] = useState<string>("");
  const [exercise3Answer, setExercise3Answer] = useState<string>("");
  const [exercise4Answer, setExercise4Answer] = useState<string>("");
  const [exercise5Answer, setExercise5Answer] = useState<string>("");
  const [exercise6Answer, setExercise6Answer] = useState<string>("");
  const [exercise7Answer, setExercise7Answer] = useState<string>("");
  const [exercise8Answer, setExercise8Answer] = useState<string>("");
  const [exercise9Answer, setExercise9Answer] = useState<string>("");
  const [exercise10Answer, setExercise10Answer] = useState<string>("");
  const [feedback, setFeedback] = useState<{[key: string]: boolean | null}>({});

  const checkAnswer = (exercise: string, answer: string, correctAnswer: string) => {
    const isCorrect = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setFeedback(prev => ({ ...prev, [exercise]: isCorrect }));
    return isCorrect;
  };

  const exercises = [
    {
      id: "1",
      title: "Calor Sensível - Aquecimento de Água",
      question: "Quanto calor é necessário para elevar a temperatura de 500g de água de 20°C para 80°C? (c_água = 1,0 cal/g°C)",
      correctAnswer: "30000",
      unit: "cal",
      explanation: "Q = m·c·Δθ = 500 × 1,0 × 60 = 30.000 cal"
    },
    {
      id: "2",
      title: "Equilíbrio Térmico",
      question: "Uma esfera de ferro (m=200g, θ=100°C) é colocada em contato térmico com 300g de água a 20°C. Qual a temperatura final? (c_ferro=0,11 cal/g°C, c_água=1,0 cal/g°C)",
      correctAnswer: "28,6",
      unit: "°C",
      explanation: "T = (m₁·c₁·θ₁ + m₂·c₂·θ₂)/(m₁·c₁ + m₂·c₂) = (200×0,11×100 + 300×1,0×20)/(200×0,11 + 300×1,0) = 28,6°C"
    },
    {
      id: "3",
      title: "Calor Latente - Fusão",
      question: "Quanto calor é liberado quando 200g de vapor d'água a 100°C condensam completamente? (L_condensação = 540 cal/g)",
      correctAnswer: "108000",
      unit: "cal",
      explanation: "Q = m·L = 200 × 540 = 108.000 cal (liberados)"
    },
    {
      id: "4",
      title: "Gases Perfeitos - Equação de Clapeyron",
      question: "Qual o volume ocupado por 2 mols de gás ideal a 300K e 2 atm? (R = 0,0821 L·atm/mol·K)",
      correctAnswer: "24,63",
      unit: "L",
      explanation: "V = n·R·T/P = 2 × 0,0821 × 300 / 2 = 24,63 L"
    },
    {
      id: "5",
      title: "Primeira Lei - Processo Isocórico",
      question: "Um gás recebe 1000J de calor em um processo isocórico. Qual a variação da energia interna? (τ = 0)",
      correctAnswer: "1000",
      unit: "J",
      explanation: "ΔU = Q - τ = 1000 - 0 = 1000 J"
    },
    {
      id: "6",
      title: "Ciclos - Eficiência de Carnot",
      question: "Qual a eficiência máxima de um motor que opera entre 400K e 300K?",
      correctAnswer: "0,25",
      unit: "(25%)",
      explanation: "η = 1 - T_fria/T_quente = 1 - 300/400 = 0,25 (25%)"
    },
    {
      id: "7",
      title: "Calor Específico - Capacidade Térmica",
      question: "Qual a capacidade térmica de 100g de alumínio? (c_alumínio = 0,22 cal/g°C)",
      correctAnswer: "22",
      unit: "cal/°C",
      explanation: "C = m·c = 100 × 0,22 = 22 cal/°C"
    },
    {
      id: "8",
      title: "Equilíbrio - Mistura de Gases",
      question: "2 mols de gás A a 400K + 3 mols de gás B a 300K. Temperatura final? (mesmo calor específico)",
      correctAnswer: "340",
      unit: "K",
      explanation: "T = (n₁·T₁ + n₂·T₂)/(n₁ + n₂) = (2×400 + 3×300)/(2+3) = 340 K"
    },
    {
      id: "9",
      title: "Calor Latente - Vaporização",
      question: "Quanto calor é necessário para vaporizar 50g de água a 100°C? (L_vaporização = 540 cal/g)",
      correctAnswer: "27000",
      unit: "cal",
      explanation: "Q = m·L = 50 × 540 = 27.000 cal"
    },
    {
      id: "10",
      title: "Gases - Lei de Boyle",
      question: "Um gás ocupa 4L a 2 atm. Qual o volume a 4 atm? (T constante)",
      correctAnswer: "2",
      unit: "L",
      explanation: "P₁·V₁ = P₂·V₂ → 2×4 = 4×V₂ → V₂ = 2 L"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Exercícios de Termodinâmica</h1>
            <p className="text-lg text-muted-foreground">
              Pratique os conceitos aprendidos com exercícios resolvidos
            </p>
          </div>

          <Tabs defaultValue="exercises" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="exercises">Exercícios</TabsTrigger>
              <TabsTrigger value="calculator">Calculadora</TabsTrigger>
            </TabsList>

            <TabsContent value="exercises" className="space-y-6">
              {exercises.map((exercise) => (
                <Card key={exercise.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Exercício {exercise.id}: {exercise.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exercise.question}</p>

                    <div className="flex gap-4 items-end">
                      <div className="flex-1">
                        <Label htmlFor={`exercise-${exercise.id}`}>Sua resposta</Label>
                        <Input
                          id={`exercise-${exercise.id}`}
                          type="text"
                          placeholder="Digite sua resposta"
                          value={
                            exercise.id === "1" ? exercise1Answer :
                            exercise.id === "2" ? exercise2Answer :
                            exercise.id === "3" ? exercise3Answer :
                            exercise.id === "4" ? exercise4Answer :
                            exercise.id === "5" ? exercise5Answer :
                            exercise.id === "6" ? exercise6Answer :
                            exercise.id === "7" ? exercise7Answer :
                            exercise.id === "8" ? exercise8Answer :
                            exercise.id === "9" ? exercise9Answer :
                            exercise.id === "10" ? exercise10Answer : ""
                          }
                          onChange={(e) => {
                            if (exercise.id === "1") setExercise1Answer(e.target.value);
                            else if (exercise.id === "2") setExercise2Answer(e.target.value);
                            else if (exercise.id === "3") setExercise3Answer(e.target.value);
                            else if (exercise.id === "4") setExercise4Answer(e.target.value);
                            else if (exercise.id === "5") setExercise5Answer(e.target.value);
                            else if (exercise.id === "6") setExercise6Answer(e.target.value);
                            else if (exercise.id === "7") setExercise7Answer(e.target.value);
                            else if (exercise.id === "8") setExercise8Answer(e.target.value);
                            else if (exercise.id === "9") setExercise9Answer(e.target.value);
                            else if (exercise.id === "10") setExercise10Answer(e.target.value);
                          }}
                        />
                      </div>
                      <Button
                        onClick={() => checkAnswer(
                          `exercise-${exercise.id}`,
                          exercise.id === "1" ? exercise1Answer :
                          exercise.id === "2" ? exercise2Answer :
                          exercise.id === "3" ? exercise3Answer :
                          exercise.id === "4" ? exercise4Answer :
                          exercise.id === "5" ? exercise5Answer :
                          exercise.id === "6" ? exercise6Answer :
                          exercise.id === "7" ? exercise7Answer :
                          exercise.id === "8" ? exercise8Answer :
                          exercise.id === "9" ? exercise9Answer :
                          exercise.id === "10" ? exercise10Answer : "",
                          exercise.correctAnswer
                        )}
                      >
                        Verificar
                      </Button>
                    </div>

                    {feedback[`exercise-${exercise.id}`] !== undefined && (
                      <div className={`mt-4 p-4 rounded-lg ${
                        feedback[`exercise-${exercise.id}`] ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {feedback[`exercise-${exercise.id}`] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="font-semibold">
                            {feedback[`exercise-${exercise.id}`] ? 'Correto!' : 'Incorreto'}
                          </span>
                        </div>
                        <p className="text-sm">{exercise.explanation}</p>
                        {!feedback[`exercise-${exercise.id}`] && (
                          <p className="text-sm mt-2">
                            Resposta correta: {exercise.correctAnswer} {exercise.unit}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="calculator" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calculadora Termodinâmica</CardTitle>
                  <CardDescription>
                    Ferramentas para resolver problemas de termodinâmica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="heat" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="heat">Calor Sensível</TabsTrigger>
                      <TabsTrigger value="latent">Calor Latente</TabsTrigger>
                      <TabsTrigger value="gas">Gases</TabsTrigger>
                      <TabsTrigger value="thermo">Primeira Lei</TabsTrigger>
                    </TabsList>

                    <TabsContent value="heat" className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label>Massa (g)</Label>
                          <Input type="number" placeholder="100" />
                        </div>
                        <div>
                          <Label>Calor específico (cal/g°C)</Label>
                          <Input type="number" placeholder="1.0" />
                        </div>
                        <div>
                          <Label>ΔT (°C)</Label>
                          <Input type="number" placeholder="20" />
                        </div>
                      </div>
                      <Button className="w-full">Calcular Q = m·c·ΔT</Button>
                    </TabsContent>

                    <TabsContent value="latent" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Massa (g)</Label>
                          <Input type="number" placeholder="100" />
                        </div>
                        <div>
                          <Label>Calor latente (cal/g)</Label>
                          <Input type="number" placeholder="540" />
                        </div>
                      </div>
                      <Button className="w-full">Calcular Q = m·L</Button>
                    </TabsContent>

                    <TabsContent value="gas" className="space-y-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <Label>n (mol)</Label>
                          <Input type="number" placeholder="1" />
                        </div>
                        <div>
                          <Label>R (L·atm/mol·K)</Label>
                          <Input type="number" placeholder="0.0821" />
                        </div>
                        <div>
                          <Label>T (K)</Label>
                          <Input type="number" placeholder="273" />
                        </div>
                        <div>
                          <Label>P (atm)</Label>
                          <Input type="number" placeholder="1" />
                        </div>
                      </div>
                      <Button className="w-full">Calcular V = n·R·T/P</Button>
                    </TabsContent>

                    <TabsContent value="thermo" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Calor (Q)</Label>
                          <Input type="number" placeholder="1000" />
                        </div>
                        <div>
                          <Label>Trabalho (τ)</Label>
                          <Input type="number" placeholder="500" />
                        </div>
                      </div>
                      <Button className="w-full">Calcular ΔU = Q - τ</Button>
                    </TabsContent>
                  </Tabs>
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

export default Exercicios;
