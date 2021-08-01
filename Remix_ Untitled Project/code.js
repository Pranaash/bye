var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var boundary1 = createSprite(190,120,400,3);

var boundary2 = createSprite(190,260,400,3);

var sam = createSprite(20,190,15,15);
sam.shapeColor="green";

var obstacle1 = createSprite(100,150,15,15);

var obstacle2 = createSprite(260,150,15,15);

var obstacle3 = createSprite(200,250,15,15);

var obstacle4 = createSprite(300,250,15,15);
var lives=5


obstacle1.shapeColor="red"
obstacle2.shapeColor="red"
obstacle3.shapeColor="red"
obstacle4.shapeColor="red"

obstacle1.velocityY=4
obstacle2.velocityY=-4
obstacle3.velocityY=4
obstacle4.velocityY=-4

function draw() {
  background("white")
  createEdgeSprites()
  obstacle1.bounceOff(boundary1)
  obstacle2.bounceOff(boundary1)
  obstacle3.bounceOff(boundary1)
  obstacle4.bounceOff(boundary1)
   obstacle1.bounceOff(boundary2)
   obstacle2.bounceOff(boundary2)
   obstacle3.bounceOff(boundary2)
    obstacle4.bounceOff(boundary2)
 if(sam.isTouching(obstacle1) || sam.isTouching(obstacle2) || sam.isTouching(obstacle3) || sam.isTouching(obstacle4)){
   sam.x=20;
   sam.y=190;
  lives=lives-1 
  }
  if (keyDown("left")) {
   sam.x=sam.x-1 
}
if(keyDown("right"))
sam.x=sam.x+1
if(lives==0){
  textSize(40)
  text("you won",200,30)
}
drawSprites();
  textSize(40)
  text("lives",20,40)
   text(lives,100,40)
  
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
