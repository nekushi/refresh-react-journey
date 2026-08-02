import useDeleteUser from "../../hooks/useDeleteUser";

export default function DeleteUserForm() {
  const { id, handleSubmit } = useDeleteUser();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-id">
        <span>User id:</span>
        <input id="user-id" type="text" defaultValue={id} />
      </label>
      <br />
      <button type="submit">Delete</button>
    </form>
  );
}
