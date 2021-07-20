<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pdc
 */

$posylannya_na_storinku = get_field('posylannya_na_storinku','options');

?>
</main>
<footer class="footer">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-11 col-md-12 col-sm-10">
                <div class="footer__form">
                    <div class="form__title">У Вас виникли запитання?</div>
                    <div class="form__sub-title">Залиште свої дані. Ми зв’яжемося з Вами.</div>
                    <div class="form__wrapper">
                        <!-- <form action=""> -->
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-4">
                                    <div class="form-group">
                                        <input type="text" placeholder='Ім’я'>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="form-group">
                                        <input type="text" placeholder='Номер телефону'>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="form-btn">
                                        <button class="pd-btn pd-btn_black-b" type="submit" >Надіслати</button>
                                    </div>
                                </div>
                            </div> -->
                           
                        <!-- </form> -->
                        <?php
                            echo do_shortcode('[contact-form-7 id="213" title="У Вас виникли запитання?"]'); 
                        ?>
                    </div>
                </div>
                <div class="footer__contacts">
                    <div class="footer__mail">
                        <?php 
                            $e_mail = get_field('e_mail','options');
                            if( $e_mail) { ?>
                            
                                <span class="lt-ico lt-ico-mail"></span> 
                                <a href="mailto:<?php echo $e_mail; ?>"><?php echo $e_mail; ?></a>
                            <?php }
                        ?>
                       
                    </div>
                    <div class="footer__soc">
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
                    <div class="footer__phone">
                        <?php 
                            $telefon = get_field('telefon','options');
                            if( $telefon) { ?>
                               
                                <span class="lt-ico lt-ico-phone"></span> 
                                <a href="tel:<?php echo $telefon; ?>"><?php echo $telefon; ?></a>
                            <?php }
                        ?>
                      
                    </div>
                </div>
                <div class="footer__btn">
                <?php 
                    if( $posylannya_na_storinku) { ?>
                        <a href="<?php echo $posylannya_na_storinku; ?>" class='pd-btn pd-btn_red'>Пожертви-Донат</a>
                    <?php }
                ?>
                </div>
                <div class="footer__copy">
                    © <?php echo esc_html( date('Y ') ); ?> Православний духовний центр апостола Івана Богослова
                </div>
            </div>
        </div>
        
    </div>
    <div class="scrol-top-btn" id='scrol-top-btn'>
        <span class="lt-ico lt-ico-up"></span> 
    </div>
   
</footer>	
<?php wp_footer(); ?>

</body>
</html>
