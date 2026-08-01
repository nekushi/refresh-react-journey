import useAuth from "../../../hooks/useAuth";
import UpdateUserForm from "../../../components/settings-form/UpdateUserForm";

export default function SettingsPage() {
  const { auth } = useAuth();

  return (
    <div>
      <h1>This is settings page. Welcome, {auth?.user?.username}</h1>
      <UpdateUserForm />
    </div>
  );
}
