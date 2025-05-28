import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="d-flex flex-column text-decoration-none">
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? ".text-primary-700" : "";
          }}
        >
          profile{profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
