import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import PostsByYear from "../components/PostsByYear";

import { getSimplifiedPosts } from "../utils/helpers";
import config from "../utils/config";

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts]);

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <div className="container">
        <h1>Articles</h1>
      </div>
      <section>
        <div className="container">
          <section>
            <PostsByYear data={simplifiedPosts} />
          </section>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
