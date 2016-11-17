/**
 * @hexson
 * @param HEX colors value
 */

export default function HEXTOHSV (HEX){
  HEX = HEX.toLowerCase();
  if (HEX.length === 3){
    let NEWHEX = '';
    for (let i = 0; i < 3; i++){
      NEWHEX += HEX.slice(i, i + 1).concat(HEX.slice(i, i + 1));
    }
    HEX = NEWHEX;
  }
  let RGB = [];
  for (let n = 0; n < 6; n += 2){
    RGB.push(parseInt('0x' + HEX.slice(n, n + 2)));
  }
  let r = RGB[0] / 255;
  let g = RGB[1] / 255;
  let b = RGB[2] / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, v = max;
  if (max == min){
    h = 0;
  }else {
    let d = max - min;
    if (max == 0){
      s = 0;
    }else {
      s = 1 - min / max;
    }
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h*360), Math.round(s*100), Math.round(v*100)];
}