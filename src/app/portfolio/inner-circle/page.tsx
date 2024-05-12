"use client";
import React from "react";
import ProjectCarousel from "../ProjectCarousel";
import ProjectDescription from "../ProjectDescription";
import ProjectInformation from "../ProjectInformation";
import ProjectPageTemplate from "../ProjectPageTemplate";
import { anchorTailwind } from "@/app/styles/style";
const aTailwind = anchorTailwind;

export const projectCarousel = () => {
  return (
    <ProjectCarousel>
      <img src="/img/portfolio/innercircle/logo.png" alt="" />
      <img src="/img/portfolio/innercircle/coffee_desk.jpg" alt="" />
      <img src="/img/portfolio/innercircle/avatar_icon.png" alt="" />
      <img src="/img/portfolio/innercircle/coffee_toast.jpg" alt="" />
      <img src="/img/portfolio/innercircle/letter.jpg" alt="" />
    </ProjectCarousel>
  );
};

export const projectInformation = () => {
  const content = [
    { heading: "Category", description: "Web Application and API" },
    { heading: "Client", description: "Independent project" },
    { heading: "Project date", description: "Published October 2023" },
    {
      heading: "Project status",
      description: "Maintained and receiving regular updates",
    },
    {
      heading: "Project URL",
      description: (
        <a
          href="https://innercircleprm.com/"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          InnerCircle
        </a>
      ),
    },
    {
      heading: "Code",
      description: (
        <a
          href="https://github.com/mchantosa/smooth-kitty/tree/main"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Github repo
        </a>
      ),
    },
    {
      heading: "Stack",
      description:
        "TypeScript, Deno, Fresh framework, Preact, Tailwind, Daisy UI, Deno-KV",
    },
  ];
  return <ProjectInformation content={content} />;
};

const projectDescription = () => {
  const content = [
    {
      heading: "About InnerCircle",
      description:
        "I made this application to meet my communication desires and habits. This application is designed to be a medium agnostic, non-calendered, warm and user friendly, communication asset, intended to support a small to medium set of contacts.",
    },
    {
      heading: "Why medium agnostic?",
      description:
        "Much of how we communicate now is determined by the communication mediums we share. Quitting Facebook is like changing your phone number. Is a friend any less a friend because you grew disenchanted with WhatsApp, or turned off with Twitter? This app organizes your communications around people, not communication mediums. When I organize my contacts by the mediums they use, they use SMS, Whatsapp, Google hangouts, FB messenger, slack, snapchat... If I only speak to people when I happen to frequent these mediums, I either miss conversations or I become a slave to my phone's alert system.",
    },
    {
      heading: "Why non-calendered?",
      description:
        "What does your work-life balance calendar look like? Work meetings, social engagements, dentist appointments, sporting events, classes...? If you add - call mom - into your calendar, are you going to actually do it, or are you going to hit snooze or say- I'll get to it later. This app provides you with a weekly set of objectives (Sunday through Saturday), and rolls uncompleted objectives into the following week. The goal is communication when it is convenient for you.",
    },
    {
      heading: "In what way is it warm and user friendly?",
      description:
        "This app has no calender and no alerts, it will not nag you. You reference it when you want to and get out what you put into it. My daughter is logged as having a preferred communication medium of 'birria tacos' set to a biweekly objective where we talk about whatever or nothing. I use this app to remind me to periodically get a one on one taco with my kid.",
    },
    {
      heading: "Why a small to medium set of contacts?",
      description:
        "It is possible to have thousands of 'friends' across a half-dozen applications and still be completely alone. Communication is not manifested through connectivity, it is manifested through behavior. This application is intended to help you evaluate how much communication you want to maintain, and prioritize with whom you wish to maintain it.",
    },
  ];
  return <ProjectDescription content={content} />;
};

export default function Page() {
  return (
    <ProjectPageTemplate
      projectCarousel={projectCarousel()}
      projectInformation={projectInformation()}
      projectDescription={projectDescription()}
    />
  );
}
