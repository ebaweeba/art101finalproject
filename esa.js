$("#play-song").click(function () {

    let song = $("#getting-ready-song")[0];

    if (song.paused) {
        song.play();
        $(this).text("⏸ pause song");
    } else {
        song.pause();
        $(this).text("▶ play song");
    }
});



let dragging = false;

$("#draggable-item").on("mousedown", function () {
    dragging = true;
});

$(document).on("mouseup", function () {
    dragging = false;
});

$(document).on("mousemove", function (event) {

    if (dragging) {

        $("#draggable-item").css({
            left: event.pageX - $(".photo-area").offset().left - 60,
            top: event.pageY - $(".photo-area").offset().top - 60
        });

    }

});