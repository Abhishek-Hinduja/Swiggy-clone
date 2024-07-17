import { useState, useEffect } from "react";

const useOnline = ()=>{
    const [isOnline, setisOnline] = useState(true)

    useEffect(()=>{
        const handleonline = ()=>{
            setisOnline(true)
        }

        const handleoffline = ()=>{
            setisOnline(false)
        }

        window.addEventListener("online", handleonline);
        window.addEventListener("offline",handleoffline);

        return ()=>{
            window.removeEventListener("online", handleonline);
            window.removeEventListener("offline", handleoffline)
        }
    }, []);

    return isOnline;
}

export default useOnline;