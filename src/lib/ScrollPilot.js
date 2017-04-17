// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
  window.preventScrolling = true;
}

function enableScroll() {
  if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
  window.preventScrolling = false;
}


const scrollToElement = (ref, duration) => {
  const target = ref.getBoundingClientRect().top;

  let start = window.scrollY;
  let end = target;
  let current_time = 0;
  let tick =   5;
  let iToggled = document.body.style.overflowY != "hidden";
  // function step () {
  //   let pos = scrollEasing(current_time, start, end, duration);
  //   //document.body.style.overflow = "hidden";
  //   window.scrollTo(0,pos);
  //   //console.log(start, end, pos, duration, current_time);
  //   current_time+=tick;
  //   if ( current_time <= duration && pos != ref.offsetTop ) {
  //     window.requestAnimationFrame(step);
  //   }else{
  //     if(iToggled)document.body.style.overflowY = "initial"
  //     enableScroll();
  //   }
  // }
  // window.requestAnimationFrame(step); 
  disableScroll();      
  var speed = 500;
  var moving_frequency = 15; // Affects performance !
  var hop_count = speed/moving_frequency
  var getScrollTopDocumentAtBegin = start;
  var gap = end;

  for(var i = 1; i <= hop_count; i++)
  {
      (function()
      {
          var hop_top_position = gap*i;
          setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
      })();
  }
  enableScroll();
}

const scrollEasing = (current_time, beginning_value, change_value, total_time) => {
  return -change_value/2 * (Math.cos (Math.PI*current_time/total_time) - 1) + beginning_value;
}

const ScrollPilot = {
  scrollTo: scrollToElement,
}

export default ScrollPilot;