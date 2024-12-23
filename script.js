// boxes
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");

// container
let container = document.querySelector(".container");
let back = 0;


// function to change the background of the container
box1.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-1 (2).jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});



box2.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-2 (2).jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});



box3.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-3.jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});



box4.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-4.jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});


box5.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-5.jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});



box6.addEventListener("click", function () {

    if (back == 0) {

        container.style.backgroundImage = "url('src/img-6.jpg')";

        container.style.backgroundSize = "cover";

        back = 1

    }

    else if (back == 1) {

        container.style.background = "white";
        back = 0;

    }

});