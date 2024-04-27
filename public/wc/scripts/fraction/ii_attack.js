/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-constant-condition */
/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
Fraction.prototype.ii_attack = function (mySelf) {
  if (!this.frandly_fractions.length && !this.animy_fractions.length) {
    for (let i = 0; i < fractions.length; i++) {
      if (this.fraction !== fractions[i].fraction) {
        if (fractions[i].union === this.union) {
          this.frandly_fractions.push(fractions[i]);
        } else {
          this.animy_fractions.push(fractions[i]);
        }
      }
    }
  }

  if (
    this.warriors.length >= this.ii_attack_number &&
    !this.attack &&
    ((this.startPoint.unit && this.startPoint.unit.gold >= 50000) ||
      this.gold >= 1000) &&
    this.canFarm
  ) {
    this.attack = new II_attack();
    this.attack.warriors_in_active = 0;
    this.attack.alive_warriors = [];
    this.attack.warriors_flot_reserv = 0;
    this.attack.memorial = 0;

    if (
      this.ii_attack_number <
      Math.floor(
        (this.createShablon.rizars +
          this.createShablon.mechniks +
          this.createShablon.luchniks +
          this.createShablon.ballistas) /
          1.4,
      )
    ) {
      this.ii_attack_number += 5 + Math.floor(Math.random() * 4);

      this.createShablon.transports = Math.floor(this.ii_attack_number / 9) + 1;
    }
  }

  if (this.attack) {
    if (!this.attack.start_continent_warriors) {
      let max = [];

      for (let i = 1; i < this.warriors_on_continents.length; i++) {
        if (!max.length || max[0] < this.warriors_on_continents[i].length) {
          max = [this.warriors_on_continents[i].length, i];
        }
      }

      this.attack.start_continent_warriors = {
        continent: max[1],
        warriors: Math.floor(this.warriors_on_continents[max[1]].length / 2),
      };

      this.attack.start_point =
        this.warriors_on_continents[
          this.attack.start_continent_warriors.continent
        ][0].cell;

      // console.log(this.attack.start_continent_warriors);//pausa=1;

      return;
    }

    if (!this.attack.attack_target_fraction) {
      const ran = Math.floor(Math.random() * this.animy_fractions.length);

      this.attack.attack_target_fraction = this.animy_fractions[ran];

      /// console.log(this.attack.attack_target_fraction); pausa=1;

      if (
        (this.attack.attack_target_fraction &&
          !this.attack.attack_target_fraction.peoples.length &&
          !this.attack.attack_target_fraction.buildings.length) ||
        !this.attack.attack_target_fraction
      ) {
        this.attack = false;
        return;
      }

      let min = [];

      for (
        let i = 1;
        i < this.attack.attack_target_fraction.objects_on_continents.length;
        i++
      ) {
        if (
          (!min.length &&
            this.attack.attack_target_fraction.objects_on_continents[i].length >
              0) ||
          (min[0] >
            this.attack.attack_target_fraction.objects_on_continents[i]
              .length &&
            this.attack.attack_target_fraction.objects_on_continents[i].length >
              0)
        ) {
          min = [
            this.attack.attack_target_fraction.objects_on_continents[i].length,
            i,
          ];
        }
      }

      this.attack.attack_target_fraction_continent = min[1];

      // console.log(min[1])

      if (this.attack.attack_target_fraction_continent) {
        while (true) {
          const ran = Math.floor(
            Math.random() *
              this.attack.attack_target_fraction.objects_on_continents[
                this.attack.attack_target_fraction_continent
              ].length,
          );

          this.attack.finish_cell =
            this.attack.attack_target_fraction.objects_on_continents[
              this.attack.attack_target_fraction_continent
            ][ran].cell;

          if (!this.attack.finish_cell.sea) {
            break;
          }
        }
      }
      // console.log(fractions.indexOf(this.attack.attack_target_fraction));
      // console.log(this.attack.attack_target_fraction_continent);pausa=1;

      return;
    }

    if (!this.attack.checkTypeAttack) {
      if (!this.attack.attack_target_fraction_continent) {
        this.attack = false;
        return;
      }

      this.attack.checkTypeAttack = true;

      this.attack.groundWay = true;

      if (
        this.attack.attack_target_fraction_continent !==
        this.attack.start_continent_warriors.continent
      ) {
        this.attack.groundWay = false;
      }

      for (
        let i = 0;
        i <
        allContinents[this.attack.attack_target_fraction_continent].my_seas
          .length;
        i++
      ) {
        for (
          let k = 0;
          k <
          allContinents[this.attack.start_continent_warriors.continent].my_seas
            .length;
          k++
        ) {
          if (
            allContinents[this.attack.attack_target_fraction_continent].my_seas[
              i
            ].length &&
            allContinents[this.attack.start_continent_warriors.continent]
              .my_seas[k].length
          ) {
            // if(this.objects_on_seas[i])

            let okTrans = false;

            for (let j = 0; j < this.objects_on_seas[i].length; j++) {
              if (this.objects_on_seas[i][j].type === 'transport') {
                okTrans = true;
              }
            }

            if (okTrans) {
              this.attack.seaWay = i;
            }
          }
        }
      }

      // console.log(this.attack.seaWay);
      // console.log(this.attack.groundWay);pausa=1;
      return;
    }

    if (this.attack.groundWay && !this.attack.obj) {
      this.attack.obj;

      if (this.attack.attack_target_fraction.townHolls.length) {
        this.attack.obj = this.attack.attack_target_fraction.townHolls[0];
      }

      if (
        !this.attack.obj &&
        this.attack.attack_target_fraction.buildings.length
      ) {
        this.attack.obj = this.attack.attack_target_fraction.buildings[0];
      } else {
        this.attack.obj =
          this.attack.attack_target_fraction.objects_on_continents[
            this.attack.attack_target_fraction_continent
          ][0];
      }

      if (this.attack.obj) {
        let cell;

        for (let i = 0; i < this.base_cells.length; i++) {
          const obj = this.base_cells[i];

          if (obj.free) {
            cell = obj;
            break;
          }
        }

        const unit = new Unit('rizar', 0, 0, 5, this.fraction, this.nation);

        unit.fatherFraction = mySelf;
        unit.cell = cell;
        unit.vertikal = cell.vertikal;
        unit.horizont = cell.horizont;
        unit.y = cell.y;
        unit.x = cell.x;
        cell.unit = unit;
        cell.free = false;

        // (arg,noFree,deep,target,luchnik,ii)

        unit.finish = this.attack.obj.cell;
        unit.handTarget = this.attack.obj;
        unit.iCanGet = false;

        getWay(unit, undefined, 50000, this.attack.obj, undefined, true);

        this.attack.ii_way = unit.way;

        const d = unit.way[0];

        for (let i = 0; i < this.attack.ii_way.length; i++) {
          this.attack.ii_way.splice(i, 30);
        }

        this.attack.ii_way.unshift(d);
        // ddd=this.attack.ii_way;

        for (let i = 0; i < this.attack.ii_way.length; i++) {
          const obj = this.attack.ii_way[i];

          for (let v = obj.vertikal - 5; v <= obj.vertikal + 5; v++) {
            for (let h = obj.horizont - 5; h <= obj.horizont + 5; h++) {
              if (gameFielg[v] && gameFielg[v][h]) {
                const cell = gameFielg[v][h];

                if (!cell.ii_fractions_way) {
                  cell.ii_fractions_way = [];

                  for (let j = 0; j < fractions.length; j++) {
                    cell.ii_fractions_way.push([]);
                  }
                }

                if (!cell.ii_fractions_way[this.persolalNumber].length) {
                  cell.ii_fractions_way[this.persolalNumber] = {
                    fraction: this.persolalNumber,
                    index: i,
                  };
                  obj.ii_cells.push(cell);
                }
              }
            }
          }
        }

        // ww=this.attack.ground_way_to;

        cell.unit = 0;
        cell.free = true;
      }
    }

    //* /
    /// ////////////////////////////////////////////////////////////////////////////////

    if (!this.attack.seaWay && !this.attack.groundWay) {
      this.attack = false;
      return;
    }
    if (
      this.attack.groundWay &&
        (this.attack.attack_on ||
          !this.attack.seaWay ||
          !this.attack.transports.length)
    ) {
      if (
        this.attack.warriors_in_active + this.attack.warriors_flot_reserv <
          this.attack.start_continent_warriors.warriors
      ) {
        let warrior;

        for (
          let i =
              this.warriors_on_continents[
                this.attack.start_continent_warriors.continent
              ].length - 1;
          i >= 0;
          i--
        ) {
          const unit =
              this.warriors_on_continents[
                this.attack.start_continent_warriors.continent
              ][i];

          if (
            unit.hp > 0 &&
              unit.cell &&
              !unit.isBlocked() &&
              !unit.ii_attack && // ||!unit.handCell
              !unit.target &&
              !unit.transport &&
              (!unit.way.length || unit.ii_saveCell) &&
              (unit.type !== 'mag' || unit.mana === 100)
          ) {
            warrior = unit;

            break;
          }
        }

        // splice

        if (warrior) {
          this.attack.warriors_in_active++;
          this.attack.alive_warriors.push(warrior);

          warrior.ii_attack = true;

          warrior.ii_index = this.attack.ii_way.length - 1; /// ////////////// WAY

          warrior.clickSave = new ClickSave(
            0,
            this.attack.ii_way[warrior.ii_index],
          );

          if (!warrior.active) {
            this.activeUnits.push(warrior);
            warrior.active = true;
          }

          // console.log(warrior.clickSave)
        }
      }
    }

    if (this.attack.seaWay) {
      // console.log("!!!!!!!!!!!!!!!");
      // console.log((this.attack.start_continent_warriors.warriors/2)/9);

      // this.attack.transports_on=true;
      // console.log("net");
      // pausa=1;

      for (let i = 0; i < this.transports.length; i++) {
        if (
          this.transports[i].cell.sea === this.attack.seaWay
        // &&
        //! this.transports[i].isBlockedShip()
        ) {
          const obj = this.transports[i];

          obj.passagers_out = false;

          if (
            !obj.in_attack
          ) {
            this.attack.transports.push(obj);
            obj.in_attack = true;
          }
        }
      }

      if (this.attack.transports.length) {
        let for_passagers;

        for (let i = 0; i < this.attack.transports.length; i++) {
          if (this.attack.transports[i].hp <= 0) {
            this.attack.transports.splice(i, 1);
            i--;
          } else if (this.attack.transports[i]) {
            if (
            // this.attack.transports[i].ii_load_cell
            // &&
            // this.attack.transports[i].landing
            // &&
            // this.attack.transports[i].landing.iGetLand
              this.attack.transports[i].ii_way_status === 'go war' &&
                  this.attack.transports[i].passagers.length &&
                  // &&
                  // this.attack.transports[i].ii_load_cell!==this.attack.transports[i].cell
                  !this.attack.transports[i].way.length
            ) {
              this.attack.transports[i].passagers_out = true;

              // pausa=1;
              // console.log("out");
            }

            if (
              !this.attack.transports[i].passagers.length &&
                  !this.attack.transports[i].way.length &&
                  this.attack.transports[i].stepTakt < 1 &&
                  this.attack.transports[i].stepTakt >= 0 &&
                  (!this.attack.transports[i].landing ||
                    !this.attack.transports[i].landing.iGetLand ||
                    (this.attack.transports[i].landing.iGetLand &&
                      this.attack.transports[i].ii_way_status !== 'go home'))
            ) {
              const ran = Math.floor(
                Math.random() *
                      this.attack.start_continent_warriors.warriors.length,
              );

              this.attack.transports[i].clickSave = new ClickSave(
                0,
                this.attack.start_point,
              );

              this.attack.transports[i].ii_way_status = 'go home';

              if (!this.attack.transports[i].active) {
                this.activeUnits.push(this.attack.transports[i]);
                this.attack.transports[i].active = true;
              }
            } else if (
              this.attack.transports[i].landing &&
                  this.attack.transports[i].landing.passagers_out_cells
                    .length &&
                  this.attack.transports[i].landing.iGetLand &&
                  this.attack.transports[i].landing.passagers_out_cells[0]
                    .continent ===
                    this.attack.start_continent_warriors.continent &&
                  this.attack.transports[i].passagers.length < 9 &&
                  this.attack.transports[i].hp > 0
            ) {
              for_passagers = this.attack.transports[i];

              this.attack.attack_on = true;
            }

            // console.log("hhhhhhhhhhhhhhhh");

            // if(this.attack.transports[i].persolalNumber===143){
            // console.log()
            // };

            if (
              this.attack.transports[i].passagers.length &&
                  !this.attack.transports[i].ii_aliss &&
                  this.attack.transports[i].stepTakt < 1 &&
                  this.attack.transports[i].stepTakt >= 0 &&
                  (this.attack.transports[i].passagers.length === 9 ||
                    this.attack.transports[i].passagers.length >=
                      this.attack.start_continent_warriors.warriors ||
                    this.attack.warriors_in_active >=
                      this.attack.start_continent_warriors.warriors) &&

                  !this.attack.transports[i].way.length &&
                  (!this.landing ||
                    (this.landing && !this.landing.iGetLand) ||
                    (this.landing &&
                      !this.landing.iGetLand &&
                      this.attack.transports[i].ii_way_status !== 'go war'))

            ) {
              if (this.landing && this.landing.iGetLand) {
                this.attack.warriors_flot_reserv -=
                      this.attack.transports[i].ii_passagers.length;
              }

              this.attack.transports[i].ii_passagers = [];
              // this.attack.transports[i].ii_abort=this.attack.attack_target_fraction_continent;

              this.attack.transports[i].clickSave = new ClickSave(
                0,
                this.attack.finish_cell,
              );

              // console.log("here");

              this.attack.transports[i].ii_way_status = 'go war';

              if (!this.attack.transports[i].active) {
                this.activeUnits.push(this.attack.transports[i]);
                this.attack.transports[i].active = true;
              }
            }

            // ii_passagers/////////////////////

            for (
              let k = 0;
              k < this.attack.transports[i].ii_passagers.length;
              k++
            ) {
              if (
                this.attack.transports[i].ii_passagers[k].hp <= 0 ||
                    this.attack.transports[i].ii_passagers[k].target ||
                    !this.attack.transports[i].ii_passagers[k].cell
              ) {
                this.attack.transports[i].ii_passagers[k].transport = false;
                this.attack.transports[i].ii_passagers[k].ii_attack = false;

                if (this.attack.transports[i].ii_passagers[k].target) {
                  this.attack.transports[i].ii_passagers[k].ii_saveCell =
                        this.attack.transports[i].ii_passagers[k].born_cell;
                }

                this.attack.transports[i].ii_passagers.splice(k, 1);
                k--;
              } else if (this.attack.transports[i].ii_passagers[k]) {
                if (
                  (!this.attack.transports[i].ii_passagers[k].way.length ||
                        !this.attack.transports[i].ii_passagers[k].handCell) &&
                      this.attack.transports[i].ii_passagers[k].cell
                ) {
                  // console.log("gogogogo");
                  this.attack.transports[i].ii_passagers[k].clickSave =
                        new ClickSave(this.attack.transports[i], 0);

                  if (!this.attack.transports[i].ii_passagers[k].active) {
                    this.activeUnits.push(
                      this.attack.transports[i].ii_passagers[k],
                    );
                    this.attack.transports[i].ii_passagers[k].active = true;
                  }
                }
              }
            }

            /// /////////////////////////////

            if (
              this.attack.transports[i].landing &&
                  this.attack.transports[i].landing.iGetLand
            ) {
              if (!this.attack.transports[i].passagers.length) {
                this.attack.transports[i].ii_load_cell = false;
              }

              if (this.attack.transports[i].passagers.length === 1) {
                this.attack.transports[i].ii_load_cell =
                      this.attack.transports[i].cell;
              }
            }
          }
        } // for

        if (
          for_passagers &&
            this.attack.warriors_in_active <
              this.attack.start_continent_warriors.warriors
        ) {
          let warrior;
          const units = [];

          for (
            let i =
                this.warriors_on_continents[
                  this.attack.start_continent_warriors.continent
                ].length - 1;
            i >= 0;
            i--
          ) {
            const unit =
                this.warriors_on_continents[
                  this.attack.start_continent_warriors.continent
                ][i];

            // console.log(for_passagers.landing.landCells[0].persolalNumber)

            if (
              unit.hp > 0 &&
                unit.cell &&
                (!unit.isBlocked() ||
                  unit.cell.persolalNumber ===
                    for_passagers.landing.landCells[0].persolalNumber ||
                  unit.cell.persolalNumber ===
                    for_passagers.landing.landCells[1].persolalNumber) &&
                !unit.ii_attack && // ||!unit.handCell
                !unit.target &&
                (!unit.way.length || unit.ii_saveCell) &&
                (unit.type !== 'mag' || unit.mana === 100)
            ) {
              /*
        warrior=unit;

        break;
        */
              units.push(unit);
            }
          }

          let min;

          for (let i = 0; i < units.length; i++) {
            const dis = get_distanse_on_lineyka(
              for_passagers.landing.landCells[0],
              50,
              units[i].cell,
              50,
            );

            if (!min || min[0] > dis) {
              min = [dis, units[i]];
            }
          }

          if (min) {
            warrior = min[1];
          }

          if (warrior && for_passagers.ii_passagers.length < 22) {
            warrior.way = [];
            warrior.clickSave = new ClickSave(for_passagers, 0);
            warrior.transport = for_passagers;
            warrior.ii_attack = true;

            if (warrior.transport.ii_passagers.indexOf(warrior) === -1) {
              warrior.transport.ii_passagers.push(warrior);

              this.attack.warriors_flot_reserv++;
            }

            if (!warrior.active) {
              this.activeUnits.push(warrior);
              warrior.active = true;
            }
          }
          // else{this.attack=false;};
        }
      }

      // console.log(this.attack.transports); pausa=1;
    }

    // alive_warriors

    if (
      this.attack.attack_target_fraction &&
        this.attack.attack_target_fraction.objects_on_continents &&
        this.attack.attack_target_fraction.objects_on_continents.length
    ) {
      for (let i = 0; i < this.attack.alive_warriors.length; i++) {
        const unit = this.attack.alive_warriors[i];

        if (
          unit.hp <= 0 ||
            (this.attack.groundWay && unit.type === 'mag' && unit.mana < 100)
        ) {
          this.attack.memorial++;
          unit.ii_attack = false;
          this.attack.alive_warriors.splice(i, 1);
          i--;
        } else if (
          unit.cell &&
              !unit.animys.length &&
              (!unit.way.length || !unit.active) &&
              (unit.type !== 'mag' || unit.mana === 100)
        ) {
          if (!unit.ii_index) {
            /// ////////////////// WAY

            if (
              this.attack.attack_target_fraction.objects_on_continents[
                this.attack.attack_target_fraction_continent
              ] &&
                  this.attack.attack_target_fraction.objects_on_continents[
                    this.attack.attack_target_fraction_continent
                  ][0]
            ) {
              unit.clickSave = new ClickSave(
                this.attack.attack_target_fraction.objects_on_continents[
                  this.attack.attack_target_fraction_continent
                ][0],
                0,
              );
            }
          } else {
            unit.clickSave = new ClickSave(0, this.attack.ii_way[0]);
          }

          if (!unit.active) {
            this.activeUnits.push(unit);
            unit.active = true;
          }
        }
      }

      // console.log("al : "+this.attack.alive_warriors.length);

      if (this.attack.alive_warriors.length) {
        this.attack.wor_control = true;
      }

      if (
        !this.attack.alive_warriors.length &&
          this.attack.wor_control &&
          (this.attack.attack_on || !this.attack.seaWay)
      ) {
        for (let i = 0; i < this.attack.transports.length; i++) {
          this.attack.transports[i].ii_way_status = false;
          this.attack.transports[i].in_attack = false;
        }

        for (let i = this.attack.ii_way.length - 1; i >= 0; i--) {
          const obj = this.attack.ii_way[i];

          for (let k = 0; k < obj.ii_cells.length; k++) {
            const cell = obj.ii_cells[k];

            cell.ii_fractions_way[this.persolalNumber] = [];
          }
        }

        for (let i = 0; i < this.attack.alive_warriors.length; i++) {
          const warrior = this.attack.alive_warriors[i];

          warrior.ii_index = 0;
        }

        /// ////////////////////////

        this.attack = false;
        return;
      }
    }

    /// ///////////////////////////////////////////////// vyhod
    if (
      this.attack.alive_warriors &&
      !this.attack.alive_warriors.length &&
      !this.attack.transports.length
    ) {
      // pausa=1;

      for (let i = this.attack.ii_way.length - 1; i >= 0; i--) {
        const obj = this.attack.ii_way[i];

        for (let k = 0; k < obj.ii_cells.length; k++) {
          const cell = obj.ii_cells[k];

          cell.ii_fractions_way[this.persolalNumber] = [];
        }
      }

      for (let i = 0; i < this.attack.alive_warriors.length; i++) {
        const warrior = this.attack.alive_warriors[i];

        warrior.ii_index = 0;
      }

      /// ////////////////////////

      this.attack = false;

      return;
    }

    if (
      !this.attack.attack_target_fraction.objects_on_continents[
        this.attack.attack_target_fraction_continent
      ].length ||
      this.attack.start_continent_warriors.warriors / 10 >=
        this.attack.start_continent_warriors.warriors - this.attack.memorial ||
      this.warriors_on_continents[
        this.attack.start_continent_warriors.continent
      ].length /
        2 <=
        this.attack.start_continent_warriors.warriors / 2
    ) {
      for (let i = this.attack.ii_way.length - 1; i >= 0; i--) {
        const obj = this.attack.ii_way[i];

        for (let k = 0; k < obj.ii_cells.length; k++) {
          const cell = obj.ii_cells[k];

          cell.ii_fractions_way[this.persolalNumber] = [];
        }
      }

      for (let i = 0; i < this.attack.alive_warriors.length; i++) {
        const warrior = this.attack.alive_warriors[i];

        warrior.ii_index = 0;
      }

      /// ////////////////////////

      // pausa=1;

      const rev = new II_attack();

      rev.warriors = this.attack.alive_warriors;
      rev.my_continent = this.attack.start_continent_warriors.continent;
      rev.continent = this.attack.attack_target_fraction_continent;
      rev.groundWay = this.attack.groundWay;
      rev.seaWay = this.attack.seaWay;
      rev.holdTimer = 10;
      rev.start_point = this.attack.start_point;

      for (let i = 0; i < this.attack.transports.length; i++) {
        const obj = this.attack.transports[i];

        obj.landing = false;
        obj.in_attack = false;

        for (let k = 0; k < obj.ii_passagers.length; k++) {
          const unit = obj.ii_passagers[k];

          unit.handCell = 0;
          unit.way = [];
          unit.ii_saveCell = unit.born_cell;
          unit.transport = false;
          // console.log("ok");
        }

        obj.ii_passagers = [];
      }

      rev.transports = this.attack.transports;

      this.attack = false;

      this.revers.push(rev);

      // console.log(rev); pausa=1;
    }

    /// ///////////////////////////////////
  } // attack
  /*
    if(this.attack.start_continent_warriors){
    console.log("warriors : "+this.attack.start_continent_warriors.warriors);
    console.log("warriors_in_active : "+this.attack.warriors_in_active);
    };
    // */
};
