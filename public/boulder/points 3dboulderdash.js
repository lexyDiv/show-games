<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>this is BOULDER DASH</title>
    <style>
   
      </style>
  </head>
  
  
 <body bgColor="black">


<audio src="ending.mp3" id="ending"  ></audio>
<audio src="oneupzv.mp3" id="oneupzv"  ></audio>
<audio src="zastmuz.mp3" id="zastmuz"  ></audio>
<audio src="level6.mp3" id="level6"  ></audio>
<audio src="level5.mp3" id="level5"  ></audio>
<audio src="level4.mp3" id="level4"  ></audio>
<audio src="level3.mp3" id="level3"  ></audio>
<audio src="level2.mp3" id="level2"  ></audio>
<audio src="level1.mp3" id="level1"  ></audio>
<audio src="sound.wav" id="sound"  ></audio>
<audio src="soundalm.wav" id="soundalm"  ></audio>
<audio src="exitsound.wav" id="exitsound"  ></audio>
<audio src="fly.wav" id="fly"  ></audio>
<audio src="buh.mp3" id="buh"  ></audio>
<audio src="remoove.mp3" id="remoove"  ></audio>
<audio src="buhzem.wav" id="buhzem"  ></audio>
<audio src="buhalm.mp3" id="buhalm"  ></audio>
<audio src="buhtrup.mp3" id="buhtrup"  ></audio>
<audio src="buhtrupalm.mp3" id="buhtrupalm"  ></audio>
<audio src="win.wav" id="win"  ></audio>
<audio src="firzv.mp3" id="firzv"  ></audio>
<audio src="ggg.wav" id="ggg"  ></audio>
<audio src="title.mp3" id="title"  ></audio>
<audio src="miobzv.wav" id="miobzv"  ></audio>






  
  <body>

<canvas id="c"width="1000" height="600" ></canvas>
<script src="https://code.jquery.com/jquery-2.1.0.js"></script>
	<canvas id="canvas" width="1000" height="600"></canvas>




<script type="module">



////////////////

const babaklech=new Image();
babaklech.src="babaklech.png"

const stone3d=new Image();
stone3d.src="stone3d.png"

const ground3d=new Image();
ground3d.src="ground3d.png"

let pressfor=new Image();
pressfor.src="pressfor.png";


let mail=new Image();
mail.src="mail.png";

let  zaplatka2=new Image();
zaplatka2.src="zaplatka2.png";

let  zaplatka=new Image();
zaplatka.src="zaplatka.png";


let  finishostrov=new Image();
finishostrov.src="finishostrov.png";

let  finishzentr=new Image();
finishzentr.src="finishzentr.png";

let  kucha=new Image();
kucha.src="kucha.png";

let  oneup=new Image();
oneup.src="oneup.png";



let  zastamezentr=new Image();
zastamezentr.src="zastamezentr.png";

let  zastavsher=new Image();
zastavsher.src="zastavsher.png";

let  zastavszentr=new Image();
zastavszentr.src="zastavszentr.png";

let  puz=new Image();
puz.src="puz.png";

let  zastokezentr=new Image();
zastokezentr.src="zastokezentr.png";

let  zastokeher=new Image();
zastokeher.src="zastokeher.png";

let  zastafrher=new Image();
zastafrher.src="zastafrher.png";

let  scorpion=new Image();
scorpion.src="scorpion.png";

let  zastafrzentr=new Image();
zastafrzentr.src="zastafrzentr.png";

let  zastledher=new Image();
zastledher.src="zastledher.png";

let  ledsany=new Image();
ledsany.src="ledsany.png";

 let zastledzentr=new Image();
zastledzentr.src="zastledzentr.png";


let  zasther=new Image();
zasther.src="zasther.png";

let  zastsamol=new Image();
zastsamol.src="zastsamol.png";

let  zast1zentr=new Image();
zast1zentr.src="zast1zentr.png";

let  zast1=new Image();
zast1.src="zast1.png";

//////////////////////////////////////////////////////////////////////////////


let  ame=new Image();
ame.src="ame.png";

let  amefon=new Image();
amefon.src="amefon.png";

let  amechudo=new Image();
amechudo.src="amechudo.png";

let  amechudoalm=new Image();
amechudoalm.src="amechudoalm.png";


let  avsfon=new Image();
avsfon.src="avsfon.png";

let  avsstone=new Image();
avsstone.src="avsstone.png";

let  avs=new Image();
avs.src="avs.png";

let  avschudoalm=new Image();
avschudoalm.src="avschudoalm.png";

let  avschudo=new Image();
avschudo.src="avschudo.png";

let  avskirpich=new Image();
avskirpich.src="avskirpich.png";


let  okefon=new Image();
okefon.src="okefon.png";

let  okegolov=new Image();
okegolov.src="okegolov.png";

let  oke=new Image();
oke.src="oke.png";

 let okechudoalm=new Image();
okechudoalm.src="okechudoalm.png";

let  okechudo=new Image();
okechudo.src="okechudo.png";

let  afrchudo=new Image();
afrchudo.src="afrchudo.png";

let  afrfon=new Image();
afrfon.src="afrfon.png";

let  afr=new Image();
afr.src="afr.png";

let  afrkirpich=new Image();
afrkirpich.src="afrkirpich.png";

let  afrstone=new Image();
afrstone.src="afrstone.png";

let  ledmioba=new Image();
ledmioba.src="ledmioba.png";

let  ledchudo=new Image();
ledchudo.src="ledchudo.png";

 let ledchetverka=new Image();
ledchetverka.src="ledchetverka.png";

let  ledfon=new Image();
ledfon.src="ledfon.png";

let  led=new Image();
led.src="led.png";

let  ledalmaz=new Image();
ledalmaz.src="ledalmaz.png";

let  ledkirpich=new Image();
ledkirpich.src="ledkirpich.png";

let  mamont=new Image();
mamont.src="mamont.png";

let  bastpl=new Image();
bastpl.src="bastpl.png";

let  bukvy=new Image();
bukvy.src="bukvy.png";

let  gamaumer=new Image();
gamaumer.src="gamaumer.png";

let  contvopr=new Image();
contvopr.src="contvopr.png";

let  cont=new Image();
cont.src="cont.png";

let  presse=new Image();
presse.src="presse.png";

let  bug=new Image();
bug.src="bug.png";

let  nintendo=new Image();
nintendo.src="nintendo.png";

let  menuoblako=new Image();
menuoblako.src="menuoblako.png";

 let menupochva=new Image();
menupochva.src="menupochva.png";

let  boulderdash=new Image();
boulderdash.src="boulderdash.png";

let  paus=new Image();
paus.src="paus.png";


 let infolevel=new Image();
infolevel.src="infolevel.png";


let  inforamki=new Image();
inforamki.src="inforamki.png";


let  zifry=new Image();
zifry.src="zifry.png";


let  hertrup=new Image();
hertrup.src="hertrup.png";


let  exit=new Image();
exit.src="exit.png";


let  hervin=new Image();
hervin.src="hervin.png";


 let door=new Image();
door.src="door.png";


let  magicWoll=new Image();
magicWoll.src="magicWoll.png";


 let mioba=new Image();
mioba.src="mioba.png";


let  chetverka=new Image();
chetverka.src="chetverka.png";


let  dethstar=new Image();
dethstar.src="dethstar.png";


let  babochka=new Image();
babochka.src="babochka.png";


let  chudo1=new Image();
chudo1.src="chudo1.png";

let  her=new Image();
her.src="her.png";

 let almaz=new Image();
almaz.src="almaz.png";

 let ground=new Image();
ground.src="ground.png";

let  stone=new Image();
stone.src="stone.png";

let  fon=new Image();
fon.src="fon.png";

 let kirpich=new Image();
kirpich.src="kirpich.png";


let fir1=new Image();
fir1.src="fir1.png";

let fir2=new Image();
fir2.src="fir2.png";

let  fir3=new Image();
fir3.src="fir3.png";

let  fir4=new Image();
fir4.src="fir4.png";

let  fir5=new Image();
fir5.src="fir5.png";

let  fir6=new Image();
fir6.src="fir6.png";

let  fir7=new Image();
fir7.src="fir7.png";

let  fir8=new Image();
fir8.src="fir8.png";

let  fir9=new Image();
fir9.src="fir9.png";

let  fir10=new Image();
fir10.src="fir10.png";

let  fir11=new Image();
fir11.src="fir11.png";

let  fir12=new Image();
fir12.src="fir12.png";

let  fir13=new Image();
fir13.src="fir13.png";

let  fir14=new Image();
fir14.src="fir14.png";

let  fir15=new Image();
fir15.src="fir15.png";

let  fir16=new Image();
fir16.src="fir16.png";

let  fir17=new Image();
fir17.src="fir17.png";

let  fir18=new Image();
fir18.src="fir18.png";

let  fir19=new Image();
fir19.src="fir19.png";

let  fir20=new Image();
fir20.src="fir20.png";

let  fir21=new Image();
fir21.src="fir21.png";

let  fir22=new Image();
fir22.src="fir22.png";

let  fir23=new Image();
fir23.src="fir23.png";

let  fir24=new Image();
fir24.src="fir24.png";

let  fir25=new Image();
fir25.src="fir25.png";

let  fir26=new Image();
fir26.src="fir26.png";

let  fir27=new Image();
fir27.src="fir27.png";

let  fir28=new Image();
fir28.src="fir28.png";

let  fir29=new Image();
fir29.src="fir29.png";

let  fir30=new Image();
fir30.src="fir30.png";

let  fir31=new Image();
fir31.src="fir31.png";

let  fir32=new Image();
fir32.src="fir32.png";

let  fir33=new Image();
fir33.src="fir33.png";

let  fir34=new Image();
fir34.src="fir34.png";

let  fir35=new Image();
fir35.src="fir35.png";

let  fir36=new Image();
fir36.src="fir36.png";

let  fir37=new Image();
fir37.src="fir37.png";

let  fir38=new Image();
fir38.src="fir38.png";

let fir39=new Image();
fir39.src="fir39.png";

let fir40=new Image();
fir40.src="fir40.png";

let fir41=new Image();
fir41.src="fir41.png";

let fir42=new Image();
fir42.src="fir42.png";

let fir43=new Image();
fir43.src="fir43.png";

let fir44=new Image();
fir44.src="fir44.png";

let fir45=new Image();
fir45.src="fir45.png";

let fir46=new Image();
fir46.src="fir46.png";

let fir47=new Image();
fir47.src="fir47.png";

let  fir48=new Image();
fir48.src="fir48.png";

let fir49=new Image();
fir49.src="fir49.png";

let fir50=new Image();
fir50.src="fir50.png";

let  fir51=new Image();
fir51.src="fir51.png";

let  fir52=new Image();
fir52.src="fir52.png";

let fir53=new Image();
fir53.src="fir53.png";

let  fir54=new Image();
fir54.src="fir54.png";

let  fir55=new Image();
fir55.src="fir55.png";

let  fir56=new Image();
fir56.src="fir56.png";




//////////////

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

//function main() {
  const canvas = document.querySelector('#c');
  
 


 
  let renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
  
 


  
  const fov = 60;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 10;
  
 let edition=2;
  
var level=1;///////////////////////////////////////////////////////////////////   
  
  
  let saveLevel=5;

let loadControl=function(){
	

if(level===saveLevel){
	saveLevel=level+4;
	load=0;
	
	}
	else{
		load=1;
		};
	
	
};
  
  
  
  
 let geometry=0;
let material=0;
let shadow=0; 
  
  let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
    camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();


  camera.position.z = 3;
  //camera.position.y = 1;
  

  let scene = new THREE.Scene();
  
 
   let lightColor = 0xFFFFFF;
  let intensity = 1;
  let light = new THREE.DirectionalLight(lightColor, intensity);
  light.position.set(-1, 2, 4);


 let lightColor2 = 0xFFFFFF;
  let intensity2 = 1;
  let light2 = new THREE.DirectionalLight(lightColor2, intensity2);
  light2.position.set(1,-2, -4);

 
let loader = new THREE.TextureLoader();
  
 
  
  
  
 let HzFon=function(x,y,z){
	 
	 this.x=x;
	 this.y=y;
	 this.z=z;
	 
	 this.gabX=1;
	 this.gabY=1;
	 this.gabZ=1;
	 this.shadow=0;
	 this.inside=0;

if(level===1){
   geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
   

  material = new THREE.MeshBasicMaterial({map: loader.load("fon3d.png"), transparent: true, opacity: 0})
   

  

this.ground=new THREE.Mesh(geometry, material);
}
else if(level===5){
//////////////////////////////////////////////////////////////////////////////////


    geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
   // loader = new THREE.TextureLoader();

  material = new THREE.MeshBasicMaterial({map: loader.load("ledfon3d.png"), transparent: true, opacity: 0})
   

this.led=new THREE.Mesh(geometry, material);

}
else if(level===9){


for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("afrgruntfon3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.afrfon1=shadow;
}
else if(i===2){
this.afrfon2=shadow;
}
else if(i===3){
this.afrfon3=shadow;
}
else if(i===4){
this.afrfon4=shadow;
};

};


}

	
 }; 
  
  
  
  
  
let Hz=function(x,y,z,type,gabX,gabY,gabZ,color){
	
	this.x=x;
	this.y=y;
	this.z=z;
	this.type=type;
	this.gabX=gabX;
	this.gabY=gabY;
	this.gabZ=gabZ;
	this.geometry=0;
	this.material=0;
	this.rotationX=0;
	this.rotationY=0;
	this.rotationZ=0;
	this.color=color;
	
	this.gSp=0;
	this.vSp=0;
	this.dSp=0;
	
	this.nature=0;
	this.shadow=0;
	this.inside=0;

	
	this.widthSegments = 0;  

this.heightSegments = 0;  

this.depthSegments = 0; 

this.segments=0;
	
this.radius=0;	

this.radialSegments=0;
	
	
	this.moove=0;
	this.moove2=0;
	this.moove3=0;
	///////////////////////////////////////////////////////

if(level===1){
   geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
  // let loader = new THREE.TextureLoader();

 material = new THREE.MeshPhongMaterial({map: loader.load('ground3d.png'), transparent: true, opacity: 0})
   

this.ground=new THREE.Mesh(geometry, material);

}
else if(level===5){

    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

 

  material = new THREE.MeshPhongMaterial({map: loader.load('led3d.png'), transparent: true, opacity: 0})


this.led=new THREE.Mesh(geometry, material);

}
else if(level===9){

for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();
    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);
	
 material = new THREE.MeshPhongMaterial({map: loader.load("afrgrunt3d"+i+"."+"png"), transparent: true, opacity: 0})
   


 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.afrgrunt1=shadow;
}
else if(i===2){
this.afrgrunt2=shadow;
}
else if(i===3){
this.afrgrunt3=shadow;
}
else if(i===4){
this.afrgrunt4=shadow;
};

};

}



///////////////////////////////////////////////////

let radius = 0.5;  

let detail = 2;  

if(level===1){
 geometry = new THREE.DodecahedronBufferGeometry(radius, detail);

//let color=this.color;

    //this.material = new THREE.MeshPhongMaterial({color:0x8844aa});
	   //loader = new THREE.TextureLoader();

 material = new THREE.MeshPhongMaterial({map: loader.load('stone3d.png'), transparent: true, opacity: 0})
	

	
	
	this.stone=new THREE.Mesh(geometry, material);

}
else if(level===5){
	
	
for(let i=1;i<=4;i++){	
	geometry = new THREE.DodecahedronBufferGeometry(radius, detail);

  material = new THREE.MeshPhongMaterial({map: loader.load("ledmam3d"+i+"."+"png"), transparent: true, opacity: 0})

 shadow  = new THREE.Mesh(geometry, material);

if(i===1){
this.mamont1=shadow;	
}
else if(i===2){
this.mamont2=shadow;	
}
else if(i===3){
this.mamont3=shadow;	
}
else if(i===4){
this.mamont4=shadow;	
}

	
};	

}
else if(level===9){


for(let i=1;i<=4;i++){	
	geometry = new THREE.DodecahedronBufferGeometry(radius, detail);

  material = new THREE.MeshPhongMaterial({map: loader.load("afrstone3d"+i+"."+"png"), transparent: true, opacity: 0})

 shadow  = new THREE.Mesh(geometry, material);

if(i===1){
this.afrstone1=shadow;	
}
else if(i===2){
this.afrstone2=shadow;	
}
else if(i===3){
this.afrstone3=shadow;	
}
else if(i===4){
this.afrstone4=shadow;	
}

	
};

}

	
////////////////////////////////////////////////	
	
radius = .5;  

 geometry = new THREE.IcosahedronBufferGeometry(radius);	
 material = new THREE.MeshPhongMaterial({color:0x0000FF ,  opacity: 0,
    transparent: true,});	


	
	this.almaz=new THREE.Mesh(geometry, material);



//this.light = new THREE.PointLight(0x0000FF, 2);
/////////////////////////////////////////////////////////////////

if(level===1){
    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
   // loader = new THREE.TextureLoader();

  material = new THREE.MeshPhongMaterial({map: loader.load('kirpich.png'), transparent: true, opacity: 0})
   

     //new THREE.Mesh(geometry, material);

this.kirpich=new THREE.Mesh(geometry, material);
}
else if(level===5){


    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

  material = new THREE.MeshPhongMaterial({map: loader.load('ledkirpich3d.png'), transparent: true, opacity: 0})
   

  this.ledkirpich= new THREE.Mesh(geometry, material);

}
else if(level===9){


  geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

  material = new THREE.MeshPhongMaterial({map: loader.load('afrkirpich3d.png'), transparent: true, opacity: 0})
   

  this.afrkirpich= new THREE.Mesh(geometry, material);

}

////////////////////////////////////////////////////////////////   her

for(let i=1;i<=16;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("herAnim"+i+"."+"png"), transparent: true, opacity: 1})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.herAnim1=shadow;
}
else if(i===2){
this.herAnim2=shadow;
}
else if(i===3){
this.herAnim3=shadow;
}
else if(i===4){
this.herAnim4=shadow;
}
else if(i===5){
this.herAnim5=shadow;
}
else if(i===6){
this.herAnim6=shadow;
}
else if(i===7){
this.herAnim7=shadow;
}
else if(i===8){
this.herAnim8=shadow;
}
else if(i===9){
this.herAnim9=shadow;
}
else if(i===10){
this.herAnim10=shadow;
}
else if(i===11){
this.herAnim11=shadow;
}
else if(i===12){
this.herAnim12=shadow;
}
else if(i===13){
this.herAnim13=shadow;
}
else if(i===14){
this.herAnim14=shadow;
}
else if(i===15){
this.herAnim15=shadow;
}
else if(i===16){
this.herAnim16=shadow;
}

};


for(let i=1;i<=2;i++){
  //loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("herwin3d"+i+"."+"png"), transparent: true, opacity: 1})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);

if(i===1){
this.herwin1=shadow;
}
else if(i===2){
	this.herwin2=shadow;
};

};

////////////////////////////////////////////////////////////////   chudo


if(level===1){

for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("chudo3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.chudo3d1=shadow;
}
else if(i===2){
this.chudo3d2=shadow;
}
else if(i===3){
this.chudo3d3=shadow;
}
else if(i===4){
this.chudo3d4=shadow;
};

};

}
else if(level===5){


for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("ledchudo3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.ledchudo1=shadow;
}
else if(i===2){
this.ledchudo2=shadow;
}
else if(i===3){
this.ledchudo3=shadow;
}
else if(i===4){
this.ledchudo4=shadow;
};

};

}
else if(level===9){


for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("afrchudo3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.afrchudo1=shadow;
}
else if(i===2){
this.afrchudo2=shadow;
}
else if(i===3){
this.afrchudo3=shadow;
}
else if(i===4){
this.afrchudo4=shadow;
};

};


}


	///////////////////////////////////////////////////////

for(let i=1;i<=4;i++){

    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
    //loader = new THREE.TextureLoader();

  material = new THREE.MeshPhongMaterial({map: loader.load("door3d"+i+"."+"png"), transparent: true, opacity: 0})
   
 shadow  = new THREE.Mesh(geometry, material);
  

if(i===1){
	this.door1=shadow;
}
else if(i===2){
	this.door2=shadow;
}
else if(i===3){
	this.door3=shadow;
}
else if(i===4){
	this.door4=shadow;
};


};






////////////////////////////////////////////////////////////////////////////


 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("star3d.png"), transparent: true, opacity: 1})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);

this.star=shadow;



////////////////////////////////////////////////////////////////   babochka

if(level===1){

for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("babochka3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.babochka1=shadow;
}
else if(i===2){
this.babochka2=shadow;
}
else if(i===3){
this.babochka3=shadow;
}
else if(i===4){
this.babochka4=shadow;
};

};

}

////////////////////////////////////////////////////////////////   mioba

for(let i=1;i<=4;i++){

 // loader = new THREE.TextureLoader();

 material = new THREE.MeshBasicMaterial({map: loader.load("miob3d"+i+"."+"png"), transparent: true, opacity: 0})
   
geometry = new THREE.PlaneBufferGeometry(this.gabX,this.gabY);

 shadow  = new THREE.Mesh(geometry, material);


if(i===1){
this.mioba1=shadow;
}
else if(i===2){
this.mioba2=shadow;
}
else if(i===3){
this.mioba3=shadow;
}
else if(i===4){
this.mioba4=shadow;
};

};



	///////////////////////////////////////////////////////  magic

for(let i=1;i<=4;i++){

    geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

   //let material = new THREE.MeshPhongMaterial({color:0x8844aa});   // greenish blue
   
    //loader = new THREE.TextureLoader();

  material = new THREE.MeshBasicMaterial({map: loader.load("magicwoll3d"+i+"."+"png"), transparent: true, opacity: 0})
   
 shadow  = new THREE.Mesh(geometry, material);
  

if(i===1){
	this.magic1=shadow;
}
else if(i===2){
	this.magic2=shadow;
}
else if(i===3){
	this.magic3=shadow;
}
else if(i===4){
	this.magic4=shadow;
};


};


////////////////////////////////////////////////////////////////   afr grunt









	
};

/*
Hz.prototype.create=function(arg){
	

 if(this.type===1){
	 
   this.geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

    this.material = new THREE.MeshPhongMaterial({color: 0x44aa88});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);


  
 }
 
 else if(this.type===2){
	 
   this.geometry = new THREE.BoxGeometry(this.gabX, this.gabY, this.gabZ);

let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
  else if(this.type===3){
	 
   this.geometry = new THREE.BoxBufferGeometry(this.gabX,this.gabY,this.gabZ);

let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
   else if(this.type===4){
	

	this.widthSegments = 4;  

this.heightSegments = 4;  

this.depthSegments = 4; 
	
   this.geometry = new THREE.BoxBufferGeometry(
    this.gabX, this.gabY, this.gabZ,
    this.widthSegments, this.heightSegments, this.depthSegments);

let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
    else if(this.type===5){
	

this.radius = 1;  

this.segments = 24;  

this.geometry = new THREE.CircleBufferGeometry(this.radius, this.segments);


let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
 
     else if(this.type===6){
	

this.radius = 1;  

this.gabY = 2;  

this.radialSegments = 16;  

this.geometry = new THREE.ConeBufferGeometry(this.radius, this.gabY, this.radialSegments);


let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
 
      else if(this.type===7){
	

this.radiusTop = 1;  

this.radiusBottom = 1;  

this.gabY = 2;  

this.radialSegments = 12;  

this.geometry = new THREE.CylinderBufferGeometry(
    this.radiusTop, this.radiusBottom,this.gabY, this.radialSegments);


let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
	 
 }
 
 
       else if(this.type===8){

let koof=1;
	
this.shape = new THREE.Shape();
const x = -2.5/koof;
const y = -5/koof;
this.shape.moveTo(x + 2.5/koof, y + 2.5/koof);
this.shape.bezierCurveTo(x + 2.5/koof, y + 2.5/koof, x + 2/koof, y, x, y);
this.shape.bezierCurveTo(x - 3/koof, y, x - 3/koof, y + 3.5/koof, x - 3/koof, y + 3.5/koof);
this.shape.bezierCurveTo(x - 3/koof, y + 5.5/koof, x - 1.5/koof, y + 7.7/koof, x + 2.5/koof, y + 9.5/koof);
this.shape.bezierCurveTo(x + 6/koof, y + 7.7/koof, x + 8/koof, y + 4.5/koof, x + 8/koof, y + 3.5/koof);
this.shape.bezierCurveTo(x + 8/koof, y + 3.5/koof, x + 8/koof, y, x + 5/koof, y);
this.shape.bezierCurveTo(x + 3.5/koof, y, x + 2.5/koof, y + 2.5/koof, x + 2.5/koof, y + 2.5/koof);

let extrudeSettings = {
  steps: 2,  

  depth: 2,  

  bevelEnabled: true,  
  bevelThickness: 1,  

  bevelSize: 1,  

  bevelSegments: 2,  

};

this.geometry = new THREE.ExtrudeBufferGeometry(this.shape, extrudeSettings);


////////////////////////////////

let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color});   // greenish blue

  this.shadow = new THREE.Mesh(this.geometry, this.material);	 
	 
//console.log(this.x);	 
 }
 
 else if(this.type===9){
	
let color=this.color;

    this.material = new THREE.MeshPhongMaterial({color}); 



 const loader = new THREE.FontLoader();
    // promisify font loading
    function loadFont(url) {
      return new Promise((resolve, reject) => {
        loader.load(url, resolve, undefined, reject);
      });
    }

    async function doit() {
      const font = await loadFont('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json');  
      hzBox[arg].geometry = new THREE.TextBufferGeometry(' mama-svinka', {
        font: font,
        size: 2.0,
        height: .2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.15,
        bevelSize: .3,
        bevelSegments: 5,
      });
      hzBox[arg].shadow = new THREE.Mesh(hzBox[arg].geometry, hzBox[arg].material);
      hzBox[arg].geometry.computeBoundingBox();
      hzBox[arg].geometry.boundingBox.getCenter(hzBox[arg].shadow.position).multiplyScalar(-1);

      const parent = new THREE.Object3D();
      parent.add();

      addObject(-1, -1, parent);
    }
    doit();	
	 

   
	 
 }

 
      else if(this.type===10){
	


const map = new THREE.TextureLoader().load( 'babaklech.png' );
const material = new THREE.SpriteMaterial( { map: map } );

this.shadow = new THREE.Sprite( material );
//scene.add( sprite );

	
 }
 
      else if(this.type===11){
	

  const loader = new THREE.TextureLoader();

  const materials = [
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
    new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1}),
  ];


 const geometry = new THREE.BoxBufferGeometry(this.gabX,this.gabY,this.gabZ);
 
 

this.shadow  = new THREE.Mesh(geometry, materials);

 
//scene.add( sprite );

	
 } 
 
 
 
       else if(this.type===12){
	

  const loader = new THREE.TextureLoader();

  const materials = new THREE.MeshBasicMaterial({map: loader.load('babaklech.png'), transparent: true, opacity: 1})
   
  


const width = this.gabX;  

const height = this.gabY;  

const geometry = new THREE.PlaneBufferGeometry(width, height);

this.shadow  = new THREE.Mesh(geometry, materials);
//scene.add( sprite );

	
 }
 
 else if(this.type===13){
	 
	 
	 this.shadow=new THREE.Object3D();
	 
	this.babys=[new Hz(0,0,0,4,1,1,1,0x8844aa)]; 
	
	this.babys[0].create();
	 
 }
 
 
	
};
*/
/*
Hz.prototype.anim=function(){


if(this.type===1){


	
	
	this.rotationX+=0.01;
	this.rotationY+=0.01;
	
	
  this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
	
	
	//this.light.position.x+=0.01;
	
	
	////////////////
	
	  scene.add(this.shadow);
  
 
	
	//////////
}

else if(this.type===2){


	
	
	this.rotationX+=0.015;
	this.rotationY+=0.015;
	
	
  this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
	
	
	//this.light.position.x+=0.01;
	
	
	////////////////
	
	  scene.add(this.shadow);
  
 
	
	//////////
}

else if(this.type===3||this.type===4||this.type===5||this.type===6||this.type===7||
this.type===8||this.type===9||this.type===11){

//this.moove++;

//if(this.moove===100){this.type=4;console.log("ok");this.create();};
	//this.create();
	
	this.rotationX+=0.015;
	this.rotationY+=0.015;
	
	
	
  this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
	
	
	//this.light.position.x+=0.01;
	
	
	////////////////
	
	  scene.add(this.shadow);
  
 
	
	//////////
}

else if(this.type===10||this.type===12){


	
	
	//this.rotationX+=0.015;
	//this.rotationY+=0.015;
	this.rotationZ+=0.015;
	//this.z+=0.01;
	
	
	
  this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
	
	
	//this.light.position.x+=0.01;
	
	
	////////////////
	
	  scene.add(this.shadow);
  
 
	
	//////////
}

else if(this.type===13){



//this.x+=0.01;

//this.rotationX+=0.01;
//this.rotationY+=0.01;
this.rotationZ+=0.01;	
	
this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;	
	
	
	this.babys[0].shadow.position.x=-2;
	this.babys[0].shadow.rotation.x+=0.03;
	
	
	
	 scene.add(this.shadow);
	 this.shadow.add(this.babys[0].shadow);
	
	
}
else if(this.type===14){
	
	
	
	
	
}


	
};
*/


Hz.prototype.checkCollision=function(){
	
	
	for(let i=0;i<hzBox.length;i++){
		

		
if(
!(
(this.x+this.gabX/2<hzBox[i].x-hzBox[i].gabX/2)||
(this.x-this.gabX/2>hzBox[i].x+hzBox[i].gabX/2)||

(this.y+this.gabY/2<hzBox[i].y-hzBox[i].gabY/2)||
(this.y-this.gabY/2>hzBox[i].y+hzBox[i].gabY/2)||

(this.z+this.gabZ/2<hzBox[i].z-hzBox[i].gabZ/2)||
(this.z-this.gabZ/2>hzBox[i].z+hzBox[i].gabZ/2)

)
){console.log("ok");};
		
		
	};
	
};



HzFon.prototype.draw=function(){
if(this.inside<1){	
this.inside+=0.1;
};
	
	if(level<5){
				this.shadow=this.ground;
	}
	else if(level>=5&&level<9){
		this.shadow=this.led;
	}
	else if(level>=9&&level<13){
		
	if(chudoAnimY===0){
		this.shadow=this.afrfon1;
	}
	else if(chudoAnimY===200){
		this.shadow=this.afrfon2;
	}
	else if(chudoAnimY===400){
		this.shadow=this.afrfon3;
	}
	else if(chudoAnimY===600){
		this.shadow=this.afrfon4;
	};		
		
	}
	
	
	
			
			this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
			
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;
	
	scene.add(this.shadow);
	
	
	
	
};





Hz.prototype.draw=function(tol,mol){
	

if(this.inside<1){	
this.inside+=0.1;
};	


	
		 if(this.type===1){
			 
			 
			this.gabX=1;
	this.gabY=1;
	this.z=0; 
	this.moove=0;		 
		
			this.shadow=this.almaz;
			
			
			this.rotationX+=0.01;
			this.rotationY+=0.01;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	

//this.light.position.x=this.x;
//this.light.position.y=this.y;
//this.light.position.z=this.z;

this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
	//scene.add(this.light);
		
	}
	
	
	else if(this.type===2){
		
		
		this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
		
		
if(level<5){		
			this.shadow=this.ground;
}
else if(level>=5&&level<9){
	this.shadow=this.led;
}
else if(level>=9&&level<13){
	
	
if(chudoAnimY===0){
		this.shadow=this.afrgrunt1;
	}
	else if(chudoAnimY===200){
		this.shadow=this.afrgrunt2;
	}
	else if(chudoAnimY===400){
		this.shadow=this.afrgrunt3;
	}
	else if(chudoAnimY===600){
		this.shadow=this.afrgrunt4;
	};	
	
	
}
			
			this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
			
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}
	
		else if(this.type===3){
		
		
		this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;	
		this.rotationX=0;


if(level<5){		
		this.shadow=this.stone;
		
		this.rotationZ+=0.01
}
else if(level>=5&&level<9){
	
	this.rotationZ=0;
	this.rotationY=1.5;
	
	if(chudoAnimY===0){
		this.shadow=this.mamont1;
	}
	else if(chudoAnimY===200){
		this.shadow=this.mamont2;
	}
	else if(chudoAnimY===400){
		this.shadow=this.mamont3;
	}
	else if(chudoAnimY===600){
		this.shadow=this.mamont4;
	};
	
	
}
else if(level>=9&&level<13){
	
	this.rotationZ=0;
	this.rotationY=1.5;
	
	if(chudoAnimY===0){
		this.shadow=this.afrstone1;
	}
	else if(chudoAnimY===200){
		this.shadow=this.afrstone2;
	}
	else if(chudoAnimY===400){
		this.shadow=this.afrstone3;
	}
	else if(chudoAnimY===600){
		this.shadow=this.afrstone4;
	};
	
	
}
		
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}
	
			else if(this.type===9){
		
	
this.gabX=1;
	this.gabY=1;
	this.z=0;
this.moove=0;

if(level<5){	
		this.shadow=this.kirpich;
}
else if(level>=5&&level<9){
	this.shadow=this.ledkirpich;
}
else if(level>=9&&level<13){
	this.shadow=this.afrkirpich;
}

		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////	
	
	scene.add(this.shadow);
		
	}
	
			else if(this.type===8){
		
		
	this.gabX=0.8;
	this.gabY=0.8;
	this.z=0.2;
	
		
		//this.shadow=this.kirpich;

if(levelVinTimer<=30||levelVinTimer>=160){
	this.moove=0;
//ctx.drawImage(her,animX,animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		

//else if(levelVinTimer>30&&levelVinTimer<160)


		
		if(animY===0&&animX===0){
		this.shadow=this.herAnim1;			
		}
		else if(animY===0&&animX===200){
		this.shadow=this.herAnim2;			
		}
		else if(animY===200&&animX===0){
		this.shadow=this.herAnim3;			
		}
		else if(animY===200&&animX===200){
		this.shadow=this.herAnim4;			
		}
		else if(animY===200&&animX===400){
		this.shadow=this.herAnim5;			
		}		
		else if(animY===400&&animX===0){
		this.shadow=this.herAnim6;			
		}
		else if(animY===400&&animX===200){
		this.shadow=this.herAnim7;			
		}
		else if(animY===400&&animX===400){
		this.shadow=this.herAnim8;			
		}
		else if(animY===400&&animX===600){
		this.shadow=this.herAnim9;			
		}
		else if(animY===600&&animX===0){
		this.shadow=this.herAnim10;			
		}
		else if(animY===600&&animX===200){
		this.shadow=this.herAnim11;			
		}
		else if(animY===600&&animX===400){
		this.shadow=this.herAnim12;			
		}
		else if(animY===800&&animX===0){
		this.shadow=this.herAnim13;			
		}
		else if(animY===800&&animX===200){
		this.shadow=this.herAnim14;			
		}
		else if(animY===800&&animX===400){
		this.shadow=this.herAnim15;			
		}
		else if(animY===800&&animX===600){
		this.shadow=this.herAnim16;			
		}
		
}	
else if(levelVinTimer>30&&levelVinTimer<160){
	
	this.moove+=0.1;
//if()	
	this.y+=this.moove;
	
	if(levelVinTimer%7===0){this.moove=-0.3;};

if(this.moove>0){	
	this.shadow=this.herwin2;
}
else{	
	this.shadow=this.herwin1;	
};		
	//this.y=-onEkran[tol][mol].y/60;
	

	
};

		
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	

this.shadow.material.opacity=1;/////////////
	
this.shadow.scale.x=this.gabX;
this.shadow.scale.y=this.gabY;

	
	scene.add(this.shadow);


		
	}	
	


			else if(this.type===5||this.type===6){
		
	this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
		//this.shadow=this.kirpich;
	if(level<5){	
		if(chudoAnimY===0){
		this.shadow=this.chudo3d1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.chudo3d2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.chudo3d3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.chudo3d4;			
		};
	}
	else if(level>=5&&level<9){
		
			if(chudoAnimY===0){
		this.shadow=this.ledchudo1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.ledchudo2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.ledchudo3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.ledchudo4;			
		};	
		
	}
		else if(level>=9&&level<13){
		
			if(chudoAnimY===0){
		this.shadow=this.afrchudo1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.afrchudo2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.afrchudo3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.afrchudo4;			
		};	
		
	}	
		
		
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}
	
	
			else if(this.type===10||this.type===11){
		
		this.gabX=1;
	this.gabY=1;
	this.z=0.2;
	this.moove=0;
		//this.shadow=this.kirpich;
		
		if(chudoAnimY===0){
		this.shadow=this.babochka1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.babochka2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.babochka3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.babochka4;			
		};
	
		
		
		
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}	
	
	
	
	
			else if(this.type===13){
		
		
		this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
		
	if(doorOpen===0){
		
		if(level<5){
			this.shadow=this.kirpich;
		}
		else if(level>=5&&level<9){
			this.shadow=this.ledkirpich;
		}
		else if(level>=9&&level<13){
			this.shadow=this.afrkirpich;
		}
			
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////		
		
	}		
	else{	
		//this.shadow=this.kirpich;
		
		if(chudoAnimY===0){
		this.shadow=this.door1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.door2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.door3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.door4;			
		};
	
		
		
		
		
		this.rotationX=0;
			this.rotationY+=0.1;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	};	
	scene.add(this.shadow);
		
	}	
	
else if(this.type===4||this.type===4.1){
	
	
	if(this.moove===0){this.gabX=0.1;this.gabY=0.1;};
	
	
	this.moove++;
	
	
	this.gabX+=0.2;
	this.gabY+=0.2;
	
	this.z+=0.1;
	
			this.shadow=this.star;
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ+=0.5;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;	

this.shadow.scale.x=this.gabX;
this.shadow.scale.y=this.gabY;

	
	
	scene.add(this.shadow);


if(this.moove===12){
	
	this.moove=0;
	
	this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.rotationZ=0;
};

//console.log(this.moove);

	
}
else if(this.type===0){
	
	this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
}



			else if(this.type===7){
		
	this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
		//this.shadow=this.kirpich;
		
		if(chudoAnimY===0){
		this.shadow=this.mioba1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.mioba2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.mioba3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.mioba4;			
		};
	
		
		
		
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}

			else if(this.type===12){
		
	this.gabX=1;
	this.gabY=1;
	this.z=0;
	this.moove=0;
		//this.shadow=this.kirpich;
	
if(magic===0){
	this.shadow=this.ledkirpich;
	}
	else{
		if(chudoAnimY===0){
		this.shadow=this.magic1;			
		}
		else if(chudoAnimY===200){
		this.shadow=this.magic2;			
		}
		else if(chudoAnimY===400){
		this.shadow=this.magic3;			
		}
		else if(chudoAnimY===600){
		this.shadow=this.magic4;			
		};
	
	};
		
		
		
		this.rotationX=0;
			this.rotationY=0;
			this.rotationZ=0;
		
		this.shadow.position.x=this.x;
  this.shadow.position.y=this.y;
  this.shadow.position.z=this.z;
	
	this.shadow.rotation.x=this.rotationX;
	this.shadow.rotation.y=this.rotationY;
	this.shadow.rotation.z=this.rotationZ;
	
this.shadow.material.opacity=this.inside;/////////////
	
	scene.add(this.shadow);
		
	}



	
	
};


var hzBoxFones=[];


var hzBox=[

/*
new Hz(-2,0,0,2,1,1,1,0x8844aa),
new Hz(-2,-1,0,2,1,1,1,0x8844aa),
new Hz(-1,-1,0,2,1,1,1,0x8844aa),
new Hz(-0,-1,0,1,1,1,1,0x8844aa),
new Hz(1,-1,0,2,1,1,1,0x8844aa),
new Hz(-1,0,0,3,1,1,1,0x8844aa)
*/

//new Hz(0,0,0,1,1,1,1,0x8844aa),
//new Hz(0,0,0,13,1,1,1),


//new Hz(0,0,0,12,1,1,1,0x8844aa),

//new Hz(0,0,0,11,1,1,1,0x8844aa),

//new Hz(0,0,0,10,1,1,1),

//new Hz(-11,0,0,9,1,1,1,0x8844aa),
//new Hz(0,0,-40,8,1,1,1,0xaa8844),
//new Hz(-4,0,0,7,1,1,1,0xaa8844),
//new Hz(2,0,0,6,1,1,1,0x8844aa),
//new Hz(-2,0,0,3,1,1,1,0x8844aa),

//new Hz(0,0,0,4,1,1,1,0x8844aa),/////////////////

//new Hz(4,0,0,5,1,1,1,0x8844aa),

//new Hz(-2,0,0,2,1,1,1,0x8844aa),

//new Hz(2,0,0,2,1,1,1,0xaa8844),

//new Hz(-7,0,0,1,1,1,1),

];






//let her=new Hz(-100,0,0,1,1,1,1)

//her.create();
  
 
//for(let i=0;i<hzBox.length;i++){
// hzBox[i].create(i);
//};
  
  
  
  
  
  
 // let timer=0;
  




//let okey=0;
 
 let onDraw=function(){
	
 let lev=levelObj1;

	

	

//if(okey===0){

for(var h=0;h<22;h++){
	
	hzBox.unshift([]);
	hzBoxFones.unshift([]);
	
};
//okey=1;

//console.log(hzBox);

for(var tol=0;tol<22;tol++){
	
for(var mol=0;mol<40;mol++){
	
	
	//onEkran[tol][mol].checkCell(tol,mol);
	
	hzBox[tol].push(
new Hz(mol,-tol,0,0,1,1,1)
	);
	
	
		hzBoxFones[tol].push(
new HzFon(mol,-tol,-0.5)
	);
	
//if(tol===0&&mol===0){console.log(hzBoxFones[tol][mol].x);};	
	
};	
	
};



	
};


	
	 
	 
	 
	 
 //};
 
 //onDraw();
 

  
  
/////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////////////// 

	
	
	
	




var ending=document.getElementById("ending");
var oneupzv=document.getElementById("oneupzv");
var zastmuz=document.getElementById("zastmuz");
var miobzv=document.getElementById("miobzv");
var title=document.getElementById("title");
var win=document.getElementById("win");
var buhtrupalm=document.getElementById("buhtrupalm");
var buhtrup=document.getElementById("buhtrup");
var buhalm=document.getElementById("buhalm");
var buhzem=document.getElementById("buhzem");
var remoove=document.getElementById("remoove");
var buh=document.getElementById("buh");
var fly=document.getElementById("fly");
var level6=document.getElementById("level6");
var level5=document.getElementById("level5");
var level4=document.getElementById("level4");
var level3=document.getElementById("level3");
var level1=document.getElementById("level1");
var level2=document.getElementById("level2");
var sound=document.getElementById("sound");
var soundalm=document.getElementById("soundalm");
var exitsound=document.getElementById("exitsound");
var firzv=document.getElementById("firzv");
var ggg=document.getElementById("ggg");



	
var canvas2 = document.getElementById("canvas");
var ctx = canvas2.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width = canvas2.width;
var height = canvas2.height;

$("#canvas").css({position:"absolute",left:150,top:30});
$("#c").css({position:"absolute",left:150,top:30});
//$("#canvas").hide();
///////////////////////////////////////////////////////////////////////////







var selectKeysControl=function(){
	
	//if(menuTimer)
	
};











var upScore=0;
var scoreSafe=0;

var oneUpControl=function(){
	
upScore=score-scoreSafe;

if(upScore>=3000){
	scoreSafe+=3000;lives++;
	
infoIn.push(new Info(300,300,"1up"));	

oneupzv.currentTime=0;
oneupzv.play();
	
	};	

};




var zast=0;
var zastTimer=0;
var zastAnimBox=[];
var zastSvet=0;

var zastavka=function(){

if(zastTimer===0){

	
if(level===1){
	
zastAnimBox=[
new ZastAnimObj(1000,150,"zentr"),
new ZastAnimObj(1000,150,"samol"),
new ZastAnimObj(1030,172,"zasther"),
new ZastAnimObj(1000,150,"zast1"),

]
	
}
else if(level===5){
	zastAnimBox=[
	
new ZastAnimObj(1000,150,"zastledzentr"),
new ZastAnimObj(1000,230,"ledsany"),
new ZastAnimObj(1087,210,"zastledher"),
new ZastAnimObj(1000,150,"zast1"),	
	
	
	];
}
else if(level===9){
	zastAnimBox=[

new ZastAnimObj(1000,150,"zastafrzentr"),
new ZastAnimObj(300,230,"scorpion"),
new ZastAnimObj(650,240,"zastafrher"),
new ZastAnimObj(1000,150,"zast1"),	
	
	];
}
else if(level===13){
	zastAnimBox=[
	
	new ZastAnimObj(1000,150,"zastokezentr"),
new ZastAnimObj(300,230,"puz"),
new ZastAnimObj(700,200,"zastokeher"),

new ZastAnimObj(-750,200,"osm"),
new ZastAnimObj(-820,150,"osm"),
new ZastAnimObj(-900,250,"osm"),

new ZastAnimObj(1000,150,"zast1"),	
	
	];
}
	else if(level===17){
	zastAnimBox=[
	
new ZastAnimObj(1000,150,"zastavszentr"),
new ZastAnimObj(800,300,"zastavsher"),

new ZastAnimObj(750,200,"zastavsalm"),
new ZastAnimObj(-550,250,"zastavspig"),
new ZastAnimObj(-600,250,"zastavspig"),

new ZastAnimObj(-600,250,"star"),

new ZastAnimObj(1000,150,"zast1"),	
	
	
	
	];
}

	else if(level===21){
	zastAnimBox=[
	
new ZastAnimObj(190,64,"zastamezentr"),
new ZastAnimObj(1000,280,"zastameher"),



new ZastAnimObj(400,230,"starame"),
new ZastAnimObj(400,230,"starame2"),
new ZastAnimObj(400,230,"starame3"),
new ZastAnimObj(400,230,"starame4"),
new ZastAnimObj(400,230,"starame5"),

new ZastAnimObj(1000,150,"zast1"),	
	
	
	
	];
}

	else if(level===25){
	zastAnimBox=[




	
new ZastAnimObj(1000,150,"zentr"),
new ZastAnimObj(200,50,"menuoblako"),
new ZastAnimObj(1000,150,"samol"),
new ZastAnimObj(1030,172,"zasther"),

new ZastAnimObj(1000,150,"zast1"),	
	
	
	
	
	
	
	
	
	
new ZastAnimObj(190,64,"finishzentr"),

new ZastAnimObj(250,200,"kucha"),
new ZastAnimObj(-60,265,"zastfinishher"),



//new ZastAnimObj(400,230,"starame"),
//new ZastAnimObj(400,230,"starame2"),
//new ZastAnimObj(400,230,"starame3"),
//new ZastAnimObj(400,230,"starame4"),
//new ZastAnimObj(400,230,"starame5"),

new ZastAnimObj(1000,150,"zast1"),	
new ZastAnimObj(0,0,"zaplatka"),
new ZastAnimObj(0,0,"zaplatka2"),

new ZastAnimObj(-60,265,"finishostrov"),
	
///////////////////////////////////////////////////////////////////


	
	];
}
	
	
};


if(zastTimer===2){
	

if(level<25){	
zastmuz.volume=1;
zastmuz.currentTime=0;
zastmuz.play();
}
else{
	
};


};

	

if(zast===1){
title.pause();

if(level<25){	
zastTimer++;
}
else{
	
	zastTimer+=1/4;
	
};	


if(zastTimer>3){
//zastAnim();

for(var i=0;i<zastAnimBox.length;i++){
	
	zastAnimBox[i].draw();
	
};


if(zastTimer>230){

if(zastTimer===231){	
zastmuz.volume=0.8;
};
	
if(zastTimer===233){	
zastmuz.volume=0.7;
};

if(zastTimer===235){	
zastmuz.volume=0.5;
};

if(zastTimer===240){	
zastmuz.volume=0.2;
};

//console.log(zastmuz.volume);

	
ctx.globalAlpha=zastSvet;

ctx.fillStyle="black";

ctx.fillRect(0,0,width,height);

ctx	.globalAlpha=1;	

if(zastSvet<1){
zastSvet+=0.1;




};
};


if(edition===2&&zastSvet>0&&load===0){	
ctx.textBaseline="top";
ctx.textAlign="left";
ctx.font="60px Areal";	
ctx.fillStyle="green";
ctx.strokeStyle="white";	
ctx.fillText("L O A D I N G",320,300);
ctx.strokeText("L O A D I N G",320,300);

};


};


if(zastTimer===250){
	zastmuz.pause();
	start();
	zast=0;
	zastTimer=0;
	zastSvet=0;
};

	
};



	
	
};



var ZastAnimObj=function(x,y,type){
	
	this.x=x;
	this.y=y;

	this.type=type;
	this.animX=0;
	this.animY=0;
	this.gabX=0;
	this.gabY=0;
	this.gSp=0;
this.vSp=0;

this.moove=0;
this.moove1=0;
this.moove2=0;
this.moove3=0;
this.moove4=0;
this.moove5=0;
this.moove6=0;
this.moove7=0;
this.moove8=0;
this.moove9=0;
this.moove10=0;
	
	
};


ZastAnimObj.prototype. draw=function(){

if(this.type==="samol"){

if(level<25||(level===25&&this.moove>203)){

ctx.drawImage(zastsamol,this.animX,this.animY,200,200,this.x,this.y,100,100);

//this.moove++;

if(this.moove%5===0){
	this.animX+=200;
};

if(this.animX===400){this.animX=0;};

this.x-=4;
};
this.moove++;
}		
else if(this.type==="zentr"){
	
if(level<25||(level===25&&this.moove>203)){	
ctx.drawImage(zast1zentr,0,0,200,200,190,64,632,300);
};

this.moove++;
	
}

else if(this.type==="zast1"){
	
//if(level<25||(level===25&&this.moove<200)){	
ctx.drawImage(zast1,0,0,256,224,0,0,width,height);	
//};

this.moove++;

}

else if(this.type==="zasther"){

if(level<25||(level===25&&this.moove>203)){
	
ctx.drawImage(zasther,this.animX,this.animY,200,200,this.x,this.y,50,50);	

this.x-=4;

if(this.x<550){
	
	
	
	//this.moove++;
	
	if(this.moove%5===0){

if(this.moove2===0){this.x-=10;this.moove2=1;};
		
		this.animX+=200;
	
if(this.animX===800){this.animX=200;}	
	
	};
	

	
};
};
this.moove++;	
}

else if(this.type==="zastledzentr"){
	
ctx.drawImage(zastledzentr,0,0,200,200,190,64,632,300);	
	
}

else if(this.type==="ledsany"){



ctx.drawImage(ledsany,this.animX,this.animY,200,200,this.x,this.y,150,100);

this.moove++;

if(this.moove%5===0){
	this.animX+=200;
};

if(this.animX===400){this.animX=0;};

this.x-=4;


}
else if(this.type==="zastledher"){
	
ctx.drawImage(zastledher,this.animX,this.animY,200,200,this.x,this.y,70,70);	

this.x-=4;

if(this.x<550){
	
	
	
	this.moove++;
	
	if(this.moove%5===0){

//if(this.moove2===0){this.x-=10;this.moove2=1;};
		
		this.animX+=200;
	
if(this.animX===600){this.animX=200;}	
	
	};
	

	
};

	
}
else if(this.type==="zastafrzentr"){
	
ctx.drawImage(zastafrzentr,0,0,200,200,190,64,632,300);	
	
}
else if(this.type==="scorpion"){
	
ctx.drawImage(scorpion,this.animX+this.moove2,this.animY,200,200,this.x+110,this.y+50,50,50);	
	
this.moove++;

if(this.moove%8===0){
	
	this.animX+=200;
	
if(this.animX===400){this.animX=0;};	
};

if(this.moove>=100){this.moove2=400;this.x+=5;}
	
}
else if(this.type==="zastafrher"){
	
ctx.drawImage(zastafrher,this.animX,this.animY,200*this.moove5,200,this.x,this.y+40,50*this.moove5,50);	

this.moove++;


if(this.moove3===0){
	this.moove5=1;
this.x-=4;

if(this.moove%5===0){

if(this.moove4===0){
this.animX+=200;
}
else {this.animX-=200;};

if(this.animX===400){this.moove4=1;};
if(this.animX===0){this.moove4=0;};


	
};


if(this.x<470){this.moove3=1;};
};




if(this.moove3===1){
	
	this.animY=200;
	this.moove5=1.5;
if(this.moove6===0){this.animX=0;this.moove6=1;this.x-=10;};	

if(this.moove%5===0){

this.animX+=300;

if(this.animX===600){this.animX=0;};
	
};	
	
	
};

///*
if(zastAnimBox[1].moove>=100&&this.moove7===0){
	this.moove3=2;
	this.animX=0;
	this.moove5=1;
	this.animY+=200;
	this.moove7=1;
	this.x+=5;
	this.moove4=0;
	};


if(this.moove3===2){
	
if(this.moove%2===0){


if(this.moove4===0){
this.animX+=200;
}
else {this.animX-=200;};

if(this.animX===400){this.moove4=1;};
if(this.animX===0){this.moove4=0;};

//console.log(this.animX);

};	
this.x+=7;	
};

//*/
	
}
else if(this.type==="zastokezentr"){
	
ctx.drawImage(zastokezentr,0,0,200,200,190,64,632,300);	
	
}
else if(this.type==="zastokeher"){
	
ctx.drawImage(zastokeher,this.animX+this.moove5,this.animY,200,200,this.x,this.y,50,50);	

this.moove++;

if(this.moove===120){this.moove4=1;};
//console.log(this.moove);

if(this.moove%5===0){


if(this.moove4===0){	
	this.animX+=200;
	if(this.animX===400){this.animX=0;};
}
else{

this.moove5=400;

this.animX+=200;
	if(this.animX===400){this.animX=0;};	
	
};


	
};

if(this.moove%15===0&&this.moove4===0){
	

	zastAnimBox.pop();

zastAnimBox.push(new ZastAnimObj(this.x-43,this.y-50,"puz"));
zastAnimBox.push(new ZastAnimObj(1000,150,"zast1"));
	
}
else if(this.moove%3===0&&this.moove4===1){
	

	zastAnimBox.pop();

zastAnimBox.push(new ZastAnimObj(this.x-43,this.y-25,"puz"));
zastAnimBox.push(new ZastAnimObj(1000,150,"zast1"));
	
}


if(this.moove4===0){
this.x-=5;
}
else{this.x+=7;};


if(this.y<190){this.moove2=1;};
if(this.y>210){this.moove2=0;};

if(this.moove2===0){this.moove3-=0.1;};
if(this.moove2===1){this.moove3+=0.1;};

this.y=this.y+this.moove3;

}

else if(this.type==="puz"){
	
ctx.drawImage(puz,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=3;

this.x=this.x+this.moove;

if(this.moove<-0.5){this.moove2=1;};
if(this.moove>0.5){this.moove2=0;};

if(this.moove2===0){this.moove-=0.1;};
if(this.moove2===1){this.moove+=0.1;};

	
}
else if(this.type==="osm"){
	
ctx.drawImage(okechudoalm,this.animX,this.animY,200,200,this.x,this.y,50,50);	

this.x+=6;

this.moove++;

if(this.moove%5===0){
this.animY+=200;

if(this.animY===800){this.animY=0;};
};
	
}

else if(this.type==="zast1"){
ctx.drawImage(zast1,0,0,256,224,0,0,width,height);	
}

else if(this.type==="zastavszentr"){
	
ctx.drawImage(zastavszentr,0,0,200,200,190,64,632,300);	
	
}
else if(this.type==="zastavsher"){
	
	ctx.drawImage(zastavsher,this.animX,this.animY,200,200,this.x,this.y,50,50);	

this.moove++;

//console.log(this.moove);

if(this.moove<50){

this.animY=200;
if(this.moove%5===0){


if(this.moove4===0){
this.animX+=200;
}
else {this.animX-=200;};

if(this.animX===400){this.moove4=1;};
if(this.animX===0){this.moove4=0;};

//console.log(this.animX);

};	

this.x-=7;

}
else if(this.moove===50){
	this.animX=400;
}
else if(this.moove===60){
	this.animX=0;
	this.animY=400;
}
else if(this.moove===70){
	this.animX=400;
	this.animY=200;
}
else if(this.moove===90){
	this.animX=0;
	this.animY=400;
}
else if(this.moove===160){
	this.animX=0;
	this.animY=0;
	this.moove2=-2;
	
	//buhtrup.play();
}
else if(this.moove>160&&this.moove<170){


	
this.x+=7;
this.y=this.y+this.moove2;

this.moove2+=0.5;	
	
}


if(this.moove>=180){
	
this.y-=5;	
	
};

if(this.moove===159){buhtrup.play();};


if(this.moove>190){
	
this.x=zastAnimBox[4].x;
this.y=zastAnimBox[4].y;	
	
};
	


	
}
else if(this.type==="zastavsalm"){
	
	ctx.drawImage(zastavsher,0,600,200,200,this.x,this.y,50,50);	
	
this.moove++;

if(this.moove<160){
this.x=zastAnimBox[1].x;
this.y=zastAnimBox[1].y-50;
};

if(this.moove>165){
	
this.x=zastAnimBox[3].x;
this.y=zastAnimBox[3].y;	
	
};
	
	
}

else if(this.type==="zastavspig"){


ctx.drawImage(avschudoalm,this.animX,this.animY,200,200,this.x,this.y+50,50,50);
	
this.x+=6;

this.moove++;

if(this.moove%5===0){
this.animY+=200;

if(this.animY===800){this.animY=0;};
};	
	
}

else if(this.type==="star"){
	
	if(this.moove===159){this.moove3=1;}
	
	if(this.moove>=160){
		
this.x=zastAnimBox[1].x-25;
this.y=zastAnimBox[1].y;
	
	ctx.save();

ctx.globalAlpha=this.moove3;

if(this.moove3>0.1){
	
	this.moove3-=0.1;
};

ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();	

this.moove4+=20;

	};
	
	//if(this.moove<170){this.x+=3;};
	
	this.moove++;
	

	
	
}

else if(this.type==="zastamezentr"){

this.moove++;

	
ctx.drawImage(zastamezentr,0,0,200,200,this.x,this.y,632,300);	

if(this.moove%2===0){
	this.moove2=5;
}
else{this.moove2=-5;};

if((this.moove>=100&&this.moove<120)||(this.moove>=200&&this.moove<220)){
	
	this.y+=this.moove2;
	
};

	
}
else if(this.type==="zastameher"){
	
		

this.moove++;

if(this.moove<100){
	
	ctx.drawImage(zastafrher,this.animX,this.animY,200,198,this.x,this.y,60,60);
	
if(this.moove%5===0){
this.animX+=200;
if(this.animX===800){this.animX=0;};
};
this.x-=3;
this.moove2=-3;
};


if((this.moove>=100&&this.moove<150)||(this.moove>=200)){
	
	if(this.moove===100){buhtrupalm.currentTime=0.5;buhtrupalm.play();};
	if(this.moove===200){buhtrupalm.currentTime=0.5;buhtrupalm.play();};
	
	this.animY=0;
	this.animX=200;
	
ctx.drawImage(zastavsher,this.animX,this.animY,200,198,this.x,this.y,60,60);

if(this.y<=280){
this.x-=5;
this.y+=this.moove2;	
this.moove2+=0.4;
};
if(this.moove===149){this.moove2=-3;};	
};


if(this.moove>=150&&this.moove<200){
	
	if(this.moove===150){this.animX=0;this.animY=200;};
	
ctx.drawImage(zastavsher,this.animX,this.animY,200,198,this.x,this.y,60,60);	

if(this.moove%5===0){
this.animX+=200;

if(this.animX===600){this.animX=0;};

};

this.x-=5;
this.y=280;
	
};


	
}

else if(this.type==="starame"){
	
this.moove++;

if(this.moove===200){this.x=400;this.y=230};	

if(this.moove>=100){


ctx.save();
	
ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();

	

this.moove4+=20;


this.y-=8;
	
}

	
}

else if(this.type==="starame2"){
	
this.moove++;	


if(this.moove===200){this.x=400;this.y=230};	

if(this.moove>=100){


ctx.save();
	
ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();

	

this.moove4+=20;


this.y-=8;
this.x-=2;
	
}

	
}


else if(this.type==="starame3"){
	
this.moove++;	


if(this.moove===200){this.x=400;this.y=230};	

if(this.moove>=100){


ctx.save();
	
ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();

	

this.moove4+=20;


this.y-=8;
this.x+=2;
	
}

	
}


else if(this.type==="starame4"){
	
this.moove++;	


if(this.moove===200){this.x=400;this.y=230};	

if(this.moove>=100){


ctx.save();
	
ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();

	

this.moove4+=20;


this.y-=8;
this.x-=5;
	
}

	
}


else if(this.type==="starame5"){
	
this.moove++;	


if(this.moove===200){this.x=400;this.y=230};	

if(this.moove>=100){


ctx.save();
	
ctx.translate(this.x+35, this.y+35);

ctx.rotate(this.moove4*Math.PI/180);
	
ctx.drawImage(dethstar,0,200,200,200,-35,-35,70,70);	

ctx.restore();

	

this.moove4+=20;


this.y-=8;
this.x+=5;
	
}


	
}

else if(this.type==="finishzentr"){
	
	if(this.moove<200){	
ctx.drawImage(finishzentr,0,0,200,200,this.x,this.y,632,300);	
	};
	this.moove++;
}

else if(this.type==="kucha"){


if(this.moove<200){		
ctx.drawImage(kucha,this.animX,0,200,200,this.x+65,this.y-26,400,150);	
};


if(this.moove%3===0){
	
	if(this.moove2===0){
	this.animX+=200;
	}
	else{
		this.animX-=200;
	};
	
	if(this.animX===600){this.moove2=1;};
	if(this.animX===0){this.moove2=0;};


//console.log(this.animX);	
};

this.moove++;
	
}

else if(this.type==="zastfinishher"){
	
	
	if(this.moove===0){this.animY=600;this.moove3=5;this.moove4=her};
	
if(this.moove<200){		
ctx.drawImage(this.moove4,this.animX,this.animY,200,198,this.x,this.y,60,60);	
};

if(this.moove%5===0){


if(this.moove<108){	
	this.animX+=200;
	if(this.animX===600){this.animX=0;};
}
else{
	
	this.animX+=200;
	
	if(this.animX===400){this.animX=0;};
	
};	
	
};

this.moove++;

this.x+=this.moove3;
this.y+=this.moove2;


if(this.moove===70){this.moove2=-15;};

if(this.moove>70&&this.moove<108){this.moove2+=1;};
if(this.moove===90){this.moove2=-10;};
if(this.moove===108){
	this.moove2=0;this.moove3=0;this.moove4=hervin;this.animY=0;this.animX=0;
	//console.log(this.y);
	};
if(this.moove===109){this.moove2=-10;};

if(this.moove>110){this.moove2+=2;};

if(this.y>140&&this.moove>110){this.moove2=-10;};
	
}

else if(this.type==="zaplatka"){
	
if(this.moove<200){	
ctx.drawImage(zaplatka,0,0,200,200,0,-130,1000,350);
ctx.drawImage(zaplatka,0,200,200,200,-30,300,1000,350);
};

this.moove++;
	
}

else if(this.type==="zaplatka2"){
	
if(this.moove>=200&&this.moove<400){	
ctx.drawImage(zaplatka2,0,0,200,200,0,-140,1000,350);
ctx.drawImage(zaplatka2,0,0,200,200,0,300,1000,350);

if(this.moove>203){
ctx.drawImage(zaplatka2,0,200,200,200,193,140,623,380);

};

};

this.moove++;
	
}

else if(this.type==="menuoblako"){
	
	if(this.moove>203){
		
ctx.drawImage(menuoblako,0,0,200,200,this.x++,this.y,100,100);

	ctx.drawImage(menuoblako,0,0,200,200,this.moove2+100,this.y+100,150,100);	
	

this.moove2+=2;
	
	};
	
	
	this.moove++;
}
else if(this.type==="finishostrov"){
	
	this.moove++;
	
	ending.volume=this.moove3;
	
	if(this.moove===1){
		
		ending.currentTime=0;
		ending.play();
		this.moove3=1;
	};
	
	
	
	if(this.moove>=500&&this.moove3>0.2){
		
		this.moove3-=0.05;
		
	};
	
	if(this.moove3<=0.2&&this.moove2===0){ending.pause();this.moove2=1;};
	
	if(this.moove>400){
		
		
	ctx.drawImage(finishostrov,this.animX,this.animY,200,200,190,66,632,300);

	ctx.drawImage(mail,0,0,200,200,370,300,300,300);

if(this.moove%5===0){
	
	if(this.animX===0){this.animX=200;}
	else{this.animX=0;};
	
};

	
	};
	
}

	
};


/*
ctx.save();


ctx.translate(this.x+45, this.y+34);

ctx.rotate(this.moove*Math.PI/180);


//if(this.moove>=360){this.moove=0;};
this.moove+=10.8;

	if(this.type===23){
ctx.drawImage(spider,this.animX,0,70,90,-45,-34,this.gabX,this.gabY);
	};
	
ctx.restore();
*/




var suizide=0;


var suizideControl=function(){
	
	if(suizide===1){
		
		suizide=0;
		
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
if(onEkran[tol][mol].type===8){		
	onEkran[tol][mol].type=0;
};	
};	
	
};		
		
		
		
	};
	
	
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////


var BastNames=function(name,score){
	
	this.name=name;
	this.score=score;
	
};




var bastPlayers=[

new BastNames("mokriy kot",300),
new BastNames("kolya",250),
new BastNames("viniamin",230),
new BastNames("kallmyk",175),
new BastNames("troll",150),
new BastNames("olenka",70)

];



var bastLitersBox=[[],[],[],[],[],[]];

var bastScoreBox=[[],[],[],[],[],[]];


var BastLiters=function(type){
	
	this.type=type;
	
};



var BastScore=function(type){
	
	this.type=type;
	
};



var obrabStart=function(){
	
	for(var i=0;i<bastPlayers.length;i++){
		
		bastPlayers[i].obrab(i);
		
	};
	
};




BastNames.prototype.obrab=function(i){
	
var max=18;

if(this.name.length<=max){
	max=this.name.length;
};	
	
	
	
for(var k=0;k<max;k++){
	
	bastLitersBox[i].push(new BastLiters(this.name[k]));
	
};	



for(var p=0;p<bastLitersBox.length;p++){
	
	for(var h=0;h<bastLitersBox[p].length;h++){
		
		bastLitersBox[p][h].obrab(p,h);
		
	};
	
	
};
///////////////////////////////////////

for(var k=0;k<this.score.toString().length;k++){
	
	bastScoreBox[i].push(new BastScore(this.score.toString()[k]));
	
};	



for(var p=0;p<bastScoreBox.length;p++){
	
	for(var h=0;h<bastScoreBox[p].length;h++){
		
		bastScoreBox[p][h].obrabScore(p,h);
		
	};
	
	
};



	
};






 BastScore.prototype.obrabScore=function(p,h){
	
var ochki=["0","1","2","3","4","5","6","7","8","9"];	

for(var i=0;i<ochki.length;i++){
	
	if(this.type===ochki[i]){
		
		this.animX=i*50;
		
	};
	
};


     if(p===0){this.y=200;}
else if(p===1){this.y=250;}
else if(p===2){this.y=300;}
else if(p===3){this.y=350;}
else if(p===4){this.y=400;}
else if(p===5){this.y=450;};
	

this.x=670+h*20;

	
};










 BastLiters.prototype.obrab=function(p,h){
	
var alfabeth=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"," "];	

for(var i=0;i<alfabeth.length;i++){
	
	if(this.type===alfabeth[i]){
		
		this.animX=i*50;
		
	};
	
};


     if(p===0){this.y=200;}
else if(p===1){this.y=250;}
else if(p===2){this.y=300;}
else if(p===3){this.y=350;}
else if(p===4){this.y=400;}
else if(p===5){this.y=450;};
	

this.x=270+h*20;

	
};




BastLiters.prototype.draw=function(){
	
	//console.log("ok");
ctx.drawImage(bukvy,this.animX,0,50,50,this.x,this.y,20,20);	
	
};


BastScore.prototype.draw=function(){
	
	//console.log("ok");
ctx.drawImage(zifry,this.animX,0,50,50,this.x,this.y,20,20);	
	
};



var bastOtris=function(){
	
for(var p=0;p<bastLitersBox.length;p++){
	
	for(var h=0;h<bastLitersBox[p].length;h++){
		
		bastLitersBox[p][h].draw();
		
	};
	
	
};

	//bastLitersBox[0][0].daraw();
	
	//console.log(bastLitersBox);
	
	
	
for(var p=0;p<bastScoreBox.length;p++){
	
	for(var h=0;h<bastScoreBox[p].length;h++){
		
		bastScoreBox[p][h].draw();
		
	};
	
	
};	
	
	
	
	
};




var bastCheck=function(){
	
	var lol=[];
	
	
for(var i=0;i<bastPlayers.length;i++){
	
	if(score>bastPlayers[i].score){//console.log(i)
		
		var pro=prompt("enter your name");
		
		if(pro){
			
	//bastPlayers[i].score=score;
	//bastPlayers[i].name=pro;
			
		for(var k=0;k<6-i;k++){	
			
		lol.unshift(bastPlayers.pop());	
			
		};
		
		
		bastPlayers.push(new BastNames(pro,score) );
		
		var sav=lol.length;


for(var t=0;t<sav-1;t++){

bastPlayers.push(lol.shift());
};

		
		//bastPlayers.pop();
		//console.log(bastPlayers);
		
			
		break;	
		}
		
		
break;		
		
	};
	
};	
	

	
};




///////////////////////////////////////////////////////////////////////////////////////////////////



var Menu=function(x,y,type,name){
	
	this.name=name;
	
	this.x=x;
	this.y=y;
	this.type=type;
	this.animX=0;
	this.animY=0;
	this.gabX=0;
	this.gabY=0;
	this.gSp=gSp;
this.vSp=vSp;

this.moove=0;
this.moove1=0;
this.moove2=0;
this.moove3=0;
this.moove4=0;
this.moove5=0;
this.moove6=0;
this.moove7=0;
this.moove8=0;
this.moove9=0;
this.moove10=0;

if(this.type==="time"){this.animX=450;};
	
};











var contBox=[];
var levelSave=0;
var ok=0;

var isContinue=0;

var continueControl=function(){

if(zast===0){
	
	if(menuTimer===-999){
		
		contBox=[
		
		new Menu(280,100,"cont"),
			new Menu(610,165,"vopr"),
		new Menu(450,300,"time"),
		new Menu(300,270,"gama")
		
		];
		
	};
	
	
	if(level>levelSave){levelSave=level;};
	
	if(menuTimer<0){
		
		isContinue=1;
		
		for(var i=0;i<contBox.length;i++){
			
			contBox[i].drawCont();
			
		};
		
	if(contBox[2]&&contBox[2].animX>0&&ok===1){
		
		ok=0;
		
		if(levelSave<5){
			level=1;
		}
		else if(levelSave>=5&&levelSave<9){
			level=5;
		}
			else if(levelSave>=9&&levelSave<13){
			level=9;
		}
			else if(levelSave>=13&&levelSave<17){
			level=13;
		}
			else if(levelSave>=17&&levelSave<21){
			level=17;
		}
			else if(levelSave>=21&&levelSave<25){
			level=21;
		}
	
isMenuObnul();	
	//start();//onStart=0;
	zast=1;
	levelSave=0;
	
isContinue=0;	
		
	};	
		
		
		
	};
	//console.log(score);
};
	
};




var onStart=0;


Menu.prototype.drawCont=function(){
	
	if(this.type==="cont"&&contBox[2].animX>0){
	if(startGame===0){	
	ctx.drawImage(cont,this.animX,this.animY,500,200,this.x,this.y,400,200);		
	};	
	}
	
	else 	if(this.type==="vopr"&&contBox[2].animX>0){
	if(startGame===0){	
	ctx.drawImage(contvopr,this.animX,this.animY,200,200,this.x,this.y,100,100);		
	};	
	}
	
	else 	if(this.type==="time"&&contBox[2].animX>0){
				
		if(this.moove===0){this.animX=450;this.moove2=menuTimer;this.moove=1;};
		
		if(this.moove2+Math.abs(menuTimer)===-100){
			this.moove2=menuTimer;
			
			this.animX-=50;
			
			};
		if(startGame===0){
	ctx.drawImage(zifry,this.animX,this.animY,50,50,this.x,this.y,30,30);		
		};	
		
		
		
	}

else if(this.type==="gama"&&contBox[2].animX===0){
	
if(startGame===0){	

load=0;
saveLevel=5;
hzBox=[];
hzBoxFones=[];
renderer.dispose();

ctx.drawImage(gamaumer,this.animX,this.animY,500,200,this.x,this.y,400,80);	


 levelFl5=0;
 levelFl9=0;
 levelFl13=0;

	
};
};	
	
	
	
};



Menu.prototype.draw=function(){


if(this.type==="boulderdash"){
	
ctx.drawImage(boulderdash,this.animX,this.animY,200,200,this.x+this.gabX/2,this.y,this.gabX,this.gabY);		

if(this.x>0){
this.gabX+=4;
this.gabY+=4;
this.x-=4;
this.y-=1.5;
}
else{


this.y=this.y+this.vSp;

if(this.y<190){	

	this.vSp++;
	
};

if(this.y>=190){this.vSp=-this.vSp;this.moove=1;};
if(this.y<=-80&&this.moove===1){this.vSp=0;};

	
};

}
else if(this.type==="menupochva"){

	
ctx.drawImage(menupochva,this.animX,this.animY,200,200,this.x,this.y,1200,560);		
	
}

else if(this.type==="her"){

this.animY=200;


if(menuBold[0].moove===0){	
ctx.drawImage(her,this.animX,this.animY,200,200,this.x,this.y,cell,cell);



this.x-=4.8;

if(this.animX===400){this.moove=1;};
if(this.animX===0){this.moove=0;};

if(this.moove2%5===0){
if(this.moove===0){
this.animX+=200;
}
else{this.animX-=200;};
};

this.moove2++;		
	
}
else{
	
	this.animY=0;
	
	if(this.moove9===0){
		this.animX=0;
		this.moove9=1;
		
			buhtrup.currentTime=0;
	buhtrup.play();
		
		};
	
	
ctx.drawImage(hertrup,this.animX,this.animY,200,200,this.x,this.y,cell,cell);	


if(this.moove4===0){
	this.moove=-20;
	this.moove4=1;
};

if(this.moove3%5==0){
this.animX+=200;
};


if(this.animX===400){this.animX=0;};

this.y=this.y+this.moove;

this.moove+=3;

this.moove3++;

if(this.y>height){this.type=0;};



};

}

else if(this.type==="dethstar"){
	
	if(menuBold[0].moove===1){

if(this.moove===0){		
	this.x=menuBold[2].x;
	this.y=menuBold[2].y;
	this.moove=1;
};
		
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=25;

	};	
}

else if(this.type==="dethstar2"){
	
	if(menuBold[0].moove===1){

if(this.moove===0){		
	this.x=menuBold[2].x;
	this.y=menuBold[2].y;
	this.moove=1;
};
		
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=25;
this.x-=20;

	};	
}

else if(this.type==="dethstar3"){
	
	if(menuBold[0].moove===1){

if(this.moove===0){		
	this.x=menuBold[2].x;
	this.y=menuBold[2].y;
	this.moove=1;
};
		
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=25;
this.x-=35;

	};	
}

else if(this.type==="dethstar4"){
	
	if(menuBold[0].moove===1){

if(this.moove===0){		
	this.x=menuBold[2].x;
	this.y=menuBold[2].y;
	this.moove=1;
};
		
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=25;
this.x+=20;

	};	
}

else if(this.type==="dethstar5"){
	
	if(menuBold[0].moove===1){

if(this.moove===0){		
	this.x=menuBold[2].x;
	this.y=menuBold[2].y;
	this.moove=1;
};
		
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.y-=25;
this.x+=35;

	};	
}

else if(this.type==="oblako"){
	
ctx.drawImage(menuoblako,this.animX,this.animY,200,200,this.x,this.y,100,100);	

this.x--;

if(this.x+100<0){this.x=1100;};
	
}

else if(this.type==="oblako2"){
	
ctx.drawImage(menuoblako,this.animX,this.animY,200,200,this.x,this.y,150,200);	

this.x+=1.5;

if(this.x>width){this.x=-200;};
	
}

else if(this.type==="oblako3"){
	
ctx.drawImage(menuoblako,this.animX,this.animY,200,200,this.x,this.y,50,50);	

this.x+=1.5;
if(this.x>width){this.x=-50;};
	
}

else if(this.type==="oblako4"){
	
ctx.drawImage(menuoblako,this.animX,this.animY,200,200,this.x,this.y,70,70);	

this.x-=1.5;

if(this.x+70<0){this.x=1100;};
	
}

else if(this.type==="oblako5"){
	
ctx.drawImage(menuoblako,this.animX,this.animY,200,200,this.x,this.y,70,70);	

this.x+=0.5;
if(this.x>width){this.x=-70;};

	
}

else if(this.type==="nintendo"){
	
	if(menuBold[7].y<0){
		
ctx.globalAlpha=this.moove;
	
ctx.drawImage(nintendo,this.animX,this.animY,800,300,this.x+20,this.y,600,170);

if(this.moove<1){
this.moove+=0.1;
};	

ctx.globalAlpha=1;


if(this.y<410){this.y+=4;};

	};
	
}

else if(this.type==="bug"){
	
if(menuBold[13].y>=410){	
	
ctx.drawImage(bug,this.animX,this.animY,200,200,this.x+50,this.y,120,110);	

ctx.drawImage(fir55,0,0,800,600,this.x+200,this.y,120,110);	

};
	
}

else if(this.type==="presse"){
	
if(menuBold[13].y>=410){
//console.log(menuTimer);
onStart=1;
	
ctx.globalAlpha=this.moove;	
	
ctx.drawImage(presse,0,0,800,200,this.x+17,this.y-50,420,110);

if(this.moove>0.95){this.moove2=1;};
if(this.moove<0.05){this.moove2=0;};


if(this.moove2===0){this.moove+=0.05;}
else{this.moove-=0.05;};	


ctx.globalAlpha=1;

};


	
}
else if(this.type==="selectKeys"){
	
	if(onStart===0){this.moove2=1;};
	
	if(onStart===1){
	

if(this.moove4===0){	
ctx.drawImage(presse,0,200,800,200,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);		
}
else if(this.moove4===1||this.moove4===2){
	ctx.drawImage(pressfor,30,0,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===3||this.moove4===4){
	ctx.drawImage(pressfor,30,100,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===5||this.moove4===6){
	ctx.drawImage(pressfor,30,200,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===7||this.moove4===8){
	ctx.drawImage(pressfor,30,300,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===9||this.moove4===10){
	ctx.drawImage(pressfor,30,400,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===11||this.moove4===12){
	ctx.drawImage(pressfor,30,500,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===13||this.moove4===14){
	ctx.drawImage(pressfor,30,600,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===15||this.moove4===16){
	ctx.drawImage(pressfor,30,700,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}
else if(this.moove4===17||this.moove4===18){
	ctx.drawImage(pressfor,30,800,800,100,(this.x+240)-((420*this.moove2)/2),(this.y-280)-((110*this.moove2)/2)
,420*this.moove2,110*this.moove2);	
}


if(selectKeys===0){		
if(this.moove3===0){	
this.moove2+=0.01;
}
else{
this.moove2-=0.01;	
};
}
else if(this.moove4===0&&selectKeys===1){
	
	this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=1;};
}
else if(this.moove4===1&&selectKeys===1){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=2;selectKeys=2;};
	
}
else if(this.moove4===2&&selectKeys===3){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=3;};
	
}
else if(this.moove4===3&&selectKeys===3){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=4;selectKeys=4;};
	
}
else if(this.moove4===4&&selectKeys===5){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=5;};
	
}
else if(this.moove4===5&&selectKeys===5){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=6;selectKeys=6;};//left
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===6&&selectKeys===7){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=7;};
	
}
else if(this.moove4===7&&selectKeys===7){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=8;selectKeys=8;};//right
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===8&&selectKeys===9){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=9;};
	
}

else if(this.moove4===9&&selectKeys===9){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=10;selectKeys=10;};//hold
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===10&&selectKeys===11){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=11;};
	
}
else if(this.moove4===11&&selectKeys===11){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=12;selectKeys=12;};//pause
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===12&&selectKeys===13){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=13;};
	
}
else if(this.moove4===13&&selectKeys===13){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=14;selectKeys=14;};//mass1
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===14&&selectKeys===15){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=15;};
	
}
else if(this.moove4===15&&selectKeys===15){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=16;selectKeys=16;};//mass2
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===16&&selectKeys===17){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=17;};
	
}
else if(this.moove4===17&&selectKeys===17){
	
	this.moove2+=0.1
	if(this.moove2>2){this.moove4=18;selectKeys=18;};//suizide
	console.log(this.moove4+" "+selectKeys);
}
else if(this.moove4===18&&selectKeys===19){
	
		this.moove2-=0.1;
	//console.log(this.moove2);
	if(this.moove2<=0.1){this.moove4=0;selectKeys=0;};
	
}



if(this.moove2>=2){this.moove3=1;};
if(this.moove2<=1){this.moove3=0;};


	
	};
	
	
};
	
};


var menuBold=[];


var menuControl=function(){
	
	if(menuTimer===160){
		
		isMenuObnul();
		
		title.currentTime=0;
		title.play();
		
		
		menuBold=[

			new Menu(width/2,100,"boulderdash"),
		new Menu(-10,300,"menupochva"),
		new Menu(1200,500,"her"),
		
		new Menu(0,0,"dethstar"),
		new Menu(0,0,"dethstar2"),
		new Menu(0,0,"dethstar3"),
		new Menu(0,0,"dethstar4"),
		new Menu(0,0,"dethstar5"),
		
		
			new Menu(900,20,"oblako"),
		new Menu(10,50,"oblako2"),
		new Menu(-300,200,"oblako3"),
		new Menu(1200,0,"oblako4"),
		new Menu(0,0,"oblako5"),
		
		new Menu(220,300,"nintendo"),
				new Menu(300,330,"bug"),
				new Menu(300,330,"presse"),
	new Menu(300,330,"selectKeys"),
		
		];
		
	};	
	
	
if(menuTimer>160&&menuTimer<1000){
	
	
	
ctx.fillStyle="blue";
ctx.fillRect(0,0,width,height);	

for(var i=0;i<menuBold.length;i++){
menuBold[i].draw();
};
	
};


if(menuTimer===1000){bastLitersBox=[[],[],[],[],[],[]];bastScoreBox=[[],[],[],[],[],[]];obrabStart();};////////////////////////////////

if(menuTimer>1000&&menuTimer<1500){
	
	title.pause();
	onStart=0;
	
ctx.fillStyle="blue";
ctx.fillRect(0,0,width,height);	

ctx.drawImage(bastpl,0,0,600,200,330,50,300,100);


	bastOtris();
	
};	

if(menuTimer>1510){
	menuTimer=0;
	 bukviTimer=1;
 tik=0;
	
	};
	
};








var progPusk=0;

var globalStart=function(){
	
progPusk=1;	

	


	
};



var bukviTimer=1;
//var bukvi;
var tik=0;
var menuTimer=0;
var selectKeys=0;





var firma=function(){//animiruet logotip

if(menuTimer<150&&menuTimer>0){
	


//console.log(bukvi);



//console.log(bukvi);
ctx.fillStyle="white";
ctx.fillRect(0,0,width,height);	


if(menuTimer===1){
ctx.drawImage(fir1,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===2){
ctx.drawImage(fir2,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===3){
ctx.drawImage(fir3,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===4){
ctx.drawImage(fir4,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===5){
ctx.drawImage(fir5,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===6){
ctx.drawImage(fir6,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===7){
ctx.drawImage(fir7,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===8){
ctx.drawImage(fir8,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===9){
ctx.drawImage(fir9,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===10){
ctx.drawImage(fir10,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===11){
ctx.drawImage(fir11,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===12){
ctx.drawImage(fir12,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===13){
ctx.drawImage(fir13,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===14){
ctx.drawImage(fir14,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===15){
ctx.drawImage(fir15,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===16){
ctx.drawImage(fir16,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===17){
ctx.drawImage(fir17,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===18){
ctx.drawImage(fir18,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===19){
ctx.drawImage(fir19,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===20){
ctx.drawImage(fir20,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===21){
ctx.drawImage(fir21,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===22){
ctx.drawImage(fir22,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===23){
ctx.drawImage(fir23,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===24){
ctx.drawImage(fir24,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===25){
ctx.drawImage(fir25,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===26){
ctx.drawImage(fir26,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===27){
ctx.drawImage(fir27,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===28){
ctx.drawImage(fir28,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===29){
ctx.drawImage(fir29,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===30){
ctx.drawImage(fir30,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===31){
ctx.drawImage(fir31,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===32){
ctx.drawImage(fir32,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===33){
ctx.drawImage(fir33,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===34){
ctx.drawImage(fir34,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===35){
ctx.drawImage(fir35,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===36){
ctx.drawImage(fir36,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===37){
ctx.drawImage(fir37,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===38){
ctx.drawImage(fir38,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===39){
ctx.drawImage(fir39,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===40){
ctx.drawImage(fir40,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===41){
ctx.drawImage(fir41,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===42){
ctx.drawImage(fir42,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===43){
ctx.drawImage(fir43,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===44){
ctx.drawImage(fir44,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===45){
ctx.drawImage(fir45,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===46){
ctx.drawImage(fir46,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===47){
ctx.drawImage(fir47,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===48){
ctx.drawImage(fir48,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===49){
ctx.drawImage(fir49,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===50){
ctx.drawImage(fir50,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===51){
ctx.drawImage(fir51,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===52){
ctx.drawImage(fir52,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===53){
ctx.drawImage(fir53,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===54){
ctx.drawImage(fir54,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer===55){
ctx.drawImage(fir55,0,0,800,600,-25,-100,width,height);
}
else if(menuTimer>=56){
ctx.drawImage(fir56,0,0,800,600,-25,-100,width,height);
}




		//if(bukviTimer<=17&&tik===2){bukviTimer++;tik=0;};
		if(tik===2&&bukviTimer<56){
			bukviTimer++;tik=0;
			
			};
	
	//if(bukviTimer>=44){zastText();};
	
	if(tik<50){
	tik++;
	};
	
if(tik===1&&bukviTimer===1){
	
firzv.currentTime=0.1;	
	
firzv.play();

};

if(bukviTimer===15){
	
	firzv.pause();
	ggg.currentTime=0;
	ggg.play();
	
	};
	
if(bukviTimer===55){
	
	ggg.pause();
	
	};	

};
//console.log(tik);

if(selectKeys===0){
menuTimer++;
};
//console.log(menuTimer);

};





var score=0;

var ZifryInfo=function(x,y,type){
	
this.x=x;
this.y=y;
this.type=type;
if(this.type==="0"){
this.animX=0;	
};
if(this.type==="1"){
this.animX=50;	
};
if(this.type==="2"){
this.animX=100;	
};
if(this.type==="3"){
this.animX=150;	
};
if(this.type==="4"){
this.animX=200;	
};
if(this.type==="5"){
this.animX=250;	
};
if(this.type==="6"){
this.animX=300;	
};
if(this.type==="7"){
this.animX=350;	
};
if(this.type==="8"){
this.animX=400;	
};
if(this.type==="9"){
this.animX=450;	
};
this.animY=0;	
	
};


var zifryBoxScore=[
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0")
];


var zifryBoxAlmazy=[
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0")

];



var zifryBoxHer=[
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0")

];


var zifryBoxLevel=[

new ZifryInfo(165,45,"0"),
new ZifryInfo(165,45,"0")

];




ZifryInfo.prototype.draw=function(i){


if(zast===0){	
ctx.drawImage(zifry,this.animX,this.animY,50,50,this.x+i*20,this.y,20,20);	
};	
};


var zifryBoxScoreOtris=function(){
	
	var zifString=score.toString();
	
	var soh=0;
	//console.log(zifryBoxScore[5-soh].type);
	
	for(var k=zifString.length-1;k>=0;k--){
		
		zifryBoxScore[5-soh].type=zifString[k];
		
if(zifryBoxScore[5-soh].type==="0"){
zifryBoxScore[5-soh].animX=0;	
};
if(zifryBoxScore[5-soh].type==="1"){
zifryBoxScore[5-soh].animX=50;	
};
if(zifryBoxScore[5-soh].type==="2"){
zifryBoxScore[5-soh].animX=100;	
};
if(zifryBoxScore[5-soh].type==="3"){
zifryBoxScore[5-soh].animX=150;	
};
if(zifryBoxScore[5-soh].type==="4"){
zifryBoxScore[5-soh].animX=200;	
};
if(zifryBoxScore[5-soh].type==="5"){
zifryBoxScore[5-soh].animX=250;	
};
if(zifryBoxScore[5-soh].type==="6"){
zifryBoxScore[5-soh].animX=300;	
};
if(zifryBoxScore[5-soh].type==="7"){
zifryBoxScore[5-soh].animX=350;	
};
if(zifryBoxScore[5-soh].type==="8"){
zifryBoxScore[5-soh].animX=400;	
};
if(zifryBoxScore[5-soh].type==="9"){
zifryBoxScore[5-soh].animX=450;	
};
				
		soh++;
		//console.log(zifString[k]);
	};
	
	
	
	
	for(var i=0;i<zifryBoxScore.length;i++){
		zifryBoxScore[i].draw(i);
	};
	
	
	
	
	
var rez=almazOk-almazy;

//console.log(rez);

if(rez<0){rez=0;};

	var almazString=rez.toString();
	
	
	//console.log(almazString.length);
if(almazString.length<3){zifryBoxAlmazy[0].type="0";};
if(almazString.length<2){zifryBoxAlmazy[1].type="0";};
	
if(zifryBoxAlmazy[0].type==="0"){
zifryBoxAlmazy[0].animX=0;	
};
if(zifryBoxAlmazy[1].type==="0"){
zifryBoxAlmazy[1].animX=0;	
};	
	
	
	var soh2=0;
	//console.log(zifryBoxScore[5-soh].type);
	
	for(var k=almazString.length-1;k>=0;k--){
		
		zifryBoxAlmazy[2-soh2].type=almazString[k];
		
if(zifryBoxAlmazy[2-soh2].type==="0"){
zifryBoxAlmazy[2-soh2].animX=0;	
};
if(zifryBoxAlmazy[2-soh2].type==="1"){
zifryBoxAlmazy[2-soh2].animX=50;	
};
if(zifryBoxAlmazy[2-soh2].type==="2"){
zifryBoxAlmazy[2-soh2].animX=100;	
};
if(zifryBoxAlmazy[2-soh2].type==="3"){
zifryBoxAlmazy[2-soh2].animX=150;	
};
if(zifryBoxAlmazy[2-soh2].type==="4"){
zifryBoxAlmazy[2-soh2].animX=200;	
};
if(zifryBoxAlmazy[2-soh2].type==="5"){
zifryBoxAlmazy[2-soh2].animX=250;	
};
if(zifryBoxAlmazy[2-soh2].type==="6"){
zifryBoxAlmazy[2-soh2].animX=300;	
};
if(zifryBoxAlmazy[2-soh2].type==="7"){
zifryBoxAlmazy[2-soh2].animX=350;	
};
if(zifryBoxAlmazy[2-soh2].type==="8"){
zifryBoxAlmazy[2-soh2].animX=400;	
};
if(zifryBoxAlmazy[2-soh2].type==="9"){
zifryBoxAlmazy[2-soh2].animX=450;	
};
				
		soh2++;
		//console.log(zifString[k]);
	};
	


	
	
	
	for(var i=0;i<zifryBoxAlmazy.length;i++){
		zifryBoxAlmazy[i].draw(i);
	};





var rez2=lives;

//console.log(rez);

if(rez2<0){rez2=0;};

	var herString=rez2.toString();
	
	
	//console.log(almazString.length);
if(herString.length<3){zifryBoxHer[0].type="0";};
if(herString.length<2){zifryBoxHer[1].type="0";};
	
if(zifryBoxHer[0].type==="0"){
zifryBoxHer[0].animX=0;	
};
if(zifryBoxHer[1].type==="0"){
zifryBoxHer[1].animX=0;	
};	
	
	
	soh2=0;
	//console.log(zifryBoxScore[5-soh].type);
	
	for(var k=herString.length-1;k>=0;k--){
		
		zifryBoxHer[2-soh2].type=herString[k];
		
if(zifryBoxHer[2-soh2].type==="0"){
zifryBoxHer[2-soh2].animX=0;	
};
if(zifryBoxHer[2-soh2].type==="1"){
zifryBoxHer[2-soh2].animX=50;	
};
if(zifryBoxHer[2-soh2].type==="2"){
zifryBoxHer[2-soh2].animX=100;	
};
if(zifryBoxHer[2-soh2].type==="3"){
zifryBoxHer[2-soh2].animX=150;	
};
if(zifryBoxHer[2-soh2].type==="4"){
zifryBoxHer[2-soh2].animX=200;	
};
if(zifryBoxHer[2-soh2].type==="5"){
zifryBoxHer[2-soh2].animX=250;	
};
if(zifryBoxHer[2-soh2].type==="6"){
zifryBoxHer[2-soh2].animX=300;	
};
if(zifryBoxHer[2-soh2].type==="7"){
zifryBoxHer[2-soh2].animX=350;	
};
if(zifryBoxHer[2-soh2].type==="8"){
zifryBoxHer[2-soh2].animX=400;	
};
if(zifryBoxHer[2-soh2].type==="9"){
zifryBoxHer[2-soh2].animX=450;	
};
				
		soh2++;
		//console.log(zifString[k]);
	};
	


	
	
	
	for(var i=0;i<zifryBoxHer.length;i++){
		zifryBoxHer[i].draw(i);
	};






rez2=level;

//console.log(rez);

if(rez2<0){rez2=0;};

	herString=rez2.toString();
	
	
	//console.log(almazString.length);
if(herString.length<3){zifryBoxLevel[0].type="0";};
if(herString.length<2){zifryBoxLevel[1].type="0";};
	
if(zifryBoxLevel[0].type==="0"){
zifryBoxLevel[0].animX=0;	
};
if(zifryBoxLevel[1].type==="0"){
zifryBoxLevel[1].animX=0;	
};	
	
	
	soh2=0;
	//console.log(zifryBoxScore[5-soh].type);
	
	for(var k=herString.length-1;k>=0;k--){
		
		zifryBoxLevel[1-soh2].type=herString[k];
		
if(zifryBoxLevel[1-soh2].type==="0"){
zifryBoxLevel[1-soh2].animX=0;	
};
if(zifryBoxLevel[1-soh2].type==="1"){
zifryBoxLevel[1-soh2].animX=50;	
};
if(zifryBoxLevel[1-soh2].type==="2"){
zifryBoxLevel[1-soh2].animX=100;	
};
if(zifryBoxLevel[1-soh2].type==="3"){
zifryBoxLevel[1-soh2].animX=150;	
};
if(zifryBoxLevel[1-soh2].type==="4"){
zifryBoxLevel[1-soh2].animX=200;	
};
if(zifryBoxLevel[1-soh2].type==="5"){
zifryBoxLevel[1-soh2].animX=250;	
};
if(zifryBoxLevel[1-soh2].type==="6"){
zifryBoxLevel[1-soh2].animX=300;	
};
if(zifryBoxLevel[1-soh2].type==="7"){
zifryBoxLevel[1-soh2].animX=350;	
};
if(zifryBoxLevel[1-soh2].type==="8"){
zifryBoxLevel[1-soh2].animX=400;	
};
if(zifryBoxLevel[1-soh2].type==="9"){
zifryBoxLevel[1-soh2].animX=450;	
};
				
		soh2++;
		//console.log(zifString[k]);
	};
	


	
	

	for(var i=0;i<zifryBoxLevel.length;i++){
		zifryBoxLevel[i].draw(i);
	};



	
};




var infoRamkiDraw=function(){
	
if(zast===0){
	
ctx.drawImage(inforamki,0,0,200,200,430,-20,150,150);	
	ctx.drawImage(inforamki,200,0,200,200,0,100,150,150);
	ctx.drawImage(inforamki,200,0,200,200,0,150,150,150);
	ctx.drawImage(almaz,almazAnimX,almazAnimY,200,200,30,165,20,20);
	ctx.drawImage(her,0,0,200,200,30,213,20,20);
	ctx.drawImage(inforamki,200,0,200,200,-5,-20,250,150);
	ctx.drawImage(infolevel,0,0,200,200,38,4,130,100);
};

	
};





var a=10;
var b=11;
var c=12;
var d=13;




var controlPoint={};

controlPoint.x=width/2;
controlPoint.y=height/2;
controlPoint.gSp=0;
controlPoint.vSp=0;



var mashtab=1;





var ekranMoove=function(){

var x;
var y;
	

	
for(var i=0;i<onEkran.length;i++){
	
	for(var k=0;k<onEkran[i].length;k++){
		
if(onEkran[i][k].type===8){
	
x=onEkran[i][k].x;	
y=onEkran[i][k].y;	
	
	
};	
	
		
	};
	
};	




	
if(obzor===0||(mashtab>0.5)){
	



	
if(mashtab===1){	
	
if(controlPoint.x*mashtab<x*mashtab){
	globalGSp=-10;
	}
	else if(controlPoint.x*mashtab>x*mashtab+cell*mashtab){
	globalGSp=10;	
	}
	else {globalGSp=0;};

if(controlPoint.y*mashtab<y*mashtab){
	globalVSp=-10;
	}
	else if(controlPoint.y*mashtab>y*mashtab+cell*mashtab){
	globalVSp=10;	
	}
	else {globalVSp=0;};


}
else{
	
	
if(controlPoint.x*mashtab<x*mashtab){
	globalGSp=-25;
	}
	else if(controlPoint.x*mashtab>x*mashtab+cell*mashtab){
	globalGSp=25;	
	}
	else {globalGSp=0;};

if(controlPoint.y*mashtab<y*mashtab){
	globalVSp=-25;
	}
	else if(controlPoint.y*mashtab>y*mashtab+cell*mashtab){
	globalVSp=25;	
	}
	else {globalVSp=0;};	
	



	
};



};	
};




var startPosition=0;


var ekranMooveStart=function(){

//console.log("ok");

var x;
var y;
	
	
for(var i=0;i<onEkran.length;i++){
	
	for(var k=0;k<onEkran[i].length;k++){
		
if(onEkran[i][k].type===8){
	
x=onEkran[i][k].x;	
y=onEkran[i][k].y;	
	
	
};	
	
		
	};
	
};	

	
//if(startPosition===0){
if(controlPoint.x<x){
	globalGSp=-Math.abs(controlPoint.x-x);
	}
	else if(controlPoint.x>x+cell){
	globalGSp=Math.abs(controlPoint.x-x);	
	}
	else {globalGSp=0;};

if(controlPoint.y<y){
	globalVSp=-Math.abs(controlPoint.y-y);
	}
	else if(controlPoint.y>y+cell){
	globalVSp=Math.abs(controlPoint.y-y);	
	}
	else {globalVSp=0;};

//startPosition=1;

//};
//console.log(x+" x "+controlPoint.x+"  gSp "+ globalGSp);


for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	//if(onEkran[tol][mol].type!==8){
	onEkran[tol][mol].globalMoover();
		onEkranFon[tol][mol].globalMoover();
	//};
};	
	
};



	
};



var infoIn=[];


var Info=function(x,y,type){
	
	this.x=x;
	this.y=y;
	this.type=type;
	this.animX=0;
	this.animY=0;
	this.animFlag=0;
	this.moove=0;
	this.moove1=0;
	this.moove2=0;
	this.moove3=0;
	this.moove4=0;
	
};





var Go=function(nap,gar,timer){
	
this.naprav=nap;	
this.garant=gar;
this.timer=timer;
this.stope=0;

this.special=0;
	
};

var gos=[];
var soh;


var kontrol=function(){




if(gos.length===0){
	
	
	
if(up===1){gos.push(new Go("up",0,cell));soh="up";}	
else if(down===1){gos.push(new Go("down",0,cell));soh="down";}
else if(left===1){gos.push(new Go("left",0,cell));soh="left";}
else if(right===1){gos.push(new Go("right",0,cell));soh="right";}
	
}
else if(gos.length===1){
	
	
if(up===1&&gos[0].naprav!=="up"){gos.push(new Go("up",0,cell));soh="up";}	
else if(down===1&&gos[0].naprav!=="down"){gos.push(new Go("down",0,cell));soh="down";}
else if(left===1&&gos[0].naprav!=="left"){gos.push(new Go("left",0,cell));soh="left";}
else if(right===1&&gos[0].naprav!=="right"){gos.push(new Go("right",0,cell));soh="right";}	

//console.log(gos[0].naprav+" "+gos[1].naprav);
	
};

	
	
//console.log(gos.length);	
};

var z=8;
var lives=3;
var takt=0;
var herDead=0;
var svet=0;

var up=0;
var down=0;
var left=0;
var right=0;

var globUp=0;
var globDown=0;
var globLeft=0;
var globRight=0;

var upNext=0;
var downNext=0;
var leftNext=0;
var rightNext=0;

var kc=0;
var hz=0;
var timer=0;

var cell=60;
var globalGSp=0;
var globalVSp=0;
var trup=[];

var revers=0;
var hand=false;

var masPlus=0;
var masMinus=0;

var obzor=0;
var isMenu=0;
var magic=0;

var almazy=0;
var doorOpen=0;
var levelVin=0;

var almazOk=0;
var levelVinTimer=0;

var gamePause=0;


////////////////////

var mooveUp=38;
var mooveDown=40;
var mooveLeft=37;
var mooveRight=39;
var mooveHold=32;
var moovePause=49;
var mooveSuizide=54;
var mooveMass1=189;
var mooveMass2=8;


////////////////////


var keys=function(key){
	
if(selectKeys===2){
	
	mooveUp=key;
	selectKeys=3;
	console.log("up");
}
else if(selectKeys===4&&key!==mooveUp){
	
mooveDown=key;
	selectKeys=5;	
	console.log("down");
}
else if(selectKeys===6&&key!==mooveUp&&key!==mooveDown){
	
mooveLeft=key;
	selectKeys=7;	
	console.log("left");
}
else if(selectKeys===8&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft){
	
mooveRight=key;
	selectKeys=9;	
	console.log("right");
}
else if(selectKeys===10&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft&&key!==mooveRight){
	
mooveHold=key;
	selectKeys=11;	
	console.log("hold");
}
else if(selectKeys===12&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft&&key!==mooveRight&&
key!==mooveHold){
	
moovePause=key;
	selectKeys=13;	
	console.log("pause");
}
else if(selectKeys===14&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft&&key!==mooveRight&&
key!==mooveHold&&key!==moovePause){
	
mooveMass1=key;
	selectKeys=15;	
	console.log("mass1");
}
else if(selectKeys===16&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft&&key!==mooveRight&&
key!==mooveHold&&key!==moovePause&&key!==mooveMass1){
	
mooveMass2=key;
	selectKeys=17;	
	console.log("mass2");
}
else if(selectKeys===18&&key!==mooveUp&&key!==mooveDown&&key!==mooveLeft&&key!==mooveRight&&
key!==mooveHold&&key!==moovePause&&key!==mooveMass1&&key!==mooveMass2){
	
mooveSuizide=key;
	selectKeys=19;	
	console.log("suizide");
}

	
	
};




$("body").keydown(function (event) {


kc=event.keyCode;


//console.log(kc);
if(zast===1&&kc===13&&zastTimer<229&&level<25){zastTimer=239;};


if(startGame===1){
	
	
	if(kc===mooveSuizide&&levelVinTimer===0){suizide=1;};


var pausIn=0;

if(kc===moovePause&&gamePause===0&&infoIn.length>0){
	
for(var i=0;i<infoIn.length;i++){	

if(infoIn[i].type==="pause"){pausIn=1;};

if(i===infoIn.length-1&&pausIn===0){
	gamePause=1;	
	infoIn.push(new Info(1300,height/2,"pause"));
};	
	
};	
	
	}
	
else if(kc===moovePause&&gamePause===0&&infoIn.length===0){
		gamePause=1;	
	infoIn.push(new Info(1300,height/2,"pause"));
}
	
else if(kc===moovePause&&gamePause===1){gamePause=0;};





	 if(kc===mooveMass2&&masMinus===0){masPlus=1;};
	 if(kc===mooveMass1&&masPlus===0){masMinus=1;};
	//console.log(masPlus);


if(obzor===0&&gamePause===0){

     if(kc===mooveUp){up=1;soh="up";}
 if(kc===mooveDown){down=1;soh="down";}

 if(kc===mooveLeft){left=1;soh="left";}
 if(kc===mooveRight){right=1;soh="right";};

//if(kc===39){right=1;soh="right";};

if(kc===mooveHold){hand=true};

}
else{
	gos=[];
	up=0;down=0;left=0;right=0;
	
	
	
     if(kc===mooveUp){globalVSp=15;globUp=1;}
 if(kc===mooveDown){globalVSp=-15;globDown=1;};

 if(kc===mooveLeft){globalGSp=15;globLeft=1;};
 if(kc===mooveRight){globalGSp=-15;globRight=1;};

//if(kc===39){right=1;soh="right";};	
	
	
};


}
else{
	
if((menuTimer<160&&menuTimer>0)||menuTimer>=1000){
	menuTimer=159;
	
//console.log(kc);	
	
		firzv.pause();
	ggg.currentTime=0;
	ggg.pause();
	firzv.currentTime=0;
	
	
	
	};
	
	

	if(onStart===1&&kc===13&&selectKeys===0){
		
		//if(level===1){
		zast=1;
		//}
//else {start();};		
		
		onStart=0;};
	
	
	if(menuTimer<0&&contBox[2].animX>0&&kc===13&&zast===0){ok=1;};
	

if(menuTimer>=356&&kc===16&&selectKeys===0){
	
	selectKeys=1;
	
};

	
};
//else{next=kc;};
//console.log(down+" down "+left+" left  "+leftNext+" leftNext");
//console.log(globalGSp);

if(selectKeys>1){
	
	
keys(kc);
	
};


}
);



$("body").keyup(function (event) {
var kc2=event.keyCode;


 //if(kc2===8){masPlus=0;};
//	 if(kc2===189){masMinus=0;};

if(obzor===0){

if(kc2===mooveUp){up=0;}
 if(kc2===mooveDown){down=0;}

 if(kc2===mooveLeft){left=0;}
 if(kc2===mooveRight){right=0;};
if(kc2===mooveHold){hand=false;};
}

else{
	
if(kc2===mooveUp){globalVSp=0;globUp=0;};
 if(kc2===mooveDown){globalVSp=0;globDown=0;};

 if(kc2===mooveLeft){globalGSp=0;globLeft=0;};
 if(kc2===mooveRight){globalGSp=0;globRight=0;};	
	
};

}


	
	
	



);




var ObjectKletFon=function(x,y){
	
this.x=x;
this.y=y;	
	
};




var ObjectKlet=function(x,y,type,gSp,vSp){
	
this.x=x;
this.y=y;

this.type=type;
this.gSp=gSp;
this.vSp=vSp;

this.moove=0;
this.moove1=0;
this.moove2=0;
this.moove3=0;
this.moove4=0;
this.moove5=0;
this.moove6=0;
this.moove7=0;
this.moove8=0;
this.moove9=0;
this.moove10=0;
this.moove11=0;
this.moove12=0;
this.moove13=0;
this.moove14=0;
this.moove15=0;
this.moove16=0;
this.moove17=0;
this.moove18=0;
this.welcome=0;
//this.magic=0;
this.magicWay=0;
this.sound=0;

this.sco=0;

this.miobNumber=null;
this.miobPotencialVektors=[];

this.animX=0;
this.animY=0;

this.animTimer=0;

this.niz=0;
this.stope=0;
this.kill=0;
this.noStab=0;
this.remoove=0;
this.babah=0;
this.chudoNoFree=0;

this.animX=0;
this.animY=0;

this.left=0;
this.right=0;
this.up=0;
this.down=0;
if(this.type===1||this.type===3||this.type===2||this.type===9||this.type===12||this.type===13){this.noFree=1;}
else{
this.noFree=0;
};

if(this.type===3||this.type===9){this.herNoFree=1;}
else{
this.herNoFree=0;
};


if(this.type===5||this.type===10){
	this.noFree=1;
	
this.vektor="right";
this.stabVektor="right";
this.chudoNoFree=1;
this.favoritVektors=[];
this.potencialVektors=[];
this.special=0;	
//this.gSp=cell/6;	



if(level===21){
this.vektor="up";
this.stabVektor="up";	
};

//this.sco=0;	
};



if(this.type===6||this.type===11){
	this.noFree=1;
	
this.vektor="left";
this.stabVektor="left";
this.chudoNoFree=1;
this.favoritVektors=[];
this.potencialVektors=[];
this.special=0;	
//this.gSp=cell/6;	

//this.sco=0;	
};



if(this.type===8){
	
	this.chudoNoFree=1;
	this.noFree=1;
};

	
};


var gSp=0;
var vSp=0;

//var b=11;

var startGame=0;

var onEkran=[];


var levelObj10000=[

[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,3,2,2,3,2,9],
[9,2,2,2,2,2,2,2,2,2,0,2,2,0,2,9],
[9,2,2,2,2,2,2,2,2,0,2,z,2,0,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,9],
[9,2,2,2,2,2,2,2,5,0,0,0,0,0,2,9],
[9,2,2,2,2,2,2,2,2,2,2,0,0,0,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],

];

var levelObj170=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,1,0,0,0,2,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,5,2,3,2,0,3,0,3,2,2,2,2,2,2,2,2,2,9],
[9,2,1,0,0,2,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,2,2,3,2,0,2,2,2,2,0,2,2,0,0,6,2,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,2,0,2,2,6,0,0,2,2,2,2,0,0,0,2,2,9],
[9,0,1,0,0,2,3,3,3,3,0,1,1,3,1,1,3,3,3,3,2,2,0,0,0,1,0,3,2,0,0,0,0,2,2,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,6,2,0,3,0,0,2,2,0,0,0,2,2,2,2,3,2,9],
[9,0,1,0,0,2,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,2,2,2,0,0,2,0,0,2,0,z,0,0,2,0,2,9],
[9,0,0,0,0,0,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,2,2,2,2,3,2,2,2,0,0,0,2,2,3,3,0,2,9],
[9,0,9,0,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,0,2,0,2,2,2,2,2,3,2,2,2,2,3,2,9],
[9,0,0,0,0,0,3,0,0,0,0,0,2,3,2,2,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,2,2,2,2,2,5,2,2,2,2,0,2,2,0,2,2,2,2,9],
[9,3,2,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,5,2,2,3,3,3,9],
[9,2,1,2,0,0,0,0,0,0,0,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,3,2,9],
[9,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,3,2,9],
[9,0,1,0,1,2,0,0,0,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,1,0,2,2,2,2,2,2,0,2,9],
[9,0,1,0,0,0,2,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,9],
[9,0,1,0,0,0,0,2,0,0,0,9,9,9,9,9,0,9,0,9,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,2,9],
[9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,3,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,9,0,0,0,0,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,3,0,2,3,3,1,3,3,1,3,3,3,3,3,3,3,3,3,3,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,2,2,9],
[9,0,1,0,0,2,3,3,3,3,0,1,1,3,1,1,3,3,3,3,2,2,0,0,0,1,0,3,2,0,0,3,0,2,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,2,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,3,3,3,1,3,3,3,1,3,3,3,3,3,3,2,2,9],
[9,0,1,0,0,2,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,3,0,3,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,9],
[9,0,0,0,0,2,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,9],
[9,0,9,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,c,c,c,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,9],
[9,0,0,0,0,0,3,0,0,0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,9],
[9,0,2,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,9],
[9,0,1,2,0,0,0,0,0,0,0,9,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,2,2,9],
[9,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,2,2,9],
[9,0,1,0,1,2,0,0,0,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,2,9],
[9,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,9],
[9,0,1,0,0,0,0,2,0,0,0,9,0,9,0,9,0,9,0,9,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,2,0,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
			   
			   ];
			   
			   
var levelObj1000=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,1,0,0,0,2,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,5,2,3,2,0,3,0,3,2,2,2,2,2,2,2,2,2,9],
[9,2,1,0,0,2,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,2,2,2,3,2,0,2,2,2,2,0,2,2,2,2,2,2,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,2,0,2,2,b,0,0,0,2,2,2,2,2,2,3,2,9],
[9,0,1,0,0,2,3,3,3,3,0,1,1,3,1,1,3,3,3,3,2,2,0,0,0,1,0,3,2,0,0,0,0,2,1,0,1,2,2,0,0,0,0,2,2,2,2,2,2,0,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,6,2,0,3,2,2,2,2,2,2,9,9,9,9,3,0,2,9],
[9,0,1,0,0,2,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,9],
[9,0,0,0,0,0,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,2,9],
[9,0,9,0,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,2,2,0,2,2,2,0,9,9,0,0,9,9,0,2,0,2,9],
[9,0,0,0,0,0,3,0,0,0,0,0,2,3,2,2,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,2,2,2,2,2,0,2,0,9,9,0,0,9,9,0,2,0,2,9],
[9,3,2,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,6,0,0,0,0,5,0,3,2,3,9],
[9,2,1,2,0,0,0,0,0,0,0,9,9,9,9,0,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,9],
[9,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,a,2,9],
[9,0,1,0,1,2,0,0,0,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,1,0,0,5,0,0,0,0,0,2,2,2,2,2,2,0,0,1,0,0,2,2,2,0,2,0,2,9],
[9,0,1,0,0,0,2,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,a,2,9],
[9,0,1,0,0,0,0,2,0,0,0,9,9,9,9,9,0,9,0,9,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,5,2,2,0,2,9],
[9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,6,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,a,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,0,2,2,0,0,0,0,0,2,2,0,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,3,0,3,0,2,2,a,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,0,2,9],
[9,0,1,0,0,2,3,3,3,3,0,1,1,3,1,1,3,3,3,3,2,2,0,0,0,1,0,3,2,0,0,0,0,2,0,2,2,2,2,2,2,2,0,0,0,0,0,2,2,a,2,9],
[9,0,1,0,0,2,3,3,3,1,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,0,1,0,0,2,3,3,3,3,1,1,1,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,3,0,3,0,0,2,0,0,a,a,a,a,a,a,a,a,a,a,a,a,2,2,9],
[9,0,0,0,0,2,2,2,2,2,2,1,3,3,3,3,3,3,3,3,3,3,0,0,0,1,0,3,2,2,0,0,0,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,9],
[9,0,9,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,9,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,0,0,0,0,0,3,0,0,0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,9,0,0,2,2,2,2,2,2,2,2,2,a,2,2,2,2,2,2,2,2,9],
[9,0,2,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,2,2,2,2,2,2,2,2,2,a,2,2,2,2,2,2,2,2,9],
[9,0,1,2,0,0,0,0,0,0,0,9,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,2,2,2,2,2,2,2,2,2,a,2,2,2,2,2,3,2,2,9],
[9,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,d,0,2,2,2,2,2,2,2,2,2,a,2,2,2,2,2,3,2,2,9],
[9,0,1,0,1,2,0,0,0,0,9,0,9,0,9,0,9,0,9,0,9,0,0,0,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,a,2,2,2,0,2,3,0,2,9],
[9,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2,z,2,0,2,2,2,2,2,0,2,2,9],
[9,0,1,0,0,0,0,2,0,0,0,9,0,9,0,9,0,9,0,9,0,0,0,0,1,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
			   
			   ];			   
			   
//var levelObj3=[

//[9,9,9,9,9,9,9,9,9,9],
//[9,2,2,2,8,2,2,2,2,9],
//[9,1,1,1,1,1,1,1,1,9],
//[9,1,1,1,1,1,1,1,1,9],
//[9,1,1,1,1,1,1,1,1,9],
//[9,9,9,9,9,9,9,9,9,9]
//];			   
			   
			   

var levelObj1=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,1,2,3,0,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,0,2,2,2,2,3,2,2,2,2,9],
[9,2,3,z,3,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,3,1,2,2,3,2,2,2,2,0,2,2,2,2,2,0,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,9],
[9,3,2,3,3,2,2,2,2,2,2,2,2,2,3,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,0,2,9],
[9,2,2,2,0,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,0,3,2,2,2,2,2,2,2,2,3,2,3,3,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,3,2,2,2,2,9],
[9,2,0,2,2,2,3,2,2,1,2,0,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,1,2,3,0,2,2,2,2,2,2,3,2,9],
[9,2,2,1,2,2,2,2,2,3,2,2,2,2,2,0,2,2,2,2,2,2,2,2,3,0,0,3,2,2,1,2,2,2,2,3,2,2,2,9],
[9,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,3,2,2,3,2,2,2,2,2,2,2,2,9],
[9,2,0,3,2,2,2,2,3,2,2,2,2,2,2,2,2,3,3,0,2,2,2,2,2,2,2,3,2,2,3,2,1,2,2,2,2,0,2,9],
[9,2,3,2,2,0,2,2,3,2,0,0,2,2,2,2,2,3,2,3,1,2,2,1,2,2,2,2,3,2,2,2,3,2,2,1,2,3,2,9],
[9,2,1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,2,2,3,2,2,2,2,2,2,2,2,1,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,0,2,2,2,2,2,2,2,2,2,0,2,2,2,1,2,2,2,2,3,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,9],
[9,3,3,2,2,2,2,2,2,2,2,2,3,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,0,2,2,d,9],
[9,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,0,0,2,2,2,2,1,2,2,2,3,2,3,3,2,2,2,9],
[9,2,2,2,2,3,1,2,2,0,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,1,2,2,2,2,2,2,3,2,2,2,9],
[9,2,2,2,0,2,2,0,2,3,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,3,1,2,2,2,2,2,2,3,2,2,3,9],
[9,2,1,2,2,2,2,3,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,0,2,3,2,2,3,2,3,2,2,2,2,2,2,3,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];



var levelObj2=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,3,2,2,3,2,2,9,2,3,2,2,2,1,2,9,2,2,2,0,2,3,2,9,3,2,2,2,2,2,2,9,2,2,3,3,2,2,9],
[9,2,2,2,2,2,2,2,9,2,2,2,2,2,2,0,9,0,0,2,0,2,2,2,9,0,2,2,1,2,2,2,9,2,2,2,2,3,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,1,2,2,2,2,2,2,9,2,3,2,2,2,2,3,9,2,3,2,0,2,2,0,9,2,2,3,2,2,1,2,9,2,2,3,2,3,2,9],
[9,2,2,2,2,2,2,2,9,2,3,2,2,2,2,3,9,2,3,2,0,0,2,2,9,2,2,2,2,2,3,2,9,2,2,2,0,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,3,3,2,9,2,2,3,2,2,2,2,9,2,2,2,0,2,2,3,9,2,2,2,2,3,2,2,9,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,2,9,2,2,0,2,2,2,2,9,2,2,2,0,2,2,2,9,2,2,2,2,3,2,1,9,2,2,2,2,2,3,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,3,2,2,3,2,2,2,9,2,2,2,2,3,2,2,9,2,2,3,3,2,2,2,9,2,2,2,2,2,2,0,9,0,2,2,2,2,2,9],
[9,3,2,2,2,2,3,2,9,2,2,3,2,2,3,2,9,2,2,2,3,2,3,3,9,2,2,2,2,2,2,2,9,3,2,2,2,3,2,9],
[9,2,3,2,2,2,2,2,9,2,2,2,3,2,2,2,9,2,2,2,0,2,0,0,9,2,2,2,2,2,2,2,9,3,3,2,2,3,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,5,0,0,2,2,9,2,2,2,2,3,2,3,9,2,2,2,0,2,2,2,9,2,3,1,2,2,3,2,9,2,2,2,2,2,2,9],
[9,2,2,2,2,2,0,2,9,3,2,2,2,2,2,2,9,2,2,1,0,2,2,2,9,0,2,2,3,2,3,2,9,2,3,2,3,3,2,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,1,2,2,0,2,3,2,9,3,2,2,2,2,3,2,9,2,3,2,0,2,2,3,9,2,3,2,3,2,2,2,9,2,2,2,2,2,2,9],
[9,2,2,2,2,2,3,2,9,3,2,2,1,2,2,2,9,2,2,2,0,0,2,2,9,2,2,3,2,2,2,2,9,2,2,2,3,3,3,9],
[9,2,1,2,2,2,3,0,9,2,2,0,2,2,2,2,9,2,z,1,0,3,2,2,9,2,0,2,2,2,2,2,9,2,2,2,0,0,0,9],
[9,2,3,2,2,2,2,3,9,2,2,3,2,2,3,2,9,2,d,2,0,2,2,2,9,2,2,2,2,3,2,3,9,2,2,2,2,3,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];
			   





var levelObj3=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,9,9,2,9,3,3,2,9,2,2,2,3,9,3,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,3,9,2,1,2,9],
[9,2,2,z,9,2,1,2,3,2,9,2,2,2,9,9,9,2,2,9,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,9,2,9,3,9],
[9,2,2,2,2,9,2,2,3,1,2,2,3,2,2,2,2,9,2,2,2,2,2,3,2,9,9,3,2,2,2,2,2,2,2,9,2,9,9,9],
[9,1,2,1,2,2,9,3,9,3,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,3,9],
[9,3,2,9,2,2,2,9,2,2,3,2,9,9,2,2,3,2,9,9,1,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,9,9],
[9,3,3,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,3,2,2,1,9,9,2,2,9],
[9,2,2,3,2,9,9,2,2,3,2,3,3,2,2,2,9,2,2,2,2,3,2,3,3,2,2,2,2,2,2,9,2,2,3,2,9,2,3,9],
[9,2,2,9,2,2,2,1,2,2,2,2,2,2,1,2,3,2,2,9,9,3,2,2,3,2,9,2,9,3,2,2,9,3,2,2,1,2,3,9],
[9,3,2,3,2,2,2,2,9,2,9,9,2,3,1,2,3,2,2,9,9,3,2,2,3,2,2,1,2,9,2,2,2,9,2,2,3,2,9,9],
[9,2,3,2,9,9,2,2,2,2,2,3,3,9,3,2,2,1,2,9,2,9,3,2,2,9,3,2,2,2,9,3,2,2,1,2,3,2,9,9],
[9,9,2,9,9,2,2,2,2,2,2,3,3,9,3,2,2,3,2,9,2,9,3,2,2,9,3,2,2,2,2,9,9,2,2,3,2,9,9,9],
[9,2,9,2,3,2,3,2,9,2,2,2,9,9,3,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,9,9,2,3,2,9,9,9],
[9,2,9,2,3,2,3,2,9,2,1,2,9,2,9,3,2,2,9,3,2,2,2,2,3,2,2,3,2,3,3,2,2,2,2,9,2,2,2,9],
[9,9,2,2,9,3,9,3,2,2,3,2,2,2,2,9,2,2,2,1,2,2,2,9,2,3,9,2,2,2,2,2,2,9,2,9,9,2,1,9],
[9,9,2,2,2,9,9,3,2,2,9,2,1,2,2,2,9,3,2,2,3,2,3,2,2,2,3,2,9,3,2,2,2,2,2,2,9,2,2,9],
[9,9,2,1,2,2,2,2,3,2,9,9,2,2,3,2,9,9,3,2,2,2,2,2,2,2,3,2,9,3,2,2,2,2,2,2,9,2,2,9],
[9,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,9,2,2,3,2,9,2,2,2,d,9],
[9,3,2,9,9,2,2,3,2,9,9,2,2,2,9,2,2,2,2,3,2,3,3,2,2,2,2,2,2,9,2,2,3,1,2,2,3,2,2,9],
[9,9,2,2,2,3,2,2,2,2,2,2,3,2,3,1,2,2,2,2,2,2,3,2,2,2,9,9,2,2,9,3,2,2,1,2,9,2,2,9],
[9,3,3,2,2,2,9,2,2,2,2,2,3,2,3,1,2,2,2,2,2,2,9,2,2,3,2,9,1,2,1,2,3,9,2,3,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];



var levelObj4=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,z,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,9],
[9,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,9],
[9,2,2,2,2,2,2,2,2,0,b,2,2,2,3,2,2,0,b,2,2,2,2,2,2,0,b,2,2,2,2,2,2,0,b,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,0,0,2,2,2,3,2,2,0,0,2,2,2,2,2,2,0,0,2,2,2,2,2,2,0,0,2,3,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,9],
[9,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,d,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];



var levelObj5=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,z,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,2,5,1,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,d],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj6=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,9,9,9,9,9,9,9,9,9,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,9,9,9,9,9,9,9,9,9,9],
[9,9,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,5,9,9],
[9,9,5,1,0,0,0,0,0,0,2,2,3,2,2,2,2,2,2,2,2,2,2,3,2,2,2,3,2,2,0,0,0,0,0,0,1,0,9,9],
[9,9,9,9,9,9,9,9,9,9,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,9,9,9,9,9,9,9,9,9,9],
[9,9,0,0,0,0,0,0,0,0,2,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,5,9,9],
[9,9,5,1,0,0,0,0,0,0,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,0,0,0,0,0,0,1,0,9,9],
[9,9,9,9,9,9,9,9,9,9,2,3,3,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9],
[9,9,0,0,0,0,0,0,0,0,2,2,2,2,3,2,3,2,2,2,2,3,2,2,3,2,2,2,2,2,0,0,0,0,0,0,0,5,9,9],
[9,9,5,1,0,0,0,0,0,0,2,2,2,2,3,2,3,2,2,2,2,3,2,2,3,2,2,3,2,2,0,0,0,0,0,0,1,0,9,9],
[9,9,9,9,9,9,9,9,9,9,2,3,3,2,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,9,9,9,9,9,9,9,9,9,9],
[9,9,0,0,0,0,0,0,0,0,2,3,3,2,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,0,0,0,0,0,0,0,5,9,9],
[9,9,5,1,0,0,0,0,0,0,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,0,0,0,0,0,0,1,0,9,9],
[9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,3,2,2,2,3,2,2,2,2,3,2,2,3,2,2,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,3,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,9],
[9,3,2,z,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,3,2,2,3,2,d,9],
[9,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,9],
[9,3,3,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,3,2,3,2,3,2,2,3,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj7=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,0,2,2,2,2,3,3,2,2,2,2,2,0,2,2,0,2,0,z,2,2,2,2,0,3,0,0,0,2,2,3,2,0,2,0,0,2,9],
[9,0,2,2,0,2,0,2,2,0,2,0,0,2,2,2,2,0,2,3,2,0,2,0,2,2,2,0,3,3,2,2,3,2,1,2,2,0,2,9],
[9,3,2,2,2,2,2,0,0,2,5,2,0,0,2,2,2,3,2,2,2,3,2,0,2,2,2,3,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,3,2,1,2,2,2,0,2,0,0,2,2,2,2,2,2,0,2,2,3,3,2,2,0,2,2,2,2,0,2,0,2,2,2,0,2,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,2,0,2,0,2,2,0,0,3,3,2,2,0,2,2,2,2,0,2,2,2,3,2,2,2,2,9],
[9,3,2,0,0,2,2,2,2,2,2,0,2,2,0,2,0,2,2,2,0,2,2,0,2,3,0,2,2,3,2,0,5,0,2,2,2,2,2,d],
[9,3,2,3,0,2,2,2,2,2,2,0,2,2,3,3,2,2,0,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,0,2,3,0,2,9],
[9,2,2,2,0,2,2,3,0,0,2,2,2,3,3,2,2,3,3,0,2,2,2,3,0,0,2,2,2,0,2,2,2,2,0,2,3,3,2,9],
[9,2,2,2,3,2,2,3,2,0,2,0,2,2,2,2,0,2,2,2,5,2,2,2,2,2,2,0,2,3,2,2,0,0,0,2,2,3,2,9],
[9,2,2,2,3,2,2,3,2,0,2,0,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,0,2,3,2,2,0,0,0,2,2,3,2,9],
[9,2,0,2,2,2,3,2,2,0,2,3,0,2,2,0,2,0,0,2,2,2,2,2,0,0,0,0,2,2,0,2,0,2,3,2,2,2,2,9],
[9,2,2,0,0,2,2,3,2,3,2,2,2,2,0,2,0,0,2,2,2,2,2,2,3,0,3,3,2,2,3,2,0,2,1,3,2,2,2,9],
[9,2,3,2,1,0,2,2,0,2,0,0,2,2,2,0,2,0,2,0,2,0,2,2,2,3,3,3,2,2,3,2,2,2,2,3,2,2,2,9],
[9,2,2,2,2,0,0,2,0,2,0,0,2,2,2,0,2,3,2,0,2,0,2,0,2,3,2,3,0,2,2,0,3,2,2,2,2,0,2,9],
[9,2,0,0,2,2,2,2,3,2,2,2,2,0,0,2,2,3,0,3,3,2,2,0,2,2,2,2,3,2,2,2,3,2,2,2,0,2,3,9],
[9,2,2,2,2,2,0,2,3,0,2,3,0,2,0,2,2,2,3,3,3,2,2,3,2,3,2,2,2,0,0,2,2,3,2,3,2,2,2,9],
[9,0,0,2,2,2,2,2,2,0,2,2,3,2,0,2,0,2,2,2,2,0,2,3,0,2,2,3,2,0,3,3,2,2,2,2,2,2,2,9],
[9,3,0,2,2,2,2,2,2,0,2,2,3,3,2,2,3,2,0,2,2,0,2,2,2,3,2,2,2,2,2,2,0,2,3,3,2,2,2,9],
[9,2,0,2,2,3,2,0,2,2,2,0,2,2,0,2,3,0,0,2,2,2,0,0,2,2,2,0,2,2,2,2,3,2,3,3,2,2,2,9],
[9,2,3,2,1,3,5,2,2,3,2,2,2,2,3,2,2,2,3,7,2,2,0,2,2,3,2,3,5,2,2,2,2,2,1,3,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj8=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,2,0,3,2,2,0,2,0,2,2,0,2,2,3,2,0,2,2,z,0,2,2,3,2,0,0,2,0,3,2,2,2,2,2,2,0,2,9],
[9,2,3,2,3,0,2,2,2,2,2,2,0,2,2,3,2,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,1,3,2,3,2,9],
[9,2,3,2,2,3,2,2,2,5,0,2,2,2,3,2,2,3,2,0,2,2,3,2,3,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9],
[9,d,2,2,1,3,2,2,3,2,0,0,2,2,2,2,2,3,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,0,0,0,2,2,3,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,3,2,3,2,2,2,2,0,2,2,2,2,2,2,2,2,2,3,0,0,0,2,2,3,9],
[9,2,0,0,2,2,2,2,2,2,0,2,0,0,2,2,3,2,0,0,2,2,2,2,2,3,3,0,2,2,2,2,2,3,3,3,2,2,3,9],
[9,2,2,2,0,0,2,2,2,0,0,0,2,0,2,2,3,2,0,0,2,2,2,2,2,3,2,0,3,2,2,0,2,3,2,3,0,2,2,9],
[9,2,2,3,2,3,2,2,3,0,0,0,2,2,2,2,3,2,2,2,2,2,0,2,2,2,0,3,3,2,2,3,2,2,2,2,3,2,2,9],
[9,2,2,2,2,2,3,0,2,0,0,0,2,2,0,2,3,0,0,3,0,2,0,2,2,2,3,3,3,2,2,3,2,3,2,2,2,2,0,9],
[9,3,2,3,2,2,2,3,2,0,0,2,2,2,2,2,2,5,2,2,3,2,2,2,0,2,2,2,2,3,2,2,2,2,1,3,2,0,3,9],
[9,2,2,2,2,2,2,3,2,3,0,2,2,2,2,2,2,2,2,2,3,3,2,2,3,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,3,3,2,2,2,2,2,2,3,2,2,3,2,0,2,2,2,0,2,2,0,2,3,0,2,2,3,2,0,0,2,2,2,0,0,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,3,2,2,2,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,0,2,3,3,2,2,9],
[9,2,2,0,2,2,2,0,0,2,2,2,1,2,2,3,2,0,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,0,2,3,3,2,2,9],
[9,2,2,3,2,2,3,2,0,2,0,2,2,2,c,c,c,c,c,c,c,c,2,2,2,2,2,2,2,2,2,0,0,0,2,2,3,2,2,9],
[9,0,2,2,0,0,2,2,2,2,3,2,2,3,0,3,2,2,2,1,0,2,2,0,2,2,2,2,2,2,2,0,3,0,2,2,3,2,2,9],
[9,3,2,2,2,3,2,2,3,2,3,2,2,2,3,2,0,0,2,2,2,2,2,0,0,0,0,2,2,0,2,0,2,3,0,2,2,0,3,9],
[9,2,0,0,2,2,5,2,3,2,2,2,2,0,2,0,0,2,2,2,2,2,2,3,3,0,0,2,2,3,2,2,2,3,3,2,2,2,3,9],
[9,3,2,3,0,2,2,3,2,0,0,2,2,2,2,2,3,2,3,2,0,2,2,2,3,3,3,2,2,3,2,2,2,2,3,2,2,2,3,9],
[9,2,2,2,0,0,2,3,2,3,0,2,2,2,2,2,3,2,3,2,2,2,2,2,3,3,3,2,2,3,2,2,2,2,2,2,3,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];



var levelObj9=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,1,1,1,3,3,1,1,3,1,1,3,2,3,3,3,3,1,3,1,1,2,3,1,3,1,1,3,1,1,1,1,3,3,1,3,1,3,3,9],
[9,1,3,3,1,1,1,3,3,3,1,3,1,1,3,3,3,3,3,3,3,3,3,1,2,1,2,1,3,3,3,3,1,3,1,1,3,3,1,9],
[9,1,1,3,3,3,3,3,3,3,1,3,1,1,3,3,2,3,3,3,1,3,3,1,1,3,3,1,3,2,3,3,1,3,3,3,3,1,3,9],
[9,3,3,3,3,1,3,3,3,3,3,3,3,1,3,3,1,1,1,2,2,1,3,3,3,1,1,3,1,3,3,1,3,1,1,2,3,3,1,9],
[9,2,3,1,3,1,2,1,1,1,1,1,3,1,3,3,1,2,1,3,3,1,1,3,3,1,3,1,3,1,3,3,1,1,3,3,1,3,1,9],
[9,1,1,1,3,3,1,3,1,3,1,3,3,3,1,1,3,3,1,1,1,1,3,1,1,1,3,3,3,2,1,3,1,1,3,3,3,1,1,9],
[9,1,3,3,2,2,1,3,3,1,3,3,1,2,2,3,3,3,1,3,1,1,2,3,1,3,1,1,3,2,3,1,3,1,1,1,1,1,3,9],
[9,1,3,1,1,9,9,9,9,9,9,9,2,9,9,9,9,9,1,3,3,3,3,1,1,9,9,9,9,9,9,2,9,9,9,9,9,9,3,9],
[9,1,3,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,1,1,3,3,3,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,3,3,1,9,0,z,d,0,0,0,0,0,0,0,0,9,3,1,1,3,3,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,3,1,3,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,2,3,3,1,1,3,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,3,3,1,9,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,3,1,3,9,0,0,0,0,0,0,0,0,0,0,0,9,1,9],
[9,2,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,1,3,3,1,2,1,3,9,0,0,0,0,0,0,0,0,0,0,0,9,1,9],
[9,3,3,2,3,9,0,0,0,0,0,0,0,0,0,0,0,9,1,3,1,1,1,3,3,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,3,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,2,3,1,3,3,1,3,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,3,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,3,3,3,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,3,3,3,1,9,0,0,0,0,0,0,0,0,0,0,0,9,1,1,2,3,1,3,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,1,3,3,9,0,0,0,0,0,0,0,0,0,0,0,9,3,3,3,1,3,1,1,9,0,0,0,0,0,0,0,0,0,0,0,9,3,9],
[9,1,1,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,1,3,3,3,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,1,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];



var levelObj10=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,z,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,9,9,9,9,9,0,9,9,9,9,9,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,1,2,2,2,2,2,2,2,2,2,1,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,9,9,9,0,9,9,9,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,1,2,2,2,2,2,1,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,2,9,9,0,9,9,2,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,0,9,0,9,0,9,0,0,0,9,0,9,0,9,0,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,5,9,5,9,5,9,0,0,0,9,5,9,5,9,5,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,0,9,0,9,0,9,5,5,5,9,0,9,0,9,0,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,2,9,9,9,9,9,2,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,1,2,2,2,2,2,1,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,2,9,9,9,9,9,9,9,9,9,2,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,2,9,2,9,1,2,2,2,2,2,2,2,2,2,1,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,5,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,2,9,1,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,d,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj11=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,3,0,2,3,3,3,2,9,2,2,1,2,3,2,2,2,3,9,2,2,2,1,2,2,2,3,2,9,2,2,2,1,3,2,2,2,9],
[9,2,2,2,1,2,3,2,3,2,9,2,2,2,3,3,3,2,2,3,9,3,2,2,2,2,3,2,2,3,9,3,2,2,2,3,2,3,0,9],
[9,2,2,2,2,0,2,2,3,3,9,2,0,2,2,2,2,0,2,2,9,2,2,3,3,0,3,3,2,2,9,2,2,2,2,3,2,3,3,9],
[9,3,2,0,2,2,0,3,3,3,9,2,3,2,2,2,2,3,2,2,9,3,2,2,2,2,2,2,3,2,9,2,2,2,2,2,2,2,3,9],
[9,3,2,3,2,2,2,3,2,2,9,2,3,0,2,2,3,2,3,3,9,2,2,2,2,2,2,2,3,2,9,2,2,2,2,2,2,2,3,9],
[9,3,3,2,2,3,2,2,2,2,9,2,2,2,3,2,2,2,2,2,9,3,2,3,3,2,2,2,2,2,9,2,2,2,0,0,0,2,2,9],
[9,2,2,3,2,3,3,2,2,3,9,3,3,2,2,2,3,2,2,2,9,3,2,3,3,2,2,2,2,2,9,2,2,2,3,0,0,0,9,9],
[9,2,2,3,2,2,2,3,2,2,9,2,2,2,0,2,2,3,2,3,9,3,2,2,3,2,0,2,2,3,9,2,0,3,2,0,0,0,0,9],
[9,3,2,3,2,9,9,9,9,9,9,9,9,9,5,9,9,9,9,9,9,9,9,9,3,9,9,9,9,9,9,9,9,9,2,3,0,0,3,9],
[9,2,3,2,0,0,2,2,2,2,2,3,3,3,3,2,2,3,2,0,2,0,0,2,2,3,3,2,2,2,0,3,2,2,3,9,2,2,2,9],
[9,3,2,3,0,2,2,2,2,2,2,3,3,3,3,2,2,3,2,3,2,3,3,2,2,2,3,2,2,3,2,3,3,2,9,3,2,3,3,9],
[9,2,0,2,3,2,3,2,0,9,2,2,3,3,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,3,9,2,3,2,3,3,9],
[9,2,0,2,3,2,3,2,0,9,0,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,3,3,2,9,2,2,3,2,2,2,9],
[9,0,2,2,3,3,3,3,2,9,3,2,2,2,2,3,2,2,2,3,2,2,2,0,2,3,3,2,2,2,2,9,2,3,2,3,0,2,3,9],
[9,3,2,2,2,3,3,3,2,9,3,2,3,2,2,2,0,3,2,2,3,2,3,2,2,2,3,2,3,3,9,2,2,2,2,2,3,2,d,9],
[9,3,2,3,2,2,2,2,0,9,3,0,2,2,3,2,3,3,3,2,2,2,2,2,2,2,3,2,3,9,2,2,2,2,2,2,3,2,2,9],
[9,2,2,3,2,2,2,2,3,9,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,9,3,2,2,3,2,3,2,2,2,3,9],
[9,3,2,3,3,2,2,3,2,9,3,2,2,2,3,2,2,2,2,3,z,3,3,2,2,2,2,2,2,3,2,2,3,5,2,2,3,2,2,9],
[9,3,2,2,2,3,2,2,2,9,2,2,3,2,3,5,2,2,2,2,2,2,3,2,2,2,0,3,2,2,5,3,2,2,3,1,3,2,2,9],
[9,3,3,2,1,2,0,2,2,9,2,2,3,2,3,3,2,2,2,2,2,2,3,2,2,3,2,0,3,2,0,2,3,3,2,3,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj12=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,0,2,2,2,3,2,2,2,2,2,2,3,2,0,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,1,2,9],
[9,2,2,2,2,2,1,2,3,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,2,2,3,2,2,2,2,2,0,2,2,0,9],
[9,2,2,2,2,2,2,2,3,1,9,2,3,2,9,2,2,0,9,2,2,2,9,3,2,2,2,3,2,2,2,0,0,2,2,0,2,2,2,9],
[9,1,9,9,9,9,9,9,9,9,9,9,9,2,9,2,2,2,9,2,2,3,9,2,2,2,2,2,3,2,2,5,0,2,2,2,2,2,2,9],
[9,3,2,2,2,2,2,2,2,2,9,2,2,2,9,2,3,2,9,0,1,2,9,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,9],
[9,3,3,2,2,3,2,2,2,2,9,2,2,2,9,2,2,2,9,2,2,0,9,3,3,2,2,2,2,2,2,3,2,2,1,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,3,9,3,3,2,9,2,2,2,9,2,2,3,9,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,3,9],
[9,2,9,9,9,9,9,9,9,9,9,9,9,2,9,2,3,2,9,0,2,3,9,2,3,2,2,2,2,3,2,0,0,2,2,2,1,2,3,9],
[9,3,2,3,2,2,2,2,2,2,9,2,2,2,9,2,3,2,9,2,2,3,9,2,3,2,2,1,2,2,2,5,0,2,2,2,3,2,2,9],
[9,2,3,2,2,2,2,2,2,2,9,3,0,0,9,2,2,1,9,2,2,3,9,2,2,2,0,2,2,2,2,2,2,2,1,2,3,2,2,9],
[9,0,2,2,2,2,2,2,2,2,9,3,3,3,9,2,2,3,9,2,2,2,9,2,2,2,3,2,2,3,2,2,2,2,2,3,2,2,2,9],
[9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,3,9,2,2,2,9,2,2,2,3,2,2,2,2,2,2,2,2,3,2,0,0,9],
[9,2,2,2,3,2,3,2,2,2,9,2,2,2,9,3,2,2,9,3,2,2,9,2,3,2,2,3,2,3,2,0,0,2,2,2,2,2,2,9],
[9,2,2,2,2,3,0,3,2,3,9,2,2,2,9,2,2,2,9,1,2,2,9,2,2,3,0,2,2,2,2,5,0,2,2,2,2,2,1,9],
[9,2,2,2,2,0,2,3,2,2,9,2,1,2,9,2,2,3,9,2,3,2,9,2,2,2,3,2,0,0,2,2,2,2,2,2,2,2,2,9],
[9,2,9,9,9,9,9,9,9,9,9,9,9,2,9,2,2,2,9,2,2,2,9,2,2,2,3,2,3,0,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,9,2,3,2,9,2,2,2,9,3,2,3,9,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,9],
[9,3,2,z,2,2,2,3,2,0,9,2,2,2,9,2,2,2,9,3,2,3,9,2,2,2,2,2,2,2,2,2,3,1,2,2,0,2,2,9],
[9,2,2,2,2,3,2,2,2,2,9,2,3,2,9,1,2,2,9,2,2,2,9,2,2,2,2,0,2,2,2,3,2,2,1,2,3,2,2,9],
[9,3,3,2,2,2,2,2,2,2,9,2,3,2,9,1,2,2,9,2,2,2,9,2,2,3,2,2,1,2,1,2,3,2,2,3,2,2,2,d],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj13=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,2,2,2,2,3,3,2,2,2,2,2,2,2,3,2,z,3,7,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,9],
[9,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,d,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,3,2,2,3,2,2,2,2,2,2,2,9],
[9,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,9],
[9,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,3,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,3,2,2,9],
[9,3,2,3,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,3,2,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,9],
[9,2,2,2,3,2,3,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,9],
[9,2,2,2,3,2,3,2,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,3,9],
[9,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,2,2,b,b,b,b,b,b,b,b,b,b,b,b,0,0,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,3,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,3,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj14=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,z,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,5,2,5,2,5,2,5,2,5,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,3,2,3,2,3,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,9,2,9,2,9,2,9,2,9,2,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,b,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,b,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,b,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,b,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,0,2,0,2,b,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,d,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];




var levelObj15=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,3,3,2,2,2,2,2,2,2,3,2,2,3,2,3,2,2,z,3,2,2,3,2,2,2,2,2,3,2,3,3,2,2,2,3,2,9],
[9,2,9,2,3,3,2,2,2,2,2,2,3,2,2,3,2,2,2,3,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,3,2,3,2,9],
[9,3,3,9,2,3,2,2,2,0,0,2,2,0,3,2,2,3,2,3,2,2,3,9,3,2,0,2,2,2,2,2,0,2,2,3,2,3,5,9],
[9,2,2,2,9,3,2,2,3,2,3,0,2,2,2,2,2,3,2,0,2,2,9,3,2,3,0,2,2,2,2,2,3,3,3,3,2,2,3,9],
[9,2,0,3,2,9,3,3,2,2,2,5,3,2,2,3,2,3,2,2,2,9,3,2,3,3,2,2,2,2,2,2,3,3,3,3,2,2,3,9],
[9,2,3,3,2,2,9,3,2,2,0,2,3,3,2,0,3,2,3,3,9,2,2,2,0,0,3,3,2,0,2,2,2,3,3,3,2,2,3,9],
[9,2,2,2,3,3,2,9,2,5,3,2,2,0,2,2,3,2,3,9,2,2,2,2,2,0,2,3,3,2,2,3,2,3,2,3,3,2,2,9],
[9,2,2,3,2,3,2,2,9,2,3,3,2,2,2,2,0,2,9,2,2,2,3,2,2,0,3,3,3,2,2,3,2,2,2,2,3,2,2,9],
[9,2,2,2,0,2,3,3,2,9,2,2,2,2,3,2,0,9,5,3,3,2,0,2,2,2,3,3,3,2,2,3,2,3,2,2,2,0,3,9],
[9,3,2,3,2,2,2,3,2,3,9,2,2,2,2,2,9,3,2,2,3,2,0,2,3,2,2,2,2,0,2,0,0,2,2,3,2,3,3,9],
[9,2,2,2,2,2,2,3,2,3,3,9,2,2,2,9,2,0,2,2,3,3,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,9],
[9,2,3,3,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,2,2,3,2,3,0,2,2,3,2,3,3,2,2,2,0,3,2,2,9],
[9,2,3,3,2,2,2,2,2,2,3,2,c,c,c,2,2,3,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,9],
[9,2,2,3,2,2,2,0,0,2,2,2,3,2,2,3,2,3,2,2,3,2,3,0,2,2,2,0,2,2,2,2,2,3,2,3,3,2,2,9],
[9,2,2,3,2,2,3,2,3,2,3,2,2,2,2,3,2,2,2,2,2,3,2,0,0,2,2,2,2,2,2,0,3,3,2,2,3,2,0,9],
[9,3,2,2,0,3,2,2,2,2,3,2,2,3,2,3,2,2,2,2,3,2,0,0,2,2,2,2,2,2,2,3,3,3,2,2,3,2,2,9],
[9,3,2,2,2,3,2,2,3,2,3,0,2,2,3,2,0,0,2,2,2,2,3,3,3,0,3,2,2,3,2,3,2,3,0,2,2,0,3,9],
[9,2,0,3,2,2,5,0,3,2,2,2,2,3,2,3,3,2,2,2,2,2,2,3,3,3,3,2,2,3,2,3,2,3,3,2,2,3,3,9],
[9,3,2,3,3,2,2,3,2,3,3,2,2,2,0,2,3,2,3,2,0,2,2,2,3,3,3,2,2,3,2,2,2,2,3,2,2,2,3,9],
[9,2,2,2,3,3,2,3,2,3,3,2,2,2,0,2,3,2,3,2,d,2,2,2,3,3,3,2,2,3,2,3,2,2,2,2,3,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];





var levelObj16=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,z,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,3,2,2,2,2,2,9],
[9,2,3,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,2,9],
[9,2,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,3,2,3,3,9],
[9,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,3,2,2,3,d],
[9,2,2,2,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,3,9],
[9,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,3,3,2,2,2,2,2,2,2,3,2,2,2,9],
[9,2,2,2,2,3,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,3,3,2,2,3,2,2,2,2,3,2,2,9],
[9,2,2,3,2,2,2,c,c,c,c,c,c,2,2,c,c,c,c,c,c,2,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,3,9,2,2,2,2,9,2,2,9,2,2,3,3,9,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,9],
[9,3,2,3,2,2,2,9,2,2,3,2,9,2,2,9,2,2,2,2,9,2,2,2,3,2,2,2,2,3,2,2,2,2,2,3,2,2,2,9],
[9,2,2,2,2,2,2,9,2,2,3,2,9,2,2,9,2,2,2,2,9,3,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,9],
[9,2,3,3,2,2,2,9,2,2,2,2,9,3,2,9,2,2,2,2,9,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,2,9],
[9,2,3,3,2,2,2,9,2,2,2,2,9,3,3,9,2,3,2,2,9,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,3,2,2,9],
[9,2,2,3,2,2,2,9,2,2,2,2,9,2,2,9,2,2,2,2,9,2,3,3,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,9],
[9,2,2,2,2,2,3,9,9,9,9,9,9,2,2,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,9],
[9,3,2,2,2,3,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,9],
[9,2,2,3,2,2,3,2,2,0,0,2,2,2,2,2,2,0,0,2,2,2,2,3,2,0,0,2,2,3,2,2,2,0,0,2,2,2,3,9],
[9,3,2,2,2,2,2,3,2,5,0,2,2,2,2,2,2,5,0,2,2,2,2,2,2,5,0,2,2,3,2,2,2,5,0,2,2,2,3,9],
[9,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];





var levelObj17=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,3,3,3,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,5,0,5,0,5,0,5,0,5,0,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1,1,1,1,9],
[9,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,3,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,2,2,2,3,2,2,2,3,3,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,3,2,2,2,2,3,3,3,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,9],
[9,2,2,2,3,2,2,3,2,2,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,3,3,3,3,3,3,3,3,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,2,2,2,2,2,2,2,2,2,9,9,d,2,3,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,9,9,2,2,3,2,2,3,2,2,2,2,2,2,3,2,3,2,2,2,2,2,3,3,3,2,2,3,9],
[9,2,3,3,2,2,2,2,2,2,2,9,9,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,9],
[9,3,2,3,2,2,2,2,2,2,2,9,9,z,2,2,3,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,9],
[9,3,2,2,2,2,2,2,2,3,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,9],
[9,3,2,2,2,2,2,2,3,2,2,2,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,9,2,2,9],
[9,2,2,2,2,2,3,2,2,3,3,2,3,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,9,2,2,9],
[9,2,2,3,2,2,2,3,2,2,2,3,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,9,2,2,9],
[9,3,3,2,3,2,2,2,2,2,2,2,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,9,2,2,9],
[9,2,2,3,2,2,2,2,2,2,2,3,3,0,0,0,0,5,2,0,0,0,0,5,2,0,0,0,0,5,2,0,0,0,0,5,2,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];





var levelObj18=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,9,3,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,3,2,9],
[9,z,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,2,2,2,2,2,3,2,3,2,3,2,3,3,9],
[9,9,0,9,2,9,1,9,1,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,0,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,3,3,9],
[9,9,a,9,2,9,0,9,0,9,2,9,3,9,3,9,3,9,3,9,2,2,2,2,2,2,2,2,2,9,2,9,0,9,0,9,0,9,0,9],
[9,9,0,9,2,9,0,9,0,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,0,9,0,9,0,9,0,9],
[9,9,0,9,2,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,2,9,2,9,2,9,2,9],
[9,9,9,9,2,9,b,9,b,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,2,2,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,2,2,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,b,9,b,9,b,9,b,9,2,9,0,9,0,9,0,9,0,9],
[9,3,2,2,2,9,0,9,0,9,2,9,b,9,b,9,b,9,b,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,3,2,2,9,9,9,9,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,3,2,2,2,2,2,2,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,2,3,2,2,2,2,2,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,2,2,3,2,2,2,2,2,9,0,9,0,9,0,9,0,9,2,9,9,9,9,9,9,9,9,9,2,9,0,9,0,9,0,9,0,9],
[9,2,2,2,2,2,3,2,2,2,2,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,9,9,9,9,9,0,9,0,9],
[9,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,3,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9],
[9,0,5,2,2,2,2,2,2,3,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,9],
[9,d,5,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];






var levelObj19=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,2,2,3,2,2,z,2,2,2,2,2,3,2,2,3,2,2,2,3,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,9,9,2,9,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,d,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,0,b,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,9,2,2,2,2,0,0,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,0,b,2,2,9],
[9,2,2,2,2,2,2,2,9,9,9,9,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,9,9,9,2,2,0,0,2,2,9],
[9,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,2,9,9,9,9,9,9,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,2,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,9,9,2,9,9,2,9,9,9,2,9,9,2,9,9,9,2,9,9,2,9,9,9,2,9,9,2,9,9,9,2,9,9,9,9,9,9,9],
[9,1,2,2,2,2,2,2,0,0,b,2,2,2,0,0,b,2,2,2,2,0,0,b,2,2,2,2,0,0,b,2,2,2,2,2,2,2,2,9],
[9,1,1,2,2,2,2,2,0,0,0,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2,9],
[9,1,1,1,2,2,2,2,0,0,0,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2,9],
[9,1,1,1,1,2,2,2,0,0,0,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,0,0,0,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];






var levelObj20=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,9,2,9,9,9,9,9,9,9,9],
[9,0,0,0,0,0,0,0,0,0,z,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,9,2,3,1,9,3,9,1,9,9],
[9,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,9,0,9,0,9,0,9,1,9,1,9,1,9,9],
[9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,9,3,9,0,9,0,9,1,9,3,9,1,9,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,3,9,0,9,0,9,1,9,1,9,3,9,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,3,9,0,2,0,9,1,9,1,9,3,9,9],
[9,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,5,0,5,0,5,0,5,0,5,2,2,9,0,9,0,9,3,9,1,9,1,9,9],
[9,9,1,1,9,9,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,0,9,0,9,3,9,1,9,1,9,9],
[9,9,1,1,9,9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,0,9,0,9,0,9,1,9,3,9,1,9,9],
[9,9,1,1,9,9,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,5,9,0,9,1,9,3,9,1,9,9],
[9,9,1,1,9,9,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,3,9,9,9,9,0,9,0,9,0,9,3,9,1,9,3,9,9],
[9,9,1,1,9,9,1,1,9,9,2,0,0,5,2,2,2,2,2,0,0,0,3,9,2,2,9,0,9,0,9,0,9,1,9,1,9,3,9,9],
[9,9,1,1,9,9,1,1,9,9,2,2,2,2,2,2,2,2,2,0,0,0,9,2,2,2,9,0,9,0,9,0,9,2,9,2,9,2,9,9],
[9,9,1,1,9,9,1,1,9,9,2,3,2,3,2,2,2,2,2,0,0,3,0,2,2,2,9,0,2,2,9,0,9,0,9,0,9,0,9,9],
[9,9,1,1,9,9,1,1,9,9,9,9,9,9,9,9,2,2,2,0,2,9,3,0,0,0,9,0,9,0,9,0,9,0,0,0,0,0,9,9],
[9,9,1,1,9,9,1,1,9,9,5,0,0,0,0,9,2,3,2,0,9,1,9,3,0,0,9,0,9,0,9,0,9,0,0,0,0,0,9,9],
[9,9,1,1,9,9,1,1,9,9,0,2,2,2,0,9,2,2,2,0,9,1,1,9,3,0,9,9,9,9,9,0,9,9,9,0,9,9,9,9],
[9,9,1,1,9,9,1,1,9,9,0,2,d,2,0,9,2,2,2,0,9,1,1,1,9,3,0,0,0,0,9,0,0,0,0,0,0,0,0,9],
[9,9,1,1,9,9,1,1,9,9,0,2,2,2,0,9,2,2,0,0,9,1,1,1,1,9,3,0,0,0,9,0,0,0,0,0,0,0,0,9],
[9,9,1,1,9,9,1,1,9,9,5,0,0,0,0,9,2,2,0,0,2,1,1,1,1,2,2,2,2,2,2,0,9,0,9,0,9,0,9,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];





var levelObj21=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,3,3,9,3,3,3,0,3,0,3,0,9,9,3,9,3,0,9,0,0,0,9,0,9,3,3,9,0,0,0,0,0,3,0,0,9,3,3,9],
[9,3,3,9,2,2,2,0,2,0,2,0,9,9,2,2,2,0,9,0,9,0,9,0,9,2,1,2,0,9,9,9,9,9,9,0,9,3,3,9],
[9,3,3,9,2,2,2,5,2,5,2,5,9,9,0,9,9,0,9,0,9,0,9,0,9,3,2,9,0,9,9,9,9,9,9,0,9,3,3,9],
[9,2,2,9,2,2,2,2,2,2,2,2,9,9,0,9,9,0,0,0,9,0,5,0,9,1,3,9,0,0,5,0,0,0,0,0,9,2,2,9],
[9,0,9,9,9,9,9,9,9,9,9,2,9,9,0,9,9,9,9,9,9,9,9,2,9,1,2,9,9,9,9,9,9,9,9,9,9,9,0,9],
[9,0,0,9,3,3,3,3,1,1,1,1,9,9,5,9,3,1,1,3,3,3,3,1,9,3,1,9,1,1,1,2,3,1,3,3,9,0,0,9],
[9,0,0,9,3,2,3,2,1,1,3,1,9,9,0,9,3,1,1,2,3,2,1,1,9,2,3,9,1,3,1,3,1,3,1,2,9,0,0,9],
[9,0,0,9,1,1,1,3,1,1,1,1,9,9,0,9,2,1,3,1,1,1,1,3,9,1,2,9,1,1,1,3,2,2,3,1,9,0,0,9],
[9,0,0,9,1,1,2,1,3,2,3,1,9,9,0,9,3,1,1,3,3,1,2,1,9,2,3,9,2,3,3,1,1,1,1,3,9,0,0,9],
[9,0,0,9,1,3,1,3,3,3,3,1,9,9,0,9,3,3,1,3,1,3,1,3,9,z,9,9,3,3,3,1,3,3,1,3,9,0,0,9],
[9,0,0,9,3,2,1,1,2,2,3,1,9,9,0,9,2,1,2,3,3,2,1,1,9,9,9,9,2,2,1,1,2,1,1,3,9,0,0,9],
[9,0,0,9,3,3,1,3,1,3,1,1,9,9,0,9,1,1,1,1,1,3,1,3,9,3,3,9,3,3,1,3,1,2,2,1,9,0,0,9],
[9,0,0,9,2,1,1,2,1,1,1,3,9,9,0,9,2,3,1,1,2,1,1,2,9,2,2,2,1,1,1,1,2,3,1,2,9,0,0,9],
[9,0,0,9,1,1,3,3,1,3,1,3,9,9,0,9,1,1,1,3,1,1,3,3,9,0,9,9,1,2,3,2,1,1,2,3,9,0,0,9],
[9,0,0,9,1,1,2,1,1,2,1,1,1,0,0,9,2,2,3,2,2,2,3,2,9,0,9,9,2,2,3,2,1,1,2,3,9,0,0,9],
[9,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,2,9,9,9,9,9,9,9,9,0,9,9,2,9,9,9,9,9,9,9,9,0,0,9],
[9,0,0,9,0,0,2,2,2,3,9,9,9,9,9,9,0,0,0,0,9,0,0,0,9,0,9,9,0,0,5,0,0,0,5,0,9,0,0,9],
[9,0,0,3,0,0,2,2,2,2,9,0,0,0,9,9,0,9,0,0,9,0,9,0,9,0,9,9,0,9,9,0,0,9,9,0,9,0,0,9],
[9,0,3,9,3,0,2,2,2,2,9,0,d,0,9,9,0,9,9,9,9,0,9,0,2,0,9,9,0,9,9,0,0,9,9,0,2,0,0,9],
[9,3,3,9,3,3,2,5,0,2,9,0,0,0,9,9,0,0,0,5,0,0,9,0,9,9,9,9,0,0,0,0,0,0,0,0,9,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];






var levelObj22=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,3,0,9,3,9,2,3,2,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,0,0,9,3,9,2,2,3,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,0,0,9,3,9,2,3,2,9,0,0,5,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,0,9],
[9,0,0,0,9,3,9,2,2,2,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,9],
[9,3,0,3,2,2,9,1,1,1,9,2,9,9,2,2,3,2,2,2,2,3,2,2,2,2,2,3,9,0,5,0,9,3,3,3,9,0,0,9],
[9,0,0,0,9,0,9,2,2,2,9,2,9,9,2,2,2,2,2,3,2,2,2,2,2,2,3,2,9,2,2,2,9,1,2,2,9,0,0,9],
[9,0,0,0,9,0,9,3,2,2,9,2,9,9,2,3,2,2,2,2,2,2,2,2,2,2,2,3,9,0,5,0,9,3,2,3,9,0,0,9],
[9,0,0,0,9,0,9,2,1,2,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,9,2,2,2,9,2,1,2,9,0,0,9],
[9,0,3,0,9,0,9,2,1,2,9,2,9,9,3,3,3,9,3,3,3,9,3,3,3,9,2,2,9,0,5,0,9,3,2,2,9,0,0,9],
[9,0,0,0,9,0,9,2,2,2,9,2,9,9,2,2,2,9,2,2,2,9,2,2,2,9,3,2,9,2,2,2,9,2,3,2,9,0,0,9],
[9,0,0,0,9,0,9,2,3,2,9,2,9,9,2,2,2,9,2,d,2,9,2,2,2,9,3,2,9,0,5,0,9,1,2,1,9,0,0,9],
[9,0,0,0,9,0,9,2,2,2,9,2,9,9,9,9,9,9,2,2,2,9,2,2,2,9,2,2,9,2,2,2,9,2,2,2,9,0,0,9],
[9,3,0,3,9,0,9,2,2,1,9,2,9,9,1,1,1,9,1,1,1,9,1,1,1,9,2,2,9,1,1,1,9,2,2,1,9,0,0,9],
[9,0,0,0,9,0,9,2,2,1,9,2,9,9,1,1,1,9,1,1,1,9,1,1,1,9,2,2,9,1,1,1,9,1,2,2,9,0,0,9],
[9,0,0,0,9,0,9,1,2,2,9,2,9,9,1,1,1,9,1,1,1,9,1,1,1,9,2,2,9,1,1,1,9,1,2,3,9,0,0,9],
[9,0,0,0,9,0,9,1,2,2,9,2,9,9,1,1,1,9,1,1,1,9,1,1,1,9,2,2,9,1,1,1,9,1,2,2,9,0,0,9],
[9,0,0,0,9,0,0,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,9,9,9,9,9,9,2,2,1,9,0,0,9],
[9,0,0,0,9,0,9,0,5,0,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,9,0,0,5,9,3,2,1,9,0,0,9],
[9,0,0,0,9,0,9,1,1,1,9,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,9,3,3,2,9,0,0,9],
[9,z,0,0,9,0,9,1,1,1,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,9,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];






var levelObj23=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,2,3,7,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,0,2,3,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,3,2,3,2,2,2,2,0,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,0,2,3,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,0,3,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,z,2,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,3,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,5,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,3,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,5,2,2,3,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,3,5,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,3,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,d,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];







var levelObj24=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,5,0,0,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,z,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,9],
[9,2,3,2,3,2,3,2,2,2,2,2,2,2,2,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,2,2,3,2,3,2,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,9],
[9,2,3,2,3,2,3,2,2,2,2,2,2,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,9],
[9,9,9,9,9,9,0,9,0,9,0,9,5,9,2,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,0,9,0,9,0,9,0,9,2,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,0,0,0,9,0,9,0,9,5,9,0,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,9,0,d,0,9,0,9,0,9,0,9,0,9,2,9,9,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,9],
[9,9,0,0,0,9,9,9,5,9,0,9,0,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];







var levelObj22000=[
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
];


			   
			   
var onEkranFon=[];
var levelObj1Fon=[];			   
			   
			   
			   
			   
var isMenuObnul=function(){
	isMenu=0;
	isMenuFl=0;
};			   
			   
let load=0;


var start=function(){

//isMenu=0;
title.pause();		
//console.log("ok");	


onEkranFon=[];
levelObj1Fon=[];


var lev=0;
	
if(level===1){	
lev=levelObj1;		
}
else if(level===2){
lev=levelObj2;		
}	
else if(level===3){
lev=levelObj3;		
}		
else if(level===4){
lev=levelObj4;		
}			
else if(level===5){
lev=levelObj5;		
}
else if(level===6){
lev=levelObj6;		
}
else if(level===7){
lev=levelObj7;		
}
else if(level===8){
lev=levelObj8;		
}
else if(level===9){
lev=levelObj9;		
}					
else if(level===10){
lev=levelObj10;		
}	
else if(level===11){
lev=levelObj11;		
}
else if(level===12){
lev=levelObj12;		
}
else if(level===13){
lev=levelObj13;		
}
else if(level===14){
lev=levelObj14;		
}
else if(level===15){
lev=levelObj15;		
}
else if(level===16){
lev=levelObj16;		
}
else if(level===17){
lev=levelObj17;		
}
else if(level===18){
lev=levelObj18;		
}
else if(level===19){
lev=levelObj19;		
}
else if(level===20){
lev=levelObj20;		
}
else if(level===21){
lev=levelObj21;		
}
else if(level===22){
lev=levelObj22;		
}
else if(level===23){
lev=levelObj23;		
}
else if(level===24){
lev=levelObj24;		
}


if(level<25){
camflag=0;	
	
for(var h=0;h<lev.length;h++){
	
	onEkran.unshift([]);
	onEkranFon.unshift([]);
	
};	
	
	
	

for(var i=0;i<lev.length;i++){
	
for(var k=0;k<lev[i].length;k++){
	
onEkran[i].push(new ObjectKlet(k*cell,i*cell,lev[i][k],0,0));	

onEkranFon[i].push(new ObjectKletFon(k*cell,i*cell));	
	
};	
	
};	
	
//console.log(onEkran[0][0].x);	
//console.log(level);

//loadControl();

//console.log(load);


if(load===0){

//load=1;

if((level===1||level===5||level===9||level===13||level===17||level===21)&&edition===2){

hzBox=[];
hzBoxFones=[];
renderer.dispose();

load=1;
onDraw();
//console.log("ok");
};
};
//if(level===1||level===5||level===10){
	
//	hzBox=[];
//	hzBoxFones=[];
	
//	onDraw();
//};



startPosition=0;

ekranMooveStart();	
	
startGame=1;

//console.log(onEkran[1].length);	

}
else{
	
//globalObnul();
	
startGame=0;
level=1;
lives=3;
	
	progPusk=1;


menuTimer=-50;
 bukviTimer=1;
//var bukvi;
tik=0;

bastCheck();

score=0;

upScore=0;
 scoreSafe=0;

levelVin=0;



zifryBoxScore=[];

 zifryBoxScore=[
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0")
];


 zifryBoxAlmazy=[
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0")

];


 zifryBoxHer=[
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0")

];


zifryBoxLevel=[

new ZifryInfo(165,45,"0"),
new ZifryInfo(165,45,"0")

];


sound.pause();
	soundalm.pause();
	exitsound.pause();
	fly.pause();
	remoove.pause();
	buhzem.pause();
	buhalm.pause();
	buhtrupalm.pause();



 levelFl5=0;
 levelFl9=0;
 levelFl13=0;
 levelFl17=0;
 levelFl21=0;
 levelFl25=0;

gos=[];

	
};	

};

//start();

////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



var almazAnimX=0;
var almazAnimY=0;







ObjectKletFon.prototype.draw=function(tol,mol){
	
	if(level<5){
	ctx.drawImage(fon,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);
	}
	else if(level>=5&&level<9){
		
		ctx.drawImage(ledfon,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
		
	}
	else if(level>=9&&level<13){
		
		ctx.drawImage(afrfon,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
		
	}
		else if(level>=13&&level<17){
		
		ctx.drawImage(okefon,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
		
	}
		else if(level>=17&&level<21){
		
		ctx.drawImage(avsfon,200,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
		
	}
			else if(level>=21){
		
		ctx.drawImage(amefon,0,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
		
	};
	
	
};





ObjectKlet.prototype.draw=function(tol,mol){
	
if(this.type===1){
	
//if(tol===1&&mol===1){console.log(almazAnimX)};

if(level<5){	
ctx.drawImage(almaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);
}
else if(level>=5&&level<9){
ctx.drawImage(ledalmaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=9&&level<13){
ctx.drawImage(almaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=13&&level<17){
ctx.drawImage(ledalmaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=17&&level<21){
ctx.drawImage(almaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=21){
ctx.drawImage(almaz,almazAnimX,almazAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
//almazAnimX+=200;



	
}




else if	(this.type===2){
	
this.noStab=0;

if(level<5){
ctx.drawImage(ground,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
ctx.drawImage(led,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=9&&level<13){
ctx.drawImage(afr,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=13&&level<17){
ctx.drawImage(oke,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=17&&level<21){	
ctx.drawImage(avs,200,chudoAnimY-1,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=21){	
ctx.drawImage(ame,0,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}

	
}


else if(this.type===3){
	
if(level<5){	
ctx.drawImage(stone,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
ctx.drawImage(mamont,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=9&&level<13){
ctx.drawImage(afrstone,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=13&&level<17){
ctx.drawImage(okegolov,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=17&&level<21){
ctx.drawImage(avsstone,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=21){
ctx.drawImage(afrstone,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}


if(this.gSp===0&&this.vSp===0){
	
	this.animY=stoneAnimY;
	
	
	
}
else{this.animY=0;};

	
}
else if(this.type===4){
	

this.animTimer--;


if(this.animTimer<=0){

if(this.animTimer>-4){	
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
};

if(this.animTimer>-8){
this.animY+=200;
};

//if(this.animY===800){this.animY=0;};


if(this.animTimer<=-4&&this.animTimer>-8){
	if(this.animTimer===-4){this.animY=0;};
	
if(level<5){	
ctx.drawImage(chetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
ctx.drawImage(ledchetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=9&&level<13){
ctx.drawImage(chetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=13&&level<17){
ctx.drawImage(ledchetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=17&&level<21){
ctx.drawImage(chetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=21){
ctx.drawImage(chetverka,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
	
	
};

if(this.animTimer<=-8){
	if(this.animTimer===-8){this.animY=0;};
	
ctx.drawImage(almaz,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
	
};


};

	
}
else if(this.type===4.1){
	
	
this.animTimer--;


if(this.animTimer<=0){

if(this.animTimer>-4){	
ctx.drawImage(dethstar,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
};

if(this.animTimer>-8){
this.animY+=200;
};
};
	
	
}

else if(this.type===5||this.type===6){
	
if(level<5){
ctx.drawImage(chudo1,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
ctx.drawImage(ledchudo,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=9&&level<13){
ctx.drawImage(afrchudo,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=13&&level<17){
ctx.drawImage(okechudo,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=17&&level<21){
ctx.drawImage(avschudo,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=21){
ctx.drawImage(amechudo,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
	
	
}

else if(this.type===7){
	
	
	if(level<5){
ctx.drawImage(mioba,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
	}
	else if(level>=5&&level<9){
		
	ctx.drawImage(ledmioba,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
	}
		else if(level>=13&&level<17){
		
	ctx.drawImage(ledmioba,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
	}
			else if(level>=17&&level<21){
		
	ctx.drawImage(mioba,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
	}
				else if(level>=21){
		
	ctx.drawImage(mioba,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
	}
	
}


else if	(this.type===0){

this.noStab=0;
	//this.gSp=0;this.vSp=0;
	
	//if(this.noFree===0){this.x=mol*cell;this.y=tol*cell;};
	
		

}
else if(this.type===9){
	

if(level<5){
ctx.drawImage(kirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
ctx.drawImage(ledkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=9&&level<13){
ctx.drawImage(afrkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=13&&level<17){
ctx.drawImage(ledkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=17&&level<21){
ctx.drawImage(avskirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=21){
ctx.drawImage(avskirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}

this.noStab=0;

	
}



else if(this.type===8){

//console.log(vSp);





if(levelVinTimer<=30||levelVinTimer>=160){
	
ctx.drawImage(her,animX,animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(levelVinTimer>30&&levelVinTimer<160) {
	this.animY=0;
	
	if(levelVinTimer%5===0){
	
this.animX+=200;
if(this.animX===400){this.animX=0};



};
	
	
ctx.drawImage(hervin,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		

if(this.animX===200){this.y-=10;};
if(this.animX===0){this.y+=10;};



	
};





	
}

else if(this.type===10||this.type===11){


if(level<5){	
ctx.drawImage(babochka,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=13&&level<17){
ctx.drawImage(okechudoalm,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=17&&level<21){
ctx.drawImage(avschudoalm,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=21){
ctx.drawImage(amechudoalm,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}

	
}

else if(this.type===12){
	
	if(magic===0){
		
	
if(level<5){	
ctx.drawImage(kirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
}
else if(level>=5&&level<9){
	
ctx.drawImage(ledkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=9&&level<13){
	
ctx.drawImage(afrkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=13&&level<17){
	
ctx.drawImage(ledkirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=17&&level<21){
	
ctx.drawImage(avskirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}
else if(level>=21){
	
ctx.drawImage(avskirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
}


this.noStab=0;		
	}
	else{
		
	ctx.drawImage(magicWoll,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
		
	};
	
	
}
else if(this.type===13){
	
	if(doorOpen===0){
		
	ctx.drawImage(kirpich,0,0,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
		
	}
	else {
		
	ctx.drawImage(door,chudoAnimX,chudoAnimY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);		
	};
	
	
};

	
};




var ovral=0;
var isOk=0;

var okLoader=function(){
	
	if(isOk===1&&herDead===0){
		
		
		
		score+=250;
		
	};
	
	isOk=0;
	
};


ObjectKlet.prototype.chudoCheckTrup=function(tol,mol){



//if((onEkran[tol-1][mol].type===1||onEkran[tol-1][mol].type===3)&&onEkran[tol-1][mol].vSp>0)


	
///*

if((
(//(onEkran[tol-1][mol].vSp>0&&onEkran[tol-1][mol].type!==5&&onEkran[tol-1][mol].type!==6)||
(onEkran[tol-1][mol].type===1||onEkran[tol-1][mol].type===3)&&onEkran[tol-1][mol].vSp>0)||
(this.vektor==="right"&&onEkran[tol-1][mol+1].vSp>0&&onEkran[tol-1][mol+1].type!==5&&
onEkran[tol-1][mol+1].type!==6&&onEkran[tol-1][mol+1].type!==10&&
onEkran[tol-1][mol+1].type!==11)//||
//(gos[0]&&gos[0].naprav==="right"&&onEkran[tol][mol+1].vSp>0&&hand===false)
||
(this.vektor==="left"&&(onEkran[tol-1][mol-1].vSp>0&&onEkran[tol-1][mol-1].type!==5&&
onEkran[tol-1][mol-1].type!==6&&onEkran[tol-1][mol-1].type!==10&&
onEkran[tol-1][mol-1].type!==11)//||
//(gos[0]&&gos[0].naprav==="left"&&onEkran[tol][mol-1].vSp>0&&hand===false)
)

)||(onEkran[tol-1][mol].type===8||onEkran[tol+1][mol].type===8||
onEkran[tol][mol+1].type===8||onEkran[tol][mol-1].type===8)||
(onEkran[tol-1][mol].type===7||onEkran[tol+1][mol].type===7||
onEkran[tol][mol+1].type===7||onEkran[tol][mol-1].type===7)||

(onEkran[tol-1][mol-1].type===8&&vSp>0&&this.vSp<0)||
(onEkran[tol-1][mol+1].type===8&&vSp>0&&this.vSp<0)||
(onEkran[tol+1][mol-1].type===8&&vSp<0&&this.vSp>0)||
(onEkran[tol+1][mol+1].type===8&&vSp<0&&this.vSp>0)||

(onEkran[tol-1][mol-1].type===8&&gSp>0&&this.gSp<0)||
(onEkran[tol+1][mol-1].type===8&&gSp>0&&this.gSp<0)||
(onEkran[tol-1][mol+1].type===8&&gSp<0&&this.gSp>0)||
(onEkran[tol+1][mol+1].type===8&&gSp<0&&this.gSp>0)//||
//(onEkran[tol-2]&&(onEkran[tol-2][mol].type===1||onEkran[tol-2][mol].type===3)&&
//onEkran[tol-2][mol].vSp>0)
//||(this.trup===1)
)
//*/

{onEkran[tol-1][mol].kill=0;
this.kill=0;

ovral=1;


if(this.sco===0&&herDead===0){this.sco=1;isOk=1;};

	//alert("oh");
	/*
	onEkran[tol][mol].type=0;onEkran[tol][mol].noFree=0;
	
	onEkran[tol-1][mol].type=0;onEkran[tol-1][mol].noFree=0;
	onEkran[tol+1][mol].type=0;onEkran[tol+1][mol].noFree=0;
	onEkran[tol][mol-1].type=0;onEkran[tol][mol-1].noFree=0;
	onEkran[tol][mol+1].type=0;onEkran[tol][mol+1].noFree=0;
	onEkran[tol-1][mol-1].type=0;onEkran[tol-1][mol-1].noFree=0;
	onEkran[tol-1][mol+1].type=0;onEkran[tol-1][mol+1].noFree=0;
	onEkran[tol+1][mol-1].type=0;onEkran[tol+1][mol-1].noFree=0;
	onEkran[tol+1][mol+1].type=0;onEkran[tol+1][mol+1].noFree=0;
*/	


if(this.type===10||this.type===11){


//////////////////////////////////////////////////
	buhtrupalm.currentTime=0.5;buhtrupalm.play();
	//////////////////////////////////////////////////


	
	onEkran[tol][mol].type=4;
	//onEkran[tol][mol].noFree=1;
	onEkran[tol][mol].animTimer=5;
	
if(tol-1>0&&onEkran[tol-1][mol].type!==d){	
	onEkran[tol-1][mol].type=4;
	//onEkran[tol-1][mol].noFree=1;
onEkran[tol-1][mol].animTimer=4;
};


if(tol+1<onEkran.length-1){	
      if(mol-1>0&&onEkran[tol+1][mol-1].type!==d){
		onEkran[tol+1][mol-1].type=4;
		onEkran[tol+1][mol-1].animTimer=3;
		
		
		
		//onEkran[tol+1][mol-1].noFree=1;
	  };
	  if(mol+1<onEkran[0].length-1&&onEkran[tol+1][mol+1].type!==d){
	onEkran[tol+1][mol+1].type=4;
	onEkran[tol+1][mol+1].animTimer=9;
	
	
	//onEkran[tol+1][mol+1].noFree=1;
	  };

if(onEkran[tol+1][mol].type!==d){	
	onEkran[tol+1][mol].type=4;
	onEkran[tol+1][mol].animTimer=6;
};	
	//onEkran[tol+1][mol].noFree=1;
};	
	if(mol-1>0&&onEkran[tol][mol-1].type!==d){
	onEkran[tol][mol-1].type=4;
	onEkran[tol][mol-1].animTimer=2;
	
	//onEkran[tol][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&onEkran[tol][mol+1].type!==d){
	onEkran[tol][mol+1].type=4;
	onEkran[tol][mol+1].animTimer=8;
	
	//onEkran[tol][mol+1].noFree=1;
	};
	if(mol-1>0&&tol-1>0&&onEkran[tol-1][mol-1].type!==d){
	onEkran[tol-1][mol-1].type=4;
	onEkran[tol-1][mol-1].animTimer=1;
	
	//onEkran[tol-1][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&tol-1>0&&onEkran[tol-1][mol+1].type!==d){
	onEkran[tol-1][mol+1].type=4;
	onEkran[tol-1][mol+1].animTimer=7;
	

	};


}
else if(this.type===5||this.type===6){
	
	//////////////////////////////////////////////////
	buhtrup.currentTime=0;buhtrup.play();
	//////////////////////////////////////////////////
	
	
	onEkran[tol][mol].type=4.1;
	//onEkran[tol][mol].noFree=1;
	onEkran[tol][mol].animTimer=5;
	
if(tol-1>0&&onEkran[tol-1][mol].type!==d){	
	onEkran[tol-1][mol].type=4.1;
	//onEkran[tol-1][mol].noFree=1;
onEkran[tol-1][mol].animTimer=4;
};


if(tol+1<onEkran.length-1){	
      if(mol-1>0&&onEkran[tol+1][mol-1].type!==d){
		onEkran[tol+1][mol-1].type=4.1;
		onEkran[tol+1][mol-1].animTimer=3;
		
		//onEkran[tol+1][mol-1].noFree=1;
	  };
	  if(mol+1<onEkran[0].length-1&&onEkran[tol+1][mol+1].type!==d){
		  
	onEkran[tol+1][mol+1].type=4.1;
	onEkran[tol+1][mol+1].animTimer=9;
	
	
	//onEkran[tol+1][mol+1].noFree=1;
	  };

if(onEkran[tol+1][mol].type!==d){	
	onEkran[tol+1][mol].type=4.1;
	onEkran[tol+1][mol].animTimer=6;
};
	
	//onEkran[tol+1][mol].noFree=1;
};	
	if(mol-1>0&&mol-1>0&&onEkran[tol][mol-1].type!==d){
	onEkran[tol][mol-1].type=4.1;
	onEkran[tol][mol-1].animTimer=2;
	
	//onEkran[tol][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&onEkran[tol][mol+1].type!==d){
	onEkran[tol][mol+1].type=4.1;
	onEkran[tol][mol+1].animTimer=8;
	
	//onEkran[tol][mol+1].noFree=1;
	};
	if(mol-1>0&&tol-1>0&&onEkran[tol-1][mol-1].type!==d){
	onEkran[tol-1][mol-1].type=4.1;
	onEkran[tol-1][mol-1].animTimer=1;
	
	//onEkran[tol-1][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&tol-1>0&&onEkran[tol-1][mol+1].type!==d){
	onEkran[tol-1][mol+1].type=4.1;
	onEkran[tol-1][mol+1].animTimer=7;
	

	};
	
	
}

//for(var tol=onEkran.length-1;tol>=0;tol--){
	
//for(var mol=onEkran[tol].length-1;mol>=0;mol--){
	
//	if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6){
	//onEkran[tol][mol].checkCell(tol,mol);
//	};	
//};	
	
//};	










	
	};





	
};







var ovralCheck=function(){
	
	
	
	for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
onEkran[tol][mol].type!==a&&onEkran[tol][mol].type!==b){		
	onEkran[tol][mol].checkCellStatus(tol,mol);
};	
};	
	
};



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=onEkran[tol].length-1;mol>=0;mol--){////////////////////////////
if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){		
	onEkran[tol][mol].chudoSelectWay(tol,mol);
};	
};	
	
};






for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11){
	onEkran[tol][mol].checkDown(tol,mol);
	};
};	
	
};


for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11){
	onEkran[tol][mol].checkLeft(tol,mol);
	};
};	
	
};



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11){
	onEkran[tol][mol].checkRight(tol,mol);
	};
};	
	
};








for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
if(onEkran[tol][mol].type===8){		
	onEkran[tol][mol].herCheckVektor(tol,mol);
};	
};	
	
};
	
	
	
};







ObjectKlet.prototype.herCheckTrup=function(tol,mol){
	


if(
onEkran[tol-1][mol].vSp>0||
((gos[0]&&gos[0].naprav==="right"&&(onEkran[tol-1][mol+1].vSp>0&&hand===false)//||
//(gos[0]&&gos[0].naprav==="right"&&onEkran[tol][mol+1].vSp>0&&hand===false)
))||
((gos[0]&&gos[0].naprav==="left"&&(onEkran[tol-1][mol-1].vSp>0&&hand===false)//||
//(gos[0]&&gos[0].naprav==="left"&&onEkran[tol][mol-1].vSp>0&&hand===false)
))

){onEkran[tol-1][mol].kill=0;
this.kill=0;
ovral=1;
	//alert("oh");
	/*
	onEkran[tol][mol].type=0;onEkran[tol][mol].noFree=0;
	
	onEkran[tol-1][mol].type=0;onEkran[tol-1][mol].noFree=0;
	onEkran[tol+1][mol].type=0;onEkran[tol+1][mol].noFree=0;
	onEkran[tol][mol-1].type=0;onEkran[tol][mol-1].noFree=0;
	onEkran[tol][mol+1].type=0;onEkran[tol][mol+1].noFree=0;
	onEkran[tol-1][mol-1].type=0;onEkran[tol-1][mol-1].noFree=0;
	onEkran[tol-1][mol+1].type=0;onEkran[tol-1][mol+1].noFree=0;
	onEkran[tol+1][mol-1].type=0;onEkran[tol+1][mol-1].noFree=0;
	onEkran[tol+1][mol+1].type=0;onEkran[tol+1][mol+1].noFree=0;
	
	
*/	

//////////////////////////////////////////////////
	buhtrup.currentTime=0;buhtrup.play();
	//////////////////////////////////////////////////

	
	onEkran[tol][mol].type=4.1;
	//onEkran[tol][mol].noFree=1;
	onEkran[tol][mol].animTimer=5;
	
	
	
	
	if(tol-1>0&&onEkran[tol-1][mol].type!==d){
	onEkran[tol-1][mol].type=4.1;
	//onEkran[tol-1][mol].noFree=1;
onEkran[tol-1][mol].animTimer=4;
	};


if(tol+1<onEkran.length-1){	
      if(mol-1>0&&onEkran[tol+1][mol-1].type!==d){
		onEkran[tol+1][mol-1].type=4.1;
		onEkran[tol+1][mol-1].animTimer=3;
		
		//onEkran[tol+1][mol-1].noFree=1;
	  };
	  if(mol+1<onEkran[0].length-1&&onEkran[tol+1][mol+1].type!==d){
	onEkran[tol+1][mol+1].type=4.1;
	onEkran[tol+1][mol+1].animTimer=9;
	
	
	//onEkran[tol+1][mol+1].noFree=1;
	  };

if(onEkran[tol+1][mol].type!==d){	
	onEkran[tol+1][mol].type=4.1;
	onEkran[tol+1][mol].animTimer=6;
};	
	//onEkran[tol+1][mol].noFree=1;
};	
	if(mol-1>0&&onEkran[tol][mol-1].type!==d){
	onEkran[tol][mol-1].type=4.1;
	onEkran[tol][mol-1].animTimer=2;
	
	//onEkran[tol][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&onEkran[tol][mol+1].type!==d){
	onEkran[tol][mol+1].type=4.1;
	onEkran[tol][mol+1].animTimer=8;
	
	//onEkran[tol][mol+1].noFree=1;
	};
	if(mol-1>0&&tol-1>0&&onEkran[tol-1][mol-1].type!==d){
	onEkran[tol-1][mol-1].type=4.1;
	onEkran[tol-1][mol-1].animTimer=1;
	
	//onEkran[tol-1][mol-1].noFree=1;
	};
	if(mol+1<onEkran[0].length-1&&tol-1>0&&onEkran[tol-1][mol+1].type!==d){
	onEkran[tol-1][mol+1].type=4.1;
	onEkran[tol-1][mol+1].animTimer=7;
	
	//onEkran[tol-1][mol+1].noFree=1;
	//console.log("uh");
	};











	
	};





	
};




var noStope=0;
var sperma=0;

var dig=0;
var alm=0;


ObjectKlet.prototype.herCheckVektor=function(tol,mol){
	
if(gos[0]&&obzor===0){
	

//////////////////////////////////////

if((gos[0].naprav==="left"&&onEkran[tol][mol-1].type===2)||
(gos[0].naprav==="right"&&onEkran[tol][mol+1].type===2)||
(gos[0].naprav==="up"&&onEkran[tol-1][mol].type===2)||
(gos[0].naprav==="down"&&onEkran[tol+1][mol].type===2)){
dig=1;	
};
if((gos[0].naprav==="left"&&onEkran[tol][mol-1].type===1&&onEkran[tol][mol-1].vSp===0&&
onEkran[tol][mol-1].gSp===0)||
(gos[0].naprav==="right"&&onEkran[tol][mol+1].type===1&&onEkran[tol][mol+1].vSp===0&&
onEkran[tol][mol+1].gSp===0)||
(gos[0].naprav==="up"&&onEkran[tol-1][mol].type===1&&onEkran[tol-1][mol].vSp===0&&
onEkran[tol-1][mol].gSp===0)||
(gos[0].naprav==="down"&&onEkran[tol+1][mol].type===1&&onEkran[tol+1][mol].vSp===0&&
onEkran[tol+1][mol].gSp===0)){
alm=1;	
};


////////////////////////////////////




	
	gos[0].special=1;
	
if(gos[0].naprav==="left"){gSp=-cell/6;vSp=0;}
else if	(gos[0].naprav==="right"){gSp=cell/6;vSp=0;}
else if	(gos[0].naprav==="up"){vSp=-cell/6;gSp=0;}
else if	(gos[0].naprav==="down"){vSp=cell/6;gSp=0;};


if(gos[0].naprav==="left"&&onEkran[tol][mol-1].noFree===1&&onEkran[tol][mol-1].type!==2&&
onEkran[tol][mol-1].type!==1){	   
	this.stope=1;
	}
else if(gos[0].naprav==="left"&&onEkran[tol][mol-1].type===1&&onEkran[tol][mol-1].vSp>0){	   
	this.stope=1;
	}
	
else if(gos[0].naprav==="right"&&onEkran[tol][mol+1].noFree===1&&onEkran[tol][mol+1].type!==2&&
onEkran[tol][mol+1].type!==1){	   
	this.stope=1;
	}
else if(gos[0].naprav==="right"&&onEkran[tol][mol+1].type===1&&onEkran[tol][mol+1].vSp>0){
	this.stope=1;
}
else if(gos[0].naprav==="up"&&onEkran[tol-1][mol].noFree===1&&onEkran[tol-1][mol].type!==2&&
onEkran[tol-1][mol].type!==1){
	this.stope=1;
}
else if(gos[0].naprav==="down"&&onEkran[tol+1][mol].noFree===1&&onEkran[tol+1][mol].type!==2&&
onEkran[tol+1][mol].type!==1){
	this.stope=1;
}
	
else {
this.stope=0;
};


if(hand===true){this.stope=1;};



if(this.stope===1){noStope++;}else{noStope=0;};


if(noStope>2){noStope=0;};


if(gos[0].naprav==="left"&&onEkran[tol][mol-1].type===13&&doorOpen===1){this.stope=0;};
if(gos[0].naprav==="right"&&onEkran[tol][mol+1].type===13&&doorOpen===1){this.stope=0;};
if(gos[0].naprav==="up"&&onEkran[tol-1][mol].type===13&&doorOpen===1){this.stope=0;};
if(gos[0].naprav==="down"&&onEkran[tol+1][mol].type===13&&doorOpen===1){this.stope=0;};




if(noStope===2){
	
if((gos[0].naprav==="right"&&onEkran[tol][mol+1].type===3)&&(onEkran[tol][mol+2].noFree===0||
(
(onEkran[tol][mol+2].gSp>0||onEkran[tol][mol+2].vSp>0)////vSp!!!!!!!!!
&&onEkran[tol][mol+2].type!==3&&onEkran[tol][mol+2].type!==1))){
	

	onEkran[tol][mol+1].gSp=cell/6;
	onEkran[tol][mol+1].vSp=0;
	onEkran[tol][mol+2].noFree=1;


noStope=0;
	
if(hand===false){	
this.stope=0;
};

sperma=1;
	
};	



if((gos[0].naprav==="left"&&onEkran[tol][mol-1].type===3)&&(onEkran[tol][mol-2].noFree===0||
(onEkran[tol][mol-2].gSp<0&&onEkran[tol][mol-2].type!==3&&onEkran[tol][mol-2].type!==1))){
	

	onEkran[tol][mol-1].gSp=-cell/6;
	onEkran[tol][mol-1].vSp=0;
	onEkran[tol][mol-2].noFree=1;


noStope=0;	
if(hand===false){	
this.stope=0;
};
//revers=1;
sperma=1;	
};
	





	
};




if(gos[0].naprav==="right"&&hand===true&&(onEkran[tol][mol+1].type===1||onEkran[tol][mol+1].type===2)&&
onEkran[tol][mol+1].vSp===0){
	
if(onEkran[tol][mol+1].type===1){
	almazy++;
	if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
	};		
	
onEkran[tol][mol+1].type=0;
onEkran[tol][mol+1].noFree=0;


};

if(gos[0].naprav==="left"&&hand===true&&(onEkran[tol][mol-1].type===1||onEkran[tol][mol-1].type===2)&&
onEkran[tol][mol-1].vSp===0){
	
	if(onEkran[tol][mol-1].type===1){
		almazy++;
		if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
		};
	
onEkran[tol][mol-1].type=0;
onEkran[tol][mol-1].noFree=0;

	
};


if(gos[0].naprav==="up"&&hand===true&&(onEkran[tol-1][mol].type===1||onEkran[tol-1][mol].type===2)&&
onEkran[tol-1][mol].vSp===0){
	
if(onEkran[tol-1][mol].type===1){
	almazy++;
	if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
	};
	
onEkran[tol-1][mol].type=0;
onEkran[tol-1][mol].noFree=0;

	
};


if(gos[0].naprav==="down"&&hand===true&&(onEkran[tol+1][mol].type===1||onEkran[tol+1][mol].type===2)&&
onEkran[tol+1][mol].vSp===0){
	
if(onEkran[tol+1][mol].type===1){
	almazy++;
	if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
	};
	
onEkran[tol+1][mol].type=0;
onEkran[tol+1][mol].noFree=0;

	
};



}
else{gSp=0;vSp=0;};	
	
};



ObjectKlet.prototype.herCheckStop=function(tol,mol){
	





	
if(gos[0]&&gos[0].special===1){
	
	gos.shift();
	
};	

	
	
};






ObjectKlet.prototype.checkDown=function(tol,mol){
	
if(this.type===1||this.type===3){
	
	//if(this.vSp>0){console.log("ok")};
	
	if(onEkran[tol+1][mol].noFree===1&&this.sound===1&&onEkran[tol+1][mol].type!==5
	&&onEkran[tol+1][mol].type!==6&&onEkran[tol+1][mol].type!==a&&onEkran[tol+1][mol].type!==b){
		this.sound=0;
		//console.log("ohh "+onEkran[tol+1][mol].type)
		};
	
	
	if(((this.vSp>0||this.kill===1)&&
	(onEkran[tol+1][mol].type===8||onEkran[tol+1][mol].type===5||onEkran[tol+1][mol].type===6||
	onEkran[tol+1][mol].type===10||onEkran[tol+1][mol].type===11))||
	((onEkran[tol+1][mol+1].type===5||onEkran[tol+1][mol+1].type===6||onEkran[tol+1][mol+1].type===10||
	onEkran[tol+1][mol+1].type===11)&&onEkran[tol+1][mol+1].gSp<0)||
	((onEkran[tol+1][mol-1].type===5||onEkran[tol+1][mol-1].type===6||onEkran[tol+1][mol-1].type===10||
	onEkran[tol+1][mol-1].type===11)&&onEkran[tol+1][mol-1].gSp>0)||
	(onEkran[tol+2]&&(onEkran[tol+2][mol].type===5||onEkran[tol+2][mol].type===6||
	onEkran[tol+2][mol].type===10||onEkran[tol+2][mol].type===11)&&onEkran[tol+2][mol].vSp<0)
	){
		this.vSp=cell/6;
	}
	else{this.vSp=0;};
	
	
	if(this.kill===1){this.vSp=cell/6;};

	
	
	if((onEkran[tol+1][mol].noFree===0||
	(this.kill===1&&(onEkran[tol+1][mol].type===8||onEkran[tol+1][mol].type===5||
	onEkran[tol+1][mol].type===6||onEkran[tol+1][mol].type===10||
	onEkran[tol+1][mol].type===11)))||(this.magicWay===1
	)){
		this.vSp=cell/6;
	onEkran[tol+1][mol].noFree=1;
	onEkran[tol+1][mol].welcome=1;
	this.gSp=0;
	this.noStab=1;
	
	this.kill=1;
	this.magicWay=0;
	
	///////////////////////////////////////////////
	if((fly.currentTime===0||fly.currentTime>0.1)&&this.sound===0){
		fly.currentTime=0;fly.play();
		this.sound=1;
		//console.log("ok");
		};
	///////////////////////////////////////////////
	
	
	}//else{this.kill=0;};

if(this.noStab===1){onEkran[tol-1][mol].noStab=1;};



	
	
};	
	
};


ObjectKlet.prototype.checkLeft=function(tol,mol){
	
if((this.type===1||this.type===3)&&this.vSp===0){
	
if((onEkran[tol+1][mol].vSp===0&&onEkran[tol+1][mol].gSp===0&&
onEkran[tol][mol-1].noFree===0&&
(onEkran[tol+1][mol-1].noFree===0)&&
this.noStab===0&&onEkran[tol+1][mol].type!==2&&onEkran[tol+1][mol].type!==4
&&onEkran[tol+1][mol].type!==4.1&&onEkran[tol+1][mol].type!==0&&onEkran[tol+1][mol].type!==8&&
onEkran[tol][mol-1].type!==8&&onEkran[tol+1][mol-1].type!==8&&onEkran[tol+1][mol].type!==7)
||
((onEkran[tol+1][mol].type===9||onEkran[tol+1][mol].type===1||onEkran[tol+1][mol].type===3)
&&(onEkran[tol+1][mol-1].type===5||onEkran[tol+1][mol-1].type===6||
onEkran[tol+1][mol-1].type===a||onEkran[tol+1][mol-1].type===b)
&&onEkran[tol+1][mol-1].vSp>0&&onEkran[tol][mol-1].noFree===0)){
	
	this.gSp=-cell/6;
	this.vSp=0;
	onEkran[tol][mol-1].noFree=1;
	
////////////////////////////////////////////////////////////////	
//if(remoove.currentTime===0||remoove.currentTime>0.3){	
	remoove.currentTime=0.5;remoove.play();
//};	
////////////////////////////////////////////////////////////////

//console.log(onEkran[tol+1][mol].type)	
};
		
		
	}
	


	
};	
	



ObjectKlet.prototype.checkRight=function(tol,mol){
	
if((this.type===1||this.type===3)&&this.vSp===0&&this.gSp===0){
	
if((onEkran[tol+1][mol].vSp===0&&onEkran[tol+1][mol].gSp===0&&
onEkran[tol][mol+1].noFree===0&&
(onEkran[tol+1][mol+1].noFree===0)&&
this.noStab===0&&onEkran[tol+1][mol].type!==2&&onEkran[tol+1][mol].type!==4
&&onEkran[tol+1][mol].type!==4.1&&onEkran[tol+1][mol].type!==0&&onEkran[tol+1][mol].type!==8&&
onEkran[tol][mol+1].type!==8&&onEkran[tol+1][mol+1].type!==8&&onEkran[tol+1][mol].type!==7)
||
((onEkran[tol+1][mol].type===9||onEkran[tol+1][mol].type===1||onEkran[tol+1][mol].type===3)
&&(onEkran[tol+1][mol+1].type===5||onEkran[tol+1][mol+1].type===6||
onEkran[tol+1][mol+1].type===a||onEkran[tol+1][mol+1].type===b)
&&onEkran[tol+1][mol+1].vSp>0&&onEkran[tol][mol+1].noFree===0)){
	
	this.gSp=cell/6;
	this.vSp=0;
	onEkran[tol][mol+1].noFree=1;
	

////////////////////////////////////////////////////////////////	
//if(remoove.currentTime===0.5){	
	remoove.currentTime=0.5;remoove.play();
//};	
////////////////////////////////////////////////////////////////
	
};
		
		
	}//else {this.kill=0;}
	
};




ObjectKlet.prototype.moover=function(){


if(levelVin===0){	
	
if(this.type===1||this.type===3){
	
this.x=this.x+this.gSp;


this.y=this.y+this.vSp;	
	
}
else if(this.type===8){
	
	
	
if(this.stope===0){
	this.x=this.x+gSp;
this.y=this.y+vSp;	
};	


	
}
else if(this.type===4){
	this.babah++;
	//console.log(this.babah)
}

else if(this.type===4.1){
	
	this.babah++;
	//console.log(this.babah)
}

else if(this.type===5||this.type===6||
this.type===10||this.type===11){


this.x=this.x+this.gSp;
this.y=this.y+this.vSp;	
	
}


};	
	
};





ObjectKlet.prototype.globalMoover=function(){
	
	

if(edition===1){	
this.x=this.x+globalGSp;
this.y=this.y+globalVSp;	
};	


	
	
};


ObjectKletFon.prototype.globalMoover=function(){
	
	

if(edition===1){	
this.x=this.x+globalGSp;
this.y=this.y+globalVSp;	
};	


	
	
};





ObjectKlet.prototype.checkCell=function(tol,mol){
	
	
	if(levelVin===0){
	

if(this.type===1||this.type===3){
	
	//if(onEkran[tol+1][mol].type)
	
	
if(this.type===1&&this.y+cell===onEkran[tol+1][mol].y&&onEkran[tol-1][mol].type===12){
	
this.vSp=0;	
this.magicWay=0;
this.kill=0;	
	
};	
	
	
	
	
	
if(this.y===onEkran[tol+1][mol].y){//////////////////////////

//////////////////////////////////////////////
if(this.type===3){
if(onEkran[tol+2]&&(onEkran[tol+2][mol].type===3||onEkran[tol+2][mol].type===1||
onEkran[tol+2][mol].type===9)){buh.currentTime=0;buh.play();};

if(onEkran[tol+2]&&(onEkran[tol+2][mol].type===2)){buhzem.currentTime=0.4;buhzem.play();};
}
else{
	
if(onEkran[tol+2]&&(onEkran[tol+2][mol].type===2)){buhzem.currentTime=0.4;buhzem.play();};	
if(onEkran[tol+2]&&(onEkran[tol+2][mol].type===3||onEkran[tol+2][mol].type===1||
onEkran[tol+2][mol].type===9)){buhalm.currentTime=0.2;buhalm.play();};

	
};
/////////////////////////////////////////////


if(onEkran[tol+1][mol].type!==12){
	
	if(onEkran[tol+1][mol].type!==4&&onEkran[tol+1][mol].type!==4.1){
	
onEkran[tol+1][mol].type=this.type;
onEkran[tol+1][mol].vSp=this.vSp;
onEkran[tol+1][mol].sound=this.sound;

if(onEkran[tol+2][mol].type===8||onEkran[tol+2][mol].type===5||onEkran[tol+2][mol].type===10||
onEkran[tol+2][mol].type===11||onEkran[tol+2][mol].type===6){
onEkran[tol+1][mol].kill=1;
onEkran[tol+1][mol].vSp=cell/6;
}
else{onEkran[tol+1][mol].kill=0;onEkran[tol+1][mol].vSp=0;};


this.kill=0;

//this.babah=0;

this.type=0;

this.y-=cell;
//this.x=mol*cell;
this.noFree=0;

this.vSp=0;	
this.gSp=0;

this.noStab=0;
	}
	else if(onEkran[tol+1][mol].type===4){
		
		onEkran[tol+1][mol].type=4;
		onEkran[tol+1][mol].noFree=1;
		this.y-=cell;
		
		this.type=0;
		
		
	}
		else if(onEkran[tol+1][mol].type===4.1){
		
		onEkran[tol+1][mol].type=4.1;
		onEkran[tol+1][mol].noFree=1;
		this.y-=cell;
		
		this.type=0;
		
		
	};

}
else if(onEkran[tol+1][mol].type===12){
	
	onEkran[tol+1][mol].type=12;
	this.type=0;
	this.y-=cell;
//this.x=mol*cell;
this.noFree=0;

this.vSp=0;	
this.gSp=0;
	
};

	
};	
	



	
if(this.x===onEkran[tol][mol-1].x&&onEkran[tol][mol-1].type!==8){


if(onEkran[tol][mol-1].type!==4&&onEkran[tol][mol-1].type!==4.1){
	
onEkran[tol][mol-1].type=this.type;

this.type=0;
//this.y=tol*cell;
this.x+=cell;
this.noFree=0;
this.vSp=0;	
this.gSp=0;
this.noStab=0;

}
	else if(onEkran[tol][mol-1].type===4){
		
		onEkran[tol][mol-1].type=4;
		onEkran[tol][mol-1].noFree=1;
	this.x+=cell;
		
		this.type=0;
		
		
	}
		else if(onEkran[tol][mol-1].type===4.1){
		
		onEkran[tol][mol-1].type=4.1;
		onEkran[tol][mol-1].noFree=1;
		this.x+=cell;
		
		this.type=0;
		
		
	};


	
};	





	
if(this.x===onEkran[tol][mol+1].x&&onEkran[tol][mol+1].type!==8){
	

if(onEkran[tol][mol+1].type!==4&&onEkran[tol][mol+1].type!==4.1){
	
onEkran[tol][mol+1].type=this.type;

this.type=0;
//this.y=tol*cell;
this.x-=cell;
this.noFree=0;
this.vSp=0;	
this.gSp=0;
this.noStab=0;	

}


else if(onEkran[tol][mol+1].type===4){
		
		onEkran[tol][mol+1].type=4;
		onEkran[tol][mol+1].noFree=1;
	this.x-=cell;
		
		this.type=0;
		
		
	}
		else if(onEkran[tol][mol+1].type===4.1){
		
		onEkran[tol][mol+1].type=4.1;
		onEkran[tol][mol+1].noFree=1;
		this.x-=cell;
		
		this.type=0;
		
		
	};


};	

}



else if(this.type===5||this.type===6||this.type===10||this.type===11){
	
if(this.vSp>0){


	
onEkran[tol+1][mol].type=this.type;
onEkran[tol+1][mol].vektor=this.vektor;


this.kill=0;
this.favoritVektors=[];
this.potencialVektors=[];
//this.babah=0;

this.type=0;

this.y-=cell;
//this.x=mol*cell;
this.noFree=0;

this.vSp=0;	
this.gSp=0;

this.noStab=0;

this.way=0;

	
};


 if(this.vSp<0){
	
this.favoritVektors=[];
this.potencialVektors=[];	
	
	
onEkran[tol-1][mol].type=this.type;	
onEkran[tol-1][mol].vektor=this.vektor;
this.type=0;

this.y+=cell;	
this.gSp=0;this.vSp=0;
this.noFree=0;
this.noStab=0;

this.way=0;

	
};



if(this.gSp<0){
	

this.favoritVektors=[];
this.potencialVektors=[];
this.noFree=0;
	
	//if(onEkran[tol][mol-1].type===1){
		//console.log("ok");
		//};
	
	
onEkran[tol][mol-1].type=this.type;	
onEkran[tol][mol-1].vektor=this.vektor;
this.type=0;

this.x+=cell;


this.kill=0;


this.noFree=0;

this.vSp=0;	
this.gSp=0;

this.noStab=0;

this.way=0;



	
};

	



if(this.gSp>0){
	
if(this.special===0){
this.favoritVektors=[];
this.potencialVektors=[];
this.noFree=0;
	
onEkran[tol][mol+1].type=this.type;
	onEkran[tol][mol+1].vektor=this.vektor;
this.type=0;


this.x-=cell;
this.gSp=0;
this.vSp=0;
this.kill=0;


this.noFree=0;

this.noStab=0;

this.way=0;
}
else if(this.special===1){
	
	this.special=0;
	this.gSp=0;
	onEkran[tol][mol+1].type=this.type;
	onEkran[tol][mol+1].vektor=this.vektor;
	
	
	
	
	
	
};


	
};

	
	
}




else if(this.type===8){
	
	
	
	if(this.y===onEkran[tol+1][mol].y){
	
	if(onEkran[tol+1][mol].type===13){levelVin=1;};
		
	if(onEkran[tol+1][mol].type===1){
		almazy++;
if(doorOpen===0){		
	score+=10;
}
else{score+=15;};	
	};	

this.noFree=0;
	
onEkran[tol+1][mol].type=this.type;	
onEkran[tol+1][mol].chudoNoFree=1;

this.type=0;

this.y-=cell;
this.gSp=0;this.vSp=0;



}

else if(this.y===onEkran[tol-1][mol].y){
	
if(onEkran[tol-1][mol].type===13){levelVin=1;};	
	if(onEkran[tol-1][mol].type===1){
		almazy++;
		if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
		};
	
onEkran[tol-1][mol].type=this.type;	
onEkran[tol-1][mol].chudoNoFree=1;

this.type=0;

this.y+=cell;	
this.gSp=0;this.vSp=0;
this.noFree=0;



	
};



if(this.x===onEkran[tol][mol-1].x){
	
	
	if(onEkran[tol][mol-1].type===13){levelVin=1;};
	if(onEkran[tol][mol-1].type===1){
		almazy++;
		if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
		};
	onEkran[tol][mol-1].chudoNoFree=1;

this.noFree=0;
	
	//if(onEkran[tol][mol-1].type===1){
		//console.log("ok");
		//};
	
	
onEkran[tol][mol-1].type=this.type;	
this.type=0;

this.x+=cell;
this.gSp=0;this.vSp=0;
//onEkran[tol][mol-1].gSp=0;
if(sperma===1){
onEkran[tol][mol-1].noFree=1; sperma=0;
};
//gSp=0;vSp=0;


	
};




if(this.x===onEkran[tol][mol+1].x){
	
	if(onEkran[tol][mol+1].type===13){levelVin=1;};
//if(onEkran[tol][mol+2].type===3){console.log(tol+" ok "+mol)};
	if(onEkran[tol][mol+1].type===1){
		almazy++;
		if(doorOpen===0){		
	score+=10;
}
else{score+=15;};
		};

this.noFree=0;
	
onEkran[tol][mol+1].type=this.type;
onEkran[tol][mol+1].chudoNoFree=1;	
this.type=0;


this.x-=cell;
this.gSp=0;this.vSp=0;

if(sperma===1){
onEkran[tol][mol+1].noFree=1;sperma=0;
};
//gSp=0;vSp=0;	




};
	
//console.log(almazy+" "+almazOk);

	////////////////////////////
	if(almazy>=almazOk&&almazOkFlag===0){
		
		
		//console.log("okokoko")
		
		infoIn.push(new Info(this.x-150,this.y-150,"exit"));
		almazOkFlag=1;
		
		exitsound.currentTime=0.3;
		exitsound.play();
		
	};
	
	///////////////////////////



	
}
else if(this.type===12){
	
	
	if(onEkran[tol-2][mol].type===3&&onEkran[tol-2][mol].y+cell===this.y){
		magic=1;
		
		if(onEkran[tol+1][mol].type===0||(onEkran[tol+1][mol].type===1&&onEkran[tol+2][mol].type===0)){
	onEkran[tol-1][mol].magicWay=1;	
		};		
		
			
		
		};
		
		
		if(onEkran[tol+1][mol].type===0&&onEkran[tol-1][mol].y===this.y){
			
		onEkran[tol+1][mol].y=this.y;
		onEkran[tol+1][mol].type=1;
		onEkran[tol+1][mol].magicWay=1;
			
		};	
	
	
};


	};

	
};




ObjectKlet.prototype.checkCellStatus=function(tol,mol){
	
	if(this.type===0){
		
this.vSp=0;
this.gSp=0;
this.noFree=0;
this.kill=0;
this.noStab=0;
this.herNoFree=0;
	this.chudoNoFree=0;	
this.tolVektor=0;
this.molVektor=0;
this.special=0;
this.welcome=0;
	this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
this.magicWay=0;
this.stope=0;
this.sound=0;	
		
	}
else if(this.type===1){
	
//this.vSp=0;
this.gSp=0;
this.noFree=1;
this.noStab=0;
this.herNoFree=0;
this.animTimer=0;
this.welcome=0;	
this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
//this.magicWay=0;	
	
}
else if(this.type===2){
	
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;	
this.welcome=0;	
this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
	this.magicWay=0;	
}

else if(this.type===3){
		
//this.vSp=0;
this.gSp=0;
this.noFree=1;
this.noStab=0;
this.herNoFree=1;
this.welcome=0;	

this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;	
		
	}

else if(this.type===4){
		
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;
	this.welcome=0;	
	this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
	this.magicWay=0;	
		
	}
	
else if(this.type===4.1){
		
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;
	this.welcome=0;	
	
	this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;	
this.magicWay=0;		
	
	}	
	
	
else if(this.type===5||this.type===6||this.type===10||this.type===11){
		
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;
//this.chudoNoFree=1;
this.way="onClock";	
this.chudoNoFree=1;
this.special=0;
this.welcome=0;

	this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
this.magicWay=0;	

		
	}	
else if(this.type===7){
	
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;	
this.welcome=0;	
this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
	this.magicWay=0;	
	
}	
	
	else if(this.type===9){
		
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=0;
this.welcome=0;	
this.miobNumber=null;
this.miobPotencialVektors=[];
	this.stabVektor=0;
	this.magicWay=0;		
		
	}

else if(this.type===12){
		
this.vSp=0;
this.gSp=0;
this.noFree=1;
this.kill=0;
this.noStab=0;
this.herNoFree=1;
this.welcome=0;	
this.miobNumber=null;
this.miobPotencialVektors=[];
this.stabVektor=0;
this.magicWay=0;				
		
	}
	
	
};




var babams=function(){
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type===4&&onEkran[tol][mol].babah===24){
		onEkran[tol][mol].type=1;
		onEkran[tol][mol].babah=0;
		onEkran[tol][mol].animY=0;
		
if(onEkran[tol+1][mol].type===5||onEkran[tol+1][mol].type===6||
onEkran[tol+1][mol].type===a||onEkran[tol+1][mol].type===b){
onEkran[tol][mol].vSp=cell/6;	
};		
		
		
		
		}
else if(onEkran[tol][mol].type===4.1&&onEkran[tol][mol].babah===12){
	//console.log("ok")
	onEkran[tol][mol].type=0;
		onEkran[tol][mol].babah=0;
		onEkran[tol][mol].animY=0;	
	
}
};	
	
};	

};



ObjectKlet.prototype.chudoSelectWay=function(tol,mol){




this.favoritVektors=[];
this.potencialVektors=[];
this.gSp=0;
this.vSp=0;


if(this.stabVektor!==0){this.vektor=this.stabVektor;};




if(this.type===5||this.type===10){
	
	

	


if(this.vektor==="down"){
this.favoritVektors=["right","down","left","up"];
}
if(this.vektor==="up"){
this.favoritVektors=["left","up","right","down"];
}
if(this.vektor==="left"){
this.favoritVektors=["down","left","up","right"];
}
if(this.vektor==="right"){
this.favoritVektors=["up","right","down","left"];
};


////////////////////////////////////////////////////
if(this.vektor==="down"&&
onEkran[tol][mol+1].type===0&&
onEkran[tol][mol-1].type===0&&
onEkran[tol-1][mol].type===0&&
onEkran[tol-1][mol+1].type!==2&&
onEkran[tol-1][mol+1].type!==9&&
onEkran[tol-1][mol+1].type!==c&&
onEkran[tol+1][mol].noFree===1){
this.favoritVektors=["left","down","right","up"];
}
/////////////////////////////////////////////////////////
//if((this.vektor==="down"&&onEkran[tol-1][mol+1].noFree===0)||(onEkran[tol-1][mol+1].type===5||
//onEkran[tol-1][mol+1].type===6||onEkran[tol-1][mol+1].type===10||onEkran[tol-1][mol+1].type===11)){
//	this.favoritVektors=["down","left","right","up"];
//};

//if((this.vektor==="left"&&onEkran[tol+1][mol+1].noFree===0)||(onEkran[tol+1][mol+1].type===5||
//onEkran[tol+1][mol+1].type===6)){
//	this.favoritVektors=["left","up","right","down"];
//};





}
///*
else if(this.type===6||this.type===11){

	
if(this.vektor==="down"){
this.favoritVektors=["left","down","right","up"];
}
if(this.vektor==="up"){
this.favoritVektors=["right","up","left","down"];
}
if(this.vektor==="left"){
this.favoritVektors=["up","left","down","right"];
}
if(this.vektor==="right"){
this.favoritVektors=["down","right","up","left"];
};	




////////////////////////////////////////////////////
if(this.vektor==="down"&&
onEkran[tol][mol+1].type===0&&
onEkran[tol][mol-1].type===0&&
onEkran[tol-1][mol].type===0&&
onEkran[tol-1][mol-1].type!==2&&
onEkran[tol-1][mol-1].type!==9&&
onEkran[tol-1][mol-1].type!==7&&
onEkran[tol+1][mol].noFree===1){
this.favoritVektors=["right","down","left","up"];
}
/////////////////////////////////////////////////////////


//if((this.vektor==="up"&&onEkran[tol+1][mol+1].noFree===0)||(onEkran[tol+1][mol+1].type===5||
//onEkran[tol+1][mol+1].type===6)){
//	this.favoritVektors=["up","left","right","down"];
//};////////////////////////////////////////////////////////////


//if((this.vektor==="right"&&onEkran[tol+1][mol-1].noFree===0)||(onEkran[tol+1][mol-1].type===5||
//onEkran[tol+1][mol-1].type===6)){
//	this.favoritVektors=["right","down","left","up"];
//};

	
	
};

//*/

if((onEkran[tol-1][mol].noFree===0
//&&onEkran[tol-2][mol].type!==1&&onEkran[tol-2][mol].type!==3
)//||(onEkran[tol-1][mol].type===0)
){this.potencialVektors.unshift("up");};


//if(onEkran[tol-1][mol].type==0){this.potencialVektors.unshift("up");}



if(onEkran[tol+1][mol].noFree===0||onEkran[tol+1][mol].welcome===1){this.potencialVektors.unshift("down");};
if(onEkran[tol][mol-1].noFree===0||onEkran[tol][mol-1].welcome===1){this.potencialVektors.unshift("left");};
if((onEkran[tol][mol+1].noFree===0||onEkran[tol][mol+1].welcome===1)//||(onEkran[tol][mol+1].type===5&&onEkran[tol][mol+1].gSp>0)
//||(onEkran[tol][mol+1].type===0)	
){
	this.potencialVektors.unshift("right");
	

	
	}
	
if((onEkran[tol][mol+1].type===5||onEkran[tol][mol+1].type===6||
onEkran[tol][mol+1].type===10||onEkran[tol][mol+1].type===11)&&onEkran[tol][mol+1].gSp>0)	{
	
	//if(onEkran[tol][mol-1].type!==5){
	//onEkran[tol][mol+1].special=1;
	this.potencialVektors.unshift("right");
	//};	
	
};





if((onEkran[tol+1][mol].type===5||onEkran[tol+1][mol].type===6||
onEkran[tol][mol+1].type===10||onEkran[tol][mol+1].type===11)&&onEkran[tol+1][mol].vSp>0)	{
	
	//if(onEkran[tol][mol-1].type!==5){
	//onEkran[tol][mol+1].special=1;
	this.potencialVektors.unshift("down");
	//};	
	
};


//if((onEkran[tol][mol-1].type===6)&&onEkran[tol][mol-1].gSp<0)	{
	
	
//	this.potencialVektors.unshift("left");
		
	
//};



if(this.potencialVektors.length!==0){
	
	

	

	
//else{	
	
	this.stabVektor=this.vektor;
	
this.vektor=0;
//}



for(var i=0;i<this.favoritVektors.length;i++){
	
for(var k=0;k<this.potencialVektors.length;k++){
	
	if(this.favoritVektors[i]===this.potencialVektors[k]){
		this.vektor=this.favoritVektors[i];break;
	};
	
};	

if(this.vektor!==0){break;};

	
};


//if(this.potencialVektors.length!==0){

if(this.vektor==="up"){this.vSp=-cell/6;onEkran[tol-1][mol].noFree=1;};
if(this.vektor==="down"){this.vSp=cell/6;onEkran[tol+1][mol].noFree=1;};
if(this.vektor==="left"){this.gSp=-cell/6;onEkran[tol][mol-1].noFree=1;};
if(this.vektor==="right"){this.gSp=cell/6;onEkran[tol][mol+1].noFree=1;};

//};
//};

};



//if(this.gSp>0&&onEkran[tol][mol+1].type===4){this.gSp=0;};
//if(this.potencialVektors.length===0){this.gSp=0;this.vSp=0;};
	if(onEkran[tol-1][mol].type===0&&
onEkran[tol-2]&&(onEkran[tol-2][mol].type===1||onEkran[tol-2][mol].type===3)
//&&onEkran[tol+1][mol].noFree===1

&&(this.vektor==="right"||this.vektor==="up"||this.vektor==="left")
//&&(onEkran[tol][mol+1].noFree===1||onEkran[tol][mol-1].noFree===1)
){
	this.gSp=0;
	this.vSp=0;
	
if(this.vektor==="up"){onEkran[tol-1][mol].noFree=0;};
//if(this.vektor==="down"){this.vSp=cell/6;onEkran[tol+1][mol].noFree=1;};
if(this.vektor==="left"){onEkran[tol][mol-1].noFree=0;};
if(this.vektor==="right"){onEkran[tol][mol+1].noFree=0;};	
	
	
	
	
	};

};








var chudoPoryadok=0;
var tikk=0;

var objOtris=function(){


//levelControl();

if(isMenu<140){
///*	
sdvigControl();
//*/	
if(edition===1){
///*
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	//if(onEkran[tol][mol].type!==8){
		onEkranFon[tol][mol].draw();
	//onEkran[tol][mol].draw();
	};
};	
	
//};


	
	
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==12){
		//onEkranFon[tol][mol].draw();
	onEkran[tol][mol].draw();
	};
};	
	
};	



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type===12){
		//onEkranFon[tol][mol].draw();
	onEkran[tol][mol].draw();
	};
};	
	
};	






for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type===8){
	onEkran[tol][mol].draw();
	};
};	
	
};

};
//*/


//if(levelVinTimer>=50){
//if(lives===0){	
	//darck();
//};
//};
	

if(gamePause===0){

	if(takt===0){
	
//console.log(onEkran[0][0].y);//////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////////////////////////	
suizideControl();	
	
	
babams();

	
//console.log(onEkran[0][0].y);//////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////////////////////////	
//babams();

if(tikk===4){tikk=0;};


if(level===18){

if(tikk<=1){//console.log("1");
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=onEkran[tol].length-1;mol>=0;mol--){////////////////////////////
if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){		
	onEkran[tol][mol].chudoSelectWay(tol,mol);
};	
};	
	
};
}
else{//console.log("2");
	
for(var tol=0;tol<onEkran.length;tol++){
	
for(var mol=onEkran[tol].length-1;mol>=0;mol--){////////////////////////////
if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){		
	onEkran[tol][mol].chudoSelectWay(tol,mol);
};	
};	
	
};	
	
};
}
else{
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=onEkran[tol].length-1;mol>=0;mol--){////////////////////////////
if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){		
	onEkran[tol][mol].chudoSelectWay(tol,mol);
};	
};	
	
};	
	
};
	
	
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
	onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11){
	onEkran[tol][mol].checkDown(tol,mol);
	};
};	
	
};


for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11	){
	onEkran[tol][mol].checkLeft(tol,mol);
	};
};	
	
};



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type!==8&&onEkran[tol][mol].type!==5&&onEkran[tol][mol].type!==6&&
	onEkran[tol][mol].type!==10&&onEkran[tol][mol].type!==11){
	onEkran[tol][mol].checkRight(tol,mol);
	};
};	
	
};






//if(chudoPoryadok===1){
//for(var tol=onEkran.length-1;tol>=0;tol--){
	
//for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
//if(onEkran[tol][mol].type===5){		
//	onEkran[tol][mol].chudoSelectWay(tol,mol);
//};	
//};	
	
//};

//};




///*
//if(chudoPoryadok===0){


//};
//*/


miobControl();




//if(chudoPoryadok===0){chudoPoryadok=1;}
//else if(chudoPoryadok===1){chudoPoryadok=0;};


//console.log(chudoPoryadok);


if(levelVin===0){

for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
if(onEkran[tol][mol].type===8){		
	onEkran[tol][mol].herCheckVektor(tol,mol);
};	
};	
	
};

//};






for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type===8){
	onEkran[tol][mol].herCheckTrup(tol,mol);
	};
};	
	
};



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
	onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){
	onEkran[tol][mol].chudoCheckTrup(tol,mol);
	};
};	
	
};




if(ovral===1){
		
ovral=0;	
	
ovralCheck();		
	
};




	};

tik++;

};////////////////////
	


animationHer();	




for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){

	onEkran[tol][mol].moover();
	
};	
	
};





	


for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	//if(onEkran[tol][mol].type!==8){
	onEkran[tol][mol].globalMoover();
	onEkranFon[tol][mol].globalMoover();
	//};
};	
	
};	






if(takt===5){
	



for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=onEkran[tol].length-1;mol>=0;mol--){
	
	if(onEkran[tol][mol].type===5||onEkran[tol][mol].type===6||
	onEkran[tol][mol].type===10||onEkran[tol][mol].type===11){
	onEkran[tol][mol].checkCell(tol,mol);
	};	
};	
	
};	





	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	
	onEkran[tol][mol].checkCell(tol,mol);
	
};	
	
};	




//if(revers===0){

for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	
	onEkran[tol][mol].checkCell(tol,mol);
	
};	
	
};	

//}
/*
else{
	
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=onEkran[tol]-1;mol>=0;mol--){
	
	
	onEkran[tol][mol].checkCell(tol,mol);
	
};	
	
};	
	
revers=0;	
};
*/


///*
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){////////////////////////////
if(onEkran[tol][mol].type!==8){		
	onEkran[tol][mol].checkCellStatus(tol,mol);
};	
};	
	
};
//*/




for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===8){
	onEkran[tol][mol].herCheckStop(tol,mol);

	};
	
};	
	
};

//console.log(trup);


	


//if(trup.length>0){babah(trup);trup=[];};




	
};



};

};
//tik++;
//console.log(tik);
};
	




	



var ramka=function(){


//ctx.fillRect(0,0,width,height);
	
	
};




//ekranMooveStart();






var anim=0;
var anim1=0;
var anim2=0;
var anim3=0;
var anim4=0;
var anim5=0;
var anim6=0;
var anim7=0;
var anim8=0;
var anim9=0;
var anim10=0;

var animX=0;
var animY=0;


var almazAnimX=0;
var almazAnimY=0;

var vektorSave=0;
var vektorMemory=0;

var herStopTimerAnimation=0;


 var animationHer=function(){
	 
	 if(levelVinTimer<6||levelVinTimer>160){
	 
if(gSp<0){vektorMemory="left";herStopTimerAnimation=30;};
if(gSp>0){vektorMemory="right";herStopTimerAnimation=30;};
if(vSp<0){vektorMemory="up";herStopTimerAnimation=30;};
if(vSp>0){vektorMemory="down";herStopTimerAnimation=30;};
if(gSp===0&&vSp===0){vektorMemory=0;herStopTimerAnimation--;};



if(vektorSave!==vektorMemory){anim10=5;vektorSave=vektorMemory;};




if(anim10===1000){anim10=0;};
		
		
if(anim10%5===0){
		
if(gSp===0&&vSp===0&&herStopTimerAnimation<=0){
	anim4=0;
	anim5=0;
	anim6=0;
	anim7=0;
	if(anim3===0){animX=0;anim3=1;};
	
		animY=0;
	animX+=200;	

	
	if(animX===400){animX=0;};
}
else if(vSp>0){
	
	//console.log(animX)
	
anim3=0;
anim6=0;
anim5=0;
anim7=0;

if(anim4===0){anim1=0;animX=0;anim4=1;};
	
	animY=800;


if(anim1===0){	
animX+=200;	
}
else{animX-=200;};

if(animX===600){anim1=1;};

if(animX===0){anim1=0;};

	
}
else if(vSp<0){
anim3=0;
anim4=0;
anim6=0;
anim7=0;

anim3=0;

if(anim5===0){anim1=0;animX=0;anim5=1;};
	
	animY=400;


if(anim1===0){	
animX+=200;	
}
else{animX-=200;};

if(animX===600){anim1=1;};

if(animX===0){anim1=0;};	
	
	
}
else if(gSp<0){
anim3=0;
anim4=0;
anim5=0;
anim7=0;

if(anim6===0){animX=0;anim6=1;anim1=0;};
animY=200;


if(anim1===0){	
animX+=200;	
}
else{animX-=200;};

if(animX===400){anim1=1;};

if(animX===0){anim1=0;};

//console.log(animX);	
	
}
	else if(gSp>0){
anim3=0;
anim4=0;
anim5=0;
anim6=0;	

	

if(anim7===0){animX=0;anim7=1;anim1=0;};
animY=600;


if(anim1===0){	
animX+=200;	
}
else{animX-=200;};

if(animX===400){anim1=1;};

if(animX===0){anim1=0;};	
	
}		
};		


anim10++;


	 }


	
 };
	


var animal=0



var stoneAnimY=0;



var animation=function(){
	
	if(animal%3===0){
	
almazAnimX+=200;

if(almazAnimX===800){almazAnimX=0;};
	};	


animal++;

if(animal===1000){animal=0;};



if(animal%3===0){
stoneAnimY+=200;
};

if(stoneAnimY===800){stoneAnimY=0;};

//console.log(stoneAnimY);
	
};


var chudoAnimX=0;
var chudoAnimY=0;
var chudoAnimTimer=5;
var chudoAnimNaprav=0;


var chudoAnimation=function(){
	
chudoAnimTimer++;
if(chudoAnimTimer===1000){chudoAnimTimer=0;};


if(chudoAnimTimer%3===0){
if(chudoAnimNaprav===0){
chudoAnimY+=200;
}
//else{
//	chudoAnimY-=200;
//};

//if(chudoAnimY===600){chudoAnimNaprav=1;};
//if(chudoAnimY===0){chudoAnimNaprav=0;};

if(chudoAnimY===800){chudoAnimY=0;};

};	

//console.log(chudoAnimY);
	
};





var miobTimer=20;
var miobMetamorph=0;


var miobControl=function(){


var miobFree=0;	
var miobs=0;
var koofMiob=4;


if(level===23){koofMiob=2;};

//var ppp=0;
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===7){
	
	miobs++;
	
	
 if(((onEkran[tol-1][mol].noFree===0||onEkran[tol-1][mol].type===2)&&onEkran[tol-1][mol].type!==8)||
	((onEkran[tol+1][mol].noFree===0||onEkran[tol+1][mol].type===2)&&onEkran[tol+1][mol].type!==8)||
	((onEkran[tol][mol+1].noFree===0||onEkran[tol][mol+1].type===2)&&onEkran[tol][mol+1].type!==8)||
	((onEkran[tol][mol-1].noFree===0||onEkran[tol][mol-1].type===2)&&onEkran[tol][mol-1].type!==8)
	){
	
	miobFree++;
	
	
	onEkran[tol][mol].miobNumber=miobFree;
	//ppp=miobFree-1;
	};	

	};
	
};	
	
};	
	

miobTimer--;

if(miobTimer<0){miobTimer=0;};

//console.log(miobTimer);

if(miobTimer===0){
miobTimer=Math.floor(30-miobs/koofMiob);

var randomMiob=Math.floor(Math.random()*(miobFree))+1;

//console.log(randomMiob+"  "+ppp)

for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===7&&onEkran[tol][mol].miobNumber===randomMiob){
		
//		//console.log("ok");
	if((onEkran[tol-1][mol].noFree===0||onEkran[tol-1][mol].type===2)&&onEkran[tol-1][mol].type!==8){
		onEkran[tol][mol].miobPotencialVektors.push("up");
	};
if((onEkran[tol+1][mol].noFree===0||onEkran[tol+1][mol].type===2)&&onEkran[tol+1][mol].type!==8){
	    onEkran[tol][mol].miobPotencialVektors.push("down");
};
if((onEkran[tol][mol-1].noFree===0||onEkran[tol][mol-1].type===2)&&onEkran[tol][mol-1].type!==8){
	    onEkran[tol][mol].miobPotencialVektors.unshift("left");
};
 if((onEkran[tol][mol+1].noFree===0||onEkran[tol][mol+1].type===2)&&onEkran[tol][mol+1].type!==8){
	    onEkran[tol][mol].miobPotencialVektors.unshift("right");
};			
		
//console.log(onEkran[tol][mol].miobPotencialVektors)
	
var randomMiobVektor=Math.floor(Math.random()*onEkran[tol][mol].miobPotencialVektors.length);		




if(onEkran[tol][mol].miobPotencialVektors[randomMiobVektor]==="up"){
	onEkran[tol-1][mol].type=7;onEkran[tol-1][mol].noFree=1;
};
if(onEkran[tol][mol].miobPotencialVektors[randomMiobVektor]==="down"){
	onEkran[tol+1][mol].type=7;onEkran[tol-1][mol].noFree=1;
};
if(onEkran[tol][mol].miobPotencialVektors[randomMiobVektor]==="left"){
	onEkran[tol][mol-1].type=7;onEkran[tol][mol-1].noFree=1;
};
if(onEkran[tol][mol].miobPotencialVektors[randomMiobVektor]==="right"){
	onEkran[tol][mol+1].type=7;onEkran[tol][mol+1].noFree=1;
};

		



	};




	
};	
	
};




};


if(miobFree>0){miobMetamorph=0;};

//console.log(miobFree);

if(miobFree===0&&miobs>0){miobMetamorph++;};

if(miobMetamorph===10){
	
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===7){
	onEkran[tol][mol].type=4;
	onEkran[tol][mol].checkCellStatus(tol,mol);

	};
	
};	
	
};	

	
};


if(miobs>=200){
	
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===7){
	onEkran[tol][mol].type=3;
	//onEkran[tol][mol].checkCellStatus(tol,mol);
onEkran[tol][mol].noFree=1;
	};
	
};	
	
};		
	
	
};

if(miobs>0){
	
	if(lives>0){
	miobzv.currentTime=0;
	miobzv.play();
	};	
	
};
	
};



var herCoord=[];
var herTrupFlag=0;
var isMenuFl=0;

var levelFl5=0;
var levelFl9=0;
var levelFl13=0;
var levelFl17=0;
var levelFl21=0;
var levelFl25=0;


var levelControl=function(){

if(zast===0){	
//console.log(lives);
if(lives>0){

	
var herIn=0;
//var herCoord=[];	
	
if(herDead===0){
	
for(var tol=onEkran.length-1;tol>=0;tol--){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	if(onEkran[tol][mol].type===8){
	
	herIn=1;

herCoord=[new Info(onEkran[tol][mol].x,onEkran[tol][mol].y,"her")];


	};
	
};	
	
};	
		
};	
	

if(herIn===0){
	
if(level1.volume>0.1){
level1.volume-=0.01;
};	
if(level2.volume>0.1){
level2.volume-=0.01;
};
if(level3.volume>0.1){
level3.volume-=0.01;
};
if(level4.volume>0.1){
level4.volume-=0.01;
};
if(level5.volume>0.1){
level5.volume-=0.01;
};
if(level6.volume>0.1){
level6.volume-=0.01;
};

miobzv.pause();
	
	herDead=1;

if(herTrupFlag===0){
infoIn.unshift(herCoord[0]);
herTrupFlag=1;
};	
	
	//console.log(infoIn)

if(lives===1){isMenuFl=1;};
	
	};


	
	
	
if(level===1){almazOk=10;};
	if(level===2){almazOk=8;};
	if(level===3){almazOk=15;};
	if(level===4){almazOk=18;};
	if(level===5){almazOk=4;};
	if(level===6){almazOk=4;};
	if(level===7){almazOk=10;};
	if(level===8){almazOk=10;};
	if(level===9){almazOk=60;};
	if(level===10){almazOk=6;};
	if(level===11){almazOk=3;};
	if(level===12){almazOk=18;};
	if(level===13){almazOk=40;};
	if(level===14){almazOk=15;};
	if(level===15){almazOk=10;};
	if(level===16){almazOk=8;};
	if(level===17){almazOk=40;};
	if(level===18){almazOk=80;};
	if(level===19){almazOk=35;};
	if(level===20){almazOk=50;};
	if(level===21){almazOk=80;};
	if(level===22){almazOk=60;};
	if(level===23){almazOk=65;};
	if(level===24){almazOk=20;};


if(almazy>=almazOk){doorOpen=1;};
	

if(levelVin===1||herDead===1){
	
if(level1.volume>0.1&&levelVin===1){
level1.volume-=0.01;

};	
if(level2.volume>0.1&&levelVin===1){
level2.volume-=0.01;

};
if(level3.volume>0.1&&levelVin===1){
level3.volume-=0.01;

};
if(level4.volume>0.1&&levelVin===1){
level4.volume-=0.01;

};
if(level5.volume>0.1&&levelVin===1){
level5.volume-=0.01;

};
if(level6.volume>0.1&&levelVin===1){
level6.volume-=0.01;

};

	
levelVinTimer++;	
	
};


if(levelVinTimer===160){
	//levelVinTimer=0;
globalObnul();


////////////////////////////////////////////


//if(level===5||level===9||level===13){
//	zast=1;
//}
//else {

//start();
//};

if(level===5&&levelFl5===0){
	zast=1;
	levelFl5=1;
}
else if(level===9&&levelFl9===0){
	zast=1;
	levelFl9=1;
}
else if(level===13&&levelFl13===0){
	zast=1;
	levelFl13=1;
}
else if(level===17&&levelFl17===0){
	zast=1;
	levelFl17=1;
}
else if(level===21&&levelFl21===0){
	zast=1;
	levelFl21=1;
}
else if(level===25&&levelFl25===0){
	zast=1;
	levelFl25=1;
}
else {

start();
};

/////////////////////////////////////////////////


	
};
	

}
else{
	
	bastCheck();
	
	herDead=0;


	
globalObnul();
//svet=1;	
startGame=0;
lives=3;
level=1;
//darck();
score=0;
upScore=0;
 scoreSafe=0;

zifryBoxScore=[];

 zifryBoxScore=[
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0"),
new ZifryInfo(446,45,"0")
];


 zifryBoxAlmazy=[
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0"),
new ZifryInfo(60,165,"0")

];


 zifryBoxHer=[
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0"),
new ZifryInfo(60,215,"0")

];


zifryBoxLevel=[

new ZifryInfo(165,45,"0"),
new ZifryInfo(165,45,"0")

];


sound.pause();
	soundalm.pause();
	exitsound.pause();
	fly.pause();
	remoove.pause();
	buhzem.pause();
	buhalm.pause();
	buhtrupalm.pause();

//isMenu=0;
svet=0;

//$("#start").fadeIn(800);	

//$("#boul").fadeIn(800);
//$("#time").fadeIn(800);	
	
menuTimer=-1000;
 bukviTimer=1;
//var bukvi;
tik=0;

	
};

};
	
};


var globalObnul=function(){
	
if(herDead===1){	
lives--;	
};

//if(lives===0){darck();};
camflag=0;
	
takt=0;
up=0;
down=0;
 left=0;
 right=0;
globUp=0;
 globDown=0;
 globLeft=0;
globRight=0;
upNext=0;
downNext=0;
leftNext=0;
rightNext=0;
kc=0;
 hz=0;
timer=0;
cell=60;
 globalGSp=0;
 globalVSp=0;
trup=[];
revers=0;
 hand=false;
 masPlus=0;
 masMinus=0;
 obzor=0;
 magic=0;
 almazy=0;
doorOpen=0;
 levelVin=0;
almazOk=0;
//levelVinTimer=0;
 miobMetamorph=0;
miobTimer=30;
chudoAnimX=0;
 chudoAnimY=0;
chudoAnimTimer=5;
 chudoAnimNaprav=0;
  animal=0;
stoneAnimY=0;
anim=0;
 anim1=0;
 anim2=0;
 anim3=0;
 anim4=0;
 anim5=0;
 anim6=0;
 anim7=0;
 anim8=0;
 anim9=0;
 anim10=0;
 animX=0;
 animY=0;
 almazAnimX=0;
 almazAnimY=0;
 vektorSave=0;
 vektorMemory=0;
chudoPoryadok=0;
noStope=0;
sperma=0;
almazAnimX=0;
almazAnimY=0;
onEkranFon=[];
levelObj1Fon=[];
 gSp=0;
 vSp=0;
 svet=0;
 almazOkFlag=0;
 herCoord=[];
 herTrupFlag=0;
 gamePause=0;
sound.pause();
	soundalm.pause();
	exitsound.pause();
	fly.pause();
	remoove.pause();
	buhzem.pause();
	buhalm.pause();
	buhtrupalm.pause();
	muz=0;
	level1.pause();
	level2.pause();
	level3.pause();
	level4.pause();
	level5.pause();
	level6.pause();
	tik=0;
	tikk=0;
//if(lives<=0){ 
//startGame=0;
//};

if(herDead===0){
level++;///////////////////////////////////

loadControl();

};
herDead=0;

onEkran=[];
gos=[];
soh;
startPosition=0;

controlPoint={};

controlPoint.x=width/2+60;
controlPoint.y=height/2;
controlPoint.gSp=0;
controlPoint.vSp=0;
 mashtab=1;	
 
	
};



var darck=function(){

if(levelVinTimer>=50&&levelVinTimer<160){
	



	
ctx.globalAlpha=svet;
ctx.fillStyle="black";
ctx.fillRect(0,0,width,height);

ctx	.globalAlpha=1;	

if(svet<1){
svet+=0.01;
};
//console.log(lives);





};
if(levelVinTimer>=160){

levelVin=0;
	
	levelVinTimer++;
	
ctx.globalAlpha=svet;

ctx.fillRect(0,0,width,height);

ctx	.globalAlpha=1;	

if(svet>0){
svet-=0.01;
};	
	
	
};


if(levelVinTimer>=260){
levelVinTimer=0;
//svet=0;
//isMenu=1;
};


	
};


var almazOkFlag=0;

var gameInfo=function(){
	
	
	
	
if(infoIn.length>0){
	
	//console.log("ok");
	for(var i=0;i<infoIn.length;i++){
		
		if(infoIn[i].type!==0){
		infoIn[i].infoRealization();
		};	
	};


	for(var k=0;k<infoIn.length;k++){
		
		if(infoIn[infoIn.length-1].type===0){
			infoIn.pop();
		};
		
	};


		
	
};	


	
};


Info.prototype.infoRealization=function(){
	
	if(this.type==="exit"){
		
		if(this.moove4===0){
			
			this.moove4=1;
			
			
			this.x=350;
			this.y=0;;
			
		};
		
		
		
ctx.drawImage(exit,0,0,200,200,this.x*mashtab,this.y*mashtab,300*mashtab,300*mashtab);

this.y+=10;

if(this.y>height){this.type=0;};
			
		
	}

else if(this.type==="her"){
if(edition===1){	
ctx.drawImage(hertrup,this.animX,this.animY,200,200,this.x*mashtab,this.y*mashtab,cell*mashtab,cell*mashtab);	
};
if(this.moove1===0){
	this.moove=-20;
	this.moove1=1;
};

if(this.moove3%5==0){
this.animX+=200;
};


if(this.animX===400){this.animX=0;};

this.y=this.y+this.moove;

this.moove+=3;

this.moove3++;

if(this.y>height){this.type=0;};
	
}

else if(this.type==="pause"){
	
	
ctx.drawImage(paus,this.animX,this.animY,200,200,this.x,this.y-130,300,300);	

if((gamePause===1&&this.x>width/2-100)||gamePause===0){this.x-=50;};


if(this.x+300<0){this.type=0;};

	
}

else if(this.type==="1up"){
	
	
	
ctx.drawImage(oneup,this.animX,this.animY,200,200,this.x+50,this.y+150,300,150);	
	

if(this.moove2%4===0){
	
	this.animX+=200;
	
	if(this.animX===800&&this.animY===200){
		this.animX=600;
		}
	
else if(this.animX===800){this.animX=0;this.animY=200;};
	
	
	
};



this.y+=this.moove;

this.moove--;

if(this.y+200<0){this.type=0;};

this.moove2++;
	
}

	
	
};


let camX=0;
let camY=0;
let camflag=0;
let heroX=0;
let heroY=0;






setInterval(function(){
ctx.clearRect(0,0,width,height);////////////////////////////////////////



if(isMenuFl===1){isMenu++;};


//console.log(isMenu);

if(startGame===1){


//ctx.fillStyle="black";
//ctx.fillRect(0,0,width,height);	
	

levelControl();	
	
	

ramka();

	
	masControl();
	
	
ekranMoove();	
	
kontrol();	
objOtris();	

if(isMenu<140){
	
if(level<24||(level===24&&levelVin===0)){	
	
infoRamkiDraw();


zifryBoxScoreOtris();

}
gameInfo();
//};


};

darck();

soundControl();

	
animation();


if(gamePause===0){

takt++;

if(takt===6){takt=0;okLoader();};
};


//console.log(almazy);
chudoAnimation();

	
};


if(startGame===0){
if(progPusk===1){
firma();
};

if(zast===0){
menuControl();
};

};

continueControl();
zastavka();

oneUpControl();




//////////////////////////////////////////////////////////////

 if(edition===2){

scene=null;

scene = new THREE.Scene();
 scene.add(light);
  scene.add(light2);
 //manipul();
//timer++;

//onDraw();



 
 

    //for(let i=0;i<hzBox.length;i++){
		
		//hzBox[i].anim();
		//hzBox[i].draw();
	//};
	
let cx=0;
let cy=0;	
	
	
if(hzBox.length){	
for(var tol=0;tol<onEkran.length;tol++){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	
	//onEkran[tol][mol].checkCell(tol,mol);
	
	hzBox[tol][mol].x=onEkran[tol][mol].x/60;
	hzBox[tol][mol].y=-onEkran[tol][mol].y/60;
	hzBox[tol][mol].type=onEkran[tol][mol].type;
	
	//hzBox[tol][mol].draw(tol,mol);
	
	

	
	
	
};	
	
};
};

if(onEkran.length&&onEkran[0].length){camflag++;};


for(var tol=0;tol<onEkran.length;tol++){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	


	if(hzBox.length&&hzBox[0].length&&hzBox[tol][mol].type===8){
		
heroX=hzBox[tol][mol].x;		
heroY=hzBox[tol][mol].y;		
		
if(hzBox[tol][mol-1]&&hzBox[tol][mol].x-0.5<hzBox[tol][mol-1].x+0.5&&hzBox[tol][mol-1].type===2){
	hzBox[tol][mol-1].type=0;
}
else if(hzBox[tol][mol+1]&&hzBox[tol][mol].x+0.5>hzBox[tol][mol+1].x-0.5&&hzBox[tol][mol+1].type===2){
	hzBox[tol][mol+1].type=0;
}
else if(hzBox[tol+1][mol]&&hzBox[tol][mol].y-0.5<hzBox[tol+1][mol].y+0.5&&hzBox[tol+1][mol].type===2){
	hzBox[tol+1][mol].type=0;
}
else if(hzBox[tol-1][mol]&&hzBox[tol][mol].y+0.5>hzBox[tol-1][mol].y-0.5&&hzBox[tol-1][mol].type===2){
	hzBox[tol-1][mol].type=0;
}



	
		
		//onEkran[tol][mol].draw(tol,mol);
		
if(camflag===2){		
camera.position.x=hzBox[tol][mol].x;
camera.position.y=hzBox[tol][mol].y;	
//camflag=1;



};
//camera.rotation.y=-1;
//camera.position.z=1;	

camControl(tol,mol);


camera.lookAt(hzBox[tol][mol].x,hzBox[tol][mol].y , 0);





	
	
camX=camera.position.x;
camY=camera.position.y;

		
	};


	
};	
	
};



let how=0;


if(hzBox.length){	
for(var tol=0;tol<onEkran.length;tol++){
	
for(var mol=0;mol<onEkran[tol].length;mol++){
	
	
	//onEkran[tol][mol].checkCell(tol,mol);
	
	//hzBox[tol][mol].x=onEkran[tol][mol].x/60;
	//hzBox[tol][mol].y=-onEkran[tol][mol].y/60;
	//hzBox[tol][mol].type=onEkran[tol][mol].type;

//////////////////////1111

if(hzBox[tol][mol].x<heroX+6+camCoofX+(camCoofX2/2)&&hzBox[tol][mol].x>heroX-6+camCoofX2+(camCoofX/2)&&
hzBox[tol][mol].y>heroY-5+camCoofY2&&hzBox[tol][mol].y<heroY+5+camCoofY){

	
	hzBox[tol][mol].draw(tol,mol);
	
if(hzBox[tol][mol].type!==2){	
	hzBoxFones[tol][mol].draw(tol,mol);
};	
	//how++;
	
}
else{

hzBox[tol][mol].inside=0;
hzBoxFones[tol][mol].inside=0;
};	

	
	
	
};	
	
};
};

//console.log(how);


//console.log(load+" "+saveLevel);



//renderer.dispose();

    renderer.render(scene, camera);

if(progPusk===0){
start3d();
};

 };


},40);






var masControl=function(){
	
	
	//console.log(masPlus);
	
if(masPlus===1&&mashtab<1){mashtab+=0.01;}
else{masPlus=0;};
 if(masMinus===1&&mashtab>0.5){mashtab-=0.01;obzor=1;}
 else{masMinus=0;};


if(mashtab===1){obzor=0;};


	
};



var sdvigControl=function(){

if(onEkran.length>30){
	
	if(onEkran[0][0].y>=0&&mashtab<=0.5&&globUp===0){globalVSp=-20;}
else if(onEkran[0][0].y<0&&mashtab<=0.5&&globDown===0&&globUp===0){globalVSp=0;}
 if((onEkran[onEkran.length-1][0].y+cell)*mashtab<height&&mashtab<=0.5&&globDown===0){
	globalVSp=20;
	
	}
	
	
	if(onEkran[0][0].x>=0&&mashtab<=0.5&&globLeft===0){globalGSp=-20;}
else if(onEkran[0][0].x<0&&mashtab<=0.5&&globLeft===0&&globRight===0){globalGSp=0;}	

 if((onEkran[0][onEkran[0].length-1].x+cell)*mashtab<width&&mashtab<=0.5&&globRight===0){
	globalGSp=20;
	//console.log("ok");
	}
//console.log(onEkran[0][onEkran[0].length-1].x);	
}

/*

else{
	
if(onEkran[0][0].y<0&&mashtab<=0.5&&globUp===0){globalVSp=20;}	
 else if((onEkran[onEkran.length-1][0].y+cell)*mashtab>height&&mashtab<=0.5&&globDown===0){
	globalVSp=-20;
	
	}
else if(onEkran[0][0].y>0&&globDown===0&&globUp===0&&mashtab<=0.5){globalVSp=0;};	
	



if(onEkran[0][0].x<0&&mashtab<=0.5&&globLeft===0){globalGSp=20;}	
 else if((onEkran[0][onEkran[0].length-1].x+cell)*mashtab>width&&mashtab<=0.5&&globRight===0){
	globalGSp=-20;
	
	}
else if(onEkran[0][onEkran[0].length-1].x+cell>0&&globLeft===0&&globRight===0&&mashtab<=0.5){globalGSp=0;};	
	






	
};	


*/


	


//onsole.log(globalGSp);
};

var muz=0;

var soundControl=function(){
	

	
	if(startGame===1){
	
	
	
	if(dig===1){
		dig=0;
		//console.log("ok");
		sound.currentTime=12;
		sound.play();
	};
	
if(sound.currentTime>=12.2){sound.pause();};	

	if(alm===1){
		alm=0;
		//console.log("ok");
		soundalm.currentTime=6.9;
		soundalm.play();
	};
if(soundalm.currentTime>=7.3){soundalm.pause();};	
	

if(exitsound.currentTime>0.85){exitsound.pause();};


if(level1.currentTime>=180){level1.pause();muz=0;};
if(level2.currentTime>=180){level2.pause();muz=0;};
if(level3.currentTime>=180){level3.pause();muz=0;};
if(level4.currentTime>=180){level4.pause();muz=0;};
if(level5.currentTime>=180){level5.pause();muz=0;};
if(level6.currentTime>=180){level6.pause();muz=0;};

if(fly.currentTime>0.38){fly.currentTime=0;fly.pause();};
if(remoove.currentTime>0.7){remoove.currentTime=0.5;remoove.pause();};
if(buhzem.currentTime>0.7){buhzem.currentTime=0.5;buhzem.pause();};
if(buhalm.currentTime>1){buhalm.currentTime=0.2;buhalm.pause();};
if(buhtrupalm.currentTime>2){buhtrupalm.currentTime=0;buhtrupalm.pause();};


if(zast===0&&lives>0){	
	
	if(level>=1&&level<5&&startGame===1&&muz===0){
level1.pause();
level1.volume=1;		
level1.currentTime=0;		
level1.play();

muz=1;		
		
	}
else 	if(level>=5&&level<9&&startGame===1&&muz===0){
level2.pause();
level2.volume=1;		
level2.currentTime=0;		
level2.play();

muz=1;		
		
	}
else 	if(level>=9&&level<13&&startGame===1&&muz===0){
level3.pause();
level3.volume=1;		
level3.currentTime=0;		
level3.play();

muz=1;		
		
	}
else 	if(level>=13&&level<17&&startGame===1&&muz===0){
level4.pause();
level4.volume=1;		
level4.currentTime=0;		
level4.play();

muz=1;		
		
	}	
else 	if(level>=17&&level<21&&startGame===1&&muz===0){
level5.pause();
level5.volume=1;		
level5.currentTime=0;		
level5.play();

muz=1;		
		
	}
else 	if(level>=21&&level<25&&startGame===1&&muz===0){
level6.pause();
level6.volume=1;		
level6.currentTime=0;		
level6.play();

muz=1;		
		
	}	


};
//console.log(level2.currentTime);	
	
	
if(levelVinTimer===1&&herDead===0){
	
	win.currentTime=0;
	win.play();
	
};

	
	
	}
else{
	
level1.pause();	
level2.pause();	
level3.pause();	
level4.pause();	
level5.pause();	
level6.pause();	
sound.pause();
	soundalm.pause();
	exitsound.pause();
	fly.pause();
	remoove.pause();
	buhzem.pause();
	buhalm.pause();
	buhtrupalm.pause();
	
	
};	
	
};



//$("#start").click(isMenuObnul);
//$("#start").click(globalStart);


let camCoofX=0;
let camCoofY=0;

let camCoofX2=0;
let camCoofY2=0;




let camControl=function(tol,mol){
	
if(camX<hzBox[tol][mol].x-2){
		
camera.position.x+=(hzBox[tol][mol].x-2-camera.position.x);
	
}
else if(camX>hzBox[tol][mol].x+2){
		
camera.position.x+=(hzBox[tol][mol].x+2-camera.position.x);
	
};


if(camY<hzBox[tol][mol].y-2){
		
camera.position.y+=(hzBox[tol][mol].y-2-camera.position.y);
//console.log("ok");	
}
else if(camY>hzBox[tol][mol].y+2){
		
camera.position.y+=(hzBox[tol][mol].y+2-camera.position.y);
	
};

/////////////////////////////////

let x=hzBox[tol][mol].x-camX;
let y=hzBox[tol][mol].y-camY;

if(x>0&&x<1.5){
	camCoofX=2;
	}
	else if(x>=1.5&&x<2.5){
	camCoofX=4;
	}
	else{camCoofX=0;};
		
		
	if(x<0&&x>-1.5){
	camCoofX2=-2;
	}
		else if(x<=-1.5&&x>-2.5){
	camCoofX2=-4;
	}
		else{camCoofX2=0;};

//console.log(camCoofX+" "+camCoofX2+" "+x);




if(y>0&&y<1.5){
	camCoofY=1;
	}
	else if(y>=1.5&&y<2.5){
	camCoofY=2;
	}
	else{camCoofY=0;};
		
		
	if(y<0&&y>-1.5){
	camCoofY2=-1;
	}
		else if(y<=-1.5&&y>-2.5){
	camCoofY2=-2;
	}
		else{camCoofY2=0;};
//console.log(camCoofY+" "+camCoofY2+" "+y);
	
};


const start3d=function(){
	
	
	ctx.textBaseline="top";
ctx.textAlign="left";
ctx.font="60px Areal";	
ctx.fillStyle="green";
ctx.strokeStyle="white";	
ctx.fillText("click to start game",320,300);
ctx.strokeText("click to start game",320,300);




	
	
};



let op=function(){
	if(progPusk===0){progPusk=1;};
};

//document.addEventListener("mouseup",
  //              ()=>console.log("mouseup"));
document.addEventListener("click",
                ()=>op());
//document.addEventListener("mousedown",
 //               ()=>console.log("mousedown"));



//document.addEventListener("mousemove",
 // (event)=>console.log("mousemove: "+event.clientX+", "+event.clientY));




</script>




  </body>
</html>