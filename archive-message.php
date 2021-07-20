<?php /*Template Name: Arhiv*/ 

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

<section class='cat-posts'>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="cat-posts__head">
                    <div class="cat-posts__title">
                        <div class="title ">
                            <span>
                            Повідомлення
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row category_items">
            <?php

                $args    = array(
                    'post_type'      => array( 'message' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
                );
                // Instantiate custom query
                $custom_query = new WP_Query( $args );
            
                if ( $custom_query -> have_posts() ) :
                    while ($custom_query -> have_posts() ) : $custom_query ->the_post(); ?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
        <div class="cat-posts__pag">
                    
            <?php 
                 $argsp    = array(
                    'prev_text'          => __( '&laquo;', 'pdc' ),
                    'next_text'          => __( '&raquo;', 'pdc' ),
                    'post_type'      => array( 'message' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                    // 'base'          => 'http://localhost:3000/bogoslovska-dumka111/',
                );
                

                $custom_queryp = new WP_Query( $argsp );

                $total_pages = $custom_queryp->max_num_pages;

                if ($total_pages > 1) {

                    $current_page = max(1, get_query_var('paged')); 
                    ?> 
                    <div class="custpagination">
                        <?php
                            cpt_pagination($custom_queryp->max_num_pages); 
                  
                        ?>
                    </div>
                <?php 
                } 
             ?>
           
        </div>
    </div>
</section>




<?php get_footer(); ?>
