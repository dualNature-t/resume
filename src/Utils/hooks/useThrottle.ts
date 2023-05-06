import { useRef } from "react"

interface ICurrent {
    fn: Function,
    timer: null | NodeJS.Timeout
}

export const useThrottle = (fn: Function, delay = 500) => {
    const {current} = useRef<ICurrent>({ fn, timer: null })
    let flat = true;
    function func(this: any, ...args: any[]) {
        if(!current.timer) {
            current.timer = setTimeout(() => {
                flat && current.fn.apply(this, args);
                current.timer = null;
            }, delay)
        }
    }

    return {throttle: func, callback: ()=>{
        flat = false;
    }}
} 