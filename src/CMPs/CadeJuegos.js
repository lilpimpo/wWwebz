export function DrawRct(ctx,cnvai,colori,wee,hight,posxX,posyY){
    //ctx.clearRect(0, 0, cnvai.width, cnvai.height);
    ctx.fillStyle = colori;
    ctx.fillRect(posxX,posyY,wee,hight);
}

export function ClearCanvas(ctx, cnvai) {
    ctx.clearRect(0, 0, cnvai.width, cnvai.height);
}

export function MueveSqr(ctx,posX,posY,SqrSize,color){
    ctx.clearRect(SqrSize,SqrSize,posX,posY);
    ctx.fillStyle = color;
    ctx.fillRect(posX,posY,SqrSize,SqrSize);

}


export function CanvFrameLens(ctx,cnvai,colorLenso,heighto,widtho){

    const canvWeed = cnvai.width;
    const canvHigh = cnvai.height;

    DrawRct(ctx,cnvai,colorLenso,widtho,heighto,canvWeed - widtho,0);
    DrawRct(ctx,cnvai,colorLenso,heighto,widtho,canvWeed - heighto,0);
    DrawRct(ctx,cnvai,colorLenso,widtho,heighto,0,0);
    DrawRct(ctx,cnvai,colorLenso,heighto,widtho,0,0);
    DrawRct(ctx,cnvai,colorLenso,widtho,heighto,0,canvHigh - heighto);
    DrawRct(ctx,cnvai,colorLenso,heighto,widtho,0,canvHigh - widtho);
    DrawRct(ctx,cnvai,colorLenso,widtho,heighto,canvWeed - widtho,canvHigh - heighto);
    DrawRct(ctx,cnvai,colorLenso,heighto,widtho,canvWeed - heighto, canvHigh - widtho);
}