const good_sea_build_cell = function (cell) {
  for (let i = cell.vertikal - 1; i <= cell.vertikal + 1; i++) {
    for (let k = cell.horizont - 1; k <= cell.horizont + 1; k++) {
      let obj;

      //gameFielg[i][k];

      if (gameFielg[i] && gameFielg[i][k]) {
        obj = gameFielg[i][k];
      }

      if (
        obj &&
        ((obj.type !== "water" && !obj.free) ||
          (obj.type === "water" && (obj.unit || obj.vossalObj)))
      ) {
        return false;
      }
    }
  }

  return true;
};
