/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const drawMouseZone = function () {
  const x = crateZoonMouse.conorX + removeX;
  const y = crateZoonMouse.conorY + removeY;

  const disX = Math.abs(crateZoonMouse.distanseX);
  const disY = Math.abs(crateZoonMouse.distanseY);

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';

  ctx.moveTo(x, y);
  ctx.lineTo(x + disX, y);

  ctx.moveTo(x + disX, y);
  ctx.lineTo(x + disX, y + disY);

  ctx.moveTo(x + disX, y + disY);
  ctx.lineTo(x, y + disY);

  ctx.moveTo(x, y + disY);
  ctx.lineTo(x, y);

  ctx.stroke();
  //* /

  // ctx.fillStyle="blue";
  // ctx.fillRect(crateZoonMouse.x+removeX,crateZoonMouse.y+removeY,40,40);
};
