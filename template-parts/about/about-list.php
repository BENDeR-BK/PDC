<section class='about-bg'></section>
<section class='chronology section-pagination' id='chronology'>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="chronology__title">
                    <div class="sec-title">Хронологія ДЦ</div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col">

                <div class="chronology__items">
                    <?php
                        if( have_rows('punkt_hronologiyi') ):
                          
                            while( have_rows('punkt_hronologiyi') ) : the_row();
                                $polozhennya = get_sub_field('polozhennya');
                                $zobrazhennya = get_sub_field('zobrazhennya');
                                $url = $zobrazhennya['url'];
                                $rik = get_sub_field('rik');
                                $data = get_sub_field('data');
                                $zagolovok = get_sub_field('zagolovok');
                                $tekst = get_sub_field('tekst');
                            ?>
                                <?php if ($polozhennya == 'Рік') {?>
                                   <div class="chronology-item__year" data-aos="fade-up" data-aos-offset="100" data-aos-duration="600" data-aos-delay="200"> <?php echo $rik; ?></div>
                                <?php } elseif ($polozhennya == 'Зліва') { ?>
                                   <div class="chronology-item chronology-item_left" data-aos="fade-up" data-aos-offset="100" data-aos-duration="600" data-aos-delay="200">
                                        <div class="chronology-item__date"><?php echo $data; ?></div>
                                        <div class="chronology-item__title">
                                            <?php echo $zagolovok; ?>
                                        </div>
                                        <div class="chronology-item__content">
                                            <?php
                                                if ($tekst) { ?>
                                                
                                                     <P><?php echo $tekst; ?></P>
                                                <?php }
                                                if ($zobrazhennya) { ?>
                                                    <img src="<?php echo $url; ?>" alt="img">
                                                <?php }
                                            ?>
                                        </div>
                                    </div>
                               <?php } elseif ($polozhennya == 'Зправа') { ?>
                                    <div class="chronology-item chronology-item_right" data-aos="fade-up" data-aos-offset="100" data-aos-duration="600" data-aos-delay="200">
                                        <div class="chronology-item__date"><?php echo $data; ?></div>
                                        <div class="chronology-item__title">
                                            <?php echo $zagolovok; ?>
                                        </div>
                                        <div class="chronology-item__content">
                                            <?php
                                                if ($tekst) { ?>
                                                
                                                     <P><?php echo $tekst; ?></P>
                                                <?php }
                                                if ($zobrazhennya) { ?>
                                                    <img src="<?php echo $url; ?>" alt="img">
                                                <?php }
                                            ?>
                                        </div>
                                    </div>
                                <?php } ?>

                            <?php endwhile;
                        endif;
                    ?>
                  
                </div>
            </div>
        </div>
    </div>
</section>