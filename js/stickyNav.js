var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('.headerName').height();
    mbs = $('.menuBars')
var visible = false;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr) {
    mn.addClass(mns);
    // mn.addClass('navbar-fixed-top');
    console.log('fired')
    if(!visible) {
                    mn.prepend('<h3 class="logo">Tyler Cecchi</h3>')
                    // mbs.removeClass('col-lg-offset-5 col-md-offset-5 col-sm-offset-5')
                    // mbs.addClass('menu-bars-scrolled')
                    mbs.css('font-size', '2em')
                    visible = true;
                }
  }

  else {
    mn.removeClass(mns);
    // mn.removeClass('navbar-fixed-top');
    if(visible)  {
                    $('.logo').remove()
                    mbs.css('font-size', '3em')
                    // mbs.addClass('')
                    // mbs.removeClass('')
                    // $('header').css('')

                    visible = false;
                }
  }
});
