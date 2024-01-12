document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".about_me_img img", {
        duration: 2,
        y: 50,
        ease: "bounce",
        onComplete: function () {
            gsap.set(".about_me_img img", { clearProps: "y" });
        },
    });

    gsap.to("#about_me section", {
        duration: 2,
        x: 10,
        ease: "bounce",
        onComplete: function () {
            gsap.set("#about_me section", { clearProps: "x" });
        },
    });


});
