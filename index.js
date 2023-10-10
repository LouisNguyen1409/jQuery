$("h1").css("color", "red")
$("button").css("color", "blue") // select all buttons
$("h1").addClass("big-title") // add class
$("h1").text("Bye")
$("button").html("<em>Hey</em>")
$("img").attr("src", "images/rocket.png") // change attribute
$("h1").click(function () {
    $("h1").css("color", "purple")
})

$("button").click(function () {
    $("h1").css("color", "green")
})

$("h1").before("<button>New</button>")
$("button").on("click", function () {
    $("h1").animate({ opacity: 0.5})
    $("h1").slideUp().slideDown()
})
