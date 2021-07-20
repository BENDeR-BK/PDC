<?php /*Template Name: Media-lib*/

get_header(); ?>
<section>
  <div class="container">
    <div class="breadcrumbs">
      <?php
      if (function_exists('bcn_display')) {
        bcn_display();
      }
      ?>
    </div>
  </div>
</section>

<style>
  /* .name-work-lib {
    font-weight: bold;
  }

  .lib-my p,
  .lib-my p {
    font-size: 18px;
    color: #000;
  }

  .lib-my div,
  .lib-my div {
    font-size: 18px;
    color: #000;
  }

  .lib-my h3 {
    font-size: 21px;
    color: #000;
  }

  .lib-main-item {
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }

  .lib-my {
    margin-bottom: 30px;
    padding-bottom: 30px;
  }

  .filter-block {
    display: flex;
    align-items: center;
  }

  .filter-btn-style,
  .filter-btn {
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    width: max-content;
    margin-right: 20px;
    background: aqua;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all .5s;
  }

  .type-active,
  .translated-active {
    display: block !important;
  }

  .filter-block {
    margin-top: 20px;
  }

  .lib-none,
  .diactive-lib {
    position: absolute !important;
    opacity: 0 !important;
  }

  .filter-btn-type-all,
  .filter-btn-translate-all,
  .filter-btn-age-all {
    display: flex !important;
  }



  .filter-block {
      padding: 0;
      display: block;
  } */
</style>

<style>

</style>

<section class="cat-posts lib-my library-wrapper">
  <div class="container">

    <div class="shop__head">
      <div class="cat-posts__title">
        <div class="title ">
          <span>
            Бібліотека
          </span>
        </div>
        <div class="cat-posts__filter">


        </div>
      </div>
    </div>

    <div class="row ">
      <div class="col-lg-3 col-md-4">
        <div class="filter__category">
          <div class="filter-block-item">
            <div class='filter-block__title'>Тип тексту</div>
            <ul class="filter-block type">
              <li class="filter-btn-style filter-btn-type-all">Всі</li>
              <li class="filter-btn-style filter-btn-type">Коментар</li>
              <li class="filter-btn-style filter-btn-type">Переклад</li>
              <li class="filter-btn-style filter-btn-type">Видання</li>
            </ul>
          </div>
          <div class="filter-block-item">
            <div class='filter-block__title'>Мова тексту</div>
            <ul class="filter-block">
              <li class="filter-btn-style filter-btn-translate-all">Всі</li>
              <li class="filter-btn-style filter-btn-translate">Латинська</li>
              <li class="filter-btn-style filter-btn-translate">Грецька</li>
              <li class="filter-btn-style filter-btn-translate">Німецька</li>
              <li class="filter-btn-style filter-btn-translate">Українська</li>
              <li class="filter-btn-style filter-btn-translate">Російська</li>
              <li class="filter-btn-style filter-btn-translate">Англійська</li>
              <li class="filter-btn-style filter-btn-translate">Французька</li>
              <li class="filter-btn-style filter-btn-translate">Церковнословянська</li>
            </ul>
          </div>
          <div class="filter-block-item">
            <div class='filter-block__title'>Дата роботи</div>
            <ul class="filter-block">
              <li class="filter-btn-style filter-btn-age-all">Всі</li>
              <li class="filter-btn-style filter-btn-age" text='До Різдва Христового'>до-РХ</li>
              <li class="filter-btn-style filter-btn-age" text='1-2 ст.'>століття-1-2</li>
              <li class="filter-btn-style filter-btn-age" text='3-5 ст.'>століття-3-5</li>
              <li class="filter-btn-style filter-btn-age" text='6-10 ст.'>століття-6-10</li>
              <li class="filter-btn-style filter-btn-age" text='11-16 ст.'>століття-11-16</li>
              <li class="filter-btn-style filter-btn-age" text='17-19 ст.'>століття-17-19</li>
              <li class="filter-btn-style filter-btn-age" text='1901-1921 рр.'>pp-1901-1921</li>
              <li class="filter-btn-style filter-btn-age" text='1922-1990 рр.'>pp-1922-1990</li>
              <li class="filter-btn-style filter-btn-age" text='1991-2000 рр.'>pp-1991-2000</li>
              <li class="filter-btn-style filter-btn-age" text='2001-сучасність'>сучасність-2001</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-md-8">
        <div class="filter-library__content">
          <div class="serach-nothing-find" style="display: none;">
            <h3>нічого не знайдено нажаль</h3>
          </div>
          <?php
          if (have_rows('item-lib')) :
            while (have_rows('item-lib')) : the_row();
          ?>

              <div class="lib-main-item">
                <h3 class="accordion"> <?php the_sub_field('pysmennyk'); ?> </h3>

                <div class="panel">
                  <?php
                  if (have_rows('roboty-lib')) :
                    while (have_rows('roboty-lib')) : the_row();
                  ?>

                      <div class="name-work-lib">
                        <span class="name-work-item">
                          <?php the_sub_field('name_work'); ?>
                          <a href="<?php the_sub_field('name_work_link'); ?>" class="name-work-item__link"><img src="<?php echo SD_THEME_IMAGE_URI; ?>/info.svg" alt=""></a>
                        </span>
                        <?php
                        if (have_rows('Type_text_repyter')) :
                          while (have_rows('Type_text_repyter')) : the_row();
                        ?>
                            <a href='<?php the_sub_field('link_of_type_lyb'); ?>' class="lib-item">-
                              <span class="lib-text-age <?php the_sub_field('age-text-select'); ?>"></span>
                              <span class="lib-text-key <?php the_sub_field('key_word_inline'); ?>"></span>
                              <span class="lib-text-type <?php the_sub_field('Type-text-select'); ?>"> <?php the_sub_field('Type-text-select'); ?> </span>
                              <span class="lib-lang-type <?php the_sub_field('lang-text-select'); ?>"> (<?php the_sub_field('lang-text-select'); ?>) </span>
                              <span> <?php the_sub_field('text'); ?> </span>
                            </a>
                        <?php
                          endwhile;
                        else :
                        endif;
                        ?>
                      </div>
                  <?php
                    endwhile;
                  else :
                  endif;
                  ?>
                </div>
              </div>
          <?php
            endwhile;
          else :
          endif;
          ?>
        </div>
      </div>
    </div>

  </div>
</section>


<?php get_footer(); ?>



<script>
  let libTextTypeAll = document.querySelectorAll('.lib-text-type')
  let libLangTypeAll = document.querySelectorAll('.lib-lang-type')
  let libAgeTypeAll = document.querySelectorAll('.lib-text-age')

  let libItem = document.querySelectorAll('.lib-item')
  let nameWork = document.querySelectorAll('.name-work-lib')
  let mainItem = document.querySelectorAll('.lib-main-item')
  let filterBtnsTranslated = document.querySelectorAll('.filter-btn-translate')
  let filterBtnsType = document.querySelectorAll('.filter-btn-type')
  let filterBtnsAge = document.querySelectorAll('.filter-btn-age')
  let filterBtnsDefault = document.querySelectorAll('.filter-btn-style')
  const typeActive = 'type-active'
  const translatedActive = 'translated-active'
  const ageActive = 'age-active'
  let checkedTypeActive
  let checkedTranslatedActive
  let checkedAgeActive
  let activeTypeText
  let activeTranslatedText
  let activeAgeText
  checkedTypeActive = ''
  checkedTranslatedActive = ''
  checkedAgeActive = ''

  filterBtnsTranslated.forEach(btn => {
    btn.addEventListener('click', () => {
      getFilter(btn.textContent, translatedActive)
      checkedTranslatedActive = translatedActive
      checkedActiveState()
      activeTranslatedText = btn.textContent
      getDisactiveFor()
    })
  })
  filterBtnsType.forEach(btn => {
    btn.addEventListener('click', () => {
      getFilter(btn.textContent, typeActive)
      checkedTypeActive = typeActive
      checkedActiveState()
      activeTypeText = btn.textContent
      getDisactiveFor()
    })
  })
  filterBtnsAge.forEach(btn => {
    btn.addEventListener('click', () => {
      getFilter(btn.textContent, ageActive)
      checkedAgeActive = ageActive
      checkedActiveState()
      activeAgeText = btn.textContent
      getDisactiveFor()
    })

  })

  const getFilter = (filterId, filterType) => {
    let commentItem = document.querySelectorAll('.' + filterId)
    libItem.forEach(e => {
      e.classList.add('diactive-lib')
    })

    commentItem.forEach(e => {
      e.parentElement.classList.remove('diactive-lib')
      e.parentElement.classList.add(filterType)
    })

    // hide button
    filterBtnsDefault.forEach(btnDefaultMain => {
      let test = document.querySelectorAll('.' + btnDefaultMain.textContent)
      let count = 0
      libItem.forEach(e => {
        if (e.classList.contains('diactive-lib')) {
          if (e.querySelector('.' + btnDefaultMain.textContent)) {
            count++
          }
        }
      })
      if (count == test.length) {
        filterBtnsDefault.forEach(btnDefault => {
          if (btnDefault.textContent == btnDefaultMain.textContent) {
            btnDefault.style.display = 'none'
          }
        })
      }
    })
  }

  const checkedActiveState = () => {
    if (checkedTranslatedActive != '' && checkedTypeActive != '' && checkedAgeActive != '') {
      libItem.forEach(e => {
        e.classList.add('diactive-lib')
        if (e.classList.contains(checkedTranslatedActive) && e.classList.contains(checkedTypeActive) && e.classList.contains(checkedAgeActive)) {
          e.classList.remove('diactive-lib')
        }
      })
    } else if (checkedTranslatedActive != '' && checkedTypeActive != '') {
      libItem.forEach(e => {
        e.classList.add('diactive-lib')
        if (e.classList.contains(checkedTranslatedActive) && e.classList.contains(checkedTypeActive)) {
          e.classList.remove('diactive-lib')
        }
      })
    } else if (checkedTranslatedActive != '' && checkedAgeActive != '') {
      libItem.forEach(e => {
        e.classList.add('diactive-lib')
        if (e.classList.contains(checkedTranslatedActive) && e.classList.contains(checkedAgeActive)) {
          e.classList.remove('diactive-lib')
        }
      })
    } else if (checkedAgeActive != '' && checkedTypeActive != '') {
      libItem.forEach(e => {
        e.classList.add('diactive-lib')
        if (e.classList.contains(checkedAgeActive) && e.classList.contains(checkedTypeActive)) {
          e.classList.remove('diactive-lib')
        }
      })
    }



  }

  const getDisactiveFor = () => {
    nameWork.forEach(e => {
      let hidden = 0
      e.querySelectorAll('.lib-item').forEach(child => {
        if (child.classList.contains('diactive-lib')) {
          hidden++
        }
      })
      if (hidden == e.querySelectorAll('.lib-item').length) {

        e.classList.add('diactive-lib')

      }
    })

    mainItem.forEach(e => {
      let hidden = 0

      e.querySelectorAll('.name-work-lib').forEach(child => {
        if (child.classList.contains('diactive-lib')) {
          hidden++
        }
      })
      if (hidden == e.querySelectorAll('.name-work-lib').length) {
        e.classList.add('diactive-lib')
      }
    })

    filterBtnsDefault.forEach(e => {
      if (e.textContent == activeTranslatedText || e.textContent == activeAgeText || e.textContent == activeTypeText) {
        e.classList.add('active_filter')
      }
    })

    let countMainItem = 0
    mainItem.forEach(e => {
      if (e.classList.contains('diactive-lib')) {
        countMainItem++
      }
    })
    if (countMainItem == mainItem.length) {
      document.querySelector('.serach-nothing-find').style.display = 'block'
    } else {
      document.querySelector('.serach-nothing-find').style.display = 'none'
    }

  }

  document.querySelector('.filter-btn-type-all').addEventListener('click', () => {
    getRemoveFilter(activeTranslatedText, activeAgeText)
  })
  document.querySelector('.filter-btn-translate-all').addEventListener('click', () => {
    getRemoveFilter(activeTypeText, activeAgeText)
  })
  document.querySelector('.filter-btn-age-all').addEventListener('click', () => {
    getRemoveFilter(activeTypeText, activeTranslatedText)
  })

  const getRemoveFilter = (activeTextFirst, activeTextTwo) => {
    let removeDeactive = (removeItem) => {
      removeItem.forEach(e => {
        e.classList.remove('diactive-lib')
      })
    }

    removeDeactive(libItem)
    removeDeactive(mainItem)
    removeDeactive(nameWork)
    activeTypeText = ''
    activeTranslatedText = ''
    activeAgeText = ''
    checkedTypeActive = ''
    checkedTranslatedActive = ''
    checkedAgeActive = ''

    libItem.forEach(e => {
      e.classList.remove('type-active')
    })
    libItem.forEach(e => {
      e.classList.remove('translated-active')
    })
    libItem.forEach(e => {
      e.classList.remove('age-active')
    })

    filterBtnsDefault.forEach(btnDefaultMain => {

      btnDefaultMain.style.display = 'flex'
    })

    filterBtnsDefault.forEach(e => {
      e.classList.remove('active_filter')
    })

    filterBtnsDefault.forEach(e => {
      if (e.textContent == activeTextFirst) {
        e.click()
      }
      if (e.textContent == activeTextTwo) {
        e.click()
      }
    })
  }





  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
</script>