const Card = ({ img, description, linkTo, colorMode }) => {
  return (
    <div
      className={`
        w-full flex flex-col items-center my-2 rounded-md p-1
        ${
          colorMode
            ? "bg-[#a3a1a1] text-[#161515]"
            : "bg-[#2c2a2a] text-[#ffff]"
        }
      `}
    >
      {/* Image container: Use aspect-ratio box for consistent image display */}
      <div className="relative w-full pb-[75%] overflow-hidden rounded-md">
        {" "}
        {/* 4:3 aspect ratio (height is 75% of width) */}
        <img
          src={img}
          alt={description || "Project Image"}
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
      </div>

      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer"
        className="text-center font-medium mt-2 px-2 pb-2 block w-full truncate hover:whitespace-normal hover:overflow-visible" // Added styling for description
      >
        {description}
      </a>
    </div>
  );
};

export default Card;
