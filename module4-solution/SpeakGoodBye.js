(function(window){
    
     var byeSpeaker = {};
    
   
    var speakWord = "Good Bye";
    
    
     byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }
     
     
     byeSpeaker.addToList = function(name){
         
          var child = document.createElement("li");
        child.innerHTML = speakWord + " " + name;
                
       if (parent!=null) {
          parent.appendChild(child); 	
      }
     } 
    
    
    window.byeSpeaker = byeSpeaker;
    
    })(window);
    