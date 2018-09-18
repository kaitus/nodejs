// Comando para establecer la comunicacion

var socket = io();

var serchParams = new URLSearchParams(window.location.search);

if (!serchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = serchParams.get('escritorio');

var label = $('small');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay mas tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
    });
});