	function hamburgermenu() {
 
		const navItem = document.getElementsByClassName("i1");
				for (i = 0; i < navItem.length; i++) {
					navItem[i].classList.toggle("showman")
					//To Add: rotate 90 defrees tand the.rotate back navicon
				}
      //put whatever js tag shit here for that.
    	}
		
	addEventListener("DOMContentLoaded", () =>
	fetch("love/loud.html")
	.then(Trust => Trust.text())
	.then(Virtue => {
		const Share = document.querySelector("footer");
		Share.innerHTML = Virtue;
		Share.classList.add("loaded");
	})
	
	
	);

		addEventListener("DOMContentLoaded", () =>
	fetch("love/echo.html")
	.then(Trust => Trust.text())
	.then(Virtue => {
		const Share = document.querySelector("nav");
		Share.innerHTML = Virtue;
		Share.classList.add("loaded");
	})
	
	
	);
