type CardComponentProps = {
  header: string;
  footer: string;
  children?: React.ReactNode;
};

const CardQuelqueChose: React.FC<CardComponentProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div>
      <h1>{header}</h1>
      {children}
      <p>{footer}</p>
    </div>
  );
};

export default CardQuelqueChose;
