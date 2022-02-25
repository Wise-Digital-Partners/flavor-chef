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

  const appetizers = [
    {
      name: "Lollipop Lamb Chop",
      description: "seared lamb chop, rosemary, garlic, mint-pomeganate glaze",
    },
    {
      name: "Shrimp Lime Ceviche ",
      description:
        "shrimp, cherry tomato, cucumber, avocado, red onion, micro cilantro, tostada",
    },
    {
      name: "Duck Confit Crostini",
      description:
        "toasted baguette, duck confit, caramelized applemustard, melted brie",
    },
    {
      name: "Ricotta &Tomato Jam Crostini ",
      description: "grilled baguette, tomato jam, whipped ricotta",
    },
    {
      name: "Mini Sope",
      description:
        "black bean puree, blistered shishito pepper, cotija, pickled onion",
    },
    {
      name: "Avocado Toast",
      description:
        "fresh avocado, Prager Brothers spelt bread, heirloom tomato, everything bagel ",
    },
    {
      name: "duck Confit Crostini ",
      description:
        "toasted baguette, blackberry jam, duck confit, pickled kumquat",
    },
  ];

  const salad = [
    {
      name: "Peach Strawberry Salad ",
      description:
        "arugula, sliced peach & strawberry, cucumber, feta, micro mint, lemon EVOO",
    },
    {
      name: "Butter Lettuce Caesar ",
      description:
        "butter lettuce, crouton, blistered tomato, shaved parmesan ",
    },
    {
      name: "Baby Wedge",
      description:
        "baby iceberg lettuce, house made Point Reyes bleu cheese, green onion, cherry tomato, crumbled bacon",
    },
  ];

  const main = [
    {
      name: "Roasted Herb Chicken",
      description:
        "Jidori airline breast, herbs, garlic, grilled apricot & Hatch green chili glaze",
    },
    {
      name: "Pepper Crusted Filet Mignon ",
      description: "seared filet mignon, wild mushroom demi",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, juniper & cranberry beurreblanc",
    },
    {
      name: "Braised Short Rib ",
      description: "slow braised beef, red wine jus",
    },
    {
      name: "Stuffed Lobster Tail",
      description:
        "Butterflied Maine lobster tail, lump crab, bell pepper, onion, Old Bay, panko breadcrumbs",
    },
    {
      name: "Stuffed Portobella Mushroom ",
      description:
        "marinated portobella, creamy spinach & artichoke heart, parmesan Reggiano",
    },
    {
      name: "Seared Sea Bass",
      description: "Local sea bass, tomato & fennel ragout",
    },
  ];

  const starch = [
    {
      name: "Roasted Fingerling Potatoes",
      description: "roasted fingerling potatoes, Calabrian chili oil",
    },
    {
      name: "Sweet Corn Risotto ",
      description:
        "sweet corn, saffron, arborio, white wine, parmesan Reggiano",
    },
    {
      name: "Garlic Mashed Potatoes",
      description: "yukon gold, roasted garlic, cream, butter ",
    },
  ];

  const vegetable = [
    {
      name: "Sauteed Broccolini",
      description: "broccolini, garlic, butter",
    },
    {
      name: "Grilled Eightball Squash",
      description: "squash, garlic, sea salt",
    },
    {
      name: "Farmer’s Market Medley",
      description: "seasonal assorted vegetables, fresh herbs, butter",
    },
  ];

  const dessert = [
    {
      name: "Chocolate Lava Cake",
      description: "chocolate cake, molten center, vanilla ice cream",
    },
    {
      name: "Summer Berry Crème Brulee ",
      description: "fresh berries, sweet cream, caramelized sugar",
    },
    {
      name: "Seasonal Galette",
      description: "fresh fruit, pie crust, vanilla ice cream",
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Dinner Catering Menu | Flavor Chef Catering"
        description="Celebrate the bounty of the harvest with farm-to-table catering prepared especially for you and your guests—always seasonal and fresh!"
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
        <h1 className="text-white mb-0">Seasonal Dinner</h1>
      </HeroFullWidth>

      <div className="pt-14 md:pt-18">
        <section id="appetizers" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Appetizers</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Appetizers</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {appetizers.slice(0, 4).map((item, i) => {
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
                {appetizers.slice(3).map((item, i) => {
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

        <section id="salad" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Salad</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>salad</b> / Choose 1
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {salad.slice(0, 2).map((item, i) => {
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
                {salad.slice(2).map((item, i) => {
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

        <section id="main" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Main</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Main</b> / Choose 1 or 2
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {main.slice(0, 4).map((item, i) => {
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
                {main.slice(4).map((item, i) => {
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

        <section id="startch-vegetable" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Startch & Vegetable</h2>
            </header>

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Startch</b> / Choose 1
                </div>
                {starch.map((item, i) => {
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
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Vegetable</b> / Choose 1
                </div>
                {vegetable.map((item, i) => {
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

        <section id="dessert" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Dessert</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Dessert</b> / Choose 1
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {dessert.slice(0, 2).map((item, i) => {
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
                {dessert.slice(2).map((item, i) => {
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
      relativePath: { eq: "open-graph/facebook/Menus.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Menus.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Seasonal Dinner/1.0 Summer Dinner Party Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Seasonal Dinner/1.0 Summer Dinner Party Hero Mobile.jpg"
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
