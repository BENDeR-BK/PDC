<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package pdc
 */

get_header(); ?>
	<section class="error-page">
		<div class="error-page__img">
			<img src="<?php echo SD_THEME_IMAGE_URI; ?>/about-logo.svg" alt="">
		</div>
		<h1 class="error-page__title"> <?php _e('Помилка 404...Сторінку не знайдено', 'pdc'); ?> </h1>
		<div class="error-page__text">Сторінкe яку ви шукаєте не знайдено. Рекомендуємо повернутися на головну сторінку</div>
		<a href="<?php echo site_url();?>" class="pd-btn pd-btn_red"><?php _e('Повернутися  на головну', 'pdc'); ?></a>
	</section>
<?php get_footer();
