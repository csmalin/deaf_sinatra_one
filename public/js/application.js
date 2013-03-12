$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $("input[type='submit']").click(function(e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/grandma",
      data: $('form').serialize(),
      dataType: 'json'
    })
    .done(function(data, status, xhr) {
      // console.log(data, status, xhr);
      $("#grandma_response").show();
      $("#grandma_says").html(data.response);
    });
  });
});
