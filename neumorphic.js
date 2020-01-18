function home() {
    $('#pay').collapse('hide');
    $('#home').collapse('show');
    $('#section1').addClass('neofooteractive');
    $('#section2').removeClass('neofooteractive');
    $('#section3').removeClass('neofooteractive');

}

function pay() {
    $('#home').collapse('hide');
    $('#pay').collapse('show');
    $('#section1').removeClass('neofooteractive');
    $('#section2').addClass('neofooteractive');
    $('#section3').removeClass('neofooteractive');
}

function info() {
    $('#home').collapse('toggle');
    $('#pay').collapse('toggle');
    $('#section1').removeClass('neofooteractive');
    $('#section2').removeClass('neofooteractive');
    //$('#section3').addClass('neofooteractive');
}