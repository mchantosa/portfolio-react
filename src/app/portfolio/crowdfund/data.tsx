import { CarouselPic } from "@/app/utils/GetImage";
import ProjectCarousel from "../ProjectCarousel";
import ProjectDescription from "../ProjectDescription";
import ProjectInformation from "../ProjectInformation";
import { anchorTailwind } from "@/app/styles/style";
import SeparatedList from "@/app/utils/SeparatedList";
import { skillDivTailwind } from "../style";
const aTailwind = anchorTailwind;

export const projectCarousel: () => React.ReactNode = () => {
  return (
    <ProjectCarousel>
      <CarouselPic imageLocation="/images/portfolio/crowdfund/home.gif" />
      <CarouselPic imageLocation="/images/portfolio/crowdfund/contribute.gif" />
      <CarouselPic imageLocation="/images/portfolio/crowdfund/metamask.png" />
    </ProjectCarousel>
  );
};

export const projectInformation: () => React.ReactNode = () => {
  const content = [
    {
      heading: "Description",
      description: "A decentralized application for crowdfunding in Ethereum",
    },
    { heading: "Client", description: "Independent project" },
    { heading: "Project date", description: "Beta published September 2024" },
    {
      heading: "Project status",
      description: "Beta supported in Sepolia",
    },
    {
      heading: "Project URL",
      description: (
        <a
          href="https://crowdfunding-megan.chantosa.com"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Crowdfund
        </a>
      ),
    },
    {
      heading: "Code (Frontend)",
      description: (
        <a
          href="https://github.com/mchantosa/crowdfunding-NextJS"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Github repo (NextJS)
        </a>
      ),
    },
    {
      heading: 'Code ("Backend")',
      description: (
        <a
          href="https://github.com/mchantosa/smart-contract-generator"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Github repo (Hardhat)
        </a>
      ),
    },
    {
      heading: "Stack",
      description: (
        <SeparatedList
          list={["NextJS", "Material UI", "Hardhat", "Solidity", "Web3"]}
          additionalClassName={skillDivTailwind.join(" ")}
        />
      ),
    },
  ];
  return <ProjectInformation content={content} />;
};

export const projectDescription: () => React.ReactNode = () => {
  const content = [
    {
      heading: "About Crowdfund",
      description:
        "Create a crowdfunding campaign on the Ethereum blockchain. Designate a target value (ETH), duration (seconds - I'm working on this), and beneficiary (Ethereum account), and deploy your smart contract to the network of your choice. ",
    },
    {
      heading: "What networks are currently supported?",
      description:
        "This application is currently in beta and supports Sepolia (Ethereum Testnet) and a local development network. I am currently holding off on supporting Ethereum Mainnet until I implement a plan for versioning. I want to make sure I can upgrade the crowdfunding ABI without disrupting the application's ability to interface with legacy contracts.",
    },
    {
      heading: "What is a smart contract?",
      description:
        "A smart contract is a self-executing program on the blockchain that automatically enforces and executes the terms of an agreement when predefined conditions are met.",
    },
    {
      heading: "Why would I want to use this?",
      description:
        "This platform allows you to create decentralized crowdfunding campaigns on the Ethereum blockchain, ensuring transparency and security. By utilizing smart contracts, you eliminate the need for intermediaries, reduce fees, and ensure funds are only released when specific conditions are met. Whether you're raising funds for a project or supporting one, the process is streamlined and governed by code.",
    },
  ];

  return <ProjectDescription content={content} />;
};
