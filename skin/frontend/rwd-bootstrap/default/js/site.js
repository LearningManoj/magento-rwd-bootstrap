jQuery.noConflict();

bp = {
  xsmall: 479,
  small: 599,
  medium: 767,
  large: 979,
  xlarge: 1199
};

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
	
  var wik = $('.what-installation-kit');
  var prodOptBottom = $('.product-options-bottom');
  if( wik.length && prodOptBottom.length ) {
    prodOptBottom.before(wik);
    if( $('html').hasClass('touch') ) {
      wik.on('click', function(){
        wik.toggleClass('state-open');
      });
    }
  }

  if( mq('min-width', bp.large) ) {


    if( isCartPage() ) {
      var cartShipping = $('.cart-forms .shipping');
      cartShipping.addClass('interactive');
      cartShipping.on('click', 'h2', function(){
        cartShipping.toggleClass('state-open');
      });
    }

  }

}); // document ready


function isCartPage() {
  return jQuery('body').hasClass('checkout-cart-index');
}

function mq(cond, breakpoint) {
  return Modernizr.mq("screen and ("+ cond +":" + breakpoint + "px)");
}




