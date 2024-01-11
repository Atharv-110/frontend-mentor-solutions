import Image from "next/image";
import Illustration from "./assets/illustration-article.svg";
import Avatar from "./assets/image-avatar.webp";

const BlogPreviewCard = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-[#f4d04e]">
      <div className="font-figtree bg-white h-fit text-[#121212] max-w-[340px] p-5 border rounded-2xl border-black flex flex-col gap-3 shadow-[rgba(0,0,0,1)_8px_8px]  hover:shadow-[rgba(0,0,0,1)_15px_15px] ease-in-out duration-200">
        <Image
          src={Illustration}
          width={200}
          height={200}
          alt="illustration"
          className="w-full rounded-xl"
        />
        <p className="px-2 py-1 bg-[#f4d04e] font-[600] w-fit rounded-md">
          Learning
        </p>
        <p className="text-sm font-[600]">Published 21 Dec 2023</p>
        <h1 className="text-xl md:text-2xl font-[800] hover:text-[#f4d04e] cursor-pointer ease-in-out duration-200">
          HTML & CSS foundations
        </h1>
        <p className="text-sm text-[#808080] font-[600]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-3">
          <Image src={Avatar} width={40} height={40} alt="avatar" />
          <h2 className="font-[800] text-sm">Greg Hooper</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
