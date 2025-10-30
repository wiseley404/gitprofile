// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'wiseley404', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['wiseley404/hello', 'wiseley404/wiseley404.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['wiseley404/my-project1']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HeatMyFloor',
          description: `A modeling software made in Java for designing a floor heating or heating system plan in a house.

The goal of the application is to allow designing a plan that generates several possible paths for the wire inside the room, based on some constraints such as:

- the wire must not cross itself,
- it must keep a certain distance from the furniture,
- it must also stay at a certain distance from the walls,
- and other similar rules.`,
          imageUrl:
            'https://res.cloudinary.com/ddh9wjogp/image/upload/v1761858680/Screenshot_2025-10-30_141127_ll1ooj.png',
          link: 'https://drive.google.com/file/d/171n7stqPIrbUveG8imU42rtpxuhExAHZ/view?usp=drive_link',
        },
        {
          title: 'Toastmasters FSA-ULaval Club',
          description: `A web platform built with Django, Python, JavaScript, and SQL, including a public site for presenting the club, and a member portal for managing both members and the club itself.

It allows, among other things, to:

- schedule club meetings,
- track statistics for the club and its members,
- generate certificates,
- fill out forms,
- schedule email messages,
- and more.
`,
          imageUrl:
            'https://drive.google.com/file/d/18FkCiCxxs1yIgyY-foaUnsAuOU_A0eyl/view?usp=drive_link',
          link: 'https://drive.google.com/file/d/18FkCiCxxs1yIgyY-foaUnsAuOU_A0eyl/view?usp=drive_link',
        },
        {
          title: 'Bank system',
          description:`A banking application made in C++, as part of a university term project.

It allows the client to:

- create an account,
- add money,
- make withdrawals,
- generate a bank statement,
- and more.
`,
          imageUrl:
            'https://drive.google.com/file/d/1ZGrejPaU-MWAIWVBnYcOpAE61F-jQ94A/view?usp=drive_link',
          link: 'https://drive.google.com/file/d/1ZGrejPaU-MWAIWVBnYcOpAE61F-jQ94A/view?usp=drive_link',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Petiton Wiseley', description: '', imageURL: '' },
  social: {
    linkedin: 'wiseley-paul-enzer-petiton',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'wiseley404',
    telegram: '',
    website: '',
    phone: '',
    email: 'wppet@ulaval.ca',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'Java',
    'React.js',
    'Django',
    'Javascript',
    'SQL',
    'HTML',
    'Git',
    'Docker',
    'CSS',
    'Linux',
  ],
  experiences: [
    {
      company: 'Intelligence Artificial Club of ULaval',
      position: 'Member',
      from: 'September 2025',
      to: 'Present',
      companyLink: 'https://cia.ulaval.ca',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: "CS50's Introduction to Programming with Python",
      body: 'From Harvard Online',
      year: '',
      link: '',
    },
    {
      name: "CS50's Web Programming with Python, Django, SQL and Javascript",
      body: 'From Harvard Online',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Harvard Online',
      degree: 'CS50 Courses',
      from: 'December 2024',
      to: 'Now',
    },
    {
      institution: 'Laval University',
      degree: 'Bachelor in Software Engineering',
      from: ' January 2024',
      to: 'Now',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'lofi',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
