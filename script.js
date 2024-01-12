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

gsap.set(".project-box", { opacity: 1, y: 50 });

     gsap.set(".project-box", { opacity: 0, y: 50 });
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: ".project-box",
        start: "top 1%", 
        end: "bottom top",
        onEnter: function () {
            gsap.to(".project-box", {
                duration: 1.5,
                opacity: 1,
                y: 0,
                ease: "power2.out",
            });
        },
    });
});
