import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Guides from "../components/Guides";
import Projects from "../components/Projects";

import { getSimplifiedPosts } from "../utils/helpers";
import config from "../utils/config";

import projects from "../data/projects";
import speaking from "../data/speaking";
import outsideArticles from "../data/outside-articles";

export default function BlogIndex({ data }) {
  const latest = data.latest.edges;
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest]);

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  );

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <div className="container index">
        <Section title="Latest Articles" button>
          <Posts data={simplifiedLatest} />
        </Section>
        <Section title="External Articles">
          <Guides data={outsideArticles} frontPage />
        </Section>
        <Section title="Courses">
          <Guides data={speaking} frontPage />
        </Section>
        <Section title="Open Source Projects">
          <Projects data={projects} />
        </Section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(limit: 5, sort: { frontmatter: { date: DESC } }) {
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
