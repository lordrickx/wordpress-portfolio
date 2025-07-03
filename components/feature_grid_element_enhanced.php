<?php

    $main_title = $layout['main_title'];
    $description = $layout['description'];
    $grid_elements = $layout['grid_elements'];
    $top_border = $layout['top_border'];

?>

<section class="feature_grid_element feature_grid_element_enhanced <?php if($top_border) { echo 'full_border_top'; } ?>">

    <?php if($main_title) { ?>
        <h2><?php echo $main_title; ?></h2>
    <?php } ?>

    <?php if($description) { ?>
        <div class="sub_title"><?php echo $description; ?></div>
    <?php } ?>

    <div class="grid_elements">

        <?php foreach ($grid_elements as $grid_element) { ?>

            <div class="grid_element">

                <div class="top_part">
                    <?php if($grid_element['number']) { ?><div class="number"><?php echo $grid_element['number']; ?></div><?php } ?>
                    <?php if($grid_element['icon']) { ?><img class="icon" src="<?php echo $grid_element['icon']['url']; ?>" /><?php } ?>
                </div>

                <div class="content_part <?php echo !empty($grid_element['number']) ? 'content_part--number' : ''; ?>">
                    <?php if($grid_element['title']) { ?><h3 class="title"><?php echo $grid_element['title']; ?></h3><?php } ?>
                    <?php if($grid_element['description']) { ?><div class="content"><?php echo $grid_element['description']; ?></div><?php } ?>
                </div>

            </div>

        <?php } ?>

    </div>

</section>
