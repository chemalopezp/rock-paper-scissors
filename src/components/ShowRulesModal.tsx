import { useState, useRef, useEffect } from "react";

const ShowRulesModal: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="p-4 uppercase absolute bottom-10 right-10 border-gray-500 border-2 rounded-xl shadow-lg"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        Rules
      </button>
      {isModalOpen && (
        <dialog id="rules" ref={modalRef} className="modal">
          <div className="p-8 modal-content bg-white">
            <h2 className="p-4 text-2xl font-bold uppercase text-sky-800 text-left">
              Rules
            </h2>
            <button
              className="modal-close-btn absolute right-4 top-4"
              onClick={handleCloseModal}
            >
              <img src="/icon-close.svg" />
            </button>
            <img src="/image-rules.svg" />
          </div>
        </dialog>
      )}
    </div>
  );
};
export default ShowRulesModal;
