jQuery(function ($) {
    var iframes = $('iframe');

    if (iframes.length) {
        console.log("An iframe is present on the page:", iframes);
        iframes.each(function(index) {
            var $this = $(this);
            var src = $this.attr('src');
            var lazySrc = $this.data('lazy-src');


            console.log("Iframe " + (index + 1) + ":");
            console.log("  src: " + (src ? src : "Not defined"));
            console.log("  data-lazy-src: " + (lazySrc ? lazySrc : "Not defined"));


            if (src === 'about:blank' && lazySrc) {
                $this.attr('src', lazySrc);
                console.log("  src has been changed to: " + lazySrc); // Log the change
            }
        });
    } else {
        console.log("No iframe found on the page.");
    }
});
