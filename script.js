console.log('ran');

document.addEventListener('click', function (e) {
  var button = e.target;

  if (button.getAttribute('data-reset') === 'true') {
    // Reset the filters
    var filter = button.getAttribute('data-filter');
    resetFilter(filter);
  } else {
    // Filter the tag
    var filter = button.getAttribute('data-filter');
    var tag    = button.getAttribute('data-filter-tag');
    filterTag(filter, tag);
  }
});

// Filter tag
function filterTag (filter, tag) {
  var items = document.querySelectorAll('.' + filter + ' > div');

  for (var i = 0; i < items.length; i++) {
    var itemTags = items[i].getAttribute('data-tags');

    // Catch case with no tags
    if (itemTags != null) {
      if (itemTags.indexOf(tag) < 0) {
        items[i].setAttribute('data-toggle', 'off');
      }
    }
  }
}

// Reset filters
function resetFilter (filter) {
  var items = document.querySelectorAll('.' + filter + ' > div');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('data-toggle', 'on');
  }
}


$(document).ready(function(){
    $("button.atal-button").click(function(){
        $("button.atalfilters-button").show();
    });
    $("button.atalfilters-button").click(function(){
        $("button.atalfilters-button").hide();
    });
});

console.log(items[0])
