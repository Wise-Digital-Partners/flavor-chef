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

  const passedHorsDeouvres = [
    {
      name: "Lollipop Lamb Chop",
      description: "New Zealand grass fed lamb, rosemary, garlic, mustard dill sauce",
    },
    {
      name: "Mini Crab Cake",
      description: "lump crab, onion, bell pepper, basil, cajun remoulade",
    },
    {
      name: "Pesto Caprese Crostini",
      description:
        "pesto, heirloom cherry tomato, pearl mozzarella, ciabatta crostini, balsamic reduction, basil",
    },
    {
      name: "Poke Crisp",
      description:
        "ahi tuna, tamari, ginger, scallion, sesame seeds, crispy wonton, sriracha aioli",
    },
    {
      name: "Pig in a Blanket",
      description: "beef mini weenie, puff pastry, everything bagel seasoning, sweet & spicy BBQ",
    },
    {
      name: "Stuffed Mushroom",
      description: "remini duxelle, goat cheese, caramelized onion, parmesan, basil",
    },
    {
      name: "Sweet Potato Empanada",
      description:
        "roasted sweet potato, black beans, cheese, chipotle aioli, smoked jalapeño relish",
    },
    {
      name: "Short Rib Empanada",
      description:
        "braised beef short rib, cheddar cheese, jalapeno, avocado salsa verde, green onion",
    },
    
    {
      name: "Avocado Toast",
      description:
        "avocado, pickled red onion, kumquat, ciabatta toast, everything bagel seasoning, micro cilantro",
    },
    {
      name: "Filet Mignon Skewer",
      description: "dry rubbed beef tenderloin, red chimichurri, micro cilantro",
    },
    {
      name: "Chicken & Waffle",
      description:
        "fried chicken breast, buttermilk waffle, buffalo maple glaze, house pickle",
    },
    {
      name: "Bacon Wrapped Date",
      description:
        "applewood smoked bacon, medjool date, goat cheese, caramelized onion, basil, balsamic reduction",
    },
    {
      name: "Duck Confit Crostini",
      description: "apricot jalapeno jam, duck confit, toasted baguette, micro arugulai",
    },
    {
      name: "Fresh Spring Roll",
      description:
        "pickled vegetables, mint, cilantro, rice noodles, butter lettuce, rice paper, sweet chili sauce",
    },
    {
      name: "Curry Chicken Skewer",
      description: "chicken thigh, coconut milk, yellow curry, mint chutney",
    },
    {
      name: "Steak & Brie Crostini",
      description: "NY strip steak, brie, caramelized onion, Dijon, toasted baguette, parsley",
    },
    {
      name: "Mini Lobster Rolls",
      description: "poached lobster, lemon-tarragon aioli, Hawaiian sweet roll, green onion",
    },
    {
      name: "Spam Musubi",
      description: "fried spam, hoisin ginger glaze, sushi rice, seaweed, furikake",
    },
    {
      name: "Stuffed Arancini",
      description: "citrus risotto, mozzarella, panko breadcrumbs, marinara, Parmesan Reggiano, micro basil",
    },
    {
      name: "Chinese Chicken Lettuce Wrap",
      description: "spiced chicken salad, bell pepper, carrot, green onion, chopped peanuts, iceberg lettuce wrap",
    },
    {
      name: "Pork Tostone",
      description: "Mojo pork tenderloin, fried plantain, sweet Caribbean chutney",
    },
    {
      name: "Wonton Wrapped Shrimp",
      description: "shrimp, crispy wonton wrapper, sweet chili glaze",
    },
    {
      name: "Pork Belly Bao Bun",
      description: "Braised pork belly, sweet & spicy glaze, pickled vegetables, cilantro, steamed bun",
    },
    {
      name: "Tomato Fennel Bisque Shot",
      description: "House made tomato & fennel bisque, micro basil, Parmesan crisp",
    },

  ];

  const appetizers = [
    {
      name: "The Hodge Podge",
      description:
        "variety of cheeses, dried fruit, toasted nuts, crackers, baguette, assorted fresh fruit, berries, seasonal vegetables, sprouted bean hummus, dried and cured meats, seasonal jam",
    },
    {
      name: "Mediterranean Mezze Display",
      description:
        "locally sourced vegetables, hummus, spinach & artichoke dip, cucumber tzatziki, olives, artichoke hearts, warm naan, lavash",
    },
  ];

  // const plateStations = [
  //   {
  //     name: "Argentine Grill",
  //     description:
  //       "freshly grilled chicken and beef kabobs, cucumber tzatziki and chimichurri sauce",
  //   },
  //   {
  //     name: "Yakisoba Wok",
  //     description:
  //       "Yakisoba noodles, shitake, broccoli, cabbage, teriyaki sauce beef or chicken",
  //   },
  //   {
  //     name: "Burger Sliders",
  //     description:
  //       "Kobe beef sliders, brioche buns, caramelized onion, American cheese, arugula, roasted garlic aioli",
  //   },
  //   {
  //     name: "French Fry Station",
  //     description:
  //       "freshly fried fries, parmesan herb mix, sriracha ketchup, house made ranch, Flavor Fry Sauce",
  //   },
  //   {
  //     name: "Pasta Bar",
  //     description:
  //       "marinara and alfredo, penne pasta, chicken breast and Italian sausage, spinach, mushroom, tomato, parmesan cheese, pepper flakes",
  //   },
  //   {
  //     name: "Raw Bar",
  //     description:
  //       "live oyster shucking crab legs, shrimp cocktail, Mignonette sauce, raw horseradish, lemon, spicy cocktail sauce, Tabasco",
  //   },
  //   {
  //     name: "Shrimp & Grits",
  //     description:
  //       "live action sauteed shrimp, pepper-jack grits, bell pepper, onion, blackened lime butter",
  //   },
  // ];

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Appetizer Catering Menu | Flavor Chef Catering"
        description="Don't forget the appetizers. Select your choice of delectable small bites from the Flavor Chef Catering appetizer catering menu."
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
        <h1 className="text-white mb-0">Small Bites</h1>
      </HeroFullWidth>

      <div className="pt-14 md:pt-18">
        <section id="passed-hors-deouvres" className="mb-12 md:mb-24">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Passed Hors D‘eouvres</h2>
            </header>

            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20">
              {passedHorsDeouvres.map((item, i) => {
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
        </section>

        <section id="appetizer" className="mb-12 md:mb-24">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Appetizer Displays</h2>
            </header>

            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20">
              {appetizers.map((item, i) => {
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
        </section>

        {/* <section id="appetizer" className="mb-12 md:mb-24">
          <div className="container">
            <header className="mb-14 md:mb-12">
              <h2>Small Plate Station</h2>
            </header>

            <div className="md:columns-2 md:gap-x-10 lg:gap-x-20">
              {plateStations.map((item, i) => {
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
        </section> */}
      </div>

      <Divider />

      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Small Bites Menu.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Small Bites Menu.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Small Bites Menu/1.0 Small Bites Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Small Bites Menu/1.0 Small Bites Hero Mobile.jpg"
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
