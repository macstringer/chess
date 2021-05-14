<template>
  <div id="app">
    <div v-if="!isMobile()" class="notMobile">
      <div class ="chessComponent">
        <div class="container">
          <div class="mainContent">
            <div class="nav"> <navbar @clicked="selectPage($event)" ></navbar> <HR/></div>
              <description v-if="description" ></description>
              <ChessBoard v-if="thegame" ></ChessBoard>
              <resources v-if="resources" ></resources>
              <demo v-if="demo" ></demo>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <mobile>
      </mobile>
    </div>
  </div>    
</template>

<script>


import ChessBoard from './components/ChessBoard.vue'
import description from './components/Description.vue'
import resources from './components/Resources.vue'
import demo from './components/Demo.vue'
import navbar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    ChessBoard,
    navbar,
    resources,
    description,
    demo
  },
  data () {
    return {
      description: false,
      thegame: true,
      resources: false,
      demo: false
    }
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    selectPage(value) {
      if (value == "intro"){
        this.description = true;
        this.thegame = false;
        this.resources = false;
        this.demo = false;
      }
      if (value == "thegame"){
        this.description = false;
        this.thegame = true;
        this.resources = false;
        this.demo = false;
      }
      if (value == "resources"){
        this.description = false;
        this.thegame = false;
        this.resources = true;
        this.demo = false;
      }
      if (value == "demo"){
        this.description = false;
        this.thegame = false;
        this.resources = false;
        this.demo = true;
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html, body {
    margin: 0;
    padding: 0;
    background-color:#93897b;
    height: 100%;
}
.container {
    justify-content: center;
    vertical-align: middle;
    display: flex;
    height: 100%;
}
.mainContent {
    height: 80%;
    width: 90%;

    background-color: #4a6566;
    border-radius: 10px;
    
    margin-top: 2%;
    padding-top: 3%;
    padding-bottom: 2%;
}
.nav {
    width: 100%;
    height: 5vh;
    vertical-align: middle;
    padding-bottom: 2%;
    color: #faebd7;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
}
.notMobile{
  height: 100%;
}
</style>
