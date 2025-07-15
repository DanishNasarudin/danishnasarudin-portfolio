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

import dndagentMock1 from "@/public/Mockups/dnd-agent-1.webp";
import dndagentMock2 from "@/public/Mockups/dnd-agent-2.webp";

import flatganttMock1 from "@/public/Mockups/flatgantt-1.webp";
import flatganttMock2 from "@/public/Mockups/flatgantt-2.webp";
import flatganttMock3 from "@/public/Mockups/flatgantt-3.webp";
import flatganttMock4 from "@/public/Mockups/flatgantt-4.webp";

import photostockMock1 from "@/public/Mockups/photostock-1.webp";
import photostockMock2 from "@/public/Mockups/photostock-2.webp";
import photostockMock3 from "@/public/Mockups/photostock-3.webp";
import photostockMock4 from "@/public/Mockups/photostock-4.webp";
import photostockMock5 from "@/public/Mockups/photostock-5.webp";

import nextjsdarklogo from "@/public/Logo/Logo-00.png";
import nextjslogo from "@/public/Logo/Logo-01.png";
import reactlogo from "@/public/Logo/Logo-02.png";
import tslogo from "@/public/Logo/Logo-03.png";
import msqllogo from "@/public/Logo/Logo-04.png";
import postgreslogo from "@/public/Logo/Logo-05.png";
import twlogo from "@/public/Logo/Logo-06.png";
import cplogo from "@/public/Logo/Logo-08.png";
import siologo from "@/public/Logo/Logo-09.png";
import sentrylogo from "@/public/Logo/Logo-10.png";
import sentrydarklogo from "@/public/Logo/Logo-11.png";
import stripelogo from "@/public/Logo/Logo-12.png";
import paypallogo from "@/public/Logo/Logo-13.png";
import clerklogo from "@/public/Logo/Logo-14.png";
import htmllogo from "@/public/Logo/Logo-15.png";

export type Content = {
  content: string;
  title: string;
  sub_desc: string;
  thumbnail: string;
  desc: string;
  images: string[];
  ext_link: string;
  git_link?: string;
  stack: {
    name: string;
    src: string | { light: string; dark: string };
  }[];
};

export const contentData: Content[] = [
  {
    content: "flat-gantt",
    title: "FlatGantt (SaaS)",
    sub_desc: "Next JS(React), PostgreSQL, Stripe",
    thumbnail: flatganttMock1.src,
    desc: "A SaaS web application, made for users that require the ability to have flat gantt chart timeline. Equipped with both Stripe and PayPal as payment gateway to support certain methods.",
    images: [
      flatganttMock1.src,
      flatganttMock2.src,
      flatganttMock3.src,
      flatganttMock4.src,
    ],
    ext_link: "https://www.flatgantt.com",
    stack: [
      {
        name: "Next JS",
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
        name: "PostgreSQL",
        src: postgreslogo.src,
      },
      {
        name: "Clerk Auth",
        src: clerklogo.src,
      },
      {
        name: "Stripe",
        src: stripelogo.src,
      },
      {
        name: "PayPal",
        src: paypallogo.src,
      },
      {
        name: "Sentry",
        src: {
          light: sentrylogo.src,
          dark: sentrydarklogo.src,
        },
      },
    ],
  },
  {
    content: "warranty-entry",
    title: "Warranty Data Entry",
    sub_desc: "Next JS (React), MySQL, WebSocket",
    thumbnail: warrantyMock2.src,
    desc: "A custom made data entry app for the Company's internal warranty service record. Inspired by Notion, customized to suit the ease of use to enter data on the spot in front of customers. Implemented websocket integration for live data changes.",
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
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
      {
        name: "Socket IO",
        src: siologo.src,
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
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
    content: "photo-gallery",
    title: "Photo Gallery",
    sub_desc: "Next Js (React), MySQL, cPanel",
    thumbnail: photostockMock1.src,
    desc: "A photo gallery of all the products made by the company, accessible by the public to preview or search through their desired PC specifications.",
    images: [
      photostockMock1.src,
      photostockMock2.src,
      photostockMock3.src,
      photostockMock4.src,
      photostockMock5.src,
    ],
    ext_link: "https://photostock.idealtech.com.my",
    stack: [
      {
        name: "Next JS",
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
    content: "dnd-agent",
    title: "DragNDrop Agent Builder",
    sub_desc: "Next JS (React), PostgeSQL, Vercel",
    thumbnail: dndagentMock1.src,
    desc: "Drag and drop web application made as requested by client, utilised React Flow library, built in 1 week timeframe.",
    images: [dndagentMock1.src, dndagentMock2.src],
    ext_link: "https://dnd-ai-builder.vercel.app/",
    stack: [
      {
        name: "Next JS",
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
      {
        name: "PostgreSQL",
        src: postgreslogo.src,
      },
      {
        name: "Vercel",
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
        src: { light: nextjsdarklogo.src, dark: nextjslogo.src },
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
        src: htmllogo.src,
      },
      {
        name: "CSS",
        src: reactlogo.src,
      },
    ],
  },
];
