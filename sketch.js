/***********************************************************************************
  Rooms of a House Sample
  by Scott Kildall
  Shows navigation structure using the keyboard between 4 rooms
  []
  Template:
  (1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
  (2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
  (3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section
  Also start your localhost before running this, otherwise no PNGs will display
------------------------------------------------------------------------------------
  The way it works — you don't need to know this for the template use
  * array of images gets loaded at startup
  * drawFunction is a VARIABLE that points to a function varible name
  * drawOne(), drawTwo(), etc. are set to be functions.
  * the the keys 1-5 will change the drawFunction variable
------------------------------------------------------------------------------------
  Notes:
  - a more advanced state machine with use array-indexing for each of
    images the draw functions, but this is just for illustrative purposes
  - even more advanced will be to put the draw functions into an array, would
    be helpful for randomizing, go to the next function, etc
  - next step after that would be to put interfaces into an array that maps to
    the functions
***********************************************************************************/



// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 24;

//line variables
var xOne = 235;
var yOne = 0;
var xTwo = 235;
var yTwo = 400;

//variable for images
var visualAssets = [];

//preload images in array
function preload() {
  visualAssets[0] = loadImage('assets/livingFloor.png');
  visualAssets[1] = loadImage('assets/couch.png');
  visualAssets[2] = loadImage('assets/kitchenFloor.png');
  visualAssets[3] = loadImage('assets/stove.png');
  visualAssets[4] = loadImage('assets/diningFloor.png');
  visualAssets[5] = loadImage('assets/tableAndChair.png');
  visualAssets[6] = loadImage('assets/bedFloor.png');
  visualAssets[7] = loadImage('assets/bed.png');
  visualAssets[8] = loadImage('assets/bathFloor.png');
  visualAssets[9] = loadImage('assets/tub.png');
  visualAssets[10] = loadImage('assets/blueberry.png');
  visualAssets[11] = loadImage('assets/officeFloor.png');
  visualAssets[12] = loadImage('assets/desk.png');
}


// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(800, 800);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(40);

  // set to one for startup
  drawFunction = drawLivingRoom;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  // will call your state machine function
  drawFunction();
}


//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//draws images at index 0,1 from the array
drawLivingRoom = function() {
   background(210, 100, 38);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[0], width/2, height/2 + 200);
   image(visualAssets[1], width/2, height/2);
   fill(255);
   text("Living Room", width/2, height - gTextOffset);  
}

//draws images at index 2,3 from the array
drawKitchen = function() {
   background(20, 210, 8);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[2], width/2, height/2 + 200);
   image(visualAssets[3], width/2, height/2);
   fill(255);
   text("Kitchen", width/2, height - gTextOffset);  
}

//draws images at index 4,5 from the array
drawDiningRoom = function() {
   background(20, 201, 150);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[4], width/2, height/2 + 200);
   image(visualAssets[5], width/2, height/2);
   fill(255);
   text("Dining Room", width/2, height - gTextOffset);
}

//draws images at index 6,7 from the array
drawBedroom = function() {
   background(200, 21, 15);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[6], width/2, height/2 + 200);
   image(visualAssets[7], width/2, height/2);
   fill(255);
   text("Bed Room", width/2, height - gTextOffset);
}

//draws images at index 8,9, 10 from the array
drawBathroom = function() {
   background(150, 201, 201);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[8], width/2, height/2 + 200);
   image(visualAssets[9], width/2, height/2);
   image(visualAssets[10], width/2, height/2);
   fill(255);
   text("Bath Room", width/2, height - gTextOffset);
}

//draws images at index 11, 12 from the array
drawOffice = function() {
   background(200, 201, 150);
   line(xOne, yOne, xTwo, yTwo);
   image(visualAssets[11], width/2, height/2 + 200);
   image(visualAssets[12], width/2, height/2);
   fill(255);
   text("Office", width/2, height - gTextOffset);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was types
  //print(key);
  print(keyCode);

   // living room [l]
  if( drawFunction === drawLivingRoom ) {
    if( key === 'k' ) {
      drawFunction = drawKitchen;
    }
    if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  } 

  // Kitchen [k] 
  else if( drawFunction === drawKitchen ) {
    if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
    else if( key === 'l' ) {
      drawFunction = drawLivingRoom;
    }
  }

    // Dining Room [d]
  else if( drawFunction === drawDiningRoom ) {
      if( key === 'k' ) {
      drawFunction = drawKitchen;
    }
      if( key === 'r' ) {
      drawFunction = drawBedroom;
    }
      if( key === 'o' ) {
      drawFunction = drawOffice;
    }
      else if( key === 'l' ) {
      drawFunction = drawLivingRoom;
    }
  }

      // Bedroom [r]
  else if( drawFunction === drawBedroom ) {
    if( key === 'b' ) {
      drawFunction = drawBathroom;
    }
      else if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  }

    // Bathroom [b]
  else if( drawFunction === drawBathroom ) {
    if( key === 'r') {
      drawFunction = drawBedroom;
    }
  }

  // Office [o]
  else if( drawFunction === drawOffice ) {
    if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  }
}