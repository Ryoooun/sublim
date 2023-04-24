import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const today = dayjs(new Date());
const weeklyLabels = [
  dayjs(today).subtract(6, "day").format("MM/DD"),
  dayjs(today).subtract(5, "day").format("MM/DD"),
  dayjs(today).subtract(4, "day").format("MM/DD"),
  dayjs(today).subtract(3, "day").format("MM/DD"),
  dayjs(today).subtract(2, "day").format("MM/DD"),
  dayjs(today).subtract(1, "day").format("MM/DD"),
  dayjs(today).format("MM/DD"),
];

export default React.memo(function CountWordChart(params) {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    setDatasets([
      {
        label: "学習数",
        data: [12, 13, 10, 9, 15, 14, 2],
        borderColor: "rgb(2, 131, 78)",
        backgroundColor: "rgba(2, 130, 80, 0.5",
      },
    ]);
  }, []);
  return <Line data={{ labels: weeklyLabels, datasets: datasets }} />;
});
