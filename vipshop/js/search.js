
  $(".btn").click(function(){
    
    $("#content").html("")
    
    var selectText=$(".search").val();
    
    $.ajax({
        url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
        dataType:'JSONP',
        data:{selectText:selectText},
        success:function(data){
            for(var i=0;i<data.length;i++){

                $("#content").html( $("#content").html()+`<div id="item"><img src="`+data[i].goodsListImg+`" alt="">
            <p>`+data[i].goodsName+`</p></div>`);
                
            }//循环结束
            
        }//success结束
    });//ajax结束
  })

  $(".right").click(function(){
    $(location).prop('href','zhuye.html');
  })
