import React, { useMemo } from "react";
import { Link } from "gatsby";

const Cell = ({ node }) => {
  const formattedDate = useMemo(() => {
    const dateArr = node.date.split(" ");
    dateArr.pop();
    dateArr[0] = dateArr[0].slice(0, 3);
    return dateArr.join(" ").slice(0, -1);
  }, [node.date]);

  return (
    <div className="post" key={node.id}>
      <Link to={node.slug}>
        <div className="post-row">
          <time>{formattedDate}</time>
          <h3>{node.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default function Posts({ data }) {
  return (
    <div className="posts">
      {data.map((node) => (
        <Cell key={node.id} node={node} />
      ))}
    </div>
  );
}
