"use client";

import { useEffect, useMemo, useState } from "react";
import Error from "next/error";
import { GET } from "./api/route";

export default function ReadTheBibleBook() {

    const [biblePassage, setBiblePassage]: any = useState(null);

    useEffect(() => {
        GET().then(data => setBiblePassage(data));
    }, []);

    return (
        <div className="flex h-screen">
            {/* Top bar */}
            <div className="bg-primary text-primary-foreground p-4">
                {/* Book Name, left/right arrow, version selector, language selector, profile button, search bar */}
            </div>
            {/* Main content, Bible Goes Here */}
            <div className="flex-1 p-4">
                {biblePassage && <p>{biblePassage.text}</p>}
            </div>
            {/* Right Sidebar */}
            <div className="w-64 bg-secondary text-secondary-foreground p-4">
            </div>
        </div>
    );
}
