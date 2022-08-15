import React, { useState, useEffect } from "react";
import { NavLink } from ".";
import { userService } from "services";
import Link from "next/link";

function Nav() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  if (!user) return null;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <Link href="/" className="nav-item nav-link">
          <a>Home</a>
        </Link>
        <a
          onClick={logout}
          className="nav-item nav-link"
          style={{ cursor: "pointer" }}
        >
          Logout
        </a>
      </div>
    </nav>
  );
}

export { Nav };
