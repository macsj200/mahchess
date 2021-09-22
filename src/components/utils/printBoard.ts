import { Board } from "../types/board";

export const printBoard = (board: Board): string => {
    let boardStr = '';
    for (let i = 0; i < board.length; i++) {
        const currRow = board[i].map((piece) => piece !== null ? piece.name : 'X').join(' ');
        boardStr += `${currRow}\n`
    }
    return boardStr;
}
