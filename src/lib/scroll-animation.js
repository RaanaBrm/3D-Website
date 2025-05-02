import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate: onUpdate,
    });

    tl.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
    })
    .to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.8,
    })
    .to('.jumbotron-section', {
        opacity: 0,
    })
    .to('.sound-section-content', {
        opacity: 1,
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate: onUpdate,
    });

    tl2.to(position, {
        x: 1.76,
        y: 5.0,
        z: 0.01,
    })
    .to(target, {
        x: 0.55,
        y: 0.32,
        z: 0.0,
    })
    .to('.display-section', {
        opacity: 1,
    });
};
