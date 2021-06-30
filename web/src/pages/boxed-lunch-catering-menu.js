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

  const boxedLunchesSalads = [
    {
      name: "Caesar Salad",
      description:
        "chopped romaine, blistered tomato, house Caesar dressing, shaved parmesan cheese, garlic croutons",
    },
    {
      name: "Cobb Salad",
      description:
        "chopped romaine, baby greens, cherry tomato, hard boiled egg, avocado, bacon, blue cheese dressing",
    },
    {
      name: "Spinach Salad",
      description:
        "baby spinach, mixed greens, heirloom carrot, cucumber, radish, seasonal fruit, toasted almonds, feta, citrus vinaigrette",
    },
  ];

  const boxedLunchesFreshBowls = [
    {
      name: "Santa Fe Bowl",
      description:
        "organic quinoa, mixed greens, romaine, cherry tomato, bacon crumbles, cheddar cheese, avocado, chipotle vinaigrette, grilled chicken breast",
    },
    {
      name: "Mediterranean Bowl",
      description:
        "organic quinoa, mixed greens, feta cheese, sundried tomato, olive, red onion, pepperoncini, red wine vinaigrette, grilled chicken breast",
    },
    {
      name: "Poke Bowl",
      description:
        "fresh ahi, house poke sauce, cucumber, pickled vegetables, green onion, edamame, radishes, sriracha aioli, sesame seeds, jasmine rice",
    },
  ];

  const boxedLunchesSandwiches = [
    {
      name: "Turkey Avocado Sandwich",
      description:
        "roasted turkey breast, bacon, tomato, avocado, bean sprouts, lemon aioli, focaccia bread",
    },
    {
      name: "Chicken Caprese Sandwich",
      description:
        "grilled chicken breast, buffalo mozzarella, pesto aioli, mixed greens, reduced balsamic drizzle, focaccia bread",
    },
    {
      name: "Portabella Mushroom Sandwich",
      description:
        "grilled portabella, buffalo mozzarella, pesto aioli, mixed greens, reduced balsamic drizzle, focaccia bread cucumber, red wine vinaigrette, parmesan Reggiano",
    },
  ];

  const boxedLunchesWraps = [
    {
      name: "So Cal Wrap",
      description:
        "spiced Chicken breast, bacon, guacamole, mixed greens, chipotle aioli, fresh tortilla",
    },
    {
      name: "Roast Beef Arugula Wrap",
      description:
        "sliced roast beef, arugula, provolone, horse radish mayon- naise, fresh tortilla",
    },
    {
      name: "Roasted Vegetable Wrap",
      description:
        "roasted seasonal vegetables, sprouted bean hummus, mixed greens, fresh tortilla",
    },
  ];

  const boxedLunchesAddOnsRegular = [
    {
      name: "Assorted Kettle Chips",
      description: "assorted flavors of Hawaiian Kettle Chips",
    },
    {
      name: "Organic Whole Fruit",
      description: "organic seasonal whole fruit",
    },
  ];

  const boxedLunchesAddOnsPremium = [
    {
      name: "Lemon Bars",
      description: "Meyer lemon, gluten free short bread crust, powdered sugar",
    },
    {
      name: "Salted Caramel Brownies",
      description: "double chocolate brownie, caramel drizzle, Maldon sea salt",
    },
    {
      name: "Classic Chocolate Chip Cookies",
      description: "house made chocolate chip cookies",
    },
  ];

  const californiaBistro = [
    {
      name: "Herb Chicken with Seasonal Chutney",
      description:
        "sweet mashed potatoes, sauteed garden vegetables, Meyer lemon bar",
    },
    {
      name: "Pan Seared Salmon with Orange & Basil",
      description:
        "sweet mashed potatoes, sauteed garden vegetables, Meyer lemon bar",
    },
    {
      name: "Grilled Polenta Cake with Tomato Ragout",
      description:
        "sweet mashed potatoes, sauteed garden vegetables, Meyer lemon bar",
    },
  ];

  const thai = [
    {
      name: "Lemongrass & Ginger Chicken",
      description:
        "yellow curry, steamed jasmine rice, fresh spring roll, coconut macaroon",
    },
    {
      name: "Grilled Tofu Curry",
      description:
        "yellow curry, steamed jasmine rice, fresh spring roll, coconut macaroon",
    },
    {
      name: "Sweet Chili Shrimp",
      description:
        "yellow curry, steamed jasmine rice, fresh spring roll, coconut macaroon",
    },
  ];

  const mediterranean = [
    {
      name: "Spiced Chicken Kebab",
      description:
        "cous cous pilaf, Mediterranean salad, naan bread, tzatziki, chocolate chip cookie",
    },
    {
      name: "Spiced Beef Kebab",
      description:
        "cous cous pilaf, Mediterranean salad, naan bread, tzatziki, chocolate chip cookie",
    },
    {
      name: "Roasted Vegetable Kebab",
      description:
        "cous cous pilaf, Mediterranean salad, naan bread, tzatziki, chocolate chip cookie",
    },
  ];

  const hawaiian = [
    {
      name: "Huli Huli Chicken",
      description:
        "steamed jasmine rice, Hawaiian mac salad, Asian slaw, coconut macaroon",
    },
    {
      name: "Korean Style Short Ribs",
      description:
        "steamed jasmine rice, Hawaiian mac salad, Asian slaw, coconut macaroon",
    },
    {
      name: "Coconut Crusted Cauliflower",
      description:
        "steamed jasmine rice, Hawaiian mac salad, Asian slaw, coconut macaroon",
    },
  ];

  const mexican = [
    {
      name: "Dry Rub Chicken Leg Quarter",
      description:
        "Mexican roasted potatoes, jicama, black bean & corn salad, almond chocolate chip cookie",
    },
    {
      name: "Salsa Verde Flank Steak",
      description:
        "Mexican roasted potatoes, jicama, black bean & corn salad, almond chocolate chip cookie",
    },
    {
      name: "Vegetarian Chili Relleno",
      description:
        "Mexican roasted potatoes, jicama, black bean & corn salad, almond chocolate chip cookie",
    },
  ];

  const tuscan = [
    {
      name: "Chicken Parmesan",
      description: "house salad, penne pasta marinara, Meyer lemon bar",
    },
    {
      name: "Eggplant Parmesan",
      description: "house salad, penne pasta marinara, Meyer lemon bar",
    },
    {
      name: "Heirloom Bruschetta Salmon",
      description: "house salad, penne pasta marinara, Meyer lemon bar",
    },
  ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Boxed Lunch Catering Menu | Flavor Chef Catering"
        description="Keep it simple and order from the Flavor Chef Catering boxed lunch catering menu. Enjoy fresh meals packaged and ready to go."
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
        <h1 className="text-white mb-0">Boxed Lunch</h1>
      </HeroFullWidth>

      <div className="pt-14 md:pt-18">
        <section id="boxed-lunches" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14">
              <h2>Boxed Lunches</h2>
            </header>

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-4 md:mb-5 flex items-center justify-between">
                  <span>Salads</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $10
                  </div>
                </div>

                <div className="font-heading font-bold mb-5">
                  <i>add chicken / salmon $4</i>
                </div>

                {boxedLunchesSalads.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-4 md:mb-5 flex items-center justify-between">
                  <span>Fresh Bowls</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $15
                  </div>
                </div>

                <div className="mt-8 md:mt-16"></div>

                {boxedLunchesFreshBowls.map((item, i) => {
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

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-4 md:mb-5 flex items-center justify-between">
                  <span>Sandwiches</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $15
                  </div>
                </div>

                <div className="font-heading font-bold mb-5">
                  <i>
                    all sandwiches come with kettle chips & fresh fruit salad
                  </i>
                </div>

                {boxedLunchesSandwiches.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-4 md:mb-5 flex items-center justify-between">
                  <span>Wraps</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $15
                  </div>
                </div>

                <div className="font-heading font-bold mb-5">
                  <i>
                    all sandwiches come with kettle chips & fresh fruit salad
                  </i>
                </div>

                {boxedLunchesWraps.map((item, i) => {
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

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Add ons (regular)</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $1
                  </div>
                </div>

                {boxedLunchesAddOnsRegular.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Add ons (premium)</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $2
                  </div>
                </div>

                {boxedLunchesAddOnsPremium.map((item, i) => {
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

        <section id="all-in-ones" className="mb-12 md:mb-16">
          <div className="container">
            <header className="mb-14">
              <h2>All In Ones</h2>
              <div className="font-heading font-bold mb-5">
                <i>
                  Choose one style of menu and give quantities of each entree
                </i>
              </div>
            </header>

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>California Bistro</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {californiaBistro.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Thai</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {thai.map((item, i) => {
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

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Mediterranean</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {mediterranean.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Hawaiian</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {hawaiian.map((item, i) => {
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

            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Mexican</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {mexican.map((item, i) => {
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
                <div className="font-heading text-mobile-4xl md:text-4xl text-gray-600 border-b border-gray-400 border-opacity-30 pb-3 mb-8 md:mb-12 flex items-center justify-between">
                  <span>Tuscan</span>
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-400 font-display text-base leading-5 flex items-center justify-center">
                    $25
                  </div>
                </div>

                {tuscan.map((item, i) => {
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
      relativePath: { eq: "open-graph/facebook/Boxed Lunch Menu.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Boxed Lunch Menu.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "menus/Boxed Lunch/1.0 Boxed Lunch Hero Desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: { eq: "menus/Boxed Lunch/1.0 Boxed Lunch Hero Mobile.jpg" }
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
