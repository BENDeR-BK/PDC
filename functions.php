<?php
/**
 * pdc functions and definitions
 *
 * @package pdc
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Define constant
 */
$theme = wp_get_theme();

if ( ! empty( $theme['Template'] ) ) {
	$theme = wp_get_theme( $theme['Template'] );
}

if ( ! defined( 'DS' ) ) {
	define( 'DS', DIRECTORY_SEPARATOR );
}

define( 'SD_THEME_NAME', $theme['Name'] );
define( 'SD_THEME_SLUG', $theme['Template'] );
define( 'SD_THEME_VERSION', $theme['Version'] );
define( 'SD_THEME_DIR', get_template_directory() );
define( 'SD_THEME_URI', get_template_directory_uri() );
define( 'SD_THEME_IMAGE_URI', get_template_directory_uri() . '/assets/img' );
define( 'SD_INC_DIR', wp_normalize_path( SD_THEME_DIR . DS . 'inc') );

$smoky_dance_includes = array(
	// Base Theme
	'/theme-settings.php',                  // Initialize theme default settings.
	'/theme-ajax.php',                  // ajax
	'/theme-setup.php',                           // Theme setup and custom theme supports.
	'/theme-widgets.php',                         // Register widget area.
	'/theme-enqueue.php',                         // Enqueue scripts and styles.
	'/theme-optimize.php',
	'/template-tags.php',                   // Custom template tags for this theme.
	'/theme-pagination.php',                      // Custom pagination for this theme.
	'/theme-hooks.php',                           // Custom hooks.
	'/theme-extras.php',                          // Custom functions that act independently of the theme templates.
	'/classes/class-nav-walker.php',
	'/classes/class-seo-walker.php',
	'/classes/class-products.php',
);

foreach ( $smoky_dance_includes as $file ) {
	// Retrieve the name of the highest priority template file that exists, optionally loading that file.
	$filepath = locate_template( 'inc' . $file );
	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	require_once $filepath;
}




function wp_sort() {
	if ($_GET["sort"] != NULL) { 
	  $sort = $_GET["sort"];
	} 
  }



  add_filter( 'the_content', 'kama_search_backlight' );
  add_filter( 'get_the_excerpt', 'kama_search_backlight' );
  add_filter( 'the_title', 'kama_search_backlight' );
  
  # Функция для подсветки слов поиска в WordPress
  function kama_search_backlight( $text ){
  
	  // Настройки
	  $styles = ['',
		  'background:#EEA2A1;',
		  'background:#F2B9B9;',
		  'background:#F7D1D0;',
		  'background:#FBE8E8;',
		  'background:#FDF3F3;',
	  ];
  
	  // только для страниц поиска и главного цикла...
	  if( ! is_search() || ! in_the_loop() )
		  return $text;
  
	  $query_terms = get_query_var( 'search_terms' );
  
	  if( empty( $query_terms ) )
		  $query_terms = array_filter( (array) get_query_var('s') );
  
	  if( empty( $query_terms ) )
		  return $text;
  
	  $n = 0;
	  foreach( $query_terms as $term ){
		  $n++;
		
		  $term = preg_quote( $term, '/' );
		  $text = preg_replace_callback( "/$term/iu", function($match) use ($styles,$n){
			  return '<span class="search_text" style="'. $styles[ $n ] .'"> '. $match[0] .'</span>';
		  }, $text );
		  
	  }
		
		
		
	  return $text;
  }

// function search_excerpt_highlight() {
// 	$excerpt = get_the_excerpt();
// 	$keys = implode('|', explode(' ', get_search_query()));
// 	$excerpt = preg_replace('/(' . $keys .')/iu', '<strong class="search-highlight">\0</strong>', $excerpt);
   
// 	echo '<p>' . $excerpt . '</p>';
//    }
   
   
//    function search_title_highlight() {
// 	$title = get_the_title();
// 	$keys = implode('|', explode(' ', get_search_query()));
// 	$title = preg_replace('/(' . $keys .')/iu', '<strong class="search-highlight">\0</strong>', $title);
   
// 	echo $title;
//    }