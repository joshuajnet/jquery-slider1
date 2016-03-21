$(document).ready(function() {	
	
	function slideshow() {
	
		$(this).append('<div class="prev">&#8249;</div><div class="next">&#8250;</div><div class="startstop"></div>');
		
		$('.next, .prev').hide();
		
		$('.slide-panel').each(function(i) {
			i = i+1;	
			$(this).wrap('<div class="slide-'+i+' slide-wrap slide-inactive"></div>');
			i++;
		});
		
		$('.slide-1').removeClass('slide-inactive');
		
		var sCount = $('.slide-panel').length;
		var count = 1;
		var n = 0;
	
		$('.next').click(function(){
			n = count;
			$('.slide-'+n).addClass('slide-inactive');	
			n=n+1;
			if(n>sCount) {
				$('.slide-1').removeClass('slide-inactive');
				count=1;
			} else {
				$('.slide-'+n).removeClass('slide-inactive');
				count++;
			}
		});
		
		$('.prev').click(function(){
			n=count;
			$('.slide-'+n).addClass('slide-inactive');
			n=n-1;
			if(n<1) {	
				$('.slide-'+sCount).removeClass('slide-inactive');
				count=sCount;
			} else {
				$('.slide-'+n).removeClass('slide-inactive');
				count--;
			}	
		});
				
		$('.startstop').click(function(){
			if($(this).hasClass('pause')) {
				$(this).removeClass('pause');
				$('.next, .prev').fadeOut(500);
			} else {
				$(this).addClass('pause');
				$('.next, .prev').fadeIn(500);
			}
			
		});
		
		
		setInterval(function(){
			if($('.startstop').hasClass('pause')) {
				
			} else {
				n = count;
				$('.slide-'+n).addClass('slide-inactive');
				n=n+1;
				if(n>sCount) {
					$('.slide-1').removeClass('slide-inactive');
					count=1;
				} else {
					$('.slide-'+n).removeClass('slide-inactive');
					count++;
				}
			}
		}, 5000);
		
	}
	
	$('.slider').each(slideshow);
});