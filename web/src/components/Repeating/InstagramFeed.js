import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const InstagramFeed = ({ className }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     instagram: allInstaNode(
  //       sort: { fields: timestamp, order: DESC }
  //       limit: 4
  //     ) {
  //       edges {
  //         node {
  //           id
  //           likes
  //           comments
  //           mediaType
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData(
  //                 layout: CONSTRAINED
  //                 width: 294
  //                 placeholder: BLURRED
  //                 quality: 100
  //               )
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <></>
    // <section className={`${className}`}>
    //   <div className="container">
    //     <div className="font-display tracking-wider leading-5 text-center mb-8 md:mb-10">
    //       @flavorchefcatering
    //     </div>
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    //       {data.instagram.edges.map(({ node }) => {
    //         const { id, likes, comments, localFile } = node;
    //         return (
    //           <a
    //             href={`https://www.instagram.com/p/${id}/`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             key={id}
    //             className="group relative overflow-hidden cursor-pointer"
    //           >
    //             <div className="absolute bg-black bg-opacity-75 z-10 left-0 top-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
    //             <GatsbyImage
    //               className="h-[200px] md:h-[294px]"
    //               image={localFile.childImageSharp.gatsbyImageData}
    //             />
    //             <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center space-x-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-12 group-hover:translate-y-0 transition-all duration-300 ease-linear z-20">
    //               <span className="text-xl">
    //                 <i className="fas fa-heart"></i> {likes == null ? 0 : likes}
    //               </span>
    //               <span className="text-xl">
    //                 <i className="fas fa-comment"></i>{" "}
    //                 {comments == null ? 0 : comments}
    //               </span>
    //             </div>
    //           </a>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
  );
};

export default InstagramFeed;
