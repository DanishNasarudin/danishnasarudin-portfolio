import warrantyMock1 from "@/public/Mockups/warranty-entry-1.webp";
import warrantyMock2 from "@/public/Mockups/warranty-entry-2.webp";
import warrantyMock3 from "@/public/Mockups/warranty-entry-3.webp";
import warrantyMock4 from "@/public/Mockups/warranty-entry-4.gif";

import builderMock1 from "@/public/Mockups/pc-builder-1.webp";
import builderMock2 from "@/public/Mockups/pc-builder-2.webp";
import builderMock3 from "@/public/Mockups/pc-builder-3.webp";
import builderMock4 from "@/public/Mockups/pc-builder-4.webp";

import careerMock1 from "@/public/Mockups/career-1.webp";
import careerMock2 from "@/public/Mockups/career-2.webp";
import careerMock3 from "@/public/Mockups/career-3.webp";

import galleryMock1 from "@/public/Mockups/gallery-1.webp";
import galleryMock2 from "@/public/Mockups/gallery-2.webp";

import workstationMock1 from "@/public/Mockups/workstation-1.webp";
import workstationMock2 from "@/public/Mockups/workstation-2.webp";

import nextjslogo from "@/public/Logo/Logo-01.png";
import reactlogo from "@/public/Logo/Logo-02.png";
import tslogo from "@/public/Logo/Logo-03.png";
import msqllogo from "@/public/Logo/Logo-04.png";
import twlogo from "@/public/Logo/Logo-06.png";
import cplogo from "@/public/Logo/Logo-08.png";
export const contentData = [
  {
    content: "warranty-entry",
    title: "Warranty Data Entry",
    sub_desc: "Next JS (React), MySQL, cPanel",
    thumbnail: warrantyMock2.src,
    desc: "A custom made data entry app for the Company's internal warranty service record. Inspired by Notion, customized to suit the ease of use to enter data on the spot in front of customers.",
    images: [
      warrantyMock4.src,
      warrantyMock1.src,
      warrantyMock2.src,
      warrantyMock3.src,
    ],
    ext_link: "",
    stack: [
      {
        name: "Next JS",
        src: nextjslogo.src,
      },
      {
        name: "React JS",
        src: reactlogo.src,
      },
      {
        name: "Typescript",
        src: tslogo.src,
      },
      {
        name: "MySQL",
        src: msqllogo.src,
      },
      {
        name: "cPanel",
        src: cplogo.src,
      },
    ],
  },
  {
    content: "pc-builder",
    title: "PC Builder Quotation",
    sub_desc: "Next JS (React), MySQL, cPanel",
    thumbnail: builderMock1.src,
    desc: "A PC Part Picker with the latest market price list. Dynamically calculate discounts. Generate quotation link, sharable to other users.",
    images: [
      builderMock1.src,
      builderMock2.src,
      builderMock3.src,
      builderMock4.src,
    ],
    ext_link: "https://build.idealtech.com.my/",
    stack: [
      {
        name: "Next JS",
        src: nextjslogo.src,
      },
      {
        name: "React JS",
        src: reactlogo.src,
      },
      {
        name: "Typescript",
        src: tslogo.src,
      },
      {
        name: "MySQL",
        src: msqllogo.src,
      },
      {
        name: "cPanel",
        src: cplogo.src,
      },
    ],
  },
  {
    content: "career-single",
    title: "Career Single Page",
    sub_desc: "Next Js (React), Wordpress CMS, GraphQL",
    thumbnail: careerMock1.src,
    desc: "Used Next JS framework solely to utilize Tailwind CSS and fetched data, GraphQL from Wordpress, to a custom display layout.",
    images: [careerMock1.src, careerMock2.src, careerMock3.src],
    ext_link: "https://career.idealtech.com.my/",
    stack: [
      {
        name: "Next JS",
        src: nextjslogo.src,
      },
      {
        name: "React JS",
        src: reactlogo.src,
      },
      {
        name: "Typescript",
        src: tslogo.src,
      },
      {
        name: "Tailwind CSS",
        src: twlogo.src,
      },
    ],
  },
  {
    content: "gallery-single",
    title: "Gallery Single Page",
    sub_desc: "Next Js (React), Wordpress CMS, GraphQL",
    thumbnail: galleryMock1.src,
    desc: "Used Next JS framework solely to utilize Tailwind CSS and fetched data, GraphQL from Wordpress, to a custom display layout.",
    images: [galleryMock1.src, galleryMock2.src],
    ext_link: "https://watercool.idealtech.com.my/",
    stack: [
      {
        name: "Next JS",
        src: nextjslogo.src,
      },
      {
        name: "React JS",
        src: reactlogo.src,
      },
      {
        name: "Typescript",
        src: tslogo.src,
      },
      {
        name: "Tailwind CSS",
        src: twlogo.src,
      },
    ],
  },
  {
    content: "workstation-single",
    title: "Workstation Single Page",
    sub_desc: "HTML, CSS",
    thumbnail: workstationMock1.src,
    desc: "Front-end project code by Tailwind CSS, then used Elementor Wordpress to utilize the Tailwind CSS classes.",
    images: [workstationMock1.src, workstationMock2.src],
    ext_link: "https://idealtech.com.my/workstation-pc/",
    stack: [
      {
        name: "HTML",
        src: nextjslogo.src,
      },
      {
        name: "CSS",
        src: reactlogo.src,
      },
    ],
  },
];
