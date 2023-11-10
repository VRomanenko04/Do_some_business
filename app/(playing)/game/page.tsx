'use client'
import React from 'react';
import { RootState } from '@/app/globalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/app/globalRedux/Features/counterSlice';


const GamePage = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <main>
                <div>Game Page</div>
                <p>{count}</p>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button onClick={() => dispatch(incrementByAmount(2))}>
                    increment by 2
                </button>
            </main>
        </>
    )
}

export default GamePage;