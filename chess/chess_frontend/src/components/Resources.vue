<template>
    <div class="container">
        <div class="resourcesBody">
            <h1> Resources </h1>
            <p>
                For this project, I've used a number of javascript modules:
            </p>
            <ul>
                <li> js-chess-engine <a class="refLink" href="https://www.npmjs.com/package/js-chess-engine#computer-ai">Documentation Here</a> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "resources"
}
</script>

<style>
.container{
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-bottom: 5%;
}
.introBody {
  width: 70%;
}

.refLink {
    display: inline;
}

h1 {
    color: #faebd7
}
p {
  color: #faebd7
}
li {
    width: 30%;
    color: #faebd7
}
</style>