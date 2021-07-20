<?php /*Template Name: Donation*/ 

get_header();?>
    <section> 
        <div class="container">
            <div class="breadcrumbs">
                <?php
                    if(function_exists('bcn_display')) {
                        bcn_display();
                    }
                ?>
            </div>
        </div>
        
    </section>

    <section class="donation">

        <div class="container">
            <div class="donation__title">
                <div class="title ">
                    <span><?php the_title(); ?></span> 
                </div>
                <div class="donation__link">
                    <a href="<?php the_field('pryvat_bank_posylannya'); ?>"><img src="<?php echo SD_THEME_IMAGE_URI; ?>/pb.svg" alt=""></a>
                    <a href="<?php the_field('pay_pal_posylannya'); ?>"><img src="<?php echo SD_THEME_IMAGE_URI; ?>/ppal.svg" alt=""></a>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="donation__content">
                        <?php the_content(); ?>
                    </div>
                    <div class="donation__requisites">
                        <div class="requisites__title">Реквізити для пожертв</div>
                        <div class="requisites__items">
                            <?php
                                if( have_rows('rekvizyty_dlya_pozhertv') ):
                                    $i = 1;
                                    while( have_rows('rekvizyty_dlya_pozhertv') ) : the_row();
                                        $qr_code = get_sub_field('qr_code');
                                        $url = $qr_code['url'];
                                       
                                    ?>
                                        <div class="requisites-item">
                                            <div class="requisites-item__info">
                                                <div class="requisites-item__name"> <?php the_sub_field('nazva_rahunku'); ?></div>
                                                <ul class="requisites-item__list">
                                                    <?php  
                                                        if( have_rows('dani_rahunku') ):
                                                            while( have_rows('dani_rahunku') ) : the_row();?>

                                                                <li>
                                                                    <span><?php the_sub_field('nazva'); ?>:</span> <?php the_sub_field('znachennya'); ?>
                                                                </li>
                                                            <?php 
                                                            endwhile;
                                                        endif;
                                                    ?>
                                                </ul>
                                            </div>
                                            <div class="requisites-item__qr <?php echo ($i == 1 ) ? "show" : " ";?> " content='показати QR'>
                                                <img src="<?php echo $url; ?>" alt="">
                                            </div>
                                        </div>

                                    <?php ++$i; endwhile;
                                endif;
                            ?>
                            <!-- <div class="requisites-item">
                                <div class="requisites-item__info">
                                    <div class="requisites-item__name">Для переказу через Приватбанк:</div>
                                    <ul class="requisites-item__list">
                                        <li>
                                            <span>Рахунок:</span> 1234 5678 8765 4321
                                        </li>
                                        <li>
                                            <span>Отримувач:</span> Дані отримувача
                                        </li>
                                        <li>
                                            <span>Призначення платежу:</span> Пожертва на собор
                                        </li>
                                    </ul>
                                </div>
                                <div class="requisites-item__qr show" content='показати QR'>
                                    <img src="<?php echo SD_THEME_IMAGE_URI; ?>/qr1.jpg" alt="">
                                </div>
                            </div>
                            <div class="requisites-item">
                                <div class="requisites-item__info">
                                    <div class="requisites-item__name">Переказ з картки інших банків на рахунок:</div>
                                    <ul class="requisites-item__list">
                                        <li>
                                            <span>Отримувач:</span> Дані отримувача
                                        </li>
                                        <li>
                                            <span>Рахунок:</span> 1234 5678 8765 4321
                                        </li>
                                        <li>
                                            <span>IBAN:</span> UA1234856710000012348567123485
                                        </li>
                                        <li>
                                            <span>Банк одержувача:</span> Дані банку
                                        </li>
                                        <li>
                                            <span>РНОКПП одержувача:</span> 4321876512
                                        </li>
                                        <li>
                                            <span>Призначення платежу:</span> Пожертва на собор
                                        </li>
                                    </ul>
                                </div>
                                <div class="requisites-item__qr" content='показати QR'>
                                    <img src="<?php echo SD_THEME_IMAGE_URI; ?>/qr1.jpg" alt="">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    </section>


<?php get_footer(); ?>
