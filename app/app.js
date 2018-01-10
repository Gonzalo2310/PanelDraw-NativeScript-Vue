const Vue = require('nativescript-vue/dist/index')
const SocketIO = require('nativescript-socketio').SocketIO;
const socketIO = new SocketIO('http://192.168.1.40:3000/', {});

new Vue({
  data: {
    points: []
  },
  template: `
    <Page>
      <AbsoluteLayout>
        <StackLayout @touch="onTouch" top="0" left="0" width="100%" height="100%">
          
        </StackLayout>

        <StackLayout v-for="(point, i) in points" :top="point.y" :left="point.x" :width="i+5" :height="i+5" style="border-width: 1; border-color: blue; background-color: cyan; border-radius: 50%;" >
        </StackLayout>
      </AbsoluteLayout>
    </Page>
  `,
  mounted: function() {
    socketIO.connect()
  },
  methods: {
    onTouch(e) {
      this.points.push({
        x: e.getX(),
        y: e.getY()
      })
      if (this.points.length > 20) {
        this.points.shift();
      }
      socketIO.emit('messages', JSON.stringify(this.points))
    },
  }
}).$start();