$(document).ready(function () {


    let menu = true;

    $('.MenuNew img').click(function () {

        if (menu){
            $('.linkNew_two').show();
        }
        else{
            $('.linkNew_two').hide();
        }

        menu = !menu;
    });


    $('.small a').mouseover(function (e) { //объект для блокировки стандартного поведения ссылки
        e.preventDefault(); //блокировки стандартного поведения

        if ($('.big img').attr('src') != $(this).attr('href')) {

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.small a').click(function (e) { 
        e.preventDefault();
    });

    

    // нажатие на кнопку "-"
    // $('.button').click(function () {
    //     $('.gallery').slideToggle();
    //     if ($('.button').text() == '+') {
    //         $('.button').text('-')
    //     } else {
    //         $('.button').text('+')
    //     }
    // });

    $('.small a img').mouseover(function () { // Выделение выбранной картинки (css - св-ва)

        $(this).fadeTo(600, 0.6).css(
            {
                border: '2px solid rgb(81, 125, 130)',
            }
        )
    });

    $(document).mouseout(function () {
        $('.small a img').fadeTo(0, 1).css(
            {
                border: 'none',
            });
    });

    

$('.payment').click(function () {                   // открыть по кнопке
    $('.overlay').fadeIn();
});

$('.close-form').click(function () {           // закрыть на крестик
    $('.overlay').fadeOut();
});

// $(document).mouseup(function () {           // закрыть по клику вне окна
//     $('.overlay').fadeOut();
// });


$('.register').click(function () {                  // открыть по кнопке
    $('.registrForm').fadeIn();
});

$('.rfbut').click(function () {                  // закрыть на кнопку
    $('.registrForm').fadeOut();
});





});// конец




