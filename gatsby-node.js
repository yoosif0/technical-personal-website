const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const tagSet = new Set();

  // =====================================================================================
  // Posts
  // =====================================================================================

  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node;
    const next = i === 0 ? null : posts[i - 1].node;

    post.node.frontmatter.tags.forEach((tag) => {
      tagSet.add(tag);
    });

    createPage({
      path: post.node.fields.slug,
      component: path.resolve("./src/templates/post.js"),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // =====================================================================================
  // Tags
  // =====================================================================================

  const tagList = Array.from(tagSet);
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}/`,
      component: path.resolve("./src/templates/tag.js"),
      context: {
        tag,
      },
    });
  });
};

const createNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // =====================================================================================
  // Slugs
  // =====================================================================================

  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${node.frontmatter.slug}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
};

exports.createPages = createPages;
exports.onCreateNode = createNode;

// Helpers
function slugify(str) {
  if (!str) {
    return "";
  }
  const x = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  if (!x) {
    return "";
  }
  return x.map((x) => x.toLowerCase()).join("-");
}
