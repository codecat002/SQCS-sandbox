import { KpiCard } from "./components/kpi-card"
import { Users, AlertCircle, CheckCircle2 } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Sandbox UI (Entorno Pasante)
        </h1>
        <p className="text-gray-600 mb-8">
          Tarea: Mejora estas tarjetas KPI. Revisa el código en src/components/kpi-card.tsx
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Módulos "Sanitizados" e inyectados con datos hardcodeados */}
          <KpiCard 
            label="Usuarios Activos" 
            value="1,245" 
            subtitle="+12% esta semana" 
            icon={Users} 
            tone="blue" 
          />
          <KpiCard 
            label="Tickets Pendientes" 
            value="43" 
            subtitle="Prioridad Alta" 
            icon={AlertCircle} 
            tone="rose" 
          />
          <KpiCard 
            label="Tickets Resueltos" 
            value="892" 
            subtitle="Este mes" 
            icon={CheckCircle2} 
            tone="emerald" 
          />
        </div>
      </div>
    </div>
  )
}

export default App
