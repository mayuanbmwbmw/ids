$(document).ready(function(){

	$(".menu-item").on("click",".menu-main",function(){

		$(this).children(".icon").toggleClass("click")
		$(this).siblings(".menu-sublist").toggle();
		$(this).children(".triangle").toggleClass("spread")
		if($(this).siblings(".menu-sublist").css("display")==="block"){
			$(this).addClass("hover");
			$(this).children(".triangle").addClass("hover")
		}else{
			$(this).removeClass("hover");
			$(this).children(".triangle").removeClass("hover")
		}
		changeFrameHeight();

	})
	.on("click",".menu-subitem",function(){
		$(".menu-subitem").removeClass("menu-subitem_active");
		$(this).addClass("menu-subitem_active");
		changeFrameHeight();
	})

});
//
//window.onresize=function(){
//	console.log("aaa")
//	winWH()
//	changeFrameHeight();
//}

function changeFrameHeight(){
	console.log("bbb")
	var ifm= document.getElementById("mainFrame");
	var subWeb = document.frames ? document.frames["mainFrame"].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
		ifm.height = $(subWeb.body).height()+20;
		// ifm.width = subWeb.body.scrollWidth;
	}
}
function winWH(){
	var winH = document.documentElement.clientHeight;
	var winW = document.documentElement.clientWidth;
	$(".content").height(winH - 70);
	$(".content .right-panel").width(winW-200-34-34);
	//$(".content .right-panel").height(winH - 70);
}

// function changeFrameWidth(){
// 	//计算iframe的宽度
// 	var winW=document.documentElement.clientWidth;
// }

function popFrameShow(url){
	$(".popup-layer iframe").attr("src",url);
	$(".popup-layer").show();
}

function popFrameHide(){
	$(".popup-layer iframe").attr("src","");
	$(".popup-layer").hide();
	// 取得浏览器的userAgent字符串
	var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Firefox") > -1) {
		window.history.back();	
	}
}



function uploadLoaded(){
	var ifm= document.getElementById("popupFrame");  
	var subWeb = document.frames ? document.frames["popupFrame"].document : ifm.contentDocument;
	var screenHeight = $(window).height();  // 当前浏览器窗口的 宽高
    var scrolltop = $(document).scrollTop();// 获取当前窗口距离页面顶部高度
    var objTop = (screenHeight - $(subWeb.body).find(".popContainer").height())/2 + scrolltop-170;
    $(subWeb.body).find(".popContainer").css("top", objTop + 'px');
}



function clear(){
	$("input").each(function(){
		var clearElement=$("<span class='clear'></span>");

		$(this).after(clearElement);
		$(this).focus(function(){
			console.log(111111)
			$(this).siblings(".clear").show();
		}).blur(function(){
			if($(this).val()){
				$(this).siblings(".clear").show();
			}else{
				$(this).siblings(".clear").hide();
			}
		})
		$(".input-wrapper").on("click",".clear",function(){
			$(this).siblings("input").val("");
			$(this).hide()
		})
	})
}


