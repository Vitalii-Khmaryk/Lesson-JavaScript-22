$(function(){

const randomizer = (min, max) => Math.round(Math.random()*(max - min));
$('.circle').click(function () {
  const r = randomizer(0,255);
  const g = randomizer(0,255);
  const b = randomizer(0,255);
  $(this).animate({
    width: Math.round(Math.random()*500),
    height: Math.round(Math.random()*500),
    left: Math.round(Math.random()*900),
    top: Math.round(Math.random()*500),
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  },1000,'easeInCubic');
})





})

      