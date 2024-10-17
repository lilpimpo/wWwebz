export const pix_Shake= (cell) => {
    cell.pixSnap_y = Math.random() * 8;
    cell.pixSnap_x = Math.random() * 8;
  };


export const deforMouse=(fxx) =>{
    fxx.veloX=0;
    fxx.veloY=0;
    fxx.ease = 0.01;
    fxx.friction = 0.90;
    const mouseX = fxx.effecto.mouse.x - fxx.effecto.mouse.radius / 2;
    const mouseY = fxx.effecto.mouse.y - fxx.effecto.mouse.radius / 2;
    const distan_X = mouseX - fxx.x;
    const distan_Y = mouseY - fxx.y;
    const distan_XY = Math.hypot(distan_X,distan_Y);
    if(distan_XY <= fxx.effecto.mouse.radius){
        const angulo = Math.atan2(distan_Y,distan_X);
        const fuerza = distan_XY / fxx.effecto.mouse.radius;
        fxx.veloX = fuerza * Math.sin(angulo);
        fxx.veloY= fuerza * Math.cos(angulo);

    }
    fxx.pixSnap_x -= (fxx.veloX *= fxx.friction) + fxx.pixSnap_x * fxx.ease;//this.veloX;
    fxx.pixSnap_y -= (fxx.veloY *= fxx.friction) + fxx.pixSnap_y * fxx.ease;;//this.veloY;
    
  };

  export const preservo=(fxx) =>{
    fxx.veloX=0;
    fxx.veloY=0;
    fxx.ease = 0.01;
    fxx.friction = 0.90;
    const mouseX = fxx.effecto.mouse.x - fxx.effecto.mouse.radius / 2;
    const mouseY = fxx.effecto.mouse.y - fxx.effecto.mouse.radius / 2;
    const distan_X = mouseX - fxx.x;
    const distan_Y = mouseY - fxx.y;
    const distan_XY = Math.hypot(distan_X,distan_Y);
    if(distan_XY <= fxx.effecto.mouse.radius){
        const angulo = Math.atanh(distan_Y,distan_X);
        const fuerza = distan_XY / fxx.effecto.mouse.radius;
        fxx.veloX = fuerza * Math.sin(angulo);
        fxx.veloY= fuerza * Math.cos(angulo);

    }
    fxx.pixSnap_x -= (fxx.veloX *= fxx.friction) + fxx.pixSnap_x * fxx.ease;//this.veloX;
    fxx.pixSnap_y -= (fxx.veloY *= fxx.friction) + fxx.pixSnap_y * fxx.ease;;//this.veloY;
    
  };

