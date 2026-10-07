const btnCambioColor = document.getElementById("GEGC_cambio_color");

const padre = document.getElementById("GEGC_div_padre");

btnCambioColor.addEventListener("click", () => {

    padre.classList.toggle("cambio_color");

    if(padre.classList.contains("cambio_color")){

        btnCambioColor.textContent = "COLORES ORIGINALES";

    } else {

        btnCambioColor.textContent = "- PUCHALE AQUI -";

    }

    console.log("Se cambiaron los colores: ", padre.classList.contains("cambio_color"));

});