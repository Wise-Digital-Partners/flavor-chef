import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import Divider from "../components/Repeating/Divider";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const biteSizedDesserts = [
    {
      name: "Meyer Lemon Bars",
      description: "shortbread crust, meyer lemon, powdered sugar",
    },
    {
      name: "Almond Chocolate Chip Cookies",
      description: "almond meal, coconut oil, chocolate chips",
    },
    {
      name: "Coconut Macaroons",
      description: "meringue, shredded coconut",
    },
    {
      name: "Vanilla Bean Creme Brulee",
      description: "vanilla bean, sweet cream, caramelized sugar",
    },
    {
      name: "Espresso Bean Creme Brulee",
      description: "espresso, sweet cream, caramelized sugar",
    },
    {
      name: "Seasonal Fruit Cobbler",
      description: "seasonal fruit, local granola, whipped cream",
    },
    {
      name: "Tiramisu Cups",
      description: "lady fingers, espresso, cocoa powder, marscapone",
    },
    {
      name: "Salted Caramel Brownies",
      description: "chocolate brownies, sea salt, caramel",
    },

    {
      name: "Seasonal Assorted Cookies",
      description: "chef’s selection, seasonal",
    },
    {
      name: "S’mores Bars",
      description: "graham cracker, chocolate ganache, toasted marshmallow",
    },
    {
      name: "Mini Fruit Tarts",
      description: "pie shell, lemon custard, fresh fruit, apricot glaze",
    },
    {
      name: "Cheesecake Bites",
      description: "chef’s selection, seasonal",
    },
    {
      name: "Creme Puffs",
      description: "pat a choux, whipped cream, powdered sugar",
    },
    {
      name: "Seasonal Trifle",
      description:
        "seasonal fruit compote, pound cake, lemon custard, whipped cream",
    },
  ];

  const cupcakes = [
    {
      name: "Double Chocolate",
      description:
        "chocolate cupcake, dutch cocoa buttercream frosting, chocolate sprinkles",
    },
    {
      name: "S’mores",
      description:
        "graham cracker crust, chocolate cupcake, toasted marsh- mallow fluff",
    },
    {
      name: "Carrot Cake",
      description:
        "shredded carrot, coconut, golden raisins, cream cheese frosting",
    },
    {
      name: "Funfetti",
      description:
        "funfetti cupcake, vanilla bean buttercream frosting, rain- bow sprinkles",
    },
  ];

  const liveActionStations = [
    {
      name: "Banana Fosters",
      description: "banana, brown sugar, ice cream, dark rum, almond cookie",
    },
    {
      name: "Build Your Own S’mores",
      description:
        "3 varieties of the classic graham cracker, marshmallow, chocolate combination (ask your coordinator about our favorites)",
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Dessert Catering Menu | Flavor Chef Catering"
        description="Serve up scrumptious sweet treats at your next event. You'll find heavenly choices in the dessert catering menu from Flavor Chef Catering."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-36 md:pt-64 pb-36 md:pb-64"
        textAlignment="text-center"
        textMaxWidth=""
      >
        <div className="text-white font-display text-xl tracking-wider leading-5 mb-4">
          Menu
        </div>
        <h1 className="text-white mb-0">Sweet Treats</h1>
      </HeroFullWidth>

      <div className="pt-14 md:pt-18">
        <section id="passed-hors-deouvres" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Bite Sized Desserts</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {biteSizedDesserts.slice(0, 7).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {biteSizedDesserts.slice(7).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="cupcakes" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Cupcakes</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {cupcakes.slice(0, 2).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {cupcakes.slice(2).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="live-action-stations" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Live Action Stations</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {liveActionStations.slice(0, 1).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {liveActionStations.slice(1).map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      <p className="font-display text-xl text-gray-600 tracking-wider leading-6 mb-2">
                        {item.name}
                      </p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Divider />

      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Sweet Treats Menu.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Sweet Treats Menu.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Sweet Treats Menu/1.0 Sweet Treats Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Sweet Treats Menu/1.0 Sweet Treats Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuIcon: file(relativePath: { eq: "global/menu.svg" }) {
      publicURL
    }
    addOnIcon: file(relativePath: { eq: "menus/Add-on Icon.svg" }) {
      publicURL
    }
  }
`;
export default Page;
