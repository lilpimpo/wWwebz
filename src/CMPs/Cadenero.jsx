import '../StiloozZ/lobby-stilo/StiLobby.css';
import { useRef,useEffect } from 'react';



function Cadenero(){

    const canvReferi=useRef(null);
    function DrawRct(ctx,cnvai,colori,wee,hight,posxX,posyY){
        //ctx.clearRect(0, 0, cnvai.width, cnvai.height);
        ctx.fillStyle = colori;
        ctx.fillRect(posxX,posyY,wee,hight);
    }
    const colorLenso = 'black';
    useEffect(() => {
        const cnvai = canvReferi.current;
        const ctxXx = cnvai.getContext('2d');
        
        //aqui estaria el switch o algo pa poner distinto juego...
        DrawRct(ctxXx,cnvai,colorLenso,32,12,264,0);
        DrawRct(ctxXx,cnvai,colorLenso,12,32,288,0);
        DrawRct(ctxXx,cnvai,colorLenso,32,12,0,0);
        DrawRct(ctxXx,cnvai,colorLenso,12,32,0,0);
        DrawRct(ctxXx,cnvai,colorLenso,32,12,0,138);
        DrawRct(ctxXx,cnvai,colorLenso,12,32,0,120);
        DrawRct(ctxXx,cnvai,colorLenso,32,12,264,138);
        DrawRct(ctxXx,cnvai,colorLenso,12,32,288,120);

        

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