import"./index.html";import{gsap}from"../node_modules/gsap/index.js";import{ScrollTrigger}from"../node_modules/gsap/ScrollTrigger.js";import"./styles.css";import"./normalize.css";const tl=gsap.timeline();gsap.registerPlugin(ScrollTrigger),tl.fromTo(".menu_list li",{y:-50,opacity:0},{y:0,opacity:1,duration:2,stagger:.15}).fromTo(".title",{x:0,opacity:0},{x:100,opacity:1,scale:1.5,duration:1}).fromTo(".svg_star",{opacity:.5,duration:1},{opacity:1}).fromTo(".heart",{y:-50,opacity:0},{y:0,opacity:1,duration:1,stagger:.15}).fromTo(".scroll",{y:50,opacity:0},{y:0,opacity:1,duration:.5}),gsap.to(".bg",{scrollTrigger:{trigger:".wrapper",start:"top top",scrub:!0},scale:1.3}),gsap.to(".portrait",{scrollTrigger:{trigger:".about_container",scrub:!0},x:-100,transformOrigin:"top center"}),gsap.to(".about_text",{scrollTrigger:{trigger:".about_container",scrub:!0},x:100,transformOrigin:"top center"});