import style from "./Coleries.module.scss";
import { Chart as ChartJs,defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Coleries = () => {
  return (
    <div
      className={`d-inline-flex flex-column align-items-center ${style.colBox}`}
    >
      <h2 className={`mb-3`}>کالری</h2>
      <div className="m-3" style = {{height: 120, position: "relative"}}>
      <Doughnut
    data={
      {
      
      datasets: [
        {
          label: "Revenue",
          data: ["65", "35"],
          backgroundColor:[
            "rgba(245, 158, 11, 1)",
            "rgba(241, 241, 241, 1)"
          ],
          borderColor:[
            "rgba(245, 158, 11, 1)",
            "rgba(241, 241, 241, 1)"
          ],
          borderRadius: [50,0],
          cutout: 50
        },
      ],
    }
  }/>
      </div>
    </div>
  );
};

export default Coleries;
