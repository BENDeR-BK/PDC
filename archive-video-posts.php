<?php 

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
                                    Відео
                                </span>
                            </div>
                            <div class="cat-posts__filter">
                                <div class="cat-posts__select">
                                    <form action="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" method="GET" class="cat-prod__sorting">
                                        
                                        <!-- <input type="hidden" name="cat" value="<?php the_category_ID(); ?>"> -->
                                        <!-- <input type="hidden" name="paged" value="<?php echo $pageNum; ?>"> -->
                                        <select  class='nice_select' name='order' id="products__filters_select" onchange="this.form.submit()">
                                            <option value="DESC">Нові спочатку</option>
                                            <option value="ASC">Старі спочатку</option>
                                        </select>
                                        <div class="active-sorting-get d-none">
                                            <?php echo $_GET["order"]; ?>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row latest-news-conteiner">
                <?php
                    $page_ID = get_the_ID();

                    // Define paginated posts
                    $page    = get_query_var( 'page' );

                    $args    = array(
                        'post_type'      => array( 'video-posts' ), // post types
                        'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
                    );
            

                    // If is_front_page "paged" parameters as $page number
                    if ( is_front_page() )
                        $args['paged'] = $page;

                    // Instantiate custom query
                    $custom_query = new WP_Query( $args );

                
                    if ( have_posts() ) :
                        while ( have_posts() ) :
                            the_post(); ?>
                            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
            <div class="row">
                <div class="more-articles__btn">
                    <div class="pd-btn pd-btn_black pd-btn_load" id='true_loadmore_media' data-cat='video-posts'>
                        <span class="lt-ico lt-ico-load"></span> 
                        Показати більше новин
                    </div>
                </div>
            </div>
        </div>
    </section>


<?php get_footer(); ?>
