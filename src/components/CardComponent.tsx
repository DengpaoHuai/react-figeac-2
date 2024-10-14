type CardComponentProps = {
  title: string | number;
  description?: string;
  children?: React.ReactNode;
};

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description = "default",
  children,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default CardComponent;
