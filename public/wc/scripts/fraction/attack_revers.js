/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.attack_revers = function () {
  // splice clickSave

  for (let j = 0; j < this.revers.length; j++) {
    const ret = this.revers[j];

    if (ret.holdTimer) {
      ret.holdTimer--;
      return;
    }

    if (ret && !ret.warriors.length && !ret.transports.length) {
      this.revers.splice(j, 1);
      j--;
    } else {
      for (let i = 0; i < ret.warriors.length; i++) {
        const obj = ret.warriors[i];

        if (obj) {
          let del = false;

          if (
            obj.cell
              && obj.cell.continent === ret.my_continent
              // &&
              // obj.ii_attack
          ) {
            obj.handCell = 0;
            obj.handTarget = 0;
            obj.way = [];
            obj.ii_saveCell = obj.born_cell;
            obj.ii_attack = false;
            obj.revers = true;
            del = true;

            if (!obj.active) {
              this.activeUnits.push(obj);
              obj.active = true;
            }
          }

          if (obj.hp <= 0 || del) {
            ret.warriors.splice(i, 1);
            i--;

            break;
          }
        }
      }

      /// *
      if (!ret.evacuation) {
        ret.evacuation = true;
        ret.on_evacuation = [];

        for (let i = 0; i < ret.warriors.length; i++) {
          ret.on_evacuation.push(ret.warriors[i]);
        }
      }
      //* /

      if (ret.seaWay && !ret.groundWay) {
        for (let i = 0; i < ret.on_evacuation.length; i++) {
          if (!ret.on_evacuation[i].cell || ret.on_evacuation[i].hp <= 0) {
            ret.on_evacuation.splice(i, 1);
            i--;
          }
        }

        if (!ret.on_evacuation.length) {
          for (let i = 0; i < ret.transports.length; i++) {
            const obj = ret.transports[i];

            if (!obj.passagers.length || obj.hp <= 0) {
              obj.clickSave = new ClickSave(0, ret.start_point);

              if (!obj.active) {
                this.activeUnits.push(obj);
                obj.active = true;
              }

              ret.transports[i].in_attack = false;

              ret.transports.splice(i, 1);

              i--;
              // console.log("finish");
            }
          }

          for (let i = 0; i < ret.transports.length; i++) {
            const obj = ret.transports[i];

            if (obj.passagers.length) {
              if (obj.landing && obj.landing.iGetLand === ret.my_continent) {
                obj.passagers_out = true;
              } else if (!obj.way.length) {
                obj.clickSave = new ClickSave(0, ret.start_point);

                if (!obj.active) {
                  this.activeUnits.push(obj);
                  obj.active = true;
                }
              }
            }
          }
        } else if (!ret.transports.length) {
          for (let i = 0; i < this.transports.length; i++) {
            const obj = this.transports[i];

            if (
              !obj.passagers.length
                && obj.hp > 0
                && obj.cell.sea === ret.seaWay
            ) {
              ret.transports.push(obj);
            }
          }
        } else {
          let on_boarding;

          for (let i = 0; i < ret.transports.length; i++) {
            const obj = ret.transports[i];

            if (
              obj.passagers.length
                && (!obj.landing || (obj.landing && !obj.landing.iGetLand))
                && (!obj.way.length || obj.ii_way_status === 'go war')
            ) {
              // console.log("ffffff "+obj.passagers[0].born_cell);

              obj.ii_way_status = false;

              obj.clickSave = new ClickSave(0, obj.passagers[0].born_cell);

              if (!obj.active) {
                this.activeUnits.push(obj);
                obj.active = true;
              }
            } else if (
              !obj.passagers.length
                && (!obj.landing
                  || (obj.landing && !obj.landing.iGetLand)
                  || (obj.landing
                    && obj.landing.iGetLand
                    && obj.landing.iGetLand !== ret.continent))
                && (!obj.way.length || obj.ii_way_status === 'go home')
                && ret.on_evacuation.length
            ) {
              obj.ii_way_status = false;

              if (ret.on_evacuation.length) {
                obj.clickSave = new ClickSave(0, ret.on_evacuation[0].cell);
              }

              if (!obj.active) {
                this.activeUnits.push(obj);
                obj.active = true;
              }
            } else if (
              obj.landing
                && obj.landing.iGetLand
                && obj.landing.iGetLand === ret.continent
                && ret.on_evacuation.length
                && obj.passagers.length < 9
                && !on_boarding
            ) {
              on_boarding = obj;
            } else if (
              obj.landing
                && obj.landing.iGetLand
                && obj.landing.iGetLand === ret.continent
                && (!ret.on_evacuation.length || obj.passagers.length === 9)
            ) {
              // console.log("go back")

              obj.clickSave = new ClickSave(0, ret.start_point);

              if (!obj.active) {
                this.activeUnits.push(obj);
                obj.active = true;
              }
            } else if (
              obj.landing
                && obj.landing.iGetLand
                && obj.landing.iGetLand === ret.my_continent
            ) {
              obj.passagers_out = true;
            }
            //* /
          } // for transport

          if (on_boarding) {
            // console.log("im ready");

            for (let i = 0; i < ret.on_evacuation.length; i++) {
              const unit = ret.on_evacuation[i];

              unit.ii_attack = false;

              if (
                !unit.way.length
                  && unit.hp > 0
                  && unit.cell
                  && unit.cell.continent !== ret.my_continent
                  && !unit.target
              ) {
                unit.transport = on_boarding;
                unit.clickSave = new ClickSave(on_boarding, 0);

                if (!unit.active) {
                  this.activeUnits.push(unit);
                  unit.active = true;
                }

                // console.log("go_go");
              }
            }
          }
        } // esly est transport
      } else if (ret.groundWay) {
        ret.on_evacuation = [];

        for (let i = 0; i < ret.transports.length; i++) {
          const obj = ret.transports[i];

          if (!obj.passagers.length || obj.hp <= 0) {
            obj.clickSave = new ClickSave(0, ret.start_point);

            if (!obj.active) {
              this.activeUnits.push(obj);
              obj.active = true;
            }

            ret.transports.splice(i, 1);

            i--;
          }
        }

        for (let i = 0; i < ret.transports.length; i++) {
          const obj = ret.transports[i];

          if (obj.passagers.length) {
            if (obj.landing && obj.landing.iGetLand === ret.my_continent) {
              obj.passagers_out = true;
            } else if (!obj.way.length) {
              obj.clickSave = new ClickSave(0, ret.start_point);

              if (!obj.active) {
                this.activeUnits.push(obj);
                obj.active = true;
              }
            }
          }
        }
      }

      // if(!ret.transports.length){console.log("UH"); pausa=1;};
    }
  }
};
