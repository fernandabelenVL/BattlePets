
# Battlepet
<img src="./src/assets/img/promo-banner.png " width="100%"/> 

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos del proyecto](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Usuario](#5-usuario)
* [6. Benchmark](#6-benchmark)
* [7. Historias de Usuario](#7-historias-de-usuario)
* [8. Diagrama de Flujo](#8-diagrama-de-flujo)
* [9. Prototipado](#9-prototipado)
* [10. Look & Feel](#10-look-&-feel)


## 1. Preámbulo

Los videojuegos son una verdadera prueba cuando se trata de tecnología. Uno de los factores de éxito para el equipo de android, por ejemplo, fue que pudiesen tener un juego corriendo en los primeros teléfonos. La idea era que si un juego podía ejecutarse en la plataforma, un programa más simple con pantallas mucho más fáciles de trabajar que solo tuviese botones y texto debería funcionar aun mejor.

Entonces la idea de este proyecto es llevar los frameworks de aplicaciones web al límite de lo que pueden ofrecer, tratar de explorar sus funcionalidades más avanzadas y lograr un producto que destaque en sí por sus funcionalidades y estética.

[Concrete Latinoamérica](https://www.accenture.com/cl-es/concrete-disrupcion-digital) (parte de Accenture), nos plantea este desafío como oportunidad de desarrollo técnica y profesional, adquiriendo nuevas prácticas de metodologías ágiles y conocimiento extendido en React JS.

<br>

## 2. Resumen del proyecto


Battleship es un juego clásico, con múltiples versiones en juegos de mesa y en linea (si no lo conoces, puedes verlo en este link:
[battle-ship](https://es.wikipedia.org/wiki/Batalla_naval_(juego))).

El juego es para dos personas. Consiste en que en un tablero cada jugador coloca un conjunto de barcos, ocultando su posición del contrincante. Luego, por turnos, van anunciando una posición del tablero y el enemigo informa si le han
dado a uno de sus barcos o no. El juego termina cuando un jugador ha conseguido hundir todos los barcos del otro.

Este proyecto mantiene la misma estructura de juego pero con una temática diferente, con el fin de actualizarlo y hacerlo más atractivo para las nuevas generaciones.

Continúa siendo un juego para dos jugadores que se enfrentan entre sí para detectar los elementos (barcos originalmente) de su oponente, mediante sistema de turnos hasta completar el objetivo de lograr derribar todos los elementos del jugador oponente, desarrollado para plataformas móviles tales como teléfonos celulares y/o tablets.

<br>

## 3. Objetivos del proyecto

1. El objetivo principal es lograr generar un nuevo juego basándose en la mecánica y estructura de juego original de battleship para captar un nuevo público objetivo.
Determinar el público objetivo, crear el perfil de usuario que jugará esta nueva versión de Battleship.

2. Definir la nueva temática de juego, la cual dará guía a los elementos gráficos, interacciones, animaciones y estilo de los elementos dentro del juego.

3. Diseñar una interfaz llamativa utilizando tecnologías de CSS y animaciones para lograr el desarrollo de un juego llamativo, interactivo, que capte la atención de las personas.

4. Integrar tecnologías de _React JS_, _React Native_ y _Redux_ para el desarrollo del juego, a modo que sea diseñado para plataformas móviles (teléfonos celulares y tablets).

5. Implementar Firebase como sistema de base de datos (backend), para modalidad de juego online y enviar invitaciones a amigos.

6. Realizar testing de componentes de desarrollo a través de _Jest_.

<br>

## 4. Consideraciones generales

Este proyecto se ha desarrollado por:
[Daniela Quintana Martinez ](https://github.com/daniela-quintana/) y [Fernanda Vega Leiva](https://github.com/fernandabelenVL), ambas estudiantes de [Laboratoria Chile](https://www.laboratoria.la/) (mención Front-End), junto con el apoyo y mentoría de [Maurício Martinez Marques](https://www.linkedin.com/in/maur%C3%ADcio-martinez-marques/), iOS Tech Lead de Concrete Latinoamérica.

Para el proceso de planificación se han utilizado herramientas tales como Trello y Github Projects, a través de metodologías ágiles tales como SCRUM, manteniendo siembre la comunicación activa dentro del equipo de trabajo durante todo el proceso de planteamiento, desarrollo y ejecución del proyecto por medio de sprints semanales y daily.

El desarrollo se realiza a través de React JS, enfocado a dispositivos móviles y tablets utilizando React Native.

## 5. Definición de Usuario

Nuestro usuario Objetivo son niños y jóvenes de entre 6 y 16 años, los cuales tienen interés en los videojuegos dentro de dispositivos móviles o tablets.

Ésta segmento corresponde a una generación con alta cultura tecnológica en donde la inmediatez, la interacción y la fluidez de las aplicaciones a demás de su diseño cumplen un rol fundamental dentro del éxito de las mismas.

Para comunicarse, socializar y entretenerse hacen uno de su teléfono celular en la mayoría de sus tareas diarias, siendo un elemento esencial dentro de su rutina. Desde muy temprana edad utilizan teléfonos inteligentes ya sea por motivos educacionales o de recreación, y a medida avanza la edad aumentan su usos como plataforma principal de comunicación e interacción.

De acuerdo a un estudio realizado por “Google Consumer Barometer” publicado en el año 2018, el 82% de la población de chile prefiere su smartphone para navegar en internet, ver videos y jugar, siendo uno de los países con más alta de teléfonos células por habitante (aproximadamente 2,2 teléfonos por persona), esto denota la exponencial alza del uso de celulares en los últimos 5 año, y en consecuencia de esto último , el uso del computador de escritorio se ha visto desplazado notoriamente en los últimos años.

<img 
src="https://firebasestorage.googleapis.com/v0/b/scl010-battleship-f2180.appspot.com/o/Images%2Fcelulares-chile.png?alt=media&token=89343e10-e26f-4a64-b4e3-03fb54ce1b0a" 
width="100%"/>

Ver Página de estudio: [Google Consumer Barometer](https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/m%C3%B3vil/consumer-barometer-study-2017-year-mobile-majority/)

<br>

<br>

## 6. Benchmark

<img 
src="https://firebasestorage.googleapis.com/v0/b/scl010-battleship-f2180.appspot.com/o/Images%2F01-minijuegos.png?alt=media&token=42098470-03cb-4f74-9f9f-e6337edb55ce" 
width="100%"/>

Ver Juego: [Battleship - minijuegos.com](https://www.minijuegos.com/juego/mp-battleship)

Ver Juego: [Battleships Armada - .paisdelosjuegos.es](https://www.paisdelosjuegos.es/juego/battleships-armada.html)

Ver Juego: [Batalla naval - battleship-game.org](https://battleship-game.org/es/)

Ver Juego: Battle Fleet [iOs](https://apps.apple.com/us/app/fleet-battle-sea-battle-game/id904275738) - [Android](https://play.google.com/store/apps/details?id=de.smuttlewerk.fleetbattle&hl=es)

Ver Juego: Conceptis Seabattle [iOs](https://apps.apple.com/us/app/conceptis-seabattle/id1226168254) - [Android](https://play.google.com/store/apps/details?id=com.conceptispuzzles.battleships&hl=es_CL)


### Conclusiones:

* A partir de las observaciones extraídas del análisis de diferentes plataformas de juego Battleship, tanto en versiones de computador como mobile, podemos extraer las siguientes conclusiones:
A partir del análisis de las juegos anteriormente mencionados podemos determinar que el tema de la estética, arquitectura de la información y diseño de la interface de la aplicación son elementos primordiales en el momento de crear las funcionalidades y vistas del juego. 
Es necesario determinar el orden de cada elemento y su jerarquía cuidadosamente para que no sea una vista engorrosa en la pantalla y todas las funciones queden explícitamente indicadas.
<br>
* A partir de lo anterior, las aplicaciones dentro de celular (o tablet) cumplen mayormente el con el concepto de navegación, fluidez interacciones y animaciones de manera fluida, dejando en claro la finalidad de juego por turnos.
Según esto último concluimos que la para la construcción de nuestro juego, la mejor solución es diseñarlo en funciones de pantallas celulares, ya que nuestro público objetivo se centra en una audiencia joven que en su mayoría no tiene acceso a computadores de escritorio pero si cuentan con un teléfono celular inteligente con el que interactúan diariamente en su cotidiano.
<br>
* Es aquí donde vemos la oportunidad de desplazar el modo clásico de Battleship, ya sea en modo tablero o en modo escritorio, hacia una plataforma móvil desarrollada en React Native, que sea de fácil acceso para nuestro público objetivo, permita la inmediatez y altos niveles de interacción.



## 7. Historias de Usuario

1. Como usuario jugador de Battlepet me gusta poder ingresar mi nombre.

_Criterios de consideración:_
La pantalla de bienvenida debe contener un input en donde el usuario ingrese su nombre. Dicho valor debe guardarse por medio de props para utilizarse en las siguientes pantallas interiores

2. Como usuario jugador de Battlepet me gustaría elegir un identificador (color, avatar, etc.)

_Criterios de consideración:_
En la siguiente pantalla después de ingresar su nombre, el usuario puede elegir una foto o avatar dentro de su galería de teléfono para continuar con la navegación del juego.


3. Como usuario jugador de Battlepet me gustaría poder invitar a un amigo a jugar conmigo.

_Criterios de consideración:_
Al seleccionar el modo de juego con un amigo se desplegará la opción de "compartir a través de código QR" o "compartir invitación" que se dará a través de un link que conectará con la sesión de juego en cuestión (sala de juego).


4. Como usuario jugador de Battlepet me gustaría poder tener la opción de invitar a un amigo o jugar contra la computadora.

_Criterios de consideración:_
Después de la pantalla de inicio, el usuario tendrá varias opciones de juego que serán:
- Jugar contra la computadora.
- Invitar a un amigo a jugar
- Jugar Online

5. Como usuario jugador de Battlepet me gustaría poder elegir las casillas donde que quiero que vayan mis “barcos”.

_Criterios de consideración:_
Después de seleccionar el modo de juego, se procederá a seleccionar las piezas de juego dentro de un tablero 10x10, el cual podrá elegir e intercambiar el sentido de piezas entre horizontales o verticales: 1 de 5 casillas, 1 de 4 casillas, 2 de 3 casillas y 1 de 2 casillas.

6. Como usuario jugador de Battlepet me gustaría poder clickear las cuadrados del tablero para jugar.

_Criterios de consideración:_
Para seleccionar las posiciones de mis fichas dentro del tablero puedo hacer click en la pantalla para seleccionar la posición directamente (método onPress)

7. Como usuario jugador de Battlepet me gustaría poder visualizar los "barcos" que me quedan por derribar de mi oponente.

_Criterios de consideración:_
Se considera una visualización por turnos, en primer lugar veo el tablero de mi enemigo para atacar, posteriormente cuando sea su turno vero mi tablero y la posición en que mi contrincante ha atacado (cambio de estados).

8. Como usuario jugador de Battlepet me gustaría poder ver en tiempo real si la casilla seleccionada derribó o no el "barco" de mi oponente.

_Criterios de consideración:_
Al ver mi tablero, conectado a través de Firebase, se visualiza en tiempo real el movimiento o acción de mi oponente en mi tablero. Se visualiza un cambio de estado cuando mi contrincante presiona sobre una casillas de mi tablero y viceversa.

9. Como usuario jugador de Battlepet me gustaría poder elegir el nivel dificultad de juego que quiero (número de casillas 5x5, 8x8, 10x10, 12x12).

_Criterios de consideración:_
Iteración: antes de seleccionar un modo de juego, se selecciona el nivel de dificultad con el que se quiera jugar a través de un selector que contiene la condición de construcción del componente "Board".

10. Como usuario jugador de Battlepet me gustaría poder tener una pantalla de resultados al terminar el juego (ganador-perdedor).

_Criterios de consideración:_
Al completar todas las casillas, ya sea en mi juego o en el del oponente se despliega la notificación de resultados, en donde se muestra quién es el ganador y quién es el perdedor.

11. Como usuario jugador de Battlepet me gustaría poder volver al inicio para comenzar un nuevo juego.

_Criterios de consideración:_
Posterior al término del juego se despliega la opción (botón) de "volver a jugar" con el mismo oponente independiente del tipo de juego o volver al inicio, que me llevará nuevamente a la selección de juego.

12. Como usuario jugador de Battlepet me gustaría poder abandonar el juego en caso de que lo necesite.

_Criterios de consideración:_
Dentro de las opciones principales, o barra de navegación debe encontrarse un botón que permita volver al inicio y/o abandonar la partida en medio de un juego en proceso. 
Si el usuario abandona un juego en línea, al oponente se le notifica ésta acción a través de un mensaje pop-up "tu oponente ha abandonado la partida".


<br>

## 8. Diagrama de Flujo

<img src="https://firebasestorage.googleapis.com/v0/b/scl010-battleship-f2180.appspot.com/o/Images%2Fdiagrama-de-flujo.png?alt=media&token=fe3a3893-ef36-404c-9d0e-bc5fdf99a8a4" width="100%">

<br/>
<br/>

## 9. Prototipado

<img src="./src/assets/img/wireframe.png " width="100%"/> 


<br>

## 10. Look & Feel


<img src="./src/assets/img/look-and-feel.png " width="100%"/> 

<br>


## Links de Interés

* [Tablero Trello](https://trello.com/b/myWBjzhV/battleship)
* [Concrete Latinoamérica junto a Laboratoria](https://medium.com/concretelatinoam%C3%A9rica/desaf%C3%ADo-concrete-laboratoria-19e0b1b66b45)
* [Google Consumer Barometer](https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/m%C3%B3vil/consumer-barometer-study-2017-year-mobile-majority/)

## Desarrollado por:
* Daniela Quintana Martinez: [Github](https://github.com/daniela-quintana) - [LinkedIn](https://www.linkedin.com/in/daniela-quintana/)
* Fernanda Vega Leiva: [Github](https://github.com/fernandabelenVL) - [LinkedIn](https://www.linkedin.com/in/fernanda-vega/)

Junto con el apoyo y mentoría de:
* Maurício Martinez Marques - [iOS Tech Lead en Concrete Latinoamerica](https://www.linkedin.com/in/maur%C3%ADcio-martinez-marques/)
* Concrete Latinoamérica - [Visitar sitio web](https://www.accenture.com/cl-es/concrete-disrupcion-digital)
* Laboratoria Chile - [Visitar sitio web](https://www.laboratoria.la/)


