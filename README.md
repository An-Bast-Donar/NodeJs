# NodeJs

Bases de Node

## Que es Node.js

Node.js es un entorno de tiempo de ejecución de JavaScript que permite a los desarrolladores crear aplicaciones de servidor en JavaScript. Node.js utiliza el motor de JavaScript V8 de Google Chrome para compilar el código JavaScript en código de máquina y ejecutarlo de manera eficiente.

## Conceptos basicos

- Instalar Node.js: Para comenzar, debes instalar Node.js en tu computadora. Puedes descargar el instalador desde el sitio web oficial de Node.js.

- Módulos: Los módulos son bloques de código que encapsulan funcionalidades específicas. Node.js tiene un sistema de módulos incorporado que permite a los desarrolladores crear, importar y reutilizar código fácilmente.

- Eventos y callbacks: Node.js utiliza una arquitectura basada en eventos para manejar las solicitudes y las respuestas. Los desarrolladores pueden registrar callbacks para manejar eventos específicos, como solicitudes HTTP entrantes.

- Asincronía: Node.js está diseñado para ser altamente asincrónico, lo que significa que las operaciones de E/S no bloqueantes son la norma. Esto significa que los desarrolladores pueden escribir código altamente eficiente que puede manejar muchas solicitudes simultáneamente.

- Express.js: Express.js es un popular marco de aplicaciones web para Node.js. Es fácil de aprender y permite a los desarrolladores crear aplicaciones web de manera rápida y eficiente.

- npm: npm es el administrador de paquetes de Node.js. Es una herramienta que te permite instalar y administrar paquetes de código reutilizable para tus proyectos de Node.js.

- Ejecucion de archivos: $ node nombre_archivo.js

## Ciclo de eventos en Node

Node.js es conocido por su arquitectura basada en eventos, que es fundamental para su alta escalabilidad y capacidad para manejar muchas solicitudes simultáneamente. A continuación, se muestra un ciclo de eventos simplificado de Node.js:

1. Node.js comienza a ejecutar el código y registra cualquier evento de E/S.

2. Cuando ocurre un evento de E/S (por ejemplo, una solicitud HTTP entrante), Node.js registra el evento y lo agrega a la cola de eventos.

3. Node.js comienza a procesar la cola de eventos de manera síncrona, ejecutando cada callback asociado con cada evento.

4. Cuando se completa un callback, Node.js devuelve el control a la cola de eventos para procesar el siguiente evento.

5. El ciclo continúa hasta que no hay más eventos en la cola.

## Ciclo de vida de un proceso en Node

El ciclo de vida de un proceso en Node.js se puede dividir en varios estados:

1. Inicialización: el proceso de Node.js se inicializa con el código del programa que se va a ejecutar.

2. Ejecución: Node.js ejecuta el código del programa en un solo subproceso y comienza a procesar cualquier evento que llegue al proceso.

3. Event Loop: Node.js utiliza el bucle de eventos para procesar eventos de manera asíncrona. Cuando se recibe un evento, Node.js lo agrega a la cola de eventos y lo procesa de manera síncrona en el siguiente ciclo del bucle de eventos.

4. Finalización: el proceso de Node.js finaliza después de completar la ejecución del programa o cuando se produce un error fatal.

A continuación, se detallan los principales estados del ciclo de vida de un proceso en Node.js:

1. Inicialización: Node.js se inicia con el comando node archivo.js y carga todo el código necesario en la memoria. Node.js compila y prepara el código para su ejecución.

2. Ejecución: Node.js ejecuta el código del programa y comienza a procesar cualquier evento de manera asíncrona. Durante este estado, Node.js sigue esperando eventos entrantes y procesa cualquier evento que llegue.

3. Event Loop: Node.js utiliza el bucle de eventos para procesar eventos de manera asíncrona. El bucle de eventos es una estructura de bucle que espera eventos de E/S, temporizadores y procesamiento de señales. Cuando se recibe un evento, Node.js lo agrega a la cola de eventos y lo procesa de manera síncrona en el siguiente ciclo del bucle de eventos.

4. Finalización: el proceso de Node.js finaliza después de completar la ejecución del programa o cuando se produce un error fatal. Node.js cierra todos los recursos abiertos y finaliza la ejecución.

## Nodemon

Es una herramienta de línea de comandos de Node.js que ayuda a los desarrolladores a reiniciar automáticamente su servidor web cada vez que detecta cambios en los archivos del proyecto. En lugar de detener y reiniciar manualmente el servidor cada vez que se realiza un cambio en el código, Nodemon se encarga de esto de manera automática y rápida. Se instala usando $ npm install -g nodemon

## Blocking vs Non Blocking

En un proceso de bloqueo (Blocking), una tarea o proceso se detiene hasta que se completa la tarea anterior. Esto significa que si una tarea tarda mucho tiempo en completarse, el proceso se bloquea y no puede realizar ninguna otra tarea hasta que la tarea en cuestión haya terminado. Por otro lado, en un proceso no bloqueante (Non-Blocking), una tarea o proceso no se detiene y continúa ejecutándose mientras espera que se complete una tarea en segundo plano. Esto significa que si una tarea tarda mucho tiempo en completarse, el proceso puede seguir realizando otras tareas y no se detiene. Node.js utiliza principalmente un modelo de programación no bloqueante, lo que significa que es capaz de manejar muchas solicitudes simultáneamente sin bloquearse. En Node.js, las operaciones de entrada/salida (E/S) y otras tareas que toman mucho tiempo se realizan de manera asíncrona, lo que significa que el proceso puede continuar realizando otras tareas mientras espera que se complete la tarea en segundo plano. Esto mejora significativamente el rendimiento y la escalabilidad de las aplicaciones web y otros tipos de aplicaciones.

## npm init

npm init es un comando que se utiliza para inicializar un nuevo proyecto Node.js. Este comando crea un archivo package.json en el directorio actual y te guía a través de un proceso interactivo para configurar y personalizar las opciones del proyecto, incluyendo scripts de ejecucion y mas ajustes.

## Express

Express es un popular framework de Node.js utilizado para construir aplicaciones web y APIs. Es una capa adicional construida sobre el módulo http de Node.js, lo que facilita la creación de aplicaciones web robustas y escalables. Express proporciona una gran cantidad de características y funcionalidades útiles, como el enrutamiento, el manejo de solicitudes y respuestas HTTP, la gestión de sesiones y cookies, el manejo de errores, la autenticación, la integración con motores de plantillas y mucho más. Además, tiene una amplia gama de complementos y middleware disponibles que pueden extender aún más la funcionalidad del framework.
