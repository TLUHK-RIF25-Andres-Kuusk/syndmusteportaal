import { NavLink } from "react-router";

export const PageHeader = () => {
  return (
    <div className="page-header">
      <h1>Haapsalu Retro-filmiÃµhtud</h1>

      <p>
        Vanad head filmid suurel ekraanil, klassika,
        kultusfilmid ja unustamatud kinoÃµhtud.
      </p>

      <p>Korraldaja: Haapsalu Filmiklubi</p>

      <nav className="main-nav" aria-label="PÃµhimenÃ¼Ã¼">
        <NavLink to="/" end>
          Kava
        </NavLink>

        <NavLink to="/korraldajast">
          Korraldajast
        </NavLink>

        <NavLink to="/admin">Haldus</NavLink>
      </nav>
    </div>
  );
};