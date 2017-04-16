const scrollToElement = (ref, duration) => {
  const target = ref.getBoundingClientRect().top;

  let start = window.scrollY;
  let end = target;
  let current_time = 0;
  let tick =   5;
  let iToggled = document.body.style.overflowY != "hidden";
  function step () {
    let pos = scrollEasing(current_time, start, end, duration).toFixed(4);
    //document.body.style.overflow = "hidden";
    window.scrollTo(0,pos);
    //console.log(start, end, pos, duration, current_time);
    current_time+=tick;
    if ( current_time <= duration && pos != ref.offsetTop ) {
      window.requestAnimationFrame(step);
    }else{
      if(iToggled)document.body.style.overflowY = "initial"
    }
  }
  window.requestAnimationFrame(step);       
}

const scrollEasing = (current_time, beginning_value, change_value, total_time) => {
  return -change_value/2 * (Math.cos (Math.PI*current_time/total_time) - 1) + beginning_value;
}

const ScrollPilot = {
  scrollTo: scrollToElement,
}

export default ScrollPilot;