"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation(){
    // 그냥 실행 시 use client를 작성하라는 에러가 발생함
    // 왜일까용?
    const path = usePathname();
    const [count, setCount] = useState(0);

    console.log(path);
    
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link> {path === "/" ? "!!" : ""}</li>
                <li><Link href="/about-us">About</Link>{path === "/about-us" ? "!!" : ""}</li>
                <li><button onClick={() => setCount(c => c+1)}>{count}</button></li>
            </ul>
        </nav>
    );
}