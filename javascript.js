(function() {
    "use strict";
    
    var $ = function(id) { return document.getElementById(id); };  // Shortcut to avoid 
                                                                   // repetitive typing
    var timer = null;
    
    window.onload = function() {
        $("med").onchange = changeFontSize;
        $("big").onchange = changeFontSize;
        $("bigger").onchange = changeFontSize;
        $("start").onclick = start;
        $("stop").onclick = stop;
        $("speed").onchange = setTimer;
        
        function changeFontSize() {
            if ($("med").checked) {
                setFontSize("36pt");
            } else if ($("big").checked) {
                setFontSize("48pt");
            } else {
                setFontSize("60pt");  
            }
        }
        
        function setFontSize(size) {
            $("textbox").style.fontSize = size;
        }
    };
})();