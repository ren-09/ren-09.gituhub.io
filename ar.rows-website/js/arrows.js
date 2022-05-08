'use strict';

var img = new Array("./images/retro_myroom(reduced).png",
"./images/error(reduced).png",
"./images/stripes_live1(reduced).png",
);

var element = document.getElementById("slideshow");
var count = -1;
imgTimer();

function imgTimer(){
  count++;
  if(count == img.length)count = 0;
  element.src = img[count];
  setTimeout("imgTimer()", 3000);
}
