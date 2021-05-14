<template>
  <div class="container">
    <div class="introBody">
      <h1> Intro </h1>
      <p> 
        Since we've been in quarantine, a couple of my friends and I have gotten obsessed with chess. We bought a physical chess board
        and have been playing a ton. For my final project, I thought it could be fun to build a website where I could practice my skills
        before I took them to the table. 
      </p>

      <p> 
        So I set out to do just that. It was actually pretty hard because there are no chess engine APIs availible on the web - 
        I guess companies don't want people to be able to use their services for free, and chess AIs are super hard to program.
      </p>

      <p>
        For this project, I ended up using a javascript module called "js-chess-engine". It runs on the server attached to this page,
        and hosts the dataStore of all the games and the ai which I play against.  
      </p>

      <p>
        Overall, I had a ton of fun working on this project - I feel like I've mastered vue and I hope to tackle similar ones
        in the future!
      </p>

    </div>
  </div>
</template>

<script>
export default {
    name: "description"
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

/*
Project to do
- Play as black
- Multiplayer
x Game history
- APIs
- User logins
- on heroku
*/

h1 {
    color: #faebd7
}
p {
  color: #faebd7
}
</style>