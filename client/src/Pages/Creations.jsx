import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import axios from "axios";

function Creations() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/image`).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <PageTitle>All Public Images</PageTitle>
      <div className=" w-6xl mx-auto grid grid-cols-4">
        <div className="card m-4  shadow-sm not-first">
          <figure>
            <img
              src={
                images.image_url ||
                "https://img.daisyui.com/images/blog/daisyui-5.webp"
              }
            />
          </figure>
          <div className="p-3 ">
            <div>
              <h2 className="card-title">{images.category}</h2>
              <p>{images.prompt}</p>
            </div>
            <button className="btn btn-primary w-full mt-3.5 ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;
