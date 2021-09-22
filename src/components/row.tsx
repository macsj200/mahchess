import React from 'react';
import { Cell } from './cell';
import { Piece } from './types/piece';

export type RowProps = {
    row: (Piece | null)[],
    rowNum: number
};

export const Row: React.FC<RowProps> = ({ row, rowNum }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%'
            }}
        >
            {row.map((piece, j) => (
                <Cell position={[rowNum, j]} key={`${rowNum},${j}`} piece={piece} />
            ))}
        </div>
    )
}
