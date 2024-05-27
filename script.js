$(document).ready(function() {
    // Inicializar el flipbook
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true
    });

    // Función para reproducir el video de la página actual
    function reproducirVideo(pageNumber) {
        // Seleccionar el video dentro de la página actual
        var video = $('#flipbook .page' + pageNumber + ' video')[0];
        if (video) {
            // Si se encuentra un video, reproducirlo
            video.play();
        }
    }

    // Evento que se dispara cuando se voltea una página
    $('#flipbook').bind('turned', function(event, page, view) {
        // Detener la reproducción de todos los videos en todas las páginas
        $('#flipbook video').each(function() {
            this.pause();
        });

        reproducirVideo(page);
    });

  
    reproducirVideo(2);
    
     $('.audio-button').click(function() {
        var audioId = $(this).data('audio');
        var audioElement = document.getElementById(audioId);

        if (audioElement) {
            if (audioElement.paused) {
                $('audio').each(function() {
                    this.pause();
                });
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    });
});





   