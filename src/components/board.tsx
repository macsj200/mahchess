import React, { useState } from 'react'
import { Cell } from './cell';
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
            {board.map((row) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%'
                        }}
                    >
                        {row.map((piece) => (
                            <Cell piece={piece} />
                        ))}
                    </div>
                )
            })}
        </div>
    </div>
}