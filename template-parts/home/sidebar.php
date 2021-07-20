<div class="latest-news__sidebar">
    <div class="sidebar__head" >
        <div class="sidebar__title">Повідомлення</div>
        <div class="sidebar__link">
            <a href="<?php echo get_post_type_archive_link('message'); ?>">Переглянути все</a>
        </div>
    </div>
    <div class="sidebar__posts row">
        <?php
            $page_ID = get_the_ID();

            // Define paginated posts
            $page    = get_query_var( 'page' );

            $args    = array(
                'post_type'      => array( 'message'), // post types
                'posts_per_page' => 6,
                'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
            );

            // If is_front_page "paged" parameters as $page number
            if ( is_front_page() )
                $args['paged'] = $page;

            // Instantiate custom query
            $custom_query = new WP_Query( $args );

            // Custom loop
            if ( $custom_query->have_posts() ) :
                while ( $custom_query->have_posts() ) :
                    $custom_query->the_post(); ?>
                
                    <article  id="post-<?php the_ID(); ?>" <?php post_class('col-md-6 col-lg-12 article-wrap'); ?> >
                        <div class="blog-item">
                            
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
                            <div class="blog-item__type_message">
                                <?php  the_field('typ_povidomlennya', $post->ID); ?>
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
                
                <?php endwhile;
            endif;
            wp_reset_query(); // Restore the $wp_query and global post data to the original main query.
        ?>
    </div>
    
</div>