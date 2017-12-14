$('.che').click(function(){
    var a1=localStorage['username'];
    if(a1){

     $(location).prop('href','gouwuche.html');
      console.log(a1);
    }
  else{
    $(location).prop('href','load.html');
    console.log(a1);
    }
    
  })

$('.ren').click(function(){
    var a=localStorage['username'];
    if(a){

      $(location).prop('href','geren.html');
      console.log(a);
    }
  else{
    $(location).prop('href','load.html');
    console.log(a);
    }
  });

  $.ajax({
    url:'http://datainfo.duapp.com/shopdata/getclass.php',
    success:function(data){

      var data1 =JSON.parse(data)

      var p=$(".clearfix li"); 
      for(var i=0;i<13;i++){
        $(p[i]).html(data1[i].className);
        p[i].aa=data1[i].classID;
        // localStorage.setItem('classID'+i,data1[i].classID);
      }
    }
    
    });


    $.ajax({
             type:'get',
             url:'http://datainfo.duapp.com/shopdata/getGoods.php',
             dataType:'JSONP',
             data:{classID:1},
             success:function(data){
              var img = $("#goods img");
              var p = $(".goodsName");
              var price = $('.price');
             for(var i=0;i<10;i++)
             {
             $(img[i]).attr('src',data[i].goodsListImg);
             $(p[i]).html(data[i].goodsName);
             $(price[i]).html('¥'+data[i].price);
             $(img[i]).attr('goodsID',data[i].goodsID);
             }
             }});

         var p=$(".clearfix li"); 
         for(var i=0;i<5;i++){
            (function(i){
                $(p[i]).click(function(){
                   // var classID=localStorage['classID'+i];
                   var classID=this.aa
                    $.ajax({
                        type:'get',
                        url:'http://datainfo.duapp.com/shopdata/getGoods.php',
                        dataType:'JSONP',
                        data:{classID:classID},
                        success:function(data){
                            var img = $("#goods img");
                            var p = $(".goodsName");
                            var price = $('.price');
                            
                           for(var i=0;i<10;i++)
                            {
                                $(img[i]).attr('src',data[i].goodsListImg);
                                $(p[i]).html(data[i].goodsName);
                                $(price[i]).html('¥'+data[i].price);
                                $(img[i]).attr('goodsID',data[i].goodsID);
                               console.log( $(img[i]).attr('goodsID'));
                            }            
                        }
                    })
                })
            })(i);
         }

        var goods=$("#goods img");
        for(var i=0;i<goods.length;i++){
            (function(i){
                goods[i].onclick=function(){
                    var goodsID=this.getAttribute('goodsID');
                    window.location.href='goodslist.html#'+goodsID;
                }
            })(i)
        }
