var navLinks = document.getElementById("navLinks")
        function showMenu(){
            navLinks.style.transition = "0.8s";
            navLinks.style.right = "0";
            navLinks.style.display = "inline-block";

        } 
        function hideMenu(){
            navLinks.style.transition = "0.8s";
            navLinks.style.right = "-240px";
            navLinks.style.overflow = "hidden";
        } 
      
var loader;
        function loadNow(opacity){
            if(opacity <= 0){

                displayContent();
                
            }
            else{
                loader.style.opacity = opacity;
                window.setTimeout(function(){
                    loadNow(opacity - 0.1)
                }, 100);
            }
        }

        function displayContent(){
            loader.style.display='none';
            document.getElementById('content').style.display = 'block';
          }
        document.addEventListener("DOMContentLoaded", function(){
            loader = document.getElementById('loader');
            loadNow(1);
        });
        
        const faqtitle = document.querySelectorAll(".faq-title");
        console.log(faqtitle);
        for (var i = faqtitle.length - 1; i >= 0; i--) {
            faqtitle[i].addEventListener("click", function () {
        var audio = new Audio('img/shtora.mp3');
            audio.volume = 0.2;
            audio.play();});
        }

        const whatsapp = document.querySelector(".whatsapp");
        whatsapp.addEventListener("click", function () {
        var audio = new Audio('img/engine.mp3');
            audio.volume = 0.2;
            audio.play();});

        const bars = document.querySelectorAll(".bar");
        console.log(bars);
        for (var i = bars.length - 1; i >= 0; i--) {
            bars[i].addEventListener("click", function () {
        var audio = new Audio('img/swipe.mp3');
            audio.play();});
        }

        
