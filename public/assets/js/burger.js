
$(document).ready(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newdevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(
            function () {
                console.log("changed devoured to", newdevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#burgerplex").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newburger = {
            burger_name: $("#burgertype").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        console.log(newburger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
