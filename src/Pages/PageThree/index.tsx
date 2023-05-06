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
  BarChart,
  BarSeriesOption,
  GraphChart,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';

import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useLayoutEffect, useRef } from 'react';
import { ECBasicOption } from 'echarts/types/dist/shared';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  GraphChart
]);

const options  = {
    tooltip: {
        show: false
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color:['#83e0ff','#45f5ce','#b158ff'],
    series: [
        {
            type: 'graph',
            layout: 'force',
            force:{
                repulsion:1000,
                edgeLength:50
            },
            roam: false,
            label: {
                normal: {
                    show: true
                }
            },
            data: [
                {
                    name: 'HTML5',
                    symbolSize: 120,
                    draggable: true,
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#6CE1E5',
                            borderWidth: 6,
                            shadowBlur: 20,
                            shadowColor: '#6CE1E5',
                            color: '#001c43',
                        }
                    }
                },
                {
                    name: 'CSS3',
                    symbolSize: 100,
                    draggable: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#346CE0',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#346CE0',
                            color: '#001c43',
                        }
                    },
                    category: 1,

                },
                {
                    name: 'JavaScript',
                    symbolSize: 80,
                    draggable: true,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#C73ABB',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#C73ABB',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: 'TypeScript',
                    symbolSize: 80,
                    draggable: true,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#C13731',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#C13731',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: 'Vue3',
                    symbolSize: 80,
                    draggable: true,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#B8804A',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#B8804A',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: 'React',
                    symbolSize:100,
                    draggable: true,
                    category: 2,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: 'Redux',
                    symbolSize:80,
                    draggable: true,
                    category: 2,
                    itemStyle: {
                        normal: {
                            borderColor: '#6D2768',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#6D2768',
                            color: '#001c43'
                        }
                    },

                },
                {
                    name: 'Webpack',
                    symbolSize:80,
                    draggable: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#704F46',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#704F46',
                            color: '#001c43'

                        }
                    },
                    category: 2,

                },
                {
                    name: 'CI/CD',
                    symbolSize:80,
                    draggable: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#365173',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#365173',
                            color: '#001c43'
                        }
                    },
                    category: 2,

                },
                {
                    name: 'Git',
                    symbolSize:80,
                    category: 2,
                    draggable: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43'
                        }
                    },

                }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 5,
                    curveness: 0
                }
            },
            categories:[
                {name: '0'},
                {name: '1'},
                {name: '2'}
            ]
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
const container = useRef<HTMLDivElement>(null);

useLayoutEffect(()=>{
    const chart = echarts.init(container.current as HTMLElement)
    chart.setOption(options as ECBasicOption);
}, [])
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