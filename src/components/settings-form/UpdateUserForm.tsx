import useUpdateUser from "../../hooks/useUpdateUser";

export default function UpdateUserForm() {
  const { username, password, handleSubmit } = useUpdateUser();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="update-username">
        <span>Update username:</span>
        <input
          id="update-username"
          type="text"
          value={username.value}
          onChange={username.onChange}
        />
      </label>
      <br />
      <label htmlFor="update-password">
        <span>Update password:</span>
        <input
          id="update-password"
          type="text"
          value={password.value}
          onChange={password.onChange}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}
