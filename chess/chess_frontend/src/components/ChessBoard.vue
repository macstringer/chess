<template>
    <div class="gameContainer">
        <table class="board">
            <tr class="row" row=8> 
                <td class="rowLabel">8</td>
                <cell :myProp="boardDataArray[0]" rank=7 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[1]" rank=7 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[2]" rank=7 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[3]" rank=7 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[4]" rank=7 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[5]" rank=7 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[6]" rank=7 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[7]" rank=7 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">7</td>
                <cell :myProp="boardDataArray[8]" rank=6 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[9]" rank=6 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[10]" rank=6 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[11]" rank=6 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[12]" rank=6 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[13]" rank=6 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[14]" rank=6 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[15]" rank=6 file=7 @clicked="logCellData($event)" ref="isActive"  ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">6</td>
                <cell :myProp="boardDataArray[16]" rank=5 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[17]" rank=5 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[18]" rank=5 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[19]" rank=5 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[20]" rank=5 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[21]" rank=5 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[22]" rank=5 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[23]" rank=5 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">5</td>
                <cell :myProp="boardDataArray[24]" rank=4 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[25]" rank=4 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[26]" rank=4 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[27]" rank=4 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[28]" rank=4 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[29]" rank=4 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[30]" rank=4 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[31]" rank=4 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">4</td>
                <cell :myProp="boardDataArray[32]" rank=3 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[33]" rank=3 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[34]" rank=3 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[35]" rank=3 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[36]" rank=3 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[37]" rank=3 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[38]" rank=3 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[39]" rank=3 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">3</td>
                <cell :myProp="boardDataArray[40]" rank=2 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[41]" rank=2 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[42]" rank=2 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[43]" rank=2 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[44]" rank=2 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[45]" rank=2 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[46]" rank=2 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[47]" rank=2 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">2</td>
                <cell :myProp="boardDataArray[48]" rank=1 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[49]" rank=1 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[50]" rank=1 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[51]" rank=1 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[52]" rank=1 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[53]" rank=1 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[54]" rank=1 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[55]" rank=1 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td class="rowLabel">1</td>
                <cell :myProp="boardDataArray[56]" rank=0 file=0 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[57]" rank=0 file=1 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[58]" rank=0 file=2 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[59]" rank=0 file=3 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[60]" rank=0 file=4 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[61]" rank=0 file=5 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[62]" rank=0 file=6 @clicked="logCellData($event)" ref="isActive" ></cell>
                <cell :myProp="boardDataArray[63]" rank=0 file=7 @clicked="logCellData($event)" ref="isActive" ></cell>
            </tr>
            <tr class="row" row=8> 
                <td></td>
                <td class="columnLabel">A</td>
                <td class="columnLabel">B</td>
                <td class="columnLabel">C</td>
                <td class="columnLabel">D</td>
                <td class="columnLabel">E</td>
                <td class="columnLabel">F</td>
                <td class="columnLabel">G</td>
                <td class="columnLabel">H</td>
            </tr>
        </table>

        <div class = "controls">
            <button class="newGame" v-on:click="newGame()">New Game</button>
            <button class="loadGameBox" v-on:click="loadGame()">Load Game with ID: <input class="idInput" v-model="gameId"> </button>
            

            <div class="moveDispContainer" v-if="!moveError">
                
                <div class="moveDisp">
                {{ gameHistory }}
                </div>
            </div>

            <h2 v-if="moveError" > Sorry! That move is illegal. </h2>
            <h2 v-if="gameOver" > Game Over </h2>
        </div>

        <button class="testGET" v-if="debugMode" v-on:click="testGet()">Test Get</button>
    </div>
</template>

<script>
import cell from '@/components/Cell/';
import { bus } from '../main';

export default {
    name: "ChessBoard",
    components: {
        cell
    },
    data () {
        return { 
            boardDataString: String,
            boardDataArray: [],
            source: "",
            dest: "",
            gameId: "0",
            showID: false,
            isActive: Boolean,
            cellLog: [],
            newFEN: "",
            startFEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            gameHistory: [],
            moveError: false,
            gameOver: false,
            checkMate: false,
            debugMode: false
        }
    },
    methods: {
        globDeactivate () {
            bus.$emit('deactivateHighlight', false);
            //console.log("GLOBAL DEACTIVATE CALLED")
        },
        /* 
        playSound () {
            const audio = new Audio('../assets/move.wav');
            audio.play();
        },
        */
        drawBoard(fen) {
            let fenBoard = fen.split('');
            let fenArray = new Array();
            var i;
            for (i = 0; i < fenBoard.length; i++){
                if (fenBoard[i] == " "){
                    break;
                }
                if (fenBoard[i] == "/"){
                    continue;
                } 
                if (!isNaN(parseInt(fenBoard[i]))){
                    var int = parseInt(fenBoard[i]);
                    var j;
                    for(j = 0; j < int; j ++){
                        fenArray.push("empty");
                    }
                } if (isNaN(parseInt(fenBoard[i]))) {
                    fenArray.push(fenBoard[i]);
                }
            }
            var k;
            var betterArray = [];
            for(k = 0; k < fenArray.length; k++){
                if (fenArray[k] == "r"){betterArray.push("br")} else 
                if (fenArray[k] == "b"){betterArray.push("bb")} else 
                if (fenArray[k] == "n"){betterArray.push("bn")} else 
                if (fenArray[k] == "k"){betterArray.push("bk")} else 
                if (fenArray[k] == "q"){betterArray.push("bq")} else 
                if (fenArray[k] == "p"){betterArray.push("bp")} else 
                if (fenArray[k] == "R"){betterArray.push("wr")} else 
                if (fenArray[k] == "B"){betterArray.push("wb")} else 
                if (fenArray[k] == "N"){betterArray.push("wn")} else 
                if (fenArray[k] == "K"){betterArray.push("wk")} else 
                if (fenArray[k] == "Q"){betterArray.push("wq")} else 
                if (fenArray[k] == "P"){betterArray.push("wp")} else
                if (fenArray[k] == "empty"){betterArray.push("empty")}    
            }

            this.BoardDataArray = betterArray;
            this.boardDataArray = JSON.parse(JSON.stringify(betterArray));
            // this.playSound();
        },

        async testGet() {
            const options = {
                headers: {"Content-Type": "application/json" },
                method: 'GET'
            };
            const response = await fetch ('https://dry-taiga-21917.herokuapp.com/api/get_data', options);
            const returnedData = await response.json();
            console.log(returnedData);
        }, 

        async newGame() {
            const options = {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                //body: JSON.stringify( params )  
            };
            const response = await fetch('https://dry-taiga-21917.herokuapp.com/api/get_data', options);
            const returnedData = await response.json();
            console.log(returnedData);
            this.gameId = returnedData.id;
            this.newFEN = returnedData.fen;
            this.drawBoard(this.newFEN);
        },
        async loadGame(){
            const params = {
                gameId: this.gameId,
                loadGame: true
            }
            const options = {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify( params )  
            };
            //console.log(options);
            const response = await fetch('https://dry-taiga-21917.herokuapp.com/api/get_data', options);
            const returnedData = await response.json();
            console.log(returnedData);
            this.newFEN = returnedData.fen;
            this.gameHistory = returnedData.history;
            this.drawBoard(this.newFEN);
        },
        async movePiece (){
            this.moveError = false;

            const params = {
                gameId: this.gameId,
                loadGame: false,
                from: this.source.toUpperCase(),
                to: this.dest.toUpperCase()
            };
            console.log(params)
            const options = {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify( params )  
            };
            console.log(options.body)
            /*const response = await */
            const response = await fetch('https://dry-taiga-21917.herokuapp.com/api/get_data', options);
            console.log(response)
            const returnedData = await response.json();
            console.log(returnedData);

            if(returnedData.error){
                this.moveError = true;
            } else { this.moveError = false;}

            this.checkMate = returnedData.checkMate;
            this.gameOver = returnedData.gameOver;
            this.newFEN = returnedData.fen;
            this.gameHistory = returnedData.history;

            console.log("HISTORY");
            console.log(this.gameHistory);
            //console.log(this.newFEN);

            this.drawBoard(this.newFEN);
        },


        
        logCellData(value) { 
            if(this.source == ""){
                this.source = value;
            } else {
                this.dest = value;
                if(this.dest == this.source){
                    this.dest == "";
                    this.source =="";
                    return;
                }
                
                // this.premptiveMove();

                
                this.movePiece();
                this.source = "";
                this.dest = "";

                //console.log("trying to call global deactivate")
                this.globDeactivate();
            }
        },  
        /*
        premptiveMove(){
            console.log("PM called")
            var srcSplit = this.source.split('');
            var destSplit = this.dest.split('');
            var srcIndex;
            var destIndex;

            console.log(srcSplit)
            console.log(destSplit)

            var fileArr = ["A","B","C","D","E","F","G","H"]
            var rankArr = [8,7,6,5,4,3,2,1]

            var i;
            var j;

            var counter = 0;

            console.log(srcSplit[0] + " " +srcSplit[1])

            for(i = 0; i < rankArr.length; i++){
                for(j = 0; j < fileArr.length; j++){
                    counter ++;
                    console.log(rankArr[i] + " " + fileArr[j])
                    if (srcSplit[1] == rankArr[i] && srcSplit[0] == fileArr[j]){
                        srcIndex = counter;
                        console.log("Src Index found: "+ srcIndex)
                    }
                    if (destSplit[1] == rankArr[i] && destSplit[0] == fileArr[j]){
                        destIndex = counter;
                        console.log("dest index found: "+destIndex)
                    }
                }
            }
            
            this.boardDataArray[destIndex] = this.boardDataArray[srcIndex];
            console.log("this.boardDataArray[destIndex+1] changed to: " + this.boardDataArray[srcIndex])
            this.boardDataArray[srcIndex] = "empty";
            console.log("and src to: "+ this.boardDataArray[srcIndex])

        },
        */
    },
    computed : {
        checkValue : function() {
            if(this.moveError) {
                return true
            }
            return false
        }
    },
    watch: {
        sCol(i) {
            this.sCol = i;
        },
        sRow(i) {
            this.sRow = i;
        },
        dCol(i) {
            this.dCol = i;
        },
        dRow(i) {
            this.dRow = i;
        }
    },
    async mounted () {
        this.drawBoard(this.startFEN);
        console.log(this.boardDataArray);
    },
}
</script>

<style>
.gameContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.board {
    margin-top: 0;
    border-collapse: collapse;
    height: 70%;
    max-height: 650px;
    max-width: 650px;
    width: 70%;
    float: left;
    margin-bottom: 5%;
    flex-shrink: 0;
}
.controls {
    justify-content: center;
    width: 200px;
    float: right;
    padding-right: 6%;
    flex-grow: 4;
}
.moveDispContainer {
    width: 90%;
    margin-top: 5%;
    margin-left: 10%;
    height: 60%;

    border-radius: 10px;

    background-color: #c9bdb5;
    overflow-y: scroll;
}
.moveDisp {
    color: #12253f;
    font-size: 1rem;
    padding: 5%;
}
.rowLabel {
    justify-content: center;
    align-items: center;
    width: 5%;
    color: #faebd7;
    font-size: 1.5rem;
}
.columnLabel {
    justify-content: center;
    color: #faebd7;
    font-size: 1.5rem;
    width: 10%;
    height: 5%;
}
.rowLabel, .columnLabel{
    font-family:verdana;
    vertical-align:middle;
    font-weight: bold;
    width: 5%;
}
.hide {
    opacity: 0;
}
.row {
    padding-top: 5%;
}
.idInput {
    max-width: 7vw;
}
.active {
    background-color: #b0e0e6;;
}

button {
    margin-top: 10px;
    margin: 1%;
    padding: 5%;
    border-radius: 10px;

    width: 200px;

    background-color: #085509;
    color: #faebd7;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
}
hr {
    height: 4px;
    background-color: #2b2106;
    border: 3px solid #545451;
}
input {
    background-color: #faebd7;
    font-size: 1.5rem;
}
h2 {
    color: #faebd7;
    font-size: 2rem;
}
</style>

