import useAuth from "./useAuth";
import { deleteUser } from "../api/users/delete-user";

export default function useDeleteUser() {
  const { auth, handleLogout } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const deletedUser = await deleteUser(auth.user?._id);

    //   if (!deletedUser.ok) {
    //     throw new Error(deletedUser.message);
    //   }

    //   handleLogout();
    // } catch (err) {
    //   console.error(`ERROR: ${err}`);
    // }
  };

  return {
    id: auth.user?._id,
    handleSubmit,
  };
}
