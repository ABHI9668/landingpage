var cursor=document.querySelector("#cursor");
var cursorBlur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
     cursor.style.left=dets.x+"px";
     cursor.style.top=dets.y+"px";
     cursorBlur.style.left=dets.x-100+"px";
     cursorBlur.style.top=dets.y-100+"px";

})

var h4AllMenuHeading=document.querySelectorAll("#nav h4")

h4AllMenuHeading.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
            console.log("hello");
            cursor.style.scale=3;
            cursor.style.border="1px solid #fff";
            cursor.style.backgroundColor="transparent";
        })
        elem.addEventListener('mouseleave',function(){
            console.log("hello");
            cursor.style.scale=1;
            cursor.style.border="0px solid #95C11E";
            cursor.style.backgroundColor="#95C11E";
        })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        scrub:1,
        end:"top -11%"
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})