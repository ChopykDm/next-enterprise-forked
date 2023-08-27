// exmaple: https://clutch.co/

import { useId } from "react";

export enum ServiceCategory {
  Engineering = 'Engineering',
  Optimization = 'Optimization',
  Advisory = 'Advisory',
}

export type ServiceBlock = {
  title: string;
  description?: string;
  summary?: string;
  href?: string;
  image?: string;
  category: ServiceCategory;
  services: Service[];
};

export type Service = {
  title: string;
  rank: number;
  category: ServiceCategory;
  description: string;
  href?: string;
};

export const services: ServiceBlock[] = [
  {
    category: ServiceCategory.Engineering,
    title: 'Solution Engineering',
    summary: 'From Concept to Code: Crafting Tomorrow\'s Premier Digital Experiences.',
    description: 'Tailored technological solutions from web and mobile app development to UI/UX design, ensuring your digital platforms are cutting-edge and user-centric.',
    services: [
      {
        title: 'Web Development',
        category: ServiceCategory.Engineering,
        rank: 1,
        description: 'Craft state-of-the-art websites tailored to your business needs, ensuring responsiveness, high performance, and a captivating design to keep users engaged.',
      },
      {
        title: 'Mobile Development',
        category: ServiceCategory.Engineering,
        rank: 2,
        description: 'Design and develop bespoke mobile applications for iOS, Android, or cross-platform to provide your users with an intuitive experience on the go.',
      },
      {
        title: 'UI/UX Design',
        category: ServiceCategory.Engineering,
        rank: 3,
        description: 'Design user-centric interfaces that provide an intuitive and engaging experience, reducing user friction and increasing satisfaction and retention.',
      },
      {
        title: 'Cloud Migration',
        category: ServiceCategory.Engineering,
        rank: 4,
        description: 'Seamlessly transfer your systems and data to the cloud to improve scalability, flexibility, and security, reducing both operational costs and risks.',
      },
      {
        title: 'PoC Development',
        category: ServiceCategory.Engineering,
        rank: 5,
        description: 'Validate your innovative ideas by building a Proof of Concept, a minimal version of your product that can demonstrate its feasibility and potential.',
      },
    ],
  },
  {
    category: ServiceCategory.Optimization,
    title: 'Consulting',
    summary: 'Maximizing Potential, Elevating Every Digital Interaction to Excellence.',
    description: 'Elevate your existing digital assets through comprehensive audits, modernization efforts, and enhancements aimed at increasing usability, accessibility, and search visibility.',
    services: [
      {
        title: 'UI/UX Audit',
        category: ServiceCategory.Optimization,
        rank: 1,
        description: 'Assess and analyze your current user interfaces for usability, consistency, and intuitiveness, and provide recommendations to elevate user experience.',
      },
      {
        title: 'Accessibility and Inclusion',
        category: ServiceCategory.Optimization,
        rank: 2,
        description: 'Ensure your digital solutions are accessible to everyone, including people with disabilities, adhering to the latest guidelines and best practices to make the web more inclusive.',
      },
      {
        title: 'SEO',
        category: ServiceCategory.Optimization,
        rank: 3,
        description: 'Enhance your website\'s visibility on search engines, driving more organic traffic and increasing your chances of converting visitors into customers.',
      },
      {
        title: 'Legacy Modernization',
        category: ServiceCategory.Optimization,
        rank: 4,
        description: 'Revamp outdated systems, applications, or software architectures to align with today\'s technological standards, improving performance and reducing maintenance costs.',
      },
    ],
  },
  {
    category: ServiceCategory.Advisory,
    title: 'UI & UX Design',
    summary: 'Navigating the Future: Expert Guidance for Your Next Tech Endeavor.',
    description: 'Expert counsel on safeguarding your operations, strategizing cloud migration, and leveraging technology to its fullest potential to meet your business goals.',
    services: [
      {
        title: 'Technology Consulting',
        category: ServiceCategory.Advisory,
        rank: 1,
        description: 'Navigate the complexities of the modern tech landscape with expert insights, strategic planning, and tailored recommendations to align technology with your business goals.',
      },
      {
        title: 'Cyber Security',
        category: ServiceCategory.Advisory,
        rank: 2,
        description: 'Protect your digital assets, data, and online operations against potential threats, vulnerabilities, and breaches with our robust security strategies and implementations.',
      },
      {
        title: 'Cloud Migration Strategy',
        category: ServiceCategory.Advisory,
        rank: 3,
        description: 'Plan and execute a flawless transition to the cloud, factoring in your business goals, infrastructure needs, and potential challenges to ensure a smooth migration.',
      },
    ],
  },
];
