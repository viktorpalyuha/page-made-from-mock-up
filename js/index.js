$("#browse").click(function () {
    $("#fileButton").click();
});

$("#fileButton").change(function (e) {
    $("#textInput").attr("value", e.target.files[0].name);
});

$(".card").mouseover(function() {
	$(this).find(".search-button").css("display", "flex");
});

$(".card").mouseout(function() {
	$(this).find(".search-button").css("display", "none");
});

$(".search-button").mouseover(function() {
	$(this).css("display", "flex");
})

$("ul li").click(function() {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
});