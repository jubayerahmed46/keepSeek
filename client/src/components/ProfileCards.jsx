import axios from "axios";
import { Link } from "react-router";

function ProfileCards({ userData }) {
  const handlePublicImage = async (id) => {
    // TODO: update the image with public = true
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/api/images/public/${id}`
    );
    alert("Image publisher.");
  };

  return (
    <div className="lg:col-span-2  col-span-1 gap-4 grid grid-cols-3">
      {userData.map((image) => (
        <div className="card m-4  shadow-sm" key={image._id}>
          <Link to={`/image/${image._id}`}>
            <figure>
              <img
                src={
                  image.image_url ||
                  "https://img.daisyui.com/images/blog/daisyui-5.webp"
                }
              />
            </figure>
          </Link>
          <div className="p-3 ">
            <div>
              <h2 className="card-title">{image.category}</h2>
              <p>{image.prompt}</p>
            </div>
            <button
              onClick={() => handlePublicImage(image._id)}
              className="btn btn-primary w-full mt-3.5 "
            >
              Public
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileCards;
