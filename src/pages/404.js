import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Heading from "@narative/gatsby-theme-novela/src/components/Heading";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Heading.h1>404: Page Not Found</Heading.h1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
