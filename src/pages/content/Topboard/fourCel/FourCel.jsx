import style from "./FourCel.module.scss";
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const FourCel = (props) => {
  return (
    <div
      className={`d-inline-flex flex-row flex-wrap flex-xl-nowrap w-xl-100 justify-content-evenly m-3 m-lg-0 ${style.parent4}`}
    >
      <div
        title="امتیاز"
        className={`d-flex flex-column align-items-center justify-content-evenly text-white m-1 m-xl-2 ${style.child4} ${style.cel1}`}
      >
        <h4>امتیاز</h4>
        <h1>A</h1>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}
      >
        <h6>چربی</h6>
        <span className="m-2" style={{ height: 50,width: 50, position: "relative" }}>
          
          <Doughnut
            data={{
              datasets: [
                {
                  label: "Revenue",
                  data: ["65", "35"],
                  backgroundColor: [
                    "rgba(231, 15, 15, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderColor: [
                    "rgba(231, 15, 15, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderRadius: [50, 0],
                  cutout: 17,
                },
              ],
            }}
          />

        </span>
      </div>
      <div
        title="میزان کربوهیدرات"
        className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}
      >
        <h6>کربوهیدرات</h6>
        <span className="m-2" style={{ height: 50,width: 50, position: "relative" }}>
          
          <Doughnut
            data={{
              datasets: [
                {
                  label: "Revenue",
                  data: ["25", "75"],
                  backgroundColor: [
                    "rgba(6, 165, 255, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderWidth: 2,
                  borderColor: [
                    "rgba(6, 165, 255, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderRadius: [50, 0],
                  cutout: 17,
                },
              ],
            }}
          />

        </span>
      </div>
      <div
        title="میزان پروتئین"
        className={`d-flex flex-column align-items-center justify-content-evenly text-success m-1 m-xl-2 ${style.child4}`}
      >
        <h6>پروتئین</h6>
        <span className="m-2" style={{ height: 50,width: 50, position: "relative" }}>
        <Doughnut
            data={{
              datasets: [
                {
                  label: "Revenue",
                  data: ["75", "25"],
                  backgroundColor: [
                    "rgba(49, 201, 24, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderColor: [
                    "rgba(49, 201, 24, 1)",
                    "rgba(241, 241, 241, 1)",
                  ],
                  borderRadius: [50, 0],
                  cutout: 17,
                },
              ],
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default FourCel;
