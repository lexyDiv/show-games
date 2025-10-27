/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.getH = function () {
  if (
    !father
    || !father.finish
    || father.finish.vertikal === undefined
    || father.finish.horizont === undefined
  ) {
    return;
  }

  const a = Math.abs(father.finish.vertikal - this.vertikal);
  const b = Math.abs(father.finish.horizont - this.horizont);

  const c = a + b;

  this.h = c * 10;
};
