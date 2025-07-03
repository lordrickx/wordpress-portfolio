<?php
/*
	Template Name: Page Builder
*/
get_header();

$page_builder = get_field('page_builder');

foreach ($page_builder as $layout) {

	if ($layout['acf_fc_layout'] == 'solutions') {

		include 'components/solutions.php';
	} elseif ($layout['acf_fc_layout'] == 'softphone_linkup_component') {

		include 'components/softphone_linkup_component.php';
	} elseif ($layout['acf_fc_layout'] == 'blog_slider') {

		include 'components/blog_slider.php';
	} elseif ($layout['acf_fc_layout'] == 'what_our_clients_say') {

		include 'components/what_our_clients_say.php';
	} elseif ($layout['acf_fc_layout'] == 'sdk_info_block') {

		include 'components/sdk_info_block.php';
	} elseif ($layout['acf_fc_layout'] == 'two_column_image_timeline') {

		include 'components/two_column_image_timeline.php';
	} elseif ($layout['acf_fc_layout'] == 'large_book_cta_component') {

		include 'components/large_book_cta_component.php';
	} elseif ($layout['acf_fc_layout'] == 'app_blocks') {

		include 'components/app_blocks.php';
	} elseif ($layout['acf_fc_layout'] == 'features') {

		include 'components/features.php';
	} elseif ($layout['acf_fc_layout'] == 'partners') {

		include 'components/partners.php';
	} elseif ($layout['acf_fc_layout'] == 'page_cta_banner') {

		include 'components/page_cta_banner.php';
	} elseif ($layout['acf_fc_layout'] == 'page_take_over_banner') {

		include 'components/page_take_over_banner.php';
	} elseif ($layout['acf_fc_layout'] == 'stepped_form') {

		include 'components/stepped_form.php';
	} elseif ($layout['acf_fc_layout'] == 'incentive_panel') {

		include 'components/incentive_panel.php';
	} elseif ($layout['acf_fc_layout'] == 'two_column_image_timeline_simple') {

		include 'components/two_column_image_timeline_simple.php';
	} elseif ($layout['acf_fc_layout'] == 'video_panel') {

		include 'components/video_panel.php';
	} elseif ($layout['acf_fc_layout'] == 'faq') {

		include 'components/faq.php';
	} elseif ($layout['acf_fc_layout'] == 'linkup_device') {

		include 'components/linkup_device.php';
	} elseif ($layout['acf_fc_layout'] == 'brand_block') {

		include 'components/brand_block.php';
	} elseif ($layout['acf_fc_layout'] == 'white_label_component') {

		include 'components/white_label_component.php';
	} elseif ($layout['acf_fc_layout'] == 'info_blocks') {

		include 'components/info_blocks.php';
	} elseif ($layout['acf_fc_layout'] == 'expanded_features') {

		include 'components/expanded_features.php';
	} elseif ($layout['acf_fc_layout'] == 'sdk_intro') {

		include 'components/sdk_intro.php';
	} elseif ($layout['acf_fc_layout'] == 'partners_block') {

		include 'components/partners_block.php';
	} elseif ($layout['acf_fc_layout'] == 'white_label_banner') {

		include 'components/white_label_banner.php';
	} elseif ($layout['acf_fc_layout'] == 'hubspot_form_section') {

		include 'components/hubspot_form_section.php';
	} elseif ($layout['acf_fc_layout'] == 'glossary_listing') {

		include 'components/glossary_listing.php';
	} elseif ($layout['acf_fc_layout'] == 'glossary_page_content') {

		include 'components/glossary_page_content.php';
	} elseif ($layout['acf_fc_layout'] == 'demo_on_demand_banner') {

		include 'components/demo_on_demand_banner.php';
	} elseif ($layout['acf_fc_layout'] == 'cloud_softphone_feature_videos') {

		include 'components/cloud_softphone_feature_videos.php';
	} elseif ($layout['acf_fc_layout'] == 'contained_cta_banner') {

		include 'components/contained_cta_banner.php';
	} elseif ($layout['acf_fc_layout'] == 'softphone_form') {

		include 'components/softphone_form.php';
	} elseif ($layout['acf_fc_layout'] == 'ebook_form') {

		include 'components/ebook_form.php';
	} elseif ($layout['acf_fc_layout'] == 'pricing_table') {

		include 'components/pricing_table.php';
	} elseif ($layout['acf_fc_layout'] == 'full_width_cta') {

		include 'components/full_width_cta.php';
	} elseif ($layout['acf_fc_layout'] == 'thank_you_component') {

		include 'components/thank_you_component.php';
	} elseif ($layout['acf_fc_layout'] == 'simple_header_variant') {

		include 'components/simple_header_variant.php';
	} elseif ($layout['acf_fc_layout'] == 'bundle_slider') {

		include 'components/bundle_slider.php';
	} elseif ($layout['acf_fc_layout'] == 'features_listing') {

		include 'components/features_listing.php';
	} elseif ($layout['acf_fc_layout'] == 'two_column_feature_component') {

		include 'components/two_column_feature_component.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_intro') {

		include 'components/feature_intro.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_grid_element') {

		include 'components/feature_grid_element.php';
	} elseif ($layout['acf_fc_layout'] == 'plain_content_component') {

		include 'components/plain_content_component.php';
	} elseif ($layout['acf_fc_layout'] == 'legacy_logorama') {

		include 'components/legacy_logorama.php';
	} elseif ($layout['acf_fc_layout'] == 'power_stats') {

		include 'components/power_stats.php';
	} elseif ($layout['acf_fc_layout'] == 'premium_features_pre_faq_cta') {

		include 'components/premium_features_pre_faq_cta.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_showcase_section') {

		include 'components/feature_showcase_section.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_grid_element_enhanced') {

		include 'components/feature_grid_element_enhanced.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_cards_section') {

		include 'components/feature_cards_section.php';
	} elseif ($layout['acf_fc_layout'] == 'feature_animated_cta') {

		include 'components/feature_animated_cta.php';
	} elseif ($layout['acf_fc_layout'] == 'features_availables') {

		include 'components/features_availables.php';
	}elseif ($layout['acf_fc_layout'] == 'hero_slider') {

		include 'components/hero_slider.php';
	} elseif ($layout['acf_fc_layout'] == 'two_cols_image_text_and_button') {

		include 'components/two_cols_image_text_and_button.php';
	} elseif ($layout['acf_fc_layout'] == 'masonry_component') {

		include 'components/masonry_component.php';
	}

}

get_footer();
