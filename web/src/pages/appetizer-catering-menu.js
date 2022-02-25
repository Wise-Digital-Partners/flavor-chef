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
      description: "seared lamb chop, rosemary, garlic, dill-mustard",
    },
    {
      name: "Mini Crab Cake",
      description: "lump crab, onion, bell pepper, herbs, cajun aioli",
    },
    {
      name: "Hot Honey & Kale Crostini",
      description:
        "fried kale, spicy honey, whipped herb ricotta, toasted baguette",
    },
    {
      name: "Ahi Poke Crisp",
      description:
        "fresh ahi, house poke sauce, green onion, sriracha aioli, fried wonton",
    },
    {
      name: "Bacon Wrapped Shrimp",
      description: "fresh shrimp, applewood bacon, chili-ginger glaze",
    },
    {
      name: "Stuffed Mushroom",
      description: "cremini, goat cheese, parmesan, fresh herbs",
    },
    {
      name: "Bacon Wrapped Date",
      description:
        "medjool date, applewood smoked bacon, goat cheese, carmamelized onions, basil",
    },
    {
      name: "Sweet Potato Empanada",
      description:
        "roasted sweet potato, black beans, cheese, smoked jalapeño relish",
    },
    {
      name: "Avocado Toast",
      description:
        "fresh avocado, Prager Brothers spelt bread, heirloom tomato, everything bagel spice",
    },
    {
      name: "Shrimp Cocktail",
      description: "fresh shrimp, garlic, spicy cocktail sauce",
    },
    {
      name: "Heirloom Tomato Bruschetta",
      description: "tomato, basil, burrata, grilled baguette, balsamic",
    },
    {
      name: "Filet Mignon Skewer",
      description: "beef tenderloin, house dry rub, chimichurri",
    },
    {
      name: "Chicken & Waffle",
      description:
        "fried chicken, buttermilk waffle, buffalo sauce, maple glaze, house pickle",
    },
    {
      name: "Fresh Spring Roll",
      description:
        "rice paper, mint, cilantro, sesame noodles, pickled vegetables, sweet chili sauce",
    },
    {
      name: "Mini Sope",
      description:
        "black bean puree, blistered shishito pepper, cotija, pickled onion",
    },
    {
      name: "Curry Chicken Skewer",
      description: "chicken, coconut milk, curry, cashew tamarind sauce",
    },
    {
      name: "Steak & Brie Crostini",
      description: "NY strip steak, brie, caramelized onion, dijon",
    },
    {
      name: "Mini Lobster Rolls",
      description: "poached lobster, lemon-tarragon aioli, brioche",
    },
    {
      name: "Spam Musubi",
      description: "fried spam, sushi rice, seaweed",
    },
    {
      name: "Roasted Red Pepper Polenta Cake",
      description: "grilled polenta, red pepper ragout, goat cheese",
    },
  ];

  const appetizers = [
    {
      name: "Chips & Dips",
      description:
        "Local tortilla chips, fresh guacamole, roasted salsa, chipotle queso",
    },
    {
      name: "Seasonal Crudites",
      description:
        "Seasonal vegetables, warm pita, artichoke spinach dip, sprouted bean hummus",
    },
    {
      name: "The Hodge Podge",
      description:
        "variety of cheeses, dried fruit, toasted nuts, crackers, baguette, assorted fresh fruit, berries, seasonal vegetables, sprouted bean hummus, dried and cured meats, seasonal jam",
    },
  ];

  const plateStations = [
    {
      name: "Argentine Grill",
      description:
        "freshly grilled chicken and beef kabobs, cucumber tzatziki and chimichurri sauce",
    },
    {
      name: "Yakisoba Wok",
      description:
        "Yakisoba noodles, shitake, broccoli, cabbage, teriyaki sauce beef or chicken",
    },
    {
      name: "Burger Sliders",
      description:
        "Kobe beef sliders, brioche buns, caramelized onion, American cheese, arugula, roasted garlic aioli",
    },
    {
      name: "French Fry Station",
      description:
        "freshly fried fries, parmesan herb mix, sriracha ketchup, house made ranch, Flavor Fry Sauce",
    },
    {
      name: "Pasta Bar",
      description:
        "marinara and alfredo, penne pasta, chicken breast and Italian sausage, spinach, mushroom, tomato, parmesan cheese, pepper flakes",
    },
    {
      name: "Raw Bar",
      description:
        "live oyster shucking crab legs, shrimp cocktail, Mignonette sauce, raw horseradish, lemon, spicy cocktail sauce, Tabasco",
    },
    {
      name: "Shrimp & Grits",
      description:
        "live action sauteed shrimp, pepper-jack grits, bell pepper, onion, blackened lime butter",
    },
  ];

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

        <section id="appetizer" className="mb-12 md:mb-24">
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
