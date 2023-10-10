const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 500;
canvas.width = 500;
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width, canvas.height);

const w = canvas.width;
const h = canvas.height;
const scale = 1 / 125;

function set(x, y) {
  const [cr, ci] = screen(x, y);

  context,fillStyle = "#000000";
  point(x, y);

  let zr = 0;
  let zi = 0;

  for(let k = 0; k < 100; k++) {
    const zx = zr ** 2 - zi ** 2 + cr;
    const zy = 2 * zr * zi + ci;

    zr = zx;
    zi = zy;
  }

  const dist = Math.sqrt(zr ** 2 + zi ** 2);
  if(dist < 2) {
    context.fillStyle = "#000000";
    point(x, y, 1);
  }
}

function point(x, y, rad = 5) {
  context.beginPath();
  context.arc(x, y, rad, 0, Math.PI * 2);
  context.fill();
}
function line(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

function screen(x, y) {
  const r = (x - w / 2) * scale;
  const i = -(y - h / 2) * scale;
  
  return [r, i];
}
function world(r, i) {
  const x = r / scale + w / 2;
  const y = -i / scale + h / 2;
  
  return [x, y];
}

window.addEventListener("load", () => {
  for(let x = 0; x < w; x++) {
    for(let y = 0; y < h; y++) {
      set(x, y);
    }
  }
});
