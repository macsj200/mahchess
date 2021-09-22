import { Piece } from "./piece"

export enum Pieces {
    P, // pawn
    R, // rook
    KN, // knight
    B, // bishop
    Q, // queen
    K // king
}

export type PieceName = 'P' | 'R' | 'KN' | 'B' | 'Q' | 'K' | 'X'

export type PieceIdToPieceName = Record<Pieces, PieceName>

export type Board = (Piece | null)[][]
