const barra1 = document.getElementById("barra1")
const barra2 = document.getElementById("barra2")
const barra3 = document.getElementById("barra3")
const barra4 = document.getElementById("barra4")
const barra5 = document.getElementById("barra5")
const barra6 = document.getElementById("barra6")
const barra7 = document.getElementById("barra7")
const barra8 = document.getElementById("barra8")
const barra9 = document.getElementById("barra9")
const barra10 = document.getElementById("barra10")
const barra11 = document.getElementById("barra11")
const barra12 = document.getElementById("barra12")
const barra13 = document.getElementById("barra13")
const barra14 = document.getElementById("barra14")
const barra15 = document.getElementById("barra15")
const barra16 = document.getElementById("barra16")

const botond = document.getElementById("botone")
const numero = document.getElementById("numero")
const numero2 = document.getElementById("numero2")
const numero3 = document.getElementById("numero3")
const numero4 = document.getElementById("numero4")
const numero5 = document.getElementById("numero5")
const numero6 = document.getElementById("numero6")
const numero7 = document.getElementById("numero7")
const numero8 = document.getElementById("numero8")
const numero9 = document.getElementById("numero9")
const numero10 = document.getElementById("numero10")
const numero11 = document.getElementById("numero11")
const numero12 = document.getElementById("numero12")
const numero13 = document.getElementById("numero13")
const numero14 = document.getElementById("numero14")
const numero15 = document.getElementById("numero15")
const numero16 = document.getElementById("numero16")
let HTML=95
let CSS=85
let BSTRP=79
let JS=85
let TLWND=45
let JQ=55
let V=45
let React=54
let TPSCRPT=57
let PHP=56
let node=50
let SQL= 70
let mysql=70
let mariadb=75
let laravel=56
let ruby=56
let porcentaje=1
let interval1 = setInterval(barra1f, 1)
let interval1_2
let interval2
let interval3
let interval4
let interval5
let interval6
let interval7
let interval8
let interva9
let interval10
let interval11
let interval12
let interval13
let interval14
let interval15
let interval16
function barra1f() {
  porcentaje++;
  numero.textContent=porcentaje+"%"
  barra1.style.width = porcentaje + "%"
  
  if (porcentaje == HTML ) {
    porcentaje=1;
    clearInterval(interval1)
    interval2 = setInterval(barra2f, 1)
  }
}

function barra2f() {
    porcentaje++;  
    barra2.style.width = porcentaje + "%"
    numero2.textContent=porcentaje+"%"
    if (porcentaje == CSS) {
        porcentaje=1;
      clearInterval(interval2)
      interval1_2 = setInterval(barra1_2_f, 1  )
    }
  }
  function barra1_2_f() {
    porcentaje++;
    numero8.textContent=porcentaje+"%"
    barra8.style.width = porcentaje + "%"
    
    if (porcentaje == JS ) {
      porcentaje=1;
      clearInterval(interval1_2)
      interval3 = setInterval(barra3f, 1)
    }
  }
function barra3f() {
    porcentaje++;
    barra3.style.width = porcentaje + "%"
    numero3.textContent=porcentaje+"%"
    if (porcentaje == BSTRP) {
        porcentaje=1;
        
      clearInterval(interval3)
      interval4 = setInterval(barra4f, 1)
    }
  }

function barra4f() {
    porcentaje++;
    barra4.style.width = porcentaje + "%"
    numero4.textContent=porcentaje+"%"
    if (porcentaje ==TLWND ) {
        porcentaje=1;
      clearInterval(interval4)
      interval5 = setInterval(barra5f, 1)
    }
  }

function barra5f() {
    porcentaje++;
    barra5.style.width = porcentaje + "%"
    numero5.textContent=porcentaje+"%"
    if (porcentaje == JQ) {
        porcentaje=1;
      clearInterval(interval5)
      interval6 = setInterval(barra6f, 1)
    }
  }

function barra6f() {
    porcentaje++;
    barra6.style.width = porcentaje + "%"
    numero6.textContent=porcentaje+"%"
    if (porcentaje == V) {
        porcentaje=1;
      clearInterval(interval6)
      interval7 = setInterval(barra7f, 1)

    }
  }

function barra7f() {
    porcentaje++;
    barra7.style.width = porcentaje + "%"
    numero7.textContent=porcentaje+"%"
    if (porcentaje == React) {
        porcentaje=1;
      clearInterval(interval7)
      interval9 = setInterval(barra9f, 1)
    }
  }
  function barra9f() {
    porcentaje++;
    barra9.style.width = porcentaje + "%"
    numero9.textContent=porcentaje+"%"
    if (porcentaje == TPSCRPT) {
        porcentaje=1;
      clearInterval(interval9)
      interval10=setInterval(barra10f,1)
    }
  }
  function barra10f() {
    porcentaje++;
    barra10.style.width = porcentaje + "%"
    numero10.textContent=porcentaje+"%"
    if (porcentaje == PHP) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval10)
        interval11=setInterval(barra11f,1)   
    }
  }
  
  function barra11f() {
    porcentaje++;
    barra11.style.width = porcentaje + "%"
    numero11.textContent=porcentaje+"%"
    if (porcentaje == node) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval11)   
        interval12=setInterval(barra12f,1)   
    }
  }
  
  function barra12f() {
    porcentaje++;
    barra12.style.width = porcentaje + "%"
    numero12.textContent=porcentaje+"%"
    if (porcentaje == SQL) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval12) 
        interval13=setInterval(barra13f,1)     
    }
  }
  
  function barra13f() {
    porcentaje++;
    barra13.style.width = porcentaje + "%"
    numero13.textContent=porcentaje+"%"
    if (porcentaje == mysql) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval13)   
        interval14=setInterval(barra14f,1)   
    }
  }
  
  function barra14f() {
    porcentaje++;
    barra14.style.width = porcentaje + "%"
    numero14.textContent=porcentaje+"%"
    if (porcentaje == mariadb) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval14)   
        interval15=setInterval(barra15f,1)   
    }
  }
  
  function barra15f() {
    porcentaje++;
    barra15.style.width = porcentaje + "%"
    numero15.textContent=porcentaje+"%"
    if (porcentaje == laravel) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval15)   
        interval16=setInterval(barra16f,1)   
    }
  }
  
  function barra16f() {
    porcentaje++;
    barra16.style.width = porcentaje + "%"
    numero16.textContent=porcentaje+"%"
    if (porcentaje == ruby) {
        porcentaje=1;
        console.log("d")
        clearInterval(interval16)
    }
  }