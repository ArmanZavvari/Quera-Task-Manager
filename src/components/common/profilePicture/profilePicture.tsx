import React from "react";

interface ProfileProps {
  image?: string;
  firstName?: string;
  lastName?: string;
  imgWidth?: string;
  imgHeight?: string;
}

const ProfilePicture: React.FC<ProfileProps> = ({
  image,
  firstName = "A",
  lastName = "B",
  imgHeight = "100px",
  imgWidth = "100px",
}) => {
  if (image) {
    return (
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className={`w-[${imgWidth}] h-[${imgHeight}] rounded-full`}
        />
      </div>
    );
  }

  const randomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const backgroundColor = randomColor();

  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-[${imgWidth}] h-[${imgHeight}] flex items-center justify-center rounded-full ${backgroundColor}`}
      >
        <span className="text-white text-sm font-bold flex justify-center items-center">
          <p>{firstName.charAt(0)}</p>
          <p>{lastName.charAt(0)}</p>
        </span>
      </div>
    </div>
  );
};

export default ProfilePicture;
