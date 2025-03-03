import { useContext, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import ShowImage from "../components/ShowImage";

const Create = () => {
  const { user, login } = useContext(AuthContext);
  const [image, setImage] = useState({});
  const [generating, setGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("");

  const options = [
    "painting",
    "animated-image",
    "walpaper",
    "poster",
    "digital-art",
    "realistic-image",
  ];

  const checkUser = () => {
    if (!user) {
      Swal.fire({
        title: "Please Login",
        text: "Join as a Creator with One Click",
        imageUrl: "https://img.icons8.com/?size=100&id=szz75vJoS2OI&format=gif",
        imageHeight: "80px",
        imageAlt: "Custom image",
        showCancelButton: true,
        confirmButtonText: `Login using Google`,
        confirmButtonColor: "#149b9b",
      }).then((res) => {
        if (res.isConfirmed) {
          login()
            .then((res) => {
              const user = res.user;
              console.log(user);
              Swal.fire("success", "Welcome", "success");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
      return false;
    } else {
      return true;
    }
  };
  const validatePromptAndCategory = (prompt, category) => {
    if (!category) {
      Swal.fire(
        "Select Category",
        "Select a Category from the dropdown",
        "error"
      );
      return false;
    }

    if (!prompt) {
      Swal.fire("Write a Prompt", "Write a prompt in the input", "error");
      return false;
    }
    if (prompt.trim().length < 20) {
      Swal.fire(
        "Invalid Prompt",
        "make your prompt bigger (minimum 20 character)",
        "error"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    try {
      setGenerating(true);
      if (!checkUser()) return;
      if (!validatePromptAndCategory(prompt, category)) return;

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/images`,
        {
          prompt,
          category,
          user_email: user.email,
        }
      );

      console.log(data.image);

      setImage(data.image);
    } catch (error) {
    } finally {
      setGenerating(false);
    }
  };
  return (
    <div>
      <PageTitle>🌱Let&apos;s Generate an image 🐦‍🔥</PageTitle>

      <div className="w-11/12 mx-auto py-10">
        <div className="flex justify-center py-5">
          <img
            src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
            alt=""
          />
        </div>
        <div className="join w-full justify-center flex-wrap">
          <div className="flex-1">
            <div className="">
              <input
                name="prompt"
                className="input w-full input-bordered join-item outline-none focus:outline-none focus:border-primary"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write , Whats on your Mind🧠🧠"
              />
            </div>
          </div>
          <select
            name="category"
            className="select select-bordered join-item max-w-max outline-none focus:outline-none focus:border-primary"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="indicator">
            {generating ? (
              <button className="btn join-item btn-primary">
                <span className="loading loading-spinner loading-sm"></span>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="btn join-item btn-primary"
              >
                Create
              </button>
            )}
          </div>
        </div>
        <ShowImage image={image} />
      </div>
    </div>
  );
};

export default Create;
