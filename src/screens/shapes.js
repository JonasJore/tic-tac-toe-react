const createCanvasContext = () => {
    const canvas = document.getElementById('canvas');
    const canvasContext = canvas.getContext("2d");

    return canvasContext;
}

export const drawCircle = () => {
    const canvasContext = createCanvasContext();
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.lineWidth = 5;
    canvasContext.beginPath();
    canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
    canvasContext.strokeStyle = 'blue';
    canvasContext.stroke();
}

export const drawCross = () => {
    const canvasContext = createCanvasContext();
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.lineWidth = 5;
    canvasContext.beginPath();

    canvasContext.moveTo(80, 40);
    canvasContext.lineTo(160, 160);

    canvasContext.moveTo(160, 40);
    canvasContext.lineTo(80, 160);
    canvasContext.strokeStyle = 'red';
    canvasContext.stroke();
}