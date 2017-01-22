const scrollToElement = (target, duration) => {
  let start = window.scrollY;
  let end = target;
  let current_time = 0;
  let tick =   5;
  requestAnimationFrame(step);     
  function step () {
    setTimeout(function() {
      let pos = scrollEasing(current_time, start, end, duration);
      window.scrollTo(0,pos);
      //console.log(start, end, pos, duration, current_time);
      current_time+=tick;
      if ( current_time <= duration ) {
        requestAnimationFrame(step);
      }else{
        window.scrollTo(0,pos);
      }
    }, tick );
  }
}

const scrollEasing = (current_time, beginning_value, change_value, total_time) => {
  return -change_value/2 * (Math.cos (Math.PI*current_time/total_time) - 1) + beginning_value;
}

const ScrollPilot = {
  scrollTo: scrollToElement,
}

export default ScrollPilot;