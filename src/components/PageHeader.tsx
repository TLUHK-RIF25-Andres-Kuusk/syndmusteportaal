import { NavLink } from "react-router";

export const PageHeader = () => {
  return (
    <div className="page-header">
      <h1>Haapsalu Retro-filmiõhtud</h1>

      <p>
        Vanad head filmid suurel ekraanil, klassika,
        kultusfilmid ja unustamatud kinoõhtud.
      </p>

      <p>Korraldaja: Haapsalu Filmiklubi</p>

      <nav className="main-nav" aria-label="Põhimenüü">
        <NavLink to="/" end>
          Kava
        </NavLink>

        <NavLink to="/korraldajast">
          Korraldajast
        </NavLink>
      </nav>
    </div>
  );
};