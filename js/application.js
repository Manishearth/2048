// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
   var gm=new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
   document.getElementById('save-button').onclick=function(){gm.save()};
    document.getElementById('clear-button').onclick=function(){gm.clearSave()};  
});
