import React, { useEffect, useRef } from 'react';
export const LeafAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Leaf properties
    const leafCount = Math.min(15, Math.floor(window.innerWidth / 100));
    const leaves: Leaf[] = [];
    class Leaf {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 15 + 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        // Colors based on the Kaptai Dhaba palette
        const colors = ['#0e3e2e', '#1d6e50', '#e79c56', '#f9f1de'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y / 50) + this.speedX;
        this.rotation += this.rotationSpeed;
        // Reset leaf when it goes off screen
        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        // Draw leaf
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(this.size / 3, -this.size / 2, this.size / 2, -this.size / 4, 0, this.size / 2);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 4, -this.size / 3, -this.size / 2, 0, -this.size / 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.lineTo(0, this.size / 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size / 10;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    }
    // Initialize leaves
    for (let i = 0; i < leafCount; i++) {
      leaves.push(new Leaf());
    }
    // Animation loop
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach(leaf => {
        leaf.update();
        leaf.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};