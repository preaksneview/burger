$(document).on("click", ".form-submit", function(event) {
  event.preventDefault();
  const newName = $("#burger-name").val().trim();

  // Post the POST request
  $.ajax("/api/burgers", {
    type: "POST",
    data: {
      "name": newName
    }
  }).then(function() {
    // Reload page to show new data
    location.reload();
  });
});

$(document).on("click", ".burger-item__button", function(event) {
  const id = $(this).data("id");
  const devouredBurger = {
    "id": id
  };
  
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredBurger
  }).then(function() {
    // Reload page to show new data
    location.reload();
  });
});

$("#github-link").hover(function() {
  $(this).addClass('mdc-theme--text-primary-on-dark');
  $(this).removeClass('mdc-theme--text-secondary-on-dark');
}, function() {
  $(this).removeClass('mdc-theme--text-primary-on-dark');
  $(this).addClass('mdc-theme--text-secondary-on-dark');
});

