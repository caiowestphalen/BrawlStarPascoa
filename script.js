$(document).ready(function() {
  var pistaAtual = 1;

  // Quando o botão "INICIAR A CAÇA" for clicado
  $('#startButton').click(function() {
    $('#inicio').addClass('d-none'); // Esconder a seção de início
    $('#pistas').removeClass('d-none'); // Mostrar a primeira pista
    mostrarPista(pistaAtual); // Mostrar a primeira pista
  });

  // Quando o botão "ENCONTREI O OVO" for clicado
  $('#pistas').on('click', '.encontrar-ovo-button', function() {
    $('#pista' + pistaAtual).addClass('d-none'); // Esconder a pista atual
    pistaAtual++; // Avançar para a próxima pista
    if (pistaAtual <= 4) {
      mostrarPista(pistaAtual); // Mostrar a próxima pista
    } else {
      $('#pistas').addClass('d-none'); // Esconder todas as pistas
      $('#parabens').removeClass('d-none'); // Mostrar a mensagem de parabéns
    }
  });

  // Função para adicionar a sombra ao texto após 5 segundos
  setTimeout(function() {
    $('.textoSombra').css('text-shadow', '2px 2px 2px black');
  }, 5000);
});

function mostrarPista(numeroPista) {
  $('#pista' + numeroPista).removeClass('d-none'); // Mostrar a próxima pista
}
