/* eslint-disable func-names */
/* eslint-disable no-undef */
Obj.prototype.draw2 = function () {
  this.myDraw = false;

  if (this.type === 0 || this.under_wood) {
    // sumexpe
    if (!this.water_line) {
      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        0,
        100,
        100,
        this.x + removeX - 35,
        this.y + removeY - 35,
        120,
        120,
      );
    } else if (this.water_line) {
      ctx.drawImage(
        this.imageToDraw,
        this.animX_wl,
        this.animY_w1,
        100,
        100,
        this.x + removeX - 25,
        this.y + removeY - 25,
        100,
        100,
      );
    } else {
      ctx.drawImage(
        this.imageToDraw,
        0,
        0,
        100,
        100,
        this.x + removeX,
        this.y + removeY,
        50,
        50,
      );
    }
    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
    // console.log(this.animX);
  } else if (this.type === 1) {
    ctx.drawImage(
      this.imageToDraw,
      0,
      0,
      100,
      100,
      this.x + removeX - 25,
      this.y + removeY - 25,
      100,
      100,
    );
    // ctx.drawImage(tree_grunt,0,0,800,800,this.x+removeX-12,this.y+removeY-12,75,75);

    // sumexpe

    // ctx.drawImage(this.imageToDraw,0,0,100,100,this.x+removeX,this.y+removeY,50,50);

    // onDrawSpecial.push(gameFielg[this.vertikal][this.horizont]);
  }

  this.draw_water();

  /*
    if(this.dragoon){

            ctx.fillStyle="green";
    ctx.fillRect(this.x+removeX,this.y+removeY,50,50);

    };
    */

  /*
    for(let i=0;i<this.iContaktWith.length;i++){

                    ctx.textBaseline="top";
    ctx.textAlign="left";
    ctx.font="15px Areal";
    ctx.fillStyle="black";

        if(this.iContaktWith[i].father.unitStatus==="life"){ctx.fillStyle="red";};

    ctx.fillText(this.iContaktWith[i].father.persolalNumber,this.x+removeX,this.y+removeY+i*15);

    };
    */

  /*
    if(this.father){

        if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont){

            ctx.drawImage(ve,0,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont+1){

            ctx.drawImage(ve,100,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal&&this.father.horizont===this.horizont+1){

            ctx.drawImage(ve,200,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont+1){

            ctx.drawImage(ve,300,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont){

            ctx.drawImage(ve,400,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont-1){

            ctx.drawImage(ve,500,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal&&this.father.horizont===this.horizont-1){

            ctx.drawImage(ve,600,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }
        else if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont-1){

            ctx.drawImage(ve,700,0,100,100,this.x+removeX,this.y+removeY,50,50);

        }

    };

    // */

  /*
    if(this.continent){

            ctx.textBaseline="top";
    ctx.textAlign="left";
    ctx.font="20px Areal";
    ctx.fillStyle="red";

    //ctx.fillText(this.f,this.x+removeX,this.y+removeY);

    ctx.fillText(this.continent,this.x+removeX,this.y+removeY+35);

    //ctx.fillText(this.h,this.x+removeX+30,this.y+removeY+35);

    };
    */

  /*
        if(this.h>=0||isNaN(this.h)){

            ctx.textBaseline="top";
    ctx.textAlign="left";
    ctx.font="15px Areal";
    ctx.fillStyle="red";

    ctx.fillText(this.f,this.x+removeX,this.y+removeY);

    ctx.fillText(this.g,this.x+removeX,this.y+removeY+35);

    ctx.fillText(this.h,this.x+removeX+30,this.y+removeY+35);

        };
    // */
};
