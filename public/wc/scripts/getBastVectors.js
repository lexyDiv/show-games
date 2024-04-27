/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const getBastVektors = function () {
  let bast = 0;
  let index = 0;

  for (let i = 0; i < vektors.length; i++) {
    if (!vektors[i].trup && !vektors[i].inUse) {
      if (i === 0) {
        bast = vektors[i];
        index = i;
      } else if (vektors[i].f < bast.f) {
        bast = vektors[i];
        index = i;
      }
    }
  }

  vektors.splice(index, 1);

  bast.inUse = true;

  // console.log(bast);

  return bast;
};
