jQuery(function($){
	var prjShowcase = $('.get_screen_height');
	var showcaseSide = $('#project-title-project > aside.active-side'),
		showcaseList = $('.project-nav-wrapper > ul'),
		tempSide = $('.temp-sidebar');

  	var wh = $(window).height(),
  		ph = $('#projects').height(),
  		slh = showcaseList.height();

  		// console.log(slh);

  	var projectTop = $('#projects').offset().top,
  		projectBottom = $('#projects').offset().top + ph,
  		greyArea = $('#projects').height() - wh;
  	// console.log(tempSide);
  		projectBottomX = projectBottom + greyArea;
  
  	prjShowcase.height(ph);


  	var myProjects = $('.project-info'),
  		projectCount = myProjects.length;

  	var positionArry = [];
  	
  	for( var i = 0; i < projectCount; i++ ){
  		var thisProject = myProjects[i],
  			theID = thisProject.id,
  			theTitle = theID.split('-')[0],

  			thePosition = $(thisProject).offset().top;

  			console.log(theTitle + ": " + thePosition);

  		positionArry.push({theTitle: thePosition});
  		// console.log(thisProject);
  		// console.log(theTitle);
  	}
  	console.log(positionArry);

  	$(window).scroll(function(){
  		var st = $(window).scrollTop(),
  			stb = st + wh;
  		var showcaseBottom = st + slh;

  		// console.log(showcaseBottom + ' ' + projectBottom);

  		// console.log(st + ' ' + $(window).height() + ' '+ stb);
		if(st > projectTop){
			tempSide.show();
			showcaseList.addClass('fix-sidebar');
		}else{
			tempSide.hide();
			showcaseList.removeClass('fix-sidebar bottom-sidebar');
		}
		if( showcaseBottom > projectBottom){
			// console.log('it works again');
			tempSide.hide();
			showcaseList.addClass('bottom-sidebar').removeClass('fix-sidebar');
			
		}else if(showcaseBottom < projectBottom && st > projectTop){
			showcaseList.addClass('fix-sidebar').removeClass('bottom-sidebar');

		}
		// if(stb > projectBottom){
		// 	console.log('it works');
		// 	// tempSide.hide();
		// 	showcaseSide.addClass('bottom-sidebar').removeClass('fix-sidebar');
		// }
		// if(st > projectTop && st > projectBottom){
		// 	if(stb > projectBottom){
		// 		// tempSide.hide();
		// 		// showcaseSide.removeClass('fix-sidebar').addClass('bottom-sidebar');
		// 	}			
		// }


  	});
  
});