$(window).scroll(function(){
		// 滚动条距离顶部的距离 大于 200px时
		if($(window).scrollTop() >= 100){
		$(".index_nav").css("box-shadow","0px 2px 4px rgba(0, 0, 0, 0.05)")
		} else{
		$(".index_nav").css("box-shadow","none")
		}
		if($(window).scrollTop() >= 600){
		$(".backtop").css("display","block")
		} else{
		$(".backtop").css("display","none")
		}
		
		if($(window).scrollTop() >= 160){
			$(".left_pos").css("position","fixed").css('top','72px')
		} else{
			$(".left_pos").css("position","fixed").css('top','196px')
		}
		});
		if($(window).scrollTop() >= 600){}
		$().ready(function(){
			$("#marquee").kxbdMarquee({
			  isEqual:true,         //所有滚动的元素长宽是否相等,true,false 
			  loop:0,                 //循环滚动次数，0时无限         
			  direction:"left",       //滚动方向，"left","right","up","down"         
			  scrollAmount:1.2,     //步长         
			  scrollDelay:20,      //时长
			})
		});

		$(function(){
		  $(".backtop").click(function() {
		      $("html,body").animate({scrollTop:0}, 500);
		  }); 
		})