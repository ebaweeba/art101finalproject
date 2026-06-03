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
