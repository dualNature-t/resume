/**
* @file 
* @date 2023-05-04
* @author haodong.wang
* @lastModify  2023-05-04
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useContext } from 'react';
import './style.scss'
import { ActiveContext, steps } from '../Index';
import classnames from '@/Utils/classnames';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageFour = (): JSX.Element => {
/* <------------------------------------ **** STATE START **** ------------------------------------ */
/************* This section will include this component HOOK function *************/
const {active} = useContext(ActiveContext)
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
return <div className={classnames("pageFour_container", {active: active == steps.four})}>
    <div className="pageFour_content">
        <div className="pageFour_nav">
            <div className="pageFour_experienceBox">
                <div className="pageFour_experience">我的经历</div>
                <div className="pageFour_year">2021</div>
                <div className="pageFour_yearText">YEAR</div>
            </div>
            <div className="pageFour_line">
                <div className="pageFour_lineItem"></div>
                <div className="pageFour_lineItem"></div>
                <div className="pageFour_lineItem"></div>
            </div>
        </div>

        <div className="pageFour_nav__cover">
            <div className="pageFour_circle"></div>
            <div className="pageFour_line__cover"></div>
        </div>

        <div className="pageFour_item">
            <div className="pageFour_time">2021 <span>07月</span></div>
            <div className="pageFour_detail">
                <h3>赛瓦软件</h3>
                <p className="pageFour_department">&lt;研发部/前端实习生&gt;</p>
                <p className="pageFour_work">使用Echarts开发可视化图表，配合后端与3D场景开发人员开发可视化大屏项目。2021年12月实习结束。</p>
            </div>
        </div>
        <div className="pageFour_item">
            <div className="pageFour_time">2022 <span>04月</span></div>
            <div className="pageFour_detail">
                <h3>数支（武汉）互联科技有限公司</h3>
                <p className="pageFour_department">&lt;开发部/前端工程师&gt;</p>
                <p className="pageFour_work">参与公司调研类自研产品的开发，涉及产品有Profile、Market、SignUp、官网、合约交易系统、内部管理系统。2023年4月底离职。</p>
            </div>
        </div>
        <div className="pageFour_item">
            <div className="pageFour_time">2023 <span>Now</span></div>
            <div className="pageFour_detail">
                <h3>武汉工程大学邮电与信息工程学院</h3>
                <p className="pageFour_department">&lt;本科&gt;</p>
                <p className="pageFour_work">找工作ing...</p>
            </div>
        </div>
    </div>
</div>;
};
export default PageFour;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */