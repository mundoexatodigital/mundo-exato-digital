import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PhysicsLesson from "./pages/PhysicsLesson";
import CalorSensivel from "./pages/CalorSensivel";
import CalorLatente from "./pages/CalorLatente";
import GasesPerfeitos from "./pages/GasesPerfeitos";
import PrimeiraLei from "./pages/PrimeiraLei";
import Ciclos from "./pages/Ciclos";
import Exercicios from "./pages/Exercicios";
import SimuladorCalorSensivel from "./pages/SimuladorCalorSensivel";
import SimuladorCalorLatente from "./pages/SimuladorCalorLatente";
import SimuladorGasesPerfeitos from "./pages/SimuladorGasesPerfeitos";
import SimuladorPrimeiraLei from "./pages/SimuladorPrimeiraLei";
import SimuladorCiclos from "./pages/SimuladorCiclos";
import ExerciciosCalorSensivel from "./pages/ExerciciosCalorSensivel";
import ExerciciosCalorLatente from "./pages/ExerciciosCalorLatente";
import ExerciciosGasesPerfeitos from "./pages/ExerciciosGasesPerfeitos";
import ExerciciosPrimeiraLei from "./pages/ExerciciosPrimeiraLei";
import ExerciciosCiclos from "./pages/ExerciciosCiclos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/physics-lesson" element={<PhysicsLesson />} />
          <Route path="/calor-sensivel" element={<CalorSensivel />} />
          <Route path="/calor-latente" element={<CalorLatente />} />
          <Route path="/gases-perfeitos" element={<GasesPerfeitos />} />
          <Route path="/primeira-lei" element={<PrimeiraLei />} />
          <Route path="/ciclos" element={<Ciclos />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/simulador-calor-sensivel" element={<SimuladorCalorSensivel />} />
          <Route path="/simulador-calor-latente" element={<SimuladorCalorLatente />} />
          <Route path="/simulador-gases-perfeitos" element={<SimuladorGasesPerfeitos />} />
          <Route path="/simulador-primeira-lei" element={<SimuladorPrimeiraLei />} />
          <Route path="/simulador-ciclos" element={<SimuladorCiclos />} />
          <Route path="/exercicios-calor-sensivel" element={<ExerciciosCalorSensivel />} />
          <Route path="/exercicios-calor-latente" element={<ExerciciosCalorLatente />} />
          <Route path="/exercicios-gases-perfeitos" element={<ExerciciosGasesPerfeitos />} />
          <Route path="/exercicios-primeira-lei" element={<ExerciciosPrimeiraLei />} />
          <Route path="/exercicios-ciclos" element={<ExerciciosCiclos />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
