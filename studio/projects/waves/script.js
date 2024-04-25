let size, setup = ()=> noiseSeed(random(100));

function draw () {
  if ( size != floor(min(windowWidth, windowHeight) * 0.96) ) { //console.log('update size')
    size = floor(min(windowWidth, windowHeight) * 0.96);
    resizeCanvas(windowWidth, windowHeight);
  }
                    
  $('.wave').html(""); //clear svg stage
  
  const _o = millis() * 0.001;
  const amount = 8;
  const ampl = 12;//height * 0.03;
  const detail = 5;
  
  for (var k=0; k<amount; k++) {
    let p = document.createElementNS("http://www.w3.org/2000/svg", "polygon"),
        offset = (1 - k/amount) * amount/4,
        pts = '';
    
    for(var i=0; i<(width+detail); i+=detail) {
      let y = height/2;
      y += sin(i * 0.01 - _o + offset) * ampl;
      y += sin(i * 0.02 - _o + offset) * ampl;
      y += sin(i * 0.04 - _o + 10 + offset + noise(_o * 0.1 + (i/width) * 5) * 10) * ampl;
      pts += i.toFixed(2)+','+y.toFixed(2)+' ';
    }//console.log(pts)
    
    if (k==0) gsap.set(p, {attr:{fill:'#fff', points:'0,0 0,'+height/2+' '+pts+' '+width+',0'}});
    else gsap.set(p, {attr:{stroke:'#fff', 'stroke-width':1.2-k/amount, fill:'none', points:'0,0 0,'+height/2+' '+pts+' '+width+',0'}});
    $('.wave').append(p);    
  }  

}