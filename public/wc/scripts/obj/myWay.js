/* eslint-disable no-constant-condition */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.myWay = function (arg) {
  let b = this.father;

  father.way.push(arg);
  father.way[father.way.length - 1].drawWay = 1;

  // console.log(b);

  const a = father.x - father.finish.x;
  const s = father.y - father.finish.y;

  const c = Math.sqrt(a * a + s * s);

  // console.log(c);

  if (c < 100) {
    return;
  }

  father.wayLength = 0;

  while (true) {
    father.wayLength += b.g;

    father.way.push(b);

    b = father.way[father.way.length - 1].father;

    father.way[father.way.length - 1].drawWay = 1;

    if (b.vertikal === father.vertikal && b.horizont === father.horizont) {
      // console.log(father)

      break;
    }
  }
};
