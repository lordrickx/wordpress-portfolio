// webpack.mix.js

let mix = require('laravel-mix');
const fs = require("fs");
const blocks = [
	'acro-softphone-form-block',
	'acro-call-to-action-block',
	'acro-compare-features-block',
	'acro-counterpath-compare-table-block',
	'acro-hero-block',
	'acro-innovation-block',
	'acro-slider-with-text-block',
	'acro-steps-block',
	'acro-trust-pilot-widget-block',
	'acro-hero-scrolling-block',
	'acro-images-with-text-block',
	'acro-incentive-panel-block',
	'acro-brands-block',
	'acro-customize-block',
	'acro-parallax-images-block',
	'acro-layered-images-block',
	'acro-subscription-form-block',
	'acro-industry-hero-block',
	'acro-icon-boxes-block',
	'acro-next-post-block',
	'acro-faq-block',
]

blocks.forEach(block => {
	mix.sass(`./dev/scss/blocks/${block}/style.scss`, `/dist/css/blocks/${block}`)

})

const blocksJs = [
	'acro-hero-block',
	'acro-slider-with-text-block',
	'acro-innovation-block',
	'acro-hero-scrolling-block',
	'acro-layered-images-block',
	'acro-parallax-images-block',
	'acro-industry-hero-block',
]

blocksJs.forEach(block => {
	mix.js(`./dev/js/blocks/${block}/main.js`, `/dist/js/blocks/${block}`)

})

mix.sass('./dev/admin/scss/style.scss', '/dist/admin/css/style.css')


mix
	.sass("./dev/scss/main.scss", '/dist/css').options({
		processCssUrls: false
	})
	.webpackConfig({
		stats: { children: true },
		optimization: {
			minimize: false
		}, })
	.browserSync({
		proxy: 'http://acrobits.local',
		files: [
			'dist/css/**/*.css',
			'dist/css/blocks/**/*.css',
		],
	});
