$(function() {
    $('.start').click(function(){
    	// alert(123);
    	var count = 0;
      var  min=0.1;
      var time=60000*min;

      var countdown = setInterval(CountDown, time*0.01 );
      $('.stop').show();
      $('.start').hide()

      function CountDown() {
            $(".time").html(count);
            count++;
            var num=count*3.6;

            function outtime(){
               $(".chaoshi").html(((count-100)/100*min).toFixed(2));
               }
                        
           if (num <= 180) {
       						   $('.circle').find('.right').css('transform', "rotate(" + num + "deg)");
       					 } 
                
       			else  if(num<=360){
          					$('.circle').find('.right').css('transform', "rotate(180deg)");
          					$('.circle').find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                 }

            else if (num <= 540) {
                    $('.circle').find('.left').css('transform', "rotate(0deg)");
                    $('.circle').find('.right').css('transform', "rotate(" + (num - 360) + "deg)");
                     outtime();
                 } 
            else if (num <= 720){
                    $('.circle').find('.right').css('transform', "rotate(540deg)");
                    $('.circle').find('.left').css('transform', "rotate(" + (num - 540) + "deg)");
                       outtime();
                 }
            else(
                       outtime()
                   )
                
            if (count == 100) {
                    $(".circle").css("background","rgb(237, 120, 120)");
                 }
            if (count == 150) {
                    $(".circle").css("background","red");
                  }
            if (count == 280) {
                          // alert("严重超时3")
                            // clearInterval(countdown);
                 }
               stop();
                
                }
          function stop(){
          $('.stop').click(function(){
          $('.stop').hide();
          $('.start').show();
          clearInterval(countdown);
        })
        }
                            })     
              });