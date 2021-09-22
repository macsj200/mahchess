import React from 'react'
import { Piece } from './types/piece';

export type CellProps = {
    piece: Piece | null
};

export const Cell: React.FC<CellProps> = ({ piece }) => {
    return (
        <div
            style={{
                width: '2rem',
                height: '2rem',
            }}
        >
            <span>{piece?.name || 'X'}</span>
        </div>
    )
}