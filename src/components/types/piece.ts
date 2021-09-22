import { PieceName, Pieces } from "./board";

export type PieceColor = 'BLACK' | 'WHITE'

export type Piece = {
    id: Pieces,
    color: PieceColor,
    name: PieceName
}
