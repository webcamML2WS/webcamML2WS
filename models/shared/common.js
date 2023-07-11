  var onresize = function() {
       width = document.body.clientWidth;
       height = document.body.clientHeight;
       document.getElementsByClassName("container")[0].style.transform = "scale(" + width/1280 + ")";
       document.getElementsByClassName("container")[0].style.transformOrigin = "0 0";
    }
    

        window.addEventListener("resize", onresize);
    onresize();


    document.body.addEventListener("mouseenter", function() {
      document.getElementsByClassName("control-panel")[1].style.transition= "all 1s";
      document.getElementsByClassName("control-panel")[1].style.marginLeft= "0px"
    });
    document.body.addEventListener("mouseleave", function(){
      document.getElementsByClassName("control-panel")[1].style.marginLeft= "-450px"
    });


document.getElementsByClassName("control-panel")[0].innerHTML =
    '<button id="closeButton" onclick="closeBrowser()">&#x2715</button>' +
    document.getElementsByClassName("control-panel")[0].innerHTML 
