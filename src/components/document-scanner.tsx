import * as React from "react";
import { UploadCloud, FileText, Settings, ScanLine } from "lucide-react";

export function DocumentScanner() {
  return (
    <div className="w-full h-full min-h-[600px] border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50 p-8 text-center relative overflow-hidden">
      
      {/* 
        INSTRUCCIONES PARA EL PASANTE:
        ==================================================
        Este es el esqueleto del Módulo de Digitalización.
        Tu tarea es diseñar esta interfaz. Necesitamos que contenga:
        
        1. Un área principal grande (como un visor) que simule donde se vería la hoja recién escaneada.
        2. Un panel lateral (Sidebar) con opciones de configuración del escáner:
           - Selector de Color (Blanco y Negro / Color)
           - Selector de Calidad (DPI)
           - Botón grande principal de "ESCANEAR AHORA"
        3. Una lista pequeña o "carrusel" abajo que muestre miniaturas de las hojas que ya se escanearon en este lote.
        4. Un botón de "Guardar/Subir al Portal" al finalizar.
        
        Usa clases de Tailwind CSS para maquetar todo. 
        Puedes borrar todo el contenido de este div y empezar desde cero.
      */}

      <ScanLine className="w-16 h-16 text-slate-400 mb-4 animate-pulse" />
      <h2 className="text-xl font-semibold text-slate-700 mb-2">
        Módulo de Digitalización (En construcción)
      </h2>
      <p className="text-slate-500 max-w-md">
        Borra este mensaje y comienza a maquetar la interfaz del escáner aquí usando Tailwind CSS. Sigue las instrucciones en el código fuente.
      </p>

    </div>
  );
}
