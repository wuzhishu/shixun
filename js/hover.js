$().ready(function(){
				$(".s1").mouseover(function(){
					$(".sec_o").css("display","block");
				});
				$(".s1").mouseout(function(){
					$(".sec_o").css("display","none");
				});
				$(".s2").mouseover(function(){
					$(".sec_t").css("display","block");
				});
				$(".s2").mouseout(function(){
					$(".sec_t").css("display","none");
				});
				$(".s3").mouseover(function(){
					$(".sec_tr").css("display","block");
				});
				$(".s3").mouseout(function(){
					$(".sec_tr").css("display","none");
				});
				$(".s4").mouseover(function(){
					$(".sec_f").css("display","block");
				});
				$(".s4").mouseout(function(){
					$(".sec_f").css("display","none");
				});
				
				$(".sec_nav").mouseover(function(){
					$(this).css("display","block");
				});
				$(".sec_nav").mouseout(function(){
					$(this).css("display","none");
				});
				
				$(".sec_o").mouseover(function(){
					$(".s1").css("background","#004b8c");
					$(".s1").css("color","#fff");
				});
				$(".sec_o").mouseout(function(){
					$(".s1").css("background","#fff");
					$(".s1").css("color","#4b4b4b");
				})
				$(".sec_t").mouseover(function(){
					$(".s2").css("background","#004b8c");
					$(".s2").css("color","#fff");
				});
				$(".sec_t").mouseout(function(){
					$(".s2").css("background","#fff");
					$(".s2").css("color","#4b4b4b");
				})
				$(".sec_tr").mouseover(function(){
					$(".s3").css("background","#004b8c");
					$(".s3").css("color","#fff");
				});
				$(".sec_tr").mouseout(function(){
					$(".s3").css("background","#fff");
					$(".s3").css("color","#4b4b4b");
				})
				$(".sec_f").mouseover(function(){
					$(".s4").css("background","#004b8c");
					$(".s4").css("color","#fff");
				});
				$(".sec_f").mouseout(function(){
					$(".s4").css("background","#fff");
					$(".s4").css("color","#4b4b4b");
				})
				
				$(".sec_nav").mouseout(function(){
					$(".active").css("background","#004b8c");
					$(".active").css("color","#fff");
				});
			})


$().ready(function(){
			$(".banner_fi").mouseover(function(){
				$(".banner_se").css("transform","translateX(90%)");
				$(".banner_th").css("transform","translateX(0%)");
				$(".banner_fo").css("transform","translateX(0%)");
				$(".banner_hleft").css("opacity","1");
				$(this).find('.banner_hleft').css("opacity","0");
			})
			$(".banner_se").mouseover(function(){
				$(this).css("transform","translateX(0%)");
				$(".banner_th").css("transform","translateX(0%)");
				$(".banner_fo").css("transform","translateX(0%)");
				$(".banner_hleft").css("opacity","1");
				$(this).find('.banner_hleft').css("opacity","0");
			})
			$(".banner_th").mouseover(function(){
				$(this).css("transform","translateX(-90%)");
				$(".banner_se").css("transform","translateX(0%)");
				$(".banner_fo").css("transform","translateX(0%)");
				$(".banner_hleft").css("opacity","1");
				$(this).find('.banner_hleft').css("opacity","0");
			})
			$(".banner_fo").mouseover(function(){
				$(".banner_th").css("transform","translateX(-90%)");
				$(".banner_se").css("transform","translateX(0%)");
				$(this).css("transform","translateX(-90%)");
				$(".banner_hleft").css("opacity","1");
				$(this).find('.banner_hleft').css("opacity","0");
			})
			$(".banner_item").mouseover(function(){
				$(".wenz").css("opacity","0");
				$(this).find(".wenz").css("opacity","1");
				$(".wenz").css("transform","translateY(0px)");
				$(this).find(".wenz").css("transform","translateY(18px)");
			})
		})

$().ready(function(){
	$(".xxk li").click(function(){
		$(this).addClass("on");
        $(this).siblings().removeClass("on");
    })
	$(".xxk li:nth-of-type(1)").click(function(){
		$(".nr_o").addClass("on_ac");
        $(".nr_o").siblings().removeClass("on_ac");
 })
	$(".xxk li:nth-of-type(2)").click(function(){
		$(".nr_t").addClass("on_ac");
        $(".nr_t").siblings().removeClass("on_ac");
 })
	$(".xxk li:nth-of-type(3)").click(function(){
		$(".nr_s").addClass("on_ac");
        $(".nr_s").siblings().removeClass("on_ac");
 })
	
})
