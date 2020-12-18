// var mainContainer = document.getElementById("mainContainer");
// var svg = document.getElementById("svgID");

var width = 600;
var height = 600;
var size = 500;
 
function sierpinski(Ax,Ay,Bx,By,Cx,Cy,d,ctx) {
    if(d>0) {
        var pointAx = (Bx + Cx) / 2;
        var pointAy = (By + Cy) / 2;
 
        var pointBx = (Ax + Cx) / 2;
        var pointBy = (Ay + Cy) / 2;
 
        var pointCx = (Ax + Bx) / 2;
        var pointCy = (Ay + By) / 2;
 
        var d2 = d-1;
        sierpinski(Ax,Ay,pointBx,pointBy,pointCx,pointCy,d2,ctx);
        sierpinski(pointCx,pointCy,pointAx,pointAy,Bx,By,d2,ctx);
        sierpinski(pointBx,pointBy,pointAx,pointAy,Cx,Cy,d2,ctx);
    }
    else {
        ctx.moveTo(Ax,Ay);
        ctx.lineTo(Bx,By);
        ctx.lineTo(Cx,Cy);
        ctx.lineTo(Ax,Ay);
    }
}
 
function drawSierpinski(ctx) {
    var midPointX = width/2;
    var midPointY = height/2;
    var deep = 4;
    var ri = (size/6) * Math.sqrt(3);
    var ru = (size/3) * Math.sqrt(3);
    var pointAx = midPointX-(size/2);
    var pointAy = midPointY+ri;
    var pointBx = midPointX+(size/2);
    var pointBy = midPointY+ri;
    var pointCx = midPointX;
    var pointCy = midPointY-ru;
    sierpinski(pointAx,pointAy,pointBx,pointBy,pointCx,pointCy,deep,ctx);
}
 
var ctx=document.getElementById("sierpinskiCanvas").getContext("2d");
drawSierpinski(ctx);
ctx.fillStyle = '#00FF00';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

// function getWidth() {
//   return Math.max(
//     document.body.scrollWidth,
//     document.documentElement.scrollWidth,
//     document.body.offsetWidth,
//     document.documentElement.offsetWidth,
//     document.documentElement.clientWidth
//   );
// }
// function getHeight() {
//   return Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.documentElement.clientHeight
//   );
// }

// function firstFunction() {
//   var width = 600;
//   var height = 600;
//   var size = 500;
//   var centerX = width / 2;
//   var centerY = height / 2;
//   var ri = (size / 6) * Math.sqrt(3);
//   var ru = (size / 3) * Math.sqrt(3);
//   var pointAx = centerX - size / 2;
//   var pointAy = centerY + ri;
//   var pointBx = centerX + size / 2;
//   var pointBy = centerY + ri;
//   var pointCx = centerX;
//   var pointCy = centerY - ru;
//   var counter = 0;
//   var depth = 5;
//   recursion(
//     pointAx,
//     pointAy,
//     pointBx,
//     pointBy,
//     pointCx,
//     pointCy,
//     counter,
//     depth
//   );
// }

// function recursion(Ax, Ay, Bx, By, Cx, Cy, counter, depth) {
//   var triangleA = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "polygon"
//   );
//   var triangleB = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "polygon"
//   );
//   var triangleC = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "polygon"
//   );

//   var pointAx = (Bx + Cx) / 2;
//   var pointAy = (By + Cy) / 2;
//   var pointBx = (Ax + Cx) / 2;
//   var pointBy = (Ay + Cy) / 2;
//   var pointCx = (Ax + Bx) / 2;
//   var pointCy = (Ay + By) / 2;

//   var pointsA =
//     Ax +
//     ", " +
//     Ay +
//     ", " +
//     pointBx +
//     ", " +
//     pointBy +
//     ", " +
//     pointCx +
//     ", " +
//     pointCy;
//   var pointsB =
//     pointCx +
//     ", " +
//     pointCy +
//     ", " +
//     pointAx +
//     ", " +
//     pointAy +
//     ", " +
//     Bx +
//     ", " +
//     By;
//   var pointsC =
//     pointBx +
//     ", " +
//     pointBy +
//     ", " +
//     pointAx +
//     ", " +
//     pointAy +
//     ", " +
//     Cx +
//     ", " +
//     Cy;

//   triangleA.setAttributeNS(null, "points", pointsA);
//   triangleA.setAttributeNS(
//     null,
//     "style",
//     "fill:none; stroke:red; stroke-width:2"
//   );
//   triangleB.setAttributeNS(null, "points", pointsB);
//   triangleB.setAttributeNS(
//     null,
//     "style",
//     "fill:none; stroke:blue; stroke-width:2"
//   );
//   triangleC.setAttributeNS(null, "points", pointsC);
//   triangleC.setAttributeNS(
//     null,
//     "style",
//     "fill:none; stroke:green; stroke-width:2"
//   );
//   svg.appendChild(triangleA);
//   svg.appendChild(triangleB);
//   svg.appendChild(triangleC);

//   if (depth > 0) {
//     var counter2 = 0;
//     var depth2 = depth - 1;
//     if (counter == 0) {
//       counter2 = 1;
//       recursion(Ax, Ay, pointBx, pointBy, pointCx, pointCy, counter2, depth2);
//     } else if (counter == 1) {
//       counter2 = 2;
//       recursion(pointCx, pointCy, pointAx, pointAy, Bx, By, counter2, depth2);
//     } else {
//       counter2 = 0;
//       recursion(pointBx, pointBy, pointAx, pointAy, Cx, Cy, counter2, depth2);
//     }
//   }
//   // recursion(Ax, Ay, pointBx, pointBy, pointCx, pointCy);
//   //recursion(pointCx, pointCy, pointAx, pointAy, Bx, By);
//   //recursion(pointBx, pointBy, pointAx, pointAy, Cx, Cy);
// }
