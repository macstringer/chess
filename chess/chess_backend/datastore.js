module.exports = {
    gameStore: [
        {
            "id": 0, 
            "configuration": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            "history": []
        },
        {
            "id": 1, 
            "configuration": "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
            "history": []
        },
        
    ],
    updateGame (newInfo) {
        this.data = newInfo;
    },
    clearData(){
        this.data = [];
    }
};
