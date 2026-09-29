import { DocumentScanner } from "./components/document-scanner"

function App() {
  return (
    <div className="min-h-screen bg-slate-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera del Portal Simulada */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Portal SQCS - Digitalización
            </h1>
            <p className="text-slate-500 text-sm">
              Tarea Asignada: Maquetar el módulo de escaneo de documentos.
            </p>
          </div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            Modo UI Sandbox
          </div>
        </div>
        
        {/* Aquí se monta el componente que el pasante va a diseñar */}
        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[700px]">
          <DocumentScanner />
        </div>
      </div>
    </div>
  )
}

export default App
