"use strict"

class UI{
    constructor(pCuadro,pColor,pPositionL,pPositionT,pCursor){
        this.cuadro = pCuadro;
        this.color = pColor;
        this.posicionL = pPositionL;
        this.posicionT = pPositionT;
        this.cursor = pCursor;
    }

    pintarTablero(){
         /**
         * Este for pinta los cuadtos del tablero
         * 
         */
        for (let i = 1; i<=9; i++){
            let sel = "#_" + i.toString();
            cuadro = document.querySelector(sel);
            color = (i%2 == 0)?"lightgray":"lightcoral";
            if (color == "lightgray")
            {
            cuadro.style.backgroundColor="lightgray";
            }
            else{
            cuadro.style.backgroundColor="orangered";
            }   
        }        
    }

    //Pinta cuadro de amarillo en tablero.
    PintarCuadro(pNumCuadro,jugadorXoO){
        cuadro = document.querySelector(pNumCuadro);
        cuadro.innerHTML = jugadorXoO;
        cuadro.style.cssText = 'font-size: 90px; background: yellow; text-align: center;';
        //cuadro5.classList.add('font-size: 90px');
    }

    //Llama metodo pintarCuadro() para pintar un cuadro en tablero cuando se preciona enter
    //y de acuerdo a coordenadas X y Y.
    HacerMarca(jugadorXoO){
        if (posicionL == 700 && posicionT == 80){
            this.PintarCuadro("#_1",jugadorXoO);
        }
        else if (posicionL == 800 && posicionT == 80){
            this.PintarCuadro("#_2",jugadorXoO);
        }
        else if (posicionL == 900 && posicionT == 80){
           this.PintarCuadro("#_3",jugadorXoO);
        }
        else if (posicionL == 700 && posicionT == 180){
           this.PintarCuadro("#_4",jugadorXoO);
        }
        else if (posicionL == 800 && posicionT == 180){
           this.PintarCuadro("#_5",jugadorXoO);
        }
        else if (posicionL == 900 && posicionT == 180){
           this.PintarCuadro("#_6",jugadorXoO);
        }
        if (posicionL == 700 && posicionT == 280){
           this.PintarCuadro("#_7",jugadorXoO);
        }
        else if (posicionL == 800 && posicionT == 280){
           this.PintarCuadro("#_8",jugadorXoO);
        }
        else if (posicionL == 900 && posicionT == 280){
           this.PintarCuadro("#_9",jugadorXoO);
        }        
    }

    //Busca ganador verificando lineas horizontales, verticales y diagonales
    existeGanador(jugadorXoO){
        //Verificacion de lineas horizontales
        if (this.verificacionHorizontalVertical(1,3,1,jugadorXoO) || 
            (this.verificacionHorizontalVertical(4,6,1,jugadorXoO)) ||
            (this.verificacionHorizontalVertical(7,9,1,jugadorXoO))
        )
        {
            alert(`El jugador ${jugadorXoO} ha sido el ganador`);     
        }//Verificacion de lineas verticales
        else if (this.verificacionHorizontalVertical(1,7,3,jugadorXoO) || 
            (this.verificacionHorizontalVertical(2,8,3,jugadorXoO)) ||
            (this.verificacionHorizontalVertical(3,9,3,jugadorXoO))
        )
        {
            alert(`El jugador ${jugadorXoO} ha sido el ganador`);
        }//Verificacion de lineas diagonales
        else if (this.verificacionHorizontalVertical(1,9,4,jugadorXoO) || 
            this.verificacionHorizontalVertical(3,7,2,jugadorXoO)){
            alert(`El jugador ${jugadorXoO} ha sido el ganador`);
        }
    }

    // Retorna true si contabiliza 3 cuadros seguidos con X o O.
    verificacionHorizontalVertical(pNumCuadroInicial,pNumCuadroFinal,pIncremento,jugadorXoO){
        let contador = 0;
        let hayGanador = false;

        for (let index = parseInt(pNumCuadroInicial); index <= parseInt(pNumCuadroFinal); index+=parseInt(pIncremento)) {
            //const element = array[index];
            if (document.querySelector("#_" + (parseInt(index))).innerHTML == jugadorXoO){
                contador++;
            }
        }

        if (contador == 3){
            hayGanador = true;
        }

        return hayGanador;
    }

    moverCursorDerecha(){
        posicionL += 100;
        cursor.style.left = `${posicionL}px`; 
        this.imprimirCoordenadas();
    }
    
    moverCursorIzquierda(){
        posicionL -= 100;
        cursor.style.left = `${posicionL}px`; 
        this.imprimirCoordenadas();
    }
    
    moverCursorAbajo(){
        posicionT += 100;
        cursor.style.top = `${posicionT}px`;   
        this.imprimirCoordenadas();
    }
    
    moverCursorArriba(){
        posicionT -= 100;
        cursor.style.top = `${posicionT}px`; 
        this.imprimirCoordenadas();
    }
    
    /**
     * Imprime ejes de coordenadas
     *
     * @return  {[type]}  [no return]
     */
    imprimirCoordenadas(){
        console.log("x:"+posicionL,"y:"+posicionT);
    }
}

/**
 * Seccion de variables globales
 */
var cuadro = 0; 
var color = "lightgray";
var posicionL = 700;
var posicionT = 80;
var jugador = "X";
var cursor = document.querySelector("#selector");
//--------------------------------------------------------------------------------
var juego = new UI(cuadro,color,posicionL,posicionT,cursor);
juego.pintarTablero();

/**
 * [addEventListener: captura evento de las teclas L,R,U,D]
 *
 * @param   {[type]}  keypress  [keypress ]
 * @param   {[type]}  function  [function anonima]
 * @param   {[type]}  e         [captura evento]
 *
 * @return  {[type]}            [sin retorno]
 */
document.addEventListener("keydown", function(e){
    let charCode = (e.which) ? e.which : e.keyCode
    let letra = e.code;
    console.log(letra,charCode);
    if ((letra == "ArrowRight") && (posicionL < 900)){//Right
        juego.moverCursorDerecha();     
    }
    else if ((letra == "ArrowLeft") && (posicionL > 700)){//Left
        juego.moverCursorIzquierda();
    }
    else if ((letra == "ArrowDown") && (posicionT < 280)){//Down
        juego.moverCursorAbajo();
    }
    else if ((letra == "ArrowUp") && (posicionT > 80)){//Up
        juego.moverCursorArriba();
    }
    else if ((letra == "Enter")){//Enter
        juego.HacerMarca(jugador);
        juego.existeGanador(jugador);
        jugador = (jugador == "X")?"O":"X";
        juego.cursor.innerHTML = jugador;
    }
});