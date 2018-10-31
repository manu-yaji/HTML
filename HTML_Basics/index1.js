$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (result) {
            console.log(result);
        }
    });
})