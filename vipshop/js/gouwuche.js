$('.right').click(function(){
    window.history.back()
  });

var username=localStorage.getItem('username');

//第一个ajax开始
$.ajax({
    url:"http://datainfo.duapp.com/shopdata/getCar.php",
    dataType:"JSONP",
    data:{userID:username},
    success:function(data){

      var jia=0;
      var jian=0;
      for(var i=0;i<data.length;i++){


        $('.xiangxi').html($('.xiangxi').html()+
          ` 
          <div class='every'>
         
          <p class="weipinziying"> 
          <input type='checkbox' class='checkbox1' name='fuxuan' ></input> 
          唯品自营
          </p>
          <img src="`+data[i].goodsListImg+`" alt="" class="goodsImg">

          <div class="zi">
            <span class="goodsName">`+data[i].goodsName+`</span>
            <span class='price'>¥`+data[i].price+`</span>
          </div>

          <div class="tianjia">
            <input type="button" value="-" class="jian" id="`+data[i].goodsID+`">
            <input type="text" value="`+data[i].number+`" class="number">
            <input type="button" value="+" class="jia" id="`+data[i].goodsID+`"><span class='X'>X</span>
          </div>

          </div>
          
          `
          );
      
        console.log(data[i].goodsName,data[i].price,data[i].number,data[i].goodsListImg);
      }//渲染页面，循环结束

      $('.xiangxi').html($('.xiangxi').html()+`
            <div>
            <span  class='jiage'></span>
              </div>
            `);
      $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
            $(".jiage").html(' ');
            $(".jiage").css('margin-bottom','400px');
            $(".footer1").html('总金额  ¥ 0');


      //商品数量减少点击事件开始
      var k=0;
      $('.jian').click(function(){
        ++k;
        console.log('goodsID'+$(this).attr('id'));
        var val=$(this).next().val();
        var val3=Number(val);

        if(val == 1){
          $(this).next().attr('disabled','disabled');
          $(this).css('background-color','rgb(242,242,243)');
        }
        else{
           $(this).css('background-color','white');
        $(this).next().val(val3-1);

        }

      
        $.ajax({
               url:"http://datainfo.duapp.com/shopdata/updatecar.php",
               data:{userID:username,goodsID:$(this).attr('id'),number:$(this).next().val()},
               success:function(data){
                var sum = 0;
                var checkBox = $('.checkbox1');
                for(var i = 0,len = checkBox.length;i<len;i++){
                   
                    (function(i){
                      if(checkBox[i].checked){
                        var every0=$(checkBox[i]).parent().next().next().children()[1];
                        var price1=$(every0).html().slice(1);
                        var every1=$(checkBox[i]).parent().next().next().next().children()[1];
                        var number1=$(every1).val();
                        sum+=number1*price1
                      }
                    })(i)
                    
                }
                if(sum == 0)
            {
              $(".jiage").html(' ');
            }
        else
            {
              $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
              $(".jiage").html('¥ '+sum);
              $(".jiage").css('margin-bottom','400px');
              $(".footer1").html('总金额  ¥ '+sum);
            }  
                 }
             });


      });
    //商品数量减少点击事件结束


    //删除商品点击事件开始
    $('.X').click(function(){

             $.ajax({
               url:"http://datainfo.duapp.com/shopdata/updatecar.php",
               data:{userID:username,goodsID:$(this).prev().attr('id'),number:'0'},
               success:function(data){
                  $(location).prop('href','gouwuche.html');
                 }
             });
    });
    //删除商品点击事件结束


  //商品数量增加点击事件开始
    $('.jia').click(function(){
      var val11=$(this).prev().val();
      var val22=Number(val11);
      if(val22 >=1)
          $(this).prev().prev().css('background-color','white');
          $(this).prev().css('background-color','white');
          $(this).prev().val(val22+1);

       $.ajax({
             url:"http://datainfo.duapp.com/shopdata/updatecar.php",
             data:{userID:username,goodsID:$(this).attr('id'),number:$(this).prev().val()},
             success:function(data){
              var sum = 0;
              var checkBox = $('.checkbox1');
              for(var i = 0,len = checkBox.length;i<len;i++){
                 
                  (function(i){
                    if(checkBox[i].checked){
                      var every0=$(checkBox[i]).parent().next().next().children()[1];
                      var price1=$(every0).html().slice(1);
                      var every1=$(checkBox[i]).parent().next().next().next().children()[1];
                      var number1=$(every1).val();
                      sum+=number1*price1
                    }
                  })(i)
                  
              }
              if(sum == 0)
          {
            $(".jiage").html(' ');
          }
      else
          {
            $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
            $(".jiage").html('¥ '+sum);
            $(".jiage").css('margin-bottom','400px');
            $(".footer1").html('总金额  ¥ '+sum);
          }

               }
           });
      });
    //商品数量增加点击事件结束

    //复选框事件开始

    var checkAll = $('.radio1');
     var checkBox = $('.checkbox1');
     checkBox.on('click',function () {
            //如果是选中
            if(this.checked){
                //默认全选标记为true
                var checkedAllFlag = true;
                //其他的复选框
                for(var i = 0,len = checkBox.length;i<len;i++){
                    //如果有一个没有被选中，就将全选标记为false
                    if(!checkBox[i].checked){
                        checkedAllFlag = false;
                        break;
                    }
                }
                //设置全选的状态
                checkAll.prop("checked", checkedAllFlag);
            }else{
                //如果中取消选中 ，那全选就直接设为未选中
                $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
              $(".jiage").html('¥ 0');
              $(".jiage").css('margin-bottom','400px');
                $(".footer1").html('总金额  ¥ 0');
                checkAll.prop("checked", false);
            }
        });

    //复选框事件结束





    //改变价格函数开始
    var checkAll = $('.radio1');
    var checkBox = $('.checkbox1');
    checkBox.on('click',function () {
    var sum =0;
             for(var i = 0,len = checkBox.length;i<len;i++){
                   
                    (function(i){
                      if(checkBox[i].checked){
                         var every0=$(checkBox[i]).parent().next().next().children()[1];
                        var price1=$(every0).html().slice(1);
                        var every1=$(checkBox[i]).parent().next().next().next().children()[1];
                        var number1=$(every1).val();
                        sum+=number1*price1
                      }
                    })(i)
                    
                }
            if(sum == 0)
              {
                $(".jiage").html(' ');
              }
            else
              {
                $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
                $(".jiage").html('¥ '+sum);
                $(".jiage").css('margin-bottom','400px');
                $(".footer1").html('总金额  ¥ '+sum);
              }

    });
    //改变价格函数结束


  }//success 函数 结束
});//ajax结束


//实现 全选 全不选
$(".radio1").click(function(){
         //判断当前点击的复选框处于什么状态$(this).is(":checked") 返回的是布尔类型
         var sum=0;
      if($(this).is(":checked")){
          $(".checkbox1").prop("checked",true);

 $.ajax({
              url:"http://datainfo.duapp.com/shopdata/getCar.php",
              dataType:"JSONP",
              data:{userID:username},
              success:function(data){            
               for(var i=0;i<data.length;i++){
                  sum+=data[i].number*data[i].price;
              }

              if(sum == 0)
                  {
                    $(".jiage").html(' ');
                  }
              else
                  {
                    $(".every:last").css('border-bottom','9px dotted rgb(230,226,220)');
                    $(".jiage").html('¥ '+sum);
                    $(".jiage").css('margin-bottom','400px');
                    $(".footer1").html('总金额  ¥ '+sum);
                  }
              }

          });
      }
      else{
          $(".checkbox1").prop("checked",false);
          $(".footer1").html('总金额  ¥ 0');
      }
 });


