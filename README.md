# NativeScript Vue.js Template

This project is a test of the use of socket. io with for NativeScript + Vue.js projects, using [nativescript-vue](https://github.com/rigor789/nativescript-vue).

## Usage

1. Install Node Js (see https://nodejs.org/en/)
2. Install NativeScript tools (see http://docs.nativescript.org/start/quick-setup)
3. Clone this repo
4. Enter the directory 
5. Change the file app/app.js in the line `const socketIO = new SocketIO('http://192.168.1.40:3000/', {});`. Change the ip to the local ip on your computer
6. Run on your computer terminal:
   1. `npm i`
   2. `tns run android` or `tns run ios`. Or follow the normal instructions to run a nativescript app (see https://docs.nativescript.org/tutorial/chapter-1#12-running-apps )

## Server

This application is only half of the project that communicates with a server whose code is also available here: https://github.com/Gonzalo2310/PanelDraw-Server

## Contributions:

Original code of the app https://play.nativescript.org/?template=play-vue&id=nbDfjl