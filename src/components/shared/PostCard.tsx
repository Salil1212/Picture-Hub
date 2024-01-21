import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Models.Document;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3"></div>
        <Link to={`/profile/${post.creator.$id}`}>
          <img
            src={
              post?.creator?.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="creator"
            className="w-12 rounded-full lg:h-12"
          />
        </Link>
        <div className="flex flex-col">
          <p>{post.creator.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
// 3:42:43
