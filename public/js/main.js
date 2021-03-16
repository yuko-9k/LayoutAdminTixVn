function openNav() {
    // document.getElementById("moblie_menu").style.width = "70%";

    document.getElementById("mobile_menu_canvas").style.width = "30%";
    document.getElementById("mobile_menu_canvas").style.opacity = "1";
    document.getElementById("moblie_menu").style.right = "0";
};

function closeNav() {
    document.getElementById("moblie_menu").style.right = "-70%";
    // document.getElementById("moblie_menu").style.width = "0";
    document.getElementById("mobile_menu_canvas").style.opacity = "0";
    document.getElementById("mobile_menu_canvas").style.width = "0";
};
$('.app_carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        // 600: {
        //     items: 3
        // },
        // 1000: {
        //     items: 5
        // }
    }
});
$('.schedule_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    // autoplay: true,
    // smartSpeed: 500,
    // autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        // 600: {
        //     items: 3
        // },
        // 1000: {
        //     items: 5
        // }
    }
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        // 600: {
        //     items: 3
        // },
        // 1000: {
        //     items: 5
        // }
    }
});
// var status_next_icon = true;

// function openListCinema(id) {
//     if (status_next_icon === false) {
//         document.getElementById(id).src = "./img/Icon/next-session.png";
//         status_next_icon = true;
//     } else {
//         status = "next-icon";
//         document.getElementById(id).src = "./img/Icon/down-arrow.png";
//         status_next_icon = false;

//     };
//     console.log(status);
// }

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen_bhd_cinema").click();

function defaultOpen_CNS_cinema() {
    document.getElementById("defaultOpen_CNS_cinema").click();
};

function defaultOpen_bhd_cinema() {
    document.getElementById("defaultOpen_bhd_cinema").click();
};

function defaultOpen_DDC_cinema() {
    document.getElementById("defaultOpen_DDC_cinema").click();
};

function defaultOpen_MegaGS_cinema() {
    document.getElementById("defaultOpen_MegaGS_cinema").click();
};

function defaultOpen_Dcine_cinema() {
    document.getElementById("defaultOpen_DCine_cinema").click();
};

function defaultOpen_Lotte_cinema() {
    document.getElementById("defaultOpen_Lotte_cinema").click();
};
// close iframe
$(function() {
    $('.close').click(function() {
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});
// backtopTop
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openModal(link) {
    document.getElementById("iframe_trailer").src = link;
}