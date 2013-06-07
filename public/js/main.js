$(document).ready(function(){

	// when hover the spread button, make a share button appearing
	$(document).on('click','.button_jam.action.share.not_expanded', function(){
		$(this).css('left',-100);
		$(this).addClass('expanded').removeClass('not_expanded');
	});

	$(document).on('click','.button_jam.action.share.expanded',function(){
		$(this).css('left',0);
		$(this).addClass('not_expanded').removeClass('expanded');
	});
		

	$(document).on('initialization',function(){
		$('.header_content').css('width','100%');
		$('.header_content .header_form').fadeOut(0).fadeIn(300);
	});

	// calculating height column
	$('.concert_item').each(function(){
		$(this).find('.audios, .biography, .place_informations').css('height',$('.row.details').height());
		$('.row.details').slideUp(0);
	});

	// expand the boxs results
	$(document).on('click','.concert_item.not_expanded .expand_button, .concert_item .expand_button',function(){
		if($(this).parent().parent().find('.loader').hasClass('loader')) {
			getTracks($(this).parent().parent().find('.audios').attr('id'));
		}
<<<<<<< HEAD

		max_column = Math.max($(this).parent().parent().find('.audios ul').height(),$(this).parent().parent().find('.biography').height(),$(this).parent().parent().find('.place_informations').height());
  		//$(this).parent().parent().parent().find('.audios, .biography, .place_informations, .row.details').css('height',max_column + 50);
  		//console.log($(this).parent().parent().find('.audios').attr('id'));
  		// console.log(max_column);
  		// console.log(max_column);
  		// console.log(max_column);
  		// $('$(this)')
  		id_audio = $(this).parent().parent().find('.audios').attr('id');
  		max_column = $('#'+id_audio).height();
	  	$(this).parent().parent().parent().find('.audios, .biography, .place_informations, .row.details').css('height',max_column + 50);



=======
>>>>>>> 80145661582aac2a223a70d1ad63e1a5e718fe8e
		$(this).parent().parent().parent().find('.row.details').slideDown(300);
		$(this).parent().parent().addClass('expanded').removeClass('not_expanded');
		$(this).text('less information');
	});

	$(document).on('click','.concert_item.expanded .expand_button',function(){
		$(this).parent().parent().parent().find('.row.details').slideUp(300);
		$(this).parent().parent().addClass('not_expanded').removeClass('expanded');
		$(this).text('more information');
	});

	// hp man hover effect, randomly choose a position
	$(document).on('mouseenter', '.man', function(){
		random = Math.floor((Math.random()*10)+1);
		if(random == 1 && random == 10 )
		{
			$(this).css('backgroundPosition','20px 0px');
		}
		if(random == 2 )
		{
			$(this).css('backgroundPosition','-39px 0px');
		}
		if(random == 3 )
		{
			$(this).css('backgroundPosition','-66px 0px');
		}
		if(random == 4 )
		{
			$(this).css('backgroundPosition','-52px 0px');
		}
		if(random == 5)
		{
			$(this).css('backgroundPosition','-39px 0px');
		}
		if(random == 6 )
		{
			$(this).css('backgroundPosition','-26px 0px');
		}
		if(random == 7 )
		{
			$(this).css('backgroundPosition','-14px 0px');
		}
		if(random == 8 && random == 9  )
		{
			$(this).css('backgroundPosition','-0px 0px');
		}
	});
});
