/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

DragoonDamage.prototype.drawDragDam = function () {
  if (
    this.x >= centerDrawPoint.cellObj.x - 350
    && this.x < centerDrawPoint.cellObj.x + 350
    && this.y >= centerDrawPoint.cellObj.y - 350
    && this.y < centerDrawPoint.cellObj.y + 350
  ) {
    if (this.timer <= 60) {
      if (this.animX < 0) {
        this.animX = 0;
      }

      if (this.dragoon.fatherFraction.nation === 'orc') {
        ctx.drawImage(
          boom,
          this.animX,
          this.animY,
          95,
          100,
          this.x - 50 + removeX,
          this.y - 170 + removeY,
          100,
          200,
        );

        /// ////////////////////////////////////////////////////sound
        if (!this.sound && !this.animX && !this.animY) {
          this.sound = true;

          if (sounds_fly.length + sounds_fight.length < 35) {
            const a = this.x
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].x;
            const b = this.y
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].y;

            const dis = Math.sqrt(a * a + b * b);

            let volume = (450 - dis) / 450;

            // console.log(volume); pausa=1;
            if (volume < 0) {
              volume = 0;
            }

            select_sound_fly(undefined, 'boo_drag', volume);
          }
        }
        /// /////////////////////////////////////////////////////////
      } else {
        ctx.drawImage(
          gry_boo,
          this.animX,
          this.animY,
          95,
          100,
          this.x - 50 + removeX,
          this.y - 170 + removeY,
          100,
          200,
        );
      }

      // ctx.fillStyle="red";
      // ctx.fillRect(this.x+removeX,(this.y+removeY),5,5);

      // pausa=1
    }
  }
};
