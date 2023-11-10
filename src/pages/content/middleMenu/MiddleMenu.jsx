import style from "./MiddleMenu.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';

const MiddleMenu = () => {
  return (
    <div className={`w-100 container-fluid d-lg-none ${style.wrapper}`}>
      <div className={`row ms-4 me-4 ${style.fild}`}>
        <input
          className={`col-7 border-0 bg-transparent p-2`}
          placeholder="مقدار"
        ></input>
        <input
          className={`col-5 border-0 border-end text-center bg-transparent p-2`}
          placeholder="گرم"
        ></input>
      </div>
      <div className={`row p-3 bg-white ${style.menu}`}>
        <div className="col-3 text-center">
          <span className={`${style.span}`}>
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 297.001 297.001"
            >
              <g>
                <g>
                  <g>
                    <path d="M273.736,0.001H23.264C10.436,0.001,0,10.436,0,23.264v23.789C0,59.88,10.436,70.316,23.264,70.316h250.473     c12.827,0,23.264-10.435,23.264-23.263V23.264C297,10.436,286.564,0.001,273.736,0.001z" />
                    <path d="M273.736,113.344H23.264C10.436,113.344,0,123.779,0,136.605v23.789c0,12.827,10.436,23.263,23.264,23.263h250.473     c12.827,0,23.264-10.435,23.264-23.263v-23.789C297,123.779,286.564,113.344,273.736,113.344z" />
                    <path d="M273.736,226.686H23.264C10.436,226.686,0,237.121,0,249.949v23.789C0,286.565,10.436,297,23.264,297h250.473     C286.564,297,297,286.565,297,273.737v-23.789C297,237.121,286.564,226.686,273.736,226.686z" />
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <p>منو</p>
        </div>

        <div className="col-3 text-center">
          <span className={`${style.span}`}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18H9"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <p>خانه</p>
        </div>

        <div className="col-3 text-center">
          <span className={`${style.span}`}>
            <svg width="40px" height="40px" viewBox="0 0 1024 1024">
              <path
                fill="#000000"
                d="M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
              />
            </svg>
          </span>
          <p>رژیم من</p>
        </div>

        <div className="col-3 text-center">
          <span className={`${style.span}`}>
            <svg width="40px" height="40px" viewBox="0 0 20 20" version="1.1">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-420.000000, -2159.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673"
                      id="profile-[#1335]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <p>پروفایل</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleMenu;



