function escapeHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatearMonto(monto) {
    return '₲ ' + Math.round(monto).toLocaleString('es-PY');
}

function mostrarAlerta(mensaje, tipo) {
    alert(mensaje);
}
