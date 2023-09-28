import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="principal-container">
                <h1 className="font-bold text-5xl mb-12">React Hooks</h1>
                <Link
                    className="hover:text-black transform transition"
                    href="/usestatepage"
                >
                    useState
                </Link>
            </div>
        </>
    );
}
