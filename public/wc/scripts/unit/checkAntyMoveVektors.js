Unit.prototype.checkAntyMoveVektors = function (unit) {
    /*	
  if(conor>=67.5&&conor<112.5){
      vector="up";
      }
  else if(conor>=112.5&&conor<157.5){
      vector="up_Right";
  }
  else if(conor>=157.5&&conor<202.5){
      vector="right";
  }
  else if(conor>=202.5&&conor<247.5){
      vector="right_Down";
  }
  else if(conor>=247.5&&conor<292.5){
      vector="down";
  }
  else if(conor>=292.5&&conor<337.5){
      vector="down_Left";
  }
  else if((conor>=337.5&&conor<=360)||(conor>=0&&conor<22.5)){
      vector="left";
  }
  else if(conor>=22.5&&conor<67.5){
      vector="left_Up";
  }	
  */
  
    if (this.persolalNumber === unit.persolalNumber) {
      return "her";
    }
  
    let vektor = unit.moveVektor;
  
    if (vektor === "up") {
      if (
        this.moveVektor === "down" ||
        this.moveVektor === "right_Down" ||
        this.moveVektor === "down_Left"
      ) {
        return "anty";
      }
    } else if (vektor === "up_Right") {
      if (
        this.moveVektor === "down_Left" ||
        this.moveVektor === "down" ||
        this.moveVektor === "left"
      ) {
        return "anty";
      }
    } else if (vektor === "right") {
      if (
        this.moveVektor === "left" ||
        this.moveVektor === "down_Left" ||
        this.moveVektor === "left_Up"
      ) {
        return "anty";
      }
    } else if (vektor === "right_Down") {
      if (
        this.moveVektor === "left_Up" ||
        this.moveVektor === "left" ||
        this.moveVektor === "up"
      ) {
        return "anty";
      }
    } else if (vektor === "down") {
      if (
        this.moveVektor === "up" ||
        this.moveVektor === "left_Up" ||
        this.moveVektor === "up_Right"
      ) {
        return "anty";
      }
    } else if (vektor === "down_Left") {
      if (
        this.moveVektor === "up_Right" ||
        this.moveVektor === "up" ||
        this.moveVektor === "right"
      ) {
        return "anty";
      }
    } else if (vektor === "left") {
      if (
        this.moveVektor === "right" ||
        this.moveVektor === "up_Right" ||
        this.moveVektor === "right_Down"
      ) {
        return "anty";
      }
    } else if (vektor === "left_Up") {
      if (
        this.moveVektor === "right_Down" ||
        this.moveVektor === "down" ||
        this.moveVektor === "right"
      ) {
        return "anty";
      }
    }
  
    return "her";
  };