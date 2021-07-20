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
<div class="container">
    <div class="screen-pag">
        <div class="screen-pag-item active" data-screen='#about'></div>
        <div class="screen-pag-item" data-screen='#chronology'></div>
        <div class="screen-pag-item" data-screen='#employees'></div>
        <div class="screen-pag-item" data-screen='#about-authors'></div>
    </div>
</div>


<section class="about section-pagination" id='about'>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="about__title">
                    <div class="sec-title"><?php the_title();?></div>
                </div>
                <div class="about__sub-title"><?php the_field('zagolovok_nad_zobrazhennyam');?></div>
                <div class="about__img">
                    <?php 
                        $image = get_field('zobrazhennya');
                        $url = $image['url'];
                    ?>
                    <img src="<?php echo $url; ?>" alt="img">
                </div>
            </div>
            <div class="col-lg-8">
                <div class="about__text">
                    <div class="about__text--title"><?php the_field('zagolovok');?></div>
                    <?php the_field('tekst');?>
                
                </div>
                <div class="about__anchors">
                    <ul>
                        <li>
                            <a href="#about" class='active'>Про нас</a>
                        </li>
                        <li>
                            <a href="#chronology">Хронологія ДЦ</a>
                        </li>
                        <li>
                            <a href="#employees">Співробітники</a>
                        </li>
                        <li>
                            <a href="#about-authors">Автори</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>