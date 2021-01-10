$(function() {
    $("#devour").on("click", function(event) {
        let id = $(this).data("id");
        console.log(id);
        let devBurger = $(this).data("id");
        console.log(devBurger);
    
        let devouredBurger = {
          devoured: devBurger
        };
        console.log(devouredBurger);
    
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: devouredBurger
        }).then(
          function() {
            console.log("Burger was devoured", devBurger);
            location.reload();
          }
        );
      });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = {
        burger_name: $("#burgerName").val().trim(),
      };
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger Added!");
          location.reload();
        }
      );
    });
  
  });