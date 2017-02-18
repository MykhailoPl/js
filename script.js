window.onload = function (){
    var theCanvas = document.getElementById('canvas1');
    if(theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d')
        if(ctx){
            ctx.fillStyle = 'Green';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
}