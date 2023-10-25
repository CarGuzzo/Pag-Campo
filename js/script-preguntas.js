let elementosAcordeon = document.getElementsByClassName("acordeon"); //acá se van a guardar los elementos que tengan clase acordeon 

// qué queremos que ocurra? 
for (let i = 0; i < elementosAcordeon.length; i++) {
    elementosAcordeon[i].addEventListener("click", function(){
        this.classList.toggle("active") //asi le asigno la clase activo o la saco en función de si está activada o no. 
        let panel = this.nextElementSibling; 
        if (panel.style.display == "block"){
            panel.style.display = "none";
        } else {
            panel.style.display= "block";
        }
    })
    
}
