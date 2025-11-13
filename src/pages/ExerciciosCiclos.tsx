import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator, RotateCcw } from "lucide-react";

const ExerciciosCiclos = () => {
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
      title: "Eficiência de Carnot",
      question: "Qual a eficiência máxima de um motor que opera entre 400K e 300K?",
      correctAnswer: "0,25",
      unit: "(25%)",
      explanation: "η = 1 - T_fria/T_quente = 1 - 300/400 = 0,25 (25%)"
    },
    {
      id: "2",
      title: "Ciclo de Otto",
      question: "Em um ciclo de Otto, a razão de compressão é 8:1. Qual a eficiência teórica? (γ = 1,4)",
      correctAnswer: "0,565",
      unit: "(56,5%)",
      explanation: "η = 1 - 1/r^(γ-1) = 1 - 1/8^0,4 = 1 - 0,435 = 0,565 (56,5%)"
    },
    {
      id: "3",
      title: "Bomba de Calor",
      question: "Uma bomba de calor opera entre 280K e 300K. Qual o COP máximo?",
      correctAnswer: "14",
      unit: "",
      explanation: "COP = T_quente/(T_quente - T_fria) = 300/(300-280) = 15"
    },
    {
      id: "4",
      title: "Trabalho Líquido",
      question: "Em um ciclo, Q_quente = 1000J e Q_fria = 600J. Qual o trabalho líquido?",
      correctAnswer: "400",
      unit: "J",
      explanation: "τ_líquido = Q_quente - |Q_fria| = 1000 - 600 = 400 J"
    },
    {
      id: "5",
      title: "Refrigerador",
      question: "Um refrigerador remove 200J de calor da câmara fria. Se consome 80J de trabalho, qual o COP?",
      correctAnswer: "2,5",
      unit: "",
      explanation: "COP = Q_fria/τ = 200/80 = 2,5"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <RotateCcw className="w-8 h-8" />
              Exercícios de Ciclos Termodinâmicos
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratique os conceitos de eficiência e coeficiente de performance
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
                  Calculadora de Eficiência
                </CardTitle>
                <CardDescription>
                  Ferramenta auxiliar para resolver problemas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>T_quente (K)</Label>
                    <Input type="number" placeholder="400" />
                  </div>
                  <div>
                    <Label>T_fria (K)</Label>
                    <Input type="number" placeholder="300" />
                  </div>
                </div>
                <Button className="w-full mt-4">Calcular η = 1 - T_fria/T_quente</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/ciclos" className="flex flex-col items-center gap-2">
                      <RotateCcw className="w-6 h-6" />
                      <span>Teoria dos Ciclos</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/simulador-ciclos" className="flex flex-col items-center gap-2">
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

export default ExerciciosCiclos;
