

window.onscroll = ()=>{
    //  select all class 
    
    let header = document.querySelector('header');
    let HeaderText = document.querySelector('#HeaderText');
    let scrollEffect1 = document.querySelector('#scrollEffect1');
    let moveElements1 = document.querySelector('#moveElements1');

    let scrollEffect2 = document.querySelector('#scrollEffect2');
    let moveElements2 = document.querySelector('#moveElements2');

    let scrollEffect3 = document.querySelector('#scrollEffect3');
    let moveElements3 = document.querySelector('#moveElements3');
    let img1 = document.querySelector('#img1');

    let scrollEffect4 = document.querySelector('#scrollEffect4');
    let moveElements4 = document.querySelector('#moveElements4');
    let img2 = document.querySelector('#img2');
    
    console.log(header.getBoundingClientRect().top )
    
    // header.offsetHeight 
    //scrollEffect1.getBoundingClientRect().top


//  Header Animation 
    if(header.getBoundingClientRect().top  < - 30){
        HeaderText.style.left = 90 +"vw";
    }else{
        HeaderText.style.left = 25 +"vw";
    }

//  Text box Scroll effect
if( (header.offsetHeight ) > scrollEffect1.getBoundingClientRect().top){
    let topValue =  scrollEffect1.getBoundingClientRect().top  - header.offsetHeight;
      moveElements1.style.top = (topValue / 2 ) + "px";
  
  }

  //   Scroll effect
if( (header.offsetHeight ) > scrollEffect2.getBoundingClientRect().top){
    let topValue =  scrollEffect2.getBoundingClientRect().top  - header.offsetHeight;
      moveElements2.style.top = (topValue / 3 ) + "px";  
  }

  //   Scroll effect
if( (header.offsetHeight ) > scrollEffect3.getBoundingClientRect().top){
    let topValue =  scrollEffect3.getBoundingClientRect().top  - header.offsetHeight;
      moveElements3.style.top = (topValue / 4 ) + "px";
      img1.style.top = (topValue / 4 ) + "px";
  }

  
  //   Scroll effect
if( (header.offsetHeight ) > scrollEffect4.getBoundingClientRect().top){
    let topValue =  scrollEffect4.getBoundingClientRect().top  - header.offsetHeight;
      moveElements4.style.top = (topValue / 4 ) + "px";
      img2.style.top = (topValue / 4 ) + "px";
  }
}