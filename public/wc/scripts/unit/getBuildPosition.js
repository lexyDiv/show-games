/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getBuildPosition = function (
  horizont,
  vertikal,
  building,
) {
  if (building === 'tower') {
    const potentialCells = [];

    for (let i = vertikal - 20; i < vertikal + 20; i++) {
      for (let k = horizont - 20; k < horizont + 20; k++) {
        let stop = false;

        for (let v = i - 1; v <= i; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k; h <= k + 1; h++) {
            if (
              !gameFielg[v]
              || !gameFielg[v][h]
              || gameFielg[v][h].free === false
              || gameFielg[v][h].stopBuild
              || gameFielg[v][h].continent !== this.cell.continent
              || gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let stop;

        for (
          let v = potentialCells[i].vertikal - 10;
          v <= potentialCells[i].vertikal + 10;
          v++
        ) {
          for (
            let h = potentialCells[i].horizont - 10;
            h <= potentialCells[i].horizont + 10;
            h++
          ) {
            if (
              gameFielg[v]
              && gameFielg[v][h]
              && gameFielg[v][h].unit
              && gameFielg[v][h].unit.unitStatus === 'building'
              && !gameFielg[v][h].unit.neitral
              && gameFielg[v][h].unit.type !== 'oil_platform'
              && gameFielg[v][h].unit.fatherFraction.union
                !== this.fatherFraction.union
            ) {
              stop = true;
              // console.log("stop");
            }
          }
        }

        if (!stop) {
          const a = potentialCells[i].horizont - horizont;
          const b = potentialCells[i].vertikal - vertikal;

          const c = Math.sqrt(a * a + b * b);

          if (!min.length || c < min[0]) {
            min = [c, potentialCells[i]];
          }
        }
      }

      return min[1];
    }
  } else if (
    building === 'barack'
    || building === 'kuznya'
    || building === 'ogreBase'
    || building === 'altar'
    || building === 'dragon_roost'
    || building === 'temple'
  ) {
    const potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v]
              || !gameFielg[v][h]
              || gameFielg[v][h].free === false
              || gameFielg[v][h].stopBuild
              || gameFielg[v][h].continent !== this.cell.continent
              || gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        const a = potentialCells[i].horizont - horizont;
        const b = potentialCells[i].vertikal - vertikal;

        const c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === 'lesopilka') {
    // console.log(this.cell.continent)
    // pausa=1

    const potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v]
              || !gameFielg[v][h]
              || gameFielg[v][h].free === false
              || gameFielg[v][h].stopBuild
              || gameFielg[v][h].continent !== this.cell.continent
              || gameFielg[v][h].iContaktWith.length
              || this.cell.continent !== gameFielg[v][h].continent
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        const a = potentialCells[i].horizont - horizont;
        const b = potentialCells[i].vertikal - vertikal;

        const c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === 'townHoll') {
    const potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v]
              || !gameFielg[v][h]
              || gameFielg[v][h].free === false
              || gameFielg[v][h].stopTownHoll.length
              || gameFielg[v][h].stopBuild
              || gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        const a = potentialCells[i].horizont - horizont;
        const b = potentialCells[i].vertikal - vertikal;

        const c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === 'farm') {
    const potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k; h <= k + 1; h++) {
            if (
              !gameFielg[v]
              || !gameFielg[v][h]
              || gameFielg[v][h].free === false
              || gameFielg[v][h].stopBuild
              || gameFielg[v][h].continent !== this.cell.continent
              || (gameFielg[v][h].iContaktWith.length && h % 2 === 0)
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        const a = potentialCells[i].horizont - horizont;
        const b = potentialCells[i].vertikal - vertikal;

        const c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  }
};
