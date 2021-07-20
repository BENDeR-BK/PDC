<section class='about-authors section-pagination' id='about-authors'>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="about-authors__title">
                    <div class="sec-title"><?php the_field('zagolovok_avtory');?></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="about-authors__subtitle"><?php the_field('pid_zagolovok_avtory');?></div>
            </div>
            <div class="col-lg-8">
                <div class="about-authors__text">
                    <?php the_field('tekst_avtory');?>
                </div>
            </div>
        </div>
        <div class="about-authors__items">
            <div class="about-authors__slider">
                <?php
                    if( have_rows('avtory') ):
                    
                        while( have_rows('avtory') ) : the_row();
                            $foto = get_sub_field('foto');
                            $url = $foto['url'];
                            $posada = get_sub_field('posada');
                            $imya = get_sub_field('imya');
                            $posylannya_na_statti = get_sub_field('posylannya_na_statti');
                        ?>
                            <div class="about-authors-item">
                                <div class="about-authors-item__img">
                                    <img src="<?php echo $url; ?>" alt="img">
                                </div>
                                <div class="about-authors-item__desc"><?php echo $posada; ?></div>
                                <div class="about-authors-item__name"><?php echo $imya; ?></div>
                                <div class="about-authors-item__link">
                                    <a href="<?php echo $posylannya_na_statti; ?>">Переглянути всі статті </a>
                                </div>
                            </div>
                        <?php endwhile;
                    endif;
                ?>
                
            </div>
            <div class="about-authors__slider-arrows">
                <div class="about-authors__slider-prev">Попередня</div>
                <div class="about-authors__slider-next">Наступна</div>
            </div>
        </div>
    </div>
</section>