
import echarts from "echarts"
import React, { Component } from 'react'

export default class Echarts extends Component {
  render() {
    return (
      <div id="echarts1">
       
      </div>
    )
  }
  componentDidMount(){
    $.ajax({
        url:"http://localhost/ajax/ajax/a.php",
        type:"get",
        dataType:"json",
        success:function(json){
     //   //初始化echarts
       var echarts1=document.getElementById("echarts1");
       var myEcharts=echarts.init(echarts1);

       window.onload=window.onresize=function(){
        echarts1.style.width=0.5*window.innerWidth+"px";
        myEcharts.resize()
       }
     
       var option = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: json.data
          }]
        };
        myEcharts.setOption(option);
         }
     })
    }
    
}

