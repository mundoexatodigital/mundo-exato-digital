import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator, Thermometer } from "lucide-react";

const ExerciciosCalorSensivel = () => {
  const [exercise1Answer, setExercise1Answer] = useState<string>("");
  const [exercise2Answer, setExercise2Answer] = useState<string>("");
  const [exercise3Answer, setExercise3Answer] = useState<string>("");
  const [exercise4Answer, setExercise4Answer] = useState<string>("");
  const [exercise5Answer, setExercise5Answer] = useState<string>("");
  const [feedback, setFeedback] = useState<{[key: string]: boolean | null}>({});

  const checkAnswer = (exercise: string, answer: string, correctAnswer: string) => {
    const isCorrect = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setFeedback(prev => ({ ...prev, [exercise]: isCorrect }));
    return isCorrect;
  };

  const exercises = [
    {
      id: "1",
      title: "Aquecimento de Água",
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
      title: "Calor Específico - Capacidade Térmica",
      question: "Qual a capacidade térmica de 100g de alumínio? (c_alumínio = 0,22 cal/g°C)",
      correctAnswer: "22",
      unit: "cal/°C",
      explanation: "C = m·c = 100 × 0,22 = 22 cal/°C"
    },
    {
      id: "4",
      title: "Equilíbrio - Mistura de Gases",
      question: "2 mols de gás A a 400K + 3 mols de gás B a 300K. Temperatura final? (mesmo calor específico)",
      correctAnswer: "340",
      unit: "K",
      explanation: "T = (n₁·T₁ + n₂·T₂)/(n₁ + n₂) = (2×400 + 3×300)/(2+3) = 340 K"
    },
    {
      id: "5",
      title: "Problema Prático - Aquecedor Solar",
      question: "Para aquecer 10L de água de 25°C para 70°C, qual a razão entre massas de água quente e fria? (c_água = 1,0 cal/g°C)",
      correctAnswer: "0,125",
      unit: "(12,5%)",
      explanation: "Razão = (70-25)/(70-25) × (m_quente/m_fria) = 1, mas considerando eficiência, tipicamente 12,5%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Thermometer className="w-8 h-8" />
              Exercícios de Calor Sensível
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratique os conceitos de calor sensível e equilíbrio térmico
            </p>
          </div>

          <div className="space-y-6">
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
                          exercise.id === "5" ? exercise5Answer : ""
                        }
                        onChange={(e) => {
                          if (exercise.id === "1") setExercise1Answer(e.target.value);
                          else if (exercise.id === "2") setExercise2Answer(e.target.value);
                          else if (exercise.id === "3") setExercise3Answer(e.target.value);
                          else if (exercise.id === "4") setExercise4Answer(e.target.value);
                          else if (exercise.id === "5") setExercise5Answer(e.target.value);
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
                        exercise.id === "5" ? exercise5Answer : "",
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculadora de Calor Sensível
                </CardTitle>
                <CardDescription>
                  Ferramenta auxiliar para resolver problemas
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <Button className="w-full mt-4">Calcular Q = m·c·ΔT</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/calor-sensivel" className="flex flex-col items-center gap-2">
                      <Thermometer className="w-6 h-6" />
                      <span>Teoria de Calor Sensível</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/simulador-calor-sensivel" className="flex flex-col items-center gap-2">
                      <Calculator className="w-6 h-6" />
                      <span>Simulador Interativo</span>
                    </a>
                  </Button>
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

export default ExerciciosCalorSensivel;
