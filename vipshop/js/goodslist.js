
  $('.right').click(function(){
     window.history.back();
  })

    var mySwiper = new Swiper('.swiper-container',{
    autoplay : 2000,
    pagination:".swiper-pagination",
    loop:true
    });

       var goodsID=window.location.hash.slice(1);
       localStorage.setItem(goodsID,goodsID);
       $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:'JSONP',
            data:{goodsID:goodsID},
            success:function(data){           
                console.log(data);
                var list1=data[0].detail.split('。');
                var li=$('.list li');
                for(var i=0;i<li.length;i++){
                  $(li[i]).html(list1[i]);
                }

                $('.title').html(data[0].goodsName);
                $('.xiaoshou').html('月销'+data[0].buynumber+"笔");
                $(".price").html("¥"+data[0].price);

              var img1 = data[0].imgsUrl.split(',',3);
             
              var solid=$('.swiper-slide img');
                
              $(solid[0]).attr('src',img1[2].split('"')[1]);
              $(solid[1]).attr('src',img1[0].split('"')[1]);
              $(solid[2]).attr('src',img1[1].split('"')[1]); 
              $(solid[3]).attr('src',img1[2].split('"')[1]); 
              $(solid[4]).attr('src',img1[0].split('"')[1]); 
              // console.log(img1);       

              var img= data[0].goodsBenUrl.split(',',3);
              var imglist = $("#goods img");
              $(imglist[0]).attr('src',img[0].split('"')[1])
              $(imglist[1]).attr('src',img[1].split('"')[1])
              $(imglist[2]).attr('src',img[2].split('"')[1])
            }
       })
 
       var goodsID=window.location.hash.slice(1);
       var i=0;
      $(".shopping").click(function(){
        ++i;
         var username=localStorage.getItem('username');
         if(username)
             { $.ajax({
                 url:"http://datainfo.duapp.com/shopdata/updatecar.php",
                 data:{userID:username,goodsID:goodsID,number:i},
                 success:function(data){
                     $(".jiafixed").css("display",'block');
                     $(".jiafixed").html(i);
                   }
               });
       }
       else{
        $(location).prop('href','load.html');
       }
      });

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