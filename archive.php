<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pdc
 */

get_header(); ?>
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
                            Богословська думка 2
                            </span>
                        </div>
                        <div class="cat-posts__filter">
                            <div class="cat-posts__select">
                                <select name="" class='nice_select' id="">
                                    <option value="">Всі категорії</option>
                                    <option value="">Систематичне богослів’я</option>
                                    <option value="">Біблійне богослів’я</option>
                                </select>
                            </div>
                            
                            <div class="cat-posts__select">
                                <select name="" class='nice_select' id="">
                                    <option value="">Нові спочатку</option>
                                    <option value="">Старі спочатку</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   
                    <div class="cat-posts__tegs">
                        <form id="cat-posts__filters" class="" action="#">
                            
                            <ul>
                                <li class="teg-item teg-item_reset">
                                    <label class="teg-item__list " >Clear all</label>
                                </li>
                                <?php 
                                    // $args = array(
                                    //     // 'type' => get_post_type('post'),
                                    //     'type' => 'post',
                                    //     'orderby' => 'name',
                                    //     'order' => 'ASC',
                                    //     'categories' => '3'
                                    // );
                                    $tags = get_tags();
                                    if( $tags ){
                                        foreach( $tags as $tag  ){ ?>
                                            <li class="teg-item">
                                                <input class="teg-item__chek" data-color="<?php echo $tag->description ?>" type="checkbox" id='chek_<?php echo $tag->slug; ?>' name='tag_name' value="<?php echo $tag->slug;  ?>" >
                                                <label class="teg-item__list" for="chek_<?php echo $tag->slug; ?>"><?php echo $tag->name;  ?></label>
                                            </li>
                                        <?php  }
                                    }
                                ?>
                                
                            </ul>
                            <input type="hidden" id='current_tags' name="tag_name" value="" />
                            <input type="hidden" id='current_tags_sort' name="tag_name_sort" value="" />

                            <input type="hidden" name="action" value="filtertags" />
                        </form>

                    </div>
                    
                </div>
                
            </div>
        </div>
        <div class="row">
            <?php
                $page_ID = get_the_ID();

                // Define paginated posts
                $page    = get_query_var( 'page' );

                $args    = array(
                    'post_type'      => array( 'post' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                    // 'posts_per_page' => 6, 
                );
        

                // If is_front_page "paged" parameters as $page number
                if ( is_front_page() )
                    $args['paged'] = $page;

                // Instantiate custom query
                $custom_query = new WP_Query( $args );

            
                if ( $custom_query->have_posts() ) :
                    while ( $custom_query->have_posts() ) :
                        $custom_query->the_post(); ?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <article id="post-<?php the_ID(); ?>" <?php post_class('article-wrap'); ?>>
                                <div class="blog-item">
                                    <div class="blog-item__type blog-item__type_video">Відео</div>
                                    <div class="blog-item__type blog-item__type_audio">Аудіо</div>
                                    <div class="blog-item__img">
                                        <?php the_post_thumbnail(); ?>
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
                    // 'post_type'      => array( 'post' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                    // 'posts_per_page' => 6, 
                );
              

                $custom_queryp = new WP_Query( $argsp );

                $total_pages = $custom_queryp->max_num_pages;
            

                if ($total_pages > 1) {

                    $current_page = max(1, get_query_var('paged')); ?> 
                    <div class="custpagination">
                        <?php
                            cpt_pagination($custom_queryp->max_num_pages); 
                        ?>
                    </div>
                <?php } 
             ?>
                    
        </div>
    </div>
</section>


<?php
get_footer();
