import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { invoiceListState } from "../../store";

const DeleteStorageButton = (): JSX.Element => {
  // Hooks
  const setInvoiceList = useSetRecoilState(invoiceListState);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  // Actions
  const deleteStorage = () => {
    if (confirmDelete) {
      setInvoiceList([]);
      setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <button className="button is-danger" type="button" onClick={deleteStorage}>
      {confirmDelete ? "ARE YOU SURE?" : "DELETE STORAGE"}
    </button>
  );
};

export default DeleteStorageButton;
