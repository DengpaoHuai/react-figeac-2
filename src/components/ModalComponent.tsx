const ModalComponent = ({
  title,
  description,
  onClick,
}: {
  title: string | number;
  description?: string;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "10px",
        border: "1px solid black",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onClick}>Close</button>
    </div>
  );
};

export default ModalComponent;
