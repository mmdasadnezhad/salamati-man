import style from "./HeaderDiv.module.scss";
import Logo from "./logo/Logo";
import HeaderLists from "./HeaderLists/HeaderLists";
import Login from "./loginButt/Login";

const HeaderDiv = () => {
  return (
    <container fluid>
        <row>
            <div className={`text-center row align-items-center justify-content-between ${style.header}`}>

              <Logo />
              <HeaderLists />
              <Login />

            </div>
        </row>
    </container>
  );
};

export default HeaderDiv;
