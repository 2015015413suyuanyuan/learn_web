    var mySwiper = new Swiper('.swiper-container',{
    autoplay : 2000,
    pagination:".swiper-pagination",
    loop:true
    });

  var username = localStorage['username'];
  $('.tuichu').click(function(){
    localStorage.removeItem('username');
    $(location).prop('href','load.html');
  })

  $(".right").click(function(){
  	window.history.back();
  });
