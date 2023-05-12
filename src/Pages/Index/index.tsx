/**
 * @file
 * @date 2022-08-02
 * @author haodong.wang
 * @lastModify  2022-08-02
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import "./style.scss";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import PageFour from "../PageFour";
import PageFive from "../PageFive";
import { createContext, useLayoutEffect, useRef, useState } from "react";
import classnames from "@/Utils/classnames";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export enum steps {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5
}

interface pageDataProps {
  id: number;
  component: React.ReactNode;
}

interface menuDataProps {
  id: number;
  title: string;
}

export const ActiveContext = createContext<{ active: number }>({
  active: steps.one
});

const Index = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [active, setActive] = useState(steps.one);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const isMove = useRef(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const [modalShow, setModalShow] = useState(false);

  const pageData: pageDataProps[] = [
    {
      id: 1,
      component: <PageOne></PageOne>
    },
    {
      id: 2,
      component: <PageTwo></PageTwo>
    },
    {
      id: 3,
      component: <PageThree></PageThree>
    },
    {
      id: 4,
      component: <PageFour></PageFour>
    },
    {
      id: 5,
      component: <PageFive></PageFive>
    }
  ]

  const menuData: menuDataProps[] = [
    {
      id: 1,
      title: "首页"
    },
    {
      id: 2,
      title: "关于我"
    },
    {
      id: 3,
      title: "技能掌握"
    },
    {
      id: 4,
      title: "我的经历"
    },
    {
      id: 5,
      title: "联系我"
    }
  ]

  useLayoutEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isMove.current) return;
      const dir = e.deltaY > 0 ? 1 : 0;

      if (dir) {
        if (active + 1 > steps.five) return;
        setActive(active + 1);
      } else {
        if (active - 1 < steps.one) return;
        setActive(active - 1);
      }
      isMove.current = false;
    }

    document.addEventListener("wheel", handleWheel, false);

    return () => {
      document.removeEventListener("wheel", handleWheel, false);
    }
  }, [active])

  useLayoutEffect(() => {

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    }
  }, [])

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target == containerRef.current) {
      isMove.current = true
    }
  }
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return <ActiveContext.Provider value={{ active }}>
    <div className="index_container" >
      <div className="index_content" onTransitionEnd={handleTransitionEnd} style={{ transform: `translateY(${-(active - 1) * windowHeight}px)`, height: `${windowHeight * 5}px` }} ref={containerRef}>
        {pageData.map(item => {
          return <div className="index_section" key={item.id} style={{ height: `${windowHeight}px` }}>
            {item.component}
          </div>
        })}
      </div>

      <div id="index_menu">
        <div className={classnames("index_menuBtn", { open: modalShow })} onClick={() => setModalShow(!modalShow)}>
          <div className="index_btnTop"></div>
          <div className="index_btnCenter"></div>
          <div className="index_btnBottom"></div>
        </div>

        <div className={classnames("index_modal", { show: modalShow })}>
          <div className="index_modalContent">
            <ul className={classnames("index_modalList", `active_${active}`)}>
              {menuData.map(item => {
                return <li key={item.id} className="index_modalItem" onClick={() => {
                  setActive(item.id);
                  setModalShow(false);
                }}>{item.title}</li>
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="index_nav">
        <ul className="index_navList">
          {menuData.map(item => {
            return <li key={item.id} className={classnames("index_navItem", { active: active == item.id })} onClick={() => setActive(item.id)}>
              <span className="index_navInner"></span>
            </li>
          })}
        </ul>
      </div>
    </div>
  </ActiveContext.Provider>
};
export default Index;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
