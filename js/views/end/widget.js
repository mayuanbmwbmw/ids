cssLoader("../../css/libs/jquery-ui.css");
cssLoader("../../js/plugins/common/css/jquery.ui.datepicker.date.fun8.css");
cssLoader("../../js/plugins/common/css/jquery.ui.theme.date.fun8.css");
cssLoader("../../js/plugins/dateTime/fun8/jquery-ui-timepicker-addon.min.css");
cssLoader("../../js/plugins/dateTime/fun8/main.css");
cssLoader("../../js/plugins/select/default-style/css/content_u7.css");
cssLoader("../../js/plugins/inputBt/default-style/css/content.css");
cssLoader("../../js/plugins/defaultMsg/default-style/css/content_u3.css");
cssLoader("../../js/plugins/radio/default-style/css/zl_radio_u3.css");
cssLoader("../../js/plugins/checkbox/default-style/css/zl_checkbox_u4.css");
cssLoader("../../js/plugins/dataTable/css/jquery.dataTables.min.css");
cssLoader("../../js/plugins/kindeditor-4.1.7/themes/default/default.css");
cssLoader("../../js/plugins/select2/default-style/css/select2.css");
cssLoader("../../css/index-end.css");


jsLoader("../../js/plugins/common/js/jquery.ui.core.min.js");
jsLoader("../../js/plugins/common/js/jquery.ui.widget.min.js");
jsLoader("../../js/plugins/common/js/jquery.ui.position.min.js");
jsLoader("../../js/plugins/common/js/jquery.ui.menu.min.js");
jsLoader("../../js/plugins/common/js/jquery-ui-1.10.4.custom.min.js");
jsLoader("../../js/plugins/dateTime/fun8/i18n/jquery.ui.datepicker-zh-CN.js");
jsLoader("../../js/plugins/dateTime/fun8/jquery.ui.datepicker.js");
jsLoader("../../js/plugins/dateTime/fun8/jquery-ui-timepicker-addon.js");
jsLoader("../../js/plugins/dateTime/fun8/i18n/jquery-ui-timepicker-zh-CN.js");
jsLoader("../../js/plugins/select/default-style/js/jquery.zl_select.u2.js");
jsLoader("../../js/plugins/inputBt/default-style/js/jquery.inputBt.js");
jsLoader("../../js/plugins/defaultMsg/default-style/js/jquery.defaultMsg_u3.js");
jsLoader("../../js/plugins/radio/default-style/js/jquery.zl_radio_u3.js");
jsLoader("../../js/plugins/checkbox/default-style/js/jquery.zl_checkbox_u4.js");
jsLoader("../../js/plugins/dataTable/js/jquery.dataTables.min.js");
jsLoader("../../js/plugins/niceScroll/js/jquery.nicescroll.js");
jsLoader("../../js/plugins/autoComplete-highLight/jquery.ui.autocomplete.js");
jsLoader("../../js/plugins/kindeditor-4.1.7/kindeditor-min.js");
jsLoader("../../js/plugins/kindeditor-4.1.7/lang/zh_CN.js");
jsLoader("../../js/plugins/placeholder/jquery.placeholder.js");
jsLoader("../../js/plugins/select2/default-style/js/select2.full.js");


function jsLoader(path){
	if(path.indexOf(".js") == -1)
	{
		return;
	}
	document.writeln("<script type=\'text/javascript\' src=\'"+ path +"\'></script>");
}

function cssLoader(path){
	if(path.indexOf(".css") == -1)
	{
		return;
	}
	document.writeln("<link rel=\'stylesheet\' type=\'text/css\' href=\'"+ path +"\'>");
}

 var editor;
$(document).ready(function(){
 
	//dataTable通用配置
	$('.mainTable').DataTable({
	           ordering : false,//是否启用排序
	           searching : false,//是否  启用模糊搜索
	           lengthChange: false,
	           //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
	           deferRender : true,
	           //国际化设置（设置中文显示）
	           language : {
	               search : '<span class="label label-success">搜索：</span>',//右上角的搜索文本，可以写html标签
	               paginate : {//分页的样式内容。
	                   previous : "上一页",
	                   next : "下一页",
	                   first : "<span class='firstpage'></span>",
	                   last : "<span class='lastpage'></span>"
	               },
	               zeroRecords : "没有内容",//table tbody内容为空时，tbody的内容。
	               //下面三者构成了总体的左下角的内容。
	               info : "共 <span style='color:#F9C284'>_MAX_ </span>条 ",//左下角的信息显示，大写的词为关键字。  共_PAGES_ 页，显示第_START_ 到第 _END_ ，共_MAX_ 条
	               infoEmpty : "0条记录",//筛选为空时左下角的显示。
	               infoFiltered : ""//筛选之后的左下角筛选提示，
	           },
	           paging : true,
	           pagingType : "full_numbers"//分页样式的类型full_numbers

	});

  //列表操作按钮tips
        $(".mainTable tbody").on("mouseover mouseout","span",function(event){
            if(event.type == "mouseover"){
             $(this).children("i").show();
            }else if(event.type == "mouseout"){
             $(this).children("i").hide();
            }
        });
    
   //表单文本框通用配置

    $(".textfield2 :text").each(function(){
      var w = $(this).parents(".textfield2").attr("data-width")?$(this).parents(".textfield2").attr("data-width"):350;
      $(this).css("width",(w-38)+"px");
    
      var icon = $(this).siblings(".icon")[0];
      $(icon).on("click",function(){
        $(this).siblings("input").val("");
        $(this).hide();
      });
      $(this).bind("input propertychange",function(){
        if($(this).val()!=="")
        {
          $(icon).css("display","inline-block");
        }
        else{
          $(icon).hide();
        }
      });
      $(this).bind("blur",function(){

        if($(this).val()=="")
      {
          $(this).val(" ");
          
      }
      });
    });


    $('input, textarea').placeholder({customClass:'my-placeholder'});

    //上传组件通用配置
    $(".uploadfield :text").each(function(){
      var icon = $(this).siblings(".icon")[0];
      $(icon).on("click",function(){
        $(this).siblings("input").val("");
        $(this).hide();
      });
      $(this).bind("input propertychange",function(){
        $(icon).show();
      });
      
    });



   //表单日历通用配置
    $(".datefield").each(function () {
        var w = $(this).attr("data-width")?$(this).attr("data-width"):350;
        $(this).css("width",w+"px");

        $(this).children("input").datepicker({
        marker: [],
        prevFun: function(){},
        nextFun: function(){},
          showButtonPanel:true
        });

         $(this).inputBt({
          w: w
          ,h: 30
         });
    });

   //表单datatimepicker通用配置
   $( ".datetimefield>input" ).datetimepicker({
    dateFormat:'yy-mm-dd',
    timeFormat:'hh:mm:ss',
    prevFun: function(){},
    nextFun: function(){},
    showSecond:false
    })
   $( ".datetimefield").inputBt({
    w: 350
    ,h: 30
   });


    //表单范围日历通用配置
    var dateFormat = "yy-mm-dd",
         from = $( "div.from input" )
           .datepicker({
             defaultDate: "+1w",
          marker: [],
          prevFun: function(){},
          nextFun: function(){},
            showButtonPanel:true,
           })
           .on( "change", function() {
             to.datepicker( "option", "minDate", getDate( this ) );
           }),
         to = $( "div.to input" ).datepicker({
           defaultDate: "+1w",
          prevFun: function(){},
          nextFun: function(){},
            showButtonPanel:true,
         })
         .on( "change", function() {
           from.datepicker( "option", "maxDate", getDate( this ) );
         });

       function getDate( element ) {
         var date;
         try {
           date = $.datepicker.parseDate( dateFormat, element.value );
         } catch( error ) {
           date = null;
         }

         return date;
       }
       $(".daterangefield").find(".icon").click(function(){
           $(this).siblings("input").trigger("focus");
         });
       $(".daterangefield input").bind("blur",function(){


      if($(this).val()=="")
    {

      $(this).val(" ");

    }
      });


//弹出层通用配置

$(".modalPop-1 .close").click(function(){
  $(".modalPop-1").hide();
});
$(".modalPop-2 .close").click(function(){
  $(".modalPop-2").hide();
});
$(".modalPop-3 .close").click(function(){
  $(".modalPop-3").hide();
});
$(".modalPop-1 .closebtn").click(function(){
    $(".modalPop-1").hide();
});


$(".modalPop-3 .closebtn").click(function(){
  $(".modalPop-3").hide();
});


   //表单下拉框通用配置
     $(".dropdownfield select").zl_select({
         w: 350
         , h:30
         , items_w: "348"
     });

     $(".dropdownfield-260 select").zl_select({
         w: 260
         , h: 30
         , items_w: "258"
     });
     $(".dropdownfield-195 select").zl_select({
         w: 195
         , h: 30
         , items_w: "193"
     });

     $(".dropdownfield-840 select").zl_select({
         w: 840
         , h: 30
         , items_w: "838"
     });
     $(".dropdownfield-120 select").zl_select({
        w: 120
        , h: 30
        , items_w: "118"
     });

     


   //表单多选按钮通用配置
     $(".checkboxfield :checkbox").zl_checkbox();
   //表单按钮通用配置
     $(".radiofield :radio").zl_radio();


   //页面搜索框的按钮行为 
   $("#query").click(function(){
    $(".querybox").show();
    window.top.changeFrameHeight();
    
  });

  $("#import").click(function(){
      $(this).siblings("input:file").click();
    });

  $(".querybox #conform").click(function(){
    alert("点击确认");
  });
  $(".querybox #reset").click(function(){

    $(".normal-input input").val("");
    $(".normal-input .icon").css("display","none");
    $(".datefield input").val("");
    $(".daterangefield input").val("");

      $(".dropdownfield").each(function() {
        // $(this).find(".select-drop li").removeClass("down");
        // $(this).find(".select-drop li:first").addClass("down");
        // var first=$(this).find(".select-drop li:first").text();
        // $(this).find(".select-container span").text(first);
        // $(this).find("select").val("");
        var opselected = $(this).find("select option[selected='selected']").attr("value");
        opselected = typeof (opselected) == "undefined" ? "" : opselected;
        $(this).find("select").val(opselected);

        $(this).find("select").siblings().remove();
        $(this).find("select").removeClass("zl_select_ele");
        $(this).find("select").zl_select({
          w : 350,
          h : 30,
          items_w : "348"
        });
      });
  });

  $(".querybox #cancel").click(function(){
    $(".querybox").hide(500);
    setTimeout(function(){
      window.top.changeFrameHeight();
    },520);
  });

//富文本编辑器-wangEditor


    KindEditor.ready(function(K) {
      editor = K.create('textarea[name="richtext"]', {
        resizeType : 1,
                  allowPreviewEmoticons : false,
                  allowImageUpload : false,
                  items : [
                    'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                    'insertunorderedlist', '|', 'emoticons', 'image', 'link']
      });
    });




  //Nicescroll插件
  $(".modalPop .popContent").niceScroll({
      autohidemode:false
  });


  $(".image-box").niceScroll({
      autohidemode:false
  });

  $(".file-box").niceScroll({
      autohidemode:false
  });
  
  $(".rangefield select").zl_select({
     w: 130
     , h: 30
     , items_w: "128"
  });

  $(".rangefield").on("focus",".select-container,input",function(){
    $(".rangefield .textwrap").css("border","1px solid #F8C284");
    $(".rangefield .textwrap").css("background-color","#fff");
    $(".select-container span").css("color","#444");

  })
  .on("blur",".select-container,input",function(){
    $(".rangefield .textwrap").css("border","1px solid #F5F5F5");
    $(".rangefield .textwrap").css("background-color","#F5F5F5");
  });

  $(".autoselectfield").each(function () {
      var w = $(this).attr("data-width")?$(this).attr("data-width"):350;
      $(this).children("select").css("width",w);
      $(this).children("select").select2();
  });




});


 /* 异步初始化下拉框的方法
 option_html:select中包含的option的选项的html片段
 element_id:最外层（normal-input）div的id
 width:下拉框的长度
 */

function init_select(option_html,element_id,width){
 $("#"+element_id+" select").html(option_html);
 $("#"+element_id+" select").zl_select({
     w: width
     , h: 30
     , items_w: width-2+""
 });
}


function init_autoComplete(element_id,source,defaultData){
  $( "#"+element_id+" :text").autocomplete({
    source: source,
    focus: function( event, ui ) {
		//$( "#"+element_id+" :text").val( ui.item.label );
		//return false;
	},
	select: function( event, ui ) {
		$( "#"+element_id+" :text").val( ui.item.label );
		$( "#"+element_id+"-id" ).val( ui.item.value );
		$( "#"+element_id+"-id" ).removeAttr("sel");
		return false;
	},
	change: function( event, ui ) {
		if(ui.item != null){
			$( "#"+element_id+" :text").val( ui.item.label );
			$( "#"+element_id+"-id" ).val( ui.item.value );
			$( "#"+element_id+"-id" ).removeAttr("sel");
			return false;
		}else{
			if($( "#"+element_id+"-id" ).attr("sel")){
				$( "#"+element_id+"-id" ).removeAttr("sel");
				return false;
			}
			$( "#"+element_id+"-id" ).val( "" );
		}
	},
	response: function(event, ui) {
		$( "#"+element_id+"-id" ).removeAttr("sel");
		if (ui.content != null) {
			$.each(ui.content, function(i, o) {
				if (o.label == $(event.target).val()) {
					$( "#"+element_id+"-id" ).val(o.value);
					$( "#"+element_id+"-id" ).attr("sel",true);//标志位，判断是否在查询值集中存在过。
					return;
				}
			})
		}
		return true;
	},
    defaultData: defaultData
  });
}