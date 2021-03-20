 $(document).ready(function(){

 })

var load=$('.load');
var main=$('.main');
var gif=$("#gif");
var nav=$("nav");
var t=window.outerWidth;




function loading(){
 
    window.scrollTo(0, 1);
    size();
    setTimeout(() => {
    gif.css({
        "opacity":"0",
        "transition":"0.3s"
    });

    load.css({
        "height":"0vh",
        "transition":"1s"
    });

    
    }, 1500);

    setTimeout(() => {
        main.css({
            "opacity":"1",
            "transition":"0.8s",
             "visibility":"visible"
        });  
    }, 2200);

    setTimeout(() => {
        
        $(".firsth1").css({
            "transform":"scale(1)"
        });
        
    }, 2500);

    setTimeout(() => {
        $(".firsth2").css({
            "opacity":"1",
           "transform":"translateY(0)"
            
        });    
    }, 2900);
    

    setTimeout(() => {
        $(".intro").fadeOut(1500);
    }, 3500);

    setTimeout( () => {
        $(".lsd").fadeIn(500);
        $(".lsd").css("display","flex");
        
    },5000)
    
    

}

var mas1=$('#page1');
var mas2=$('#page2');
var mas3=$('#page3');
var mas4=$('#page4');
var mas5=$('#page5');

function red1(){
    t=outerWidth;
    if(t < 1000 ){
        close();
      }

    mas1.css({
        "opacity":"1",
         "height":"100vh"
     })
    mas2.css({
    "opacity":"0",
     "height":"0"
 })
 mas3.css({
    "opacity":"0",
     "height":"0"
 })
 mas4.css({
    "opacity":"0",
     "height":"0"
 })
 mas5.css({
    "opacity":"0",
     "height":"0"
 })
 
}

function red2(){
    
    t=outerWidth;
    if(t < 1000 ){
        close();
      }

    mas2.css({
        "opacity":"1",
         "height":"100vh"
     })
    mas1.css({
    "opacity":"0",
     "height":"0"
 })
 mas3.css({
    "opacity":"0",
     "height":"0"
 })
 mas4.css({
    "opacity":"0",
     "height":"0"
 })
 mas5.css({
    "opacity":"0",
     "height":"0"
 })
 
}

function red3(){

    t=outerWidth;
    if(t < 1000 ){
        close();
      }

    mas3.css({
        "opacity":"1",
         "height":"100vh"
     })
    mas1.css({
    "opacity":"0",
     "height":"0"
 })
 mas2.css({
    "opacity":"0",
     "height":"0"
 })
 mas4.css({
    "opacity":"0",
     "height":"0"
 })
 mas5.css({
    "opacity":"0",
     "height":"0"
 })
 
}

function red5(){
    
    t=outerWidth;
    if(t < 1000 ){
        close();
      }

    mas5.css({
        "opacity":"1",
         "height":"100vh"
     })
    mas1.css({
    "opacity":"0",
     "height":"0"
 })
 mas2.css({
    "opacity":"0",
     "height":"0"
 })
 mas3.css({
    "opacity":"0",
     "height":"0"
 })
 mas4.css({
    "opacity":"0",
     "height":"0"
 })
 
}

function red4(){
    t=outerWidth;
    if(t < 1000 ){
        close();
      }

    mas4.css({
        "opacity":"1",
         "height":"100vh"
     })
    mas1.css({
    "opacity":"0",
     "height":"0"
 })
 mas2.css({
    "opacity":"0",
     "height":"0"
 })
 mas3.css({
    "opacity":"0",
     "height":"0"
 })
 mas5.css({
    "opacity":"0",
     "height":"0"
 })
 
}
function hide(){
    close();
}


function size(){
    var t=window.outerWidth;
    if(t >  1000){
        nav.css("width","25%");
    }

    if(t < 1000 ){
      close();
    }
}
var d=0;
function close(){
    nav.css({
        "width":"0",
        "transition":"0.5"
    });
    d=0;
}

function menu(){
    if(d==0){
    nav.css({
        "width":"80%",
        "transition":"0.3s"
    });
    d=1;
    }else{
        nav.css({
            "width":"0",
            "transition":"0.3s"
        });

        d=0;
        
    }
    
    }

    
    console.log(t);
