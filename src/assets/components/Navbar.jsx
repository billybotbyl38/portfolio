import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="nav">
      <div className="logo">Williams Portfolio</div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={active === link.name ? "active" : ""}
              onClick={() => setActive(link.name)}
            >
              {link.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <button className="btn">Resume</button>
    </nav>
  );
}

// import { useState } from "react";
// import "../../styles/Navbar.css";

// export default function Navbar() {
//   const [active, setActive] = useState("home");

//   const links = ["home", "about", "projects", "contact"];

//   return (
//     <nav className="nav">
//       <div className="logo">Williams Portfolio</div>

//       <ul className="nav-links">
//         {links.map((link) => (
//           <li
//             key={link}
//             className={active === link ? "active" : ""}
//             onClick={() => setActive(link)}
//           >
//             {link.toUpperCase()}
//           </li>
//         ))}
//       </ul>

//       <button className="btn">Resume</button>
//     </nav>
//   );
// }
