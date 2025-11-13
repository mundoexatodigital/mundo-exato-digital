import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator, Wind } from "lucide-react";

const ExerciciosGasesPerfeitos = () => {
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
      title: "Equação de Clapeyron",
      question: "Qual o volume ocupado por 2 mols de gás ideal a 300K e 2 atm? (R = 0,0821 L·atm/mol·K)",
      correctAnswer: "24,63",
      unit: "L",
      explanation: "V = n·R·T/P = 2 × 0,0821 × 300 / 2 = 24,63 L"
    },
    {
      id: "2",
      title: "Lei de Boyle",
      question: "Um gás ocupa 4L a 2 atm. Qual o volume a 4 atm? (T constante)",
      correctAnswer: "2",
      unit: "L",
      explanation: "P₁·V₁ = P₂·V₂ → 2×4 = 4×V₂ → V₂ = 2 L"
    },
    {
      id: "3",
      title: "Lei de Charles",
      question: "Um gás ocupa 6L a 273K. Qual o volume a 546K? (P constante)",
      correctAnswer: "12",
      unit: "L",
      explanation: "V₁/T₁ = V₂/T₂ → 6/273 = V₂/546 → V₂ = 12 L"
    },
    {
      id: "4",
      title: "Lei de Gay-Lussac",
      question: "Um gás está a 300K e 2 atm. Qual a pressão a 600K? (V constante)",
      correctAnswer: "4",
      unit: "atm",
      explanation: "P₁/T₁ = P₂/T₂ → 2/300 = P₂/600 → P₂ = 4 atm"
    },
    {
      id: "5",
      title: "Volume Molar",
      question: "Qual o volume ocupado por 3 mols de gás nas CNTP? (T = 273K, P = 1 atm)",
      correctAnswer: "67,2",
      unit: "L",
      explanation: "V = n·V_molar = 3 × 22,4 = 67,2 L"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Wind className="w-8 h-8" />
              Exercícios de Gases Perfeitos
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratique as leis dos gases e equação de estado
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
                  Calculadora de Gases
                </CardTitle>
                <CardDescription>
                  Ferramenta auxiliar para resolver problemas
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <Button className="w-full mt-4">Calcular V = n·R·T/P</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/gases-perfeitos" className="flex flex-col items-center gap-2">
                      <Wind className="w-6 h-6" />
                      <span>Teoria dos Gases</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/simulador-gases-perfeitos" className="flex flex-col items-center gap-2">
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

export default ExerciciosGasesPerfeitos;
