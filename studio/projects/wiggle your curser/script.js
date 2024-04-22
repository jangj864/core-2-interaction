// Including the WaterTexture class directly in script.js
class WaterTexture {
  constructor(options) {
      this.size = 64;
      this.points = [];
      this.radius = this.size * 0.1;
      this.width = this.height = this.size;
      this.maxAge = 64;
      if (options.debug) {
          this.width = window.innerWidth;
          this.height = window.innerHeight;
          this.radius = this.width * 0.1;
      }

      this.initTexture();
      if (options.debug) document.body.append(this.canvas);
  }
  initTexture() {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "WaterTexture";
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");
      this.clear();
  }
  clear() {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  addPoint(point) {
      this.points.push({ x: point.x, y: point.y, age: 0 });
  }
  update() {
      this.clear();
      this.points.forEach((point, i) => {
          point.age += 1;
          if (point.age > this.maxAge) {
              this.points.splice(i, 1);
          }
      });
      this.points.forEach(point => {
          this.drawPoint(point);
      });
  }
  drawPoint(point) {
      let pos = {
          x: point.x * this.width,
          y: point.y * this.height
      };
      const radius = this.radius;
      let intensity = 1 - point.age / this.maxAge;
      let color = "255,255,255";
      let offset = this.width * 5;
      this.ctx.shadowOffsetX = offset;
      this.ctx.shadowOffsetY = offset;
      this.ctx.shadowBlur = radius * 1;
      this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
      this.ctx.beginPath();
      this.ctx.fillStyle = "rgba(255,0,0,1)";
      this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
      this.ctx.fill();
  }
}

// Main app logic
class App {
  constructor() {
      this.waterTexture = new WaterTexture({ debug: true });
      this.tick = this.tick.bind(this);
      this.init();
  }
  init() {
      window.addEventListener("mousemove", this.onMouseMove.bind(this));
      this.tick();
  }
  onMouseMove(ev) {
      const point = {
          x: ev.clientX / window.innerWidth,
          y: ev.clientY / window.innerHeight
      };
      this.waterTexture.addPoint(point);
  }
  tick() {
      this.waterTexture.update();
      requestAnimationFrame(this.tick);
  }
}
const myApp = new App();
