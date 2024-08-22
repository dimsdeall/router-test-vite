import { Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
    // navigate(url);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleNavigate("/home")}>Home</li>
        <li onClick={() => handleNavigate("/about")}>About</li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
