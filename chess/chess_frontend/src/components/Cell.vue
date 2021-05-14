<template>
  <td v-on:click="onClickButton()" :class="{active: activate, whiteSquare: isWhite}" class="cell" row=8 column ="A">
        <img v-if="myProp" :src="require('../assets/pieces/' + myProp + '.svg')"/>
    </td>
</template>

<script>
import { bus } from '../main'

export default {
    name: 'Cell',
    components: {
    },
    props: {
        myProp: String,
        rank: String,
        file: String,
        isActive: Boolean
    },
    created (){
        bus.$on('deactivateHighlight', (data) => {
            //console.log(`global deactivate function called`);
            this.activate = data;
            //console.log("this ce''ls activate is now: "+this.activate);
        })
    },
    data() {
        return {
            activate: false,
            chessCell: String,
            isWhite: Boolean,
            myRank: Number,
            myFile: Number
        }
    },
    methods: {
        onClickButton () {
            this.activate = true;
            this.$emit('clicked', this.chessCell);
        },
        deactivate() {
            this.activate = false;
            // console.log(this.activate);
            // console.log(this.chessCell);
            // console.log("deactivated");
            this.$forceUpdate();
        }
    },
    mounted () {
        this.myRank = Number(this.rank);
        this.myFile = Number(this.file);
        if ((this.myRank + this.myFile + 1) % 2 == 0){
            this.isWhite = true;
        } else {
            this.isWhite = false;
        }

        const fileLetter = String.fromCharCode(this.myFile+65);
        this.chessCell = [fileLetter,(this.myRank+1)].join('');

    },
}

</script>

<style>
.active {
    background-color: #b0e0e6;
}
.cell{
    vertical-align: bottom;
    line-height: 0;
    background-color: #968d81;
    /* border: 2px solid black; */
}
.whiteSquare {
    background-color: #faebd7;
}

</style>

