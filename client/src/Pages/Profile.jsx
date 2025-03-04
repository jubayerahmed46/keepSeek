import { useContext, useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router";
import UserInfo from "../components/userInfo";
import ProfileCards from "../components/ProfileCards";

function Profile() {
  const { user, loading } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/images/${user.email}`)
        .then(({ data }) => setUserData(data.data));
    }
  }, [user]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <PageTitle>
        <span className="uppercase">My Profile</span>
      </PageTitle>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3  grid-cols-2 gap-10">
        {/* user generated and posted cards */}
        <ProfileCards userData={userData} />
        {/* user info */}
        <UserInfo user={user} />
      </div>
    </div>
  );
}

export default Profile;
