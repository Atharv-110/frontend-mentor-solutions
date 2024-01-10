import Image from "next/image";
import Illustration from "./assets/illustration-article.svg";
import Avatar from "./assets/image-avatar.webp";

const BlogPreviewCard = () => {
  return (
    <div className="max-w-[350px] p-5 border rounded-2xl border-black flex flex-col gap-3 shadow-[rgba(0,0,0,1)_8px_8px]  hover:shadow-[rgba(0,0,0,1)_15px_15px] ease-in-out duration-200">
      <Image
        src={Illustration}
        width={200}
        height={200}
        alt="illustration"
        className="w-full rounded-xl"
      />
      <h3 className="px-2 py-1 bg-yellow-400 w-fit rounded-md">Learning</h3>
      <p className="text-sm font-medium">Published 21 Dec 2023</p>
      <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer">
        HTML & CSS foundations
      </h1>
      <p className="text-sm text-gray-500 font-medium">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex items-center gap-3">
        <Image src={Avatar} width={50} height={50} alt="avatar" />
        <h3 className="font-bold text-sm">Greg Hooper</h3>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
