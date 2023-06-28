$(document).ready(function(){
  $(document).mousemove(function(event){
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let divX = $("#myDiv").offset().left;
    let divY = $("#myDiv").offset().top;
    let divWidth = $("#myDiv").outerWidth();
    let divHeight = $("#myDiv").outerHeight();
    let gameWidth = $("#game").outerWidth();
    let gameHeight = $("#game").outerHeight();

    if (mouseX >= divX - 70 && mouseX <= divX + divWidth + 70 &&
        mouseY >= divY - 70 && mouseY <= divY + divHeight + 70) {
        let newX = Math.random() * gameWidth + 70;
        let newY = Math.random() * gameHeight + 70;
        if (newX + divWidth > gameWidth) {
          newX = gameWidth - divWidth;
        }
        if (newY + divHeight > gameHeight) {
          newY = gameHeight - divHeight;
        }
        $("#myDiv").offset({ left: newX, top: newY });
    } else {
      console.log("mouse is safe");
    }
  });
});

  