import styled from "styled-components";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  subtitle?: string;
  maxWidth?: string;
  side?: React.ReactNode;
  children?: React.ReactNode;
};

export function Card({ title, subtitle, maxWidth, side, children }: CardProps) {
  const Card = styled.section`
    max-width: ${maxWidth};
  `;

  const titleSectionMarkup = (
    <div className={styles.TitleSection}>
      <span className={styles.Title}>{title}</span>
      <span className={styles.Subtitle}>{subtitle}</span>
    </div>
  );

  const headerMarkup = (
    <div className={styles.Header}>
      {titleSectionMarkup}
      <div className={styles.Side}>{side}</div>
    </div>
  );

  return (
    <Card className={styles.Card}>
      {headerMarkup}
      <div className={styles.Main}>{children}</div>
    </Card>
  );
}
