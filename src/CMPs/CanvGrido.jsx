import React, { useEffect, useRef } from 'react';

function CanvGrido({ IDenti, videoRef,fxMo, bgCol, cel_wi, cel_hi, cel_div_wi, cel_div_hi }) {
  const canv_Ref = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvai = canv_Ref.current;
    const vid = videoRef.current;

    if (!canvai || !vid) {
      console.error('Canvas or Video not found');
      return;
    }

    class Cell {

      constructor(effecto, x, y) {
        this.effecto = effecto;
        this.x = x;
        this.y = y;
        this.width = this.effecto.celWi;
        this.height = this.effecto.celHi;
        this.pixSnap_x = 0;//Math.random() * 2;
        this.pixSnap_y = 0;//Math.random() * 2;
        this.veloX=0;
        this.veloY=0;
        this.ease = 0.075;
        this.friction = 0.95;
        
      }

      draw(contexta) {

        //contexta.strokeStyle = bgCol;
       // contexta.strokeRect(this.x, this.y, this.width, this.height);
       if (vid.readyState === 4) { // Check if the video is ready
        contexta.drawImage(
          frameRef.current,
          this.x + this.pixSnap_x, this.y + this.pixSnap_y, this.width, this.height,
          this.x, this.y, this.width, this.height
        );
      }

      }

      //esta funcion actualiza el effecto a aplicar en la celdas
      updato() {
        fxMo(this);
      }
      updato2(){
        const distan_X = this.effecto.mouse.x - this.x;
        const distan_Y = this.effecto.mouse.y - this.y;
        const distan_XY = Math.hypot(distan_X,distan_Y);
        if(distan_XY < this.effecto.mouse.radius){
          const angulo = Math.atan2(distan_X,distan_Y);
          const fuerza = distan_XY / this.effecto.mouse.radius;
          this.veloX = fuerza * Math.cos(angulo);
          this.veloY= fuerza * Math.sin(angulo);
        }/*else{
          this.veloX = 0;
          this.veloY = 0;
        }*/
        this.pixSnap_x += (this.veloX *= this.friction) - this.pixSnap_x * this.ease;//this.veloX;
        this.pixSnap_y += (this.veloY *= this.friction) - this.pixSnap_y * this.ease;;//this.veloY;
        
      }
    }

    class Effeckt {
      constructor(canvai) {
        this.canvas = canvai;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.celWi = this.width / cel_div_wi;
        this.celHi = this.height / cel_div_hi;
        this.imgGrido = [];
        this.creaGrido();

        //eventos mauss
        this.mouse = {
          x:undefined,
          y:undefined,
          radius: 64,
        }
        this.canvas.addEventListener('mousemove',e => {
          this.mouse.x = e.offsetX;
          this.mouse.y = e.offsetY;
          
          //console.log("MOSSS=> ",this.mouse.x,this.mouse.y);
        });
        this.canvas.addEventListener('mouseleave',e => {
          this.mouse.x = undefined;
          this.mouse.y = undefined;
          this.resetCells();
          
          //console.log("MOSSS=> ",this.mouse.x,this.mouse.y);
        });
      }

      creaGrido() {
        for (let y = 0; y < this.height; y += this.celHi) {
          for (let x = 0; x < this.width; x += this.celWi) {
            this.imgGrido.push(new Cell(this, x, y));
          }
        }
      }

      render(contexta) {
        this.imgGrido.forEach(cellDraw => {
          cellDraw.draw(contexta);
        });
      }

      update() {
        this.imgGrido.forEach(cellDraw => {
          cellDraw.updato2();
        });
      }
    }

    const ctx = canvai.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    canvai.width = cel_wi;
    canvai.height = cel_hi;

    const efe = new Effeckt(canvai);

    const captureFrame = () => {
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = vid.videoWidth;
      offscreenCanvas.height = vid.videoHeight;
      const offscreenCtx = offscreenCanvas.getContext('2d');
      offscreenCtx.drawImage(vid, 0, 0);
      frameRef.current = offscreenCanvas;
    };

    const renderFrame = () => {
      efe.render(ctx);
    };
    
    const limpiaPix = () =>{
      ctx.clearRect(0, 0, canvai.width, canvai.height);
    }

    const FxModeON = () => {
      efe.update();
      //requestAnimationFrame(updateGlitches);//si quieres la velocidad de tu compu descomenta esto!
    };

    const frameIntervalId = setInterval(captureFrame, 256); // Capture frame every 2 seconds
    const renderIntervalId = setInterval(renderFrame, 64 / 24); // Render at 30fps
    const pixInterval = setInterval(limpiaPix,8000);
    const fxInterval= setInterval(FxModeON,100);

    vid.onloadeddata = () => {
      renderFrame();
    };

    return () => {
      clearInterval(frameIntervalId);
      clearInterval(renderIntervalId);
      clearInterval(pixInterval);
      clearInterval(fxInterval);
    };
  }, [IDenti, videoRef,fxMo, bgCol, cel_wi, cel_hi, cel_div_wi, cel_div_hi]);

  return <canvas id={IDenti} ref={canv_Ref}></canvas>;
}

export default CanvGrido;
