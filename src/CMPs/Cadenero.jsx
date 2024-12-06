import '../StiloozZ/lobby-stilo/StiLobby.css';
import { useRef,useEffect } from 'react';
import { DrawRct,CanvFrameLens } from './CadeJuegos';



function Cadenero(){

    const canvReferi=useRef(null);


    const colorLenso = 'black';
    useEffect(() => {
        const cnvai = canvReferi.current;
        const ctxXx = cnvai.getContext('2d');
        
        //aqui estaria el switch o algo pa poner distinto juego...
       CanvFrameLens(ctxXx,cnvai,colorLenso,12,32);

        

    },[]);
    

    return (
    <>
        <div className="centrador">
            <canvas id='bloquePuzzle' ref={canvReferi}></canvas>
        </div>
        
    </>
    )
}

export default Cadenero;