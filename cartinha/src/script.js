$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
  
    // Ao clicar no envelope
    envelope.click(function() {
      envelope.toggleClass("open").toggleClass("close");
    });
  
    // Ao clicar no botão "Abrir"
    btn_open.click(function() {
      envelope.addClass("open").removeClass("close");
    });
  
    // Ao clicar no botão "Resetar"
    btn_reset.click(function() {
      envelope.removeClass("open").addClass("close");
    });
  });
  