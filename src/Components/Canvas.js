import { useOnDraw } from "./Hooks/CanvasHooks";
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import RandomWord from "./RandomWord"
import '../styles/canvasPage.css'

const socket = io.connect("http://localhost:3001");

const Canvas = () => {
    const navigate = useNavigate();

    const {
        onMouseDown,
        setCanvasRef
    } = useOnDraw(onDraw);

    //we want this executed whenever the mouse is moved
    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, '#000000', 5);
        socket.emit('drawingEvent', point); //send data to server with point position
    }

    function drawLine(
        start,
        end,
        ctx,
        color,
        width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    socket.on('drawingEvent', (point) => {
        const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');
        onDraw(ctx, point, null);
      });

    return (
        <>
        <div className="noun">
        <RandomWord/>
        <br></br>
        <br></br>
        </div>
            <div className="canvas">
                <canvas
                    width={600}
                    height={500}
                    onMouseDown={onMouseDown}
                    style={canvasStyle}
                    ref={setCanvasRef}
                />
            </div>

            <br></br>
            <br></br>
            <div className="buttons-container">
            <button className="button" onClick={() => { navigate('/') }}>Go home</button>
            <button className="button" type="submit">New Game</button>
            <button className="button" type="submit">Regenerate Word</button>
            <button className="button" type="submit">Clear Canvas</button>
            </div>
        </>
    )
}

export default Canvas;

const canvasStyle = {
    border: "1px solid black",
    backgroundColor: "white"
}