function ShowImage({ image }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm my-10 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{image.category}</h2>
        <p>{image.prompt}</p>
      </div>
      <figure>
        <img
          src={
            image.image_url ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="Shoes"
        />
      </figure>
      <button className="btn btn-primary text-white mt-3"> Download</button>
    </div>
  );
}

export default ShowImage;

// email: user_email,
// prompt,
// category,
// created_at: new Date().toISOString(),
// image_url: image.url,
// height: image.height,
// weight: image.weight,
