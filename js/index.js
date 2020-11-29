$(function () {
    $("[data-toggle= 'tooltip']").tooltip();
    $("[data-toggle=popover]").popover();
    $('.carousel').carousel({ interval: 1000 });
    $("#SolicitarBtn").on('hidden.bs.modal', function () {
        alert("Hello World!");
    })
});