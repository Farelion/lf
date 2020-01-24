$(function() {
  $(".items").mixItUp({
    "animation": {
    "duration": 250,
    "nudge": false,
    "reverseOut": false,
    "effects": "fade translateY(-100%)"
    },
    load: {
      filter: ""
    },
    layout: {
       display: 'block'
   },
    controls: {
      toggleFilterButtons: true,
      toggleLogic: "and"
    },
    callbacks: {
      onMixEnd: function(state) {
      /*  if ($('.items').height() > 1){
          $(this).parent().css("visibility", "visible");
          console.log($('.items').height())
        }
        else{
          $(this).parent().css("visibility", "hidden");
            console.log($('.items').height())
        }*/
        console.log(state.activeFilter);
      }
    }
  });
});

