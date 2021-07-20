<?php /*Template Name: Projects*/ 

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

    <section class="projects">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="projects__title">
                        <div class="sec-title"><?php the_field('zagolovok') ;?></div>
                    </div>
                    <div class="projects__sub-title"><?php the_field('pid_zagolovok') ;?></div>
                </div>
                <div class="col-lg-8">
                    <div class="projects__text">
                        <div class="projects__text--title"><?php the_field('data_zasnuvannya') ;?></div>
                        <?php the_field('tekst') ;?>
                    </div>
                    <div class="projects__btn">
                        <a href="#projects_posts">Переглянути проекти</a>
					    <img src="<?php echo SD_THEME_IMAGE_URI; ?>/arr_d.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class='projects-posts' id='projects_posts'>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="cat-posts__head">
                        <div class="cat-posts__title">
                            <div class="title ">
                                <span>
                                Проекти
                                </span>
                            </div>
                            <div class="cat-posts__filter">
                                <div class="cat-posts__select">
                                    <select name="projects_sort" class='nice_select' id="projects_sort">
                                        <option value="date-DESC">Нові спочатку</option>
                                        <option value="date-ASC">Старі спочатку</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row projects-conteiner" >
                <?php
                    $args    = array(
                        'post_type'      => array( 'projects' ), // post types
                        'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                        'posts_per_page'          => 999999
                    );
                   
                    $custom_query = new WP_Query( $args );

                    if ( $custom_query->have_posts() ) :
                        while ( $custom_query->have_posts() ) :
                            $custom_query->the_post(); ?>

                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <article id="post-<?php the_ID(); ?>" <?php post_class('article-wrap'); ?>>
                                    <div class="blog-item blog-item_project">
                                        
                                        <div class="blog-item__img">
                                            <?php the_post_thumbnail(); ?>

                                            <a href="<?php  the_permalink(); ?>" class="blog-item__img-bg">
                                                <span class="lt-ico lt-ico-view"></span>  
                                                Переглянути та Підтримати 
                                            </a>
                                        </div>
                                        
                                        <div class="blog-item__title">
                                            <a href="<?php  the_permalink(); ?>"><?php the_title(); ?></a>
                                            <?php if (get_field('zagalna_suma_proektu')) { ?>
                                                <div class="blog-item__subtitle">Загальна сума проекту <?php the_field('zagalna_suma_proektu'); ?> грн</div>
                                            <?php  } else { ?>
                                                <div class="blog-item__subtitle">Перманентний проект. Потребує постійного фінансування</div>
                                            <?php } ?>
                                        </div>

                                        <?php 
                                            if (get_field('zagalna_suma_proektu')) { ?>
                                                <div class="blog-item__footer">
                                                    <?php 
                                                        $total_str = get_field('zagalna_suma_proektu');
                                                        $total = str_replace(" ","",$total_str);
                                                        $zibrano_str = get_field('zibrano');
                                                        $zibrano = str_replace(" ","",$zibrano_str);
                                                        $zalyshylos = $total - $zibrano ;
                                                        $sum = ( $total - $zalyshylos ) / $total *100;
                                                        $zalyshylos_str = number_format($zalyshylos, 0, '.', ' ');
                                                    ?>
                                                    <div class="blog-item__progres">
                                                        <div class="selected">
                                                            <p><?php the_field('zibrano'); ?> грн</p>
                                                            <span>зібрано</span>
                                                        </div>
                                                        <div class="lost">
                                                            <p><?php  echo $zalyshylos_str ;?> грн</p>
                                                            <span>залишилось</span>
                                                        </div>
                                                        <div class="progres-bar">
                                                            <div class="progres-done" style='width: <?php  echo $sum ;?>%'></div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>.
                                            <?php  }
                                        ?>
                                        
                                        
                                    </div>

                                </article><!-- #post-<?php the_ID(); ?> -->
                            </div>
                        <?php endwhile;

                    endif;
                    wp_reset_query(); 
                ?>
            </div>
        </div>
    </section>
<?php get_footer(); ?>
