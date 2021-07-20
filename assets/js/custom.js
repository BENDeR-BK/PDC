"use strict";

var chThemeModule;

(function ($) {
  chThemeModule = function () {
    var elements = {
      $html: $('html'),
      $document: $(document)
      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       * Fixed arrows
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */

    };

    var fixedArrows = function fixedArrows(toTop, call) {
      if (toTop.length > 0) {
        var footerBarHeight = elements.$footer.length ? elements.$footer.outerHeight() : 0;
        toTop.on('click', function (e) {
          e.preventDefault();
          var scrollTop = Math.abs($(window).scrollTop()) / 2,
              speed = scrollTop < 1000 ? 1000 : scrollTop;
          $('html, body').animate({
            scrollTop: 0
          }, speed);
        });
        var stroke = toTop.data('stroke');
        stroke = !stroke ? '' : "stroke=".concat(stroke);
        toTop.append('<svg class="lt-progress-circle-up" width="100%" height="100%" ' + stroke + ' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="lt-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 300ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>');
        $(window).on('scroll', function () {
          var scroll = $(this).scrollTop(),
              wH = $(document).height() - $(window).height(),
              $topBtn = toTop;

          if (scroll > 300) {
            $topBtn.addClass('fixed-arrows__top--active');
          } else {
            $topBtn.removeClass('fixed-arrows__top--active');
          }

          if (scroll + $(window).height() > $(document).height() - footerBarHeight) {
            $topBtn.css({
              'transform': 'translate(0, ' + -(footerBarHeight + 80) + 'px)'
            });

            if (call.length) {
              call.css({
                'transform': 'translate(0, ' + -(footerBarHeight + 80) + 'px)'
              });
            }
          } else {
            $topBtn.css({
              'transform': ''
            });

            if (call.length) {
              call.css({
                'transform': ''
              });
            }
          }

          $topBtn.find('.lt-progress-path').css('stroke-dashoffset', 300 - Math.round(300 * scroll / wH) + "%");
        });

        if (window.matchMedia('(max-width: 767px)').matches) {
          if (call.length) {
            call.removeAttr('data-toggle');
          }
        }

        ;
      }
    };
    /**
     *-------------------------------------------------------------------------------------------------------------------------------------------
     * Validate inputs
     *-------------------------------------------------------------------------------------------------------------------------------------------
     */


    function validateInputs() {
      $('input[name="phone"], input[name="your-phone"], input[name="client_phone"]').on('change keyup keydown', function () {
        var myVar = $(this).val();
        var digit = ('' + myVar)[2];

        if (digit == '0') {
          $(this).val(' ');
          $(this).blur().focus();
        }

        $('input[type="submit"]').attr('disabled', 'disabled');
        var re = new RegExp("_$");

        if (!re.test(myVar)) {
          $(this).removeClass('error-phone');
          $('input[type="submit"]').removeAttr('disabled');
          $('button[type="submit"]').removeAttr('disabled').find('.shine-button__el').addClass('animate');
        } else {
          $(this).addClass('error-phone');
        }
      });
    }
    /**
     *-------------------------------------------------------------------------------------------------------------------------------------------
     * leadGenerator
     *-------------------------------------------------------------------------------------------------------------------------------------------
     */
    // Set cookie


    function setCookie(name, value, minutes) {
      var expires = "";

      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    } // Get cookie


    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    } // var TagCookie = readCookie('TagCookie')
    // let activeTag = $('.active-tag').text().trim()
    // let current_tags 
    // var chekbokses = $('.teg-item__chek')
    // if(!TagCookie) {
    // 	var TagsCook = [];
    // 	$('.teg-item__chek').on('change', function(){
    // 		// chekbokses.each(function( index ) {
    // 		// 	if($(this).prop('checked')) {
    // 		// 		var i = $( this ).val()
    // 		// 		TagsCook.push(i)
    // 		// 		setCookie('TagCookie', TagsCook, 15650000)
    // 		// 	}
    // 		// 	else {
    // 		// 		setCookie('TagCookie', '', 15650000)
    // 		// 	}
    // 		// });
    // 		$('#inputCurentTags').val($( this ).val())
    // 		setCookie('TagCookie', $( this ).val(), 15650000)
    // 		$('#teg-posts__filters').trigger('submit')
    // 	})
    // 	console.log(0);
    // } else {
    // 	var TagsCook = [];
    // 	$('.teg-item__chek').on('change', function(){
    // 		chekbokses.each(function( index ) {
    // 			if($(this).prop('checked')) {
    // 				var i = $( this ).val()
    // 				TagsCook.push(i)
    // 				$('#inputCurentTags').val(TagsCook.toString())
    // 				setCookie('TagCookie', TagsCook.toString(), 15650000)
    // 				$('#teg-posts__filters').trigger('submit')
    // 				console.log(TagsCook);
    // 			} else if(TagsCook.length <1){
    // 				$('#inputCurentTags').val('')
    // 				setCookie('TagCookie', '', 15650000)
    // 				$('#teg-posts__filters').trigger('submit')
    // 				// $('.teg-item_reset').show()
    // 			}
    // 		});
    // 		// console.log(current_tags.length);
    // 	})
    // 	$('.active-tag').html(TagCookie)		
    // 	$('#inputCurentTags').val(TagCookie.toString())
    // 	console.log(1);
    // 	function splitString(stringToSplit, separator) {
    // 		var arrayOfStrings = stringToSplit.split(separator);
    // 		return arrayOfStrings
    // 	}
    // 	var comma = ',';
    // 	current_tags = splitString(TagCookie, comma)
    // 	for(var i=0;i<current_tags.length;i++) {
    // 		// console.log(current_tags[i])
    // 		var ch = $('#'+current_tags[i])
    // 		ch.prop( "checked", true );
    // 	}
    // 	console.log(current_tags);
    // 	console.log(TagsCook.length);
    // 	// if ($('#inputCurentTags').val() != '') {
    // 	// 	// $('#teg-posts__filters').trigger('submit')
    // 	// 	$('.teg-item_reset').show()
    // 	// } else {
    // 	// 	$('.teg-item_reset').hide()
    // 	// }
    // 	// $('#ress').on('click', function () {
    // 	// 	$('#inputCurentTags').val('')
    // 	// 	$('#teg-posts__filters').trigger('submit')
    // 	// })
    // }
    // if (window.location.toString().indexOf("tag") != -1) {
    // 	console.log('has tag ');
    // } else {
    // 	chekbokses.each(function( index ) {
    // 		$(this).prop('checked', false)
    // 		$('#inputCurentTags').val('')
    // 	})
    // }


    return {
      init: function init() {
        this.menuPostsAjax();
        this.MainFilterPosts();
        this.aboutAuthorsSlider();
        this.aboutAnchors();
        this.scrolTop();
        this.mobileMenu();
        this.postSlider(); // this.CategoryFilterPosts();

        this.modalFormHandler();
        this.categoryMenu();
        this.MainFilterPostsAuthors();
        this.projectsSortDate();
        this.loadMoreMedia();
        this.loadMorePosts();
        this.share();
        this.searchText(); // this.filterLIbrary()
      },
      filterLIbrary: function filterLIbrary() {
        var filterBtnType = 'Всі';
        var filterBtnLang = 'Всі';
        $('[data-btn]').on('click', function () {
          var activeItem = $(this).data('filter');
          var filterBtn = $(this).data('btn');
          $('[data-btn="' + filterBtn + '"]').removeClass('active');
          $(this).addClass('active');
          filterBtnType = $('[data-type].active').data('type');
          filterBtnLang = $('[data-lang].active').data('lang');
          console.log(filterBtnType);
          console.log(filterBtnLang);
          console.log(activeItem);
          $('.lib-item ').hide().removeClass('show').addClass('hide');
          $('.lib-item.Всі.' + filterBtnType + '.' + filterBtnLang + '').show().addClass('show').removeClass('hide');
          var parentBlock = $('.lib-item.Всі').parent();
          console.log(parentBlock);
          parentBlock.each(function (i, elem) {
            if ($(this).children('.lib-item').hasClass('show')) {
              $(this).addClass('activeBLok').show();
            } else {
              $(this).removeClass('activeBLok').hide();
            }
          });
          $('.lib-main-item').each(function (i, elem) {
            if ($(this).children('.name-work-lib').children('.lib-item').hasClass('show')) {
              $(this).addClass('activeBLokShow').show();
            } else {
              $(this).removeClass('activeBLokShow').hide();
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       * Category menu products
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      searchText: function searchText() {// var allBlogText = $('.blog-item__text')
        // // console.log(allBlogText);
        // allBlogText.each(function( index ) {
        // 	// console.log($(this).find('.search_text'));
        // 	$(this).children().hide()
        // 	var BlogText = $(this).find('.search_text:first')
        // 	BlogText.parent().show()
        // 	BlogText.closest('blockquote').show()
        // 	BlogText.parent().next().show()
        // 	BlogText.closest('blockquote').next().show()
        // })
        // if (document.querySelector('.search-results')) {
        // 	let mainItem = document.querySelectorAll('.blog-item__text.blog-item__text-search')
        // 	mainItem.forEach(mainI => {
        // 	  let searchWord = mainI.querySelectorAll('.search_text')
        // 	  searchWord.forEach(word => {
        // 		let arrWords = word.parentElement.innerHTML.split(' ');
        // 		for (let i = 0; i < arrWords.length; i++) {
        // 		  if (arrWords[i] == '<span') {
        // 			let startDelate = i - 10
        // 			let rr = []
        // 			for (let j = startDelate; j < startDelate + 40; j++) {
        // 			  rr.push(arrWords[j])
        // 			}
        // 			mainI.innerHTML = rr.join(' ')
        // 		  }
        // 		}
        // 	  })
        // 	})
        //   }
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       * Category menu products
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      categoryMenu: function categoryMenu() {
        if (window.matchMedia('(max-width: 767px)').matches) {
          $('.filter-block__title').on('click', function () {
            $(this).next().slideToggle();
            $(this).toggleClass('active1');
          });
        }

        ;
        var activeProdCat = $('.active-product-category').text().trim();
        console.log(activeProdCat);
        $('.category-menu .children').each(function (index) {
          var link = $(this).prev('a').attr('href');
          $(this).prepend('<li class="cat-item"><a href="' + link + '" >Всі пропозиції</a></li>');
        });
        $('.products__category .children a').each(function (index) {
          var i = $(this).attr('href').match(/([^/]+)\/$/)[1];
          $(this).addClass(i);

          if ($(this).hasClass(activeProdCat)) {
            $(this).parent().addClass('active');
            $(this).parent().parent().show();
            $(this).parent().parent().prev().addClass('active');
          }
        });
        $('.products__category .category-menu > li > a').each(function (index) {
          var i = $(this).attr('href').match(/([^/]+)\/$/)[1];
          $(this).addClass(i);

          if ($(this).hasClass(activeProdCat)) {
            $(this).parent().addClass('is-active');
          }
        });
        $('.products__category li.cat-item:has(ul.children)').addClass('has-children');
        $('.category-menu .has-children > a').on('click', function (e) {
          e.preventDefault();
          $(this).next('.children').slideToggle();

          if ($(this).is('.active')) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
          }
        });

        if (activeProdCat == '') {
          $('.knygy').next().show();
          $('.knygy').addClass('active');
        } ///////////////


        $('.select-list__wrap').on('click', function () {
          if ($(this).is('.active')) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
          } // $(this).addClass('active')

        });
        $(document).click(function (event) {
          if (!$(event.target).is(".select-list__curent")) {
            $('.select-list__wrap').removeClass('active');
          }
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       * Share
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      share: function share() {
        $('#answer-example-share-button').on('click', function () {
          if (navigator.share) {
            navigator.share({
              title: 'Web Share API Draft',
              text: 'Take a look at this spec!',
              url: 'https://wicg.github.io/web-share/#share-method'
            }).then(function () {
              return console.log('Successful share');
            }).catch(function (error) {
              return console.log('Error sharing', error);
            });
          } else {
            console.log('Share not supported on this browser, do it the old way.');
          }
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       * Input mask / modal Form
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      modalFormHandler: function modalFormHandler() {
        $('.wpcf7').on('wpcf7mailsent', function (event) {
          $('.modal').modal('hide'); // $('#modal_thanks').modal('show');
          // 	setTimeout(function() {						
          // 	$('#modal_thanks').modal('hide');
          // }, 3400);		    		
        });
        validateInputs();
        $('input[type="tel"]').inputmask({
          "mask": "+38(099) 999-99-99"
        });
        $('[data-target="#order_product"]').on('click', function (e) {
          e.preventDefault();
          $('[name="product-title"]').val($(this).data('title'));
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Mobile menu
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      mobileMenu: function mobileMenu() {
        $(window).on('resize scroll', function () {
          var HeaderH = $("header").height();
          var offsetTop = window.pageYOffset;
          var menuPos = HeaderH - offsetTop + 11; // $('.header__menu_mob').css('top',menuPos)
        });
        setTimeout(function () {
          var HeaderH = $("header").height();
          var offsetTop = window.pageYOffset;
          var menuPos = HeaderH - offsetTop + 11; // $('.header__menu_mob').css('top',menuPos)
        }, 200);
        $('.burger').on('click', function () {
          // var HeaderH = $( "header" ).height();
          // let offsetTop = window.pageYOffset;
          // let menuPos = HeaderH - offsetTop +11
          // console.log(menuPos);
          // $('.header__menu_mob').css('top',menuPos)
          $('.header__menu_mob').toggleClass('active');
          $('body').toggleClass('hidden-scroll');
          $('html').toggleClass('hidden-scroll');
          $(this).toggleClass('active');
        });
        $('.cat-posts__filter-btn').on('click', function () {
          $('.products__category').addClass('active');
          $('body').addClass('hidden-scroll');
          $(this).addClass('active');
        });
        $('.products__category-close').on('click', function () {
          $('.products__category').removeClass('active');
          $('body').removeClass('hidden-scroll');
          $(this).removeClass('active');
        });
        $('.mob-menu__menu .menu-item-has-children').on('click', function () {
          $(this).find('.sub-menu').slideToggle();

          if ($(this).is('.active')) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
          }
        });
        $('.mob-menu__menu .menu-item-has-children>a').on('click', function (e) {
          e.preventDefault();
        });
        $('.requisites-item__qr').on('click', function () {
          $('.requisites-item__qr').removeClass('show');
          $(this).addClass('show');
        }); // $('.category-menu .has-children a').on('click', function(e){
        // 	e.preventDefault();
        // 	$(this).next('.category-sub-menu').slideToggle()
        // 	if ($(this).is('.active')) {
        // 		$(this).removeClass('active')
        // 	} else {
        // 		$(this).addClass('active')
        // 	}
        // })

        $('.single-product__desc-mob').on('click', function (e) {
          e.preventDefault();
          $('.single-product__desc').slideToggle();

          if ($(this).is('.active')) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
          }
        });
        AOS.init({
          once: true
        }); // $('.wp-block-gallery .blocks-gallery-grid').slick({
        // 	infinite: false,
        // 	autoplaySpeed: 5000,
        // 	// autoplay: true,
        // 	slidesToShow: 1,
        // 	slidesToScroll: 5,
        // 	swipeToSlide: true,
        // 	dots: true,
        // 	prevArrow:"<button type='button' class='slick-prev pull-left'>Попередня</button>",
        // 	nextArrow:"<button type='button' class='slick-next pull-right'>Наступна</button>",
        // 	responsive: [
        // 		{
        // 			breakpoint: 1025,
        // 			settings: {
        // 				slidesToShow: 3
        // 			}
        // 		},
        // 		{
        // 			breakpoint: 991,
        // 			settings: {
        // 				slidesToShow: 4
        // 			}
        // 		},
        // 		{
        // 			breakpoint: 767,
        // 			settings: {
        // 				slidesToShow: 3,
        // 			}
        // 		},
        // 		{
        // 			breakpoint: 576,
        // 			settings: {
        // 				slidesToShow: 2,
        // 			}
        // 		},
        // 		{
        // 			breakpoint: 370,
        // 			settings: {
        // 				slidesToShow: 1,
        // 			}
        // 		}
        // 	]
        // });

        $('.product-recommendations__slider').slick({
          // infinite: false,
          autoplaySpeed: 5000,
          // autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          swipeToSlide: true,
          // arrows: false,
          dots: false,
          // prevArrow:"<button type='button' class='recommendations__slider-prev'>Попередня</button>",
          // nextArrow:"<button type='button' class='recommendations__slider-next'>Наступна</button>",
          nextArrow: $('.recommendations__slider-next'),
          prevArrow: $('.recommendations__slider-prev'),
          responsive: [// {
          // 	breakpoint: 1025,
          // 	settings: {
          // 		slidesToShow: 3
          // 	}
          // },
          // {
          // 	breakpoint: 991,
          // 	settings: {
          // 		slidesToShow: 4
          // 	}
          // },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 475,
            settings: {
              slidesToShow: 1
            }
          }]
        });
        $('.product__colections__slider').slick({
          // infinite: false,
          autoplaySpeed: 5000,
          // autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          swipeToSlide: true,
          // arrows: false,
          dots: false,
          nextArrow: $('.colections__slider-next'),
          prevArrow: $('.colections__slider-prev'),
          responsive: [// {
          // 	breakpoint: 1025,
          // 	settings: {
          // 		slidesToShow: 3
          // 	}
          // },
          // {
          // 	breakpoint: 991,
          // 	settings: {
          // 		slidesToShow: 4
          // 	}
          // },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 475,
            settings: {
              slidesToShow: 1
            }
          }]
        });
        $('.search__btn .lt-ico').on('click', function () {
          $('.header__search-container').slideToggle();
          $(this).parent().toggleClass('active');
          $('.header__menu_mob').removeClass('active');
          $('.burger').removeClass('active');
          $('body').removeClass('hidden-scroll');
          $('html').removeClass('hidden-scroll');
        }); // $('.lt-ico-close').on('click', function(){
        // 	$('.header__search-container').slideToggle();
        // 	$(this).removeClass('lt-ico-close')
        // })
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Scrol Top
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      scrolTop: function scrolTop() {
        if ($('.donation__title').length) {
          var donation__title = $('.donation__title').offset().top;
        }

        var scrolTop = document.getElementById('scrol-top-btn');
        scrolTop.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
        window.addEventListener('scroll', function (e) {
          var offsetTop = window.pageYOffset;

          if (offsetTop > 300) {
            scrolTop.classList.add('scrol-top-btn_active');
          } else {
            scrolTop.classList.remove('scrol-top-btn_active');
          } // console.log(offsetTop );


          if (donation__title) {
            if (offsetTop > donation__title) {
              $('.donation__title').addClass('fixed');
            } else {
              $('.donation__title').removeClass('fixed');
            }

            console.log($('.donation__title').offset().top);
          }
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  About Anchors
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      aboutAnchors: function aboutAnchors() {
        $('.single-product__link a ').on('click', function (e) {
          var id = $(this).attr('href'),
              top = $(id).offset().top;
          e.preventDefault();
          $('body,html').animate({
            scrollTop: top
          }, 1000);
        });
        $('.projects__btn a ').on('click', function (e) {
          var id = $(this).attr('href'),
              top = $(id).offset().top;
          e.preventDefault();
          $('body,html').animate({
            scrollTop: top
          }, 1000);
        });
        $('.about__anchors a ').on('click', function (e) {
          var id = $(this).attr('href'),
              top = $(id).offset().top;
          $('.about__anchors a ').removeClass('active');
          $(this).addClass('active');
          $('[data-screen]').removeClass('active');
          $('[data-screen="' + id + '"]').addClass('active');
          e.preventDefault();
          $('body,html').animate({
            scrollTop: top
          }, 1000);
        });

        $.fn.isInViewport = function () {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height() / 2;
          return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window).on('resize scroll', function () {
          $('.section-pagination').each(function () {
            var activeSec = $(this).attr('id');

            if ($(this).isInViewport()) {
              $('[data-screen]').removeClass('active');
              $('[data-screen="#' + activeSec + '"]').addClass('active');
            } else {// $('[data-screen="#'+activeSec+'"]').removeClass('active');
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Menu Posts Ajax 
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      menuPostsAjax: function menuPostsAjax() {
        console.log('ready');
        $('.sub-content > a').on('click', function (e) {// e.preventDefault()
        });
        $('.menu-item-has-children').on('mouseover', function () {
          $('.main-bg').addClass('show');
        });
        $('.menu-item-has-children').on('mouseleave', function () {
          $('.main-bg').removeClass('show');
        });
        $('.sub-content').on('click', function (e) {// var link = $(this).find('a').attr('href')
          // if ($(this).is(".has-link")) {
          // 	console.log('has-link');
          // } else{
          // 	console.log('not has-link');
          // 	$(this).addClass("has-link")
          // 	$(this).append('<a href="'+link+'" class="link_cat">Побачити Все</a>')
          // }
        });
        $('.header__menu .sub-content').each(function (index) {
          var cont = $(this).find('.sub-menu');
          var catName = $(this).find('a').attr('href').match(/([^/]+)\/$/)[1];
          var posts_per_page = 4;

          if (window.matchMedia('(max-width: 1440px)').matches) {
            var posts_per_page = 3;
          }

          ;
          var showItems = $(this).find('article').length;
          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "html",
            // add data type
            data: {
              action: 'get_ajax_posts_menu',
              catname: catName,
              posts_per_page: posts_per_page
            },
            success: function success(response) {
              // console.log( response );
              cont.html(response);
              $('.sub-content').parent().css('min-height', cont.height() + 36);
              $('.sub-content').parent().height(cont.height() + 36);
            }
          });
          $('.sub-content').parent().height(cont.height() + 36);
        });
        $('.sub-content').on('click, mouseover ', function () {
          var cont = $(this).find('.sub-menu');
          var catName = $(this).find('a').attr('href').match(/([^/]+)\/$/)[1];
          var posts_per_page = 4; // if (window.matchMedia('(max-width: 1440px)').matches) {
          // 	var posts_per_page = 3;
          // };
          // let showItems = $(this).find('article').length
          // console.log(showItems);
          // var link = $(this).find('a').attr('href')
          // if ($(this).is(".has-link")) {
          // 	console.log('has-link');
          // } else{
          // 	console.log('not has-link');
          // 	$(this).addClass("has-link")
          // 	$(this).append('<a href="'+link+'" class="link_cat">Побачити Все</a>')
          // }
          // console.log(catName);
          // var value = catName.match(/([^/]+)\/$/)[1];
          // console.log(value);
          // if (showItems == 0) {
          // 	$.ajax({
          // 		type: 'POST',
          // 		url: $pd_js.ajaxurl,
          // 		dataType: "html", // add data type
          // 		data: { 
          // 			action : 'get_ajax_posts_menu',
          // 			catname : catName,
          // 			posts_per_page: posts_per_page,
          // 		},
          // 		success: function( response ) {
          // 			// console.log( response );
          // 			cont.html( response ); 
          // 			$('.sub-content').parent().css('min-height' , cont.height() + 20)
          // 			$('.sub-content').parent().height(cont.height() + 20)
          // 		}
          // 	});
          // }

          $('.sub-content').parent().height(cont.height() + 36);
        }); // $('.menu > .menu-item-has-children').on('mouseleave', function(){
        // 	$('.sub-content').parent().css('min-height' ,'auto')
        // 	$('.sub-content').parent().css('height' ,'auto')
        // 	// $('.sub-content').parent().height(auto)
        // })
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Main Filter Posts
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      MainFilterPosts: function MainFilterPosts() {
        var posts_per = parseInt($pd_js.posts_per);
        var posts_perStep = parseInt($pd_js.posts_per);
        var current_page = $pd_js.current_page_js;
        var max_pages = $pd_js.max_pages;
        var true_posts = $pd_js.true_posts_js; // console.log(true_posts);

        var latestNewsConteiner = $('.latest-news-conteiner');
        $('.latest-news__filter .filter-item').on('click', function () {
          $('.filter-item').removeClass('active');
          $(this).addClass('active');
          var idCat = $(this).attr('id');
          $('#true_loadmore').data('cat', idCat);
          current_page = 1;
          posts_per = posts_perStep;
          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "json",
            // add data type
            data: {
              'action': 'filterType',
              'catname': idCat,
              'query': $pd_js.posts,
              'max_pages': max_pages,
              'page': $pd_js.current_page,
              'first_page': $pd_js.first_page // here is the new parameter

            },
            success: function success(data) {
              latestNewsConteiner.html(data.content);
              console.log(max_pages);

              if (data.total <= posts_per) {
                $('#true_loadmore').hide();
              } else {
                $('#true_loadmore').show();
              }
            }
          });
        });
        jQuery('#true_loadmore').on('click', function () {
          var post_name = $(this).data('cat');
          $(this).addClass('load');
          var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page': current_page,
            'max_pages': max_pages,
            'post_type': post_name
          };
          $.ajax({
            url: $pd_js.ajaxurl,
            data: data,
            dataType: "json",
            // add data type
            type: 'POST',
            success: function success(data) {
              latestNewsConteiner.append(data.content);

              if (data) {
                $('#true_loadmore').removeClass('load');
                current_page++;
                posts_per = posts_per + posts_perStep;
                console.log(max_pages);

                if (data.total <= posts_per) {
                  $('#true_loadmore').hide();
                }
              } else {
                $('#true_loadmore').hide();
              }
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Main Filter Posts Authors
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      MainFilterPostsAuthors: function MainFilterPostsAuthors() {
        // var posts_per = parseInt($pd_js.posts_per) 
        // var posts_perStep = parseInt($pd_js.posts_per)
        var posts_per = 3;
        var posts_perStep = 3;
        var current_page = $pd_js.current_page_js;
        var max_pages = $pd_js.max_pages;
        var true_posts = $pd_js.true_posts_js; // console.log(true_posts);

        var latestNewsConteiner = $('.authors-news-conteiner');
        jQuery('#true_loadmore_authors').on('click', function () {
          var post_name = $(this).data('cat');
          $(this).addClass('load');
          var data = {
            'action': 'loadmore_authors',
            'query': true_posts,
            'page': current_page,
            'max_pages': max_pages,
            'post_type': post_name
          };
          $.ajax({
            url: $pd_js.ajaxurl,
            data: data,
            dataType: "json",
            // add data type
            type: 'POST',
            success: function success(data) {
              latestNewsConteiner.append(data.content);

              if (data) {
                $('#true_loadmore_authors').removeClass('load');
                current_page++;
                posts_per = posts_per + posts_perStep; // console.log(max_pages);

                console.log(posts_per);
                console.log(data.total);

                if (data.total <= posts_per) {
                  $('#true_loadmore_authors').hide();
                }
              } else {
                $('#true_loadmore_authors').hide();
              }
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  About Authors Slider
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      aboutAuthorsSlider: function aboutAuthorsSlider() {
        var $aboutAuthorsSlider = $('.about-authors__slider'); // slideControls   = $('.slider-controls');

        if ($aboutAuthorsSlider.length) {
          $aboutAuthorsSlider.slick({
            infinite: false,
            autoplaySpeed: 5000,
            // autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            swipeToSlide: true,
            dots: false,
            nextArrow: $('.about-authors__slider-next'),
            prevArrow: $('.about-authors__slider-prev'),
            responsive: [{
              breakpoint: 1025,
              settings: {
                slidesToShow: 3
              }
            }, {
              breakpoint: 991,
              settings: {
                slidesToShow: 4
              }
            }, {
              breakpoint: 767,
              settings: {
                slidesToShow: 3
              }
            }, {
              breakpoint: 576,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 370,
              settings: {
                slidesToShow: 1
              }
            }]
          });
        }
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Post Slider
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      postSlider: function postSlider() {
        var $post__slider_large = $('.post__slider_large');

        if ($post__slider_large.length) {
          $post__slider_large.slick({
            slidesToShow: 1,
            asNavFor: '.post__slider_nav',
            // adaptiveHeight: true,
            dots: false,
            nextArrow: $('.about-authors__slider-next'),
            prevArrow: $('.about-authors__slider-prev')
          });
        }

        var $post__slider_nav = $('.post__slider_nav');

        if ($post__slider_nav.length) {
          $post__slider_nav.slick({
            // centerMode: true,
            // infinite: false,
            // variableWidth: true,
            slidesToShow: 5,
            asNavFor: '.post__slider_large',
            // swipeToSlide: true,
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [{
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            }, {
              breakpoint: 576,
              settings: {
                slidesToShow: 5
              }
            }]
          });
        }

        var $product__slider_large = $('.single-product__slider-large');

        if ($product__slider_large.length) {
          $product__slider_large.slick({
            slidesToShow: 1,
            asNavFor: '.single-product__slider-nav',
            adaptiveHeight: true,
            dots: false,
            nextArrow: $('.about-authors__slider-next'),
            prevArrow: $('.about-authors__slider-prev')
          });
        }

        var $product__slider_nav = $('.single-product__slider-nav');

        if ($product__slider_nav.length) {
          $product__slider_nav.slick({
            // centerMode: true,
            // infinite: false,
            // variableWidth: true,
            slidesToShow: 5,
            asNavFor: '.single-product__slider-large',
            // swipeToSlide: true,
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [{
              breakpoint: 767,
              settings: {
                slidesToShow: 3
              }
            }]
          });
        }
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Category Filter Posts
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      CategoryFilterPosts: function CategoryFilterPosts() {
        var posts_per = parseInt($pd_js.posts_per);
        var posts_perStep = parseInt($pd_js.posts_per);
        var current_page = $pd_js.current_page_js;
        var max_pages = $pd_js.max_pages;
        var true_posts = $pd_js.true_posts_js; // console.log(true_posts);
        // var latestNewsConteiner = $('.category_items');
        // $('#category__name ').on('change',function(){
        // 	current_page = 1
        // 	posts_per = posts_perStep
        // 	var idCat = $('#category__name option').filter(":selected").val();
        // 	console.log(idCat);
        // 	// $('#true_loadmore2').data('cat',idCat)
        // 	posts_per = posts_perStep
        // 	$.ajax({
        // 		type: 'POST',
        // 		url: $pd_js.ajaxurl,
        // 		dataType: "json", // add data type
        // 		data: { 
        // 			'action' : 'postsCategory',
        // 			'catName' : idCat,
        // 			'first_page' : $pd_js.first_page,
        // 			'max_pages' : max_pages,
        // 			'page' : current_page,
        // 		},
        // 		success: function( data ) {
        // 			latestNewsConteiner.html( data.content ); 
        // 			console.log(data.cat_name);
        // 			// $('.cat-posts__pag').hide()
        // 		}
        // 	});
        // })
        // let activeSorting = $('.active-sorting-get').text().trim()
        // let activeCategory = $('.active-category').text().trim()
        // let activeTag = $('.active-tag').text().trim()
        // if (activeSorting) {
        // 	$('#products__filters_select').val(activeSorting)
        // 	console.log(activeSorting);
        // }
        // if (activeCategory) {
        // 	$('#category__name').val(activeCategory)
        // 	console.log(activeCategory);
        // }
        // if (activeTag) {
        // $('#category__name').val(activeCategory)
        // console.log(activeTag);
        // var ch = $('#'+activeTag)
        // ch.prop( "checked", true );
        // console.log(ch);
        // }
        // $('.teg-item__chek').on('click', function(){
        // })
        // console.log($('.teg-item__chek'));
        // $('.nice_select').niceSelect()
        // $('#products__filters').on('change',function(){
        // 	$pd_js.current_page = 1;
        // 	$('#blog_search_select_tags').val($('#products__filters_select').val())
        // 	console.log($('#products__filters_select').val());
        // 	console.log($('#products__filters').serialize());
        // 	$.ajax({
        // 		url : $pd_js.ajaxurl,
        // 		data : $('#products__filters').serialize(), // form data
        // 		dataType : 'json', // this data type allows us to receive objects from the server
        // 		type : 'POST',
        // 		success : function( data ){
        // 			console.log(data.max_page);
        // 			// when filter applied:
        // 			// set the current page to 1
        // 			$pd_js.current_page = 1;
        // 			// set the new query parameters
        // 			// misha_loadmore_params.posts = data.posts;
        // 			// set the new max page parameter
        // 			// misha_loadmore_params.max_page = data.max_page;
        // 			// change the button label back
        // 			$('#products__filters').find('button').text('Apply filter');
        // 			// insert the posts to the container
        // 			$('.product_items_wrap').html(data.content);
        // 		}
        // 	});
        // 	// do not submit the form
        // 	return false;
        // });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Sort projects by date
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      projectsSortDate: function projectsSortDate() {
        var latestNewsConteiner = $('.projects-conteiner');
        $('#projects_sort ').on('change', function () {
          var projects_filters_date = $('#projects_sort option').filter(":selected").val();
          console.log(projects_filters_date);
          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "json",
            // add data type
            data: {
              'action': 'projectsFilterDate',
              'projects__filters_date': projects_filters_date
            },
            success: function success(data) {
              latestNewsConteiner.html(data.content);
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Load more media
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      loadMoreMedia: function loadMoreMedia() {
        var activeSorting = $('.active-sorting-get').text().trim();

        if (activeSorting) {
          $('#products__filters_select').val(activeSorting);
        }

        var posts_per = parseInt($pd_js.posts_per);
        var posts_perStep = parseInt($pd_js.posts_per);
        var current_page = $pd_js.current_page_js;
        var max_pages = $pd_js.max_pages;
        var true_posts = $pd_js.true_posts_js;
        jQuery('#true_loadmore_media').on('click', function () {
          var post_name = $(this).data('cat');
          var latestNewsConteiner = $('.latest-news-conteiner'); // let activeSorting = $('.active-sorting-get').text().trim()

          console.log(post_name);
          console.log(activeSorting);
          $(this).addClass('load');
          var data = {
            'action': 'loadmore_media',
            'query': true_posts,
            'page': current_page,
            'max_pages': max_pages,
            'post_type': post_name,
            'orderPost': activeSorting
          };
          $.ajax({
            url: $pd_js.ajaxurl,
            data: data,
            dataType: "json",
            // add data type
            type: 'POST',
            success: function success(data) {
              latestNewsConteiner.append(data.content);

              if (data) {
                $('#true_loadmore_media').removeClass('load');
                current_page++;
                posts_per = posts_per + posts_perStep;
                console.log(current_page);
                console.log(max_pages);
                console.log(data.orderPost);

                if (data.total <= posts_per) {
                  $('#true_loadmore_media').hide();
                }
              } else {
                $('#true_loadmore_media').hide();
              }
            }
          });
        });
      },

      /**
       *-------------------------------------------------------------------------------------------------------------------------------------------
       *  Load more / filter posts archive
       *-------------------------------------------------------------------------------------------------------------------------------------------
       */
      loadMorePosts: function loadMorePosts() {
        // var idallCat = $('#category__name option').filter(":selected").val();
        // console.log(idallCat);
        // if (idallCat != '') {
        // 	$('.cat-posts__tegs').slideDown()
        // }
        var posts_per = parseInt($pd_js.posts_per);
        var posts_perStep = parseInt($pd_js.posts_per);
        var current_page = $pd_js.current_page_js;
        var max_pages = $pd_js.max_pages;
        var true_posts = $pd_js.true_posts_js;
        var activeCategory = $('.active-category').text().trim();
        var chekbokses = $('.teg-item__chek');
        var tagsPost;
        var latestNewsConteiner = $('.category_items');
        var data_total; // Tags filter

        $('.teg-item__chek').on('change', function () {
          var idCat = $('#category__name option').filter(":selected").val();
          var order = $('#posts__order option').filter(":selected").val();
          current_page = 1;
          posts_per = 1;

          if ($(this).prop('checked')) {
            $('#inputCurentTags').val($(this).val());
          } else {
            $('#inputCurentTags').val('');
          }

          var TagsCurent = [];
          chekbokses.each(function (index) {
            if ($(this).prop('checked')) {
              var i = $(this).val();
              TagsCurent.push(i);
              $('#inputCurentTags').val(TagsCurent); // console.log(TagsCurent);
            } else {}
          });
          console.log(TagsCurent + 'sss');
          tagsPost = $('#inputCurentTags').val();

          if (TagsCurent.length > 0) {
            $('.teg-item_reset').show();
          } else {
            $('.teg-item_reset').hide();
          }

          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "json",
            // add data type
            data: {
              'action': 'postsCategory',
              'catName': idCat,
              'first_page': $pd_js.first_page,
              'max_pages': max_pages,
              'orderPost': order,
              'tagsPost': tagsPost,
              'page': current_page
            },
            success: function success(data) {
              latestNewsConteiner.html(data.content);
              console.log(data.tagsPost + ' - $tagsPost');
              console.log(posts_per);
              data_total = data.total;
              console.log(data_total + 'total');
              $('#true_loadmore_posts').show();

              if (data_total <= posts_per) {
                $('#true_loadmore_posts').hide();
              }
            }
          });
        }); // Category filter

        if (activeCategory) {
          $('#category__name').val(activeCategory);
          $('.cat-posts__tegs').show();
        }

        $('#category__name').val(activeCategory);
        $('#category__name').on('change', function () {
          var idallCat = $('#category__name option').filter(":selected").val();

          if (idallCat != '') {
            $('.cat-posts__tegs').slideDown();
          } else {
            $('.cat-posts__tegs').slideUp();
          }

          var order = $('#posts__order option').filter(":selected").val();
          current_page = 1;
          posts_per = 1;
          var tagsPost = $('#inputCurentTags').val();
          var idCat = $('#category__name option').filter(":selected").val(); // console.log(order);
          // $('#true_loadmore2').data('cat',idCat)

          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "json",
            // add data type
            data: {
              'action': 'postsCategory',
              'catName': idCat,
              'first_page': $pd_js.first_page,
              'max_pages': max_pages,
              'orderPost': order,
              'tagsPost': tagsPost,
              'page': current_page
            },
            success: function success(data) {
              latestNewsConteiner.html(data.content);
              console.log(data.order + ' - order');
              console.log(posts_per);
              data_total = data.total;
              console.log(data_total + 'total'); // console.log(data.cat_name);
              // $('.cat-posts__pag').hide()

              $('#true_loadmore_posts').show();

              if (data_total <= posts_per) {
                $('#true_loadmore_posts').hide();
              }
            }
          });
        }); // Order filter

        $('#posts__order').on('change', function () {
          var order = $('#posts__order option').filter(":selected").val();
          current_page = 1;
          posts_per = 1;
          var tagsPost = $('#inputCurentTags').val();
          var idCat = $('#category__name option').filter(":selected").val(); // console.log(order);
          // $('#true_loadmore2').data('cat',idCat)

          $.ajax({
            type: 'POST',
            url: $pd_js.ajaxurl,
            dataType: "json",
            // add data type
            data: {
              'action': 'postsCategory',
              'catName': idCat,
              'first_page': $pd_js.first_page,
              'max_pages': max_pages,
              'orderPost': order,
              'tagsPost': tagsPost,
              'page': current_page
            },
            success: function success(data) {
              latestNewsConteiner.html(data.content);
              console.log(data.order + ' - order');
              console.log(posts_per);
              data_total = data.total;
              console.log(data_total + 'total'); // console.log(data.cat_name);
              // $('.cat-posts__pag').hide()

              $('#true_loadmore_posts').show();

              if (data_total <= posts_per) {
                $('#true_loadmore_posts').hide();
              }
            }
          });
        }); // loadmore

        $('#true_loadmore_posts').on('click', function () {
          var order = $('#posts__order option').filter(":selected").val();
          var tagsPost = $('#inputCurentTags').val();
          var idCat = $('#category__name option').filter(":selected").val();
          var post_name = $(this).data('cat'); // var latestNewsConteiner = $('.category_items');

          console.log(order);
          $(this).addClass('load');
          var data = {
            'action': 'loadmore_postspage',
            'query': true_posts,
            'page': current_page,
            'max_pages': max_pages,
            'post_type': post_name,
            'orderPost': order,
            'category': idCat,
            'tagsPost': tagsPost
          };
          $.ajax({
            url: $pd_js.ajaxurl,
            data: data,
            dataType: "json",
            // add data type
            type: 'POST',
            success: function success(data) {
              latestNewsConteiner.append(data.content);

              if (data) {
                $('#true_loadmore_posts').removeClass('load');
                data_total = data.total;
                current_page++;
                posts_per = posts_per + posts_perStep;
                console.log(data_total + 'total');
                console.log(posts_per);
                console.log(data.order + ' - order');

                if (data_total <= posts_per) {
                  $('#true_loadmore_posts').hide();
                }
              } else {
                $('#true_loadmore_posts').hide();
              }
            }
          });
        }); // Reset tags

        $('.teg-item_reset').on('click', function () {
          var idCat = $('#category__name option').filter(":selected").val();
          var order = $('#posts__order option').filter(":selected").val();
          $('#inputCurentTags').val('');
          current_page = 1;
          posts_per = 1;
          tagsPost = $('#inputCurentTags').val();
          chekbokses.each(function (index) {
            $(this).prop('checked', false);
            $.ajax({
              type: 'POST',
              url: $pd_js.ajaxurl,
              dataType: "json",
              // add data type
              data: {
                'action': 'postsCategory',
                'catName': idCat,
                'first_page': $pd_js.first_page,
                'max_pages': max_pages,
                'orderPost': order,
                'tagsPost': tagsPost,
                'page': current_page
              },
              success: function success(data) {
                latestNewsConteiner.html(data.content);
                data_total = data.total;
                $('#true_loadmore_posts').show();

                if (data_total <= posts_per) {
                  $('#true_loadmore_posts').hide();
                }

                $('.teg-item_reset').hide();
              }
            });
          });
        });
        $('.nice_select').niceSelect();
      }
    };
  }();
})(jQuery);

jQuery(document).ready(function () {
  chThemeModule.init();
});