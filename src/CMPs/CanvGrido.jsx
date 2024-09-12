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
        this.pixSnap_x = Math.random() * 2;
        this.pixSnap_y = Math.random() * 2;
      }

      draw(contexta) {
        contexta.drawImage(
          frameRef.current,
          this.x  - this.pixSnap_x , this.y - this.pixSnap_y, this.width, this.height,
          this.x , this.y , this.width, this.height
        );
      }

      updato() {
        //this.pixSnap_y = Math.random() * 5;
        //this.pixSnap_x = Math.random() * 5;
        fxMo(this);
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
          cellDraw.updato();
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
    const fxInterval= setInterval(FxModeON,200);
   

    return () => {
      clearInterval(frameIntervalId);
      clearInterval(renderIntervalId);
      clearInterval(pixInterval);
      clearInterval(fxInterval);
    };
  }, [IDenti, videoRef, bgCol, cel_wi, cel_hi, cel_div_wi, cel_div_hi]);

  return <canvas id={IDenti} ref={canv_Ref}></canvas>;
}

export default CanvGrido;
