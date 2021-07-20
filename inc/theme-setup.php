<?php
/**
 * Theme basic setup.
 *
 * @package pdc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Set the content width based on the theme's design and stylesheet.
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

add_action( 'after_setup_theme', 'ch_setup' );

if ( ! function_exists ( 'ch_setup' ) ) {

	function ch_setup() {

		load_theme_textdomain( 'pdc', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'title-tag' );

		register_nav_menus( array(
			'main_menu'   => esc_html__( 'Main menu', 'pdc' ),
			'main_menu_mob'   => esc_html__( 'Mobile menu', 'pdc' ),
			'main_menu_left'   => esc_html__( 'Main menu (left)', 'pdc' ),
			'main_menu_right'   => esc_html__( 'Main menu (right)', 'pdc' ),
			'lang_menu'   => esc_html__( 'Lang menu', 'pdc' ),
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		add_theme_support( 'post-thumbnails' );
		add_image_size( 'progressive', 25, 25, true ); // Кадрирование изображения

		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
		) );

		add_theme_support( 'custom-background', apply_filters( 'sd_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		add_theme_support( 'custom-logo' );

		add_theme_support( 'responsive-embeds' );
	}
}


// add_filter( 'excerpt_more', 'ch_custom_excerpt_more' );

// if ( ! function_exists( 'ch_custom_excerpt_more' ) ) {

// 	function ch_custom_excerpt_more( $more ) {
// 		if ( ! is_admin() ) {
// 			$more = '';
// 		}
// 		return $more;
// 	}

// }



if(function_exists('A2A_SHARE_SAVE_add_to_content')){
	remove_filter( 'the_content', 'A2A_SHARE_SAVE_add_to_content', 98 );
	remove_action( 'pre_get_posts', 'A2A_SHARE_SAVE_pre_get_posts' );
	add_action('nc_share_post', function() {
		echo do_shortcode('[addtoany]');
	});
	
}

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
	  'page_title'   => 'option',
	  'menu_title'  => 'options',
	  'menu_slug'   => 'theme-general-settings',
	  'capability'  => 'edit_posts',
	  'redirect'    => false
	));
  
}


add_action( 'init', 'create_taxonomy' );
function create_taxonomy(){

	// список параметров: wp-kama.ru/function/get_taxonomy_labels
	register_taxonomy( 'authors', [ 'authors-posts' ], [
		'label'                 => '', // определяется параметром $labels->name
		'labels'                => [
			'name'              => 'Name',
			'singular_name'     => 'Name',
			'search_items'      => 'Search Name',
			'all_items'         => 'All Name',
			'view_item '        => 'View Name',
			'parent_item'       => 'Parent Name',
			'parent_item_colon' => 'Parent Name:',
			'edit_item'         => 'Edit Name',
			'update_item'       => 'Update Name',
			'add_new_item'      => 'Add New Name',
			'new_item_name'     => 'New  Name',
			'menu_name'         => 'Name',
		],
		'description'           => '', // описание таксономии
		'public'                => true,
		// 'publicly_queryable'    => null, // равен аргументу public
		// 'show_in_nav_menus'     => true, // равен аргументу public
		// 'show_ui'               => true, // равен аргументу public
		// 'show_in_menu'          => true, // равен аргументу show_ui
		// 'show_tagcloud'         => true, // равен аргументу show_ui
		// 'show_in_quick_edit'    => null, // равен аргументу show_ui
		'hierarchical'          => false,

		'rewrite'               => true,
		//'query_var'             => $taxonomy, // название параметра запроса
		'capabilities'          => array(),
		'meta_box_cb'           => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column'     => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest'          => true, // добавить в REST API
		'rest_base'             => null, // $taxonomy
		// '_builtin'              => false,
		//'update_count_callback' => '_update_post_term_count',
	] );
}

function pdc_custom_excerpts($limit) {
    return wp_trim_words(get_the_excerpt(), $limit );
}