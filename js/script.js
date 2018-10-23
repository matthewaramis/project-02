$(document).ready(function() {
  // js code
  $("#topicselector").on("change", function() {
    const topicSelect = $("#topicselector option:selected").val();
    $(".loadingAnimation").append(
      `<img src="./assets/images/ajax-loader.gif" alt="loading gif" />`
    );
    // let url = `https://api.nytimes.com/svc/topstories/v2/${"topic-select"}.json`;

    $.ajax({
      method: "get",
      url: `https://api.nytimes.com/svc/topstories/v2/${topicSelect}.json?api-key=17652fbd85734f4f98836d7c455a7164`
    })

      .always(function() {
        $(".loadingAnimation").remove();
      })

      .done(function(data) {
        $(".stories").empty();

        const newsStory = data.results;

        const newsStoryFiltered = newsStory
          .filter(function(item) {
            return item.multimedia.length;
          })
          .slice(0, 12);

        console.log(newsStoryFiltered);

        const $newsStoryAppend = $(".stories");
        $newsStoryAppend.empty();

        $.each(newsStoryFiltered, function(key, value) {
          $newsStoryAppend.append(
            `<div style="background-image: url(${
              value.multimedia[4].url
            });"><a href="${value.url}"><p>${value.abstract}</p></a></div>`
          );
        }); // end of .each
      }); // end of .done
  });
});
