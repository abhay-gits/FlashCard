function ConfirmModal({ onConfirm,onCancel }:any) {
  return (
    <div className="fixed bg-black/50  flex justify-center items-center inset-0 z-20">
      <div className="bg-white p-5 rounded-lg w-80 border-1 ">
            <p>Do you want to <strong>Delete ?</strong></p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Confirm
          </button>
        <button
            className="bg-gray-300 px-2 py-1  rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal