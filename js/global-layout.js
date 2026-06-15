window.addEventListener('DOMContentLoaded', () => {
    const backButton = document.createElement('a');
    backButton.href = '../index.html';
    // Este botón flotante se adapta de forma sutil y elegante en la esquina
    backButton.className = "fixed top-4 left-4 z-50 bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-1 transition-all hover:scale-105 border border-slate-700";
    backButton.innerHTML = "← Volver al Índice";
    
    document.body.appendChild(backButton);
});