# Moving a Light Reacted Servo | Johnny-Five

## Abstract
Haré que un Servo rote si hay luz en el ambiente con la útil ayuda de un fotoresistor.

## Introducción
Me propongo usar la entrada del Arduino Uno, se me ocurre que puede ser la entrada de cantidad de luz en el ambiente. Con esos datos puedo entonces hacer que un objeto se mueva por medio de una salida. Todo esto gracias a la programación interna del Arduino.
Usando el Standard Firmata, la placa tiene la capacidad de recibir instrucciones desde un Servidor. Servidor que se hosteará usando Node.js con la librería Johnny-Five.

## Métodos
Hay un tipo de Resistencia llamada Fotoresistencia. Esta resiste más electricidad entre menos luz exista en el ambiente. Podre entonces mediante la medición de la resistencia eléctrica, determinar la cantidad (en un intervalo [0;1024)) de luz en el espacio incidente de la fotoresistencia. Con este input recibido por la Placa, puedo programar que un servo se mueva.
Habrá un Led de comprobación conectado al puerto 13, el Servo estará conectado al puerto 2. Y la diferencia de resistencia del Fotoresistor estará conectada al input análogo A0.

