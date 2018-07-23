(function(){

    var current_s;
    var next_s
    var previous_s;
    var left;
    var opacity;
    var scale;
    

    const isValid = function(fieldset){
    //console.log('teste 2');

        var valid = true

        fieldset.find('.form-control').each(function(){
            if($(this).val() == ''){
                $(this).addClass('is-invalid');
                valid = false;
            }else{
                $(this).removeClass('is-invalid');
                
            }
            
        })

        if(valid){
            fieldset.find('.next').removeClass('disabled');
        }

        return valid;
        
    }

    $('.form-control').on('change', function(){
        const fieldset = $(this).parents('.fieldset');
        isValid(fieldset);
    })

    $('.form-control').on('blur', function(){
        const fieldset = $(this).parents('.fieldset');
        isValid(fieldset);
    })

    $('.next').on('click', function(e){
        e.preventDefault();
        const fieldset = $(this).parent('.fieldset');

        if(!$(this).hasClass('disabled')){
            current_s = $(this).parent();
            next_s = $(this).parent().next();

            $('.progress__bar li').eq($('fieldset').index(current_s)).addClass('active');
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
        }else {
            isValid(fieldset);
        }
        
    })

    $('.previous').on('click', function(e){
        e.preventDefault();
        current_s = $(this).parent();
        previous_s = $(this).parent().prev();

        $(".progress__bar li").eq($("fieldset").index(current_s)).removeClass("active");
        previous_s.show()
        current_s.animate({opacity: 0},{
            step: function(now, mx){
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1-now) * 50)+"%";
               opacity = 1 - now;
               current_s.css({'left': left});
               previous_s.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_s.hide();
            }
        })
    })

})()