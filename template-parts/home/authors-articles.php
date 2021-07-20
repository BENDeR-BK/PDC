<section class='authors-articles'>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="title title_line">
                    <span>
                        Авторські статті
                    </span>
                </div>
            </div>
        </div>
        <div class="row authors-news-conteiner">
            <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                $showposts = get_option('posts_per_page');

                $args = array(
                    'post_type'=>'authors-posts', // Your post type name
                    'paged' => $paged,
                    'posts_per_page'  => 4,
                );
               
                $loop = new WP_Query( $args );
                if ( $loop->have_posts() ) {
                    while ( $loop->have_posts() ) : $loop->the_post(); ?>
                        <div class="col-lg-3 col-md-6">
                            <article class="authors-post article-wrap">
                                <div class="blog-item">
                                    <div class="blog-item__meta authors-post__meta">
                                        <div class="blog-item__tags authors-post__tags">
                                            <?php 
                                                $posttags = get_the_tags();
                                                if( $posttags ){
                                                    foreach( $posttags as $tag ){ ?>
                                                        <div class="tag-item tag-<?php echo $tag->slug ;?>" ><?php echo $tag->name;  ?></div>
                                                    <?php  }
                                                }
                                            ?>
                                        </div>
                                        <div class="blog-item__cat authors-post__cat">
                                            <?php
                                                $cats = get_the_category();
                                                $cat_name = $cats[0]->name;
                                            ?>
                                            <span><?php echo $cat_name;  ?></span>
                                        </div>
                                    </div>
                                    <div class="blog-item__user authors-post__user">
                                        <div class="blog-item__authors-img authors-post__img">
                                            <?php $thumbnail = get_field('author_photo', $post->ID);?>
                                            <img  src="<?php echo $thumbnail['url']; ?>" alt="image">
                                            
                                        </div>
                                        <div class="">
                                            <div class="blog-item__authors-name authors-post__name"><?php the_field('author_name', $post->ID);?></div>
                                            <div class="blog-item__authors-desc authors-post__decs"><?php the_field('author_status', $post->ID);?></div>
                                        </div>
                                        
                                    </div>
                                    <div class="blog-item__title authors-post__title">
                                        <a href="<?php  the_permalink(); ?>"><?php the_title(); ?></a>
                                    </div>
                                    <div class="blog-item__text authors-post__text">
                                        <?php echo pdc_custom_excerpts(20); ?>
                                    </div>
                                    <div class="blog-item__date authors-post__date"><?php echo get_the_date('j F Y'); ?>p.</div>
                                </div>
                            </article>
                        
                        </div>
                    <?php  endwhile;
                }
                wp_reset_postdata();
            ?>
        </div>
        <div class="row">
            <div class="more-articles__btn">
                <div class="pd-btn pd-btn_black pd-btn_load" id='true_loadmore_authors' data-cat='authors-posts'>
                    <span class="lt-ico lt-ico-load "></span> 
                    Показати більше новин
                </div>
            </div>
        </div>
    </div>
</section>