$(document).ready(function(){
	//Открывает pop up
	$('body').on('click','.header_text-mention',function(){

		$.fancybox.open({
			src : '#popup',
			opts : {
				touch : false,
			}
		})
	});
	//открывает popup-ticket
	$('body').on('click','.header_ticket-mention',function(){

		$.fancybox.open({
			src : '#popup_ticket',
			opts : {
				touch : false,
			}
		})
	});

//отслеживает отмеченный чекбокс и открывает второе окно
$('body').on('click','.booking_button',function(){
	if($('.popup').css('display')=='none'){
		$.fancybox.open({
			src : '#popup',
			opts : {
				touch : false,
				helpers: {
					overlay: {
      							locked: false // отключаем блокировку overlay
      						}
      					}

      				}

      			})
	}

	var id1 = $('.popup_form').find('input:checked').attr('id');
	var id2 = $('.booking_form').find('input:checked').attr('id');
	if(id1 || id2){

		$('.popup_form_second').removeClass('popup_form_second-clouse');
		$('.popup_form_first').addClass('popup_form_first-clouse');
	}
	switch (id1){
		case 'b1':
		$('.popup_secondpart-leftblock-section-newyear').removeClass('newyear');
		$('.popup_secondpart-leftblock-section-rosafest').addClass('rosafest');
		$('.popup_secondpart-leftblock-section-picseason').addClass('picseason');
		break;
		case 'b2':
		$('.popup_secondpart-leftblock-section-rosafest').removeClass('rosafest');
		$('.popup_secondpart-leftblock-section-newyear').addClass('newyear');
		$('.popup_secondpart-leftblock-section-picseason').addClass('picseason');
		break;
		case 'b3':
		$('.popup_secondpart-leftblock-section-picseason').removeClass('picseason');
		$('.popup_secondpart-leftblock-section-newyear').addClass('newyear');
		$('.popup_secondpart-leftblock-section-rosafest').addClass('rosafest');
		break;
	}
	switch (id2){
		case 'a1':
		$('.popup_secondpart-leftblock-section-newyear').removeClass('newyear');
		$('.popup_secondpart-leftblock-section-rosafest').addClass('rosafest');
		$('.popup_secondpart-leftblock-section-picseason').addClass('picseason');
		break;
		case 'a2':
		$('.popup_secondpart-leftblock-section-rosafest').removeClass('rosafest');
		$('.popup_secondpart-leftblock-section-newyear').addClass('newyear');
		$('.popup_secondpart-leftblock-section-picseason').addClass('picseason');
		break;
		case 'a3':
		$('.popup_secondpart-leftblock-section-picseason').removeClass('picseason');
		$('.popup_secondpart-leftblock-section-newyear').addClass('newyear');
		$('.popup_secondpart-leftblock-section-rosafest').addClass('rosafest');
		break;
	}
	return false;
});
	//закрывает второе окно и открывает первое в случаи изменения даты
	$('body').on('click','.popup_secondpart-anothertrip,.header_text-mention',function(){
		$('.popup_secondpart-leftblock-section-newyear').addClass('newyear');
		$('.popup_secondpart-leftblock-section-rosafest').addClass('rosafest');
		$('.popup_secondpart-leftblock-section-picseason').addClass('picseason');

		$('.popup_form_second').addClass('popup_form_second-clouse');
		$('.popup_form_first').removeClass('popup_form_first-clouse');
		$('.booking_form-date').prop('checked',false);
	});


//маска телефона
$(function(){$(".phone").mask("8(999)-999-9999");})
$(function(){$(".popup_tickets-input-phone").mask("8(999)-999-9999");})
//маска даты
$(function(){$(".popup_tickets-input-date").mask("99.99.2020");})
//валидация тура
$("#main_form").validate({
	rules:{
		name:{
			required: true,
		},
		phone:{
			required: true,
		},
	},
	messages:{
		name:{
			required: "Заполните имя!",

		},
		phone:{
			required: "Номер!",

		},
	}

});
//валидация билетов
$("#tickets_client").validate({
	rules:{
		name1:{
			required: true,
		},
		phone1:{
			required: true,
		},
		date1:{
			required: true,
		},
		city:{
			required: true,
		},
		number:{
			required: true,
		},
	},
	messages:{
		name1:{
			required: "Заполните имя!",

		},
		phone1:{
			required: "Номер!",

		},
		date1:{
			required: "Укажите дату вылета!",

		},
		city:{
			required: "Укажите город вылета",

		},
		number:{
			required: "Укажите количество пассажиров!",

		},
	}

});
//запрос AJAX запрос тура
$('#main_form').submit(function(){
	if($(this).find('input.error').length==0){
		$.post('ajax/ajax1.php',{
			name:$('input[name=name]').val(),
			phone:$('input[name=phone]').val(),
			date:$('input[name=date]:checked').val(),
			ticket:$('input[type=checkbox]:checked').val()
		},function(data,status){
			if(data==1){
				$.fancybox.open($("#popup2"));
			}
		});
	}

	return false;
});

//запрос AJAX запрос авиабилетов
$('#tickets_client').submit(function(){
	if($(this).find('input.error').length==0){
		$.post('ajax/ajax2.php',{
			name:$('input[name=name1]').val(),
			phone:$('input[name=phone1]').val(),
			date:$('input[name=date1]').val(),
			city:$('input[name=city]').val(),
			number:$('input[name=number]').val(),
			ticket:$('input[type=checkbox]:checked').val()
		},function(data,status){
			if(data==1){
				$.fancybox.open($("#popup2"));
			}
		});
	}

	return false;
});
//слайдер блоков

$('.inform_statistic').slick({
	slidesToShow: 3,  
	slidesToScroll: 3,
	spaceBetween: 100,
	adaptiveHeight: true,
	prevArrow:'<img src="images/left.svg">',
	nextArrow:'<img src="images/right.svg">',
	responsive: [{
		breakpoint: 1000,
		settings: {
			slidesToShow: 2,  
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,  
			slidesToScroll: 1
		}
	}]
});
	//открывает информацию о стоимости

	$('body').on('click','.popup_secondpart-cost-mention',function(){
		$.fancybox.open({
			src : '#popup_secondwindow',
			opts : {
				touch : false,
			}
		})
	});

//функции для ресайза первой страницы
var myHeight,
    myWidth;
function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
           var myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }


        resizeBack(myWidth, myHeight);
    }

    function resizeBack(width, height){
        var k = ( height < 820 )?0.25:0.4,
            zoom = 0.7,
            height = $(".b-1").height();

        if( height/width > 1144/2048 ){
            $(".b-back, .b-back-cont").css({
                width : "auto",
                height : height + (1144 - height)*zoom
            });
        }else{
            $(".b-back, .b-back-cont").css({
                width : width + (2048 - width)*zoom,
                height : "auto"
            });
        }

        var top = ($(".b-back-cont").height() - height) * k;

        $(".b-back-cont").css({
            top : -1 * top
        });
    }

});













