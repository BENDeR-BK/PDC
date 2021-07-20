<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
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
								Результат
                            </span>
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
        </div>
        <div class="row category_items">
            <?php
				global $wp_query;
            
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
                                        <a href="<?php  the_permalink(); ?>">
                                        <?php the_title(); ?>
                                        </a>
                                    </div>
                                    <div class="blog-item__text blog-item__text-search">
                                    <?php  
                                        // the_excerpt(); 
                                        the_content();
                                    ?>
                                    
                                    <?php   ?>
                                    <?php
                                        //     $excerpt = get_the_excerpt();
                                        //     $keys = explode(" ",$s);
                                        //     $excerpt = preg_replace('/('.implode('|', $keys) .')/iu', '<strong class="search-excerpt" style="color: #000; background: #99ff66;">\0</strong>', $excerpt);
                                        // echo $excerpt;
                                        ?>
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
</section>


<?php
get_footer();
?>


<!-- <script>
  // let searchWordQ = parentItem.querySelectorAll('.blog-item__text.blog-item__text-search')

  if (document.querySelector('.search-results')) {

    let mainItem = document.querySelectorAll('.blog-item__text.blog-item__text-search')
    mainItem.forEach(mainI => {
      let searchWord = mainI.querySelectorAll('.search_text')
      searchWord.forEach(word => {

        let arrWords = word.parentElement.innerHTML.split(' ');
        for (let i = 0; i < arrWords.length; i++) {
          if (arrWords[i] == '<span') {
            let startDelate = i - 10
            let rr = []
            for (let j = startDelate; j < startDelate + 40; j++) {
              rr.push(arrWords[j])
            }
            mainI.innerHTML = rr.join(' ')
          }
        }
      })
    })
  }
</script> -->

<?php
get_footer();
?>


<script>
  if (document.querySelector('.search-results')) {

    let mainItem = document.querySelectorAll('.blog-item__text.blog-item__text-search')
    mainItem.forEach(mainI => {
      let searchWord = mainI.querySelectorAll('.search_text')
      searchWord.forEach(word => {

        let arrWords = word.parentElement.innerHTML.split(' ');
        for (let i = 0; i < arrWords.length; i++) {
          if (arrWords[i] == '<span') {
            let startDelate
            console.log(arrWords[i - 11]);
            if (arrWords[i - 10] == '<span') {
              startDelate = i - 11
            } else if (arrWords[i - 10] == 'style="background:#F2B9B9;">' || arrWords[i - 10] == 'style="background:#FBE8E8;">') {
              startDelate = i - 13
            } else if (arrWords[i - 10] == 'class="search_text"') {
              startDelate = i - 12
            } else {
              startDelate = i - 10
            }
            let rr = []
            for (let j = startDelate; j < startDelate + 40; j++) {
              rr.push(arrWords[j])
            


<?php
get_footer();
