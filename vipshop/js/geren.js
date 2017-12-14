
  var username = localStorage['username'];
  console.log(username);
  $.ajax({
    url:'http://datainfo.duapp.com/shopdata/getuser.php',
    dataType:"JSONP",
    data:{userID:username},
    success:function(data){
     
    }
  })

    $('.set').click(function(){
      $(location).prop('href','set.html');
    })
     $('.close').click(function(){
      $(location).prop('href','zhuye.html');
    })
