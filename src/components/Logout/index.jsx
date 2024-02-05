import { logout } from "@/state/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Modal } from "@mui/material";

const Logout = ({ isOpen, closeLogoutModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Modal open={isOpen} onClose={closeLogoutModal}>
      <div className="absolute right-0 mt-14 mr-10 px-1">
        <div className="flex justify-end">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;
