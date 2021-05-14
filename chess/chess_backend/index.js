/*
 * This represents a server that provides data when asked.
 *
 * Combines data from multiple APIs to return as custom JSON data structure:
 * Chess Move API; https://documenter.getpostman.com/view/1741165/chess-api/7Lof2bk#bf7b0b5e-d8b7-19a2-d13a-2e0bb62c7bb5
 *
 * @author Robert C. Duvall
 * @author Dennis Quan
 * @author Mac Stringer
 */

//Web Stuff
const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const cors = require('cors');
var bodyParser = require('body-parser')

//This page stuff
const { gameStore } = require('./datastore.js');
const jsChessEngine = require('js-chess-engine');
const { json } = require('body-parser');
const game = new jsChessEngine.Game()

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// const whitelist = ['http://compsci290_2021spring.dukecs.io/portfolio_jms223/chess/chess_frontend/dist/index.html', 'http://localhost:8080'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             const err = new Error('CORS Error: This site is not authorized to access this resource.');
//             err.status = 401;
//             callback(err);
//         }
//     },
// };
// app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Max-Age", 100000)
  next();
});


function createGame(index, takeFen){
  if (typeof(takeFen) == "undefined") {
    takeFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    console.log("takeFen undefined, initializing with setup: " + takeFen)
  }
  console.log("Pushing new game at index: " + index);
  gameStore.push(
      {
          "id": index, 
          "configuration": takeFen,
          "history": []
      },
    )
}

function gameHandler(id, config, from, to){
  
  const game = new jsChessEngine.Game(config);
  
  var checkMate = false;
  var gameOver = false;
  var moveError = false;
  var returnArr = [];
  var gameFEN = game.exportFEN();
  var gameJSON = game.exportJson();
  var curHist = [];

  try {
    game.move(from,to); 
  } catch (err) {
    console.log("Move error present: ")
    console.log(err);

    moveError = true;
    returnErrorArr = [gameFEN, false, false, true];
    return returnErrorArr;
  }

  game.aiMove(1);
  console.log("Player and AI moves made. " + gameFEN);
  game.printToConsole();
  
  gameJSON = game.exportJson();
  checkMate = gameJSON.checkMate;
  gameOver = gameJSON.isFinished;
  gameFEN = game.exportFEN();
  curHist = game.getHistory();
  
  saveUpdated(id, gameFEN, curHist);
  console.log("Updated game stored in dataStore.");

  returnArr = [gameFEN, gameOver, checkMate, moveError];
  console.log("Moves and variables calculated. Returning array: "+returnArr);
  return (
    returnArr
  ) 
}

function saveUpdated(myId, fen, curHist){
  for(i = 0; i < gameStore.length; i++){
    if (gameStore[i].id == myId){
      gameStore[i].configuration = fen;
      gameStore[i].history.push({"from":curHist[0].from, "to":curHist[0].to})
      gameStore[i].history.push({"from":curHist[1].from, "to":curHist[1].to})
    }
  }
}

app.get('/api/get_data', async(req, res, next) => {
  console.log("GET called.");
  res.json ({ "hi": "get is working!"})
})

app.post(
  '/api/get_data', async (req, res, next) => {
    var takeData = req.body;
    console.log(takeData);
    
    // Things expected from frontend
    let takeGameId = -1;
    let takeLoadGame = false;
    let takeFrom = "";
    let takeTo = "";
    let takeFen = "";

    // Things I'll have to return
    let giveArray = [];
    let giveId = "";
    let giveMoveError = false;
    let giveCheckMate = false;
    let giveGameOver = false;
    let giveFen = "";
    let giveHistory = "";

    // Things I have to figure out
    let isNewGame = false;
    let newGameId = -1;


    // Parse Request
    if (typeof(takeData.gameId) != "undefined") {
      takeGameId = takeData.gameId;
      console.log("Game ID taken: "+takeGameId);
    } else { 
      console.log("game Id does not exist. Creating new game.");
      isNewGame = true;
    }
    if (typeof(takeData.loadGame) != "undefined") {
      takeLoadGame = takeData.loadGame;
    }
    if (typeof(takeData.from) != "undefined") {
       takeFrom = takeData.from;
    }
    if (typeof(takeData.to) != "undefined") {
       takeTo = takeData.to;
    }
    if (typeof(takeData.fen) != "undefined") {
      takeFen = takeData.loadGame;
    }
    

    var i;
    var maxIndex = 0;

    for(i = 0; i < gameStore.length; i++){
      if (gameStore[i].id == takeGameId){
        console.log("found game with id " + takeGameId + " in gamestore.")

        if(takeLoadGame == true){
          console.log("load is true, returning loaded game with id "+takeGameId);
          giveFen = gameStore[i].configuration;
          giveHistory = gameStore[i].history;
          console.log("loading: " + giveFen);
          res.json (
            {"fen": giveFen, "history": giveHistory}
          )
        } 
        else {
          //console.log("load false, assuming move");
          var config = gameStore[i].configuration;
          //console.log("current config is: "+config)

          giveArray = gameHandler(takeGameId, config, takeFrom, takeTo);
          //console.log(giveArray);

          giveFen = giveArray[0];

          if(giveArray[1] == true){
             giveGameOver = true;
          }
          if(giveArray[2] == true){
             giveCheckMate = true;
          }
          if (giveArray[3] == true){
            giveMoveError = true;
          }
          giveHistory = gameStore[i].history;

          console.log("move completed. returning data : "+giveArray);

          res.json (
            {"fen": giveFen, "history": giveHistory, "gameOver": giveGameOver, "checkMate": giveCheckMate, "error": giveMoveError }
          );
          break;
        }

      }
      //Get biggest index 
      maxIndex = i+1;
    }

    if (isNewGame == true){

      if (takeFen != ""){
        console.log("Creaing new game at index: " + maxIndex + " with FEN " + takeFen);
        createGame(maxIndex, takeFen)
      } else {
        console.log("Creaing new game at index: " + maxIndex);
        createGame(maxIndex)
      }
      
      giveFen = gameStore[maxIndex].configuration;
      giveId = maxIndex;

      res.json (
        {"id": giveId, "fen": giveFen}
      )

    }
  }
);

//Prof's Code
// handle errors thrown by the application code
// NOTE, this actually must be defined LAST in order to catch any errors from others
app.use((err, req, res, next) => {
    console.log(err);
    // delegate to default Express error handler if HTTP header info has already been sent back
    if (res.headersSent) {
        next(err);
        return;
    }
    // set error status and return error message as JSON
    // since that is what the frontend is expecting
    res.status(err.status || 500).json({ message: err.message });
});

