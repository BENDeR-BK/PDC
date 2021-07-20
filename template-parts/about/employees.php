<section class="employees section-pagination" id='employees'>
    <div class="container">
        
        <div class="employees__title">
            <div class="sec-title">
                <?php the_field('zagolovok_zasnovnyky');?>
            </div>
        </div>
           
        <div class="founders">
            <div class="row">
                <div class="col-lg-4">
                    <div class="founders__title"><?php the_field('pid_zagolovok_zasnovnyky');?></div>
                    <div class="founders__text"><?php the_field('tekst_zasnovnyky');?></div>
                </div>
                <div class="col-lg-8">
                    <div class="founders__items">
                        <?php
                            if( have_rows('zasnovnyky') ):
                            
                                while( have_rows('zasnovnyky') ) : the_row();
                                    $foto = get_sub_field('foto');
                                    $url = $foto['url'];
                                    $posada = get_sub_field('posada');
                                    $imya = get_sub_field('imya');
                                ?>
                                    <div class="founders-item">
                                        <div class="founders-item__img">
                                            <img src="<?php echo $url; ?>" alt="img">
                                        </div>
                                        <div class="founders-item__desc"><?php echo $posada; ?> </div>
                                        <div class="founders-item__name"><?php echo $imya; ?></div>
                                    </div>
                                <?php endwhile;
                            endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="employees__items">
         <?php
                if( have_rows('spivrobitnyky') ):
                
                    while( have_rows('spivrobitnyky') ) : the_row();
                        $foto = get_sub_field('foto');
                        $url = $foto['url'];
                        $posada = get_sub_field('posada');
                        $imya = get_sub_field('imya');
                    ?>
                
                        <div class="employees-item">
                            <div class="employees-item__img">
                                <img src="<?php echo $url; ?>" alt="img">
                            </div>
                            <div class="employees-item__desc"><?php echo $posada; ?></div>
                            <div class="employees-item__name"><?php echo $imya; ?></div>
                        </div>
                    <?php endwhile;
                endif;
            ?>
          
        </div>
    </div>
</section>