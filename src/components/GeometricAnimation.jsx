import React, { useEffect, useRef } from 'react';

function GeometricAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Grid configuration
    const gridSize = 40;
    const gridAngle = Math.PI / 6; // 30 degrees for isometric view
    let offset = 0;

    function drawIsometricGrid() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set line style
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.lineWidth = 1;

      // Calculate grid dimensions
      const diagonalLength = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
      const numLines = Math.ceil(diagonalLength / gridSize);

      // Draw first set of parallel lines
      for (let i = -numLines; i < numLines; i++) {
        const x = i * gridSize + offset;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + canvas.height * Math.tan(gridAngle), canvas.height);
        ctx.stroke();
      }

      // Draw second set of parallel lines (perpendicular to first set)
      for (let i = -numLines; i < numLines; i++) {
        const y = i * gridSize - offset;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + canvas.width * Math.tan(gridAngle));
        ctx.stroke();
      }

      // Draw accent lines with gradient
      const numAccentLines = 3;
      for (let i = 0; i < numAccentLines; i++) {
        const gradient = ctx.createLinearGradient(
          canvas.width * 0.5,
          0,
          canvas.width,
          canvas.height * 0.5
        );
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0)');
        gradient.addColorStop(0.5, 'rgba(79, 70, 229, 0.3)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(canvas.width * (0.5 + i * 0.1), 0);
        ctx.lineTo(canvas.width * (0.8 + i * 0.1), canvas.height);
        ctx.stroke();
      }

      // Draw geometric shapes
      const shapes = 5;
      for (let i = 0; i < shapes; i++) {
        const x = canvas.width * (0.6 + Math.sin(offset / 50 + i) * 0.1);
        const y = canvas.height * (0.3 + Math.cos(offset / 50 + i) * 0.1);
        const size = 30 + Math.sin(offset / 30 + i) * 10;

        ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.3)';
        ctx.lineWidth = 2;

        // Draw hexagon
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = j * Math.PI / 3;
          const px = x + Math.cos(angle) * size;
          const py = y + Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Update animation
      offset += 0.5;
      requestAnimationFrame(drawIsometricGrid);
    }

    drawIsometricGrid();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
      style={{
        clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)',
      }}
    />
  );
}

export default GeometricAnimation;