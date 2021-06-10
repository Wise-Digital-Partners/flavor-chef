import React, { useState } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
      name: "Stuffed Mushroom",
      description: "cremini, goat cheese, parmesan, fresh herbs",
    },
    {
      name: "Bacon Wrapped Date",
      description:
        "medjool date, applewood smoked bacon, goat cheese, caramelized onions, basil, balsamic reduction",
    },
    {
      name: "Mini Crab Cake",
      description: "lump crab, onions, peppers, basil aoli",
    },
    {
      name: "Sweet Potato Empanada",
      description:
        "roasted sweet potato, black beans, cheese, smoked jalapeño relish, chipotle aioli",
    },
    {
      name: "Avocado Toast Pointe",
      description:
        "fresh avocado, pickled red onion, pickled cumquat, lemon oil, cilantro, grilled baguette",
    },
    {
      name: "Curry Chicken Skewer",
      description: "Curry Chicken Skewer",
    },
    {
      name: "Steak & Brie Crostini",
      description: "NY strip steak, brie, caramelized onion, dijon",
    },
    {
      name: "Prosciutto Shrimp Skewer",
      description: "shrimp, prosciutto, sriracha aioli",
    },
    {
      name: "Heirloom Tomato Bruschetta",
      description: "Heirloom Tomato Bruschetta",
    },
    {
      name: "Mediterranean Beef Skewer",
      description: "dry rubbed beef sirloin, cucumber tzatziki",
    },
    {
      name: "Ahi Poke Crisps",
      description:
        "crispy wonton, tamari, ginger, scallion, sesame seeds, sriracha aioli",
    },
    {
      name: "Chicken & Waffle",
      description:
        "fried chicken, buttermilk waffle, buffalo maple glaze, house pickle",
    },
    {
      name: "Lamb Chops",
      description: "marinated lamb chop, rosemary, mustard dill sauce",
    },
    {
      name: "Fresh Spring Roll",
      description:
        "rice paper, mint, cilantro, sesame noodles, pickled vegetables, sweet chili sauce",
    },
  ];

  const appetizerDisplay = [
    {
      name: "Seasonal Crudites",
      description:
        "seasonal vegetables, warm pita chips, artichoke spinach dip, sprouted bean hummus",
    },
    {
      name: "Charcuterie Display",
      description:
        "seasonal vegetables, warm pita chips, artichoke spinach dip, sprouted bean hummus",
    },
    {
      name: "The Hodge Podge",
      description:
        "variety of cheeses, dried fruit, toasted nuts, crackers, baguette, assorted fresh fruit, berries, seasonal vegetables, sprouted bean hummus, dried and cured meats, seasonal jam",
    },
    {
      name: "Raw Bar",
      description:
        "live oyster shucking, crab legs, grilled shrimp cocktail garnish station of mignonette sauce, raw horseradish, lemon, spicy cocktail sauce",
    },
  ];

  const buffetSalads = [
    {
      name: "Bistro Salad",
      description:
        "organic greens, candied pecan, seasonal fruits, heirloom carrot, cucumber, radish, feta, orange balsamic, EVOO",
    },
    {
      name: "Organic Green Salad",
      description:
        "organic greens, heirloom carrot, cucumber, radish, cherry tomato, infused balsamic, EVOO",
    },
    {
      name: "House Salad",
      description:
        "baby greens, slivered red onion, pepperoncini, carrot, radish, cucumber, red wine vinaigrette, parmesan Reggiano",
    },
  ];

  const buffetVeggies = [
    {
      name: "Farmer’s Market Medley ",
      description:
        "seasonal vegetables, broccoli, cauliflower, heirloom carrot, summer squash, garlic, herbs, butte",
    },
    {
      name: "Seasonal Roasted Vegetable Platter",
      description:
        "grilled asparagus, seasonal squash, broccolini, bell pepper, roasted mushrooms, balsamic vinegar, EVOO",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "Heirloom carrots, butter, garlic, fresh herbs",
    },
  ];

  const buffetStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter ",
    },
    {
      name: "Roasted Fingerling Potatoes",
      description: "fingerling potatoes, fresh herbs, garlic ",
    },
    {
      name: "Citrus Risotto",
      description: "arborio rice, thyme, lemon zest, parmesan ",
    },
  ];

  const buffetMains = [
    {
      name: "Pan Roasted Dijon Chicken",
      description:
        "Jidori airline chicken breast, Dijon, white wine, thyme, garlic",
    },
    {
      name: "Chicken Florentine",
      description:
        "chicken breast, panko, spinach, goat cheese, citrus bechamel",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, orange, basil, California EVOO",
    },
    {
      name: "Citrus Seabass",
      description:
        "local seabass, ginger & lime beurre blanc, cilantro gremolat",
    },
    {
      name: "Grilled Flank Steak",
      description:
        "Cedar River Farms flank steak, garlic, herbs, Argentinian chimichurri, Fresno chili peppers ",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, fresh herbs, red wine jus",
    },
    {
      name: "Prime Rib Carving",
      description:
        "slow roasted Prime Rib, au jus, horseradish cream, giardiniera",
    },
    {
      name: "Spinach Stuffed Mushroom",
      description:
        "Portabella mushroom, creamy spinach, artichoke heart, parmesan",
      plantBased: true,
    },
    {
      name: "Eggplant Parmesan",
      description:
        "panko crusted eggplant, house marinara, parmesan Reggiano , fresh basil",
      plantBased: true,
    },
  ];

  const platedSalads = [
    {
      name: "Butter Lettuce Caesar",
      description:
        "butter lettuce, garlic crouton, house dressing, blistered cherry tomato, parmesan Reggiano",
    },
    {
      name: "Bistro Salad",
      description:
        "organic greens, candied pecan, seasonal fruits, heirloom carrot, cucumber, radish, feta, orange balsamic, EVOO",
    },
    {
      name: "Wedge Salad",
      description:
        "baby iceburg lettuce, house Point Reyes blue cheese, heirloom cherry tomatoes, crumbled bacon, green onion",
    },
  ];

  const platedVeggies = [
    {
      name: "Grilled Asparagus",
      description: "grilled asparagus, sea salt, lemon, EVOO",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "Heirloom carrots, butter, garlic, fresh herbs",
    },
    {
      name: "Sautéed Broccolini ",
      description: "broccolini, garlic, sea salt, butter",
    },
  ];

  const platedStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter ",
    },
    {
      name: "Sweet Potato Mash",
      description: "Garnet yam, coconut milk, nutmeg",
    },
    {
      name: "Citrus Risotto",
      description: "arborio rice, thyme, lemon zest, parmesan ",
    },
  ];

  const platedMains = [
    {
      name: "Pan Roasted Dijon Chicken",
      description:
        "Jidori airline chicken breast, Dijon, white wine, thyme, garlic",
    },
    {
      name: "Chicken Saltimbocca",
      description:
        "stuffed chicken breast, prosciutto, sage, mozzarella, fig & tomato ragout",
    },
    {
      name: "Pan Seared Salmon",
      description: "Wild Isle salmon, orange, basil, California EVOO",
    },
    {
      name: "Tropical Sea Bass",
      description:
        "citrus marinated local seabass, pineapple & mango salsa, micro cilantro, EVOO",
    },
    {
      name: "Split Lobster Tail ",
      description: "Maine lobster, lemon, butter, white wine, parsley",
    },
    {
      name: "Braised Beef Short Ribs",
      description:
        "Cedar River Farms boneless beef short rib, traditional vegetables, fresh herbs, red wine jus",
    },
    {
      name: "Pepper Crusted Filet Mignon",
      description: "7oz center cut filet mignon, tamarind mushroom demi",
    },
    {
      name: "Shrimp Scampi",
      description: "fresh shrimp, butter, lemon, white wine, fresh herbs",
    },
    {
      name: "Spinach Stuffed Mushroom",
      description:
        "Portabella mushroom, creamy spinach, artichoke heart, parmesan",
      plantBased: true,
    },
    {
      name: "Grilled Polenta Cake",
      description:
        "organic polenta, fresh herbs, tomato ragout, parmesan Reggiano",
      plantBased: true,
    },
  ];

  const familyStyleSalads = [
    {
      name: "House Salad",
      description:
        "baby greens, slivered red onion, pepperoncini, carrot, radish, cucumber, red wine vinaigrette ",
    },
    {
      name: "Bistro Salad",
      description:
        "organic greens, candied pecan, seasonal fruits, heirloom carrot, cucumber, radish, feta, orange balsamic, EVOO",
    },
    {
      name: "Roasted Beet Salad ",
      description:
        "arugula, roasted red & gold beets, goat cheese, heirloom carrot, orange squeeze, pistachio, grapefruit balsamic, EVOO",
    },
  ];

  const familyStyleVeggies = [
    {
      name: "Seasonal Roasted Vegetable Platter",
      description:
        "grilled asparagus, seasonal squash, broccolini, bell pepper, roasted mushrooms, balsamic vinegar, EVOO ",
    },
    {
      name: "Grilled Asparagus",
      description: "grilled asparagus, sea salt, lemon, EVOO",
    },
    {
      name: "Petit Heirloom Carrots",
      description: "Heirloom carrots, butter, garlic, fresh herbs",
    },
  ];

  const familyStyleStarches = [
    {
      name: "Garlic Mashed Potatoes",
      description: "Yukon gold potato, cream, roasted garlic, butter ",
    },
    {
      name: "Wild Rice Pilaf",
      description:
        "wild rice, traditional vegetables, fresh herbs, toasted almonds",
    },
    {
      name: "Roasted Root Vegetables",
      description:
        "sweet potato, carrot, purple potato, gold potato, rutabaga, garlic, fresh herbs",
    },
  ];

  const familyStyleMains = [
    {
      name: "Pan Roasted Dijon Chicken",
      description:
        "Jidori airline chicken breast, Dijon, white wine, thyme, garlic",
    },
    {
      name: "Grilled Tomahawk Steak",
      description:
        "grilled tomahawk steak, rosemary, garlic, shallot & herb compound butter",
    },
    {
      name: "Grilled Berkshire Pork Chop",
      description: "grilled Berkshire pork, blackberry & sage compote",
    },
    {
      name: "Blackened Shrimp Skewers",
      description: "Cajun marinated shrimp, tequila & lime butter",
    },
  ];

  const url = typeof window !== "undefined" ? window.location.pathname : "";

  // Toggle Dropdown
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("h-0");
  const [setOverlay, setOverlayState] = useState("opacity-0");
  const [setIcon, setIconState] = useState("rotate-0");

  const clickHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "max-h-0 py-0" : "py-6 max-h-[400px]"
    );
    setOverlayState(setActive === "active" ? "opacity-0" : "opacity-100");
    setIconState(setActive === "active" ? "rotate-0" : "rotate-180");
  };

  return (
    <Layout
      headerStyle="overlap"
      headerLinkColor="white"
      headerHasBorder={true}
    >
      <SearchEngineOptimization
        title="Wedding Catering Menu | Flavor Chef Catering"
        description="Add an extra special touch to your big day with fresh dishes from Flavor Chef Catering. Our wedding catering menu features locally sourced ingredients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
        <h1 className="text-white mb-0">Wedding</h1>
      </HeroFullWidth>

      <div className="relative">
        <div
          className={`bg-black bg-opacity-50 h-full w-full absolute transition-all duration-300 ease-linear z-10 md:hidden ${setOverlay}`}
        ></div>
        <div
          className="bg-primary-900 md:bg-transparent flex justify-between text-white py-3 md:py-0 px-5 md:px-4 md:px-0 md:mt-12 mb-16 md:mb-12 sticky md:relative top-[61px] md:top-0 cursor-pointer md:cursor-auto z-20"
          onKeyDown={clickHandler}
          onClick={clickHandler}
        >
          <div className="md:hidden flex flex-1 items-center">
            <img
              src={data.menuIcon.publicURL}
              alt="Burger menu icon"
              className="mr-2"
            />
            <span className="font-display text-lg md:text-base tracking-wider leading-5">
              Menu Options
            </span>
          </div>
          <div className="md:hidden">
            <i
              className={`far fa-chevron-down transition-all duration-300 ease-linear transform ${setIcon}`}
            ></i>
          </div>

          <nav className="flex justify-center max-w-4xl mx-auto absolute md:relative bg-white md:bg-transparent top-0 left-0 transform translate-y-12 md:translate-y-0 w-full md:w-auto">
            <ul
              className={`px-12 md:px-0 flex flex-col md:flex-row space-y-4 md:space-y-0 w-full md:w-auto overflow-y-scroll md:overflow-visible transition-all duration-300 ease-linear ${setHeight}`}
            >
              <li>
                <AnchorLink
                  to={url + "#appetizers"}
                  title="Appetizers"
                  className="font-display text-lg md:text-base tracking-wider leading-5 text-gray-600 md:text-primary-400 hover:text-primary-400 md:hover:bg-primary-50 no-underline md:py-3 md:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#buffet"}
                  title="Buffet"
                  className="font-display text-lg md:text-base tracking-wider leading-5 text-gray-600 md:text-primary-400 hover:text-primary-400 md:hover:bg-primary-50 no-underline md:py-3 md:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#plated"}
                  title="Plated"
                  className="font-display text-lg md:text-base tracking-wider leading-5 text-gray-600 md:text-primary-400 hover:text-primary-400 md:hover:bg-primary-50 no-underline md:py-3 md:px-6"
                  stripHash
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#family-style"}
                  title="Family Style"
                  className="font-display text-lg md:text-base tracking-wider leading-5 text-gray-600 md:text-primary-400 hover:text-primary-400 md:hover:bg-primary-50 no-underline md:py-3 md:px-6"
                  stripHash
                />
              </li>
            </ul>
          </nav>
        </div>

        <section id="appetizers" className="mb-16 md:mb-20">
          <div className="container">
            <header className="mb-12">
              <h2>Appetizers</h2>
            </header>

            <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
              <b>Passed Hors D‘eouvres</b> / Choose 3
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                {passedHorsDeouvres.slice(0, 7).map((item, i) => {
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
                {passedHorsDeouvres.slice(7).map((item, i) => {
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
              <b>Appetizer Display</b> / Choose 1
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
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
          </div>
        </section>

        <section id="buffet" className="mb-16 md:mb-20">
          <div className="container">
            <header className="mb-12">
              <h2>Buffet</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Salads</b> / Choose 1
                  </div>
                  {buffetSalads.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Veggies</b> / Choose 1
                  </div>
                  {buffetVeggies.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Starches</b> / Choose 1
                  </div>
                  {buffetStarches.map((item, i) => {
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

              <div>
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Mains</b> / Choose 2
                </div>
                {buffetMains.map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      {item.plantBased && (
                        <div className="bg-[#269566] text-center text-white text-xs px-3 py-1.5 mb-3 rounded inline-flex">
                          Plant Based
                        </div>
                      )}
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

        <section id="plated" className="mb-16 md:mb-20">
          <div className="container">
            <header className="mb-12">
              <h2>Plated</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Salads</b> / Choose 1
                  </div>
                  {platedSalads.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Veggies</b> / Choose 1
                  </div>
                  {platedVeggies.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Starches</b> / Choose 1
                  </div>
                  {platedStarches.map((item, i) => {
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

              <div>
                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Mains</b> / Choose 1 or 2
                </div>
                {platedMains.map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      {item.plantBased && (
                        <div className="bg-[#269566] text-center text-white text-xs px-3 py-1.5 mb-3 rounded inline-flex">
                          Plant Based
                        </div>
                      )}
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

        <section id="family-style" className="mb-8 md:mb-10">
          <div className="container">
            <header className="mb-12">
              <h2>Family Style</h2>
            </header>

            <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 mb-10">
              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Salads</b> / Choose 1
                  </div>
                  {familyStyleSalads.map((item, i) => {
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

                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Veggies</b> / Choose 1
                  </div>
                  {familyStyleVeggies.map((item, i) => {
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

              <div>
                <div className="mb-14 md:mb-20">
                  <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                    <b>Starches</b> / Choose 1
                  </div>
                  {familyStyleStarches.map((item, i) => {
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

                <div className="font-body text-sm md:text-base text-gray-600 text-opacity-40 tracking-wider uppercase border-b border-gray-400 border-opacity-30 pb-4 mb-8 md:mb-12">
                  <b>Mains</b> / Choose 1 or 2
                </div>
                {familyStyleMains.map((item, i) => {
                  return (
                    <div key={i} className="mb-8 md:mb-10">
                      {item.plantBased && (
                        <div className="bg-[#269566] text-center text-white text-xs px-3 py-1.5 mb-3 rounded inline-flex">
                          Plant Based
                        </div>
                      )}
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

        <Divider />

        <CallToAction headingLevel="h2" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: {
        eq: "menus/Wedding Menu/1.0 Weddings Menu Hero Desktop.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(
      relativePath: {
        eq: "menus/Wedding Menu/1.0 Weddings Menu Hero Mobile.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    menuIcon: file(relativePath: { eq: "global/menu.svg" }) {
      publicURL
    }
  }
`;
export default Page;
