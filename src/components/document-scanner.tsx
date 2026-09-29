import * as React from "react";
import { UploadCloud, FileText, Settings, ScanLine } from "lucide-react";

export function DocumentScanner() {
  return (
    <div className="w-full h-full min-h-[600px] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* 
        ========================================================
        SECCIÓN IZQUIERDA: Área de Visualización (Viewer)
        ========================================================
        Propósito: Aquí es donde el usuario verá la vista previa 
        de la hoja física que acaba de escanear. 
        Nota HTML: Piensa en cómo estructurar un contenedor que 
        ocupe la mayor parte de la pantalla (flex-grow).
      */}
      <div className="flex-1 flex flex-col items-center justify-center border-r border-slate-200 p-8 relative">
        <ScanLine className="w-16 h-16 text-slate-300 mb-4" />
        <p className="text-slate-400">Área de vista previa del documento</p>
      </div>

      {/* 
        ========================================================
        SECCIÓN DERECHA: Panel de Control y Opciones (Sidebar)
        ========================================================
        Propósito: Este panel lateral contendrá los controles 
        del hardware (el escáner) y el resumen de las hojas.
        Debería incluir cosas como:
        - Ajustes del escáner (resolución, color)
        - Botón de acción principal ("Escanear")
        - Una pequeña lista/galería de miniaturas (thumbnails)
          de las hojas que ya se escanearon en esta sesión.
          
        Nota HTML: Utiliza la semántica adecuada (nav, aside, section) 
        y usa flexbox/grid de Tailwind para ordenar los elementos.
      */}
      <div className="w-full md:w-80 bg-white p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Controles</h3>
          <p className="text-sm text-slate-500">Configuración del dispositivo</p>
        </div>
        
        {/* Aquí irían los controles (formularios, selects, botones) */}
        
      </div>
      
    </div>
  );
}
