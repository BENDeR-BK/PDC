<?php
get_header(); ?>

<div id="primary" class="content-area post__wrapper ">

    <div class="container">
        <div class="breadcrumbs">
            <?php
                if(function_exists('bcn_display')) {
                    bcn_display();
                }

            ?>

        </div>
        <?php
        
            while ( have_posts() ) : the_post(); ?>
                <div class="post__tages">
                    <?php 
                        $posttags = get_the_tags();
                        if( $posttags ){
                            foreach( $posttags as $tag ){ ?>
                                <div class="tag-item tag-<?php echo $tag->slug ;?>" ><?php echo $tag->name;  ?></div>
                            <?php  }
                        }
                    ?>
                </div>
                <div class="post__title">
                    <?php
                        if ( is_singular() ) :
                            the_title( '<h1 class="entry-title">', '</h1>' );
                        else :
                            the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
                        endif;
                    ?>
                </div>
                <div class="post__date">
                    <span><?php echo get_the_date('j M'); ?>, <?php echo get_the_date('Y'); ?></span>
                </div>
                <div class="row justify-content-center11">
                    
                    <div class="col-lg-2">
                        <div class="post__soc">
                            <span>Поділитися:</span>
                            <?php do_action('nc_share_post'); ?>
                        </div>
                    </div>
                    <div class="col-lg-10 col-xl-8">
                        
                        <div class="post__content">
                            <?php $post_slider = get_field( "post_slider" );

                            if( $post_slider ) { ?>
                                <div class="post__slider-wrapper">
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
                            <?php } ?>
                            
                            

                            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            
                                

                                <div class="entry-content">
                                    <?php
                                    the_content( sprintf(
                                        wp_kses(
                                            /* translators: %s: Name of current post. Only visible to screen readers */
                                            __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'pdc' ),
                                            array(
                                                'span' => array(
                                                    'class' => array(),
                                                ),
                                            )
                                        ),
                                        get_the_title()
                                    ) );

                                
                                    ?>
                                </div><!-- .entry-content -->

            
                            </article><!-- #post-<?php the_ID(); ?> -->
                        </div>
                        <div class="post__soc_mob">
                            <span>Поділитися:</span>
                            <?php do_action('nc_share_post'); ?>
                        </div>
                        
                    </div>
                </div>

            <?php 
            endwhile;
        ?>
    </div>

</div><!-- #primary -->
<div class="similar-posts">
    <div class="container">
        <div class="similar-posts__title">
            <?php 
                $post_type = get_post_type();
                // echo $post_type;
                if ( $post_type == 'audio-posts') {?>
                    <div class="sec-title">Слухайте також</div>
                <?php } elseif ($post_type == 'video-posts'){?>
                    <div class="sec-title">Дивіться також</div>
                <?php } elseif ($post_type == 'post'){?>
                    <div class="sec-title">Читайте також</div>
                <?php }
            ?>
        </div>
        <div class="similar-posts__items row ">
           <?php 
            $cur_cats = get_the_category();
            $cur_cat_name = $cur_cats[0]->slug;
                    
            $args    = array(
                'post_type'      => array( $post_type ), // post types
                'posts_per_page' => 4,
                'category_name' => $cur_cat_name,
            );
            $custom_query = new WP_Query( $args );

                                
            if ( $custom_query->have_posts() ) :
                while ( $custom_query->have_posts() ) :
                    $custom_query->the_post(); ?>
                    <div class="col-lg-3 col-md-6 col-sm-6" >
                        <article id="post-<?php the_ID(); ?>" <?php post_class('article-wrap'); ?>>
                            <div class="blog-item">
                                <div class="blog-item__type blog-item__type_video">Відео</div>
                                <div class="blog-item__type blog-item__type_audio">Аудіо</div>
                                <div class="blog-item__img">
                                    <a href="<?php  the_permalink(); ?>">
                                        <?php the_post_thumbnail(); ?>
                                    </a>
                                </div>
                                <div class="blog-item__meta">
                                    <div class="blog-item__tags">
                                        <?php 
                                            $posttags = get_the_tags();
                                            if( $posttags ){
                                                foreach( $posttags as $tag ){ ?>
                                                    <div class="tag-item tag-<?php echo $tag->slug ;?>" ><?php echo $tag->name;  ?></div>
                                                <?php  }
                                            }
                                        ?>
                                    </div>
                                    <div class="blog-item__cat">
                                        <?php
                                            $cats = get_the_category();
                                            $cat_name = $cats[0]->name;
                                        ?>
                                        <span><?php echo $cat_name;  ?></span>
                                    </div>
                                </div>
                                <div class="blog-item__title">
                                    <a href="<?php  the_permalink(); ?>"><?php the_title(); ?></a>
                                </div>
                                <div class="blog-item__footer">
                                    <div class="blog-item__date">
                                        <?php echo get_the_date('j M'); ?>
                                    </div>
                                </div>
                            </div>

                        </article><!-- #post-<?php the_ID(); ?> -->
                    </div>
            <?php endwhile;

            endif;
            wp_reset_query(); 
            ?>
        </div>
    </div>
</div>
<?php
get_footer();

