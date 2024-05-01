const well_cell_for_building = function (cell, gabarit) {
  let ok = 0;

  if (gabarit === 100) {
    for (let v = cell.vertikal - 1; v <= cell.vertikal; v++) {
      for (let h = cell.horizont; h <= cell.horizont + 1; h++) {
        if (
          gameFielg[v] &&
          gameFielg[v][h] &&
          gameFielg[v][h].free &&
          !gameFielg[v][h].water_line
        ) {
          ok++;
        }
      }
    }

    if (ok === 4) {
      return true;
    }
  } else {
    for (let v = cell.vertikal - 1; v <= cell.vertikal + 1; v++) {
      for (let h = cell.horizont - 1; h <= cell.horizont + 1; h++) {
        if (
          gameFielg[v] &&
          gameFielg[v][h] &&
          gameFielg[v][h].free &&
          !gameFielg[v][h].water_line
        ) {
          ok++;
        }
      }
    }

    if (ok === 9) {
      return true;
    }
  }

  return false;
};
