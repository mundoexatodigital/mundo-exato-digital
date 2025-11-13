import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator, Zap } from "lucide-react";

const ExerciciosCalorLatente = () => {
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
      title: "Fusão do Gelo",
      question: "Quanto calor é necessário para fundir completamente 200g de gelo a 0°C? (L_fusão = 80 cal/g)",
      correctAnswer: "16000",
      unit: "cal",
      explanation: "Q = m·L = 200 × 80 = 16.000 cal"
    },
    {
      id: "2",
      title: "Vaporização da Água",
      question: "Quanto calor é liberado quando 150g de vapor d'água a 100°C condensam completamente? (L_condensação = 540 cal/g)",
      correctAnswer: "81000",
      unit: "cal",
      explanation: "Q = m·L = 150 × 540 = 81.000 cal (liberados)"
    },
    {
      id: "3",
      title: "Mudança de Estado - Vaporização",
      question: "Quanto calor é necessário para vaporizar 50g de água a 100°C? (L_vaporização = 540 cal/g)",
      correctAnswer: "27000",
      unit: "cal",
      explanation: "Q = m·L = 50 × 540 = 27.000 cal"
    },
    {
      id: "4",
      title: "Problema Combinado",
      question: "Quanto calor é necessário para transformar 100g de gelo a -10°C em vapor a 100°C? (L_fusão = 80 cal/g, L_vaporização = 540 cal/g, c_água = 1,0 cal/g°C)",
      correctAnswer: "72100",
      unit: "cal",
      explanation: "Q_total = m·c·Δθ + m·L_fusão + m·L_vaporização = 100×1×10 + 100×80 + 100×540 = 72.100 cal"
    },
    {
      id: "5",
      title: "Congelamento da Água",
      question: "Quanto calor é liberado quando 300g de água a 0°C congelam completamente? (L_solidificação = 80 cal/g)",
      correctAnswer: "24000",
      unit: "cal",
      explanation: "Q = m·L = 300 × 80 = 24.000 cal (liberados)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-8 h-8" />
              Exercícios de Calor Latente
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratique os conceitos de mudanças de estado físico
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
                  Calculadora de Calor Latente
                </CardTitle>
                <CardDescription>
                  Ferramenta auxiliar para resolver problemas
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <Button className="w-full mt-4">Calcular Q = m·L</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/calor-latente" className="flex flex-col items-center gap-2">
                      <Zap className="w-6 h-6" />
                      <span>Teoria de Calor Latente</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/simulador-calor-latente" className="flex flex-col items-center gap-2">
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

export default ExerciciosCalorLatente;
