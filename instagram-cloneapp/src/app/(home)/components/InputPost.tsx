

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose }) => {
  if (!isOpen) return null; // Jika modal tidak terbuka, tidak render apa pun

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-lg font-medium text-gray-900">Input Data</h2>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose} // Tutup modal saat tombol Cancel diklik
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;