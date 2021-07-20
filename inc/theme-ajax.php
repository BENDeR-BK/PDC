<?php
/**
 * chopovskyi ajax
 *
 * @package pdc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}




////////////////// Header menu  //////////////////
//////////////////////////////////////////////////
function get_ajax_posts_menu() {
    // Query Arguments
	$cat_name =  $_POST['catname'] ;
	$posts_per_page = $_POST['posts_per_page'] ;

    $args = array(
        'post_type' => array('post'),
        'post_status' => array('publish'),
        'posts_per_page' => $posts_per_page,
        'order' => 'DESC',
        'orderby' => 'date',
        'category_name' => $cat_name,
    );

    // The Query
    $ajaxposts = new WP_Query( $args );

    $response = '';

    // The Query
    if ( $ajaxposts->have_posts() ) {
        while ( $ajaxposts->have_posts() ) {
            $ajaxposts->the_post();?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<div class="blog-item">
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
										<div class="tag-item tag-<?php echo $tag->slug ;?>" ><?php echo $tag->name . ' ';  ?></div>
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
       <?php }
    } else {
        $response = ob_get_contents(); 
    }

    echo $response;

    exit; // leave ajax call
}

add_action('wp_ajax_get_ajax_posts_menu', 'get_ajax_posts_menu');
add_action('wp_ajax_nopriv_get_ajax_posts_menu', 'get_ajax_posts_menu');







////////////////// load more main page  //////////////////
//////////////////////////////////////////////////

function true_load_posts(){
	
	$args = unserialize(stripslashes($_POST['query']));
	$max_pages = $_POST['max_pages'] +1;
	$paged = $_POST['page'] +1;
	$cat = $_POST['cat'];
	$post_name = $_POST['post_type'];
	$num = get_option( 'posts_per_page' );

	$published_posts = wp_count_posts($post_name)->publish;


	if ($post_name == 'allPosts') {
		$post_name = array( 'post', 'video-posts', 'audio-posts' );

		$published_posts = wp_count_posts('post')->publish;
		$published_postsV = wp_count_posts('video-posts')->publish;
		$published_postsA = wp_count_posts('audio-posts')->publish;
		$published_postsALL = $published_posts + $published_postsV + $published_postsA;
		$published_posts =  $published_postsALL ;
	}


	$options = array(
		'post_type'      => $post_name,
		'posts_per_page' => $num,
	  	'post_status'    => 'publish',
	  	'paged'          => $paged,
	);
	
	query_posts( $options ); 
	
	ob_start(); 
	 while (have_posts()): the_post(); ?>
		<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="200">
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
	$posts_html = ob_get_contents(); // we pass the posts to variable
	ob_end_clean(); // clear the buffer

	wp_reset_postdata();

	?>
		
	<?php $index++; $count_posts = wp_count_posts($post_name); 
	// $published_posts = $count_posts->publish; 
	
	  
	//   the_posts_pagination(); 
	//   ch_pagination(  );

	
	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $published_posts,
		'content' => $posts_html
	) );
	
	wp_reset_query(); 

	die();
  }
add_action('wp_ajax_loadmore', 'true_load_posts');
add_action('wp_ajax_nopriv_loadmore', 'true_load_posts');






////////////////// filter Type main page  //////////////////
//////////////////////////////////////////////////
add_action('wp_ajax_filterType', 'tags_filter_function'); 
add_action('wp_ajax_nopriv_filterType', 'tags_filter_function');
 
function tags_filter_function(){
	$cat_name =  $_POST['catname'] ;
	$pID =  $_POST['catname'] ;
	$max_pages = $_POST['max_pages'] ;


	
	$published_posts = wp_count_posts($pID)->publish;

	
	if ($pID == 'allPosts') {
		$pID = array( 'post', 'video-posts', 'audio-posts' );
		$published_posts = wp_count_posts('post')->publish;
		$published_postsV = wp_count_posts('video-posts')->publish;
		$published_postsA = wp_count_posts('audio-posts')->publish;
		$published_postsALL = $published_posts + $published_postsV + $published_postsA;
		$published_posts =  $published_postsALL ;
	}



	$params = array(
		'post_type' => $pID,
        'post_status' => array('publish'),
        // 'posts_per_page' => 4,
        'order' => 'DESC',
        'orderby' => 'date',
        // 'category_name' => $cat_name,
	);
 
 
	query_posts( $params );
 
	global $wp_query;
 
	if( have_posts() ) :
 
 		ob_start(); // start buffering because we do not need to print the posts now
 
		while( have_posts() ): the_post(); ?>

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
		<?php 
		endwhile;
 
 		$posts_html = ob_get_contents(); // we pass the posts to variable
   		ob_end_clean(); // clear the buffer
	else:
		$posts_html = '<p>Nothing found for your criteria.</p>';
	endif;
 
	// no wp_reset_query() required
 
 	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $published_posts,
		'content' => $posts_html
	) );
 
	die();
}






////////////////// filter date products  //////////////////
//////////////////////////////////////////////////
add_action('wp_ajax_filterDate', 'filterDate_function'); 
add_action('wp_ajax_nopriv_filterDate', 'filterDate_function');
 
function filterDate_function(){
 
	// example: date-ASC 
	$order = explode( '-', $_POST['products__filters_date'] );
	$baseUrl = home_url().'/products/page/%#%';
	$params = array(
		'post_type' => 'products',
		'base'               => $baseUrl,
		'orderby' => $order[0], // example: date
		'order'	=> $order[1], // example: ASC
		'page' =>1,
		// 'posts_per_page' =>9999,

	);
 
 
	query_posts( $params );
 
	global $wp_query;
 
	if( have_posts() ) :
 
 		ob_start(); // start buffering because we do not need to print the posts now
 
		while( have_posts() ): the_post(); ?>

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
		<?php 
		endwhile;

		// cpt_pagination();
		 

		ch_pagination($params );
 		$posts_html = ob_get_contents(); // we pass the posts to variable
   		ob_end_clean(); // clear the buffer
	else:
		$posts_html = '<p>Nothing found for your criteria.</p>';
	endif;
 
	// no wp_reset_query() required
 
 	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'found_posts' => $wp_query->found_posts,
		'content' => $posts_html
	) );
 
	die();
}



////////////////// projects filter date   //////////////////
//////////////////////////////////////////////////
add_action('wp_ajax_projectsFilterDate', 'projectsFilterDate_function'); 
add_action('wp_ajax_nopriv_projectsFilterDate', 'projectsFilterDate_function');
 
function projectsFilterDate_function(){
 
	$order = explode( '-', $_POST['projects__filters_date'] );
	$params = array(
		'post_type' => 'projects',
		'orderby' => $order[0], // example: date
		'order'	=> $order[1], // example: ASC
		'posts_per_page'    => 999999,
	);
 
	query_posts( $params );
 
	global $wp_query;
 
	if( have_posts() ) :
 
 		ob_start(); // start buffering because we do not need to print the posts now
 
		while( have_posts() ): the_post(); ?>

			<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<article id="post-<?php the_ID(); ?>" <?php post_class('article-wrap'); ?>>
					<div class="blog-item blog-item_project">
						
						<div class="blog-item__img">
							<?php the_post_thumbnail(); ?>
							<a href="<?php  the_permalink(); ?>" class="blog-item__img-bg">
								<span class="lt-ico lt-ico-view"></span>  
								Переглянути та Підтримати 
							</a>
						</div>
						
						<div class="blog-item__title">
							<a href="<?php  the_permalink(); ?>"><?php the_title(); ?></a>
							<?php if (get_field('zagalna_suma_proektu')) { ?>
								<div class="blog-item__subtitle">Загальна сума проекту <?php the_field('zagalna_suma_proektu'); ?> грн</div>
							<?php  } else { ?>
								<div class="blog-item__subtitle">Перманентний проект. Потребує постійного фінансування</div>
							<?php } ?>
						</div>
						
						<?php 
							if (get_field('zagalna_suma_proektu')) { ?>
								<div class="blog-item__footer">
									<?php 
										$total_str = get_field('zagalna_suma_proektu');
										$total = str_replace(" ","",$total_str);
										$zibrano_str = get_field('zibrano');
										$zibrano = str_replace(" ","",$zibrano_str);
										$zalyshylos = $total - $zibrano ;
										$sum = ( $total - $zalyshylos ) / $total *100;
										$zalyshylos_str = number_format($zalyshylos, 0, '.', ' ');
									?>
									<div class="blog-item__progres">
										<div class="selected">
											<p><?php the_field('zibrano'); ?> грн</p>
											<span>зібрано</span>
										</div>
										<div class="lost">
											<p><?php  echo $zalyshylos_str ;?> грн</p>
											<span>залишилось</span>
										</div>
										<div class="progres-bar">
											<div class="progres-done" style='width: <?php  echo $sum ;?>%'></div>
										</div>
									</div>
								</div>.
							<?php  }
						?>
					</div>

				</article><!-- #post-<?php the_ID(); ?> -->
			</div>
		<?php 
		endwhile;
 		$posts_html = ob_get_contents(); // we pass the posts to variable
   		ob_end_clean(); // clear the buffer
	else:
		$posts_html = '<p>За вашими критеріями нічого не знайдено.</p>';
	endif;
 
 	echo json_encode( array(
		
		'content' => $posts_html
	) );
 
	die();
}











////////////////// load more authors (main page)  //////////////////
//////////////////////////////////////////////////

function true_load_posts_authors(){
	
	$args = unserialize(stripslashes($_POST['query']));
	$max_pages = $_POST['max_pages'] +1;
	$paged = $_POST['page'] +1;
	$cat = $_POST['cat'];
	$post_name = $_POST['post_type'];
	$num = get_option( 'posts_per_page' );

	$published_posts = wp_count_posts($post_name)->publish;


	$options = array(
		'post_type'      => 'authors-posts',
		// 'posts_per_page' => $num,
		'posts_per_page' => 4,
	  	'post_status'    => 'publish',
	  	'paged'          => $paged,
		// 'category_name' => $post_name,
	);
	
	query_posts( $options ); 
	
	ob_start(); 
	 while (have_posts()): the_post(); ?>
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
		
	<?php endwhile; 
	$posts_html = ob_get_contents(); // we pass the posts to variable
	ob_end_clean(); // clear the buffer

	wp_reset_postdata();

	?>
		
	<?php $index++; $count_posts = wp_count_posts($post_name); 
	// $published_posts = $count_posts->publish; 
	
	  
	//   the_posts_pagination(); 
	//   ch_pagination(  );

	
	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $published_posts,
		'content' => $posts_html
	) );
	
	wp_reset_query(); 

	die();
  }
add_action('wp_ajax_loadmore_authors', 'true_load_posts_authors');
add_action('wp_ajax_nopriv_loadmore_authors', 'true_load_posts_authors');








////////////////// load more media page //////////////////
//////////////////////////////////////////////////

function true_load_posts_media(){
	
	$args = unserialize(stripslashes($_POST['query']));
	$max_pages = $_POST['max_pages'] +1;
	$paged = $_POST['page'] +1;
	$cat = $_POST['cat'];
	$post_name = $_POST['post_type'];
	$num = get_option( 'posts_per_page' );
	
	$orderPost = $_POST['orderPost'];


	$published_posts = wp_count_posts($post_name)->publish;


	$options = array(
		'post_type'      => $post_name,
		'posts_per_page' => $num,
	  	'post_status'    => 'publish',
	  	'paged'          => $paged,
		// 'category_name' => $post_name,
		'orderby' => 'date', // example: date
		// 'order'	=> 'DESC', // example: ASC
		'order'	=> $orderPost, // example: ASC
	);
	
	query_posts( $options ); 
	
	ob_start(); 
	 while (have_posts()): the_post(); ?>
		<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12" >
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
	$posts_html = ob_get_contents(); // we pass the posts to variable
	ob_end_clean(); // clear the buffer

	wp_reset_postdata();

	?>
		
	<?php $index++; $count_posts = wp_count_posts($post_name); 
	
	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $published_posts,
		'content' => $posts_html,
		'orderPost'	=> $orderPost,

	) );
	
	wp_reset_query(); 

	die();
  }
add_action('wp_ajax_loadmore_media', 'true_load_posts_media');
add_action('wp_ajax_nopriv_loadmore_media', 'true_load_posts_media');











////////////////// filter category posts  //////////////////
//////////////////////////////////////////////////
function get_ajax_posts_category() {
    
	

	$catName =  $_POST['catName'] ;
	$page =  $_POST['page'] ;
	$max_pages = $_POST['max_pages'] ;
	$first_page = $_POST['first_page'] ;
	$orderPost = $_POST['orderPost'];
	$tagsPost = $_POST['tagsPost'];


	$baseUrl = home_url().'/category/'.$catName.'/page/%#%';

	if ($catName == 'allCat') {
		$catNameAll = 'bogoslovska-dumka';
		$catName = '';

		$baseUrl = home_url().'/bogoslovska-dumka/page/%#%';
	}


	$params = array(
		'post_type' => 'post',
        'post_status' => array('publish'),
        // 'posts_per_page' => 4,
        'order' => $orderPost ,
        'orderby' => 'date',
        'category_name' => $catName,
		'current' => $first_page,
		'tag' => $tagsPost ,
		// 'page' => $page
	);


	$the_query = new WP_Query( $params );
	// echo $the_query->found_posts;
	// $published_posts = wp_count_posts($params)->publish;
 
 
	query_posts( $params );
 
	global $wp_query;
 
	if( have_posts() ) :
  
 		ob_start(); // start buffering because we do not need to print the posts now
 
		while( have_posts() ): the_post(); ?>

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
		<?php 
		endwhile;
		// $args = wp_parse_args(
		// 	$args,
		// 	array(
		// 		'post_type'          => 'post',
		// 		'base'               => $baseUrl,
		// 	)
		// );
		
		// cpt_pagination();
		// ch_pagination($args );
	
 		$posts_html = ob_get_contents(); // we pass the posts to variable
		
   		ob_end_clean(); // clear the buffer
	else:
		$posts_html = '<p>За вашими критеріями нічого не знайдено.</p>';
	endif;

	
 	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $the_query->found_posts,
		'content' => $posts_html,
		'cat_name' => $catName ,
		'order' => $orderPost ,
		'tagsPost'	=> $tagsPost,
	) );
 
	die();
}

add_action('wp_ajax_postsCategory', 'get_ajax_posts_category');
add_action('wp_ajax_nopriv_postsCategory', 'get_ajax_posts_category');








////////////////// load more posts page //////////////////
//////////////////////////////////////////////////

function true_load_posts_postspage(){
	
	$args = unserialize(stripslashes($_POST['query']));
	$max_pages = $_POST['max_pages'] +1;
	$paged = $_POST['page'] +1;
	$cat = $_POST['category'];
	$post_name = $_POST['post_type'];
	$num = get_option( 'posts_per_page' );
	
	$orderPost = $_POST['orderPost'];
	$tagsPost = $_POST['tagsPost'];

	$published_posts = wp_count_posts($post_name)->publish;


	$options = array(
		'post_type'      => 'post',
		'posts_per_page' => $num,
	  	'post_status'    => 'publish',
	  	'paged'          => $paged,
		'category_name' => $cat,
		'tag' => $tagsPost ,
		'orderby' => 'date', // example: date
		// 'order'	=> 'ASC', // example: ASC
		'order'	=> $orderPost, // example: ASC
	);
	$the_query = new WP_Query( $options );
	
	query_posts( $options ); 
	global $wp_query;
	
	ob_start(); 
	 while (have_posts()): the_post(); ?>
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
	$posts_html = ob_get_contents(); // we pass the posts to variable
	ob_end_clean(); // clear the buffer

	wp_reset_postdata();

	?>
		
	<?php $index++; $count_posts = wp_count_posts($post_name); 
	
	echo json_encode( array(
		'posts' => json_encode( $wp_query->query_vars ),
		'max_page' => $wp_query->max_num_pages,
		'total' => $the_query->found_posts,
		// 'total' => $published_posts,

		'content' => $posts_html,
		'order'	=> $orderPost,
		'tagsPost'	=> $tagsPost,

	) );
	
	wp_reset_query(); 

	die();
  }
add_action('wp_ajax_loadmore_postspage', 'true_load_posts_postspage');
add_action('wp_ajax_nopriv_loadmore_postspage', 'true_load_posts_postspage');














