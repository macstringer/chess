<template>
  <span class="all"> 
      <span class="page"  id="intro" v-on:click="introSelect()" :class="{ nactive: description }" > introduction </span> 
      
      <span class="page" id="thegame" v-on:click="theGameSelect()" :class="{ nactive: theGame }" >the game </span> 
      
      <span class="page" id="resources" v-on:click="resourcesSelect()" :class="{ nactive: resources }" > resources </span> 

      <span class="page" id="demo" v-on:click="demoSelect()" :class="{ nactive: demo }" > demo </span> 
      
    </span>
</template>

<script>


export default {
    name: "navbar",
    data () {
        return {
            description: false,
            theGame: false,
            resources: false,
            demo: false
        }   
    },
    methods: {
        introSelect () {
            this.description = true;
            this.theGame = false;
            this.resources = false;
            this.demo = false;
            this.$emit('clicked', "intro");
        },
        theGameSelect () {
            this.description = false;
            this.theGame = true;
            this.resources = false;
            this.demo = false;
            this.$emit('clicked', "thegame");
        },
        resourcesSelect () {
            this.description = false;
            this.theGame = false;
            this.resources = true;
            this.demo = false;
            this.$emit('clicked', "resources");
        },
        demoSelect () {
            this.description = false;
            this.theGame = false;
            this.resources = false;
            this.demo = true;
            this.$emit('clicked', "demo");
        },
    },
    async mounted () {
        this.theGame = true;
    },
}
</script>

<style>
.all {
    color: #faebd7;
}
.nactive {
    color: black;
    background-color: #faebd7;
    border-radius: 4px;
}
.page {
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
h1 {
    color: #faebd7
}
</style>