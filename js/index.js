$(function(){
	var $w=$(".home-banner-wrapper>li").outerWidth();
	var t=setInterval(move,2000)
	function move(){
		$(".home-banner-wrapper").animate({marginLeft:-$w},1000,function(){
			$(".home-banner-wrapper>li:first").appendTo(".home-banner-wrapper")
			$(".home-banner-wrapper").css({marginLeft:0})
		})
	}
	$(".home-banner-wrapper").mouseover(function(){
		clearInterval(t);
	})
	$(".home-banner-wrapper").mouseout(function(){
		t=setInterval(move,2000)
	})
	$(".home-banner-left").click(function(){
		move();
	})
})