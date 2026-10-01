import * as React from "react";
import { UploadCloud, FileText, Settings, ScanLine } from "lucide-react";

export function DocumentScanner() {
  return (
    <div className="w-full h-full min-h-[600px] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* 
        ========================================================
        ZONA PRINCIPAL: Área de Vista Previa
        ========================================================
        En este espacio se mostrará el documento físico una vez 
        que sea digitalizado por el escáner. Sirve como lienzo
        principal para validar que la hoja se haya capturado
        correctamente antes de guardarla.
      */}
      <div className="flex-1 flex flex-col items-center justify-center border-r border-slate-200 p-8 relative">
        <ScanLine className="w-16 h-16 text-slate-300 mb-4" />
        <p className="text-slate-400">Área de vista previa del documento</p>
      </div>

      {/* 
        ========================================================
        PANEL LATERAL: Controles y Resumen
        ========================================================
        Esta sección lateral (sidebar) agrupa las herramientas
        del operador. Su propósito es alojar:
        - La configuración de captura (resolución, formato).
        - El disparador para iniciar el escaneo.
        - Un registro visual (miniaturas) de las hojas que 
          pertenecen al lote actual.
      */}
      <div className="w-full md:w-80 bg-white p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Controles</h3>
          <p className="text-sm text-slate-500">Configuración del dispositivo</p>
        </div>
        
        {/* Controles de hardware y cola de miniaturas */}
        
      </div>
      
    </div>
  );
}
