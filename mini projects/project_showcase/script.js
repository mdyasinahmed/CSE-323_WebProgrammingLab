document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.grid');
    var iso = new Isotope(elem, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    // Filter buttons
    var filtersElem = document.querySelector('.filter-controls');
    filtersElem.addEventListener('click', function(event) {
      if (!event.target.matches('button')) return;

      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
});
