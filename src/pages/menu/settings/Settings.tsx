import useAuth from "../../../hooks/useAuth";
import UpdateUserForm from "../../../components/settings-form/UpdateUserForm";
import DeleteUserForm from "../../../components/settings-form/DeleteUserForm";

export default function SettingsPage() {
  const { auth } = useAuth();

  return (
    <div>
      <h1>This is settings page. Welcome, {auth?.user?.username}</h1>
      <UpdateUserForm />
      <DeleteUserForm />
    </div>
  );
}
