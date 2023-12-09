import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
