"use strict";
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid(height) {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    var heightStr = heightElement.value;

    // here we convert the string to an int
    var height = parseInt(heightStr);

    // TODO 2
    // draw the pyramid with the given height

    drawPyramid(height);
    // var  pline = document.createElement("p");   //<p></p>
    // pline.innerHTML = rowStr;   //<p>"        ##"</p>
    //     //find div with an id of pyramid
    // var pyramid = document.getElementById("pyramid");
    //     //place the paragraph tag inside the pyramid
    // pyramid.appendChild(pline);
}
    var heightElement = document.getElementById("height");
    heightElement.addEventListener("keydown", function(event){
        if (event.keyCode == 13){
            determineHeightAndThenDrawPyramid();
        }
    });

// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
    var button = document.getElementById("draw-button");
    //var button = document.querySelector("#draw-button")
    button.addEventListener("click", function(){
        determineHeightAndThenDrawPyramid();
    });
        

    

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
        pyramid.innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "&nbsp";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        

        // create a <p> element with the text inside
        var rowElem = document.createElement("p");
        rowElem.innerHTML= rowStr;

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
