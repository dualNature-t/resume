/**
* @file 
* @date 2023-05-04
* @author haodong.wang
* @lastModify  2023-05-04
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useContext, useLayoutEffect, useRef, useState } from 'react';
import './style.scss'
import { useThrottle } from '@/Utils/hooks/useThrottle';
import { ActiveContext, steps } from '../Index';
import classnames from '@/Utils/classnames';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageOne = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { active } = useContext(ActiveContext);

    const [styleParams, setStyleParams] = useState({});

    const contentRef = useRef<HTMLDivElement>(null);

    const isMove = useRef(false);

    useLayoutEffect(() => {
        const mouseEnter = () => {
            setStyleParams(handleStyleParams(0, 0, 0, 0, 0.3, 20))
        }


        const mouseLeave = () => {
            setStyleParams(handleStyleParams(0, 0, 0, 0, 0, 0));
        }

        document.addEventListener("mouseenter", mouseEnter, false);
        document.addEventListener("mouseleave", mouseLeave, false);
        return () => {
            document.removeEventListener("mouseenter", mouseEnter, false);
            document.removeEventListener("mouseleave", mouseLeave, false);
        }
    }, [])

    useLayoutEffect(() => {
        let timer: NodeJS.Timeout;
        if (active == steps.one) {
            isMove.current = false;
            timer = setTimeout(() => {
                isMove.current = true;
            }, 2200)
        }

        return () => {
            clearTimeout(timer);
        }
    }, [active])
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */

    const { throttle: handleContentMouseMove, callback } = useThrottle((e: React.MouseEvent) => {
        const { x: left, y: top, width, height } = contentRef.current?.getBoundingClientRect() as DOMRect;
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const x = e.pageX - centerX;
        const y = e.pageY - centerY;

        setStyleParams(handleStyleParams(x * 0.1, y * 0.1, x * 0.02, y * 0.1, 0.3, 50))
    }, 100)

    const handleContentMouseLeave = () => {
        callback();
        setStyleParams(handleStyleParams(0, 0, 0, 0, 0.3, 20))
    }

    const handleStyleParams = (x: number, y: number, rotateX: number, rotateY: number, bgColor: number, shadow: number) => {
        return {
            transform: `translate(${x}px,${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            "boxShadow": `0 0 ${shadow}px rgba(0,0,0,.5)`,
            "background": `rgba(255,255,255,${bgColor})`
        }
    }
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
    return <div className={classnames("pageOne_container", { active: active == steps.one })}>
        <div className="pageOne_content" ref={contentRef} onMouseMove={(e) => {
            isMove.current && handleContentMouseMove(e)
        }} onMouseLeave={handleContentMouseLeave} style={styleParams}>
            <h1 className="pageOne_name__en">Hello, I'm Law</h1>
            <p className="pageOne_desc__en">If you like it, you have to do it to the extreme</p>
            <p className="pageOne_name">你好，我叫王浩东</p>
            <p className="pageOne_desc">一名前端开发工程师</p>
        </div>
    </div>;
};
export default PageOne;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */