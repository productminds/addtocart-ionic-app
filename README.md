# addtocart-ionic-app
Cross platform mobile app developed with Ionic, Cordova and Angular

Esta implementacion de Braze utiliza la version braze-cordova-sdk@2.23 (legacy). Esta es la version que matchea con las versiones de cordova:

- "cordova": "^9.0.0"
- "cordova-android": "^8.1.0"
- "cordova-ios": "^5.1.1",

Para instalar la SDK se debe correr el comando:

````
ionic cordova plugin add "https://github.com/braze-inc/braze-cordova-sdk/tree/2.23.0"
````

Corremos el npm install:

````
npm install
````

Luego, agregamos el archivo google-services.json en la ruta /android/app.

En esta demo pueden usar el que les proveemos en la ruta del proyecto pero la idea es que creen su propia cuenta y generen su propio archivo.

Correr la aplicacion con:

````
ionic cordova run android
ionic cordova run ios
````

Asegurense de tener toda la configuracion para correr estas dos tecnologías en sus versiones legacy.
