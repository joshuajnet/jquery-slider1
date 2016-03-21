# jquery-slider1

A simple jquery slideshow with start/stop, autoplay, and next/prev controls.

HTML - must wrap in a div (with class '.slider' here, but really the div can any class or id, so long as it is referenced with the slideshow() function). All individual slide divs must have the class '.slide-panel'. Content can be anything in each div.

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
		
CSS - The main div is given CSS properties which make it full screen, but it can either be wrapped in a div with a specified width and height, or the CSS may be changed.

		.slider {
			position: relative;
			top: 50%;
			 left: 50%;
			 min-width: 100%;
			 min-height: 100%;
			 width: auto;
			  height: auto;
			  z-index: 0;
			  -ms-transform: translateX(-50%) translateY(-50%);
			   -moz-transform: translateX(-50%) translateY(-50%);
			   -webkit-transform: translateX(-50%) translateY(-50%);
			   transform: translateX(-50%) translateY(-50%);
		}
		
		.slide-wrap {
			position: absolute;
			display: block;
		    	min-width: 100%;
		    	min-height: 100%;        
		    	z-index: 100;
			opacity: 1;
			transition: opacity 800ms ease-in-out;
		   	-moz-transition: opacity 800ms ease-in-out;
		   	-webkit-transition: opacity 800ms ease-in-out;
		   
		}
		
		.slide-inactive {
			opacity: 0;
		}
		
		.next, .prev {
			background: transparent;
			position: absolute;
			bottom: 50%;
			margin-bottom: -18px;
			font-size: 36px;
			line-height: 36px;
			cursor: pointer;
			z-index: 200; 
		}
		
		.next {
			right: 10px;
		}
		
		.prev {
			left: 10px;	
		}
		
		.startstop {
			position: absolute;
			width: 15px;
			height: 15px;
			bottom: 10px;
			right: 10px;
			font-size: 15px;
			z-index: 200;
			cursor: pointer;
		}
		
		.startstop:before {
			content: "\25BA";
		}
		
		.pause:before {
			content: "\275A \275A" !important;
			letter-spacing: 1px;
		}

JS - include slider.js in your file and use this in the HTML doc.

		<script type='text/javascript'>
			$(document).ready(function() {	
				$('.slider').slideshow();
			});
		</script>		

