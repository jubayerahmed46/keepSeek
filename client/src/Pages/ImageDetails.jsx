import { useParams } from "react-router";
import PageTitle from "../components/shared/PageTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import Discussion from "../components/Discussion";

function ImageDetails() {
  const { imageId } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/images/image/${imageId}`)
      .then(({ data }) => {
        setImage(data.image);
      });
  }, [imageId]);

  return (
    <div>
      <PageTitle>{image.prompt || "Loading.."} </PageTitle>
      <div className="card m-4  max-w-4xl mx-auto shadow-sm">
        <figure>
          <img src={image?.image_url} className="h-80" />
        </figure>
        <div className="p-3 ">
          <div>
            <h2 className="card-title">{image.category}</h2>
            <p>{image.prompt}</p>
          </div>
        </div>
        {/* discussion panel */}
        <Discussion id={image._id} />
      </div>
    </div>
  );
}

export default ImageDetails;
