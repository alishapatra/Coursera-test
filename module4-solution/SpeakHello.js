(function(window){
    
     var helloSpeaker = {};
    
    
    var speakWord = "Hello";
    
    
     helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
     }
    
    
     helloSpeaker.addToList = function(name){
         
          var child = document.createElement("li");
        child.innerHTML = speakWord + " " + name;
        if (parent!=null) {
          parent.appendChild(child); 
      }
     }
    
    
    window.helloSpeaker = helloSpeaker;
    
    })(window);
    