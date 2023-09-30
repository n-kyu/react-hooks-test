"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// If your component function is pure (as it should be), this should not affect the behavior

export default function useRefPage() {
    const [name, setName] = useState("");

    const previousName = useRef();

    // using useRef to store the previous state value
    useEffect(() => {
        previousName.current = name;
    }, [name]);

    //  used to reference an HTML object
    // const inputRef = useRef();
    // console.log(inputRef.current);

    //  getting the element reference with useRef and accessing the element properties
    // const focusInput = () => {
    //     inputRef.current.focus();
    // };

    //  using useRef to count how many times the states change
    // const renders = useRef(0);
    // useEffect(() => {
    //     renders.current = renders.current + 1;
    // });

    return (
        <>
            <div className="mb-12 mt-12">
                <input
                    // ref={inputRef}
                    className="text-black"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <p className="mt-4 text-3xl">Hello! My name is {name}</p>
                {/* <button onClick={focusInput}>Focus input</button> */}
                {/* <p>Renders: {renders.current}</p> */}
                <p className="mt-6 text-2xl">
                    And my name was {previousName.current}{" "}
                </p>
            </div>
            <Link className="hover:text-black transform transition" href="/">
                Back to Home
            </Link>
        </>
    );
}
