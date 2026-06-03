$("#esa-icon").click(function () {

    $("#esa-popup").show();

});

$("#close-esa").click(function () {

    $("#esa-popup").hide();

});


$("#bodie-icon").click(function () {

    $("#bodie-popup").show();

});

$("#close-bodie").click(function () {

    $("#bodie-popup").hide();

});


$("#danie-icon").click(function () {

    $("#danie-popup").show();

});

$("#close-danie").click(function () {

    $("#danie-popup").hide();

});

$("#chelsea-icon").click(function () {

    $("#chelsea-popup").show();

});

$("#close-chelsea").click(function () {

    $("#chelsea-popup").hide();

});

$("#harlan-icon").click(function () {

    $("#harlan-popup").show();

});

$("#close-harlan").click(function () {

    $("#harlan-popup").hide();

});



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


$("#esa-icon").click(function () {
    $("#overlay").show();
    $("#esa-popup").show();
});

$("#close-esa").click(function () {
    $("#esa-popup").hide();
    $("#overlay").hide();
});


$("#overlay").click(function () {

    $("#overlay").hide();

    $("#esa-popup").hide();
    $("#bodie-popup").hide();
    $("#danie-popup").hide();
    $("#chelsea-popup").hide();
    $("#harlan-popup").hide();

});



