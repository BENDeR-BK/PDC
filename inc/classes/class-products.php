<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class PDC_Product {

	/**
	*	Set post type params
	*/
	private $type = 'products';
	private $slug;
	private $name;
	private $singular_name;
	private $plural_name;

	/**
	*	Recipes constructor
	*/
	public function __construct() {
		$this->name = __( 'Крамниця', 'pdc' );
		$this->singular_name = __( 'Продукт', 'pdc' );
		$this->plural_name = __( 'Продукція', 'pdc' );

		$this->slug = 'products';

		add_action('init', array($this, 'register'));
		add_action('init', array($this, 'register_taxonomy'));
		add_action('init', array($this, 'register_taxonomy_tag'));

		// add_filter('single_template', array($this, 'get_custom_pt_single_template'));
		// add_filter('archive_template', array($this, 'get_custom_pt_archive_template'));
	}

	/**
     * Register post type
     */
	public function register() {
		$labels = array(
			'name'                  => $this->name,
			'singular_name'         => $this->singular_name,
			'add_new'               => sprintf( __('Add New %s', 'pdc' ), $this->singular_name ),
			'add_new_item'          => sprintf( __('Add New %s', 'pdc' ), $this->singular_name ),
			'edit_item'             => sprintf( __('Edit %s', 'pdc'), $this->singular_name ),
			'new_item'              => sprintf( __('New %s', 'pdc'), $this->singular_name ),
			'all_items'             => sprintf( __('All %s', 'pdc'), $this->plural_name ),
			'view_item'             => sprintf( __('View %s', 'pdc'), $this->name ),
			'search_items'          => sprintf( __('Search %s', 'pdc'), $this->name ),
			'not_found'             => sprintf( __('No %s found' , 'pdc'), strtolower($this->name) ),
			'not_found_in_trash'    => sprintf( __('No %s found in Trash', 'pdc'), strtolower($this->name) ),
			'parent_item_colon'     => '',
			'menu_name'             => $this->name
		);
		$args = array(
			'labels' => $labels,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'query_var'             => true,
			'rewrite'               => array( 'slug' => $this->slug ),
			'has_archive'           => true,
			'menu_position'         => 8,
			'supports'              => array( 
				'title', 
				'editor', 
				'author', 
				'thumbnail', 
				'excerpt', 
				'page-attributes', 
				'comments' 
			),
			'menu_icon'  =>  'dashicons-images-alt2',
		);
		register_post_type( $this->type, $args );
	}

	public function register_taxonomy() {
        $category = 'category'; // Second part of taxonomy name

        $labels = array(
            'name' => sprintf( __( '%s Categories', 'pdc' ), $this->name ),
            'menu_name' => sprintf( __( '%s Categories','pdc' ), $this->name ),
            'singular_name' => sprintf( __( '%s Category', 'pdc' ), $this->name ),
            'search_items' =>  sprintf( __( 'Search %s Categories', 'pdc' ), $this->name ),
            'all_items' => sprintf( __( 'All %s Categories','pdc' ), $this->name ),
            'parent_item' => sprintf( __( 'Parent %s Category','pdc' ), $this->name ),
            'parent_item_colon' => sprintf( __( 'Parent %s Category:','pdc' ), $this->name ),
            'new_item_name' => sprintf( __( 'New %s Category Name','pdc' ), $this->name ),
            'add_new_item' => sprintf( __( 'Add New %s Category','pdc' ), $this->name ),
            'edit_item' => sprintf( __( 'Edit %s Category','pdc' ), $this->name ),
            'update_item' => sprintf( __( 'Update %s Category','pdc' ), $this->name ),
        );
        $args = array(
            'labels' => $labels,
            'hierarchical' => true,
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array( 'slug' => $this->slug.'-'.$category ),
        );
        register_taxonomy( $this->type.'-'.$category, array($this->type), $args );
    }

    public function register_taxonomy_tag() { // Second part of taxonomy name

        $labels = array(
            'name' => __( 'Tags', 'pdc' ),
            'menu_name' => __( 'Tags','pdc' ),
            'singular_name' => __( 'Tag', 'pdc' ),
            'popular_items' => __( 'Popular Tags', 'pdc' ),
            'search_items' =>  __( 'Search Tag', 'pdc' ),
            'all_items' => __( 'All Tags','pdc' ),
            'parent_item' => null,
            'parent_item_colon' => null,
            'new_item_name' => __( 'New Tag Name','pdc' ),
            'add_new_item' => __( 'Add New Tag','pdc' ),
            'edit_item' => __( 'Edit Tag','pdc' ),
            'update_item' => __( 'Update Tag','pdc' ),
        );
        $args = array(
            'labels' => $labels,
            'hierarchical' => false,
            'update_count_callback' => '_update_post_term_count',
            'show_ui' => true,
            'query_var' => true,
            'rewrite' => array( 'slug' => $this->slug.'-tag' ),
        );
        register_taxonomy( $this->type.'_tag', array($this->type), $args );
    }

    // // https://codex.wordpress.org/Plugin_API/Filter_Reference/single_template
    // function get_custom_pt_single_template($single_template) {
    //     global $post;

    //     if ($post->post_type == $this->type) {
    //         if(file_exists(get_template_directory().'/single-portfolio.php')) return $single_template;
    //     }
    //     return $single_template;
    // }

    // // https://codex.wordpress.org/Plugin_API/Filter_Reference/archive_template
    // function get_custom_pt_archive_template( $archive_template ) {
    //     global $post;

    //     if ( is_post_type_archive ( $this->type ) ) {
    //         if(file_exists(get_template_directory().'/category-products.php')) return $archive_template;
    //     }
    //     return $archive_template;
    // }


}

new PDC_Product();