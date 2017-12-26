import React from 'react';
import Board from "./Board";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>Status</div>
                    <div>Todo</div>
                </div>
            </div>
        );
    }
}

export default Game;