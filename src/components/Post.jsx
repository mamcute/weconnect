import { Comment, ThumbUp } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import dayjs from "dayjs";

const Post = ({
  fullName = "",
  createAt,
  content,
  image,
  likes = [],
  comments = [],
}) => {
  return (
    <div className="card">
      <div className="flex gap-3 mb-3">
        <Avatar className="!bg-primary-main">
          {fullName?.[0].toUpperCase()}
        </Avatar>
        <div>
          <p className="font-bold">{fullName}</p>
          <p className="text-dark-400 text-sm">
            {dayjs(createAt).format("DD/MM/YYYY HH:MM")}
          </p>
        </div>
      </div>
      <p className="mb-1">{content}</p>
      {image && <img src={image} />}
      <div className="flex justify-between my-2">
        <div className="flex gap-1 text-sm">
          <ThumbUp fontSize="small" className="text-primary-main" />
          <p>{likes.length}</p>
        </div>
        <div>
          <p>{comments.length} comments</p>
        </div>
      </div>
      <div className="border-y border-dark-300 py-1 flex ">
        <Button size="small" className="flex-1 !text-dark-100">
          <ThumbUp fontSize="small" className="mr-1" /> Like
        </Button>
        <Button size="small" className="flex-1 !text-dark-100">
          <Comment fontSize="small" className="mr-1" /> Comment
        </Button>
      </div>
    </div>
  );
};

export default Post;