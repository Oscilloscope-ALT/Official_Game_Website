import { useEffect, useState } from "react";

export default function TypingText({text}){
    const [output, setOutput] = useState("");

    useEffect(() =>{
        let i = 0;
        setOutput("");

        const interval = setInterval(()=>{
            setOutput(text.slice(0, i+1));
            i++;
            if (i >= text.length){
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [text]);
    return <div className="text_container">{output}</div>;
};