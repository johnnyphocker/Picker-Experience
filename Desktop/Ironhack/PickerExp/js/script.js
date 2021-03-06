// VARIABLES

var picker;
var platforms;

// Constructores

function startGame() {
    myGameArea.start();
    myGameArea.grid();
    drawPlatforms();
    drawProducts();

    picker = new Player(75, 75, "blue", 560, 260);
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    cart : [],
    grid : function(){
        this.context = this.canvas.getContext('2d');
        
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = 1; 

        for(var x=0; x<1201; x=x+150){

            this.context.moveTo(x,0);
            this.context.lineTo(x,600);
            this.context.stroke();

        }
        for(var y=0; y<601; y=y+75){
            
            this.context.moveTo(0,y);
            this.context.lineTo(1200,y);
            this.context.stroke();
        }
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
var productos = [
    {nombre: 'queso', foto:'./img/chees.png' },
    {nombre: 'carne', foto:'./img/ham.png' },
    {nombre: 'leche', foto:'./img/milk.png' },
    {nombre: 'fruta', foto:'./img/apple.png' },
    {nombre: 'mermelada', foto:'./img/jam.png' },
    {nombre: 'pan', foto:'./img/bread.png' },
];
var platforms = []; //como encontrar los productos [1].box1.producto
//Shelf 01
platforms.push({
    x:0,
    y:0,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1: {
        x:0,
        y:0,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2: {
        x:0,
        y:75,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3: {
        x:0,
        y:150,
        productos: productos[Math.floor(Math.random()*productos.length)]},
});
//Shelf 02
platforms.push({
    x:0,
    y:375,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1: {
        x:0,
        y:375,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2: {
        x:0,
        y:450,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3: {
        x:0,
        y:525,
        productos: productos[Math.floor(Math.random()*productos.length)]},
    
});
//Shelf 03
platforms.push({
    x:450,
    y:0,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:450,
        y:0,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:450,
        y:75,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:450,
        y:150,
        productos: productos[Math.floor(Math.random()*productos.length)]},

});
//Shelf 04
platforms.push({
    x:450,
    y:375,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:450,
        y:375,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:450,
        y:450,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:450,
        y:525,
        productos: productos[Math.floor(Math.random()*productos.length)]},
  
});
//Shelf 05
platforms.push({
    x:600,
    y:0,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:600,
        y:0,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:600,
        y:75,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:600,
        y:150,
        productos: productos[Math.floor(Math.random()*productos.length)]}
    
});
//Shelf 06
platforms.push({
    x:600,
    y:375,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:600,
        y:375,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:600,
        y:450,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:600,
        y:525,
        productos: productos[Math.floor(Math.random()*productos.length)]},
});
//Shelf 07
platforms.push({
    x:1050,
    y:0,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:1050,
        y:0,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:1050,
        y:75,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:1050,
        y:150,
        productos: productos[Math.floor(Math.random()*productos.length)]}
});
//Shelf 08
platforms.push({
    x:1050,
    y:375,
    x2: this.x + this.width,
    y2: this.y + this.width,
    width:150,
    height:225,
        box1:{
        x:1050,
        y:375,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box2:{
        x:1050,
        y:450,
        productos: productos[Math.floor(Math.random()*productos.length)]},
        box3:{
        x:1050,
        y:525,
        productos: productos[Math.floor(Math.random()*productos.length)]}
});
//Function Platforms


function drawPlatforms(){

    var ctx = myGameArea.canvas.getContext('2d')

    ctx.fillStyle = "brown";
    platforms.forEach( platform => {
        
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        ctx.stroke();
    });
    return platforms;
}

 function drawProducts(){
     platforms.forEach( producto => {
         var img1 = new Image();
         var img2 = new Image();
         var img3 = new Image();
         img1.src = producto.box1.productos['foto'];
         img1.onload = function(){
             ctx.drawImage(img1,producto.box1.x, producto.box1.y, 60, 60);
         };
         img2.src = producto.box2.productos['foto'];
         img2.onload = function(){
             ctx.drawImage(img2,producto.box2.x, producto.box2.y, 60, 60);
         };
         img3.src = producto.box3.productos['foto'];
         img3.onload = function(){
             ctx.drawImage(img3,producto.box3.x, producto.box3.y, 60, 60);
         };
     });    
     return platforms;
 }

/*function drawProducts() {
    var img1 = new Image();
    img1.src = platforms[0].box1.productos['foto'];
    img1.addEventListener('load', function() {
        ctx.drawImage(img1,platforms[0].box1.x, platforms[0].box1.y, 60, 60);
    })
}*/


//Constructores
function Player(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x; 
    this.y = y; 
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //stopMove();
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

    this.stopMove = function(){
      this.SpeedX = 0;
      this.SpeedY = 0;
    }


    this.collition = (p) => {
        //for(var i=0; i<= p.lenght; i++) {
            if(this.x <= p.x2 && this.y <= p.y2) {
                alert('chocaste')};
        }
    }

    // console.log(this.x) 

//  console.log(platforms[3].box1);

//Listeners

function updateGameArea() {
    myGameArea.clear();
    myGameArea.grid();
    
    picker.speedX = 0;
    picker.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {picker.speedX = -10; }
    if (myGameArea.keys && myGameArea.keys[39]) {picker.speedX = 10; }
    if (myGameArea.keys && myGameArea.keys[38]) {picker.speedY = -8; }
    if (myGameArea.keys && myGameArea.keys[40]) {picker.speedY = 8; }
    //if (Player.collition) {Player.speedX = 0; }
    if (myGameArea.keys && picker.collition && myGameArea.keys[38]) {picker.stopMove();}

    picker.newPos();    
    picker.update();
    picker.collition(platforms[0]);
    drawPlatforms();
    drawProducts();
    //SpeedX.stopMove();
    //SpeedY.stopMove();

    //object.addEventListener('load',  productos[0].foto);
       
}

startGame();

