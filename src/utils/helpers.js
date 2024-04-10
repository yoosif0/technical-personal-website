export function getSimplifiedPosts(posts, options = {}) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags,
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
    ...(options.thumbnails && {
      thumbnail: post.node.frontmatter.thumbnail.childImageSharp.fixed,
    }),
  }));
}

export function slugify(string) {
  if (!string) {
    return "";
  }
  const x = string.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  if (!x) {
    return "";
  }
  return x.map((x) => x.toLowerCase()).join("-");
}
