/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const checkAliens_sea = function (her, alien) {
  const seeing = 10;

  for (let i = alien.vertikal - seeing; i <= alien.vertikal + seeing; i++) {
    for (let k = alien.horizont - seeing; k <= alien.horizont + seeing; k++) {
      if (
        (gameFielg[i]
            && gameFielg[i][k]
            && her.good_cell_for_ship(gameFielg[i][k])
            && get_distanse_on_lineyka(
              gameFielg[i][k],
              her.gabarit,
              alien.cell,
              alien.gabarit,
            ) <= her.seeing)
          || get_distanse_on_lineyka(
            her.cell,
            her.gabarit,
            alien.cell,
            alien.gabarit,
          ) <= her.seeing
      ) {
        return true;
      }
    }
  }

  // if(ok_cells.length){  wrm=ok_cells; return true;};

  return false;
};
