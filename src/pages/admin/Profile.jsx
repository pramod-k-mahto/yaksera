import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

function Profile() {
  const { user } = useContext(UserContext);

  const data = user?.data?.loggedInUser || user?.data;

  if (!data) {
    return <div className="p-10">Loading profile...</div>;
  }

  return (
    <div className="relative mt-5">

      {/* Cover Image */}
      <div
        className="h-[300px] w-full bg-center bg-cover opacity-40"
        style={{
          backgroundImage: `url(${data.coverImage || "/default-cover.jpg"})`,
        }}
      ></div>

      {/* Profile Section */}
      <div className="relative -mt-16 flex flex-col items-center">

        <img
          className="w-32 h-32 rounded-full border-4 border-white object-cover"
          src={data.profile || "/default-avatar.png"}
          alt="profile"
        />

        <div className="mt-4 text-center space-y-1">
          <h1 className="text-xl font-semibold">{data.name}</h1>
          <p className="text-gray-600">{data.phone || "N/A"}</p>
          <p className="text-gray-600 capitalize">{data.role || "user"}</p>
          <p className="text-gray-500">{data.email}</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;