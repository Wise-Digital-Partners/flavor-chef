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

  const passedAppetizer = [
    {
      name: "Duck Confit & Brie Crostini",
      description:
        "Duck confit, toasted baguette, caramelized apple mustard, melted brie",
    },
    {
      name: "Swedish Meatballs",
      description: "pork & beef meatballs, creamy lingenberry gravy",
    },
    {
      name: "Lollipop Lamb Chop",
      description:
        "Pan seared lamb chop, rosemary, garlic, mint, pomegranate glaze",
    },
    {
      name: "Kimchi Pancake",
      description: "Pan fried kimchi pancake, chive crème fraise",
    },
    {
      name: "Fried Kale & Hot Honey Crostini",
      description:
        "Fried kale, whipped herb ricotta, grilled baguette, hot honey drizzle",
    },
    {
      name: "Winter Rolls",
      description:
        "Delicata squash, winter vegetables, rice paper, sweet chili cashew sauce",
    },
  ];

  const appetizerDisplay = [
    {
      name: "The Hodge Podge",
      description:
        "Variety of cheeses, toasted nuts, crackers, fresh & dried fruit, honeycomb, seasonal vegetables, hummus, dried and cured meats, seasonal jam",
    },
    {
      name: "Season Crudité & Dips",
      description:
        "Seasonal vegetables, warm pita, artichoke spinach dip, organic hummus",
    },
    {
      name: "Holiday Nacho Bar",
      description:
        "Local tortilla chips, house made queso, guacamole, carnitas, pico de Gallo, crema",
    },
  ];

  const salad = [
    {
      name: "Harvest Salad",
      description:
        "organic greens, pecans, persimmons, pomegranate seeds, radish, carrot, feta, cinnamon pear balsamic, EVOO",
    },
    {
      name: "Roasted Beet Salad",
      description:
        "Roasted gold and red beets, arugula, goat cheese, heirloom carrot, orange squeeze, pistachio, grapefruit balsamic, EVOO",
    },
  ];

  const main = [
    {
      name: "Chicken Saltimbocca",
      description: "Chicken breast, prosciutto, sage, tomato-fig ragout",
    },
    {
      name: "Prime Rib Carving",
      description: "Slow roasted beef, au jus, horseradish cream, giardiniera",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, juniper & cranberry beurre blanc",
    },
    {
      name: "Short Rib",
      description: "Slow braised beef, red wine demi",
    },
    {
      name: "Roasted Pork Tenderloin",
      description: "Pan seared tenderloin, blackberry & sage compote",
    },
    {
      name: "Stuffed Acorn Squash",
      description: "roasted squash, quinoa, toasted almonds, cranberry",
    },
  ];

  const starch = [
    {
      name: "Golden Gratin",
      description: "Yukon gold potato, fennel, cream, gruyere cheese",
    },
    {
      name: "Roasted Garlic Mashed Potatoes",
      description: "Yukon gold, roasted garlic, cream, butter",
    },
    {
      name: "Butternut Squash Risotto",
      description:
        "butternut squash, sage, arborio, white wine, parmesan Reggiano",
    },
  ];

  const vegetable = [
    {
      name: "Green Bean Almondine",
      description: "Fresh green beans, butter, fresh herbs, toasted almonds",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "heirloom carrot, fresh herbs, butter",
    },
    {
      name: "Roasted Brussel Sprouts",
      description: "brussels sprout, pepitas, balsamic glaze",
    },
  ];

  const dessert = [
    {
      name: "Chai Cream Puff",
      description: "Pat a choux, chai infused whipped cream",
    },
    {
      name: "Eggnog Crème Brulee",
      description: "Sweet cream, cinnamon, nutmeg, caramelized sugar",
    },
    {
      name: "Butterscotch Blondie Bars",
      description: "Butterscotch chips, walnuts, brown sugar",
    },
    {
      name: "Peppermint Mousse",
      description:
        "Chocolate mousse, peppermint whipped cream, candy cane crumble",
    },
    {
      name: "Turtle Trifle",
      description:
        "House made brownie, candied pecans, caramel, chocolate, vanilla bean custard",
    },
  ];

  const beverages = [
    {
      name: "Hot Cocoa Bar",
      description:
        "House made hot cocoa, gourmet marshmallows, cinnamon, candy canes, pirouette cookies, whipped cream",
    },
    {
      name: "Fresh Coffee Bar",
      description:
        "Organic drip coffee, half and half, non-dairy creamer, cinnamon, sugar in the raw, stevia",
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Holiday Catering Menu | Flavor Chef Catering"
        description="Fill your holiday with delicious memories! Our menus include everything from festive appetizers to traditional entrées and holiday-themed desserts."
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
        <h1 className="text-white mb-0">Holiday</h1>
      </HeroFullWidth>

      <div className="pt-14 md:pt-18">
        <section id="appetizers" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Appetizers</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Appetizer Display</b>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {appetizerDisplay.slice(0, 2).map((item, i) => {
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
                {appetizerDisplay.slice(2).map((item, i) => {
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

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Passed Appetizer</b>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {passedAppetizer.slice(0, 3).map((item, i) => {
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
                {passedAppetizer.slice(3).map((item, i) => {
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
              <h2>Mains</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {main.slice(0, 3).map((item, i) => {
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
                {main.slice(3).map((item, i) => {
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
              <h2>Salads</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {salad.slice(0, 1).map((item, i) => {
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
                {salad.slice(1).map((item, i) => {
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
                  <b>Startch</b>
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
                  <b>Vegetable</b>
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
              <h2>Desserts</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {dessert.slice(0, 3).map((item, i) => {
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
                {dessert.slice(3).map((item, i) => {
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

        <section id="beverages" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Beverages</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {beverages.slice(0, 1).map((item, i) => {
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
                {beverages.slice(1).map((item, i) => {
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
      relativePath: { eq: "menus/Holiday Menu/1.0-Holiday-Hero-Desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Holiday Menu/1.0 Holiday Party Hero Mobile.jpg"
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
