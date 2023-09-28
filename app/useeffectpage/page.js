// we use useEffect when we want to do something when something happens

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function useEffectPage() {
    const [resourceType, setResourceType] = useState("posts");

    //call the useEffect
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [resourceType]);

    // change the state via function
    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    };

    return (
        <>
            <h1 className="mt-12 mb-12 text-5xl">{resourceType}</h1>
            <div className="flex items-center flex-col mt-10">
                {/* call the function to change the state */}
                <button
                    className="p-4 border bg-black hover:bg-red-900 mb-5"
                    onClick={() => changeResourceType("posts")}
                >
                    Posts
                </button>
                <button
                    className="p-4 border bg-black hover:bg-red-900 mb-5"
                    onClick={() => changeResourceType("comments")}
                >
                    Comments
                </button>
                <button
                    className="p-4 border bg-black hover:bg-red-900 mb-10"
                    onClick={() => changeResourceType("todos")}
                >
                    To dos
                </button>
            </div>
            <Link className="hover:text-black transform transition" href="/">
                Back to Home
            </Link>
        </>
    );
}
