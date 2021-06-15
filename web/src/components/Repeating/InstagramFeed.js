import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const InstagramFeed = ({ className }) => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       instagram: allInstaNode(
  //         sort: { fields: timestamp, order: DESC }
  //         limit: 4
  //       ) {
  //         edges {
  //           node {
  //             id
  //             likes
  //             comments
  //             mediaType
  //             localFile {
  //               childImageSharp {
  //                 fluid(maxWidth: 400, quality: 100) {
  //                   ...GatsbyImageSharpFluid_withWebp
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);

  return (
    <section className={`${className}`}>
      <div className="container">
        <div className="font-display tracking-wider leading-5 text-center mb-8 md:mb-10">
          @flavorchefcatering
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* {data.instagram.edges.map(({ node }) => {
            const { id, likes, comments, localFile } = node;
            return (
              <InstagramPost
                href={`https://www.instagram.com/p/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <div className="overlay"></div>
                <GatsbyImage
                  className="h-full"
                  image={localFile.childImageSharp.fluid}
                />
                <div className="content">
                  <span className="post-details">
                    <i className="fas fa-heart"></i> {likes == null ? 0 : likes}
                  </span>
                  <span className="post-details">
                    <i className="fas fa-comment"></i>{" "}
                    {comments == null ? 0 : comments}
                  </span>
                </div>
              </InstagramPost>
            );
          })} */}

          <div
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
            <img
              className="h-full"
              src="http://via.placeholder.com/294x294?text=FPO"
            />
            <div className="absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 transform translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-xl mx-4">
                <i className="fas fa-heart"></i> 20
              </span>
              <span className="post-details">
                <i className="fas fa-comment"></i>
                10
              </span>
            </div>
          </div>

          <div
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
            <img
              className="h-full"
              src="http://via.placeholder.com/294x294?text=FPO"
            />
            <div className="absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 transform translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-xl mx-4">
                <i className="fas fa-heart"></i> 20
              </span>
              <span className="post-details">
                <i className="fas fa-comment"></i>
                10
              </span>
            </div>
          </div>

          <div
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
            <img
              className="h-full"
              src="http://via.placeholder.com/294x294?text=FPO"
            />
            <div className="absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 transform translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-xl mx-4">
                <i className="fas fa-heart"></i> 20
              </span>
              <span className="post-details">
                <i className="fas fa-comment"></i>
                10
              </span>
            </div>
          </div>

          <div
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
            <img
              className="h-full"
              src="http://via.placeholder.com/294x294?text=FPO"
            />
            <div className="absolute flex items-center justify-center z-20 left-0 top-0 right-0 bottom-0 text-white opacity-0 transform translate-y-12 transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-xl mx-4">
                <i className="fas fa-heart"></i> 20
              </span>
              <span className="post-details">
                <i className="fas fa-comment"></i>
                10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
