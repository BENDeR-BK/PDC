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
                <form id="teg-posts__filters"  action="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" method="GET" class="">
                    <div class="cat-posts__title">
                        <div class="title ">
                            <span>
                            Богословська думка ( category.php )
                            </span>
                            <div class="active-tag d-none">
                                <?php echo $_GET["tag"]; ?>
                            </div>

                        </div>
                        <?php
                       
                            $termCat = get_queried_object();
                            $termCatSlug = $termCat->slug;             

                            $pageNum = (get_query_var('paged')) ? get_query_var('paged') : 1; 
                            ?>
                            <!-- <form action="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" method="GET" class=""> -->
                                
                                <!-- <input type="hidden" name="cat" value="<?php the_category_ID(); ?>"> -->

                                <div class="cat-posts__filter">
                                    <!-- <div class="cat-posts__select">
                                    
                                        <select name="category_name" class='nice_select' id="category__name" onchange="this.form.submit()">
                                            <?php
                                                if ($termCatSlug == 'bogoslovska-dumka') { ?>
                                                    <option value="<?php echo $termCatSlug; ?>">Всі категорії</option>
                                                <?php } else { ?>
                                                    <option value="bogoslovska-dumka">Всі категорії</option>
                                                <?php }
                                            ?>
                                            
                                            <?php
                                               
                                                $categories = get_categories( [
                                                    'taxonomy'     => 'category',
                                                    'type'         => 'post',
                                                    'exclude'      => 3,
                                                ] );

                                                if( $categories ){
                                                    foreach( $categories as $cat ){ ?>
                                                        <option value="<?php echo $cat->slug ;?>"> <?php echo $cat->name ;?></option>
                                                    <?php }
                                                }
                                            ?>
                                        </select>
                                        
                                    </div> -->
                                    <div class="cat-posts__select">
                                        <div class="select-list__wrap"> 
                                            <div class="select-list__curent"><?php echo $termCat->name; ?></div>
                                            <ul class='select-list__list'>
                                                <li value="<?php echo $cat->slug ;?>">
                                                    <a href="<?php echo home_url(); ?>/category/bogoslovska-dumka" >Всі категорії</a>
                                                </li>
                                                <?php foreach( $categories as $cat ){ 
                                                    $category_link = get_category_link($cat->cat_ID);?>
                                                    <li value="<?php echo $cat->slug ;?>">
                                                        <a href="<?php echo $category_link ;?>" ><?php echo $cat->name ;?></a>
                                                    </li>
                                                <?php } ?> 
                                            </ul>
                                        </div>
                                    </div>
                                    <input type="hidden" name="paged" value="<?php echo $pageNum; ?>">
                                    <div class="cat-posts__select">
                                        <select  class='nice_select' name='order' id="products__filters_select" onchange="this.form.submit()">
                                            <option value="DESC">Нові спочатку</option>
                                            <option value="ASC">Старі спочатку</option>
                                        </select>
                                    </div>
                                   
                                </div>
                            <!-- </form> -->
                            <div class="active-sorting-get d-none">
                                <?php echo $_GET["order"]; ?>
                            </div>
                            <div class="active-category d-none">
                                <?php echo $termCatSlug; ?>
                            </div>
                           

                            <?php
                            if ($_GET["sort"] == NULL) {
                                $args['order'] = $_COOKIE["sorting"];
                               
                            } else {
                                $args['order'] = $_GET["order"];
                            }

                            
                            if ($_GET["tag"] == NULL) {
                                $args['tag'] = $_COOKIE["tag"];
                               
                            } else {
                                $args['tag'] = $_GET[""];
                            }
                            // $args['orderby'] = 'meta_value_num';
                            // $args['paged'] = get_query_var('paged');
                            // $args['category_name'] = 'systematychne-bogoslivya';
                            
                            $the_query = new WP_Query($args);
                        ?>
                    </div>
                   
                    <div class="cat-posts__tegs">
                        <!-- <form id="teg-posts__filters"  action="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" method="GET" class=""> -->
                            <input type="text" name='tag'  id='inputCurentTags'>
                            <ul>
                                <li class="teg-item teg-item_reset">
                                    <!-- <input  class="teg-item__chek"  type="checkbox" id='ress'  value="" > -->
                                    <input   class="teg-item__chek"  type="reset" id='ress' >

                                    <label for="ress" class="teg-item__list " >Clear all</label>
                                </li>
                                <?php
                                
                                    $args = array(
                                        // 'type' => get_post_type('post'),
                                        'type' => 'post',
                                        // 'orderby' => 'name',
                                        // 'order' => 'ASC',
                                        'cat' => get_query_var('cat') 
                                    );
                                    // $tags = get_the_tags();

                                    $tags = get_tags();
                                    if( $tags ){
                                        foreach( $tags as $tag  ){
                                            // $category_link = get_category_link($tag->tag_ID);
                                            
                                            ?>

                                            <li class="teg-item">
                                                <!-- <a href="<?php echo  get_tag_link($tag->term_id); ?>"><?php echo  get_tag_link($tag->term_id); ?></a> -->
                                                <input  class="teg-item__chek"  type="checkbox" id='<?php echo $tag->slug; ?>'  value="<?php echo $tag->slug;  ?>" >
                                                <label class="teg-item__list" for="<?php echo $tag->slug; ?>"><?php echo $tag->name;  ?></label>
                                            </li>
                                        <?php  }
                                    }
                                ?>
                                
                            </ul>
                            
                            <!-- <input type="hidden" id='current_tags' name="tag_name" value="" />
                            <input type="hidden" id='current_tags_sort' name="tag_name_sort" value="" />

                            <input type="hidden" name="action" value="filtertags" /> -->
                        <!-- </form> -->

                    </div>
                </form>
                </div>
                
            </div>
        </div>
      <?php 
       function get_tags_in_use($category_ID, $type = 'name'){
        // Set up the query for our posts
        $my_posts = new WP_Query(array(
          'cat' => $category_ID, // Your category id
          'posts_per_page' => -1 // All posts from that category
        ));
    
        // Initialize our tag arrays
        $tags_by_id = array();
        $tags_by_name = array();
        $tags_by_slug = array();
    
        // If there are posts in this category, loop through them
        if ($my_posts->have_posts()): while ($my_posts->have_posts()): $my_posts->the_post();
    
          // Get all tags of current post
          $post_tags = wp_get_post_tags($my_posts->post->ID);
    
          // Loop through each tag
          foreach ($post_tags as $tag):
    
            // Set up our tags by id, name, and/or slug
            $tag_id = $tag->term_id;
            $tag_name = $tag->name;
            $tag_slug = $tag->slug;
    
            // Push each tag into our main array if not already in it
            if (!in_array($tag_id, $tags_by_id))
              array_push($tags_by_id, $tag_id);
    
            if (!in_array($tag_name, $tags_by_name))
              array_push($tags_by_name, $tag_name);
    
            if (!in_array($tag_slug, $tags_by_slug))
              array_push($tags_by_slug, $tag_slug);
    
          endforeach;
        endwhile; endif;
    
        // Return value specified
        if ($type == 'id')
            return $tags_by_id;
    
        if ($type == 'name')
            return $tags_by_name;
    
        if ($type == 'slug')
            return $tags_by_slug;
    }
      ?>
        <div class="row category_items">
            <?php
                $page_ID = get_the_ID();

                // Define paginated posts
                // $page    = get_query_var( 'page' );
               
                $category = get_the_category();
                // $cat_name = $category[0]->slug;
                $cat_name = $category[0]->slug;
                // echo  $cat_name;

                // $args    = array(
                //     'post_type'      => array( 'post' ), // post types
                //     'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                //     'category_name' => $cat_name,
                //     // 'posts_per_page' => 6, 
                // );
        

                // If is_front_page "paged" parameters as $page number
                // if ( is_front_page() )
                //     $args['paged'] = $page;

                // Instantiate custom query
                // $custom_query = new WP_Query( $args );

            
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post(); ?>
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
                    'post_type'      => array( 'post' ),
                    'prev_text'          => __( '&laquo;', 'pdc' ),
                    'next_text'          => __( '&raquo;', 'pdc' ),
                    'category_name' => $cat_name,
                    // 'post_type'      => array( 'post' ), // post types
                    'paged'          => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                    // 'posts_per_page' => 6, 
                );
              

                // $custom_queryp = new WP_Query( $argsp );
                $custom_queryp = new WP_Query( $args);

                $total_pages = $custom_queryp->max_num_pages;
            
                ch_pagination();
                if ($total_pages > 1) {

                    $current_page = max(1, get_query_var('paged')); ?> 
                    <div class="custpagination">
                        <?php
                            // cpt_pagination($custom_queryp->max_num_pages); 
                            // ch_pagination();
                        ?>
                    </div>
                <?php } 
                
             ?>
                    
        </div>
    </div>
</section>


<?php
get_footer();
