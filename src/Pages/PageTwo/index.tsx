/**
* @file 
* @date 2023-05-04
* @author haodong.wang
* @lastModify  2023-05-04
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import './style.scss'
import icon from "../../Assets/images/icon.png"
import { useContext } from 'react'
import { ActiveContext, steps } from '../Index';
import classnames from '@/Utils/classnames';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageTwo = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { active } = useContext(ActiveContext);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
    return <div className={classnames("pageTwo_container", { active: active == steps.two })}>
        <div className='pageTwo_content'>
            <div className="pageTwo_icon">
                <img src={icon}></img>
            </div>
            <div className="pageTwo_item">
                <p className="pageTwo_title">-幸会，我是Law</p>
                <p className="pageTwo_desc">完成一项任务是我的职责，出色的用户体验是我努力的方向</p>
            </div>
            <div className="pageTwo_item">
                <p className="pageTwo_title">-我能效劳</p>
                <p className="pageTwo_desc">MVVM模块化开发、实现业务逻辑丰富的交互界面</p>
            </div>
            <div className="pageTwo_item">
                <p className="pageTwo_title">-关于我</p>
                <p className="pageTwo_desc">坐标武汉，目前离职，一名钱端程序员，自由状态，随时到岗。主要技术栈为ES6、TypeScript、React、Redux、Vue3</p>
            </div>
        </div>
    </div>
}
export default PageTwo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */