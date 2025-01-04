import illustration_article from "../assets/illustration-article.svg";
import image_avatar from "../assets/image-avatar.webp";

const BlogCard = () => {
  return (
    <div className="bg-black absolute rounded-3xl">
      <div className="bg-white relative bottom-[8px] right-[8px] w-[336px] p-6 border border-black rounded-3xl">
        {/* Image */}
        <img className="rounded-2xl mb-6" src={illustration_article} alt="" />
        {/* Tag */}
        <h2 className="bg-[#F4CF4D] w-fit px-3 py-1 rounded text-sm font-extrabold mb-3">
          Learning
        </h2>
        {/* Date */}
        <p className="text-sm font-medium mb-3">Published 21 Dec 2023</p>
        {/* Title */}
        <h1 className="text-2xl font-extrabold mb-3">HTML & CSS foundations</h1>
        {/* Description */}
        <p className="text-[#6B6B6B] font-medium mb-6">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img className="w-[32px]" src={image_avatar} alt="" />
          <h2 className="text-sm font-extrabold">Greg Hooper</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
