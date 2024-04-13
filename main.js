

function cambiarSeccion() {
    const select = document.getElementById('seccion');
    const contenido = document.getElementById('contenido');
    const seleccionada = select.value;
    switch (seleccionada) {
        case 'inicio':
            contenido.innerHTML = '<h1>¡Bienvenido a la página de inicio!</h1>';
            break;
        case 'bola':
            bola()
            break;

        case 'piedra':
            htmlPIePvp()
            break;

        case 'Piedra, Papel o Tijeras':
            pie1()
                ;
            break;

        case 'operadores':
            opreadores()
            break;

        case 'condicionales':
            condicionales()
            break;
        case 'numAle':
            numAle()
            break;
        case 'bucles':
            htBucles()
            break; 
        case  'funciones':
            htFunciones()
            break;
            case 'repaso':
                repaso ()
            break;
    }
}


//bola

function bola() {
    contenido.innerHTML = `<div id="bola0"></div>
            `

    const balon = document.getElementById("bola0")
    let x = 0;
    let y = 0;
    const rango = 10;
    const mueve = direccion => {
        switch (direccion) {
            case 'ArrowUp':
                y = y - rango
                break;
            case 'ArrowDown':
                y = y + rango
                break;
            case 'ArrowLeft':
                x = x - rango
                break;
            case 'ArrowRight':
                x = x + rango
                break;
            case 'ArrowSpace':
        }
        balon.style.top = `${y}px`
        balon.style.left = `${x}px`
    };
    document.addEventListener('keydown', event => {
        mueve(event.key);
    });

}
//js piedra papel o tijeras pvp
let eleccionJugador2 = ""
let eleccionJugador1 = ""
let mensaje2 = ""
let mensaje1 = ""
let mensaje = ""
function jugar1(jugador1) {
    eleccionJugador1 = jugador1
}
function jugar2(jugador2) {
    eleccionJugador2 = jugador2
}
function comparar(mensaje) {
    if ((eleccionJugador1 === eleccionJugador2)) {
        mensaje1 = `<img src="https://media0.giphy.com/media/wWQ9UEKr5LBTGNw5hl/200.webp?cid=ecf05e47v47idxqh7n83hlhxtsvnzrwaap4okytkxtgsbmt8&ep=v1_gifs_search&rid=200.webp&ct=g"  height="100" width="150">`
    } else if ((eleccionJugador1 === '✊' && eleccionJugador2 === '✌')
        || (eleccionJugador1 === '✋' && eleccionJugador2 === '✊')
        || (eleccionJugador1 === '✌' && eleccionJugador2 === '✋')) {
        mensaje1 = `<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanpzOGh2amJxYWdoc2dzczUwMXc3MHJnYTY3NjA3Mmw5anY0OGE3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMHxhOfscxPfIfm/200.webp"  height="100" width="150">`;
    }
    else { mensaje1 = `<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hkb3U1ZW5tMXY1enJ5ZzFteXpiZHo1ZDZodXQ2aW5henE3endkcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPU6wzx8JrHna/200.webp" height="100px" width="150px">` }
    document.getElementById("res1").innerHTML = `${mensaje1}`

    if ((eleccionJugador2 === eleccionJugador1)) {
        mensaje2 = `<img src="https://media0.giphy.com/media/M2BL46ts7jrVt1U00S/200.webp?cid=ecf05e47v47idxqh7n83hlhxtsvnzrwaap4okytkxtgsbmt8&ep=v1_gifs_search&rid=200.webp&ct=g"  height="100" width="150">`
    } else if ((eleccionJugador2 === '✊' && eleccionJugador1 === '✌')
        || (eleccionJugador2 === '✋' && eleccionJugador1 === '✊')
        || (eleccionJugador2 === '✌' && eleccionJugador1 === '✋')) {
        mensaje2 = `<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNoZmN2d2cwbWRwNjA1czk1aXF6ankxaHp1ODRnaGo1cHZwOGdudiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IRFQYGCokErS0/giphy.webp" height="100px" width="150px">`;
    }
    else { mensaje2 = `<img src="https://media2.giphy.com/media/Txh1UzI7d0aqs/200w.webp?cid=ecf05e477iqvenx9pf3ve0l8hztcybgtzterysmhe4pcwq4l&ep=v1_gifs_search&rid=200w.webp&ct=g"  height="100" width="150">` }
    document.getElementById("res2").innerHTML = `${mensaje2}`
    if ((eleccionJugador2 === eleccionJugador1)) {
        mensaje = 'Esto es un empate'
    } else if ((eleccionJugador2 === '✊' && eleccionJugador1 === '✌')
        || (eleccionJugador2 === '✋' && eleccionJugador1 === '✊')
        || (eleccionJugador2 === '✌' && eleccionJugador1 === '✋')) {
        mensaje = "El jugador 2 es el ganador";
    } else if ((eleccionJugador1 === '✊' && eleccionJugador2 === '✌')
        || (eleccionJugador1 === '✋' && eleccionJugador2 === '✊')
        || (eleccionJugador1 === '✌' && eleccionJugador2 === '✋')) {
        mensaje = "El jugador 1 es el ganador";
    }
    document.getElementById("res0").innerHTML = `${mensaje}`
}

function htmlPIePvp() {
    contenido.innerHTML = `
    <div id="pvp"> <h1 class="pvp2">PIEDRA, PAPEL O TIJERAS</h1>
                <h2 id="res0"></h2> 
                <div class ="div2">
                <fieldset  class="conte1" id="cont0">   
                    <h2 class="pvp2">JUGADOR 1</h2>
                    <div  class ="div3" class="opcion2" onclick="jugar1('✊')">✊</div>
                    <div class ="div3" class="opcion2" onclick="jugar1('✋')">✋</div>
                    <div class ="div3" class="opcion2" onclick="jugar1('✌')">✌</div>
                    <div class ="div3" id="res1"><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQ0ZmwyN3hsbzVsNXU1ZGg2a28wZWsycDdxeXQ2ZmUwb244NGVmZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VuDwUAdpvjdsoiNbVj/200.webp"  height="100" width="150"></div>
                </fieldset>
                    <div class ="div2" id="respu" onclick="comparar('mensaje')" ><img src="https://media2.giphy.com/media/j71r2T5nAfz9rsuQbg/giphy.webp?cid=790b76110ihe7xum46e62jr8p9mx9spwkeszp0xw93xpjzzp&ep=v1_gifs_search&rid=giphy.webp&ct=g" height="50" width="100"> </div>  
                <fieldset class="conte1" id="cont1">
                    <h2 class="pvp2">JUGADOR 2</h2>
                    <div class ="div3" class="opcion2" onclick="jugar2('✊')">✊</div>
                    <div class ="div3" class="opcion2" onclick="jugar2('✋')">✋</div>
                    <div class ="div3" class="opcion2" onclick="jugar2('✌')">✌</div>
                    <div class ="div3" id="res2"><img src="https://media0.giphy.com/media/vH2LoAZUzqLenXtuSG/200.webp?cid=790b7611244fl27xlo5l5u5dh6ko0ek2p7qyt6fe0on84efg&ep=v1_gifs_search&rid=200.webp&ct=g" height="100" width="150"></div>
                </fieldset>
            </div>
            </div>`

}

// piedra, papel o tijeras 

function jugar(eleccionUsuario) {
    opciones = ['✊', '✋', '✌']
    const eleccionComputador = opciones[Math.floor(Math.random() * opciones.length)];
    let mensajeRes = ""
    if (eleccionUsuario === eleccionComputador) {
        mensajeRes = 'esto es un empate 🤔'
    } else if ((eleccionUsuario === '✊' && eleccionComputador === '✌')
        || (eleccionUsuario === '✋' && eleccionComputador === '✊')
        || (eleccionUsuario === '✌' && eleccionComputador === '✋')) {
        mensajeRes = "You are the champion 😎";
    }
    else { mensajeRes = "Perdiste 😂"; }
    document.getElementById('res').textContent = `Elegiste ${eleccionUsuario}. La computadora eligio ${eleccionComputador}, ${mensajeRes} `
}


function pie1() {
    contenido.innerHTML = `<div id="pied"><div id="cont">
    <h1>Piedra, papel o tijeras</h1>
    <div>
        <div class="opcion" onclick="jugar('✊')">✊</div>
        <div class="opcion" onclick="jugar('✋')">✋</div>
        <div class="opcion" onclick="jugar('✌')">✌</div>
    </div>
</div>
<div id="res"></div>
</div>`
}

//operadores

function sumar() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    Resultado = num1 + num2
    document.getElementById('resultado').textContent = `${Resultado}`
}
function resta() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    Resultado = num1 - num2
    document.getElementById('resultado').textContent = `${Resultado}`
}
function multiplicacion() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    Resultado = num1 * num2
    document.getElementById('resultado').textContent = `${Resultado}`
}
function division() {
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    Resultado = num1 / num2
    document.getElementById('resultado').textContent = `${Resultado}`
}

function gradF() {
    let gradC = parseFloat(document.getElementById('gradC').value);
    Resultado = gradC * (9 / 5) + 32
    document.getElementById('resultado2').textContent = `${Resultado} °F`
}
function hipot() {
    let cat1 = parseFloat(document.getElementById('cateto1').value)
    let cat2 = parseFloat(document.getElementById('cateto2').value)
    let cate1 = cat1 * cat1
    let cate2 = cat2 * cat2
    let suma = cate1 + cate2
    resultado = Math.sqrt(suma)
    document.getElementById('resultado3').innerHTML = `${resultado}`
}

function longitud() {
    let long = parseFloat(document.getElementById('longitud').value);
    let resultado = 2 * 3.1416 * long
    document.getElementById('resultado4').innerHTML = `${resultado}`
}

function trapecio() {
    let bas1 = parseFloat(document.getElementById('base1').value)
    let bas2 = parseFloat(document.getElementById('base2').value)
    let alt = parseFloat(document.getElementById('altura').value)
    let resultado = ((bas1 + bas2) * alt) / 2
    document.getElementById('resultado5').innerHTML = `${resultado}`
}

function media() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let num3 = parseFloat(document.getElementById('num3').value)
    let resultado = (num1 + num2 + num3) / 3
    document.getElementById('resultado6').innerHTML = `${resultado}`
}

function descuento() {
    let ini = parseFloat(document.getElementById('descuento').value);
    let porc = (15 / 100) * ini
    let total = ini - porc
    document.getElementById('resultado7').innerHTML = `El precio final es: ${total}`
}

function salario() {
    let horas = parseFloat(document.getElementById('horas').value);
    let precio = parseFloat(document.getElementById('precio').value);
    let resultado = precio * horas
    document.getElementById('resultado8').innerHTML = `El precio total es: ${resultado}`
}

function sAnt() {
    let sAnt = parseFloat(document.getElementById('sAnt').value);
    let inc = (25 / 100) * sAnt
    let resultado = sAnt + inc
    document.getElementById('resultado9').innerHTML = `El precio total es: ${resultado}`
}

function nota() {
    let not = parseFloat(document.getElementById("nota").value)
    let not1 = parseFloat(document.getElementById("nota1").value)
    let not2 = parseFloat(document.getElementById("nota2").value)
    let not3 = parseFloat(document.getElementById("nota3").value)
    let not4 = parseFloat(document.getElementById("nota4").value)
    let nota = not * 0.55
    let nota1 = not1 * 0.55
    let nota2 = not2 * 0.55
    let nota3 = not3 * 0.30
    let nota4 = not4 * 0.15
    let notasz = nota + nota1 + nota2
    let notaa = notasz / 3
    let notaFinal = notaa + nota3 + nota4

    document.getElementById("resultado10").innerHTML = `El estudiante tiene una nota final en algoritmia de ${notaFinal}`
}

function segHor() {
    let hor = parseFloat(document.getElementById("hor").value)
    let min = hor * 60
    let seg = hor * 60 * 60

    document.getElementById("resultado11").innerHTML = `En ${hor} horas, hay ${min} minutos y ${seg} segundos`

}
function mediaGeo() {
    let geo = parseFloat(document.getElementById("geoNum").value)
    let geo1 = parseFloat(document.getElementById("geoNum1").value)
    let geo2 = parseFloat(document.getElementById("geoNum2").value)
    let mg = Math.pow((geo * geo1 * geo2), (1 / 3))
    document.getElementById("resultado12").innerHTML = `La media geometrica de los numeros ${geo},${geo1},${geo2} es ${mg}`
}

function mujHom() {
    let toEst = parseInt(document.getElementById("numTotal").value)
    let numHom = parseInt(document.getElementById("numHombres").value)
    let numMuj = parseInt(document.getElementById("numMujeres").value)
    let toMuje = numMuj / toEst * 100
    let toHom = numHom / toEst * 100
    document.getElementById("resultado13").innerHTML = `El ${toMuje}%  del grupo son  mujeres  y el ${toHom}% son hombres, para un total de ${toEst} estudiantes`
}

function cubo() {
    let cub = parseInt(document.getElementById("cub").value)
    let areaSuperficial = 6 * cub ** 2
    let volumen = cub ** 3
    document.getElementById("resultado14").innerHTML = `Area superficial  es de: ${areaSuperficial} y el volumen del cubo  es ${volumen}`
}

function porSocios() {
    let toInv = parseInt(document.getElementById("totalInver").value)
    let soc = parseInt(document.getElementById("socio1").value)
    let soc1 = parseInt(document.getElementById("socio2").value)
    let soc2 = parseInt(document.getElementById("socio3").value)
    let soci = soc / toInv * 100
    let soci1 = soc1 / toInv * 100
    let soci2 = soc2 / toInv * 100
    document.getElementById("resultado15").innerHTML = `De $${toInv} innvertidos: el primer socio invirtio ${soci}%, el segundo socio ${soci1}% y  el tercero ${soci2}%`
}

function volArEs() {
    let rad = parseFloat(document.getElementById('rad').value);
    let arEs = 4 * 3.1416 * (rad ** 2)
    let voEs = (4 / 3) * 3.1416 * (rad ** 3)
    document.getElementById('resultado16').innerHTML = `El volumen es: ${voEs} y el area es: ${arEs}`
}
function opreadores() {
    contenido.innerHTML = `
    <div>
        <h2>1. Operaciones basicas</h2>
        <label for="numero1">Numero 1:</label><br>
        <input type="number" id="numero1" name="numero1"><br><br>
        <label for="numero2">Numero 2:</label><br>
        <input type="number" id="numero2" name="numero2"><br><br>
        <input type="button" value="Sumar" onclick="sumar()">
        <input type="button" value="Restar" onclick="resta()">
        <input type="button" value="Multiplicar" onclick="multiplicacion()">
        <input type="button" value="Dividir" onclick="division()">
        <p id="resultado"></p>
    </div>
    <div>
        <h2>2. Grados Celsius a grados Fahrenheit</h2>
        <label for="gradC">Grados C:</label><br>
        <input type="number" id="gradC" name="gradC"><br><br>
        <input type="button" value="Convertir a °F" onclick="gradF()">
        <P id="resultado2"></P>
    </div>
    <div>
        <h2> 3. Hipotenusa</h2>
        <label for="cateto1">Cateto 1:</label><br>
        <input type="number" id="cateto1" name="cateto1"><br></br>
        <label for="cateto2">Cateto 2:</label><br>
        <input type="number" id="cateto2" name="cateto2"><br><br>
        <input type="button" value="Hipotenusa" onclick="hipot()">
        <p id="resultado3"></p>
    </div>
    <div>
        <h2>4. Longitud de circunferencias  </h2>
        <label for="longitud">Radio:</label><br>
        <input type="number" id="longitud" name="longitud"><br><br>
        <input type="button" value="Calcular" onclick="longitud()">
        <p id="resultado4"></p>
    </div>
    <div>
        <h2>5. Area de un trapecio</h2>
        <label for="base1">Base 1:</label><br>
        <input type="number" id="base1" name="base1"><br><br>
        <label for="base2">Base 2:</label><br>
        <input type="number" id="base2" name="base2"><br><br>
        <label for="altura">Altura:</label><br>
        <input type="number" id="altura" name="altura"><br><br>
        <input type="button" value="Calcular" onclick="trapecio()">
        <p id="resultado5"></p>
    </div>
    <div>
        <h2>6. Media aritmetica </h2>
        <label for="num1">Numero 1:</label><br>
        <input type="number" id="num1" name="num1">
        <br><br>
        <label for="num2">Numero 2:</label><br>
        <input type="number" id="num2" name="num2">
        <br><br>
        <label for="num3">Numero 3:</label><br>
        <input type="number" id="num3" name="num3"><br><br>
        <input type="button" value="Calcular" onclick="media()">
        <p id="resultado6"></p>
    </div>
    <div>
        <h2>7. 15% de descuento </h2>
        <label for="descuento">Precio Inicial:</label><br>
        <input type="number" id="descuento" name="descuento"><br><br>
        <input type="button" value="Calcular" onclick="descuento()">
        <p id="resultado7"></p>
    </div>
    <div>
        <h2>8. Salario</h2>
        <label for="horas">Horas trabajadas:</label><br>
        <input type="number" id="horas" name="horas"><br><br>
        <br><br>
        <label for="precio">Precio por hora:</label><br>
        <input type="number" id="precio" name="precio"><br><br>
        <input type="button" value="Calcular" onclick="salario()">
        <p id="resultado8"></p>
    </div>
    <div>
        <h2>9. Incremento de 25%</h2>
        <label for="sAnt">Salario anterior:</label><br>
        <input type="number" id="sAnt" name="sAnt"><br><br>
        <input type="button" value="Calcular" onclick="sAnt()">
        <p id="resultado9"></p>
    </div>
    <div>
        <h2>10. Calificacion final</h2>
        <label for="nota">Primera nota parcial</label><br>
        <input type="text" id="nota"><br><br>
        <label for="nota1">Segunda nota parcial</label><br>
        <input type="text" id="nota1"><br><br>
        <label for="nota2">Tercera nota parcial</label><br>
        <input type="text" id="nota2"><br><br>
        <label for="nota3">Nota del examen final</label><br>
        <input type="text" id="nota3"><br><br>
        <label for="nota4">Nota del trabajo final</label><br>
        <input type="text" id="nota4"><br><br>
        <input type="button" value="calcular" onclick="nota()">
        <p id="resultado10"></p>
    </div>
    <div>
        <h2>11. Cantidad de segundos</h2>
        <label for="hor">Ingresa las horas:</label><br>
        <input type="number" id="hor" name="hor"><br><br>
        <input type="button" value="Calcular" onclick="segHor()">
        <p id="resultado11"></p>
    </div>
    <div>
        <h2>12. Media geometrica</h2>

        <label for="geoNum">Ingresa el primer numero</label><br>
        <input type="number" id="geoNum"><br><br>
        <label for="geoNum1">Ingresa el segundo numero </label><br>
        <input type="number" id="geoNum1"><br><br>
        <label for="geoNum2">Ingresa el tercer numero</label><br>
        <input type="number" id="geoNum2"><br><br>
        <input type="button" value="calcular" onclick="mediaGeo()">
        <p id="resultado12"></p>
    </div>
    <div>
        <h2>13. Porcentaje de hombres y de mujeres</h2>
        <label for="numTotal">Ingresa el numero total de estudiantes</label><br>
        <input type="number" id="numTotal"><br><br>
        <label for="numHombres">Ingresa el numero de hombres</label><br>
        <input type="number" id="numHombres"><br><br>
        <label for="numMujeres">Ingresa el numero  de mujeres</label><br>
        <input type="number" id="numMujeres"><br><br>
        <input type="button" value="calcular" onclick="mujHom()">
        <p id="resultado13"></p>

    </div>
    <div>
        <h2>14. Volumen y area de un cubo</h2>
        <label for="cub">Ingresa un lado de longitud</label>
        <input type="number" id="cub">
        <input type="button" value="calcular" onclick="cubo()">
        <p id="resultado14"></p>

    </div>
    <div>
        <h2>15. Portcentaje de inversion de cada socio </h2>
        <label for="toInv">Ingresa el total de capital invertido</label><br>
        <input type="number" id="totalInver"><br><br>
        <label for="soc">Ingresa lo que invirtio el primer socio</label><br>
        <input type="number" id="socio1"><br><br>
        <label for="soc1">Ingresa lo que invirtio el segundo socio</label><br>
        <input type="number" id="socio2"><br><br>
        <label for="soc2">Ingresa lo que invirtio el tercer socio</label><br>
        <input type="number" id="socio3"><br><br>
        <input type="button" value="calcular" onclick="porSocios()">
        <p id="resultado15"></p>


    </div>
    <div>
        <h2>16. Volumen y area de una esfera</h2>
        <label for="rad">Radio:</label>
        <input type="number" id="rad" name="rad">
        <input type="button" value="Calcular" onclick="volArEs()">
        <p id="resultado16"></p>
    </div>
`

}


// Condicionales
const { match } = require("assert");

function apro() {
    let not1 = parseFloat(document.getElementById('not1').value);
    let not2 = parseFloat(document.getElementById('not2').value);
    let not3 = parseFloat(document.getElementById('not3').value);
    let prom = (not1 + not2 + not3) / 3

    if (prom >= 3.3) {
        document.getElementById('resultado1').innerHTML = `El alumno aprobó, su promedio fue: ${prom}`
    }
    else {
        document.getElementById('resultado1').innerHTML = `El alumno no aprobó, su promedio fue: ${prom}`
    }
}

function mayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resl = num1 + num2

    if (resl > 10) {
        document.getElementById('resultado2').innerHTML = `${resl}`
    }
}

function mmc() {
    let num = parseInt(document.getElementById('num').value);
    let resp = ""

    if (num == 0) {
        resp = ` cero`
    } else if (num % 2 == 0) {
        resp = `es par`
    } else {
        resp = `es impar`
    }
    document.getElementById('resultado3').innerHTML = `El número ${num} es ${resp}`
}

function nMay() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let n3 = parseInt(document.getElementById('n3').value);
    let mayor
    if (n1 > n2 && n1 > n3) {
        mayor = n1
    } else if (n2 > n1 && n2 > n3) {
        mayor = n2
    } else {
        mayor = n3
    }
    document.getElementById('resultado4').innerHTML = `El número mayor es: ${mayor}`
}

function npn() {
    let np = parseFloat(document.getElementById('np').value);
    let nn = parseFloat(document.getElementById('nn').value);
    let resl = ""

    if (np > 0 && nn > 0) {
        resl = `${np} ${nn}`
    } else if (np > 0) {
        resl = `${np}`
    } else if (nn > 0) {
        resl = `${nn}`
    }
    document.getElementById('resultado5').innerHTML = `${resl}`
}

function horTra() {
    let hor = parseFloat(document.getElementById('hor').value);

    if (hor > 40) {
        ext = (hor - 40) * 20
        cuar = 40 * 16
        sum = ext + cuar
        document.getElementById('resultado6').innerHTML = `${sum}`
    } else {
        tot = hor * 16
        document.getElementById('resultado6').innerHTML = `${tot}`
    }
}

function nomSig() {
    let nom = document.getElementById('nom').value;
    let sig = document.getElementById('sig').value;
    let res

    if (sig === "aries") {
        res = `${nom}`
    } else {
        res = `${nom} ${sig}`
    }
    document.getElementById('resultado7').innerHTML = `${res}`
}

function neg() {
    let nomb = document.getElementById('nomb').value;
    let eda = parseInt(document.getElementById('eda').value);
    let gen = document.getElementById('gen').value;
    let resp

    if (gen === "Masculino" || gen === "masculino" && eda >= 18) {
        resp = `${nomb}`
    } else {
        resp = `${nomb} ${eda} ${gen}`
    }
    document.getElementById('resultado8').innerHTML = `${resp}`
}

function camis() {
    let cami = parseInt(document.getElementById('cami').value);
    let resul
    let tot = 25000 * cami

    if (cami < 3) {
        des1 = (10 / 100) * tot
        resul = tot - des1
    } else {
        des2 = (20 / 100) * tot
        resul = tot - des2
    }
    document.getElementById('resultado9').innerHTML = `${resul}`
}
function suerte() {
    let com = parseInt(document.getElementById('com').value);
    const numSuerte = Math.floor(Math.random() * 100) + 1;
    let resp

    if (numSuerte < 74) {
        desc = (15 / 100) * com
        resp = `su descuento es del 15%, se le descontó ${desc} de su compra total`
    } else {
        desc = (20 / 100) * com
        resp = `su descuento es del 20%, se le descontó ${desc} de su compra total`
    }
    document.getElementById('resultado10').innerHTML = `El número fue: ${numSuerte}, ${resp}`
}

function llantas() {
    let llan = parseInt(document.getElementById('llan').value);
    let tot

    if (llan >= 5) {
        tot = llan * 700
    } else {
        tot = llan * 800
    }
    document.getElementById('resultado11').innerHTML = `${tot}`
}

function des2() {
    let des2 = parseInt(document.getElementById('des2').value);
    let resp
    let res

    if (des2 > 1000) {
        res = (20 / 100) * des2
        resp = des2 - res
    } else {
        resp = des2
    }
    document.getElementById('resultado12').innerHTML = `${resp}`
}

function asc() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resp

    if (numero1 > numero2) {
        resp = `${numero1} <br> ${numero2}`
    } else if (numero1 == numero2) {
        resp = `${numero1} <br> ${numero2} <br> Los número son iguales`
    } else {
        resp = `${numero2} <br> ${numero1}`
    }
    document.getElementById('resultado14').innerHTML = `${resp} `
}



function cara() {
    opciones = ['<img src="https://www.banrep.gov.co/sites/default/files/paginas/nueva_1000_sello_235.jpg">', '<img src="https://www.banrep.gov.co/sites/default/files/paginas/nueva_1000_cara_235.jpg">']
    const moneda = opciones[Math.floor(Math.random() * opciones.length)];
    document.getElementById("resultado15").innerHTML = `${moneda}`

}

function calcularDescuento() {
    let moto = document.getElementById('moto').value
    let valor = parseFloat(document.getElementById('precio').value)
    let mensaje = ""
    let valorDesc = ""
    let valorTo = ""
    if (moto === 'Honda') {
        valorDesc = valor * 0.05
        valorTo = valor - valorDesc
        mensaje = `El valor con descuento de la moto marca ${moto} es: ${valorTo}`
        document.getElementById("resultado17").innerHTML = `${mensaje}`
    } else if (moto === 'Yamaha') {
        valorDesc = valor * 0.08
        valorTo = valor - valorDesc
        mensaje = `El valor con descuento de la moto marca ${moto} es: ${valorTo}`
        document.getElementById("resultado17").innerHTML = `${mensaje}`
    } else if (moto === 'Suzuki') {
        valorDesc = valor * 0.1
        valorTo = valor - valorDesc
        mensaje = `El valor con descuento de la moto marca ${moto} es: ${valorTo}`
        document.getElementById("resultado17").innerHTML = `${mensaje}`
    } else {
        valorDesc = valor * 0.02
        valorTo = valor - valorDesc
        mensaje = `El valor con descuento de la moto marca ${moto} es: ${valorTo}`
        document.getElementById("resultado16").innerHTML = `${mensaje}`
    }


}

function colorBola() {
    opciones = ['⚪', '🟢', '🟡', '🔵', '🔴']
    const colorDes = opciones[Math.floor(Math.random() * opciones.length)];
    document.getElementById("resp1").innerHTML = `${colorDes}`
    let compra = parseFloat(document.getElementById('compra').value)
    if (colorDes === "⚪") {
        document.getElementById('resultado17').innerHTML = `No tienes descuento por lo tanto pagas: ${compra}`
    } else if (colorDes === "🟢") {
        document.getElementById('resultado17').innerHTML = `Con el 10% de descuento pagas: ${compra - compra * 0.10}`
    } else if (colorDes === "🟡") {
        document.getElementById('resultado17').innerHTML = `Con el 25% de descuento pagas: ${compra - compra * 0.25}`
    } else if (colorDes === "🔵") {
        document.getElementById('resultado17').innerHTML = `Con el 50% de descuento pagas: ${compra - compra * 0.50}`
    } else {
        document.getElementById('resultado17').innerHTML = ` Felicidades tu descuento es del 100% no pagas nada `
    }
}

function verificarOrdenCreciente() {
    let num1 = parseFloat(document.getElementById('numr1').value)
    let num2 = parseFloat(document.getElementById('numr2').value)
    let num3 = parseFloat(document.getElementById('numr3').value)

    if (num1 < num2 && num2 < num3) {
        document.getElementById('resultado18').innerHTML = `Los números están en orden creciente. `
    } else {
        document.getElementById('resultado18').innerHTML = `Los números no están en orden creciente.`
    }
}

function verificarSuma() {
    let num1 = parseInt(document.getElementById('nume1').value)
    let num2 = parseInt(document.getElementById('nume2').value)
    let num3 = parseInt(document.getElementById('nume3').value)

    if (num1 + num2 === num3) {
        document.getElementById('resultado19').innerHTML = `El tercer número es igual a la suma del primero y el segundo.`
    } else {
        document.getElementById('resultado19').innerHTML = `El tercer número no es igual a la suma del primero y el segundo.`
    }
}

function verificarMult() {
    let num1 = parseInt(document.getElementById('numer1').value)
    let num2 = parseInt(document.getElementById('numer2').value)
    let num3 = parseInt(document.getElementById('numer3').value)

    if (num1 * num2 === num3) {
        document.getElementById('resultado20').innerHTML = `El tercer número es igual a la multiplicacion del primero y el segundo.`
    } else {
        document.getElementById('resultado20').innerHTML = `El tercer número no es igual a la multiplicacion del primero y el segundo.`
    }
}


function horaUn() {

    let hor = parseFloat(document.getElementById('ha').value)
    let min = parseFloat(document.getElementById('mt').value)
    let seg = parseFloat(document.getElementById('ss').value)

    document.getElementById('resultado21').innerHTML = `La hora un segundo despues es ${hor}:${min}:${seg + 1}`

}

function parImpar() {
    let valor1 = parseInt(document.getElementById("par1").value);
    let valor2 = parseInt(document.getElementById("par2").value);
    mensaje = ""

    if (valor1 % 2 === 0 && valor2 % 2 === 0) {
        mensaje = `El numero ${valor1} y el numero ${valor2} son pares`
    } else if (valor2 % 2 === 0 && valor1 % 2 != 0) {
        mensaje = `El numero ${valor1} es impar y el numero ${valor2} es par`
    } else if (valor1 % 2 === 0 && valor2 % 2 != 0) {
        mensaje = `El numero ${valor1} es par y el numero ${valor2} es impar`
    }

    document.getElementById("resultado22").innerHTML = `${mensaje}`


}

function condicionales() {
    contenido.innerHTML = `   
           <div>
            <h2>1. Aprueba o no</h2>
            <label for="not1">Nota 1:</label>
            <input type="number" id="not1" name="not1">
            <label for="not2">Nota 2:</label>
            <input type="number" id="not2" name="not2">
            <label for="not3">Nota 3:</label>
            <input type="number" id="not3" name="not3">
            <input type="button" value="Calcular" onclick="apro()">
            <p id="resultado1"></p>
        </div>
        <div>
            <h2>2. Mayor que 10</h2>
            <label for="num1">Número 1:</label>
            <input type="number" id="num1" name="mun1">
            <label for="num2">Número 2:</label>
            <input type="number" id="num2" name="num2">
            <input type="button" value="Calcular" onclick="mayor()">
            <p id="resultado2"></p>
        </div>
        <div>
            <h2>3. N° mayor, menor o cero</h2>
            <label for="num">Número:</label>
            <input type="number" id="num" name="num">
            <input type="button" value="Calcular" onclick="mmc()">
            <p id="resultado3"></p>
        </div>
        <div>
            <h2>4. N° mayor</h2>
            <label for="n1">Número 1:</label>
            <input type="number" id="n1" name="n1">
            <label for="n2">Número 2:</label>
            <input type="number" id="n2" name="n2">
            <label for="n3">Número 3:</label>
            <input type="number" id="n3" name="n3">
            <input type="button" value="Calcular" onclick="nMay()">
            <p id="resultado4"></p>
        </div>
        <div>
            <h2>5. N° positivo</h2>
            <label for="np">Número 1:</label>
            <input type="number" id="np" name="np">
            <label for="nn">Número 2:</label>
            <input type="number" id="nn" name="nn">
            <input type="button" value="Calcular" onclick="npn()">
            <p id="resultado5"></p>
        </div>
        <div>
            <h2>6. Salario horas trabajadas</h2>
            <label for="hor">Número de horas trabajadas:</label>
            <input type="number" id="hor" name="hor">
            <input type="button" value="Calcular" onclick="horTra()">
            <p id="resultado6"></p>
        </div>
        <div>
            <h2>7. Nombre y signo</h2>
            <label for="nom">Nombre:</label>
            <input type="text" id="nom" name="nom">
            <label for="sig">Signo zodiacal:</label>
            <input type="text" id="sig" name="sig">
            <input type="button" value="Calcular" onclick="nomSig()">
            <p id="resultado7"></p>
        </div>
        <div>
            <h2>8. Nombre, edad y genero</h2>
            <label for="nomb">Nombre:</label>
            <input type="text" id="nomb" name="nomb">
            <label for="eda">Edad:</label>
            <input type="number" id="eda" name="eda">
            <label for="gen">Genero:</label>
            <input type="text" id="gen" name="gen" placeholder="Femenino o Masculino">
            <input type="button" value="Calcular" onclick="neg()">
            <p id="resultado8"></p>
        </div>
        <div>
            <h2>9. Camisas descuento</h2>
            <label for="cami">Número de camisas:</label>
            <input type="number" id="cami" name="cami">
            <input type="button" value="Calcular" onclick="camis()">
            <p id="resultado9"></p>
        </div>
        <div>
            <h2>10. Descuento por tu suerte</h2>
            <label for="com">Total de compra:</label>
            <input type="number" id="com" name="com">
            <button onclick="suerte()" id="btn">¡15% ó 20% de descuento!</button>
            <p id="resultado10"></p>
        </div>
        <div>
            <h2>11. Descuento en llantas</h2>
            <label for="llan">Cantidad de llantas:</label>
            <input type="number" id="llan" name="llan">
            <input type="button" value="Calcular" onclick="llantas()">
            <p id="resultado11"></p>
        </div>
        <div>
            <h2>12. Descuento 20% si la compra supera los S/. 1000</h2>
            <label for="des2">Total de compra:</label>
            <input type="number" id="des2" name="des2">
            <input type="button" value="Calcular" onclick="des2()">
            <p id="resultado12"></p>
        </div>
        <div>
            <h2>14. Número ascendente</h2>
            <label for="numero1">Numero 1:</label>
            <input type="number" id="numero1" name="numero1">
            <label for="numero2">Numero 2:</label>
            <input type="number" id="numero2" name="numero2">
            <input type="button" value="Organizar" onclick="asc()">
            <p id="resultado14"></p>
        </div>
    
        <div>
            <h2>15. cara o sello</h2>
            <div id="resultado15"></div>
            <input type="button" value="tirar la moneda" id="acaraSe" onclick="cara()">
    
        </div>
        <div>
            <h2>16. Descuento de motos </h2>
            <label for="moto">Ingresa la marca de la moto </label>
            <input type="text" id="moto">
            <label for="precio">Inngresa el valor de la moto </label>
            <input type="number" id="precio">
            <input type="button" value="calcular" onclick="calcularDescuento()">
            <p id="resultado16"></p>
        </div>
        <div>
            <h2>17. Descuento segun el color</h2>
            <label for="compra">Ingresa el total de la compra</label>
            <input type="number" id="compra">
            <input type="button" onclick="colorBola()" value="aplicar Descuento">
            <p id="resp1"></p>
            <p id="resultado17"></p>
        </div>
        <div>
            <h2>18. Detectar orden creciente</h2>
            <label for="numr1">Ingresa el primer numero</label>
            <input type="number" id="numr1">
            <label for="numr2">Ingresa el segundo numero</label>
            <input type="number" id="numr2">
            <label for="numr3">Ingresa el tercer numero</label>
            <input type="number" id="numr3">
            <input type="button" value="calcular" onclick="verificarOrdenCreciente()">
            <p id="resultado18"></p>
        </div>
        <div>
            <h2>19. La suma de los dos primeros numeros es igual al tercer numero</h2>
            <label for="nume1">Ingresa el primer numero</label>
            <input type="number" id="nume1">
            <label for="nume2">Ingresa el segundo numero</label>
            <input type="number" id="nume2">
            <label for="nume3">Ingresa el tercer numero</label>
            <input type="number" id="nume3">
            <input type="button" value="calcular" onclick=" verificarSuma()">
            <p id="resultado19"></p>
    
        </div>
        <div>
            <h2>20. La multiplicacion de los dos primeros numeros es igual al tercer numero</h2>
            <label for="numer1">Ingresa el primer numero</label>
            <input type="number" id="numer1">
            <label for="numer2">Ingresa el segundo numero</label>
            <input type="number" id="numer2">
            <label for="numer3">Ingresa el tercer numero</label>
            <input type="number" id="numer3">
            <input type="button" value="calcular" onclick="verificarMult()">
            <p id="resultado20"></p>
    
        </div>
    
        <div>
            <h2>21. La hora un segundo despues</h2>
            <label for="ha">Ingresa la hora</label>
            <input type="number" id="ha">
            <label for="mt">Ingresa los minutos</label>
            <input type="number" id="mt">
            <label for="ss">Ingresa los segundos</label>
            <input type="number" id="ss">
            <input type="button" value="calcular" onclick="horaUn()">
            <p id="resultado21"></p>
    
        </div>
        <div>
            <h2>22. Determinar si son par o parImpar </h2>
            <label for="par1">Ingresa el numero 1</label>
            <input type="number" id="par1">
            <label for="par2">Ingresa el nuemero 2</label>
            <input type="number" id="par2">
            <input type="button" value="calcular" onclick="parImpar()">
            <p id="resultado22"></p> 
        </div>
    `
}

// juego del numero aleatorio

function numAle() {
    contenido.innerHTML = ` <div id="cont">
    <p>Intenta adivinar un numero entre 1 y 100</p>
    <input type="text" id="txtNoIngresado">
    <button onclick="compruebaDatos()" id="btnNumIngrsado">Adivinar</button>
    <p id="message"></p>
    <p id="num1" class="num1"></p>
    <p id="num"></p>
    </div>`
    const numSecre = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;
    let numInten = intentos
    
    document.getElementById("txtNoIngresado").addEventListener('keypress', function (event) {
        if (event.key == 'Enter') {
            compruebaDatos();
    
        }
    });
    
    function compruebaDatos() {
        let numIngresado;
        let continuar;
        let pregunCont = false;
        do {
            numIngresado = parseInt(document.getElementById("txtNoIngresado").value)
    
            if (isNaN(numIngresado) || numIngresado < 1 || numIngresado > 100) {
                mensaje1('Por favor ingresa un numero valido entre 1 y 100.', ' 👿')
                return;
            }
    
    
            if (numIngresado == numSecre) {
                mensaje1('Felicidades insecto', '😒')
                adivinado = true;
                document.getElementById("txtNoIngresado").disabled = true;
                document.getElementById("btnNumIngrsado").disabled = true;
                document.getElementById("btnNumIngrsado").classList.add('success');
                return;
            } else if (numIngresado < numSecre) {
                mensaje1('El numero ingresado es demasiado chico intenta nuevamente', '😘')
            } else {
                mensaje1('El numero ingresado es demasiado alto intenta nuevamente', '😁')
            }
            intentos++;
    
            if (intentos % 6 === 0) {
                numInten = intentos - 1
                if (!pregunCont) {
                    continuar = confirm('Se han agotado los 6 intentos. deseas seguir intentando? ');
    
                    if (!continuar) {
                        document.getElementById("txtNoIngresado").disabled = true;
                        document.getElementById("btnNumIngrsa/do").disabled = true;
                        document.getElementById("btnNumIngrsado").classList.add('success');
    
                        console.log(`salida pregunCont continuar ${pregunCont} , ${continuar}`);
                        return;
                    }
                    pregunCont = true;
                    return
                } else {
                    return;
                }
            }
            seIntentos(intentos);
            console.log(`${intentos}`)
        } while (!adivinado && continuar);
    
    
        function mensaje1(msg, emoji) {
            document.getElementById("message").textContent = msg;
            document.getElementById("message").innerHTML = `<span style ="margin-right: 10px;">${emoji}</span>${msg}`
    
        }
        function seIntentos(intentos) {
            const emojisIntentos = "🟥".repeat(intentos + 0 % 6) + "😊".repeat(6 - (intentos % 6))
            document.getElementById("num1").innerHTML = `${emojisIntentos}+<br>`
            const numInten = intentos
            document.getElementById('num').textContent = emojisIntentos
            document.getElementById('num1').innerHTML = `<p>${numInten}</p>`
        }
    
    
    }
    
    
}

//bucles 
const { doesNotMatch } = require("assert");

function sumaPrimerosN() {
    let n = parseInt(document.getElementById('nu1').value)
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    document.getElementById('resultado').innerHTML = `${suma}`
}
function operacion() {
    let n = parseInt(document.getElementById('nu2').value)
    let mensaje = ""
    let suma = 0;
    let pro = 1;

    for (let i = 1; i <= n; i++) {
        if (n > 10) {
            pro *= i;

            mensaje = pro
        } else {
            suma += i;
            mensaje = suma
        }
        document.getElementById('resultado1').innerHTML += `,${mensaje}`
    }
}

function mulTres() {
    let n = parseInt(document.getElementById('nu3').value)

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            document.getElementById('resultado2').innerHTML += `,${i}`
        } else {

        }

    }
}

function mulCinco() {
    let n = parseInt(document.getElementById('nu4').value)

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            document.getElementById('resultado3').innerHTML += `,${i}`
        } else {

        }

    }
}
// para preguntar
function sumAlter() {
    let n = parseInt(document.getElementById('nu5').value)
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            suma -= i;
        } else {
            suma += i;
        }
    }
    document.getElementById('resultado4').innerHTML = `${suma}`
}

function sumPares() {
    let n = parseInt(document.getElementById('nu6').value)
    let m = parseInt(document.getElementById('nu7').value)
    let suma = 0
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            suma += i
            document.getElementById('resultado5').innerHTML += `,${suma}`
        }
    }

}
//bucle que calcule numeros primos desde 1 hasta  raiz cuadrada de n y verificar si es divisible por cada uno de ellos
function esPrimo() {
    let n = parseInt(document.getElementById('nump').value);
    if (n <= 1) {
        document.getElementById('resultado6').innerHTML = `El numero ${n}, es compuesto`;
        return;
    }
    if (n === 2) {
        document.getElementById('resultado6').innerHTML = `El numero ${n}, es primo`;
        return;
    }
    let raiz = Math.sqrt(n);
    for (let i = 2; i <= raiz; i++) {
        if (n % i === 0) {
            document.getElementById('resultado6').innerHTML = `El numero ${n}, es compuesto`;
            return;
        }
    }
    document.getElementById('resultado6').innerHTML = `El numero ${n}, es primo`;
}

function factorial() {
    let num = parseInt(document.getElementById('numf').value)
    let i = 1
    let fac = 1
    for (i; i <= num; i++) {
        fac *= i
    }
    document.getElementById('resultado7').innerHTML = `El factorial de ${num} es ${fac}`
}

function sumFactorial() {
    let num = parseInt(document.getElementById('numf1').value)
    let num1 = parseInt(document.getElementById('numf2').value)
    let i = 1
    let j = 1
    let fac = 1
    let fac1 = 1
    for (i; i <= num; i++) {
        fac *= i
    }
    for (j; j <= num1; j++) {
        fac1 *= j
    }

    document.getElementById('resultado8').innerHTML = `La suma de los factoriales ${fac} y ${fac1} es ${fac + fac1}`
}

function fibonacci() {
    let num = parseInt(document.getElementById('numF').value)
    let fib = 0
    let fib2 = 1
    document.getElementById('resultado9').innerHTML += `${fib},${fib2}`

    let sum = fib + fib2
    while (sum <= num) {
        document.getElementById('resultado9').innerHTML += `,${sum}`
        fib = fib2
        fib2 = sum
        sum = fib + fib2

    }

}

function sumPar() {
    let num = parseInt(document.getElementById('numPar').value)
    let sum = 0
    let cont = 0
    let i = 1


    while (i < num) {
        i++
        if (i % 2 === 0) {
            sum += i
            cont++
        }
    }
    document.getElementById('resultado10').innerHTML = `La suma de los numeros pares es ${sum} el total de pares es ${cont} `
}

function sumInPar() {
    let num = parseInt(document.getElementById('numInPar').value)
    let num1 = parseInt(document.getElementById('numInPar1').value)
    let sum = 0
    let cont = 0
    let i = num


    while (i <= num1) {

        if (i % 2 != 0) {
            sum += i
            cont++
        }
        i++
    }
    document.getElementById('resultado11').innerHTML = `La suma de los numeros impares es ${sum} el total de impares es ${cont} `
}

function numerosD() {
    let num = parseInt(document.getElementById('numD').value)
    let num1 = parseInt(document.getElementById('numD1').value)
    let i = num

    while (i <= num1) {
        document.getElementById('resultado12').innerHTML += `,${i}`
        i++
    }
}

function sumDeNumer() {
    let num = parseInt(document.getElementById('nums').value)
    let num1 = parseInt(document.getElementById('nums1').value)
    let sum = 0
    let i = num

    while (i <= num1) {
        sum += i
        i++
    }
    document.getElementById('resultado13').innerHTML = `La suma de los numeros desde ${num} hasta ${num1} es: ${sum} `
}
function salir() {
    let respuesta;
    do {
        respuesta = prompt("¿Desea salir (S/N)?");
    } while (respuesta.toUpperCase() !== "S");

}

function sumCua() {
    let suma = 0

    for (i = 1; i < 100; i++) {
        let mul = i * i
        suma += mul
    }
    document.getElementById('resultado14').innerHTML = ` La suma de los cuadrados de 1 a 100 es ${suma}`
}

function calMedia() {
    let suma = 0;
    let conT = 4;
    let num;
    let num1;
    let num2;
    for (let i = 1; i <= conT; i++) {
        num = parseInt(document.getElementById('numMe').value);
        num1 = parseInt(document.getElementById('numMe1').value);
        num2 = parseInt(document.getElementById('numMe2').value);
        suma = num+num1+num2
    }

    let media = suma / conT;
    document.getElementById("resultado15").innerHTML = `La media de los números introducidos es ${media}`;
}


function calcularMedia() {
    let suma = 0;
    let contador = 0;
    let numero = parseInt(prompt("Introduce un número o 0 para terminar"));

    while (numero != 0) {
        suma += numero;
        contador++;
        numero = parseInt(prompt("Introduce un número o 0 para terminar"));
    }

    if (contador != 0) {
        let media = suma / contador;
        document.getElementById("resultado16").innerHTML = `La media de los números introducidos es ${media}`
    } else {
        document.getElementById("resultado16").innerHTML = `No se introdujo ningún número`
    }
}


function htBucles(){
    contenido.innerHTML = `<div>
    <div>
        <h2>1. Suma de los primeros N</h2>
        <label for="nu1">Ingresa un numero</label>
        <input type="number" id="nu1">
        <input type="button" value="sumarN" onclick="sumaPrimerosN()">
        <p id="resultado"></p>
    </div>
    <div>
        <h2>2. Mayor que 10 se multiplica y si es menor se suma</h2>
        <label for="nu2">Ingresa un numero</label>
        <input type="number" id="nu2">
        <input type="button" value="calcular" onclick="operacion()">
        <p id="resultado1"></p>
    </div>
    <div>
        <h2>3. Multiplos de 3 de 1 hasta numero ingresado</h2>
        <label for="nu3">Ingresa un numero</label>
        <input type="number" id="nu3">
        <input type="button" value="calcular" onclick="mulTres()">
        <p id="resultado2"></p>
    </div>
    <div>
        <h2>4. Multiplos de 5 de 1 hasta numero ingresado</h2>
        <label for="nu4">Ingresa un numero</label>
        <input type="number" id="nu4">
        <input type="button" value="calcular" onclick="mulCinco()">
        <p id="resultado3"></p>
    </div>
    <div>
        <h2>5. Sumar alternante </h2>
        <label for="nu5">Ingresa un numero</label>
        <input type="number" id="nu5">
        <input type="button" value="calcular" onclick="sumAlter()">
        <p id="resultado4"></p>
    </div>
    <div>
        <h2>6. Sumar pares desde numero 1 a numero 2 </h2>
        <label for="nu6">Ingresa el primer numero</label>
        <input type="number" id="nu6">
        <label for="nu7">Ingresa el segundo numero</label>
        <input type="number" id="nu7">
        <input type="button" value="calcular" onclick="sumPares()">
        <p id="resultado5"></p>
    </div>
    <div>
        <h2>7. Determinar si el numero es primo o compuesto </h2>
        <label for="nump">Ingresa el numero</label>
        <input type="number" id="nump">
        <input type="button" value="calcular" onclick="esPrimo()">
        <p id="resultado6"></p>
    </div>
    <div>
        <h2>8. Factorial  </h2>
        <label for="numf">Ingresa el numero</label>
        <input type="number" id="numf">
        <input type="button" value="calcular" onclick="factorial()">
        <p id="resultado7"></p>
    </div>
    <div>
        <h2>9. Suma de Factoriales  </h2>
        <label for="numf1">Ingresa el primer numero</label>
        <input type="number" id="numf1">
        <label for="numf2">Ingresa el segundo numero</label>
        <input type="number" id="numf2">
        <input type="button" value="calcular" onclick="sumFactorial()">
        <p id="resultado8"></p>
    </div>
    <div>
        <h2>10. Fibonacci  </h2>
        <label for="numF">Ingresa el numero</label>
        <input type="number" id="numF">
        <input type="button" value="calcular" onclick="fibonacci()">
        <p id="resultado9"></p>
    </div>
    <div>
        <h2>11. Suma de numeros pares  </h2>
        <label for="numPar">Ingresa el numero</label>
        <input type="number" id="numPar">
        <input type="button" value="calcular" onclick="sumPar()">
        <p id="resultado10"></p>
    </div>
    <div>
        <h2>12. Suma de numeros impares desde numero 1 a numero 2  </h2>
        <label for="numInPar">Ingresa el primer numero</label>
        <input type="number" id="numInPar">
        <label for="numInPar1">Ingresa el segundo numero</label>
        <input type="number" id="numInPar1">
        <input type="button" value="calcular" onclick="sumInPar()">
        <p id="resultado11"></p>
    </div>
    <div>
        <h2>13. colocar en pantalla los numeros desde numero 1 a numero 2  </h2>
        <label for="numD">Ingresa el primer numero</label>
        <input type="number" id="numD">
        <label for="numD1">Ingresa el segundo numero</label>
        <input type="number" id="numD1">
        <input type="button" value="calcular" onclick="numerosD()">
        <p id="resultado12"></p>
    </div>
    <div>
        <h2>14. Sumar los numeros desde numero 1 a numero 2  </h2>
        <label for="nums">Ingresa el primer numero</label>
        <input type="number" id="nums">
        <label for="nums1">Ingresa el segundo numero</label>
        <input type="number" id="nums1">
        <input type="button" value="calcular" onclick="sumDeNumer()">
        <p id="resultado13"></p>
    </div>
    <div>
        <h2>15. Presiona s para salir</h2>
        <input type="button" value="salir" onclick="salir()">
    </div>
    <div>
        <h2>16. Suma del cuadrado de 1 a 100</h2>
        <p id="resultado14"></p>
        <input type="button" value="cuadrado" onclick="sumCua()">
    </div>
    
    <div id="resul">
        <h2>17. calcular media</h2>
        <label for="numMe">ingresa el primer numero </label>
        <input type="number" id="numMe">
        <label for="numMe1">ingresa el primer numero </label>
        <input type="number" id="numMe1">
        <label for="numMe2">ingresa el primer numero </label>
        <input type="number" id="numMe2">
            <input type="button" value="media" onclick="calMedia()">
            <p id="resultado15"></p>
    </div>
    <div>
        <h2>18. calcular media </h2>
        
        <input type="button" value="media" onclick="calcularMedia()">
        <p id="resultado16"></p>
        
    </div>
  </div>`
}
//codigo funciones
function htFunciones(){
    contenido.innerHTML =`<div>
    <h1>FUNCIONES</h1>
    <div>
        <h2>1. Calcular el cubo</h2>
        <label for="numCub">Numero:</label>
        <input type="number" id="numCub">
        <input type="button" value="Calcular" onclick="calCub()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado1"></p>
        <hr>
    </div>
    <div>
        <h2>2. De kilometros a metros</h2>
        <label for="numKil">Distancia en km:</label>
        <input type="number" id="numKil">
        <input type="button" value="Calcular" onclick="calMet()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado2"></p>
        <hr>
    </div>
    <div>
        <h2>3. -1, 0, 1</h2>
        <label for="negPos">Número:</label>
        <input type="number" id="negPos">
        <input type="button" value="Calcular" onclick="posNeg()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado3"></p>
        <hr>
    </div>
    <div>
        <h2>4. Número menor</h2>
        <label for="n1">Número 1:</label>
        <input type="number" id="n1">
        <label for="n2">Número 2:</label>
        <input type="number" id="n2">
        <input type="button" value="Calcular" onclick="mayMen()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado4"></p>
        <hr>
    </div>
    <div>
        <h2>5. Suma, resta, multiplicacion y division</h2>
        <label for="nu1">Número 1:</label>
        <input type="number" id="nu1">
        <label for="nu2">Número 2:</label>
        <input type="number" id="nu2">
        <input type="button" value="Calcular" onclick="srmd()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado5"></p>
        <hr>
    </div>
    <div>
        <h2>6. Suma y multiplicación</h2>
        <label for="num1">Número 1:</label>
        <input type="number" id="num1">
        <label for="num2">Número 2:</label>
        <input type="number" id="num2">
        <label for="num3">Número 3:</label>
        <input type="number" id="num3">
        <br><br>
        <input type="button" value="Calcular" onclick="suMu()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado6"></p>
        <hr>
    </div>
    <div>
        <h2>7. Área y perímetro de un rectángulo</h2>
        <label for="base">Base:</label>
        <input type="number" id="base">
        <label for="altura">Altura:</label>
        <input type="number" id="altura">
        <input type="button" value="Calcular" onclick="bAl()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado7"></p>
        <hr>
    </div>
    <div>
        <h2>8. Área de un cuadrado</h2>
        <label for="lad">Lado:</label>
        <input type="number" id="lad">
        <input type="button" value="Calcular" onclick="arCu()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado8"></p>
        <hr>
    </div>
    <div>
        <h2>9. 1 si es primo, 0 sino</h2>
        <label for="prim">Número:</label>
        <input type="number" id="prim">
        <input type="button" value="Calcular" onclick="numPr()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado9"></p>
        <hr>
    </div>
    <div>
        <h2>10. Aprobado o no</h2>
        <label for="nota1">Nota 1:</label>
        <input type="number" id="nota1" min="1" max="20">
        <label for="nota2">Nota 2:</label>
        <input type="number" id="nota2" min="1" max="20">
        <label for="nota3">Nota 3:</label>
        <input type="number" id="nota3" min="1" max="20">
        <br><br>
        <input type="button" value="Calcular" onclick="promAN()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado10"></p>
        <hr>
    </div>
    <div>
        <h2>11. De segundos a horas, minutos y segundos</h2>
        <label for="segund">Segundos:</label>
        <input type="number" id="segund">
        <input type="button" value="Calcular" onclick="convertir1()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado11"></p>
        <hr>
    </div>
    <div>
        <h2>12. Par o impar</h2>
        <label for="numer">Número:</label>
        <input type="number" id="numer">
        <input type="button" value="Calcular" onclick="parImp()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado12"></p>
        <hr>
    </div>
    <div>
        <h2>13. De minutos a horas, minutos y segundos</h2>
        <label for="minut">Minutos:</label>
        <input type="number" id="minut">
        <input type="button" value="Calcular" onclick="convertir2()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado13"></p>
        <hr>
    </div>
    <div>
        <h2>14. Valor absoluto</h2>
        <label for="abso">Número:</label>
        <input type="number" id="abso">
        <input type="button" value="Calcular" onclick="valAbs()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado14"></p>
        <hr>
    </div>
    <div>
        <h2>15. Divisible o no</h2>
        <label for="numer1">Número:</label>
        <input type="number" id="numer1">
        <label for="numer2">Dividido por:</label>
        <input type="number" id="numer2">
        <input type="button" value="Calcular" onclick="divisi()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado15"></p>
        <hr>
    </div>
    <div>
        <h2>16. Número menor</h2>
        <label for="numero1">Número 1:</label>
        <input type="number" id="numero1" required>
        <label for="numer02">Número 2:</label>
        <input type="number" id="numero2" required>
        <label for="numer3">Número 3:</label>
        <input type="number" id="numero3" required>
        <br><br>
        <input type="button" value="Calcular" onclick="numMen()">
        <hr class="respuesta">
        <h4>Respuesta:</h4>
        <p id="resultado16"></p>
        <hr>
    </div>
</div>`
}

function calCub() {
    let numCub = parseFloat(document.getElementById('numCub').value);
    let resp

    resp = Math.pow(numCub, 3)
    document.getElementById('resultado1').innerHTML = `El cubo del número ${numCub} es: ${resp}`
}

function calMet() {
    let numKil = parseFloat(document.getElementById('numKil').value);
    let resp

    resp = numKil * 1000
    document.getElementById('resultado2').innerHTML = `En ${numKil} km hay ${resp} m.`
}

function posNeg() {
    let negPos = parseFloat(document.getElementById('negPos').value);
    let resp

    if (negPos == 0) {
        resp = 0
    } else if (negPos > 0) {
        resp = 1
    } else {
        resp = -1
    }
    document.getElementById('resultado3').innerHTML = `${resp}`
}

function mayMen() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resp

    if (n1 > n2) {
        resp = n2
    } else {
        resp = n1
    }
    document.getElementById('resultado4').innerHTML = `El número menor es: ${resp}`
}

function srmd() {
    let nu1 = parseFloat(document.getElementById('nu1').value);
    let nu2 = parseFloat(document.getElementById('nu2').value);

    let suma = nu1 + nu2
    let resta = nu1 - nu2
    let mult = nu1 * nu2
    let div = nu1 / nu2
    let res = nu1 % nu2

    document.getElementById('resultado5').innerHTML = `El resultado de la suma es: ${suma}
    <br> El resultado de la resta es: ${resta}
    <br> El resultado de la multiplicación es: ${mult}
    <br> El resultado de la división es: ${div}
    <br> El resido de la división es: ${res}`
}

function suMu() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let sum = num1 + num2 + num3
    let mult = num1 * num2 * num3

    document.getElementById('resultado6').innerHTML = `El resultado de la suma es: ${sum}
    <br> El resultado de la multiplicación es: ${mult}`
}

function bAl() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let area = (2 * base) + (2 * altura)
    let peri = base * altura

    document.getElementById('resultado7').innerHTML = `El área es: ${area}
    <br> El perimetro es: ${peri}`
}

function arCu() {
    let lad = parseFloat(document.getElementById('lad').value);

    let resp = lad ** 2

    document.getElementById('resultado8').innerHTML = `El área del cuadrado es: ${resp}`
}

function numPr() {
    let prim = parseFloat(document.getElementById('prim').value);
    let resp

    if (prim == 2 || prim == 3 || prim == 5) {
        resp = 1
    }
    else if (prim % 2 == 0 || prim % 3 == 0 || prim % 5 == 0 || prim == 1) {
        resp = 0
    }
    else {
        resp = 1
    }
    document.getElementById('resultado9').innerHTML = `${resp}`
}

function promAN() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let res
    let prom = (nota1 + nota2 + nota3) / 3

    if (nota1 > 20 || nota2 > 20 || nota3 > 20 || nota1 < 0 || nota2 < 0 || nota3 < 0) {
        alert('La nota no debe ser menor que 0 ó mayor que 20')
    }
    else if (prom <= 10.5) {
        res = 'Mejore la nota'
        document.getElementById('resultado10').innerHTML = `Su promedio es: ${prom}
            <br> ${res}`
    } else {
        res = 'Aprobado'
        document.getElementById('resultado10').innerHTML = `Su promedio es: ${prom}
            <br> ${res}`
    }
}

function convertir1() {
    let segund = parseInt(document.getElementById('segund').value);
    const horas = Math.floor(segund / 3600);
    const minutos = Math.floor((segund % 3600) / 60);
    const segundosRestantes = segund % 60;

    const resultado = `${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`;
    document.getElementById('resultado11').textContent = resultado;
}

function parImp() {
    let numer = parseFloat(document.getElementById('numer').value);
    let res

    if (numer % 2 == 0) {
        res = 'Es par'
    } else {
        res = 'Es impar'
    }
    document.getElementById('resultado12').innerHTML = `${res}`
}

function convertir2() {
    let minut = parseInt(document.getElementById('minut').value);

    const horas = Math.floor(minut / 60);
    const minutos = Math.floor(minut % 60);
    const segundos = minut % 60

    let res = `${horas} horas, ${minutos} minutos y ${segundos} segundos`
    document.getElementById('resultado13').innerHTML = `${res}`
}

function valAbs() {
    let abso = parseInt(document.getElementById('abso').value);

    let res = Math.abs(abso)

    document.getElementById('resultado14').innerHTML = `$El valor absoluto de ${abso} es: ${res}`
}

function divisi() {
    let numer1 = parseFloat(document.getElementById('numer1').value);
    let numer2 = parseFloat(document.getElementById('numer2').value);
    let res

    if (numer1 % numer2 == 0) {
        res = 'es divisible'
    } else {
        res = 'no es divisible'
    }
    document.getElementById('resultado15').innerHTML = `El número ${numer1} ${res} por ${numer2}.`
}

function numMen() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);

    let res

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Rellene todos los campos')
    } else if (numero1 == numero2 || numero2 == numero3 || numero3 == numero1) {
        alert('Los números deben ser diferentes')
    } else if (numero1 < numero2 && numero1 < numero3) {
        res = numero1
    } else if (numero2 < numero1 && numero2 < numero3) {
        res = numero2
    } else {
        res = numero3
    }
    document.getElementById('resultado16').innerHTML = `El número  menor es: ${res}`
}

// documento de trabajo correspondiente a repaso
function repaso (){

    contenido.innerHTML =`<div id="repaso">
    <form>
        <fieldset id="fsUsPas" class="field">
            <legend>Inicio de sesion</legend>
            <label for="userName">Usuario</label>
            <input type="text" id="userName" name="userName" placeholder="Ingresa Usuario">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="12345678">
            <input type="button" onclick="press()" value="Ingresar">
        </fieldset><br>
        <fieldset id="fsParIn" class="field">
            <legend>par o inpar</legend>
            <label for="num">Numero</label>
            <input type="number" id="num" name="num" placeholder="Ingresa numero">
            <input type="button" onclick="parInpar()" value="Calcular">
        </fieldset>
        <fieldset id="fsRes" class="field">
            <legend>Salida De Informacion</legend>
            <label for="" id="lblRes"></label>
            <label id="resp"></label>
            <label id="resp1"></label>
        </fieldset>
        <fieldset class="field">
            <legend>Mayor a menor</legend>
            <label for="num1"class="lab">num1</label>
            <input type="number" name="num1" id="num1">
            <label for="num2" class="lab">num2</label>
            <input type="number" id="num2">
            <label for="num3" class="lab">num3</label>
            <input type="number" id="num3">
            <label for="num4" class="lab">num4</label>
            <input type="number" id="num4">
            <label for="num5" class="lab">num5</label>
            <input type="number" id="num5">
            <input type="button" onclick="comp()" value="Calcular">
            
        </fieldset>
    </form>

</div>`
}

let pass
let user
function press() {
    user = document.getElementById("userName").value;
    pass = document.getElementById("password").value;

    if (user == "sebas" && pass == "1234") {
        //alert(`Bienvenido , ${user}`)
        document.getElementById("lblRes").innerHTML = `Bienvenido, ${user}`
    } else {
        //alert(`Usuario o contraseña incorrecto`)
        document.getElementById("lblRes").innerHTML = `Usuario o contraseña incorrecta`
    }
}
function parInpar() {
    let num = document.getElementById("num").value;
    if (num % 2 == 0) {
        //alert(`El numero ${num} es par`)
        document.getElementById("lblRes").innerHTML += `<br>El numero ${num} es par`
    } else {
        //alert(`El numero ${num} es inpar`)
        document.getElementById("lblRes").innerHTML = ` El numero ${num} es inpar`
    }
}

function comp() {
    let n1 = parseInt(document.getElementById("num1").value)
    let n2 = parseInt(document.getElementById("num2").value)
    let n3 = parseInt(document.getElementById("num3").value)
    let n4 = parseInt(document.getElementById("num4").value)
    let n5 = parseInt(document.getElementById("num5").value)
    if (n1 > n2) {
        var temp = n1;
        n1 = n2;
        n2 = temp;
    } else {
        if (n1 > n3) {
            var temp = n1;
            n1 = n3;
            n3 = temp;
        } else {
            if (n1 > n4) {
                var temp = n1;
                n1 = n4;
                n4 = temp;
            } else {
                if (n1 > n5) {
                    var temp = n1;
                    n1 = n5;
                    n5 = temp;
                }
            }
        }
    }

    if (n2 > n3) {
        var temp = n2;
        n2 = n3;
        n3 = temp;
    } else {
        if (n2 > n4) {
            var temp = n2;
            n2 = n4;
            n4 = temp;
        } else {
            if (n2 > n5) {
                var temp = n2;
                n2 = n5;
                n5 = temp;
            }
        }
    }

    if (n3 > n4) {
        var temp = n3;
        n3 = n4;
        n4 = temp;
    } else {
        if (n3 > n5) {
            var temp = n3;
            n3 = n5;
            n5 = temp;
        }
    }

    if (n4 > n5) {
        var temp = n4;
        n4 = n5;
        n5 = temp;
    }

    // Mostrar el resultado
    document.getElementById('resp').innerText = `Los números ordenados de menor a mayor son:   ${n1} , ${n2} , ${n3} , ${n4} , ${n5}`

}
