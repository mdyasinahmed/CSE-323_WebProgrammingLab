
// Initialize Isotope for food items
var elem = document.querySelector('.isotope');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.food-item',
  layoutMode: 'fitRows'
});

// Bind filter button click
var filtersElem = document.querySelector('.container');
filtersElem.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});
