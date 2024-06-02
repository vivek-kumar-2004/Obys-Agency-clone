function smooth_scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smooth_scroll();

function loader_animation(){
    gsap.from(".hi h3,.hi h4",{
        opacity:0,
        delay:0.8
    })
    var num=document.querySelector(".hi h3");
            var count=0;
            setInterval(function(){
            if(count<100){
                num.textContent=++count;
            }
            else{
                num.textContent=count;
            }
    },27)
    var tl=gsap.timeline();
    tl.from(".hello h1,.hello h2",{
        y:150,
        opacity:0,
        duration:0.6,
        delay:0.5,
        stagger:0.25
    })
    tl.from("#loader h5",{
        opacity:0
    })
    tl.to("#loader",{
        opacity:0,
        delay:1.4,
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from(".line h1,#line3 h2",{
        y:150,
        opacity:0,
        duration:0.6,
        stagger:0.25
    })
    if (window.innerWidth < 600) {
        tl.from("#video-container",{
            y:150,
            opacity:0,
            duration:0.6,
        }) 
    }
}
loader_animation();
function cursor_animation(){
    document.addEventListener("mousemove",function(elem){
        gsap.to("#cursor",{
            left:elem.x,
            top:elem.y 
        })
    })
    
    var mouse=document.querySelector("#line3");
    var flag1=document.querySelector("#flag");
    mouse.addEventListener("mouseenter",function(){
        flag1.style.opacity=1;
    })
    mouse.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            left:dets.x,
            top:dets.y
        })
    })
    mouse.addEventListener("mouseleave",function(){
        flag1.style.opacity=0;
    })
    
    var video_container=document.querySelector("#video-container");
    var video_cursor=document.querySelector("#video-cursor");
    var video=document.querySelector("#video-container video");
    var cursor=document.querySelector("#cursor");
    video_container.addEventListener("mouseenter",function(){
        cursor.style.opacity=0;   
    })
    video_container.addEventListener("mousemove",function(dets){
        gsap.to("#video-cursor",{
            left:dets.x -500,
            top:dets.y -215
        })
    })
    video_container.addEventListener("mouseleave",function(){
        cursor.style.opacity=1;
        gsap.to("#video-cursor",{
            left:-69.,
            top:-11.
        })
    })
    var flag=0;
    video_container.addEventListener("click",function(){
        if(flag==0){
            video.play()
            video.style.opacity=1
            video_cursor.style.scale=0.5
            video_cursor.innerHTML='<i class="ri-pause-mini-fill"></i>'
            flag=1
        }
        else{
            video.pause()
            video.style.opacity=0
            video_cursor.style.scale=1
            video_cursor.innerHTML= `<i class="ri-play-fill"></i>`
            flag=0
        }
    })
}
cursor_animation();

if (window.innerWidth > 600) {
    Shery.makeMagnet("#part2 h3", {});
    Shery.imageEffect(".img-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"999999","range":[-9999999,9999999]},"aspect":{"value":0.801225065380167},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.38,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.51,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}
  });
  } 

