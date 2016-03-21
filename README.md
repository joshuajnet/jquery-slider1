# jquery-slider1

A simple jquery slideshow with start/stop, autoplay, and next/prev controls.

HTML - must wrap in a div, called '.slider' here. All individual slide divs must be called '.slide-panel'. Content can be anything in each div.

		<div class="slider">
			<div class="slide-panel">
				One
			</div>
			<div class="slide-panel">
				Two
			</div>
			<div class="slide-panel">
				Three
			</div>
			<div class="slide-panel">
				Four
			</div>	
		</div>
		
CSS:



JS call:

		$('.slider').slideshow();

