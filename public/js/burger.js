$(function () {
    $(".notDevoured li").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let devouredBurger = {
            id: id
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            location.reload();
        })
    })

    $("#addBurger").on("submit", function (event) {
        event.preventDefault();
        let input = $("input").val();
        let newBurger = {
            name: input
        }
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    })
})