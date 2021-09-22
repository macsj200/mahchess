import React from 'react'
import { Piece } from './piece';
import { Piece as PieceType } from './types/piece';
import { Position } from './types/position';

export type CellProps = {
    piece: PieceType | null
    position: Position
};

export const Cell: React.FC<CellProps> = ({ piece, position }) => {
    const [i, j] = position;
    const backgroundColor = (i + j) % 2 === 0 ? '#fff' : '#eee'
    return (
        <div
            style={{
                width: '2rem',
                height: '2rem',
                backgroundColor
            }}
        >
            <Piece piece={piece} />
        </div>
    )
}