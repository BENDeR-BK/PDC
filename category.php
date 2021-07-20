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
                            Богословська думка
                            </span>
                            <input type="hidden" name='tag'  id='inputCurentTags'>

                        </div>
                        <div class="cat-posts__filter">
                            <div class="cat-posts__select">
                                <?php 
                                    $termCat = get_queried_object();
                                    $termCatSlug = $termCat->slug;        
                                    $termCatName = $termCat->name;        
                                    $termCatId = $termCat->cat_ID;        
                                ?>
                                <div class="active-category d-none">
                                    <?php echo $termCatSlug; ?>
                                </div>
                                <select name="category__name" class='nice_select nice_select_category' id="category__name">
                                    <option value="">Всі категорії</option>

                                    <?php
                                        $categories = get_categories( [
                                            'taxonomy'     => 'category',
                                            'type'         => 'post',
                                            // 'exclude'      =>  $termCatId,
                                        ] );

                                        if( $categories ){
                                            foreach( $categories as $cat ){ ?>
                                                <option value="<?php echo $cat->slug ;?>"> <?php echo $cat->name ;?></option>
                                            
                                            <?php }
                                        }
                                    ?>
                                </select>
                            </div>
                            <div class="cat-posts__select">
                                <select name="order" class='nice_select' id="posts__order">
                                    <option value="DESC">Нові спочатку</option>
                                    <option value="ASC">Старі спочатку</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   
                    <div class="cat-posts__tegs">
                        <form id="cat-posts__filters" class="" action="#">
                            
                            <!-- <ul> -->
                                <!-- <li class="teg-item teg-item_reset">
                                    <label class="teg-item__list " >Clear all</label>
                                </li> -->
                                <?php 
                                    // $args = array(
                                    //     // 'type' => get_post_type('post'),
                                    //     'type' => 'post',
                                    //     'orderby' => 'name',
                                    //     'order' => 'ASC',
                                    //     'categories' => '3'
                                    // );
                                    
                                    // $tags = get_tags();
                                    if( $tags ){
                                        foreach( $tags as $tag  ){ ?>
                                            <!-- <li class="teg-item">
                                                <input class="teg-item__chek" data-color="<?php echo $tag->description ?>" type="checkbox" id='chek_<?php echo $tag->slug; ?>' name='tag_name' value="<?php echo $tag->slug;  ?>" >
                                                <label class="teg-item__list" for="chek_<?php echo $tag->slug; ?>"><?php echo $tag->name;  ?></label>
                                            </li> -->
                                        <?php  }
                                    }
                                ?>
                                
                            <!-- </ul> -->
                            <?php
                                $cat = get_query_var( 'cat' );
                                $cat_ids = get_term_children( 3 , 'category' );
                                array_push( $cat_ids, $cat );
                                $post_ids = get_objects_in_term( $cat_ids, 'category' );
                                if ( ! empty( $post_ids ) && ! is_wp_error( $post_ids ) ) {
                                    $tags = wp_get_object_terms( $post_ids, 'post_tag' );
                                    if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
                                    ?>
                                        <ul>
                                            <li class="teg-item teg-item_reset">
                                                <label class="teg-item__list " >Clear all</label>
                                            </li>
                                            <?php foreach( $tags as $tag ) { ?>
                                                <li class="teg-item">
                                                    <input class="teg-item__chek" data-color="<?php echo $tag->description ?>" type="checkbox" id='chek_<?php echo $tag->slug; ?>' name='tag_name' value="<?php echo $tag->slug;  ?>" >
                                                    <label class="teg-item__list" for="chek_<?php echo $tag->slug; ?>"><?php echo $tag->name;  ?></label>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    <?php } ?>
                                <?php } ?>
                        </form>

                    </div>
                    
                </div>
                
            </div>
         
               
                
                <?php
             
                    // $args['orderby'] = 'meta_value_num';
                    // $args['paged'] = get_query_var('paged');
                    // $args['post_type'] = 'post';
                    // $the_query = new WP_Query($args);
                ?>
        </div>
        
        <div class="row category_items">
            <?php
                $termCat = get_queried_object();
                $termCatSlug = $termCat->slug;    
                $args    = array(
                    'post_type'      => array( 'post' ), // post types
                    'category_name' => $termCatSlug,
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1
                );


                // Instantiate custom query
                $the_query = new WP_Query( $args );

            
                if ( $the_query -> have_posts() ) :
                    while ($the_query -> have_posts() ) : $the_query ->the_post(); ?>
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
                    'post_type'      => array( 'post' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                );
                

                $custom_queryp = new WP_Query( $argsp );

                $total_pages = $custom_queryp->max_num_pages;

                if ($total_pages > 1) {

                    $current_page = max(1, get_query_var('paged')); 
                    ?> 
                    
                <?php 
                } 
             ?>
            <div class="row">
                <div class="more-articles__btn">
                    <div class="pd-btn pd-btn_black pd-btn_load" id='true_loadmore_posts' data-cat='post'> 
                        <span class="lt-ico lt-ico-load"></span> 
                        Показати більше новин
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>




<?php get_footer(); ?>
