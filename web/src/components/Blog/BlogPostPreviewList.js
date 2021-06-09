import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { getBlogUrl } from "../../lib/helpers";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
// import PortableText from "./portableText";
// import { format } from "date-fns";
// import ButtonWithIcon from "../Button/ButtonWithIcon";

function BlogPostPreviewGrid(props) {
  return (
    <div className="group relative">
      <a
        href={getBlogUrl(props.publishedAt, props.slug.current)}
        className="no-underline"
      >
        <div className="overflow-hidden mb-6">
          {props.mainImage && props.mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
              className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
            />
          )}
        </div>
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="font-display tracking-wider leading-5 mb-2 text-gray-400"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="font-heading text-xl font-bold text-gray-600 mb-0">
            {props.title}
          </p>

          {/* {props._rawExcerpt && (
          <>
            <PortableText blocks={props._rawExcerpt} />
          </>
        )} */}

          {/* <ButtonWithIcon
          href={getBlogUrl(props.publishedAt, props.slug.current)}
          text="Read Article"
        /> */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div> */}
        </div>
      </a>
    </div>
  );
}

export default BlogPostPreviewGrid;
