import { Link } from "react-router";

import { PageHeader } from "../../src/components/PageHeader";
import { ThemeToggle } from "../../src/components/ThemeToggle";
import { Footer } from "../../src/components/Footer";
import { useTheme } from "../../src/hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  const title = "Korraldajast | Haapsalu Retro-filmiõhtud";
  const description =
    "Tutvu Haapsalu Filmiklubi ja retro-filmiõhtutega.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <div className={`app theme-${theme}`}>
        <header>
          <PageHeader />
          <ThemeToggle />
        </header>

        <main>
          <h2>Korraldajast</h2>
          <p>
            Haapsalu Filmiklubi korraldab retro-filmiõhtuid,
            tuues vanad filmiklassikud taas suurele ekraanile.
          </p>
          <Link to="/">Tagasi sündmuste kavasse</Link>
        </main>

        <Footer organization="Haapsalu Filmiklubi" />
      </div>
    </>
  );
}
