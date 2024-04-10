import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Suggested from "../components/Suggested";

import config from "../utils/config";
import { slugify } from "../utils/helpers";

export default function PostTemplate({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { tags, thumbnail, title, description, date } = post.frontmatter;

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <div className="container">
        <article>
          <header className="article-header">
            <div className="container">
              <div className="thumb">
                {thumbnail && (
                  // <Img
                  //   fixed={thumbnail.childImageSharp.fixed}
                  //   className="post-thumbnail"
                  // />
                  <div> </div>
                )}
                <div>
                  <h1>{title}</h1>
                  <div className="post-meta">
                    <div>
                      By <Link to="/me">Yoosif Sherif</Link> on{" "}
                      <time>{date}</time>
                    </div>
                    {tags && (
                      <div className="tags">
                        {tags.map((tag) => (
                          <Link
                            key={tag}
                            to={`/tags/${slugify(tag)}`}
                            className={`tag-${tag}`}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {description && <p className="description">{description}</p>}
          </header>
          <div
            className="article-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
      <div className="container">
        <Suggested previous={previous} next={next} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
