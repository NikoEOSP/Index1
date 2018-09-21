function scalesi(){
	//$("#sideImg").height(($("#sideText").height())+"px");
	//$("#sideImg").width(($("#maincontent").width())+"px");
	
	$('.sideImg').each(function(){
		var parentHeight = $(this).parent().height() - 2;
		var parentWidth = $(this).parent().width();
		$(this).height(parentHeight);
		$(this).width(parentWidth);   	  
});
}

