document.getElementById('unblockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const urlInput = document.getElementById('urlInput').value;
    const proxyFrame = document.getElementById('proxyFrame');

    // Verificar que la URL es válida
    if (urlInput) {
        // Asumimos que el proxy simplemente inserta la URL en un iframe
        proxyFrame.src = urlInput;
    } else {
        alert("Por favor, ingresa una URL válida.");
    }
});
