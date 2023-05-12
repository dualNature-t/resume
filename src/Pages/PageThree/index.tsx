/**
* @file 
* @date 2023-05-04
* @author haodong.wang
* @lastModify  2023-05-04
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import './style.scss'
import * as echarts from 'echarts/core';
import {
    GraphChart,
} from 'echarts/charts';

import { CanvasRenderer } from 'echarts/renderers';
import { useContext, useLayoutEffect, useRef } from 'react';
import { ECBasicOption, EChartsType } from 'echarts/types/dist/shared';
import { ActiveContext, steps } from '../Index';


// 注册必须的组件
echarts.use([
    CanvasRenderer,
    GraphChart
]);

const options = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: ['#83e0ff', '#45f5ce', '#b158ff'],
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 1000,
                edgeLength: 50,
            },
            label: {
                show: true,
                fontSize: 16,
                fontFamily: "arial"
            },
            data: [
                {
                    name: 'HTML5',
                    symbolSize: 100,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#3cbbc7',
                        borderWidth: 4,
                        shadowBlur: 20,
                        shadowColor: '#3cbbc7',
                        color: '#001c43',
                    }
                },
                {
                    name: 'CSS3',
                    symbolSize: 100,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#eb6364',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#eb6364',
                        color: '#001c43',
                    },
                },
                {
                    name: 'JavaScript',
                    symbolSize: 120,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#ff9370',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#ff9370',
                        color: '#001c43',
                    },

                },
                {
                    name: 'TypeScript',
                    symbolSize: 130,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#ffa033',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#ffa033',
                        color: '#001c43',
                    },

                },
                {
                    name: 'Vue3',
                    symbolSize: 90,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#48c789',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#48c789',
                        color: '#001c43',
                    },

                },
                {
                    name: 'React',
                    symbolSize: 150,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#29a9ff',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#29a9ff',
                        color: '#001c43',
                    },

                },
                {
                    name: 'Redux',
                    symbolSize: 110,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#aa70e0',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#aa70e0',
                        color: '#001c43'
                    },

                },
                {
                    name: 'Webpack',
                    symbolSize: 120,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#f2c94c',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#f2c94c',
                        color: '#001c43'
                    },
                },
                {
                    name: 'CI/CD',
                    symbolSize: 80,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#9197a1',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#9197a1',
                        color: '#001c43'
                    },

                },
                {
                    name: 'Git',
                    symbolSize: 100,
                    draggable: true,
                    itemStyle: {
                        borderColor: '#82dffe',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#04f2a7',
                        color: '#001c43'
                    },

                }],

        }
    ]
}
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageThree = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const { active } = useContext(ActiveContext);

    const container = useRef<HTMLDivElement>(null);

    const chartObj = useRef<EChartsType>();

    useLayoutEffect(() => {
        const chart = echarts.init(container.current as HTMLElement)
        chartObj.current = chart;
    }, [])

    useLayoutEffect(() => {
        if (active == steps.three) {
            chartObj.current?.setOption(options as ECBasicOption);
        }
    }, [active])
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
    return <div className='pageThree_container' ref={container}></div>;
};
export default PageThree;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */