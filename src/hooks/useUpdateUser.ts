import React, { useState } from "react";
import { updateUser } from "../api/users/update-user";
import useAuth from "./useAuth";

export default function useUpdateUser() {
  const { auth } = useAuth();

  const [newUsername, setNewUsername] = useState(auth.user?.username);
  const [newPassword, setNewPassword] = useState(auth.user?.password);

  const handleUpdateUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewUsername(e.target.value);
  };

  const handleUpdatePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const id = String(auth.user?._id);
    //   const updatedUser = await updateUser(id, newUsername!, newPassword!);

    //   if (updatedUser.ok) {
    //     auth.setUser(updatedUser.result!);
    //   }

    //   console.log(updatedUser);
    // } catch (err) {
    //   console.error(`ERROR: ${err}`);
    // }
  };

  return {
    username: {
      value: newUsername,
      onChange: handleUpdateUsernameChange,
    },
    password: {
      value: newPassword,
      onChange: handleUpdatePasswordChange,
    },
    handleSubmit,
  };
}
