

$(document).ready(function () {
    // OPEN DATA PAGE
    // menu
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $("#sidebar .toanimate").removeClass($("#sidebar .toanimate").data("animate"));
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $("#sidebar .toanimate").addClass($("#sidebar .toanimate").data("animate"));
    });

    // settings
    $('#dismissSettings, .overlay').on('click', function () {
        $('#sidebarSettings').removeClass('active');
        $("#sidebarSettings .toanimate").removeClass($("#sidebarSettings .toanimate").data("animate"));
    });

    $('#sidebarCollapseSettings').on('click', function () {
        $('#sidebarSettings').addClass('active');
        $("#sidebarSettings .toanimate").addClass($("#sidebarSettings .toanimate").data("animate"));
    });



    //status number
    var dataStatusNumber = $('.data-status').data('number');
    if (dataStatusNumber > 1.5) {
        $('.data-status').addClass('smile');
        $('.data-status i').addClass('fa-smile-o');
    } else if (dataStatusNumber == 1.5) {
        $('.data-status').addClass('meh');
        $('.data-status i').addClass('fa-meh-o');
    } else if (dataStatusNumber < 1.5) {
        $('.data-status').addClass('frown');
        $('.data-status i').addClass('fa-frown-o');
    }


    // custum scroll
    if ($(".inner-events").length > 0) {

        $(".inner-events").mCustomScrollbar({
            theme: "minimal-dark"
        });
    }

    // custum scroll
    if ($(".markers-list").length > 0) {

        $(".markers-list").mCustomScrollbar({
            theme: "light-thick"
        });
    }
    //owl carousel
    if ($('.owl-carousel.events-details').length > 0) {

        $('.owl-carousel.events-details').owlCarousel({
            margin: 10,
            rtl: true,
            responsiveClass: true,
            dots: false,
            nav: false,
            // loop: false,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
        // Go to the next item
        $('.owl-next-btn').click(function (e) {
            e.preventDefault();
            $('.owl-carousel.events-details').trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev-btn').click(function (e) {
            e.preventDefault();
            $('.owl-carousel.events-details').trigger('prev.owl.carousel');
        });
    }

    //owl carousel
    if ($('.owl-carousel.news-details-owl').length > 0) {

        $('.owl-carousel.news-details-owl').owlCarousel({
            margin: 10,
            responsiveClass: true,
            dots: false,
            rtl: true,
            nav: false,
            // loop: false,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
        // Go to the next item
        $('.owl-next-btn').click(function (e) {
            e.preventDefault();
            $('.owl-carousel.news-details-owl').trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev-btn').click(function (e) {
            e.preventDefault();
            $('.owl-carousel.news-details-owl').trigger('prev.owl.carousel');
        });
    }



    // if ($("#openData").length > 0) {
    //     $('#openData').DataTable({
    //         "order": [[3, "desc"]],
    //         "sDom": 'rt<"clear"><"bottom"ip>',
    //         "bSort": true,
    //         paging: true,
    //         "pageLength": 13,
    //         responsive: true
    //     });
    // }



    if ($(".datepicker:not(.year)").length > 0) {
        $(".datepicker").datepicker();
    }
    if ($(".datepicker.year").length > 0) {
        $(".datepicker.year").datepicker({
            format: "yyyy",
            viewMode: "years",
            minViewMode: "years"
        });
    }


    // e-services progress 
    if ($('.progress-item').length > 0) {
        $('.service-progress .progress-item:nth-of-type(1) > div:nth-of-type(1) > a').on('click', function (e) {
            e.preventDefault();
            $('.service-progress, .presentage-val').removeClass('active-2 active-3').addClass('active-1');
            $('.presentage-val span').text(34);
        });
        $('.service-progress .progress-item:nth-of-type(1) > div:nth-of-type(2) > a').on('click', function (e) {
            e.preventDefault();
            $('.service-progress, .presentage-val').removeClass('active-1 active-3').addClass('active-2');
            $('.presentage-val span').text(67);
        });
        $('.service-progress .progress-item:nth-of-type(2) > div > a').on('click', function (e) {
            e.preventDefault();
            $('.service-progress, .presentage-val').removeClass('active-1 active-2').addClass('active-3');
            $('.presentage-val span').text(100);
        });
    }


    // var location_data = {
    //     "IRN": {
    //       "thelink": "http://test.dev/blog/country/irn"
    //     },
    //     "USA": {
    //       "thelink": "http://test.dev/blog/country/usa"
    //     },
    //     "JPN": {
    //       "thelink": "http://test.dev/blog/country/jpn"
    //     },
    //     "CAN": {
    //       "thelink": "http://test.dev/blog/country/can"
    //     },
    //     "RUS": {
    //       "thelink": "http://test.dev/blog/country/rus"
    //     }
    //   }

    //   // Create data object
    //   var dataObj = {};
    //   for ( var key in location_data ) {
    //     if ( key != '' ) {
    //       dataObj[key] = {
    //         "fillKey": "hasData",
    //         "country": location_data[key]
    //       }
    //     }
    //   }

    //   var map = new Datamap({
    //     element: document.getElementById('locations-map'),

    //     // projection: 'orthographic',
    //     scope: 'world',
    //     data: dataObj,
    //     fills: {
    //       'hasData': 'blue',
    //       defaultFill: '#dbdbdb'
    //     },
    //     responsive: true,
    //     geographyConfig: {
    //       // hideAntarctica: false,
    //       borderWidth: 1,
    //       borderOpacity: 1,
    //       borderColor: '#fff',
    //       popupOnHover: true,
    //       highlightOnHover: true,
    //       highlightFillColor: function(data) {
    //         if (data.fillKey) {
    //           return 'green';
    //         }
    //         return '#dbdbdb';
    //       },
    //       highlightBorderColor: '#fff',
    //       popupTemplate: function(geo, data) {
    //         // don't show tooltip if country don't present in dataset
    //         if (!data) {
    //           return;
    //         }
    //         // tooltip content
    //         return ['',
    //                 '<div class ="hoverinfo">' + geo.properties.name, ''
    //                ].join('');
    //       }
    //     },

    //     done: function(map) {

    //       map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
    //         var countryID = geography.id;
    //         if(location_data[countryID]){
    //           window.open(location_data[countryID].thelink,"_self");
    //         }
    //       });
    //     }

    //   });

    if ($("#map-d3").length > 0) {
        // map-d3 config
        var mapD3 = new Datamap({
            element: document.getElementById('map-d3'),
            fills: {
                defaultFill: '#2a5aa1' // Any hex, color name or rgb/rgba value
            },
            geographyConfig: {
                // dataUrl: '/custom.json'
                highlightOnHover: true,
                highlightFillColor: '#4ee0b9',
            },
            responsive: true,

            // style: {
            //     hoverState: {
            //         backgroundColor: 'white',
            //       }
            // },
            // setProjection: function(element, options) {
            //     var projection, path;
            //     projection = d3.geo.albersUsa()
            //         .center([53.847818, 23.424076]) //Dubai
            //         .scale(element.offsetWidth)
            //         .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            //     path = d3.geo.path()
            //         .projection( projection );

            //     return {path: path, projection: projection};
            // }
        });
        d3.select(window).on('resize', function () {
            mapD3.resize();
        });
    }



    //wizard tabs
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });
    $(".prev-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);
    });

    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

    //sticky header
    var mql = window.matchMedia("screen and (min-width: 1250px)");
    if (mql.matches) { // if media query matches 
        //sticky header
        window.onscroll = function () { myFunction() };

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= (sticky + 50)) {
                header.classList.add("sticky")
            }
            else {
                header.classList.remove("sticky");
            }
        }

    }


    if ($('.images-gall-owl').length > 0) {

        $('.slider-for .gallery-anchor').fancybox({
            thumbs : {
              showOnStart : true
            }
          });

        var slideItems = 5;
        if ($('.images-gall-owl .item').length < 5) {
            slideItems = $('.images-gall-owl .item').length - 1;
        }
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slick-carousel'
        });

        $('.slick-carousel').slick({
            slidesToShow: slideItems,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
            // infinite: true,
            nextArrow: $('.customNextBtn'),
            prevArrow: $('.customPrevBtn'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        // infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // $('.slick-carousel').on('click', function (event) {
        //     $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
        // });
        $('.slick-carousel').on('afterChange', function (event, slick, direction) {
            if (direction == 'left') {
                $('.current-img').text($('.slick-carousel .slick-current').data('slick-index') - 1)
            }
            else {
                $('.current-img').text($('.slick-carousel .slick-current').data('slick-index') + 1)
            }
        });
        $('.gall-length').text($('.slider-for a').length);

    }
    // if ($('.news-slider').length > 0) {
    //     $('.simple-marquee-container').SimpleMarquee();
    // }



    //progress bars style
    if ($('.progress-bar').length > 0) {
        $('.progress-bar').each(function (i, ele) {
            var value = ele.getAttribute('aria-valuenow');
            ele.style.width = value + '%';
            if (value >= 67) {
                ele.classList.add('green');
            }
            else if (value >= 34) {
                ele.classList.add('yellow');
            } else {
                ele.classList.add('red');
            }
        });

    }


    //styled accordion
    $('.panel.panel-default.advanced-seach-services').on('shown.bs.collapse', function (e) {
        $(this).addClass('active');
    });
    $('.panel.panel-default.advanced-seach-services').on('hidden.bs.collapse', function (e) {
        $(this).removeClass('active');
    });
    //eservices page ' expand/collapsed events'
    $('.service-details .collapse').on('shown.bs.collapse', function (e) {
        var count = 0;
        $('.service-details .collapse').each(function (i, ele) {
            if (ele.classList.contains('in')) {
                count++;
            }
            $('.service-details > div.col-xs-12 > a[data-toggle="collapse"]').removeClass('active');
        });
        if (count > 1) {
            $('.service-details .collapse').each(function (i, ele) {
                $(ele).removeClass('in')
            });
            $(this).addClass('in');
        }

        var collapseSec = $(this);
        $('.service-details > div.col-xs-12').each(function (i, e) {
            if ($(e).find('a[data-toggle="collapse"]').data('target').replace('#', '') === collapseSec.attr('id')) {
                $(e).find('a[data-toggle="collapse"]').addClass('active');
            }
        });
    });

    $('.service-details .collapse').on('hidden.bs.collapse', function (e) {
        $('.service-details > div.col-xs-12 > a[data-toggle="collapse"]').removeClass('active');

    });


});