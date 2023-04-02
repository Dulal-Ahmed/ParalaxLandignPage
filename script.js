

window.onscroll = ()=>{
    //  select all class 
    
    let header = document.querySelector('header');
    let scrollEffect1 = document.querySelector('#scrollEffect1');
    let moveElements1 = document.querySelector('#moveElements1');
    let HeaderText = document.querySelector('#HeaderText');
    
    console.log(header.getBoundingClientRect().top )
    
    // header.offsetHeight 
    //scrollEffect1.getBoundingClientRect().top
    if( (header.offsetHeight ) > scrollEffect1.getBoundingClientRect().top){
      let topValue =  scrollEffect1.getBoundingClientRect().top  - header.offsetHeight;
        moveElements1.style.top = (topValue / 5 ) + "px";
        console.log(topValue );
    }

    if(header.getBoundingClientRect().top  < - 30){
        HeaderText.style.left = 90 +"vw";
    }else{
        HeaderText.style.left = 25 +"vw";
    }
   
}