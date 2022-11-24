import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import  maunaloaco2 from "./data/maunaloaco2.json";
function App() {
  const data = {
    datasets: [
      {
        label: "emt",
        data: [...maunaloaco2],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "year",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "mean",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "maunaloaCO2levels",
      },
    },
    scales: {
      year: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="App">
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}


export default App;
