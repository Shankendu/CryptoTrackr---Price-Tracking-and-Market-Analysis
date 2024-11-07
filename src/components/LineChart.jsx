/* eslint-disable react/prop-types */
import {  useEffect, useState } from "react";
import Chart from "react-google-charts";


const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
 
  let options = {
    backgroundColor:{fill:"transparent"},
    fontName: "Poppins",
    areaOpacity: 0.3,
    hAxis: {
      title: "Dates",
      titleTextStyle: {
        color: "#e9e9e9",
        fontName: "Poppins",
        italic: false,
      },
      gridlines: {
        count: 0,
        color:"#e9e9e9"
      },
      minorGridlines: {
        count: 0,
        color:"#e9e9e9"
      },
      textStyle: {
        color: "#e9e9e9",
        fontName: "Poppins",
        bold: true,
      },
    },
    vAxis: {
      title: "Prices",
      titleTextStyle: {
        color: "#e9e9e9",
        fontName: "Poppins",
        italic: false,
      },
      gridlines: {
        count: 1,
        color:"#e9e9e9"
      },
      minorGridlines: {
        count: 0,
        color:"#e9e9e9"
      },
      textStyle: {
        color: "#e9e9e9",
        fontName: "Poppins",
        bold: true,
      },
    },
    legend: {
      textStyle: {
        color: "#e9e9e9",
        fontName: "Poppins",
        bold: true,
      },
      position:"right",
      alignment:"center",
    },
    colors: ["#a7a5dd"],
  };
  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);
  return (
    <Chart
      chartType="AreaChart"
      data={data}
      height="100%"
      legendToggle
      options={options}
    />
  );
};

export default LineChart;
