import { Link } from "react-router";

import { PageHeader } from "../../src/components/PageHeader";
import { Footer } from "../../src/components/Footer";
import { useTheme } from "../../src/hooks/useTheme";

export default function NotFound() {
  const { theme } = useTheme();

  const title = "Lehte ei leitud | Haapsalu Retro-filmiõhtud";
  const description = "Soovitud lehte ei leitud.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <div className={`app theme-${theme}`}>
        <header>
          <PageHeader />
        </header>

        <main>
          <h2>Lehte ei leitud</h2>
          <p>Sellist lehte meie portaalis ei ole.</p>
          <Link to="/">Tagasi sündmuste kavasse</Link>
        </main>

        <Footer organization="Haapsalu Filmiklubi" />
      </div>
    </>
  );
}
