<?php /*Template Name: Front*/ get_header();?>

<section class='latest-news'>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="latest-news__head">
                    <div class="title ">
                        <span>
                            Останні новини
                        </span>
                    </div>
                    <div class="latest-news__filter">
                        <div class="filter-item active" id='post'>Статті</div>
                        <div class="filter-item" id='video-posts'>Відео</div>
                        <div class="filter-item" id='audio-posts'>Аудіо</div>
                        <div class="filter-item " id='allPosts'>Всі</div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="latest-news__items">
                    <div class="row latest-news-conteiner">
                        <?php
                            $page_ID = get_the_ID();
                            $page    = get_query_var( 'page' );
                            $args    = array(
                                // 'post_type'      => array( 'post', 'video-posts', 'audio-posts' ), // post types
                                'post_type'      => array( 'post' ), // post types
                                'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
                            );
                    

                            // If is_front_page "paged" parameters as $page number
                            // if ( is_front_page() )
                            //     $args['paged'] = $page;

                            // Instantiate custom query
                            $custom_query = new WP_Query( $args );

                      
                            if ( $custom_query->have_posts() ) :
                                while ( $custom_query->have_posts() ) :
                                    $custom_query->the_post(); ?>
                                    <div class="col-lg-4 col-md-6" >
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
                    <!-- <div class="pag"> -->
                    
                        <?php
                            // if ( ! is_front_page() && 0 < intval( $page ) )
                            //     $pagination_args['base'] = user_trailingslashit(
                            //         untrailingslashit( get_page_link( $page_ID ) ) . '/page/%#%'
                            //     );
                                
                            // $GLOBALS['wp_query'] = $custom_query;
                            // $args    = array(
                            //     'post_type'      => array( 'post', 'video-posts', 'audio-posts' ), // post types
                            //     'posts_per_page' => 5,
                            //     'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
                            // );
                        
                        ?>
                    <!-- </div> -->
                    <div class="row">
                        <div class="more-articles__btn">
                            <div class="pd-btn pd-btn_black pd-btn_load" id='true_loadmore' data-cat='post'>
                                <span class="lt-ico lt-ico-load"></span> 
                                Показати більше новин
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <?php get_template_part( 'template-parts/home/sidebar' );?>
            </div>
        </div>
    </div>
</section>



<?php get_template_part( 'template-parts/home/authors-articles' );?>


<?php get_footer(); ?>