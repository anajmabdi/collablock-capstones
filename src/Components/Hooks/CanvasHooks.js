import { useRef } from "react";
import { useEffect } from 'react';


//create reference for canvas in order to draw
export function useOnDraw(onDraw) {

    const canvasRef = useRef(null); //canvas reference

    const prevPointRef = useRef(null); //previous mouse position reference
    const isDrawingRef = useRef(false); //tracking whether users are drawing
    const mouseUpListenerRef = useRef(null); // tracking when users stop drawing
    const mouseMoveListenerRef = useRef(null); //tracking when users move mouse

    useEffect(() => {
        function initMouseMoveListener() {
            const mouseMoveListener = (e) => {
                if (isDrawingRef.current) {
                    const point = computePointInCanvas(e.clientX, e.clientY); //relative to the top left corner of canvas
                    const ctx = canvasRef.current.getContext('2d'); //2D rendering context 
                    if (onDraw) onDraw(ctx, point, prevPointRef.current);
                    prevPointRef.current = point; 
                    console.log(point);
                }
            }
            mouseMoveListenerRef.current = mouseMoveListener;
            window.addEventListener("mousemove", mouseMoveListener);
        }

        //event listener for when user stops drawing
        function initMouseUpListener() {
            if (!canvasRef.current) return;
            const listener = () => {
                isDrawingRef.current = false;
                prevPointRef.current = null;
            }
            mouseUpListenerRef.current = listener;
            window.addEventListener("mouseup", listener);
        }
        function computePointInCanvas(clientX, clientY) {
            if (canvasRef.current) {
                const boundingRect = canvasRef.current.getBoundingClientRect();
                return {
                    x: clientX - boundingRect.left,
                    y: clientY - boundingRect.top
                }
            } else {
                return null
            }
        }

        function removeListeners() {
            if (mouseMoveListenerRef.current) {
                window.removeEventListener("mousemove", mouseMoveListenerRef.current)
            }
            if (mouseUpListenerRef.current) {
                window.removeEventListener("mouseup", mouseUpListenerRef.current)
            }
        }

        initMouseMoveListener();
        initMouseUpListener();
        return () => {
            removeListeners();
        }
    }, [onDraw]);

    function setCanvasRef(ref) {
        canvasRef.current = ref;
    }

    function onMouseDown() {
        isDrawingRef.current = true;
    }

    return {
        setCanvasRef,
        onMouseDown
    }
}