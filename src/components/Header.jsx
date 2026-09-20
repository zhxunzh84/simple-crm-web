// Header component displaying the application title and user information
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "./Header.module.css";
// Import necessary hooks and context for authentication
function Header() {
    // Access the authenticated user and logout function from context
  const { user, logout } = useContext(AuthContext);
  // Render the header with user information and logout button
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Simple CRM</h1>

      <div className={styles.userArea}>
        <span className={styles.userName}>{user.name}</span>
        <span
        className={`${styles.roleBadge} ${
            user.role === "admin"
            ? styles.roleBadgeAdmin
            : styles.roleBadgeUser
        }`}
>
  {user.role}
</span>
        <button
          className={styles.logoutBtn}
          onClick={logout}
        >
          Sign out
        </button>
      </div>
    </header>
  );
}

export default Header;