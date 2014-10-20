jQuery(function($){
  var windowH = $(window).height(); 
  var homePg = $('#home'), proPg = $('#projects');

  homePg.height(windowH);
  proPg.height(windowH);

  var sections = $('section'), c = sections.length;
  var imgAry = [], contentAry = [], locateAry = [];
  
  for( var i = 0; i < c; i++){
    currentDiv = sections[i];
    currentSec = $(currentDiv).data('magic');
    currentTop = $(currentDiv).offset().top;

    locateAry.push(currentTop);

    if(  currentSec == 'image' ){
      var tempName = currentDiv;
      imgAry.push(tempName);

    }else if( currentSec == 'na' ){
      var tempName = currentDiv;
      contentAry.push(tempName);

    }
  }


  console.log($('#about').height());

  function magicScroll(images, content, locations){
  	var st = $(window).scrollTop();
  	var wh = $(window).height();
    var fade = st,
     op = 0,
     fadeSt = 50,
     fadeEnd = 1000;


    // var backPos = st / 1.75;
    var backPos = st / 10;
  	var backPos2 = st / 5;
  	
    var projPos = st / 2.75;

    var translateVal = st / 25;
  	// var translateVal = st / 3;

  	var projScroll = st / 6;

    var firstSec = $(images[0]), secondSec = $(contentAry[0]), hero = firstSec.children();
    // var g = locations[3].offset().top;
    // var b = $(images[1]).offset().top;
    var aboutB = secondSec.height();

    // console.log(locations);
    // console.log($('#about').height());
    // console.log(st);

    console.log(aboutB + ' ' + st);

    // var aboutB = secondSec.height();

    
    if(st<=fadeSt){
     op = 1;
    }else if(st<=fadeEnd){
     op = 1 - st / fadeEnd;
    }

    firstSec.css('background-position', '0px '+ -backPos +'px');
    hero.css({"transform" : "translate(0px, "+ -translateVal +"px", "opacity": op});
    // secondSec.css("transform", "translate(0px, "+ -translateVal +"px");
    
    // for(var x=1; x<images.length; x++){
    //   var thisS = $(images[x]);
    //   thisS.css('background-position', '0px -'+ backPos2 +'px');
    // //   // images[x].css('background-position', '0px -'+ backPos +'px');

    // }  
    // console.log('st: ' + st + ' ab: ' + aboutB);
    if( aboutB < st ){
      console.log('aboutB'); 

    }
    //   console.log('thiss');
    // }
    // images.style.backgroundPosition = "0px, "+ -backPos +'px';

  	


  	// var nav = $('.navbar-inverse');
  	// var pg = $('#home');
  	// var abpg = $('#about');
  	// var prpg = $('#projects');
  	// var respg = $('#resume');
  	// var conpg = $('#contact');
  	// var blkpg = $('#blank-1');

  	// var aboutBottom = abpg.offset().top - abpg.height();
  	// var projectTop = prpg.offset().top;

  	// // console.log(aboutBottom + ' ' + st);

  	// var firstPg = document.getElementById('home'),
  	// 	aboutPg = document.getElementById('about'),
  	// 	blankpg = document.getElementById('blank-1'),
  	// 	projectsPg = document.getElementById('projects'),
  	// 	resumePg = document.getElementById('resume'),
  	// 	contactPg = document.getElementById('contact'),
  	// 	hero = document.getElementById('home-content');

   //  var backgroundDiv = $('.background-div');
   //  var translateDiv = $('.no-background-div');

    
  	
  	// // hero.addClass('move-elm');
  	// // firstPg.style.backgroundPosition = "0px, "+ -backPos +'px';
  	// // firstPg.style.transform = "translate(0px, " + -backPos + "px";
  	// pg.css('background-position', '0px '+ -backPos +'px');
  	// hero.style.transform = "translate(0px, "+ translateVal +"px)";
  	// aboutPg.style.transform = "translate(0px, "+ -translateVal +"px)";
  	// blankpg.style.transform = "translate(0px, "+ -translateVal +"px)";
  	// projectsPg.style.transform = "translate(0px, "+ -translateVal +"px)";
  	// resumePg.style.transform = "translate(0px, "+ -translateVal +"px)";
  	// contactPg.style.transform = "translate(0px, "+ -translateVal +"px)";

  	// if(aboutBottom < st){
  	// 	blkpg.css('background-position', '0px '+ -projPos +'px');
  	
  	// }

  	// hero.style.opacity = op;
  	// // console.log(hero);

  };

  $(window).scroll(function(){
  	magicScroll(imgAry, contentAry, locateAry);
  })


});