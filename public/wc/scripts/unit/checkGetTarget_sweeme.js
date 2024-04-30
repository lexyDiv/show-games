Unit.prototype.checkGetTarget_sweeme = function () {
    let dis = get_distanse_on_lineyka(
      this.cell,
      100,
      this.target.cell,
      this.target.gabarit
    );
  
    if (dis <= this.seeing && this.target.visible) {
      return true;
    }
  
    return false;
  };