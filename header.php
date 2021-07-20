<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pdc
 */
$posylannya_na_storinku = get_field('posylannya_na_storinku','options');

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700;800&display=swap" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6Y0EM0STNP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-6Y0EM0STNP');
	</script>
</head>
<body <?php body_class(); ?>>
	<header>
		<div class="header">
			<div class="header__top">
				<div class="header__soc">
					<?php 
						$facebook = get_field('facebook','options');
						if( $facebook) { ?>
							<a  class="header__soc-item" href="<?php echo $facebook; ?>">
								<span class="lt-ico lt-ico-fb"></span> 
							</a>
						<?php }
					?>
					<?php 
						$twitter = get_field('twitter','options');
						if( $twitter) { ?>
							<a  class="header__soc-item" href="<?php echo $twitter; ?>">
								<span class="lt-ico lt-ico-tw"></span> 
							</a>
						<?php }
					?>
					
					<?php 
						$instagram = get_field('instagram','options');
						if( $instagram) { ?>
							<a  class="header__soc-item" href="<?php echo $instagram; ?>">
								<span class="lt-ico lt-ico-in"></span> 
							</a>
						<?php }
					?>
					<?php 
						$youtube = get_field('youtube','options');
						if( $youtube) { ?>
							<a  class="header__soc-item" href="<?php echo $youtube; ?>">
								<span class="lt-ico lt-ico-yt"></span> 
							</a>
						<?php }
					?>
				</div>
				<div class="header__logo">
					<div class="burger">
						<img src="<?php echo SD_THEME_IMAGE_URI; ?>/burger.svg" alt="">
						<img class="burger_close" src="<?php echo SD_THEME_IMAGE_URI; ?>/burger_close.svg" alt="">
					</div>
					<div class="logo-text_mob">
						Православний духовний центр <br> апостола Івана Богослова
					</div>
					<span>Православний Духовний Центр</span>
					<a href="<?php echo home_url(); ?>" class='header__logo-link'>
						<img src="<?php echo SD_THEME_IMAGE_URI; ?>/logo.svg" alt="">
					
					</a>
					

					<span>Апостола Івана Богослова</span>
				</div>
				<div class="header__btn">
					<?php 
						if( $posylannya_na_storinku) { ?>
							
							<a href="<?php echo $posylannya_na_storinku; ?>" class="pd-btn pd-btn_red">Пожертва-Донат</a>
						<?php }
					?>
					
					<div class="search__btn">
							<span class="lt-ico lt-ico-search"></span>  
							<span class="lt-ico lt-ico-close"></span>  
					</div>
				</div>
			</div>
			
			<div class="header__menu">
				<div class="header__menu-left">
					<?php
						if( has_nav_menu( 'main_menu_left' ) ) {
							wp_nav_menu(array(
								'menu' => 'main_menu_left',
								// 'menu_class' => 'main-menu',
								'theme_location' => 'main_menu_left',
								'container' => 'ul',
							));
						}						
					?>
					
				</div>
				<div class="header__menu-right">
					<?php
						if( has_nav_menu( 'main_menu_right' ) ) {
							wp_nav_menu(array(
								'menu' => 'main_menu_right',
								// 'menu_class' => 'main-menu',
								'theme_location' => 'main_menu_right',
								'container' => 'ul',
							));
						}						
					?>
					<div class="header__search">
						<div class="search__btn">
							<span class="lt-ico lt-ico-search"></span>  
							<span class="lt-ico lt-ico-close"></span>  
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</header>
	<div class="header__search-container">
		<div class="container">
						<!-- <?php echo do_shortcode('[wpdreams_ajaxsearchlite]'); ?> -->
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>" >
						<input class="search__input" placeholder="Почніть писати" type="text" value="<?php echo get_search_query() ?>" name="s" id="s" />
						<span class="lt-ico lt-ico-search search__input-icon"></span> 

						<button type="submit" id="searchsubmit" class="pd-btn pd-btn_black" value="Шукати" ><span class="lt-ico lt-ico-search"></span> <span class='btn--text'>Шукати</span></button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="header__menu_mob">
		<div class="mob-menu__btn">
			<a href="<?php echo $posylannya_na_storinku; ?>" class="pd-btn pd-btn_red">Пожертва-Донат</a>
		</div>
		<div class="mob-menu__menu">
			<?php
				if( has_nav_menu( 'main_menu_mob' ) ) {
					wp_nav_menu(array(
						'menu' => 'main_menu_mob',
						// 'menu_class' => 'main-menu',
						'theme_location' => 'main_menu_mob',
						'container' => 'ul',
					));
				}						
			?>
		</div>
		<div class="mob-menu__soc">
			<?php 
				$facebook = get_field('facebook','options');
				if( $facebook) { ?>
					<a  class="header__soc-item" href="<?php echo $facebook; ?>">
						<span class="lt-ico lt-ico-fb"></span> 
					</a>
				<?php }
			?>
			<?php 
				$twitter = get_field('twitter','options');
				if( $twitter) { ?>
					<a  class="header__soc-item" href="<?php echo $twitter; ?>">
						<span class="lt-ico lt-ico-tw"></span> 
					</a>
				<?php }
			?>
			
			<?php 
				$instagram = get_field('instagram','options');
				if( $instagram) { ?>
					<a  class="header__soc-item" href="<?php echo $instagram; ?>">
						<span class="lt-ico lt-ico-in"></span> 
					</a>
				<?php }
			?>
			<?php 
				$youtube = get_field('youtube','options');
				if( $youtube) { ?>
					<a  class="header__soc-item" href="<?php echo $youtube; ?>">
						<span class="lt-ico lt-ico-yt"></span> 
					</a>
				<?php }
			?>
		</div>
	</div>
	<main class="td-main">
		<div class="main-bg"></div>

