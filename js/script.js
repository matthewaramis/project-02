$(document).ready(function() {
  // js code
  $("select").on("change", function(){
    
    const topic-select = $('.topicselector').val(); 
    
    const url= `https://api.nytimes.com/svc/topstories/v2/${"topic-select"}.json`;

    url += '?' + $.param({
      'api-key': "17652fbd85734f4f98836d7c455a7164"
    });
    $.ajax({

      method: "GET",
    })done(function(data) {
      $(".stories").empty();

      $.each(data, function(key, value) {
        
      })
    })

  })
});


