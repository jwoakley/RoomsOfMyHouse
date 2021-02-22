/***********************************************************************************
  Rooms of a House Sample
  by Joshua Wilder Oakley
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
  * draw_blank_Room(s) are set to be the functions.
  * the keys 'l, k, d, r, b, o' will change the drawFunction variable
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

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 24;

//'corner of room' line variables
var xOne = 235;
var yOne = 0;
var xTwo = 235;
var yTwo = 400;

//image variables
var livingRoomAssets = [];
var kitchenAssets = [];
var diningRoomAssets = [];
var bedroomAssets = [];
var bathroomAssets = [];
var officeAssets = [];
var dogAssets = [];

//tile floor placement variables
var tileFloorX = 0;
var tileFloorY = 381;

//room title bounding box variables
var xStartOne = 525;
var yStartOne = 711;
var xEndOne = 275;
var yEndOne = 60;

//room title variables
var textXPos = ((80 - xStartOne)/ 2);
var textYPos = ((800 - yStartOne)/ 2);

//preload images in array
function preload() {
  //dog
  dogAssets[0] = loadImage('assets/dog.png');
  //livingroom images
  livingRoomAssets[0] = loadImage('assets/livingFloor.png');
  livingRoomAssets[1] = loadImage('assets/couch.png');
  livingRoomAssets[2] = loadImage('assets/arcoLamp.png');

 //kitchen images
  kitchenAssets[0] = loadImage('assets/kitchenFloor.png');
  kitchenAssets[1] = loadImage('assets/stove.png');
  
  //dining room images
  diningRoomAssets[0] = loadImage('assets/diningFloor.png');
  diningRoomAssets[1] = loadImage('assets/chairAndTables.png');
  
  //bedroom images
  bedroomAssets[0] = loadImage('assets/bedFloor.png');
  bedroomAssets[1] = loadImage('assets/bed.png');

  //bathroom images
  bathroomAssets[0] = loadImage('assets/bathFloor.png');
  bathroomAssets[1] = loadImage('assets/bathroom.png');
  bathroomAssets[2] = loadImage('assets/mirror.png');

  //office images
  officeAssets[0] = loadImage('assets/officeFloor.png');
  officeAssets[1] = loadImage('assets/desk.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(40);

  // set to one for startup
  drawFunction = drawLivingRoom;
}

//calls your state machine function
function draw() {
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//draws images from livingRoomAssets array
drawLivingRoom = function() {
   let r = 210;
   let g = 100;
   let b = 38;

   background(r, g, b);

   //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(livingRoomAssets[0], tileFloorX, tileFloorY);  //tiled floor png
   image(livingRoomAssets[1], 92, 305);  //couch
   image(livingRoomAssets[2], 12, -114);  //lamp
   image(dogAssets[0], 442, 361);  //dog
   
   //text bounding box
   noStroke();
   fill(r, g, b);
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('living room', textXPos, textYPos);
   pop();
   
}

//draws images from kitchenAssets array
drawKitchen = function() {
   let r = 251;
   let g = 196;
   let b = 219;

   background(r, g, b);

    //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(kitchenAssets[0], tileFloorX, tileFloorY);  //tiled floor png
   image(dogAssets[0], 370, 305); //dog behind stove
   image(kitchenAssets[1], 135, 117);  //stove
   
   //text bounding box
   fill(r, g, b);
   noStroke();
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('kitchen', textXPos, textYPos);
   pop(); 
}

//draws images from diningRoomAssets array
drawDiningRoom = function() {
   let r = 20;
   let g = 201;
   let b = 150;

   background(r, g, b);

  //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(diningRoomAssets[0], tileFloorX, tileFloorY);  //tiled floor png
   image(diningRoomAssets[1], 134, 257);  //table and chairs
   image(dogAssets[0], 23, 575); //dog
   
   //text bounding box
   fill(r, g, b);
   noStroke();
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('dining room', textXPos, textYPos);
   pop(); 
}

//draws images at index 6,7 from the array
drawBedroom = function() {
   let r = 138;
   let g = 147;
   let b = 111;

   background(r, g, b);

  //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(bedroomAssets[0], tileFloorX, tileFloorY);  //tiled floor png
   image(bedroomAssets[1], 65, 220);  //bed
   image(dogAssets[0], 313, 438); //dog
  
   //text bounding box
   fill(r, g, b);
   noStroke();
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('bedroom', textXPos, textYPos);
   pop(); 
}

//draws images at index 8,9, 10 from the array
drawBathroom = function() {
   let r = 150;
   let g = 201;
   let b = 201;

   background(r, g, b);

  //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(bathroomAssets[0], tileFloorX, tileFloorY);   //tiled floor png
   image(bathroomAssets[1], 99, 218);  //vanity
   image(bathroomAssets[2], 146, 10);  //mirror
   image(dogAssets[0], 195, 482);  //dog
  
   //text bounding box
   fill(r, g, b);
   noStroke();
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('bathroom', textXPos, textYPos);
   pop(); 
}

//draws images at index 11, 12 from the array
drawOffice = function() {
   let r = 100;
   let g = 98;
   let b = 98;

   background(r, g, b);

  //perspective line
   stroke(2);
   line(xOne, yOne, xTwo, yTwo);  

   //images in array
   image(officeAssets[0], tileFloorX, tileFloorY);  //tiled floor png
   image(officeAssets[1], 100, 0);  //furniture
   image(dogAssets[0], 236, 381);
  
   //text bounding box
   fill(r, g, b);
   noStroke();
   rect(xStartOne, yStartOne, xEndOne, yEndOne);

   //room title
   fill(255);
   textLeading(10);
   push();
   translate(xStartOne, yStartOne);
   text('office', textXPos, textYPos);
   pop(); 
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