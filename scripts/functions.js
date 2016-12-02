

var currentlyActive = 0;
var currentlyOpen = false;
var lastDay = 0;

goToPicture = function (nr) {

	
	//if ($('#collapseTwo').attr('aria-expanded') == "false")
	
	//$('#display div').siblings().removeClass('active');
	//$('#display div:nth-child(' + nr + ')').addClass('active');

	
	var isExpanded = $('#pictureCollapse').attr("aria-expanded");
	
	//console.log("GOT " + nr + "/" + currentlyActive + " - " + isExpanded);
	//if(!isExpanded) {
	//	$('#display div:nth-child(' + nr + ')').addClass('active');
	//	$('#pictureCollapse').collapse('show');
	//}
	
	if(currentlyOpen === false && nr !== currentlyActive && nr <= lastDay) {
		// SHOW
		
		console.log("SHOW " + isExpanded + currentlyOpen);
		$('#pictureCollapse').collapse('toggle');
		//$('.carousel').carousel(nr);
		$('#display div').siblings().removeClass('active');
		$('#display div:nth-child(' + nr + ')').addClass('active');
		currentlyActive = nr;
		currentlyOpen = true;
	} else if(currentlyOpen === true && nr !== currentlyActive && nr <= lastDay) {
		// CHANGE
		
		console.log("CHANGE " + nr);
		$('#display div').siblings().removeClass('active');
		$('.carousel').carousel(nr);
		$('#display div:nth-child(' + nr + ')').addClass('active');
		currentlyActive = nr;
	} else if(currentlyOpen === true && nr === currentlyActive) {
		// HIDE
		
		console.log("HIDE " + isExpanded + currentlyOpen);
		$('#pictureCollapse').collapse('toggle');
		currentlyActive = 0;
		currentlyOpen = false;
	} else if (currentlyOpen === true && nr > lastDay) {
		console.log("HIDE " + isExpanded + currentlyOpen);
		$('#pictureCollapse').collapse('toggle');
		currentlyActive = 0;
		currentlyOpen = false;
	} else {
		//console.log("ERROR");
	}

};

setBackground = function () {
	
	var colors = [
		"#e12a3e",
		"#84abba",
		"#e0ebf1",
		"#c67a63",
		"#5c7977",
		"#c2cb0e",
		"#93cdce",
		"#655ea1",
		"#da3521",
		"#7fbec3",
		"#225276",
		"#e0ebf1",
		"#f0bad4",
		"#cfe5d0",
		"#cddec5"
	];
	
	$('.color').each(function(i, obj) {
		$(this).css("background-color", colors[Math.floor(Math.random()*colors.length)]);
	});

};
setBackground();


removeElementById = function(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

setSlide = function(step) {
	if(step === "plus") {
		currentlyActive++;
	} else if(step === "minus") {
		currentlyActive--;
	}
}

setNumberOfDays = function() {
	var date = new Date();
	var year = date.getUTCFullYear();
	var month = date.getUTCMonth();
	var day = date.getUTCDate();
	
	//var year = 2016;
	//var month = 11;
	//var day = 4;
	
	
	//var lastDay = 0;
	if(year === 2016) {
		if(month === 11) {
			if(day > 24 ) {
				lastDay = 24;
			} else {
				lastDay = day;
			}
		} else if(month < 11) {
			lastDay = 0;
		} 		
	} else {
		lastDay = 24;
	}
	
	//console.log(day + "/" + (month+1) + "/" + year + " : " + lastDay);
	
	for(var i=(lastDay+1); i<=24; i++) {
		//console.log("REMOVE day" + i);
		//$('#display div:nth-child(' + nr + ')').addClass('active');
		removeElementById("day"+i);
	}
	
};
setNumberOfDays();

