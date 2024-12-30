import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const opts = {
      bgc: "#000",
      dotSize: 1,
      color: "gray",
      lineWidth: 0.5,
      spacing: 40,
      lineTime: 200 / 60,
      lineCount: 50,
    };

    const dots: [number, number][] = [];
    const lines: Line[] = [];
    let animationFrameId: number;

    const random = (n: number) => Math.random() * n;
    const pickArr = <T,>(arr: T[]) => arr[Math.floor(random(arr.length))];
    const easeOutQuart = (t: number) => 1 - --t * t * t * t;

    class Line {
      pos: { x: number; y: number };
      timeRn: number;
      pr: number;
      goal: [number, number];
      dots: [number, number][];

      constructor(x: number, y: number, arr: [number, number][]) {
        this.pos = { x, y };
        this.timeRn = random(opts.lineTime);
        this.pr = 0;
        this.goal = [0, 0];
        this.dots = arr;
        this.pick(this.dots);
      }

      pick(arr: [number, number][]) {
        const pick = pickArr(arr);
        this.pos.x = pick[0];
        this.pos.y = pick[1];
        const dirs: [number, number][] = [
          [-1, 0],
          [1, 0],
        ];
        this.goal = pickArr(dirs);
      }

      update() {
        this.pr = this.timeRn / opts.lineTime;
        if (this.pr > 1) {
          this.timeRn = 0;
          this.pick(this.dots);
        } else {
          this.timeRn += 1 / 60;
        }
      }

      render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        const { spacing, dotSize, lineWidth, color } = opts;
        const { pr, pos, goal } = this;

        if (pr < 0.5) {
          const pr2 = easeOutQuart(pr * 2);
          const dotSizeD2 = dotSize / 2;
          ctx.moveTo(pos.x + dotSizeD2, pos.y + dotSizeD2);
          ctx.lineTo(
            spacing * goal[0] * pr2 + pos.x + dotSizeD2,
            spacing * goal[1] * pr2 + pos.y + dotSizeD2
          );
        } else {
          const prD2 = easeOutQuart((pr - 0.5) * 2);
          const dsD2 = dotSize / 2;
          ctx.moveTo(
            spacing * goal[0] * prD2 + pos.x + dsD2,
            spacing * goal[1] * prD2 + pos.y + dsD2
          );
          ctx.lineTo(
            spacing * goal[0] + pos.x + dsD2,
            spacing * goal[1] + pos.y + dsD2
          );
        }

        ctx.closePath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }

    const setup = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);

      dots.length = 0;
      for (let x = 10; x < w; x += opts.spacing) {
        for (let y = 10; y < h; y += opts.spacing) {
          dots.push([x, y]);
        }
      }

      lines.length = 0;
      for (let i = 0; i < opts.lineCount; i++) {
        lines.push(new Line(0, 0, dots));
      }
    };

    const loop = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = opts.bgc;
      ctx.fillRect(0, 0, w, h);

      dots.forEach(([x, y]) => {
        ctx.fillStyle = opts.color;
        ctx.fillRect(x, y, opts.dotSize, opts.dotSize);
      });

      lines.forEach((line) => {
        line.update();
        line.render(ctx);
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    setup();
    loop();

    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    ></canvas>
  );
};

export default AnimatedBackground;
