import { createContext, useContext, useState } from "react";
import ModalComponent from "../components/ModalComponent";

type ModalContextType = {
  openModal: (title: string, description: string) => void;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

export const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      {showModal && (
        <ModalComponent
          title={title}
          description={description}
          onClick={() => {
            closeModal();
          }}
        ></ModalComponent>
      )}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
