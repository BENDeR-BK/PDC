<?php /*Template Name: Shop archive*/ 

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

    <section class="shop">
        <div class="container">
           
            <div class="shop__head">
                <div class="cat-posts__title">
                    <div class="title ">
                        <span>
                        Крамниця
                        </span>
                    </div>
                    <div class="cat-posts__filter">

                        <div class="cat-posts__select">
                            <div class="cat-posts__filter-btn"></div>
                            <?php
                                wp_sort();
                                ?>
                                <?php $pageNum = (get_query_var('paged')) ? get_query_var('paged') : 1; ?>
                                <form action="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" method="GET" class="cat-prod__sorting">
                                    
                                    <!-- <input type="hidden" name="cat" value="<?php the_category_ID(); ?>"> -->
                                    <input type="hidden" name="paged" value="<?php echo $pageNum; ?>">
                                    <select  class='nice_select' name='order' id="products__filters_select" onchange="this.form.submit()">
                                        <option value="DESC">Нові спочатку</option>
                                        <option value="ASC">Старі спочатку</option>
                                    </select>
                                    <div class="active-sorting-get d-none">
                                        <?php echo $_GET["order"]; ?>
                                    </div>
                                </form>
                                <?php
                                if ($_GET["sort"] == NULL) {
                                    $args['order'] = $_COOKIE["sorting"];
                                } else {
                                    $args['order'] = $_GET["order"];
                                }
                                // $args['cat'] = the_category_ID();
                                $args['orderby'] = 'meta_value_num';
                                // $args['meta_key'] = 'price';
                                $args['paged'] = get_query_var('paged');
                                $the_query = new WP_Query($args);
                            ?>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="products__category">
                        <div class="products__category-close">
                            <span class="lt-ico lt-ico-close"></span> 
                        </div>
                        <div class="active-product-category d-none">
                            <?php 
                                $termCat = get_queried_object();
                                $termCatSlug = $termCat->slug;       
                                echo  $termCatSlug;
                            ?> 
                        </div>
                        <?php 
                        $args = array(
                            'hierarchical' => true,
                            'taxonomy' => 'products-category',
                            'title_li'     => '' ,
                            'current_category'    => 1,
                            'hide_empty' => true,
                        ); ?>

                        <ul class="category-menu">
                            <?php  wp_list_categories($args);  ?>
                        </ul>
                    
                        
                        
                    </div>
                </div>
                
                <div class="col-lg-9 col-md-8">
                    <div class="row product_items_wrap">
                        <?php
                        //  global $wp_query; 
                        //   $args = array(
                        //     'post_type'=> 'products',
                        //     'order'    => 'ASC'
                        //     // 'posts_per_page' => 6, 

                        // );              
                        
                        // $the_query = new WP_Query( $args );
                        
                            if(have_posts() ):  while( have_posts() ): the_post(); ?>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product-wrap">
                                    <div class="product">
                                        <div class="product__img">
                                            <!-- <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt=""> -->
                                            <?php the_post_thumbnail(); ?>
                                            <a href="<?php the_permalink() ?>" class='product__img-bg'>
                                                <span class="lt-ico lt-ico-view"></span>  
                                                Переглянути
                                            </a>
                                        </div>
                                        <div class="product__name"><a href="<?php the_permalink() ?>"> <?php the_title() ?></a></div>

                                        <div class="product__price"><?php the_field('price', $post->ID); ?></div>
                                    </div>
                                </div>
                            </div>
                           
                        <?php endwhile; ?>
        
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="products__pagination">
                                <?php
                                    ch_pagination();
                                ?>
                                
                            </div>
                        </div>
                    
                    </div>

                    <?php endif; wp_reset_postdata();?>

                </div>
            </div>
           
        </div>
    </section>
    


<?php get_footer(); ?>
