"use client";
import Link from "next/link";
import { useState } from "react";

export default function useStatePage() {
    const [count, setCount] = useState(0); // set the initial state you want

    // function to increment count every time we click in the button
    const incrementCount = () => {
        // setCount(count + 1);
        // If you want to create a state based on the previous value, the most ideal would be
        setCount((previousState) => previousState + 1);
    };

    return (
        <>
            <div className="mb-12">
                <h1 className="mt-12 mb-12 text-5xl">{count}</h1>
                <button
                    onClick={incrementCount}
                    className="p-4 border bg-black hover:bg-red-900"
                >
                    Increment
                </button>
            </div>
            <Link className="hover:text-black transform transition" href="/">
                Back to Home
            </Link>
        </>
    );
}
