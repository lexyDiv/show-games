/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const getBastH = function () {
  let bast = 0;
  // let index=0;

  for (let i = 0; i < allVektors.length; i++) {
    if (i === 0) {
      bast = allVektors[i];
      // index=i;
    } else if (allVektors[i].h < bast.h) {
      bast = allVektors[i];
    }
  }

  // allVektors.splice(index,1);

  // bast.inUse=true;
  father.inUse = false;

  // vektors=[];
  vektors.push(gameFielg[father.vertikal][father.horizont]);
  // allVektors=[];
  // father=0;

  return bast;
};
