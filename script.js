

function aparecer_menu(){
let container_menu = document.getElementById("container_menu")

    if(container_menu.verificar == "0"){

        container_menu.classList.remove("abrir_menu")
        container_menu.classList.add("fechar_menu")
        // container_menu.classList.add("container_menu");
        container_menu.verificar = "1"
        

    }else if(container_menu.verificar = "1"){

        container_menu.classList.remove("fechar_menu")
        // container_menu.classList.remove("container_menu");
        container_menu.classList.add("abrir_menu")
        container_menu.verificar = "0"
        

    }



    
}





// if(menu.style.display == "flex"){

    

//     menu.style.display = "none";



// }else if(menu.style.display == "none"){

 
    
//    menu.style.display = "flex";
    

// }





