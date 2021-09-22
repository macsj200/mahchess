import React, { useState } from 'react'
import { Cell } from './cell';
import { Row } from './row';
import { generateBoard } from './utils/generateBoard'
import { printBoard } from './utils/printBoard';

export const Board: React.FC = () => {
    const [board, setBoard] = useState(generateBoard());
    console.log(printBoard(board));

    return <div>
        <h1>Board</h1>
        <div
            style={{
                backgroundColor: '#eee',
                display: 'inline-block'
            }}
        >
            {board.map((row, i) => {
                return (
                    <Row key={i} rowNum={i} row={row} />
                )
            })}
        </div>
    </div>
}