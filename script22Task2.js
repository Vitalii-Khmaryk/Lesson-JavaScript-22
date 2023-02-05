$(function(){

    const randomizer = (min, max) => Math.round(Math.random()*(max - min));
    setInterval(() => {
      const r = randomizer(0,255);
      const g = randomizer(0,255);
      const b = randomizer(0,255);
      let r1 = Math.round(Math.random()*255);
      let g1 = Math.round(Math.random()*255);
      let b1 = Math.round(Math.random()*255);
      let shadow=`rgb(${r1},${g1},${b1})`;
      $('.ball').css("box-shadow",`0 0 30px 11px ${shadow}`);
      $('.ball').animate({
        borderColor: `rgb(${Math.round(Math.random()*255)},
        ${Math.round(Math.random()*255)},
        ${Math.round(Math.random()*255)})`,
        left: Math.round(Math.random()*innerWidth-90),
        top: Math.round(Math.random()*innerHeight-90),
        width: Math.round(Math.random()*200),
        height: Math.round(Math.random()*200),
        backgroundColor: `rgb(${r}, ${g}, ${b})`
      },1000,'easeInCubic');
    
    }, 100);
    




})



  