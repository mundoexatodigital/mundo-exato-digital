import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Calculator, Atom } from "lucide-react";

const ExerciciosPrimeiraLei = () => {
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
      title: "Processo Isocórico",
      question: "Um gás recebe 1000J de calor em um processo isocórico. Qual a variação da energia interna? (τ = 0)",
      correctAnswer: "1000",
      unit: "J",
      explanation: "ΔU = Q - τ = 1000 - 0 = 1000 J"
    },
    {
      id: "2",
      title: "Processo Isobárico",
      question: "Um gás recebe 1500J de calor e realiza 800J de trabalho. Qual a variação da energia interna?",
      correctAnswer: "700",
      unit: "J",
      explanation: "ΔU = Q - τ = 1500 - 800 = 700 J"
    },
    {
      id: "3",
      title: "Trabalho de Expansão",
      question: "Um gás ideal expande-se de 2L para 5L contra pressão constante de 2 atm. Qual o trabalho realizado?",
      correctAnswer: "6",
      unit: "L·atm",
      explanation: "τ = P·ΔV = 2 × (5-2) = 6 L·atm"
    },
    {
      id: "4",
      title: "Ciclo Completo",
      question: "Em um ciclo termodinâmico, Q_total = 2000J e τ_total = 1000J. Qual a variação da energia interna?",
      correctAnswer: "0",
      unit: "J",
      explanation: "Para ciclo completo: ΔU = Q_total - τ_total = 0 (volta ao estado inicial)"
    },
    {
      id: "5",
      title: "Processo Adiabático",
      question: "Em um processo adiabático, Q = 0. Se o gás realiza trabalho de 500J, qual a variação da energia interna?",
      correctAnswer: "-500",
      unit: "J",
      explanation: "ΔU = Q - τ = 0 - 500 = -500 J (energia interna diminui)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Atom className="w-8 h-8" />
              Exercícios da Primeira Lei
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratique os conceitos de energia interna e conservação de energia
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
                  Calculadora da Primeira Lei
                </CardTitle>
                <CardDescription>
                  Ferramenta auxiliar para resolver problemas
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <Button className="w-full mt-4">Calcular ΔU = Q - τ</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/primeira-lei" className="flex flex-col items-center gap-2">
                      <Atom className="w-6 h-6" />
                      <span>Teoria da Primeira Lei</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4">
                    <a href="/simulador-primeira-lei" className="flex flex-col items-center gap-2">
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

export default ExerciciosPrimeiraLei;
