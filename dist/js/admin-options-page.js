(function($){
	$(document).ready(function(){
		$(`p:contains('[post-cta id="{ID}"]')`).each(function(index, el){
			let wrapper = $(this).closest('.acf-fields');
			let id = wrapper.find('[data-name="id"] input').val();
			if(id){
				$(this).text('[post-cta id="'+ id +'"]');
			}
		})
	});
})(jQuery)
	