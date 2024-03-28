var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["32a7128b-44c3-4bb6-867d-b6212ce87e13","330f30cd-eea8-44d5-aea4-4428b3924588","e6e66332-5b9e-4d25-ba15-6dd1d19709cb","6a270ffa-6995-462b-a84c-5fdcbbb5ce33"],"propsByKey":{"32a7128b-44c3-4bb6-867d-b6212ce87e13":{"name":"000000000000000","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"330f30cd-eea8-44d5-aea4-4428b3924588":{"name":"pp","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png","frameSize":{"x":264,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLXVM_cc9g507KhPGhfemoX3EwF164Ju","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png"},"e6e66332-5b9e-4d25-ba15-6dd1d19709cb":{"name":"sam","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"_TxD4ahXvmfvLEa7NaTrIRZtWwL5Dnzj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/e6e66332-5b9e-4d25-ba15-6dd1d19709cb.png"},"6a270ffa-6995-462b-a84c-5fdcbbb5ce33":{"name":"red","sourceUrl":"assets/api/v1/animation-library/gamelab/_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo/category_vehicles/enemyRed1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_SDQ1dIBEtInjpIwDRUMQ28XU9YOU0wo/category_vehicles/enemyRed1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sam");
  
  sam.scale=0.2;
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("red");
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("red");
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("red");
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("red");
  
  car1.scale=0.3;
  car2.scale=0.3;
  car3.scale=0.3;
  car4.scale=0.3;

//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY =1;
car2.velocityY =-1;
car3.velocityY =1;
car4.velocityY =-1;


function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.

if(keyDown("right")){
  sam.x = sam.x +2;
}
if(keyDown("left")){
  sam.x = sam.x -2;
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
 sam.x=20;
 sam.y=190;
 life =life+1;
  } 
  
  
  
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
