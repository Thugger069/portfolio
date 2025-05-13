// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'thugger069', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'ꚽꛈ𖢧ꛅꚶꔪ ꛤ𖦪𖣠ꚠ𖤢ꛕ𖢧ꕷ',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['thugger069/portfolio', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '𖢑ꚲ ꛤ𖦪𖣠ꚠ𖤢ꛕ𖢧ꕷ',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of 𖢧ꛅ𖤢 ꚽꚳꛈ𖢧ꛕꛅ',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ƭɦµɠɠε૨069',
    twitter: 'chuksgincaro',
    mastodon: 'ƭɦµɠɠε૨069@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'LysergicProtocol',
    dev: 'ƭɦµɠɠε૨069',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://thugger069.github.io',
    phone: '',
    email: 'thugger069@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: '𝚃𝚎𝚌𝚑𝚃𝚛𝚎𝚗𝚍 𝙸𝚗𝚗𝚘𝚟𝚊𝚝𝚒𝚘𝚗𝚜',
      position: '𝚂𝚎𝚗𝚒𝚘𝚛 𝚂𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛',
      from: '𝚂𝚎𝚙𝚝𝚎𝚖𝚋𝚎𝚛 𝟸𝟶𝟸𝟷',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: '𝙽𝚎𝚡𝚝𝙶𝚎𝚗 𝚂𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜',
      position: '𝚂𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: '𝙰𝚆𝚂 𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚎𝚍 𝚂𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜 𝙰𝚛𝚌𝚑𝚒𝚝𝚎𝚌𝚝',
      body: '𝙰𝚜𝚜𝚘𝚌𝚒𝚊𝚝𝚎 𝙰𝚖𝚊𝚣𝚘𝚗 𝚆𝚎𝚋 𝚂𝚎𝚛𝚟𝚒𝚌𝚎𝚜 (𝙰𝚆𝚂)',
      year: 'March 2022',
      link: 'https://example.com',
    },
    {
      name: '𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚎𝚍 𝙺𝚞𝚋𝚎𝚛𝚗𝚎𝚝𝚎𝚜 𝙰𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚝𝚘𝚛 (𝙲𝙺𝙰)',
      body: '𝙲𝚕𝚘𝚞𝚍 𝙽𝚊𝚝𝚒𝚟𝚎 𝙲𝚘𝚖𝚙𝚞𝚝𝚒𝚗𝚐 𝙵𝚘𝚞𝚗𝚍𝚊𝚝𝚒𝚘𝚗 (𝙲𝙽𝙲𝙵)',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: '𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚘𝚏 𝙲𝚊𝚕𝚒𝚏𝚘𝚛𝚗𝚒𝚊, 𝙱𝚎𝚛𝚔𝚎𝚕𝚎𝚢',
      degree: '𝙱𝚊𝚌𝚑𝚎𝚕𝚘𝚛 𝚘𝚏 𝚂𝚌𝚒𝚎𝚗𝚌𝚎 𝚒𝚗 𝙲𝚘𝚖𝚙𝚞𝚝𝚎𝚛 𝚂𝚌𝚒𝚎𝚗𝚌𝚎',
      from: '2015',
      to: '2019',
    },
    {
      institution: '𝙲𝚘𝚖𝚖𝚞𝚗𝚒𝚝𝚢 𝙲𝚘𝚕𝚕𝚎𝚐𝚎 𝚘𝚏 𝚂𝚊𝚗 𝙵𝚛𝚊𝚗𝚌𝚒𝚜𝚌𝚘',
      degree: '𝙰𝚜𝚜𝚘𝚌𝚒𝚊𝚝𝚎 𝚘𝚏 𝙰𝚛𝚝𝚜 𝚒𝚗 𝙼𝚊𝚝𝚑𝚎𝚖𝚊𝚝𝚒𝚌𝚜',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'thugger069', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >I</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
