<?php
/**
 * Pagination layout.
 *
 * @package pdc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'ch_pagination' ) ) {
	function ch_pagination( $args = array(), $class = 'lt-pagination' ) {

		if ( $GLOBALS['wp_query']->max_num_pages <= 1 ) {
			return;
		}
		global $wp_query;
		$total   = isset( $wp_query->max_num_pages ) ? $wp_query->max_num_pages : 1;
		$current = get_query_var( 'paged' ) ? (int) get_query_var( 'paged' ) : 1;
		$first = $last = '';

		$args = wp_parse_args(
			$args,
			array(
				'post_type'          => 'post',
				'mid_size'           => 1,
				'prev_next'          => true,
				'prev_text'          => __( 'Попередня', 'pdc' ),
				'next_text'          => __( 'Наступна', 'pdc' ),
				'screen_reader_text' => __( 'Posts navigation', 'pdc' ),
				'type'               => 'array',
				'current'            => max( 1, get_query_var( 'paged' ) ),
				// 'base'               => 'http://localhost:3000/bogoslovska-dumka/page/2',
			)
		);
		
		$links = paginate_links( $args );
		?>
		<nav class="<?php echo esc_attr($class); ?>" aria-label="<?php echo $args['screen_reader_text']; ?>">
			<ul class="lt-pagination__list">
				
				<?php
				
				if($current == 1) {
					echo "<li class=\" lt-pagination__item lt-pagination__item-prev\" style=\"opacity: 0.4;\">Попередня</li>";
					
				} 
				foreach ( $links as $key => $link ) {
					$classes = ['lt-pagination__item'];
					
					if( strpos( $link, 'current' ) ) {
						$classes[] = 'active';
					}
					if( strpos( $link, 'next' ) ) {
						$classes[] = 'lt-pagination__item-next';
					}
					if( strpos( $link, 'prev' ) ) {
						$classes[] = 'lt-pagination__item-prev';
					}
					?>
					<li class='<?php echo implode($classes, ' '); ?>' data-page='<?php echo $key; ?>'>
						<?php echo str_replace( 'page-numbers', 'lt-pagination__link', $link ); ?>
					</li>
					<?php
				} 
				if($current == $total) {
					echo "<li class=\" lt-pagination__item lt-pagination__item-next\" style=\"opacity: 0.4;\">Наступна</li>";	
				} 
				?> 
			</ul>
		</nav>
		<?php
	}
}

//  Custom post type pagination function 
	
function cpt_pagination($pages = '', $range = 1){

	$showitems = ($range * 2)+1;
	
	global $paged;
	if(empty($paged)) $paged = 1;
	if($pages == '') {
		global $wp_query;
		$pages = $wp_query->max_num_pages;
		if(!$pages){
			$pages = 1;
		}
	} 

	if(1 != $pages) {
		echo "<nav aria-label='Page navigation example' style=\"width: 100%;\">  <ul class='pagination'>";
		if ($paged == 1 ) {
			echo "<li class=\" lt-pagination__item lt-pagination__item-prev\" style=\"opacity: 0.4;\">Попередня</li>";
		} else {
			echo "<li class=\" lt-pagination__item lt-pagination__item-prev\"><a href='".get_pagenum_link($paged - 1)."'>Попередня </a></li>";
		}
		// echo "<li class=\" lt-pagination__item lt-pagination__item-prev\"><a href='".get_pagenum_link($paged - 1)."'>Попередня</a></li>";
		if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<li class=\" lt-pagination__item\"><a href='".get_pagenum_link(1)."'>1</a></li>";
		if($paged > 3 && $showitems < $pages) echo "<li class=\" lt-pagination__item \">...</li>";
		for ($i=1; $i <= $pages; $i++) {
			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
				echo ($paged == $i)? "<li class=\" lt-pagination__item active\"><a class='lt-pagination__link'>".$i."</a></li>":"<li class='lt-pagination__item'> <a href='".get_pagenum_link($i)."' class=\"lt-pagination__link\">".$i."</a></li>";
			}
		}
		if ($paged < $pages - 2 ) echo " <li class='page-item lt-pagination__item'>...</li>";
		if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo " <li class='lt-pagination__item'><a class='lt-pagination__link' href='".get_pagenum_link($pages)."'><i class='flaticon flaticon-arrow'></i>".$pages ."</a></li>";
		if ($paged != $pages ) {
			echo "<li class=\" lt-pagination__item lt-pagination__item-next\" ><a href='".get_pagenum_link($paged + 1)."'>Наступна </a></li>";
		} else {
			echo "<li class=\" lt-pagination__item lt-pagination__item-next\" style=\"opacity: 0.4;\">Наступна</li>";
		}
		echo "</ul></nav>\n";
	}
}




?>
