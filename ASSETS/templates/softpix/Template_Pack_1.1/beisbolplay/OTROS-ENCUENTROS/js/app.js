





function runTemplateUpdate() {

    

const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");


    
const Carreras_homeclub = document.getElementById("carreras_homeclub");
const Carreras_visitante = document.getElementById("carreras_visitante");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Inning = document.getElementById("inning");
const Alta_baja = document.getElementById("ALTA-BAJA");


    function ajustarCadena(cadena) {
        cadena = cadena.replace(/\+/g, ' ');
        cadena = cadena.replace(/\+/g, ' ');
        return cadena;
      }
      
      const expresion = htmlDecode(e('f0').innerText);
      const cadenaAjustada = ajustarCadena(expresion);
    

    const params = {
        id_juego:  `${cadenaAjustada}`,
    };
    
    
    Object.keys(params).forEach(key => {
        url1.searchParams.append(key, params[key]);
        url2.searchParams.append(key, params[key]);
    });
    
    const headers = {
        "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    const request1 = fetch(url1, {
        method: "GET",
        headers,
    
    
    }).then(response => response.json());
    
    const request2 = fetch(url2, {
        method: "GET",
        headers,
    }).then(response => response.json());
    
    let animationExecuted = false; // Variable para controlar si la animación ya se ejecutó
    
    function updateGameData() {
        function fetchData() {
            fetch(url1, {
                method: "GET",
                headers,
            })
                .then(response => response.json())
                .then(result1 => {
                    if (result1) {
                        let {
                            carreras_homeclub,
                            carreras_visitante,
                            hombre_primera,
                            hombre_segunda,
                            hombre_tercera,
                            id_bateador_homeclub,
                            id_bateador_visitante,
                            id_lanzador_homeclub,
                            id_lanzador_visitante,
                            id_equipo_homeclub,
                            id_equipo_visitante,
                            inning,
                            outs,
                            parte,
                            secuencia_lanzamientos,
                            lanzador_homeclub_bolas,
                            lanzador_homeclub_foul,
                            lanzador_homeclub_strikes,
                            lanzador_visitante_bolas,
                            lanzador_visitante_foul,
                            lanzador_visitante_strikes
                        } = result1.data.juego;

                        if(parte == 0){
                            Alta_baja.src = 'img/baja.png'
                        }else if(parte == 1)  Alta_baja.src = 'img/alta.png'



                            
                            carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '0' 
                            carreras_visitante ? carreras_visitante  : carreras_visitante=  '0'
            
                            Carreras_homeclub.innerText = carreras_homeclub;
                            Carreras_visitante.innerText = carreras_visitante;
                            Id_equipo_homeclub.src = array_logo[id_equipo_homeclub].img_url;
                            Id_equipo_visitante.src = array_logo[id_equipo_visitante].img_url;
                            
                            inning ? inning : inning = "0";
                            Inning.innerText = inning;
            
           

                        if (!animationExecuted) {
                            runAnimationIN();
                            animationExecuted = true;
                        }
                    } else {
                        console.error("Error fetching data:", response.statusText);
                    }
                })
                .catch(error => {
                    console.error("Error en una de las solicitudes:", error);
                });
        }
    
        
        fetchData();

        const updateInterval = 10000; // 10 segundos
        setInterval(fetchData, updateInterval);
    }
    
    updateGameData();
}









