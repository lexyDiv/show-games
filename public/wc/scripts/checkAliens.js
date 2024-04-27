/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const checkAliens = function (her, alien) {
  for (let i = alien.vertikal - 10; i <= alien.vertikal + 10; i++) {
    for (let k = alien.horizont - 10; k <= alien.horizont + 10; k++) {
      let cell;

      if (gameFielg[i] && gameFielg[i][k]) {
        cell = gameFielg[i][k];
      }

      if (
        get_distanse_on_lineyka(
          her.cell,
          her.gabarit,
          alien.cell,
          alien.gabarit,
        ) <= her.seeing
        || (cell
          && cell.free
          && cell.continent
          && cell.continent === her.cell.continent
          && get_distanse_on_lineyka(
            cell,
            her.gabarit,
            alien.cell,
            alien.gabarit,
          ) <= her.seeing)
      ) {
        return true;
      }
    }
  }

  return false;
};
