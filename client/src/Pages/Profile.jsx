import { useContext, useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

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

  console.log(userData);

  // {
  //     "_id": "67c5aec2a3e99d513c257ede",
  //     "prompt": "playing freefire game in Oppo a5s mobile phone ",
  //     "category": "animated-image",
  //     "created_at": "2025-03-03T13:29:38.129Z",
  //     "image_url": "http://res.cloudinary.com/deollyroq/image/upload/v1741008577/hhwsf8mc1hw2hsxc7loz.png"
  // }

  return (
    <div>
      <PageTitle>
        <span className="uppercase">My Profile</span>
      </PageTitle>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3  grid-cols-2 gap-10">
        {/* user generated and posted cards */}
        <div className="lg:col-span-2  col-span-1 gap-4 grid grid-cols-3">
          {userData.map((image) => (
            <div key={image._id} className="card m-4  shadow-sm">
              <figure>
                <img
                  src={
                    image.image_url ||
                    "https://img.daisyui.com/images/blog/daisyui-5.webp"
                  }
                />
              </figure>
              <div className="p-3 ">
                <div>
                  <h2 className="card-title">{image.category}</h2>
                  <p>{image.prompt}</p>
                </div>
                <button className="btn btn-primary w-full mt-3.5 ">
                  Public
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* user info */}
        <div>
          <div className="card m-4  shadow-sm">
            <figure>
              <img
                className="rounded-full w-52 aspect-square object-cover"
                src="https://img.daisyui.com/images/blog/daisyui-5.webp"
              />
            </figure>
            <div className="p-5">
              <h2 className="card-title">{user.displayName}</h2>
              <p>One of the user of keepSeek.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
