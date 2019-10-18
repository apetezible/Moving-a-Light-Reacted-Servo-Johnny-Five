var JohnnyFive = require ("johnny-five");
var Circuito = new JohnnyFive.Board({port : "COM10"});
var Led, Servo, Celda;
var Turno = false;
var Prendido = false;

Circuito.on("ready", prender);

function prender (){
var Configuracion = {pin:"A0", freq: 50};
Celda = new JohnnyFive.Sensor(Configuracion);

Led = new JohnnyFive.Led(13);
Led.on();

Servo = new JohnnyFive.Servo(2);
Servo.to (90);

ondear();
}

function ondear (){
  var LUZ = Celda.value;
  console.log("Electricidad = "+LUZ);

  if (LUZ<700){
    if(Turno){
      Turno = false;
      Servo.to(135);
    }else{
      Turno = true;
      Servo.to(45);
    }
  }else{
    Servo.to(150);
  }
  setTimeout (ondear, 700);
}
