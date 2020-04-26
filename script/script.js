
		window.onscroll = function() {scrollFunction()};
		var mobile = window.matchMedia("(max-width: 600px)");
		var tablet = window.matchMedia("(max-width: 768px)");
		var desktop = window.matchMedia( "(min-width: 769px)");
		
		function scrollFunction(){
			if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80){
			document.getElementById("navBar").style.opacity = "80%";
			}
			else {
			
			document.getElementById("navBar").style.opacity = "100%";
			}
		}
			


		
		
		
	function openForm(){
		if(mobile.matches || tablet.matches) {
			
		document.getElementById("sideForm").style.width = "100%";
		} else {
			document.getElementById("sideForm").style.width = "33.3%";
		}
	}
	
	
	
	
		
	function openMiddleForm(){
		if (mobile.matches || tablet.matches){
	document.getElementById("middleForm").style.width = "100%";
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.left = "0%";
	
	
		} else{
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.width = "33.3%";
		}
	
	}
		
		
	function openRightForm(){
		if (mobile.matches || tablet.matches){
			document.getElementById("rightForm").style.width = "100%";
		} else {
	document.getElementById("rightForm").style.width = "33.4%";
		}
	}
		
		
	function closeSideForm(){
	document.getElementById("sideForm").style.width = "0%";
	
	}
	
	function closeMiddleForm(){
	document.getElementById("middleForm").style.height = "0%";
	document.getElementById("middleForm").style.visibility = "hidden";
	}
	
	function closeRightForm(){
	document.getElementById("rightForm").style.width="0%";
	}
		
	function hamburger(){
		var menu = document.getElementById("navMenu");
		if (menu.style.visibility == "hidden"){
			menu.style.visibility = "visible";
		} else {
			menu.style.visibility = "hidden";
		}
		
		
	}

	
		



		
		
	
		