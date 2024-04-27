/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.checkAlarms = function () {
  if (this.alarms.length) {
    this.alarm_stop_build = 10;

    this.alarm_mor_warriors();

    /// ////////////////////////////////////// sea
    // console.log(this.alarmTimer); pausa=1;

    if (
      !this.alarmTimer
        && this.alarms[0].terpila
        && this.alarms[0].terpila.unitStatus === 'building'
    ) {
      this.alarmTimer = 300;

      this.ii_crash = {
        terpila: this.alarms[0].terpila,
        agressor: this.alarms[0].agressor,
      };
    }

    if (this.alarms[0].agressor) {
      if (this.alarms[0].agressor.sweeme && this.sea) {
        const { agressor } = this.alarms[0];

        // console.log(agressor);
        let agressors = 0;

        for (let i = agressor.vertikal - 5; i < agressor.vertikal + 5; i++) {
          for (let k = agressor.horizont - 5; k < agressor.horizont + 5; k++) {
            let cell;

            if (gameFielg[i] && gameFielg[i][k]) {
              cell = gameFielg[i][k];
            }

            if (
              cell
                && cell.unit
                && !cell.unit.neitral
                && cell.unit.warrior
                && cell.unit.fatherFraction.union !== this.union
            ) {
              agressors++;
            }
          }
        }

        agressors /= 2;

        // console.log(agressors)

        for (let i = 0; i < this.ballistas.length; i++) {
          const obj = this.ballistas[i];

          if (
            !obj.target
              && !obj.handTarget
              && !obj.isBlocked()
              && !obj.ii_strike
          ) {
            if (!obj.born_cell) {
              obj.born_cell = obj.cell;
            }

            // obj.clickSave=new ClickSave(agressor,0);

            // if(!obj.active){
            // this.activeUnits.push(obj);
            // obj.active=true;
            obj.ii_saveCell = obj.born_cell;

            // console.log(obj.born_cell)

            // };

            const a = new Strike(obj, agressor, agressor.cell);
            this.ii_warriors_on_strike.push(a);
            obj.ii_strike = true;
          }
        }

        for (let i = 0; i < this.warriors_on_seas[this.sea].length; i++) {
          if (!agressors) {
            break;
          }

          if (
            !this.warriors_on_seas[this.sea][i].target
              && !this.warriors_on_seas[this.sea][i].handTarget
              && !this.warriors_on_seas[this.sea][i].isBlockedShip()
              && !this.warriors_on_seas[this.sea][i].ii_strike
          ) {
            // this.warriors_on_seas[this.sea][i].clickSave=new ClickSave(agressor,0);

            // if(!this.warriors_on_seas[this.sea][i].active){
            // this.activeUnits.push(this.warriors_on_seas[this.sea][i]);
            // this.warriors_on_seas[this.sea][i].active=true;
            this.warriors_on_seas[this.sea][i].ii_saveCell = this.warriors_on_seas[this.sea][i].cell;

            const a = new Strike(
              this.warriors_on_seas[this.sea][i],
              agressor,
              agressor.cell,
            );
            this.ii_warriors_on_strike.push(a);
            this.warriors_on_seas[this.sea][i].ii_strike = true;

            // };

            agressors--;
          }
        }
      }

      /// //////////////////////////////////////////

      let adeqvate = 0;

      for (
        let v = this.alarms[0].agressor.vertikal - 10;
        v <= this.alarms[0].agressor.vertikal + 10;
        v++
      ) {
        for (
          let h = this.alarms[0].agressor.horizont - 10;
          h <= this.alarms[0].agressor.horizont + 10;
          h++
        ) {
          if (gameFielg[v] && gameFielg[v][h]) {
            const cell = gameFielg[v][h];

            if (
              cell.unit
                && !cell.unit.neitral
                && cell.unit.fatherFraction.union !== this.union
                && cell.unit.warrior
            ) {
              adeqvate++;
            }

            if (
              cell.dragoon
                && cell.dragoon.fatherFraction.union !== this.union
            ) {
              adeqvate += 2;
            }
          }
        }
      }

      for (
        let i = 0;
        i < this.warriors_on_continents[this.continent].length;
        i++
      ) {
        const warrior = this.warriors_on_continents[this.continent][i];

        if (!adeqvate) {
          break;
        }

        if (
          !warrior.active
            && !warrior.isBlocked()
            && !warrior.ii_strike
            // &&
            // warrior.type!=="ballista"
            && (warrior.type !== 'mag' || warrior.mana === 100)
        ) {
          const a = new Strike(
            warrior,
            this.alarms[0].agressor,
            this.alarms[0].agressor.cell,
          );
          this.ii_warriors_on_strike.push(a);
          warrior.ii_strike = true;

          // warrior.clickSave=new ClickSave(this.alarms[0].agressor,0);

          // this.activeUnits.push(warrior);
          // warrior.active=true;

          if (!warrior.born_cell) {
            warrior.born_cell = warrior.cell;
          }
          warrior.ii_saveCell = warrior.born_cell;

          adeqvate--;
        }
      }
    }

    this.alarms.splice(0, 1);

    // console.log("alarm");
  }
};
