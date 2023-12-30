import React from 'react'
import {CgWorkAlt} from 'react-icons/cg'
import {FaReact} from 'react-icons/fa'
import {LuGraduationCap} from 'react-icons/lu'
import wartafenoImg from '@/public/images/project/wartefeno/1.png'
import siakadImg from '@/public/images/project/siakad/1.png'
import amikomImg from '@/public/images/project/amikom/1.png'
import hrtoolsImg from '@/public/images/project/hr-tools/1.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const
export const experiencesData = [
  {
    title: 'Studi Independen Web Development',
    location: 'PT Kinema Systrans Multimedia. BATAM',
    description:
      'Acquire expertise in front-end, back-end, cybersecurity, and industry-specific abilities through direct guidance from Nongsa Digitals engineers and partners. Join the ranks of successful participants who have advanced past the study phase among hundreds of others.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2023 - Des 2023',
  },
  // {
  //   title: 'Software Engineer',
  //   location: 'PT Mandala Dwipantara Proteksi',
  //   description:
  //     'Developing and overcoming user problems of NRE-CORE related to applicable policies of PT. Reasuransi Nasional Indonesia including, troubleshooting, disaster recovery planning & execution.',
  //   icon: React.createElement(CgWorkAlt),
  //   date: 'Mar 2022 - Des 2022',
  // },
  // {
  //   title: 'Programmer with Kampus Merdeka',
  //   location: 'PT. Time Excelindo',
  //   description:
  //     'Develop features in HR TOOLS, including: fixing bugs, developing attendance with shifts and distances, applying for leave and overtime permits, and developing employee assessments',
  //   icon: React.createElement(CgWorkAlt),
  //   date: 'Aug 2021 - Feb 2022',
  // },
  // {
  //   title: 'Internship Back End Developer',
  //   location: 'PT Zeniora Edukasi Teknologi',
  //   description: 'Contribute to the development, fixing bugs, discussion about the new fiture in website.',
  //   icon: React.createElement(CgWorkAlt),
  //   date: 'Jul 2021 - Sep 2021',
  // },
] as const

export const projectsData = [
  {
    title: 'PETANI GAUL',
    description:
      'This website is an innovative platform designed to help agribusiness entrepreneurs and those who have a hobby of farming to increase production output and reduce production prices and stabilize the selling price of agricultural products.',
    screenshots: ['images/project/siakad/1.png', 'images/project/siakad/2.png'],
    image: 'images/project/petani/1.png',
    tech: [
      '/images/icon/html.svg',
      '/images/icon/bootstrap.svg',
      '/images/icon/javascript.svg',
      // '/images/icon/jquery-vertical.svg',
      // '/images/icon/mysql.svg',
    ],
    demoUrl: 'https://yaqinzz.github.io/Project-Macro/',
    githubUrl: null,
  },
  {
    title: 'Bengkel Kurnia',
    description:
      'This website is an innovative platform designed to help the Kurnia Motor Workshop, Kurnia Motor, make it easy for customers to be picked up and delivered to their destination safely. In addition, this service also provides a sophisticated bookkeeping system, making it easier for customers to track and manage their travel expenses.',
    screenshots: ['images/project/siakad/1.png', 'images/project/siakad/2.png'],
    image: 'images/project/bengkel/1.png',
    tech: [
      '/images/icon/typescript.svg',
      '/images/icon/expressjs.svg',
      // 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      '/images/icon/mysql.svg',
      '/images/icon/nodejs.svg',
    ],
    demoUrl: 'https://kurnia-motor.vercel.app/',
    githubUrl: null,
  },
  // {
  //   title: 'SIAKAD SDN Tegalrandu',
  //   description:
  //     'This is a web-based application about creating report students, crud kelas, crud mata pelajaran, crud siswa, crud nilai students to report with kurikulum 2013',
  //   screenshots: ['images/project/siakad/1.png', 'images/project/siakad/2.png'],
  //   image: 'images/project/siakad/1.png',
  //   tech: [
  //     '/images/icon/bootstrap.svg',
  //     'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
  //     '/images/icon/jquery-vertical.svg',
  //     '/images/icon/mysql.svg',
  //   ],
  //   demoUrl: null,
  //   githubUrl: null,
  // },
  // {
  //   title: 'Wartafeno',
  //   description:
  //     'Wartafeno is a website that is used to convey news from the LPMT Fenomena of UNY, this website was made using wordpress and elementor and mysql database.',
  //   screenshots: ['images/project/siakad/1.png', 'images/project/siakad/2.png'],
  //   image: 'images/project/wartefeno/1.png',
  //   tech: [
  //     'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
  //     'https://upload.wikimedia.org/wikipedia/commons/8/8a/Elementor_icon.svg',
  //     '/images/icon/mysql.svg',
  //   ],
  //   demoUrl: 'https://wartafeno.com/',
  //   githubUrl: null,
  // },
  // {
  //   title: 'HR-TOOLS',
  //   description:
  //     'This is HR TOOLS which is used to manage employee data, starting from personal data, employee performance appraisal work to the attendance system.',
  //   image: 'images/project/hr-tools/1.png',
  //   screenshots: ['images/project/siakad/1.png', 'images/project/siakad/2.png'],
  //   tech: [
  //     '/images/icon/bootstrap.svg',
  //     '/images/icon/leaflet.svg',
  //     '/images/icon/codeigniter.svg',
  //     '/images/icon/jquery-vertical.svg',
  //     '/images/icon/mysql.svg',
  //   ],
  //   demoUrl: null,
  //   githubUrl: null,
  // },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'PHP',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'Bootstrap',
  'Codeigneter',
  'Laravel',
  'React',
  'MYSQL',
  'Git',
  // "Framer Motion",
] as const

export const skilss = [
  {
    id: 2,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 3,
    imgUrl: '/images/icon/bootstrap.svg',
  },
  // {
  //   id: 8,
  //   imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
  // },
  // {
  //   id: 4,
  //   imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
  // },
  // {
  //   id: 5,
  //   imgUrl: "/images/icon/codeigniter.svg",
  // },
  {
    id: 7,
    imgUrl: '/images/icon/mysql.svg',
  },

  {
    id: 9,
    imgUrl: '/images/icon/typescript.svg',
  },
  {
    id: 10,
    imgUrl: '/images/icon/javascript.svg',
  },
  // {
  //   id: 1,
  //   imgUrl: '/images/icon/jquery-vertical.svg',
  // },
  {
    id: 6,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 7,
    imgUrl: '/images/icon/expressjs-icon.svg',
  },
  {
    id: 8,
    imgUrl: '/images/icon/nodejs.svg',
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const
