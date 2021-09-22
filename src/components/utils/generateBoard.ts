import { Board, Pieces } from "../types/board";
import { pieceIdToPieceName } from "./pieceToName";

export const getBackRow = (): Pieces[] => {
    return [
        Pieces.R,
        Pieces.KN,
        Pieces.B,
        Pieces.Q,
        Pieces.K,
        Pieces.B,
        Pieces.KN,
        Pieces.R
    ]
}

export const getPawnRow = (): Pieces[] => {
    return [
        Pieces.P,
        Pieces.P,
        Pieces.P,
        Pieces.P,
        Pieces.P,
        Pieces.P,
        Pieces.P,
        Pieces.P,
    ]
}

export const getEmptyRow = (): null[] => {
    return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]
}

export const generateBoard = (): Board => {
    const NUM_ROWS = 8;
    const NUM_COLS = 8;
    const board: Board = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        if (i === 0) {
            board.push(getBackRow().map((pieceId) => {
                return {
                    id: pieceId,
                    name: pieceIdToPieceName[pieceId],
                    color: 'BLACK'
                }
            }));
        } else if (i === 1) {
            board.push(getPawnRow().map((pieceId) => {
                return {
                    id: pieceId,
                    name: pieceIdToPieceName[pieceId],
                    color: 'BLACK'
                }
            }));
        } else if (i === NUM_ROWS - 2) {
            board.push(getPawnRow().map((pieceId) => {
                return {
                    id: pieceId,
                    name: pieceIdToPieceName[pieceId],
                    color: 'WHITE'
                }
            }));
        } else if (i === NUM_ROWS - 1) {
            board.push(getBackRow().map((pieceId) => {
                return {
                    id: pieceId,
                    name: pieceIdToPieceName[pieceId],
                    color: 'WHITE'
                }
            }));
        } else {
            board.push(getEmptyRow().map((pieceId) => {
                return null;
            }));
        }
    }
    return board;
}
