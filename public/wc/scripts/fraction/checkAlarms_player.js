/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.checkAlarms_player = function () {
  if (this.player_alarm_timer) {
    this.player_alarm_timer--;
  }

  if (this.alarms.length) {
    if (this.alarms[0].terpila) {
      if (!this.player_alarm_timer) {
        this.player_alarm_timer = 500;

        if (this.nation === 'h') {
          select_sound_fly(undefined, 'alarm_h', 1);
        } else {
          select_sound_fly(undefined, 'alarm_orc', 1);
        }
      }

      const a = {
        obj: this.alarms[0].terpila,
        timer: 10,
        list: 1,
        gabarit: 0,
        alfa: 1,
        drawGabaritRadar: 130 / gameFielgMap.length,
        radarX:
            radar.x
            + this.alarms[0].terpila.horizont * (130 / gameFielgMap.length),
        radarY:
            radar.y
            + this.alarms[0].terpila.vertikal * (130 / gameFielgMap.length),
        drawImage: new Image(),
      };

      a.drawImage.src = 'wc/menu/star.png';

      this.radar_alarms.push(a);
    }

    // zst=new Image();
    // zst.src="menu/zst.png";

    this.alarms.shift();
  }
};
