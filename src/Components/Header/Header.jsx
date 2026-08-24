import { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  ChevronDown,
} from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>

        {/* Logo */}
        <img
          src={logo}
          alt="Netflix Logo"
          className={styles.logo}
        />

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/new-popular">
            New & Popular
          </Link>
          <Link to="/my-list">
            My List
          </Link>
          <Link to="/browse-language">
            Browse by Language
          </Link>
        </nav>

        {/* Right Section */}
        <div className={styles.rightSection}>

          {/* Search */}
          <div className={styles.search}>
            <button
              onClick={() =>
                setShowSearch(!showSearch)
              }
              aria-label="Search"
            >
              <Search />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search movies and TV shows..."
                autoFocus
              />
            )}
          </div>

          {/* Notifications */}
          <div className={styles.notifications}>
            <button aria-label="Notifications">
              <Bell />
            </button>

            <span>0</span>
          </div>

          {/* Profile */}
          <div className={styles.profile}>
            <button
              onClick={() =>
                setShowProfile(!showProfile)
              }
              aria-label="Profile"
            >
              <User />
              <ChevronDown />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className={styles.dropdown}>
                <Link to="/profile">
                  Profile
                </Link>

                <Link to="/account">
                  Account
                </Link>

                <Link to="/settings">
                  Settings
                </Link>

                <Link to="/logout">
                  Logout
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;