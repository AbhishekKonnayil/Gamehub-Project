import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  return <div>profilePage{params.profileId}</div>;
};

export default ProfilePage;
