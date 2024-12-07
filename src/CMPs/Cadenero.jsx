import '../StiloozZ/lobby-stilo/StiLobby.css';
import { useRef,useEffect,useState } from 'react';
import { MueveSqr,CanvFrameLens } from './CadeJuegos';



function Cadenero(){

    const canvReferi=useRef(null);
    const [SqrPs,SetSqrPs]=useState({xSqr:50,ySqr:50});


    const colorLenso = 'black';
    useEffect(() => {
        const cnvai = canvReferi.current;
        const ctxXx = cnvai.getContext('2d');
        
        //aqui estaria el switch o algo pa poner distinto juego...
        CanvFrameLens(ctxXx,cnvai,colorLenso,12,32);
        MueveSqr(ctxXx,SqrPs.xSqr,SqrPs.ySqr,20,'yellow');
        // Handle keyboard events to move the square 
        const handleKeyDown = (e) => { 
            let newX = SqrPs.xSqr;
             let newY = SqrPs.ySqr; 
             if(e.key.startsWith("Arrow")){

                switch(e.key){
                    case "ArrowUp":
                        newY -= 10;
                    break;
                    case "ArrowDown":
                        newY += 10; 
                    break;
                    case "ArrowLeft":
                        newX -= 10;
                    break;
                    case "ArrowRight":
                        newX += 10;
                    break;
                    
                }
             }
             
             // Clear the previous square position
              ctxXx.clearRect(SqrPs.xSqr, SqrPs.ySqr, 20, 20); 
              // Update the square position
            SetSqrPs({ xSqr: newX, ySqr: newY }); 
            // Draw the new square position
            MueveSqr(ctxXx, newX, newY, 20,'yellow');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown);}

    },[SqrPs]);
    

    return (
    <>
        <div className="centrador">
            <canvas id='bloquePuzzle' ref={canvReferi}></canvas>
        </div>
        
    </>
    )
}

export default Cadenero;