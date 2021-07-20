<?php
    $featured_posts = get_field('knygy_odniyeyi_seriyi');

get_header(); ?>


    <section class='product-section'>
        <div class="container">
            <div class="breadcrumbs">
                <?php
                    if(function_exists('bcn_display')) {
                        bcn_display();
                    }
                ?>
            </div>
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-md-12">
                    <div class="single-product__slider">
            
                        <div class="post__slider_large">
                            <?php while( have_rows('post_slider') ) : the_row(); 
                                $image = get_sub_field('slide');
                                $url = $image['url'];
                            ?>
                                <div class="post__slider-item">
                                    <img src="<?php echo $url; ?>" alt="image">
                                </div>
                            <?php endwhile;?>
                        </div>

                        <div class="post__slider_nav">
                            <?php while( have_rows('post_slider') ) : the_row(); 
                                $image = get_sub_field('slide');
                                $url = $image['url'];
                            ?>
                            
                                <div class="post__slider-item">
                                    <img src="<?php echo $url; ?>" alt="image">
                                </div>
                            <?php endwhile;?>
                        </div>
                        <div class="post__slider_arrows">
                            <div class="about-authors__slider-prev">Попередня</div>
                            <div class="about-authors__slider-next">Наступна</div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-12">
                    
                    <div class="single-product__content">
                        <div class="single-product__title"><?php the_title();?></div>
                        <div class="single-product__sub-title"><?php the_field('subtitle'); ?></div>
                        <?php if( $featured_posts ): ?>
                            <div class="single-product__link">
                                <a href="#product__colections">Переглянути всю серію</a> 
                            </div>
                        <?php endif; ?>
                        <div class="single-product__desc-mob d-md-none">Характеристики</div>
                        <div class="single-product__desc">
                            <?php while( have_rows('harakterystyky') ) : the_row(); ?>
                                <div class="single-product__desc-item">
                                    <div class="single-product__desc-key"><?php the_sub_field('nazva'); ?></div>
                                    <div class="single-product__desc-val"><?php the_sub_field('znachennya'); ?></div>
                                </div>
                            <?php endwhile;?>
                            
                        </div>
                        <div class="single-product__info d-none d-md-block">
                            <div class="single-product__info-item">
                                <span>Доставка</span> 
                                <div class="info-item__tooltip">
                                    <?php the_field('dostavka', 'options'); ?>
                                </div>
                            </div>
                            <div class="single-product__info-item">
                                <span>Оплата</span>
                                <div class="info-item__tooltip">
                                    <?php the_field('oplata', 'options'); ?>
                                </div>
                            </div>
                        </div>
                        <div class="single-product__button">
                            <div class="single-product__price"><?php the_field('price'); ?></div>
                            <div class="single-product__btn">
                                <a href="#"  data-toggle="modal" data-title='<?php the_title();?>' data-target="#order_product"  class='pd-btn pd-btn_red'>Залишити запит на книгу</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="single-product__flip d-none d-md-block">
                        <?php
                            $file = get_field('pdf');
                            if( $file ): ?>
                                <a source="<?php echo $file['url']; ?> " id="df_manual_custom"class='_df_custom pd-btn pd-btn_white'><span class="lt-ico lt-ico-book"></span> Погортати книгу</a>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="single-product__share">
                        <a href="#" id='answer-example-share-button' class="share d-md-none">
                            <span class="lt-ico lt-ico-share"></span>
                            <span>Поділитися</span>
                        </a>
                        <a href="#" data-toggle="modal"  data-target="#product_share"  class="share d-none d-md-block">
                            <span class="lt-ico lt-ico-share"></span>
                            <span>Поділитися</span>
                        </a>
                    </div>
                    <div class="single-product__info  d-md-none">
                        <div class="single-product__info-item">
                            <span>Доставка</span> 
                            <div class="info-item__tooltip">
                                <?php the_field('dostavka', 'options'); ?>
                            </div>
                        </div>
                        <div class="single-product__info-item">
                            <span>Оплата</span>
                            <div class="info-item__tooltip">
                                <?php the_field('oplata', 'options'); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="single-product-description">
        <div class="container">
            <div class="single-product-description__title">
                <div class="sec-title">Опис</div>      
            </div>
            <div class="single-product-description__text">
                <?php the_content();?>
            </div>
        </div>
    </section>
    <?php 
        if( $featured_posts ): ?>
                                
        <section class="product__colections" id='product__colections'>
            <div class="container">
                <div class="product__colections__title">
                    <div class="sec-title"><?php the_field('sekcziya_kolekcziyi_zagolovok'); ?></div>
                </div>
                <div class="product__colections-items">
                    <div class="">
                        <div class="product__colections__slider">
                                <?php foreach( $featured_posts as $post ): 
                                    // Setup this post for WP functions (variable must be named $post).
                                    setup_postdata($post); ?>
                                    <div class="colections-slide">
                                        <div class="product-wrap">
                                            <div class="product">
                                                <div class="product__img">
                                                    <!-- <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product2.jpg" alt=""> -->
                                                    <?php the_post_thumbnail(); ?>
                                                    <a href="<?php the_permalink(); ?>" class='product__img-bg'>
                                                        <span class="lt-ico lt-ico-view"></span>  
                                                        Переглянути
                                                    </a>
                                                </div>
                                                <div class="product__name"><a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a></div>
                                                <div class="product__price"><?php the_field('price'); ?></div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                                <?php 
                                // Reset the global post object so that the rest of the page works correctly.
                                wp_reset_postdata(); ?>
                    
                        </div>
                        <div class="colections__slider_arrows">
                            <div class="colections__slider-prev">Попередня</div>
                            <div class="colections__slider-next">Наступна</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    <?php endif; ?>

    <?php
        $kupyty_vsyu_seriyu = get_field('kupyty_vsyu_seriyu');
        if( $kupyty_vsyu_seriyu['tekst'] ): ?>
          
        <section class="buy-colections">
            <div class="container">
                <div class="buy-colections__wrapper">
                    <div class="buy-colections__text">
                        <div class="buy-colections__title">
                            <span><?php echo $kupyty_vsyu_seriyu['tekst']; ?></span>
                            
                            <span  class="buy-colections__price"><?php echo $kupyty_vsyu_seriyu['czina_razom']; ?></span>
                        </div>
                        <div class="buy-colections__sale">(економія <?php echo $kupyty_vsyu_seriyu['ekonomiya']; ?>)</div>
                    </div>
                    <div class="buy-colections__btn">
                        <a href="#"  data-toggle="modal" data-title='<?php the_title();?>' data-target="#order_product" class='pd-btn pd-btn_red'>Залишити запит</a>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>
    
    <section class="product-recommendations">
            
        <div class="container">
            <div class="product-recommendations__title">
                <div class="sec-title">Рекомендації для Вас</div>
            </div>
            <div class="product-recommendations__items">
                <div class="">
                    <div class="product-recommendations__slider">
                        <?php    
                            $terms = get_the_terms( $post->ID , 'products-category' );
                            $cur_cat_name = $terms[0]->slug;

                            // echo $cur_cat_name;
                        
                            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                            $args    = array(
                                'post_type'      => 'products', // post types
                                'posts_per_page' => 4,
                                'post__not_in' => array( get_the_ID() ),
                                'orderby' => 'rand',
                                'tax_query' => array(
                                    'relation' => 'AND',
                                    array(
                                        'taxonomy' => 'products-category',
                                        'field' => 'slug',
                                        'terms' => $cur_cat_name 
                                    ),
                                ),
                            );
                            $custom_query = new WP_Query( $args );

                                                
                            if ( $custom_query->have_posts() ) :
                                while ( $custom_query->have_posts() ) :
                                    $custom_query->the_post(); ?>
                                    <div class="recommendations-slide">
                                        <div class="product-wrap">
                                            <div class="product">
                                                <div class="product__img">
                                                    <?php the_post_thumbnail(); ?>
                                                    <a href="<?php the_permalink(); ?>" class='product__img-bg'>
                                                        <span class="lt-ico lt-ico-view"></span>  
                                                        Переглянути
                                                    </a>
                                                </div>
                                                <div class="product__name"><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></div>
                                                <div class="product__price"><?php the_field('price'); ?></div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endwhile;

                            endif; wp_reset_query(); 
                        ?>
                    </div>
                    <div class="product-recommendations__slider_arrows">
                        <div class="recommendations__slider-prev">Попередня</div>
                        <div class="recommendations__slider-next">Наступна</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <div class="modal fade " id="order_product" tabindex="-1" role="dialog" aria-labelledby="order_product" aria-modal="true">
        <div class="modal-dialog modal_dialog modal-dialog-centered" role="document">
            <div class="modal-content modal__content ">
                <div class="modal__header">
                    <div class="modal-close modal__close-btn " data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><span class="lt-ico lt-ico-close"></span>  </span>
                    </div>
                    <div class="modal__title">
                        <div class="md-title">
                            <?php _e("Залиште свої дані", 'pdc'); ?>
                        </div>
                        <div class="md-subtitle">
                            <?php _e(" ми зв’яжемося з Вами для уточнення наявності та доставки товару", 'pdc'); ?>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal__form">
                        <?php 
                            echo do_shortcode('[contact-form-7 id="180" title="Залишити запит"]'); 
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade " id="product_share" tabindex="-1" role="dialog" aria-labelledby="product_share" aria-modal="true">
        <div class="modal-dialog modal_dialog modal-dialog-centered" role="document">
            <div class="modal-content modal__content ">
                <div class="modal__header">
                    <div class="modal-close modal__close-btn " data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><span class="lt-ico lt-ico-close"></span>  </span>
                    </div>
                    <div class="modal__title">
                        <div class="md-title">
                            <?php _e("Поділитися", 'pdc'); ?>
                        </div>
                        <div class="md-subtitle">
                            
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="modal__form">
                        <?php do_action('nc_share_post'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php


get_footer();
