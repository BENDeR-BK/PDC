<?php /*Template Name: Shop*/ 

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
                           
                            <form id="products__filters" class="products__filters" action="#">

                                <select  class='nice_select' name='products__filters_date' id="products__filters_select">
                                    <option value="date-DESC">Нові спочатку</option>
                                    <option value="date-ASC">Старі спочатку</option>
                                    
                                </select>
                                <input type="text" name="search_select_tags" id="blog_search_select_tags" />
                                <input type="hidden" name="action" value="filterDate" />
                            </form>
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
                        <ul class='category-menu'>
                            <li class='has-children'>    
                                <a href="#">Книги</a>
                            
                                <ul class="category-sub-menu">
                                    <li>Всі пропозиції</li>
                                    <li>Нові видання</li>
                                    <li>Бестселери</li>
                                    <li>Наше видання</li>
                                    <li>Електронні книги</li>
                                </ul>
                            </li>
                            <li class='has-children'>
                                <a href="#">Стародруки факсиміле у *.pdf </a>
                                <ul class="category-sub-menu">
                                    <li>Всі пропозиції</li>
                                    <li>Нові видання</li>
                                    <li>Бестселери</li>
                                    <li>Наше видання</li>
                                    <li>Електронні книги</li>
                                </ul>
                            </li>
                            <li class='has-children'>
                                <a href="#">Ікони</a>
                                <ul class="category-sub-menu">
                                    <li>Всі пропозиції</li>
                                    <li>Нові видання</li>
                                    <li>Бестселери</li>
                                    <li>Наше видання</li>
                                    <li>Електронні книги</li>
                                </ul>
                            </li>
                            <li><a href="#">Богослужбове приладдя</a> </li>
                            <li><a href="#">Хрестики</a> </li>
                            <li><a href="#">Вино</a> </li>
                            <li><a href="#">Ладан</a> </li>
                            <li><a href="#">Вугілля</a> </li>

                        </ul>
                       
                  
                    </div>
                </div>
                
                <div class="col-lg-9 col-md-8">
                    <div class="row">
                    <?php 
                        global $wp_query; 
                        $args = array(
                            'post_type'=> 'products',
                            'order'    => 'ASC'
                            // 'posts_per_page' => 6, 

                        );              
                        
                        $the_query = new WP_Query( $args );
                            if($the_query -> have_posts() ):  while($the_query -> have_posts() ): $the_query -> the_post(); ?>
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

                                        <div class="product__price">160,00 грн</div>
                                    </div>
                                </div>
                            </div>
                           
                        <?php endwhile; ?>
                        <!-- <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">
                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">160,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">
                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product2.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">230,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">

                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">390,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">
                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">160,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">
                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product2.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">230,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">

                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">390,00 грн</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product-wrap">

                                <div class="product">
                                    <div class="product__img">
                                        <img src="<?php echo SD_THEME_IMAGE_URI; ?>/product1.jpg" alt="">
                                        <a href="" class='product__img-bg'>
                                            <span class="lt-ico lt-ico-view"></span>  
                                            Переглянути
                                        </a>
                                    </div>
                                    <div class="product__name"><a href="#"> Святе Письмо Старого Завіту. З поясненнями. Том 1</a></div>

                                    <div class="product__price">390,00 грн</div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="products__pagination">
                                <?php 
                                
                                    $argsp    = array(
                                        'post_type'      => array( 'products' ),
                                        'prev_text'          => __( '&laquo;', 'pdc' ),
                                        'next_text'          => __( '&raquo;', 'pdc' ),
                                        'category_name' => $cat_name,
                                        // 'post_type'      => array( 'post' ), // post types
                                        'paged'          => $paged,
                                        'posts_per_page' => 6, 
                                    );
                
                                    $current_page = max(1, get_query_var('paged'));
                                    $custom_queryp = new WP_Query( $args );

                                    $total_pages = $custom_queryp->max_num_pages;

                                       cpt_pagination($custom_queryp->max_num_pages); 
                                ?>

                                <!-- <nav aria-label="Page navigation example">  
                                    <ul class="pagination">
                                        <li class=" lt-pagination__item lt-pagination__item-prev" style="opacity: 0.4;">Попередня</li>
                                        <li class=" lt-pagination__item active">
                                            <a class="lt-pagination__link">1</a>
                                        </li>
                                        <li class="lt-pagination__item">
                                            <a href="#" class="lt-pagination__link">2</a>
                                        </li>
                                        <li class="lt-pagination__item">
                                            <a href="#" class="lt-pagination__link">3</a>
                                        </li>
                                        <li class="lt-pagination__item">
                                            <a href="#" class="lt-pagination__link">4</a>
                                        </li>
                                        <li class=" lt-pagination__item lt-pagination__item-next">
                                            <a href="">Наступна </a>
                                        </li>
                                    </ul>
                                </nav> -->
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <?php endif; wp_reset_postdata();?>
        </div>
    </section>


<?php get_footer(); ?>
