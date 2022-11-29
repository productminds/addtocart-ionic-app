# addtocart-ionic-app
Cross platform mobile app developed with Ionic, Cordova and Angular

```
npm install
ionic cordova prepare android
ionic cordova run android -l

```

Hay que tener el emulador de Android corriendo asi Cordova lo detecta.

Si cuando se abre la aplicacion salta el error de E_CONNREFUSED, correr:

```
ionic cordova plugin rm cordova-plugin-ionic-webview
ionic cordova plugin add cordova-plugin-ionic-webview@1.2.1
ionic cordova platforms remove android
ionic cordova build android

```

Volver a ejecutar:

```
ionic cordova run android -l
```
