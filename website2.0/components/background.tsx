import React, { useEffect, useRef } from "react";

const Background: React.FC = () => {

   const fps = 10
   const color = "#777B7E"
   const charset = "TS"
   const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d");
      let w: number, h: number, p: number[];
      const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        p = Array(Math.ceil(w / 20)).fill(0);
      };
      window.addEventListener("resize", resize);
      resize();
      const random = (items: string) => items[Math.floor(Math.random() * items.length)];
      if (ctx) {
        const draw = () => {
          ctx.fillStyle = "rgba(255,255,255,.25)";
          ctx.fillRect(0, 0, w, h);
          ctx.fillStyle = color;
        
          for (let i = 0; i < p.length; i++) {
            let v = p[i];
            ctx.fillText(random(charset), i * 40, v);
            p[i] = v >= h || v >= 20000 * Math.random() ? 0 : v + 40;
          }
        };
        setInterval(draw, 1000 / fps);
      }
    }



  })

  
  

  return (
    <canvas className="absolute left-0 top-0 -z-10" ref={canvasRef}/>
  )
}

export default Background