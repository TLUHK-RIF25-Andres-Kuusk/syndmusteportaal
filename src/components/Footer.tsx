import { useTheme } from "../hooks/useTheme";

type FooterProps = {
  organization: string;
};

export const Footer = ({ organization }: FooterProps) => {
  const { theme } = useTheme();

  return (
    <footer className={`footer footer-${theme}`}>
      <p>{organization}</p>
    </footer>
  );
};