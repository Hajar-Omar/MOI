$(document).ready(function () {

    // $('html').addClass('en');
    // var BootstrapAR = document.querySelector('link[rel=stylesheet][href*="bootstrap-rtl"]');
    // var stylesheetAR = document.querySelector('link[rel=stylesheet][href*="app-rtl"]');

    // stylesheetAR.disabled = true;
    // BootstrapAR.disabled = true;
    // $('.lang a').on('click', function () {
    //     if ($('html').hasClass('en')) {
    //         $('html').addClass('ar').removeClass('en');
    //         $(this).text('English');
    //         stylesheetAR.disabled = false;
    //         BootstrapAR.disabled = false;
    //     } else {
    //         $('html').addClass('en').removeClass('ar');
    //         $(this).text('عربى');
    //         stylesheetAR.disabled = true;
    //         BootstrapAR.disabled = true;
    //     }

    // });


    /* -------------------------------------------------*/

    if ($("#fullpage").length > 0) {
        //fullpage
        var myFullpage = new fullpage('#fullpage', {
            anchors: ['0', '1', '2', '3', '4', '5'],
            sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            css3: true,
            // verticalCentered: true,
            // navigation: true,
            // slideSelector: '.horizontal-scrolling',
            // navigationPosition: 'right',
            // navigationTooltips: ['HOME', 'SERVICES', 'NEWS & EVENTS', 'LOCATIONS', 'SOCIAL MEDIA', 'CONTACT US'],
            responsiveWidth: 1023,
            afterResponsive: function (isResponsive) {
                //fullpage_api.destroy('all');

            },
            //     css3: true,
            // slidesNavigation: true,
            // normalScrollElements: '.slide',
            slidesNavigation: true,
            scrollHorizontally: true,
            scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
            // afterSlideLoad: function(section, origin, destination, direction){
            // 	console.log({
            // 		section: section,
            // 		origin: origin,
            // 		destination: destination,
            // 		direction: direction
            // 	});
            // },
            // onSlideLeave: function(section, origin, destination, direction){
            // 	console.log({
            // 		section: section,
            // 		origin: origin,
            // 		destination: destination,
            // 		direction: direction
            // 	});
            // },
            // afterLoad: function () {
            //     //alert();
            //     //var speed = 150;
            //     //var placeholderTextParts = $('.search_txt').attr('placeholder').split('');
            //     //$('.search_txt').attr('placeholder', '')
            //     //curIndex = 0;

            //     //function addToPlaceholder() {
            //     //    var curVal = $(".search_txt").attr("placeholder");
            //     //    $(".search_txt").attr("placeholder", curVal + placeholderTextParts[curIndex]);
            //     //    curIndex++;
            //     //    if (curIndex < placeholderTextParts.length) {
            //     //        setTimeout(addToPlaceholder, speed);
            //     //    }
            //     //}
            //     //setTimeout(addToPlaceholder, 500);
            //     /* Placeholder Typewriter */


            // },
            // onLeave: function (origin, destination, direction) {
            //     var leavingSection = this;
            //     //after leaving section 2
            //     if (origin.index == 0 && direction == 'down') {
            //         // alert("Going to section 2!");
            //         //   .fp-viewing-0 .section#section0, .fp-viewing-1-0 .section#section1, .fp-viewing-2 .section#section2,
            //         //  .fp-viewing-3 .section#section3, .fp-viewing-4 .section#section4, .fp-viewing-5 .section#section5 {
            //         //     -webkit-animation-name: slideInRight;
            //         //     animation-name: slideInRight;
            //         //     animation-delay: 0s !important;
            //         //$('.section#section0').addClass('test');
            //     } else if (origin.index == 3 && direction == 'up') {
            //         // alert("Going to section 3!");
            //     }
            // },
            // onSlideLeave: function( anchorLink, index, slideIndex, direction) {
            //     if(anchorLink == 'fifthSection' && slideIndex == 1) {
            //       $.fn.fullpage.setAllowScrolling(true, 'up');
            //       $header_top.css('background', 'rgba(0, 47, 77, .3)');
            //       $nav.css('background', 'rgba(0, 47, 77, .25)');
            //     }
            //   }
            //, afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
            //         $.fn.fullpage.setAllowScrolling(false, 'up');
            //         $(this).css('background', '#374140');
            //         $(this).find('h2').css('color', 'white');
            //         $(this).find('h3').css('color', 'white');
            //         $(this).find('p').css({
            //             'color': '#DC3522',
            //             'opacity': 1,
            //             'transform': 'translateY(0)'
            //         });
            //     }
            // },
            // onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            //     if (anchorLink == 'fifthSection' && slideIndex == 1) {
            //         $.fn.fullpage.setAllowScrolling(true, 'up');
            //     }
            // }
        });


        // add tooltip to fullpage horizontal slides
        var navTooltip = ['HOME', 'SERVICES', 'NEWS & EVENTS', 'LOCATIONS', 'SOCIAL MEDIA', 'CONTACT US'];
        $('.fp-slidesNav.fp-bottom ul li').each(function (i) {
            $(this).append('<span class="fp-tooltip">' + navTooltip[i] + '</span>')
        })
    }





    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         $.fn.fullpage.setResponsive(false);
    //     } else {
    //         $.fn.fullpage.setResponsive(true);
    //         //document.body.style.backgroundColor = "pink";
    //     }
    // }

    // var x = window.matchMedia("(max-width: 900px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes



    // custum scroll
    // $("#newsScroll").mCustomScrollbar({
    //     axis: "x",
    //     theme: "minimal-dark",
    //     autoExpandScrollbar: true,
    //     advanced: { autoExpandHorizontalScroll: true }
    // });

    if ($(".fav-list").length > 0) {

        $(".fav-list").mCustomScrollbar({
            theme: "minimal-dark"
        });
    }


    //search placeholder animation
    if ($(".search_txt").length > 0) {
        var placeholderText = [
            "I want to search for ...", "Services types?", "Services numbers..."
        ];

        $('.search_txt').placeholderTypewriter({ text: placeholderText });
    }
    // $(".newsScrolls").mCustomScrollbar({
    //     axis: "x",
    //     theme: "minimal-dark",
    //     autoExpandScrollbar: true,
    //     advanced: {
    //         autoExpandHorizontalScroll: true
    //     }
    // });
    // $("#eventsScroll").mCustomScrollbar({
    //     axis: "x",
    //     theme: "minimal-dark",
    //     autoExpandScrollbar: true,
    //     advanced: {
    //         autoExpandHorizontalScroll: true
    //     }
    // });

    // menu
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');

        $("#sidebar .toanimate").removeClass($("#sidebar .toanimate").data("animate")); blurBody();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');

        $("#sidebar .toanimate").addClass($("#sidebar .toanimate").data("animate")); blurBody();
    });

    // settings
    $('#dismissSettings, .overlay').on('click', function () {
        $('#sidebarSettings').removeClass('active');

        $("#sidebarSettings .toanimate").removeClass($("#sidebarSettings .toanimate").data("animate")); blurBody();
    });

    $('#sidebarCollapseSettings').on('click', function () {
        $('#sidebarSettings').addClass('active');

        $("#sidebarSettings .toanimate").addClass($("#sidebarSettings .toanimate").data("animate")); blurBody();
    });

    // advanced-search-btn
    $('#dismissAdvancedSearch, .overlay').on('click', function () {
        $('#sidebarAdvancedSearch').removeClass('active');

        $("#sidebarAdvancedSearch .toanimate").removeClass($("#sidebarAdvancedSearch .toanimate").data("animate")); blurBody();
    });

    $('#advanced-search-btn').on('click', function () {
        $('#sidebarAdvancedSearch').addClass('active');

        $("#sidebarAdvancedSearch .toanimate").addClass($("#sidebarAdvancedSearch .toanimate").data("animate")); blurBody();
    });

    // search-header-menu
    $('#dismissSearch, .overlay').on('click', function () {
        $('#sidebarSearch').removeClass('active');

        $("#sidebarSearch .toanimate").removeClass($("#sidebarSearch .toanimate").data("animate")); blurBody();
    });

    $('#search-header-menu').on('click', function () {
        $('#sidebarSearch').addClass('active');

        $("#sidebarSearch .toanimate").addClass($("#sidebarSearch .toanimate").data("animate")); blurBody();
    });

    //services boxes
    $('.bck-serv').on('click', function () {
        $('#service-slider').removeClass('active zoomIn').addClass("zoomOut");
        return false;
    });

    $('.serv-box').on('click', function () {
        $('#service-slider').removeClass("zoomOut").addClass('active zoomIn');
    });
    //menu
    // var trigger = $('.hamburger'),
    //     overlay = $('.overlay'),
    //     isClosed = false;

    // trigger.click(function () {
    //     hamburger_cross();
    // });

    // function hamburger_cross() {

    //     if (isClosed == true) {
    //         overlay.hide();
    //         trigger.removeClass('is-open');
    //         trigger.addClass('is-closed');
    //         isClosed = false;
    //     } else {
    //         overlay.show();
    //         trigger.removeClass('is-closed');
    //         trigger.addClass('is-open');
    //         isClosed = true;
    //     }
    // }

    // $('[data-toggle="offcanvas"]').click(function () {
    //     $('#wrapper').toggleClass('toggled');
    // });

    //network animated
    //var canvasDiv = document.getElementById('particle-canvas');
    //var options = {
    //    particleColor: '#ccc',
    //    background: '#f4f4f4',
    //    interactive: true,
    //    speed: 'high',
    //    density: 'high'
    //};
    //var particleCanvas = new ParticleNetwork(canvasDiv, options);





    //counters
    $.fn.is_on_screen = function () {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };



    if (Number($('.count').text()).toFixed(2).length > 0) { // if target element exists in DOM
        //  if ($('.count').is_on_screen()) { // if target element is visible on screen after DOM loaded

        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

                {

                    duration: 8000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });



        });


        //  } else {
        // $('.log').html('<div class="alert">target element is not visible on screen</div>'); // log info
        // }
    }
    // var count = 0;
    // $(window).scroll(function () {


    //     if ($('.counters').length > 0 && count == 0) {
    //         if ($('.counters').is_on_screen()) {
    //             // console.log("can you see me scroll");
    //             $('.count').each(function () {
    //                 $(this).prop('Counter', 0).animate({
    //                     Counter: $(this).text()
    //                 }, {
    //                         duration: 3000,
    //                         easing: 'swing',
    //                         step: function (now) {
    //                             $(this).text(Math.ceil(now));
    //                         }
    //                     });
    //             });
    //             count = 1;
    //         }

    //     }
    // });



    // $('.item.carousel_center').attr('aria-hidden','false')
    // $(this).prop('Counter', 0)








    //custom checkboxes
    $('.custom-checkboxes input[type="checkbox"]').on('change', function () {
        if ($(this).is(':checked')) {
            if ($('body').hasClass('red-theme')) {
                $(this).parents('.checkbox').css('background', '#db1435');
            }
            else if ($('body').hasClass('green-theme')) {
                $(this).parents('.checkbox').css('background', '#128948');
            }
            else if ($('body').hasClass('blue-theme')) {
                $(this).parents('.checkbox').css('background', '#1a517e');
            }
            else if ($('body').hasClass('greyScale-theme')) {
                $(this).parents('.checkbox').css('background', '#808080');
            }
            else {
                $(this).parents('.checkbox').css('background', '#b48a34');
            }
            $(this).parent('label').css('color', '#ffffff');
        } else {
            $(this).parents('.checkbox').css('background', '#ffffff');
            $(this).parent('label').css('color', '#313131');

        }
    });




    // pseudo active
    if ($('#docs').length) {
        var sidenav = $('ul.side-nav').find('a');
        var url = window.location.pathname.split('/');
        var url = url[url.length - 1];

        sidenav.each(function (i, e) {
            var active = $(e).attr('href');

            if (active === url) {
                $(e).parent('li').addClass('active');
                return false;
            }
        });
    }


    //stop animation when destroy fullpage.js
    if (window.matchMedia("(max-width: 1023px)").matches) {
        $('.section.fp-section').removeClass('animated').css('width', '100%');
        $('.socialBox, .news, .events, .contactBoxs, .service-sub .animated ').css('animation', 'none');
        // $('html').removeClass('fp-enabled');
        // $('body').removeClass('fp-responsive');
    } else { }



    //blur body
    function blurBody() {
        //if ($('#sidebarSettings').hasClass('active') || $('#sidebar').hasClass('active') || $('#sidebarAdvancedSearch').hasClass('active') || $('#sidebarSearch').hasClass('active')) {
        //    $(this).toggleClass("blur4");
        //    $('#fullpage, header').toggleClass("blur4");
        //}
        //else {
        //    $('#fullpage, header').toggleClass("blur4");
        //}
        $('#fp-nav *,.fp-tableCell, header, .top-content, .main-contnr, footer, .chatbot.inner, .fp-slidesNav.fp-bottom, .chatbot').toggleClass("blur4");
    }



    //Themes
    function ThemeSettings() {
        $('#sidebarSettings').removeClass('active');
        blurBody();
        $("#sidebarSettings .toanimate").removeClass($("#sidebarSettings .toanimate").data("animate"));
        if ($("body").hasClass("red-theme")) {
            if ($('#map').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-red.png', 'map');
            }
            //contact us map tab
            if ($('#map-contact').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-red.png', 'map-contact');
            }
            $('.counters section:nth-of-type(1) img').attr('src', './images/serv-icon1-red.png');
            $('.counters section:nth-of-type(2) img').attr('src', './images/serv-icon2-red.png');


        } else if ($("body").hasClass("green-theme")) {
            if ($('#map').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-green.png', 'map');
            }
            //contact us map tab
            if ($('#map-contact').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-green.png', 'map-contact');
            }
            $('.counters section:nth-of-type(1) img').attr('src', './images/serv-icon1-green.png');
            $('.counters section:nth-of-type(2) img').attr('src', './images/serv-icon2-green.png');

        } else if ($("body").hasClass("blue-theme")) {
            if ($('#map').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-blue.png', 'map');
            }
            //contact us map tab
            if ($('#map-contact').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker-blue.png', 'map-contact');
            }
            $('.counters section:nth-of-type(1) img').attr('src', './images/serv-icon1-blue.png');
            $('.counters section:nth-of-type(2) img').attr('src', './images/serv-icon2-blue.png');

        } else if ($("body").hasClass("golden-theme")) {
            if ($('#map').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map');
            }
            //contact us map tab
            if ($('#map-contact').length > 0) {
                createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map-contact');
            }
            $('.counters section:nth-of-type(1) img').attr('src', './images/serv-icon1.png');
            $('.counters section:nth-of-type(2) img').attr('src', './images/serv-icon2.png');

        }
    }

    var bodyClasses = document.body.classList;
    //grey scale
    $(".grey-theme").click(function () {
        if (bodyClasses.contains('blue-theme') || bodyClasses.contains('red-theme') || bodyClasses.contains('green-theme') || bodyClasses.contains('golden-theme')) {
            $("body").removeClass("blue-theme red-theme green-theme golden-theme");
        }
        $("body").addClass("greyScale-theme");
        ThemeSettings();
    });

    //red theme
    $('.themes .red').click(function () {
        if (bodyClasses.contains('greyScale-theme') || bodyClasses.contains('blue-theme') || bodyClasses.contains('green-theme') || bodyClasses.contains('golden-theme')) {
            $("body").removeClass("greyScale-theme blue-theme green-theme golden-theme");
        }
        $("body").addClass("red-theme");
        ThemeSettings();
    });

    //blue theme
    $('.themes .blue').click(function () {
        if (bodyClasses.contains('greyScale-theme') || bodyClasses.contains('red-theme') || bodyClasses.contains('green-theme') || bodyClasses.contains('golden-theme')) {
            $("body").removeClass("greyScale-theme red-theme green-theme golden-theme");
        }
        $("body").addClass("blue-theme");
        ThemeSettings();

    });

    //green theme
    $('.themes .green').click(function () {
        if (bodyClasses.contains('greyScale-theme') || bodyClasses.contains('red-theme') || bodyClasses.contains('blue-theme') || bodyClasses.contains('golden-theme')) {
            $("body").removeClass("greyScale-theme red-theme blue-theme golden-theme");
        }
        $("body").addClass("green-theme");
        ThemeSettings();
    });

    //golden theme
    $('.themes .golden').click(function () {
        if (bodyClasses.contains('greyScale-theme') || bodyClasses.contains('red-theme') || bodyClasses.contains('green-theme') || bodyClasses.contains('blue-theme')) {
            $("body").removeClass("greyScale-theme red-theme green-theme blue-theme");
        }
        $("body").addClass("golden-theme");
        ThemeSettings();

    });


    // icrease, decrease, reset font size
    var affectedElements = $("p, h1, h2, h3, h4, h5, h6, a, span"); // Can be extended, ex. $("div, p, span.someClass")

    // Storing the original size in a data attribute so size can be reset
    affectedElements.each(function () {
        var $this = $(this);
        $this.data("orig-size", $this.css("font-size"));
    });
    $("#increase-font").click(function () {
        if ($('.sttin-box h3').css("font-size") <= '27px') {  //to stop to limit
            changeFontSize(1);
        }
    })

    $("#decrease-font").click(function () {
        if ($('.sttin-box h3').css("font-size") >= '21px') {  //to stop to limit
            changeFontSize(-1);
        }
    })

    $("#orig-font").click(function () {
        affectedElements.each(function () {
            var $this = $(this);
            $this.css("font-size", $this.data("orig-size"));
        });
    })


    //range input for font size
    var affectedHeadings = $("h1, h2, h3, h4, h5, h6");
    document.getElementById('headings-font').oninput = function () {
        if (this.value > 3) {
            changeHeadingsFontSize(1);
        } else {
            changeHeadingsFontSize(-1);
        }
    }

    document.getElementById('body-font').oninput = function () {
        if (this.value > 3) {
            changeFontSize(1);
        } else {
            changeFontSize(-1);
        }
    }

    function changeFontSize(direction) {
        affectedElements.each(function () {
            var $this = $(this);
            $this.css("font-size", parseInt($this.css("font-size")) + direction);
        });
    }

    function changeHeadingsFontSize(direction) {
        affectedHeadings.each(function () {
            var $this = $(this);
            $this.css("font-size", parseInt($this.css("font-size")) + direction);
        });
    }




    // $('.social-body>div').removeClass('fp-slides');
    // $('.social-body>div>div').removeClass('fp-slidesContainer');
    // $('.social-body>div>div>div').removeClass('fp-slide fp-table active');
    // $('.social-body>div>div>div>div').removeClass('fp-tableCell');

    // $('.carousel-indicators').unwrap();
    // $('.fp-controlArrow').remove();

    // $('#fb-carousel').removeClass('fp-slide fp-table active');
    // $('#fb-carousel').unwrap().unwrap();




    //owl carousel
    if ($('.owl-carousel.newsandEvents:not(.events-details)').length > 0 && $('.owl-carousel.newsandEvents:not(.news-details-owl)').length > 0) {

        $('.owl-carousel.newsandEvents').owlCarousel({
            responsiveClass: true,
            dots: true,
            nav: false,
            loop: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
    }



    //Click event for filters
    $('#project-terms a').click(function (e) {
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat(cat);
        //alert('filtering'+ cat);
    });


    //var eventsOwlItemsLength = $("#eventsScroll.owl-carousel .project").length;

    function showProjectsbyCat(cat) {
        //$("#eventsScroll.owl-carousel").trigger('destroy.owl.carousel');

        if (cat == 'all') {

            $('#projects-hidden .project').each(function () {
                var owl = $("#eventsScroll.owl-carousel");//.data('owlCarousel');
                elem = $(this).parent().html();

                owl.trigger('add.owl.carousel', [elem]);
                $(this).parent().remove();
            });

            $("#eventsScroll.owl-carousel").removeClass('owl-loaded');
            //if ($("#eventsScroll.owl-carousel .project").length  === eventsOwlItemsLength &&  $('#projects-hidden .project').length === 0 ) {
            setTimeout(function () {
                $("#eventsScroll.owl-carousel").addClass('owl-loaded');
            }, 500);
            //}

        } else {

            $('#projects-hidden .project.' + cat).each(function () {
                var owl = $("#eventsScroll.owl-carousel");//.data('owlCarousel');
                elem = $(this).parent().html();

                owl.trigger('add.owl.carousel', [elem]);
                $(this).parent().remove();
            });

            $('#eventsScroll .project:not(.project.' + cat + ')').each(function () {
                var owl = $("#eventsScroll.owl-carousel");//.data('owlCarousel');
                targetPos = $(this).parent().index();
                elem = $(this).parent();

                $(elem).clone().appendTo($('#projects-hidden'));
                owl.trigger('remove.owl.carousel', [targetPos]).trigger('refresh.owl.carousel');
            });
        }
    }











    //owl carousel  for social media section
    if ($('.owl-carousel.socialMedia').length > 0) {
        $('.owl-carousel.socialMedia').owlCarousel({
            dots: true,
            nav: false,
            items: 1,
            loop: false,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
    }

    // $('.socialMedia').slick();





    //map style array
    var styledMapType = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#868b93"
        }]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#edebe8"
        }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fef1b3"
        }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#f9dd8a"
        },
        {
            "weight": "2"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#acdbfd"
        },
        {
            "visibility": "on"
        }
        ]
    }
    ];


    // map
    function createMapwithMarker(latCenter, lngCenter, titleMarker, latMarker, lngMarker, mapMarker, mapId) {
        //map options
        var map = new google.maps.Map(document.getElementById(mapId), {
            zoom: 16,
            center: new google.maps.LatLng(latCenter, lngCenter),
            styles: styledMapType,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: true,
            draggable: true
        });

        //add marker
        new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(latMarker, lngMarker),
            title: titleMarker,
            animation: google.maps.Animation.BOUNCE,
            icon: mapMarker
        });
    }
    if ($('#map').length > 0) {
        createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map');
    }


    //contact us map tab
    if ($('#map-contact').length > 0) {
        createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map-contact');
    }



    // listen to the page


    //     //  console.log( window.getSelection().toString() + 'yyyyyyyyyyyyyyyyy');
    //     $('.volume-btn').on('click', function(){
    //         if(responsiveVoice.voiceSupport()) {
    //            // responsiveVoice.speak("hello world");
    //             }
    //             console.log( window.getSelection().toString() + 'yyyyyyyyyyyyyyyyy');
    //     });
    //     function getSelectionText() {
    //         var text = "";
    //         if (window.getSelection) {
    //             text = window.getSelection().toString();
    //         // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
    //         } else if (document.selection && document.selection.type != "Control") {
    //             text = document.selection.createRange().text;
    //         }
    //         return text;
    //     }
    //    // $(document).ready(function (){ // when the document has completed loading
    //        $(document).mouseup(function (e){ // attach the mouseup event for all div and pre tags
    //           setTimeout(function() { // When clicking on a highlighted area, the value stays highlighted until after the mouseup event, and would therefore stil be captured by getSelection. This micro-timeout solves the issue.
    //              responsiveVoice.cancel(); // stop anything currently being spoken
    //              responsiveVoice.speak(getSelectionText()); //speak the text as returned by getSelectionText
    //           }, 1);
    //        });
    //    // })
    //;



    $('.search-section .form-group.input-icon').on('click', function () {
        $(this).find('input').focus();
    });
    $('header .searchContainer .fa-search').on('click', function () {
        $(this).parent().find('input').focus();
    });



    // reset btn 
    $('#sidebarSettings .reset-btn-contnr .reset-all.delay5').on('click', function () {
        $("body").removeClass("blue-theme red-theme green-theme golden-theme greyScale-theme");

        //reset font
        affectedElements.each(function () {
            var $this = $(this);
            $this.css("font-size", $this.data("orig-size"));
        });

        //reset heading font
        document.getElementById("headings-font").value = '3';

        //reset heading font
        document.getElementById("body-font").value = '3';

        if ($('#map').length > 0) {
            createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map');
        }
        //contact us map tab
        if ($('#map-contact').length > 0) {
            createMapwithMarker(24.4258117, 54.4188263, 'general directorate of civil defence', 24.4258117, 54.4188263, './images/marker.png', 'map-contact');
        }
        $('.counters section:nth-of-type(1) img').attr('src', './images/serv-icon1.png');
        $('.counters section:nth-of-type(2) img').attr('src', './images/serv-icon2.png');

        //close menu
        $('#sidebarSettings').removeClass('active');
        $("#sidebarSettings .toanimate").removeClass($("#sidebarSettings .toanimate").data("animate"));
        blurBody();
    });

    setTimeout(function () {
        $('ul.sticky').animate({ 'right': '-30px' })
    }, 10000);




});


//get browser name
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) return 'Opera ' + tem[1];
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M[0];
})();

var browser = navigator.sayswho.toLowerCase();

(function ($) {
    $('body').addClass(browser);
})(jQuery);

