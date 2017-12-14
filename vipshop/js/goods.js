$('.che').click(function(){
    var a11=localStorage['username'];
    if(a11){

     $(location).prop('href','gouwuche.html');
      console.log(a11);
    }
  else{
    $(location).prop('href','load.html');
    console.log(a11);
    }
  });

  $('.ren').click(function(){
    var a=localStorage['username'];
    if(a){

      $(location).prop('href','geren.html');
   
    }
  else{
    $(location).prop('href','load.html');
    }
  });


  var classID=location.hash.slice(7);
             $.ajax({
                        type:'get',
                        url:'http://datainfo.duapp.com/shopdata/getGoods.php',
                        dataType:'JSONP',
                        data:{classID:classID},
                        success:function(data){
                          
                            $("#className span").html(data[0].className);
                            
                            for(var i=0;i<data.length;i++){
                            $("#zhong").html($("#zhong").html()+`
                                 <div id="goods">
                                    <img src="`+data[i].goodsListImg+`" alt="">
                                    <span class='price'>¥`+data[i].price+`</span>
                                    <span class='goodsName'>`+data[i].goodsName+`</span>   
                                </div>

                                `);
                             localStorage.setItem('goodsID'+i,data[i].goodsID)
                             
                          }
                            
                            var goodsID=$("#goods img");
                            for(var i=0;i<goodsID.length;i++){
                              (function(i){
                                $(goodsID[i]).click(function(){
                                   var class1=localStorage['goodsID'+i];
                                  $(location).prop('href', 'goodslist.html#'+class1);
                                })
                              })(i)
                            }
                            var imggoods=$("#goods");
                            $(imggoods[0]).css('margin-top','160px');
                            $(imggoods[0]).next().css('margin-top','160px');
                        }
                    })

  $(".right").click(function(){
    $(location).prop('href','zhuye.html');
  })

