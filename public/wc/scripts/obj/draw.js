Obj.prototype.draw = function () {
    let koofX = width / document.documentElement.clientWidth;
    let koofY = height / document.documentElement.clientHeight;
  
    this.x = x * koofX;
    this.y = y * koofY;
  
    //ctx3.fillStyle="red";
    //ctx3.fillRect(this.x,this.y,10,10);
  
    //console.log(player)
  
    if (player) {
      if (player.nation === "orc") {
        ctx3.drawImage(player.cursorOk, 0, 0, 26, 32, this.x, this.y, 50, 50);
      } else {
        ctx3.drawImage(player.cursorOk, 0, 0, 26, 32, this.x - 5, this.y, 50, 50);
      }
    } else {
      ctx3.drawImage(human_cursor_ok, 0, 0, 26, 32, this.x - 5, this.y, 50, 50);
    }
  
    //ctx3.drawImage(human_cursor_ok,0,0,28,32,menu_kursor[0]-3,menu_kursor[1],40,40);
  
    //console.log("x "+x+" y "+y+obj.x+" obj.x "+" obj.y "+obj.y);
  };