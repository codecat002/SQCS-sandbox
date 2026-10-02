import React from 'react';
import { DocumentScanner } from './components/document-scanner';
import { ExternalLink, LayoutTemplate } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header con enlaces a los prototipos */}
        <header className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <LayoutTemplate className="w-6 h-6 text-green-600" />
                Entorno de Trabajo
              </h1>
              <p className="text-slate-500 mt-1">
                Aterrizando los prototipos a componentes React.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="/src/indexCel.html" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 hover:border-green-500 hover:text-green-700 rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Prototipo Celular (HTML)
              </a>
              <a 
                href="/src/indexPC.html" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 hover:border-green-500 hover:text-green-700 rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Prototipo PC (HTML)
              </a>
            </div>
          </div>
        </header>

        {/* Zona de Trabajo React */}
        <main className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Componente React: DocumentScanner</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              Tu tarea de integración
            </span>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-600 mb-6">
              Este es el esqueleto de tu componente. El objetivo ahora es migrar gradualmente la lógica y diseño de tus prototipos HTML (arriba) hacia este componente React.
            </p>
            <DocumentScanner />
          </div>
        </main>

      </div>
    </div>
  );
}
