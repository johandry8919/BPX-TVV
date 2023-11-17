

function runAnimationIN() {
    const dur = 0.7;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
  

   

    }


    const animateInfo = (selector, delayTime, xOffset) => {
      gsap.fromTo(
        selector,
        { opacity: 0 },
        {
          delay: delayTime,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
    
      gsap.fromTo(
        selector,
        { y: xOffset },
        { delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
      );
    };


    animateInfo("#cont1" , 0.2 , -100)
    animateInfo("#cont-inning" , 0.4 , -100)
    animateInfo("#cont-text" , 0.4 , 100)
    animateInfo("#carreras_visitante" , 0.4 , 100)
    animateInfo("#carreras_homeclub" , 0.5 , 100)

    }

   

  
  
  
    function runAnimationOUT() {
      const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
      const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
      const containerWidth = container.offsetWidth; // Ancho del contenedor.
    
      gsap.to(container, {
        x: 200, 
        opacity: 0,
        duration: 0.5, 
       
        onComplete: function() {
          container.style.display = 'none';
        }
      });
    }
   