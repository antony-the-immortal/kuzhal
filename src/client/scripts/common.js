
/*Collapsible panel icon change*/
jQuery(function ($) {
    /** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance >= 50) {
            $('nav').addClass('fixed-header');
            if(scrollDistance >  500) {
                $(".back-to-top").fadeIn(500);
            }
        } 
        else {
            $('nav').removeClass('fixed-header');
            $(".back-to-top").fadeOut(500);
        }
    });

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(document).on("click", "nav .navbar-right a", function (e) {
        if(!$(this).hasClass('no-click-nav')) {
            e.preventDefault();
            var $el = $(this)
                , id = $el.attr('to');
            $('nav .navbar-right li').removeClass('active');
            $el.parent('li').addClass('active');
            $('html, body').animate({
                scrollTop: $(id).offset().top - 50
            }, 1000);
            return false; 
        }
        
    });
    $(document).on("click", ".back-to-top", function (e) {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */


    $(window).on('scroll', function () {
        var sections = $('div.row.section')
            , nav = $('nav')
            , nav_height = nav.outerHeight();

        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


});
