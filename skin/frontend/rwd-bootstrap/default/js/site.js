jQuery.noConflict();

jQuery(document).ready(function($){

	// Product View Qty +/-
	var $qty = $('#qty');
	if( $qty.length ) {
		var $addToCart = $qty.closest('.add-to-cart');

		$addToCart.addClass('plus-minus');

		var qtyMinus = $('<span class="qty-btn qty-minus">&#8211;</span>');
		$qty.before(qtyMinus);

		var qtyPlus = $('<span class="qty-btn qty-plus">&#43;</span>');
		$qty.after(qtyPlus);

		$addToCart.on('click', '.qty-btn', function(ev){
			var btn = $(this);
			var qty = parseInt($qty.val());
			if( btn.hasClass('qty-minus') && qty > 1 ) {
				$qty.val(qty-1);
			}
			if( btn.hasClass('qty-plus') ) {
				$qty.val(qty+1);
			}
		});

	}
	
/*
	var $gallery = {};
	var $gallerySlider = null;
	$('.product-img-box').on('changeSlides', function(){
  	if( $gallery.length ) {
    	$gallerySlider.destroySlider();
    	$gallery.remove();
  	}
    var slides = $(this).find('.bundle-option-selected');
    $gallery = $('<div class="product-image-gallery" />');
    slides.find('img').each(function(){
      var slide = $(this).clone();
      slide.prop('data-zoom-image', slide.prop('src'));
      $gallery.append(slide);
    });
    $(this).append($gallery);
    //ProductMediaManager.init();
  	$gallerySlider = $gallery.bxSlider({
      mode: 'horizontal'
    });
	});
*/

});