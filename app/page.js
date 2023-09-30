import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="principal-container flex flex-col">
                <h1 className="font-bold text-5xl mb-12">React Hooks</h1>
                <Link
                    className="hover:text-black transform transition mb-2"
                    href="/usestatepage"
                >
                    useState
                </Link>
                <Link
                    className="hover:text-black transform transition mb-2"
                    href="/useeffectpage"
                >
                    useEffect
                </Link>
                <Link
                    className="hover:text-black transform transition mb-2"
                    href="/userefpage"
                >
                    useRef
                </Link>
            </div>
        </>
    );
}
