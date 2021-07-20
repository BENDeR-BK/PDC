<?php
/**
 * pdc enqueue scripts
 *
 * @package pdc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'pdc_scripts' ) ) {
	/**
	 * Load theme's JavaScript and CSS sources.
	 */
	function pdc_scripts() {

		// Get the theme data.
		$the_theme     = wp_get_theme();
		$theme_version = $the_theme->get( 'Version' );

		// Styles
		$css_version = $theme_version . '.' . filemtime( get_template_directory() . '/assets/css/main.min.css' );
		wp_enqueue_style( 'sd-sel', get_template_directory_uri() . '/assets/css/nice-select.css', array(), $css_version );
		wp_enqueue_style( 'sd-styles', get_template_directory_uri() . '/assets/css/main.min.css', array(), $css_version );
		wp_enqueue_style( 'sd-aos-style', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css', array(), $css_version );

		
		$js_version = $theme_version . '.' . filemtime( get_template_directory() . '/assets/js/custom.min.js' );

		wp_enqueue_script( 'sd-aos', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array('jquery'), $js_version, true );
		// wp_enqueue_script( 'sd-mix', 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.js', array('jquery'), $js_version, true );

		wp_enqueue_script( 'pd-libs', get_template_directory_uri() . '/assets/js/vendor.min.js', array('jquery'), $js_version, true );


		wp_enqueue_script( 'pd-sel', get_template_directory_uri() . '/assets/js/jquery.nice-select.min.js', array('pd-libs'), $js_version, true );
		wp_enqueue_script( 'pd-custom', get_template_directory_uri() . '/assets/js/custom.min.js', array('pd-libs'), $js_version, true );
		global $wp_query;
		wp_localize_script( 'pd-custom', '$pd_js', array(
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'posts_per' =>  get_option( 'posts_per_page' ),
			'current_page_js' => (get_query_var('paged')) ? get_query_var('paged') : 1,
			'max_pages'  => $wp_query->max_num_pages,
			'true_posts_js' => serialize($wp_query->query_vars),
			'first_page' => get_pagenum_link(1),
			'current_page' => $wp_query->query_vars['paged'] ? $wp_query->query_vars['paged'] : 1,
  			
		));

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
}

add_action( 'wp_enqueue_scripts', 'pdc_scripts' );