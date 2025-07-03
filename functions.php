<?php

// Saves ACF Fields to Json files in template.
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
function my_acf_json_save_point( $path ) {
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    // return
    return $path;
}

define("ACRO_THEME_VERSION", '1.3.7.2');

add_theme_support('post-thumbnails');

add_filter('ssa/performance/lazy_load', '__return_true');

if (function_exists('acf_add_options_page')) {
    // add parent
    $parent = acf_add_options_page(array(
        'page_title' => 'Options',
        'menu_title' => 'Site Options',
        'redirect' => false
    ));

    // add sub page - Copy the below to ad more sub items to site options
    // acf_add_options_sub_page(array(
    // 	'page_title' 	=> 'Shop Collections',
    // 	'menu_title' 	=> 'Shop Collections',
    // 	'parent_slug' 	=> $parent['menu_slug'],
    // ));
}

/**
 * WordPress Functions
 */


// disable admin bar
if (is_user_logged_in()) {
    show_admin_bar(true);
}

require(dirname(__FILE__) . '/custom-post-types/faq.php');
require(dirname(__FILE__) . '/custom-post-types/glossary.php');
require(dirname(__FILE__) . '/custom-post-types/feature-videos.php');
require(dirname(__FILE__) . '/custom-post-types/features.php');
require(dirname(__FILE__) . '/custom-post-types/submenu.php');
require(dirname(__FILE__) . '/blocks/menu-item-basic-tab/index.php');
require(dirname(__FILE__) . '/blocks/menu-item-card/index.php');
require(dirname(__FILE__) . '/blocks/menu-back-button/index.php');


// enable custom menu support
if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}


add_action('add_attachment', 'my_set_image_meta_upon_image_upload');
function my_set_image_meta_upon_image_upload($post_ID)
{
    // Check if uploaded file is an image, else do nothing
    if (wp_attachment_is_image($post_ID)) {
        $my_image_title = get_post($post_ID)->post_title;
        // Sanitize the title:  remove hyphens, underscores & extra spaces:
        $my_image_title = preg_replace('%\s*[-_\s]+\s*%', ' ', $my_image_title);
        // Sanitize the title:  capitalize first letter of every word (other letters lower case):
        $my_image_title = ucwords(strtolower($my_image_title));
        // Create an array with the image meta (Title, Caption, Description) to be updated
        // Note:  comment out the Excerpt/Caption or Content/Description lines if not needed
        $my_image_meta = array(
            'ID' => $post_ID,            // Specify the image (ID) to be updated
            'post_title' => $my_image_title,     // Set image Title to sanitized title
            'post_excerpt' => $my_image_title,     // Set image Caption (Excerpt) to sanitized title
            'post_content' => $my_image_title,     // Set image Description (Content) to sanitized title
        );
        // Set the image Alt-Text
        update_post_meta($post_ID, '_wp_attachment_image_alt', $my_image_title);
        // Set the image meta (e.g. Title, Excerpt, Content)
        wp_update_post($my_image_meta);
    }
}

function svg($filename)
{

    // Add the path to your SVG directory inside your theme.
    $svg_path = get_stylesheet_directory() . '/images/svg/' . $filename . '.svg';

    // Check the SVG file exists
    if (file_exists($svg_path)) {

        return file_get_contents($svg_path);
    }

    // Return a blank string if we can't find the file.
    return '';
}

function register_custom_menus()
{
    register_nav_menus(array(
        'primary-menu' => 'Primary Menu',
        'secondary-menu' => 'Secondary Menu',
        'main-menu-responsive' => __('Menú Responsive', 'acrobits')
        // Add more menu locations if needed
    ));
}

add_action('after_setup_theme', 'register_custom_menus');


function register_widget_areas()
{

    register_sidebar(array(
        'name' => 'First Footer Sidebar',
        'id' => 'left-footer-widget-area',
        'description' => 'This is the footer widget area.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    register_sidebar(array(
        'name' => 'Second Footer Sidebar',
        'id' => 'middle-footer-widget-area',
        'description' => 'This is the footer widget area.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    register_sidebar(array(
        'name' => 'Third Footer Sidebar',
        'id' => 'third-footer-widget-area',
        'description' => 'This is the footer widget area.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));


    register_sidebar(array(
        'name' => 'Fourth Footer Sidebar',
        'id' => 'right-footer-widget-area',
        'description' => 'This is the footer widget area.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));


    // Add more widget areas as needed
}

add_action('widgets_init', 'register_widget_areas');

function buttons($btns)
{ ?>
    <div class="btn_group">
        <?php foreach ($btns as $btn) {
            $btn_class = 'background_' . $btn['button_background_color'] . ' text_' . $btn['button_text_color'] . ' border_' . $btn['button_border']; ?>
            <a href="<?php echo $btn['button']['url']; ?>" class="btn <?php echo $btn_class; ?>"
                target="<?php echo $btn['button']['target']; ?>">
                <?php if ($btn['button_icon']) { ?>
                    <span class="btn_icon">
                        <img src="<?php echo $btn['button_icon']; ?>" alt="<?php echo $btn['button']['title']; ?>">
                    </span>
                <?php } ?>
                <?php echo $btn['button']['title']; ?>
            </a>
        <?php } ?>
    </div>
<?php }


function exclude_latest_post_from_blog($query)
{
    if ($query->is_home() && $query->is_main_query()) {
        $first_post = get_first_post();
        $query->set('post__not_in', [$first_post]);
    }
}

function get_first_post()
{
    $first_post = 0;
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => '1',
        'orderby'        => 'date',
        'order'          => 'DESC',
    );
    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $first_post = get_the_ID();
        }
    }
    wp_reset_postdata();
    return $first_post;
}

add_action('pre_get_posts', 'exclude_latest_post_from_blog');

function load_more_posts()
{
    $page = $_POST['page'];
    $loaded_post_ids = isset($_POST['loaded_post_ids']) ? explode(',', $_POST['loaded_post_ids']) : array();
    $category_id = isset($_POST['category_id']) ? $_POST['category_id'] : '';

    // Inicializar array de posts a excluir
    $exclude_posts = array();

    // Agregar posts ya cargados a la lista de exclusión
    if (!empty($loaded_post_ids)) {
        $exclude_posts = array_merge($exclude_posts, $loaded_post_ids);
    }

    // Obtener el post destacado
    $featured_post = get_first_post();
    if ($featured_post) {
        $exclude_posts[] = $featured_post;
    }

    // Obtener posts etiquetados como 'featured'
    $featured_tagged_posts = new WP_Query(array(
        'tag' => 'featured',
        'posts_per_page' => -1,
        'fields' => 'ids'
    ));

    if ($featured_tagged_posts->have_posts()) {
        $exclude_posts = array_merge($exclude_posts, $featured_tagged_posts->posts);
    }
    wp_reset_postdata();

    // Configurar la consulta principal
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 6,
        'paged' => $page,
        'post__not_in' => array_unique($exclude_posts),
        'no_found_rows' => false,
        'update_post_meta_cache' => false,
        'update_post_term_cache' => false
    );

    // Agregar filtro por categoría si existe
    if (!empty($category_id)) {
        $args['cat'] = $category_id;
    }

    $loop = new WP_Query($args);

    if ($loop->have_posts()) {
        while ($loop->have_posts()) {
            $loop->the_post();
            get_template_part('templates/blog/blog-post-block');
        }
    }

    wp_reset_postdata();
    die();
}

add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');


function get_posts_by_category()
{
    $category_id = isset($_POST['category_id']) ? $_POST['category_id'] : '';
    $featured_post = get_first_post();
    // Query the posts based on the category ID
    $args = array(
        'post_type' => 'post',
        'cat' => $category_id,
        'posts_per_page' => 20,
        'post__not_in' => [$featured_post]
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('templates/blog/blog-post-block');
        }
    }
    wp_reset_postdata();

    // You must die() in WordPress AJAX handlers
    die();
}

// Hook the function for logged-in users
add_action('wp_ajax_get_posts_by_category', 'get_posts_by_category');

// Hook the function for non logged-in users
add_action('wp_ajax_nopriv_get_posts_by_category', 'get_posts_by_category');


function my_ab_test_redirect()
{
    // This makes sure that the code only runs for pages
    if (is_page()) {
        $page = get_queried_object();
        $page_id = $page->ID;

        $enable_ab_test = get_field('enable_ab_test', $page_id);
        $filter = get_field('filter', $page_id);

        $current_url = home_url(add_query_arg(null, null)); // Get the current URL
        $query_string = $_SERVER['QUERY_STRING']; // Get query string

        // Check if the filter string exists in the current URL
        $filter_exists = $filter ? strpos($current_url, $filter) !== false : true;

        if ($enable_ab_test && $filter_exists) {
            $cookie_name = 'ab_test_page_' . $page_id;

            if (isset($_COOKIE[$cookie_name])) {
                $version = $_COOKIE[$cookie_name];
                if ($version === 'alternate') {
                    $alternate_page_url = get_permalink(get_field('alternate_page', $page_id));

                    // Append query string to alternate_page_url
                    if ($query_string) {
                        $alternate_page_url .= '?' . $query_string;
                    }

                    if ($alternate_page_url) {
                        wp_redirect($alternate_page_url);
                        exit;
                    }
                }
            } else {
                $alternate_page = get_field('alternate_page', $page_id);
                $alternate_page_chance = get_field('alternate_page_chance', $page_id);

                $random_number = rand(1, 100);
                if ($random_number <= $alternate_page_chance) {
                    setcookie($cookie_name, 'alternate', time() + (86400 * 30), "/");
                    $alternate_page_url = get_permalink($alternate_page);

                    // Append query string to alternate_page_url
                    if ($query_string) {
                        $alternate_page_url .= '?' . $query_string;
                    }

                    if ($alternate_page_url) {
                        wp_redirect($alternate_page_url);
                        exit;
                    }
                } else {
                    setcookie($cookie_name, 'original', time() + (86400 * 30), "/");
                }
            }
        }
    }
}


add_action('template_redirect', 'my_ab_test_redirect');

function custom_upload_directory($args)
{
    $args['subdir'] = '';
    $args['path'] = $args['basedir'] . $args['subdir'];
    $args['url'] = $args['baseurl'] . $args['subdir'];
    return $args;
}

add_filter('upload_dir', 'custom_upload_directory');

function add_blog_prefix_to_post_link($permalink, $post)
{
    if ($post->post_type === 'post') {
        $category = get_the_category($post->ID);
        $is_pillar = get_post_meta($post->ID, 'pillar_article', true);
        if ($is_pillar) {
            return home_url("/blog/" . $post->post_name);
        }
        if (!empty($category)) {
            $category_slug = $category[0]->slug;  // Get the first category's slug
            return home_url("/blog/{$category_slug}/" . $post->post_name);
        }
    }
    return $permalink;
}

add_filter('post_link', 'add_blog_prefix_to_post_link', 10, 2);


//function custom_rewrite_rules($wp_rewrite) {
//    $new_rules = array(
//        'blog/(.+)/(.+)/?$' => 'index.php?category_name=' . $wp_rewrite->preg_index(1) . '&name=' . $wp_rewrite->preg_index(2),
//    );
//    $wp_rewrite->rules = $new_rules + $wp_rewrite->rules;
//}
//add_action('generate_rewrite_rules', 'custom_rewrite_rules');

function custom_rewrite_rule($rules)
{
    $new_rules = array(
        'blog/([^/]+)/([^/]+)/?$' => 'index.php?category_name=' . '$matches[1]' . '&name=' . '$matches[2]',
        'blog/([^/]+)/?$' => 'index.php?name=' . '$matches[1]',
    );
    return $new_rules + $rules;
}

add_filter('rewrite_rules_array', 'custom_rewrite_rule');

function check_request($query_vars)
{
    if (isset($query_vars['category_name']) && isset($query_vars['name'])) {
        $post = get_page_by_path($query_vars['name'], OBJECT, 'post');
        $category = get_category_by_slug($query_vars['category_name']);
        if (!$post || !$category) {
            $query_vars['error'] = '404';
        }
    }
    return $query_vars;
}

add_filter('request', 'check_request');

add_filter('wpseo_next_rel_link', '__return_false');
add_filter('wpseo_prev_rel_link', '__return_false');


add_action('frm_validate_field_entry', 'block_specific_email_domains', 10, 3);
function block_specific_email_domains($errors, $field, $value)
{
    // Replace 25 with the ID of your email field
    if ($field->id == 25) {
        // Fetch blocked domains from ACF options field
        $blocked_domains_str = get_field('form_blocked_domains', 'option');

        // Convert the comma-separated string into an array
        $blocked_domains = array_map('trim', explode(',', $blocked_domains_str));

        $email_domain = explode('@', $value);
        $email_domain = array_pop($email_domain);

        if (in_array($email_domain, $blocked_domains)) {
            $errors['field' . $field->id] = 'Sorry, please use a business email to request a demo of our platform.';
        }
    }
    return $errors;
}

function my_custom_admin_styles()
{
    echo '<style>
       .gform-dialog--anim-in-ready {
       display: none !important;
       }
       .wp-admin {
            position: unset !important;
        }
    </style>';
}

add_action('admin_head', 'my_custom_admin_styles');

remove_filter('template_redirect', 'redirect_canonical');

add_filter('wp_sitemaps_enabled', '__return_false');

add_action('frm_after_create_entry', 'download_pdf_after_form_submit', 30, 2);

function download_pdf_after_form_submit($entry_id, $form_id)
{

    // Check if the form submitted is the one you're interested in.
    if ($form_id == 4) {

        echo '<script type="text/javascript">
                document.addEventListener("DOMContentLoaded", function() {
                    var downloadLink = document.createElement("a");
                    downloadLink.href = "/wp-content/uploads/2023/08/Acrobits-Building-vs.-Buying-Softphone-Apps.pdf";
                    downloadLink.download = "Acrobits-Building-vs.-Buying-Softphone-Apps.pdf";
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                });
              </script>';
    }
}

function redirect_to_category_url()
{
    if (is_single() && !is_admin()) {
        global $post;
        $categories = get_the_category($post->ID);
        if ($categories) {
            // Taking the first category. If you have a specific logic, apply here.
            $category = $categories[0];
            // This is the URL structure according to your example
            $category_url = home_url('blog/' . $category->slug . '/' . $post->post_name . '/');

            $is_pillar = get_post_meta($post->ID, 'pillar_article', true);

            if ($is_pillar) {
                $category_url = home_url('blog/' . $post->post_name . '/');
            }

            if (home_url($_SERVER['REQUEST_URI']) != $category_url) {
                wp_safe_redirect($category_url, 301);
                exit();
            }
        }
    }
}

add_action('template_redirect', 'redirect_to_category_url');

add_filter('the_content', function ($content) {
    if (is_singular() && in_the_loop() && is_main_query()) {
        $enable_table_of_contents = true;
        if ($enable_table_of_contents) {
            $content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");
            $dom = new DOMDocument();
            if (empty($content)) return $content;
            $dom->loadHTML($content);
            $headings = $dom->getElementsByTagName('h2');

            if ($headings instanceof DOMNodeList) {
                /**
                 * @var DOMElement $heading
                 */
                foreach ($headings as $heading) {
                    if (!$heading->hasAttribute('id')) {
                        $heading->setAttribute('id', acroSeoUrl($heading->nodeValue));
                    }
                }
            }

            return $dom->saveHTML();
        }
    }

    return $content;
});

function acroSeoUrl($string)
{
    //Lower case everything
    $string = strtolower($string);
    //Make alphanumeric (removes all other characters)
    $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
    //Clean up multiple dashes or whitespaces
    $string = preg_replace("/[\s-]+/", " ", $string);
    //Convert whitespaces and underscore to dash
    $string = preg_replace("/[\s_]/", "-", $string);
    return $string;
}

function getUserIP()
{
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
        $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}

function custom_wpkses_post_tags($tags, $context)
{

    if ('post' === $context) {
        $tags['iframe'] = array(
            'src'             => true,
            'height'          => true,
            'width'           => true,
            'frameborder'     => true,
            'allowfullscreen' => true,
        );
    }

    return $tags;
}

add_filter('wp_kses_allowed_html', 'custom_wpkses_post_tags', 10, 2);

function wrap_embed_with_div($html, $url, $attr, $post_ID)
{
    // Only wrap video embeds, not all embeds
    if (strpos($html, '<iframe') !== false || strpos($html, '<embed') !== false) {
        return '<div class="responsive-video">' . $html . '</div>';
    }

    return $html;
}
add_filter('embed_oembed_html', 'wrap_embed_with_div', 10, 4);
add_filter('video_embed_html', 'wrap_embed_with_div');

function preload_featured_image()
{
    if (is_single()) { // Preload on single posts
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
        $webp_url = str_replace(['.jpg', '.jpeg', '.png'], '.webp', $featured_image_url);

        if ($webp_url) {
            echo '<link rel="preload" href="' . esc_url($webp_url) . '" as="image" type="image/webp">';
        }
    }
}
add_action('wp_head', 'preload_featured_image', 1);

require_once __DIR__ . '/inc/enqueue.php';
require_once __DIR__ . '/inc/setup.php';
require_once __DIR__ . '/inc/acro_walker_nav_menu.php';
require_once __DIR__ . '/inc/admin-enqueue.php';
require_once __DIR__ . '/inc/ajax.php';
require_once __DIR__ . '/inc/gravity-forms/hooks.php';
require_once __DIR__ . '/inc/softphone-form/hubspot.php';
require_once __DIR__ . '/inc/softphone-form/ssa.php';
require_once __DIR__ . '/blocks/index.php';
require_once __DIR__ . '/inc/optimization.php';
require_once __DIR__ . '/inc/shortcodes.php';
require_once __DIR__ . '/inc/author.php';
require_once __DIR__ . '/inc/shortcodes.php';







//enqueve my stylesheet
function acro_enqueue_styles()
{
    wp_enqueue_style(
        'acro-main-style', // Handle único
        get_template_directory_uri() . '/inc/css/styles.css', // Ruta al archivo
        array(), // Dependencias (vacío si no hay)
        filemtime(get_template_directory() . '/inc/css/styles.css'), // Versión basada en la última modificación
        'all' // Tipo de medio
    );
}
add_action('wp_enqueue_scripts', 'acro_enqueue_styles');




//code to inject the images into the softphone form
//which has Page Without Header & Footer v2 as a template
function inyectar_repetidor_en_div()
{
?>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let contenedor = document.querySelector(".step-1 .acrobits_softphone-forms__images");
            if (contenedor) {
                let nuevoDiv = document.createElement("div");
                nuevoDiv.classList.add("contenedor_slider");
                nuevoDiv.innerHTML = `<?php
                                        if (have_rows('campos_demo_form')):
                                            echo '<div class="slide_efect_form">';
                                            while (have_rows('campos_demo_form')):
                                                the_row();
                                                $imagen_url = get_sub_field('img_paso1_slide');
                                                $video_url = get_sub_field('small_video');
                                                $inter_url = get_sub_field('interface');
                                                $mockup_url = get_sub_field('mockup_mask');


                                                echo '<div class="slide_item">';

                                                echo '<div class="slide_item_img">';
                                                if ($video_url) { // Mostrar el video si existe
                                                    echo '<div class="video_slider_form">';
                                                    echo '<div class="video_slider_form_inter">';
                                                    echo '<img src="' . esc_url($inter_url) . '" alt="Imagen del slide">';
                                                    echo '</div>';
                                                    echo '<div class="muckup_mask">';
                                                    echo '<img src="' . esc_url($mockup_url) . '" alt="Imagen del slide">';
                                                    echo '</div>';
                                                    echo '<video autoplay loop muted playsinline>';
                                                    echo '<source src="' . esc_url($video_url) . '" type="video/mp4">';
                                                    echo 'Tu navegador no soporta el video.';
                                                    echo '</video>';
                                                    echo '</div>';
                                                }
                                                echo '<img class="slide_item_img_img" src="' . esc_url($imagen_url) . '" alt="Imagen del slide">';
                                                echo '</div>';
                                                echo '</div>';
                                            endwhile;
                                            echo '</div>';
                                        endif;
                                        ?>`;
                contenedor.appendChild(nuevoDiv);

                // Animación de Fade Slider
                let slides = nuevoDiv.querySelectorAll(".slide_item");
                let index = 0;

                function showSlide() {
                    slides.forEach(slide => slide.style.opacity = "0");
                    slides[index].style.opacity = "1";
                    index = (index + 1) % slides.length;
                }

                if (slides.length > 1) {
                    slides.forEach(slide => slide.style.transition = "opacity 1s ease-in-out");
                    slides[0].style.opacity = "1"; // Mostrar el primer slide
                    setInterval(showSlide, 4000);
                }
            }
        });
    </script>

    <?php
}
add_action('wp_footer', 'inyectar_repetidor_en_div');








//this script hides gutemberg options on groundwire.php // groundwire landing template


function disable_gutenberg_for_groundwire_template($can_edit, $post)
{
    if (!$post) {
        return $can_edit;
    }

    // Verifica la plantilla asignada al post
    $template = get_page_template_slug($post->ID);

    // Si es la plantilla "groundwire landing template", deshabilita Gutenberg
    if ($template === 'groundwire.php') {
        return false;
    }

    return $can_edit;
}
add_filter('use_block_editor_for_post', 'disable_gutenberg_for_groundwire_template', 10, 2);





//code to inject the reviews to the softphone form that has the template Page Without Header & Footer v2


function inject_acf_stars_script()
{
    if (!is_admin()) {
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                let targetContainer = document.querySelector(".acrobits_softphone-forms__content-wrapper.step-3 .acrobits_softphone-forms__image-wrapper");

                if (targetContainer) {
                    let starsHTML = `<?php
                                        if (have_rows('step_3_stars')) :
                                            echo '<div class="reviews-container">';

                                            while (have_rows('step_3_stars')) : the_row();
                                                $stars = get_sub_field('stars_number');
                                                $title = get_sub_field('stars_title');
                                                $text = get_sub_field('stars_text');
                                                $extra_icon = get_sub_field('extra_icon');
                                                $extra_text = get_sub_field('extra_text');
                                        ?>
                            <div class="review-item-container hidden">         
                                <div class="review-item">
                                    <div class="review-header">
                                        <div class="stars">
                                            <?php for ($i = 1; $i <= 5; $i++) : ?>
                                                <span class="star <?php echo ($i <= $stars) ? 'filled' : ''; ?>">
                                                <img src="<?php echo get_template_directory_uri(); ?>/inc/img/stareview.png" alt="star">
                                                </span>
                                            <?php endfor; ?>
                                        </div>
                                        <h3><?php echo esc_html($title); ?></h3>
                                    </div>
                                    <div class="review-text">
                                        <?php echo wp_kses_post($text); ?>
                                    </div>
                                    <div class="extra_cont">
                                        <img src="<?php echo esc_url($extra_icon); ?>" alt="extra icon">
                                        <p><?php echo esc_html($extra_text); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php
                                            endwhile;

                                            echo '</div>';
                                        endif;
                    ?>`;

                    targetContainer.insertAdjacentHTML("beforeend", starsHTML);

                    // Observer para activar la animación cuando los elementos sean visibles
                    let reviews = document.querySelectorAll(".review-item-container");
                    let delay = 500; // Tiempo de espera entre cada animación (0.5s)

                    let observer = new IntersectionObserver(
                        (entries, observer) => {
                            let visibleReviews = entries.filter(entry => entry.isIntersecting);

                            visibleReviews.forEach((entry, index) => {
                                setTimeout(() => {
                                    entry.target.classList.add("fade-in");
                                }, delay * index); // Hace que los elementos aparezcan de uno en uno

                                observer.unobserve(entry.target); // Dejar de observar después de la animación
                            });
                        }, {
                            threshold: 0.2
                        } // Se activa cuando el 20% del elemento es visible
                    );

                    reviews.forEach((review) => observer.observe(review));
                }
            });
        </script>

        <style>
            /* Ocultar inicialmente */
            .hidden {
                opacity: 0;
                transform: translate(90px, 60px);
                /* Aparece desde la izquierda y abajo */
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }

            /* Animación de aparición */
            .fade-in {
                opacity: 1;
                transform: translate(0, 0);
            }
        </style>
    <?php
    }
}
add_action('wp_footer', 'inject_acf_stars_script');






//codigo to inject title & subtitle to the softphone 
//form that has the template Page Without Header & Footer v2 on step 3

function inject_acf_step_3_script()
{
    if (!is_admin()) {
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                let targetContainer = document.querySelector(".step-3 .acrobits_softphone-forms__title-box");

                if (targetContainer) {
                    let titleHTML = `<?php
                                        $step_3_title = get_field('step_3_title');
                                        $step_3_subtitle = get_field('step_3_subtitle');

                                        if ($step_3_title || $step_3_subtitle) :
                                        ?>
                        <div class="step-3-content">
                            <?php if ($step_3_title) : ?>
                                <div class="step-3-title"><?php echo wp_kses_post($step_3_title); ?></div>
                            <?php endif; ?>

                            <?php if ($step_3_subtitle) : ?>
                                <div class="step-4-subtitle"><?php echo wp_kses_post($step_3_subtitle); ?></div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>`;

                    targetContainer.insertAdjacentHTML("beforeend", titleHTML);
                }
            });
        </script>


    <?php
    }
}
add_action('wp_footer', 'inject_acf_step_3_script');





//codigo to inject title & subtitle to the softphone form that has the template Page Without Header & Footer v2 on step 4

function inject_acf_step_4_script()
{
    if (!is_admin()) {
    ?>
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                let targetContainer = document.querySelector(".step-4 .acrobits_softphone-forms__title-box");

                if (targetContainer) {
                    let titleHTML = `<?php
                                        $title = get_field('step_4_title');
                                        $subtitle = get_field('step_4_subtitle');

                                        if ($title || $subtitle) :
                                        ?>
                        <div class="step-4-content">
                            <?php if ($title) : ?>
                                <div class="step-4-title"><?php echo wp_kses_post($title); ?></div>
                            <?php endif; ?>

                            <?php if ($subtitle) : ?>
                                <div class="step-4-subtitle"><?php echo wp_kses_post($subtitle); ?></div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>`;

                    targetContainer.insertAdjacentHTML("beforeend", titleHTML);
                }
            });
        </script>


<?php
    }
}
add_action('wp_footer', 'inject_acf_step_4_script');



// Register the custom taxonomy "video_category"
function create_taxonomy_video_category()
{
    $args = array(
        'label' => 'Video Categories', // Name of the taxonomy
        'hierarchical' => true, // True for categories, false for tags
        'public' => true, // Make the taxonomy publicly available
        'show_in_rest' => true, // Enable in Gutenberg editor
    );
    register_taxonomy('video_category', 'feature-video', $args); // Register taxonomy for the CPT
}
add_action('init', 'create_taxonomy_video_category');



function inject_after_pricing_table($block_content, $block)
{
    if (isset($block['blockName']) && $block['blockName'] === 'acrobits/pricing-table-block') {

        // SECTION 1: Price Cards
        $custom_html = '<section id="price_cards_section" class="price_cards">';

        // Get values from ACF fields
        $card_section_title = get_field('card_section_title');
        $card_section_subtitle = get_field('card_section_subtitle');

        $custom_html .= '<div class="price_cards_container">';
        $custom_html .= '<div class="price_cards_head">';
        if ($card_section_title) {
            $custom_html .= '<h2 class="price_cards_title">' . esc_html($card_section_title) . '</h2>';
        }
        if ($card_section_subtitle) {
            $custom_html .= '<h3 class="price_cards_subtitle">' . esc_html($card_section_subtitle) . '</h3>';
        }
        $custom_html .= '</div>';
        $custom_html .= '<div class="price_cards_body">';

        // Check if repeater field has data
        if (have_rows('price_cards_repeater')) {
            $counter = 0; // Counter to group cards in pairs
            while (have_rows('price_cards_repeater')) {
                the_row();

                // Open a new row every two cards
                if ($counter % 2 == 0) {
                    $custom_html .= '<div class="price_card_row">';
                }

                // Get subfield values
                $button_tag = get_sub_field('button_tag');
                $title = get_sub_field('price_card_title');
                $text = get_sub_field('price_card_text');
                $icon = get_sub_field('price_card_icon');

                // Construct card HTML
                $custom_html .= '<div class="price_card">';
                $custom_html .= '<div class="price_card_up">';
                $custom_html .= '<div class="price_card_lft">';

                // Render button
                if ($button_tag) {
                    $custom_html .= '<div class="price_card_button">' . esc_html($button_tag) . '</div>';
                }
                if ($title) {
                    $custom_html .= '<h3 class="price_card_title">' . esc_html($title) . '</h3>';
                }
                $custom_html .= '</div>';
                $custom_html .= '<div class="price_card_rgt">';

                // Render icon image
                if ($icon) {
                    $custom_html .= '<div class="price_card_icon"><img src="' . esc_url($icon) . '" alt="Icon"></div>';
                }
                $custom_html .= '</div>';
                $custom_html .= '</div>'; // Close price_card_up

                if ($text) {
                    $custom_html .= '<div class="price_card_down">';
                    $custom_html .= '<p class="price_card_text">' . esc_html($text) . '</p>';
                    $custom_html .= '</div>';
                }
                $custom_html .= '</div>'; // Close price_card

                // Close row after two cards
                if ($counter % 2 == 1) {
                    $custom_html .= '</div>'; // Close price_card_row
                }
                $counter++;
            }

            // Close any open row if the number of cards is odd
            if ($counter % 2 != 0) {
                $custom_html .= '</div>'; // Close price_card_row
            }
        }
        $custom_html .= '</div>'; // Close price_cards_body
        $custom_html .= '</div>'; // Close price_cards_container
        $custom_html .= '</section>'; // Close price_cards_section

        // SECTION 2: Video Section
        $custom_html .= '<section id="price_video" class="price_video_section">';

        // Get values from ACF fields
        $price_video_title = get_field('price_video_title');
        $price_video_subtitle = get_field('price_video_subtitle');
        $price_video = get_field('price_video_');
        $price_video_poster = get_field('price_video_poster');
        $price_video_button = get_field('price_video_button');


        $custom_html .= '<div class="price_video_container">';
        $custom_html .= '<div class="price_video_head">';
        if ($price_video_title) {
            $custom_html .= '<h2 class="price_video_title">' . esc_html($price_video_title) . '</h2>';
        }
        if ($price_video_subtitle) {
            $custom_html .= '<h3 class="price_video_subtitle">' . esc_html($price_video_subtitle) . '</h3>';
        }
        $custom_html .= '</div>';
        $custom_html .= '<div class="price_video_body">';

        // Render video

        $custom_html .= '<div class="price_video">';
        $custom_html .= '<div class="video-responsive">';
        $custom_html .= '<video id="customVideo" poster="' . esc_url($price_video_poster) . '">';
        $custom_html .= '<source src="' . esc_url($price_video) . '" type="video/mp4">';
        $custom_html .= 'Your browser does not support the video tag.';
        $custom_html .= '</video>';
        $custom_html .= '<button class="custom-play-button" id="playButton"><img src="' . esc_url($price_video_button) . '" /></button>';
        $custom_html .= '</div>';
        $custom_html .= '</div>';


        $custom_html .= '</div>'; // Close price_video_body
        $custom_html .= '</div>'; // Close price_video_container
        $custom_html .= '</section>'; // Close price_video_section

        // Append all content to the block
        $block_content .= $custom_html;
    }
    return $block_content;
}
add_filter('render_block', 'inject_after_pricing_table', 10, 2);


/**
 * Cambia la plantilla para una entrada específica del CPT "features"
 * 
 * @param string $template La ruta de la plantilla actual
 * @return string La ruta de la plantilla modificada
 */
function acro_custom_feature_template($template)
{
    // Verificar si estamos en una entrada individual de "features"
    if (is_singular('features')) {
        // Obtener el ID de la entrada actual
        $post_id = get_the_ID();

        // ID de la entrada específica que debe usar page-builder.php
        // Reemplaza 123 con el ID real de la entrada que deseas modificar
        $special_feature_id = 6274; // Cambia este número por el ID de tu entrada específica

        // Si la entrada actual es la especial, usar page-builder.php
        if ($post_id == $special_feature_id) {
            // Buscar la plantilla page-builder.php
            $new_template = locate_template('page-builder.php');

            // Si se encuentra la plantilla, usarla
            if (!empty($new_template)) {
                return $new_template;
            }
        }
    }

    // Devolver la plantilla original para todos los demás casos
    return $template;
}
add_filter('single_template', 'acro_custom_feature_template');




/**
 * Pasa el ID del post actual a JavaScript
 */
function acro_pass_post_id_to_js() {
    // Solo en el frontend
    if (!is_admin()) {
        // Obtener el ID del post actual
        $post_id = get_the_ID();
        
        // Si estamos en una página singular (post, página, CPT)
        if (is_singular() && $post_id) {
            ?>
            <script>
                window.acroCurrentPostId = <?php echo $post_id; ?>;
            </script>
            <?php
        }
    }
}
add_action('wp_footer', 'acro_pass_post_id_to_js', 5);




// Enqueue myscripts.js
function enqueue_myscripts() {
    wp_enqueue_script('myscripts', get_template_directory_uri() . '/inc/js/myscripts.js', array('jquery'), filemtime(get_template_directory() . '/inc/js/myscripts.js'), true);
}
add_action('wp_enqueue_scripts', 'enqueue_myscripts');




?>