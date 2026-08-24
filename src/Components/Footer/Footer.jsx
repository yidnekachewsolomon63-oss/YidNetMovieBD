import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  const footerColumns = [
    [
      "Audio Description",
      "Investor Relations",
      "Legal Notices",
    ],
    [
      "Help Centre",
      "Jobs",
      "Cookie Preferences",
    ],
    [
      "Gift Cards",
      "Terms of Use",
      "Corporate Information",
    ],
    [
      "Media Centre",
      "Privacy",
      "Contact Us",
    ],
  ];

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* ==============================
            SOCIAL MEDIA
        ============================== */}

        <div className={styles.socialLinks}>

          <a
            href="#"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

        </div>


        {/* ==============================
            FOOTER LINKS
        ============================== */}

        <div className={styles.footerLinks}>

          {footerColumns.map((column, index) => (

            <div
              className={styles.column}
              key={index}
            >

              {column.map((link) => (

                <a
                  href="#"
                  key={link}
                >
                  {link}
                </a>

              ))}

            </div>

          ))}

        </div>


        {/* ==============================
            COPYRIGHT
        ============================== */}

        <p className={styles.copyright}>
          © 1997–2026 Netflix, Inc.
        </p>

      </div>

    </footer>
  );
}

export default Footer;