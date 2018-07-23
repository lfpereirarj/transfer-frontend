(function(){

    var current_s;
    var next_s
    var previous_s;
    var left;
    var opacity;
    var scale;

    $('.next').on('click', function(e){
        e.preventDefault();
        current_s = $(this).parent();
        next_s = $(this).parent().next();

        //$('.progress__bar li').eq($('.fieldset')).index(current_s).addClass('active');
        next_s.show()
        current_s.animate({opacity: 0},{
            step: function(now, mx){
               scale = 1 -(1 - now) * 0.2;
               left = (now * 50)+'%';
               opacity = 1 - now;
               current_s.css({'transform': 'scale('+scale+')'});
               next_s.css({'left':left, 'opacity': opacity})
            },
            duration: 800,
            complete: function(){
                current_s.hide();
            }
        })
    })

    $('.previous').on('click', function(e){
        current_s = $(this).parent();
        previous_s = $(this).parent().prev();

        //$('.progress__bar li').eq($('#step-form .form__content .fieldset')).index(current_s).addClass('active');
        previous_s.show()
        current_s.animate({opacity: 0},{
            step: function(now, mx){
               scale = 1 -(1 - now) * 0.2;
               left = ((1- now) * 50)+'%';
               opacity = 1 - now;
               current_s.css({'left': left});
               previous_s.css({'left':left, 'opacity': opacity})
            },
            duration: 800,
            complete: function(){
                current_s.hide();
            }
        })
    })

})()