<?php /*Template Name: library*/

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
  .name-work-lib {
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
  }

  .filter-btn-style.active {
      background: red;
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
    display: none !important;
  }
  
</style>

<section class='cat-posts'>
  <div class="container  lib-my">


    <div class="filter-block type">
      <span class="filter-btn-style active" data-btn='type' data-type='Всі' data-filter='Всі'>Всі</span>
      <span class="filter-btn-style" data-btn='type' data-type='Коментар' data-filter='Коментар'>Коментар</span>
      <span class="filter-btn-style" data-btn='type' data-type='Переклад' data-filter='Переклад'>Переклад</span>
      <span class="filter-btn-style" data-btn='type' data-type='видання' data-filter='видання'>Видання</span>
    </div>
    <div class="filter-block">
      <span class="filter-btn-style active" data-btn='lang' data-lang='Всі' data-filter='Всі'>Всі</span>
      <span class="filter-btn-style" data-btn='lang' data-lang='Латинська' data-filter='Латинська'>Латинська</span>
      <span class="filter-btn-style" data-btn='lang' data-lang='Грецька' data-filter='Грецька'>Грецька</span>
      <span class="filter-btn-style" data-btn='lang' data-lang='Німецька' data-filter='Німецька'>Німецька</span>
    </div>

    <?php
    if (have_rows('item-lib')) :
      while (have_rows('item-lib')) : the_row();
    ?>
        <div class="lib-main-item">
          <br>
          <br>
          <h3> <?php the_sub_field('pysmennyk'); ?> </h3>

          <?php
          if (have_rows('roboty-lib')) :
            while (have_rows('roboty-lib')) : the_row();
          ?> 
              <div class="name-work-lib"><span class="name-work-item"><?php the_sub_field('name_work'); ?></span>
                <?php
                if (have_rows('Type_text_repyter')) :
                  while (have_rows('Type_text_repyter')) : the_row();
                ?>
                    <p class="lib-item Всі  <?php the_sub_field('Type-text-select'); ?> <?php the_sub_field('lang-text-select'); ?>" data-type='<?php the_sub_field('Type-text-select'); ?>' data-lang='<?php the_sub_field('lang-text-select'); ?>'>
                      <span class="lib-text-type " >
                        <?php the_sub_field('Type-text-select'); ?> 
                      </span> 
                      <span class="lib-lang-type " >
                        (<?php the_sub_field('lang-text-select'); ?>)
                      </span>
                      <span> <?php the_sub_field('text'); ?> </span>
                    </p>
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
    <?php
      endwhile;
    else :
    endif;
    ?>
  </div>
</section>


<?php get_footer(); ?>


<!-- 
<script>
  let libItem = document.querySelectorAll('.lib-item')
  let nameWork = document.querySelectorAll('.name-work-lib')
  let mainItem = document.querySelectorAll('.lib-main-item')
  let filterBtnsTranslated = document.querySelectorAll('.filter-btn-translate')
  let filterBtnsType = document.querySelectorAll('.filter-btn-type')
  const typeActive = 'type-active'
  const translatedActive = 'translated-active'
  let checkedTypeActive
  let checkedTranslatedActive
  checkedTypeActive = ''
  checkedTranslatedActive = ''

  filterBtnsTranslated.forEach(btn => {
    btn.addEventListener('click', () => {
      getFilter(btn.textContent, translatedActive)
      checkedTranslatedActive = translatedActive
      checkedActiveState()
    })
  })

  filterBtnsType.forEach(btn => {
    btn.addEventListener('click', () => {
      getFilter(btn.textContent, typeActive)
      checkedTypeActive = typeActive
      checkedActiveState()
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
  }

  const checkedActiveState = () => {
    if (checkedTranslatedActive != '' && checkedTypeActive != '') {
      libItem.forEach(e => {
        e.classList.add('diactive-lib')
        if (e.classList.contains(checkedTranslatedActive) && e.classList.contains(checkedTypeActive)) {
          e.classList.remove('diactive-lib')
        }
      })
    }
  }


  document.querySelector('.filter-btn-type-all').addEventListener('click', () => {
    getRemoveFilter()
  })

  const getRemoveFilter = () => {
    let removeDeactive = (removeItem) => {
      removeItem.forEach(e => {
        e.classList.remove('diactive-lib')
      })
    }
    removeDeactive(libItem)
    removeDeactive(mainItem)
    removeDeactive(nameWork)
  }
</script> -->