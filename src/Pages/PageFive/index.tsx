/**
* @file 
* @date 2023-05-04
* @author haodong.wang
* @lastModify  2023-05-04
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import './style.scss'
import email from "../../Assets/images/email.png"
import phone from "../../Assets/images/phone.png"
import wechat from "../../Assets/images/wechats.png"
import qq from "@/Assets/images/qq.png"
import { useContext } from 'react'
import { ActiveContext, steps } from '../Index'
import classnames from '@/Utils/classnames'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageFive = (): JSX.Element => {
/* <------------------------------------ **** STATE START **** ------------------------------------ */
/************* This section will include this component HOOK function *************/
const {active} = useContext(ActiveContext);
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
return <div className={classnames("pageFive_container", {active: active == steps.five})}>
    <div className="pageFive_content">
        <div className="pageFive_inner">
            <h2>
                <span>CONTACT</span>
                <span>FOR</span>
                <span>ME</span>
            </h2>
            <div className="pageFive_line"></div>
            <div className="pageFive_tag">
                <div className="pageFive_tag1">灵感</div>
                <div className="pageFive_tag2">代码</div>
                <div className="pageFive_tag3">梦想</div>
                <div className="pageFive_tag4">未来</div>
            </div>
            <div className="pageFive_employ">
                <div className="pageFive_employ1">盛年不重来</div>
                <div className="pageFive_employ2">一日难在晨</div>
                <div className="pageFive_employ3">即时当勉励</div>
                <div className="pageFive_employ4">岁月不待人</div>
                <div className="pageFive_employ5">期待与您共事！</div>
            </div>
            <div className="pageFive_contact">
                <div className="pageFive_email">
                    <img src={email}></img>
                    <div className="pageFive_contact__desc">whd20000228@163.com</div>
                </div>
                <div className="pageFive_phone">
                    <img src={phone}></img>
                    <div className="pageFive_contact__desc">15623777033</div>
                </div>
                <div className="pageFive_wechat">
                    <img src='data:text/html;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABX0lEQVR42mNgGLLg////XEDMDaUZKTFI7d+/f8+B+A2Q/RZEA/EzIDsUiJlIMUgAiNf/xw+uAnEsMYbxAl1xDKrpDxC/QDYFKPcD5GoQEyoUjNfAv3//1iHpj4ZaAtP8DxaGQPol1IInQIoTp4HQMAIDoOFXgJQWmgsXASkFIP0JSP8Ahe2vX78MsBr29OlTrv+EAciVH4C4AGhoL5CeDsQzgXgKEGeipAIghwPJe7gMa//9+7cPLnVQl+shG7oNp2n//n0EUp7/iQPyMAO98CgqQ3MZM9CSxyAG0NX1QEoEyP8FlVuK7MqFOAxEd305KO6g7G/ASJyNJPcXPT1mYjGw6z8JAN3AG0DnvwLSNt+/f2+FJqMaYg0Dqj2MbBgTNPCZseSkdUSa6UtsPtf+8+fPCTwGgSKlgpySCOTSd6DIQErsH6BZkonc4o3n27dvsqCEDMSCUAwq2sRpUjADAAXaWmRG0Rv9AAAAAElFTkSuQmCC'></img>
                    <div className="pageFive_contact__desc">
                        <img src={wechat}></img>
                    </div>
                </div>
                <div className="pageFive_qq">
                    <img src='data:text/html;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABnElEQVR42p1Tu0oDQRSNJvhMfGBlERC0sBBLBfUDfGCX3kYE0XSpVPQTxN5SVFawDNhYRLAIiAhiZyFplIW4CbpuZu7M9QxGkxg2u3rhMI+dOXvunXMjkYBg5l6DyH+ienkGWCdSx8CpINqUzLPYi/+FZAW4AQTXQijmOyEoXS7zUBBJm+uKaSi41FoTN4dC3EopFzCPtiLqwR8zWrPD/uECu0DCl8h1OQk1RxwcFjDiS1Sp8CSIroJYSOtHDHO+RES8iNq8hVCEB+Rlv/rEleIdDhn46RqGjgaSe2zgaTc08zOHj7zneWO/1YwiJVMbHZYF50sfglYxjf0QIeElfHjCpheSRAHvUql9LDtrr0WUIqIskA9DBFO+SKJrlOMAy6761JJfjqY05q8t1YAHSk7g7nn0z1SDw01rWJYVLVd4nBSfB6gpgWirWCz2Y9ne9Py2bSegKIODdpCHUJ8HKX0MaXJFl6YEnI2D3+nl4K1tjGnsnaEmWVLqAooO0QUTrZo2BgwAw6ZujuMM7lXlG8MCfQaFQqHblKP+7ier9Tn3Qkd+6AAAAABJRU5ErkJggg=='></img>
                    <div className="pageFive_contact__desc">
                        <img src={qq}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="pageFive_top"></div>
        <div className="pageFive_bottom"></div>
    </div>
</div>;
};
export default PageFive;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */