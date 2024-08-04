"use client";

import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return <Doughnut data={[]} />;
};

export default DoughnutChart;
