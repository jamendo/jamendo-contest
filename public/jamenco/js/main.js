$(document).ready(function(){

	var concert_row = $('.concert_row')
	//simulate several concerts
	for(i=0;i<10;i++)
	{
		concert_row.clone().appendTo($('.result_listing'));
	}

	// when hover the spread button, make a share button appearing
	$(document).on('click','.button_jam.action.share.not_expanded', function(){
		$(this).css('left',-100);
		$(this).addClass('expanded').removeClass('not_expanded');
	});

	$(document).on('click','.button_jam.action.share.expanded',function(){
		$(this).css('left',0);
		$(this).addClass('not_expanded').removeClass('expanded');
	});
		

	// header animation form logo center to logo left + search bar right
	setTimeout(function(){
		$(document).trigger('initialization');
	},3000)

	$(document).on('initialization',function(){
		$('.header_content').css('width',960);
		$('.header_content .header_form').fadeOut(0).fadeIn(300);
	});

	// hp calculate nb of ppl according to the size of the screen
	wheight = $(window).height();
	nb_row = Math.ceil(wheight / 45);
	men_per_row = 45;
	total_men = nb_row * men_per_row;
	for(i=0;i<total_men;i++)
	{
		$('.men').append('<div class="man"></div>')
	}

	// hp top form
	top_hp_form = ((nb_row - 7)/2)*33;
	console.log((nb_row - 7)/2);
	console.log(top_hp_form);
	$('.hp_form_wrapper').css('top',top_hp_form);

	// loading top 
	top_loading = wheight/2 - 200;
	$('.content.loading').css('top',top_loading); 

	$('.home.center').css('height',$('.men').height()+40);

	// calculating height column
	$('.concert_item').each(function(){
		$(this).find('.audios, .biography, .place_informations').css('height',$('.row.details').height());
		$('.row.details').slideUp(0);
	});

	// expand the boxs results
	$(document).on('click','.concert_item.not_expanded .expand_button, .concert_item .expand_button',function(){
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
	$('.man').hover(function(){
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
