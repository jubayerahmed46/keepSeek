import { useParams } from "react-router";
import PageTitle from "../components/shared/PageTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function ImageDetails() {
  const { imageId } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/image`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <PageTitle>Prompt</PageTitle>
      <div className="card m-4  w-4xl mx-auto shadow-sm">
        <figure>
          <img
            src={
              image?.image_url ||
              "https://img.daisyui.com/images/blog/daisyui-5.webp"
            }
          />
        </figure>
        <div className="p-3 ">
          <div>
            <h2 className="card-title">{"image.category"}</h2>
            <p>{"image.prompt"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
