import React from 'react';
import { Piece as PieceType } from './types/piece';

export type PieceProps = {
    piece: PieceType | null
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
    if (piece === null) return null;

    const backgroundColor = piece.color === 'WHITE' ? '#f00' : '#0f0'

    return (
        <span
            style={{
                backgroundColor
            }}
        >
            {piece.name || 'X'}
        </span>
    )
}