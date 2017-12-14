
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
      var p=$("#goods p");

      for(var i=0;i<5;i++){
      	$(p[i]).html(data1[i].className);
        localStorage.setItem('class'+i,data1[i].classID);
       
      }
    }
    
    });

  var goods =$("#goods p");

  for(var i=0;i<8;i++){
    (function(i){
      $(goods[i]).click(function(){
        var class1=localStorage['class'+i];
        $(location).prop('href', 'goods.html#class='+class1);
        
      })
    })(i)
  }

  var goods1 =$("#goods img");

  for(var i=0;i<8;i++){
    (function(i){
      $(goods1[i]).click(function(){
        var class1=localStorage['class'+i];
        $(location).prop('href', 'goods.html#class='+class1);
        
      })
    })(i)
  }

  $.ajax({
    url:'http://datainfo.duapp.com/shopdata/getGoods.php',
    dataType:"JSONP",
    success:function(data){ 

      var img = $(".item img");
      var p =$(".item p");
      for(var i=0;i<8;i++){
      	$(img[i]).attr('src',data[i].goodsListImg);
      }
      for(var i=0;i<8;i++){
      	$(p[i]).html(data[i].goodsName);
        localStorage.setItem('goodsID1'+i,data[i].goodsID);
      }



    }
    
    });

   var img1=$('.item img');
  for(var i=0;i<img1.length;i++){
    (function(i){
      $(img1[i]).click(function(){
        var goodsid=localStorage['goodsID1'+i];
         $(location).prop('href', 'goodslist.html#'+goodsid);
      })
    })(i);
  }



  $(".search").click(function(){

     $(location).prop('href', 'search.html');
  });
  $(".more1").click(function(){
     $(location).prop('href', 'lianxi.html');
  })



$.ajax({
            url:"http://datainfo.duapp.com/shopdata/getBanner.php",
            dataType:'JSONP',
            success:function(data){
                console.log(data);
                var solid=$('.swiper-slide img');
                for(var i=0;i<data.length;i++){

                  localStorage.setItem('shang'+i,data[i].goodsID);
                  
                  var img1= data[i].goodsBenUrl.split(',',3);
                  $(solid[i+1]).attr('src',img1[0].split('"')[1]);
                }
              $(solid[0]).attr('src',img1[0].split('"')[1]);
              $(solid[5]).attr('src',img1[0].split('"')[1]); 
       
            }
       })

    var mySwiper = new Swiper('.swiper-container',{
    autoplay : 2000,
    pagination:".swiper-pagination",
    loop:true
    });

 var solid1=$('.swiper-slide img');
 for(var i=0;i<solid1.length-2;i++){
   (function(i){
    $(solid1[i+1]).click(function(){
        var goodsid1=localStorage['shang'+i];
        $(location).prop('href', 'goodslist.html#'+goodsid1);
    })
 })(i)
 }

