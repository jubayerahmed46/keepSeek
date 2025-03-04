function UserInfo({ user }) {
  return (
    <div>
      {" "}
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
  );
}

export default UserInfo;
