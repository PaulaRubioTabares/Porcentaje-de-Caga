window.addEventListener("load", () => {

    //Seleccionar elementos del Dom
    let number =    document.querySelector(".carga_porcentaje");
    let btn =       document.querySelector(".carga_bottom");
    let completo =  document.querySelector(".carga_completa");
    let fondo =     document.querySelector(".capa_fondo");

    //Variables contadoras
    let porcentaje = 1;
    let blur = 30;

    btn.addEventListener("click", () => {

        btn.style.display = "none";

        let time  = setInterval(() => {

            porcentaje++;
            blur -= 30/100;

            if(porcentaje >100){
                clearInterval(time);
                completo.style.display = "block";

            } else{
                number.innerHTML = porcentaje+"%";
                fondo.style.filter = `blur(${blur}px)`;
            }

        }, 20);

    });

});