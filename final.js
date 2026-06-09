$("#esa-icon").click(function () {

    $("#esa-popup").show();

});

$("#close-esa").click(function () {

    $("#esa-popup").hide();

});


$("#bodie-icon").click(function () {

    $("#bodie-popup").show();
    $(".location").hide();

});

$("#close-bodie").click(function () {

    $("#bodie-popup").hide();

});


$("#danie-icon").click(function () {

    $("#danie-popup").show();
    $("#overlay").show();

});

$("#close-danie").click(function () {

    $("#danie-popup").hide();
    $("#overlay").hide();

});
function myFunction() { 
    var popup = document.getElementById("popup-text");
    popup.classList.toggle("show");
}
function moveImage() { 
    let image = document.getElementById("my-photo");
    image.style.marginLeft = "500px";
    image.style.marginTop = "200px";    
}

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


$("#bodie-icon").click(function () {
    $("#overlay").show();
    $("#bodie-popup").show();
});

$("#close-bodie").click(function () {
    $("#bodie-popup").hide();
    $("#overlay").hide();
});

$("#danie-icon").click(function () {
    $("#overlay").show();
    $("#danie-popup").show();
});

$("#close-danie").click(function () {
    $("#danie-popup").hide();
    $("#overlay").hide();
    
});

function myFunction () { var popup = document.getElementById("popup-text");
popup.classList.toggle("show");
}



$("#chelsea-icon").click(function () {
    $("#overlay").show();
    $("#chelsea-popup").show();
});

$("#close-chelsea").click(function () {
    $("#chelsea-popup").hide();
    $("#overlay").hide();
});


$("#harlan-icon").click(function () {
    $("#overlay").show();
    $("#harlan-popup").show();
});

$("#close-harlan").click(function () {
    $("#harlan-popup").hide();
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

$("#inside").click(function () {
    console.log("inside")
    $("#entry").hide();
    $("#inside-div").show();
});

$("#roof").click(function () {
    console.log("roof")
    $("#entry").hide();
    $("#roof-div").show();
});

$("#yard").click(function () {
    console.log("yard")
    $("#entry").hide();
    $("#yard-div").show();
});

$(".back").click(function () {
    console.log("back")
    $("#yard-div").hide();
    $("#roof-div").hide();
    $("#inside-div").hide();
    $("#entry").show();
});