import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import axios from "axios";
import { Link } from "react-router";

function Creations() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/images`).then(({ data }) => {
      setImages(data.data);
    });
  }, []);
  return (
    <div>
      <PageTitle>All Public Images</PageTitle>
      <div className=" w-6xl mx-auto grid grid-cols-4">
        {images.map((i) => (
          <div key={i.prompt} className="card m-4  shadow-sm not-first">
            <figure>
              <img src={i.image_url} />
            </figure>
            <div className="p-3 ">
              <div>
                <h2 className="card-title">{i.category}</h2>
                <p>{i.prompt}</p>
              </div>
              <Link to={`/image/${i._id}`}>
                <button className="btn btn-primary w-full mt-3.5 ">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creations;
