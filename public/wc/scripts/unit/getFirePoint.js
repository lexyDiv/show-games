/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getFirePoint = function () {
  /*
  if(conor>=67.5&&conor<112.5){
      vector="up";////////////////////////////////////////////////////
      }
  else if(conor>=112.5&&conor<157.5){
      vector="up_Right";////////////////////////////////////////////
  }
  else if(conor>=157.5&&conor<202.5){
      vector="right";//////////////////////////////////////////
  }
  else if(conor>=202.5&&conor<247.5){
      vector="right_Down";//////////////////////////////////
  }
  else if(conor>=247.5&&conor<292.5){
      vector="down";/////////////////////////////
  }
  else if(conor>=292.5&&conor<337.5){
      vector="down_Left";///////////////////////////////
  }
  else if((conor>=337.5&&conor<=360)||(conor>=0&&conor<22.5)){
      vector="left";//////////////////////////////////////////////
  }
  else if(conor>=22.5&&conor<67.5){
      vector="left_Up";////////////////////////////////////////
  }
  */
  if (this.type === 'distroer') {
    this.firePoint = { x: this.damagePointX, y: this.damagePointY };
  } else if (this.type === 'dragoon') {
    // this.firePoint={x:this.x+50,y:this.y};
    if (this.moveVektor === 'up') {
      this.firePoint = { x: this.x + 50, y: this.y - 90 };
    } else if (this.moveVektor === 'up_Right') {
      this.firePoint = { x: this.x + 70, y: this.y - 95 };
    } else if (this.moveVektor === 'left_Up') {
      this.firePoint = { x: this.x + 45, y: this.y - 95 };
    } else if (this.moveVektor === 'right') {
      this.firePoint = { x: this.x + 90, y: this.y - 50 };
    } else if (this.moveVektor === 'left') {
      this.firePoint = { x: this.x + 30, y: this.y - 55 };
    } else if (this.moveVektor === 'right_Down') {
      this.firePoint = { x: this.x + 95, y: this.y - 15 };
    } else if (this.moveVektor === 'down') {
      this.firePoint = { x: this.x + 50, y: this.y };
    } else if (this.moveVektor === 'down_Left') {
      this.firePoint = { x: this.x + 10, y: this.y - 10 };
    }
  } else if (this.type === 3) {
    if (this.moveVektor === 'up') {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === 'up_Right') {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === 'left_Up') {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === 'right') {
      this.firePoint = { x: this.x + 35, y: this.y };
    } else if (this.moveVektor === 'left') {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === 'right_Down') {
      this.firePoint = { x: this.x + 35, y: this.y + 10 };
    } else if (this.moveVektor === 'down') {
      this.firePoint = { x: this.x + 20, y: this.y + 20 };
    } else if (this.moveVektor === 'down_Left') {
      this.firePoint = { x: this.x + 20, y: this.y + 20 };
    }
  } else if (this.type === 'ballista') {
    if (this.moveVektor === 'up') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((270 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((270 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'up_Right') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((315 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((315 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'left_Up') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((225 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((225 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'right') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((0 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((0 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'left') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((180 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((180 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'right_Down') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((45 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((45 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'down') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((90 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((90 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === 'down_Left') {
      this.firePoint = {
        x: this.damagePointX + Math.cos((135 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((135 * Math.PI) / 180) * 50,
      };
    }
  }
};
