let btns=document.querySelectorAll(".mas")
//mostrar texto oculto y ocultar boton!
function mostrar(t){
    let target_main=t
    const id = target_main.id
    const element_Selct=document.getElementById(id+"2")
    const element_Selct2=document.getElementById(id+"3")
    const element_Selct3=document.getElementById(id+"4")
    target_main.style.display="none"
    element_Selct.style.display="inline"
    element_Selct2.style.display="none"
    
    let i_main=0;
    let count=0
    let control=false
    let count2=0;
    while(control!=true){
        if(count==element_Selct2.textContent.length){
            control=true
        }else{
            if(i_main==38){
                count2++;
                i_main=0;
            }
            if(count>=5){
                
            }
            i_main++

            count++;
        }
    }
}
/*
    añadiendo el evento de raton a cada uno de los elementos 
    seleccioados con el metodo queryselector de su array
*/
btns.forEach(i=>{
    i.addEventListener("click",i=>{
        mostrar(i.target)
    })
})
