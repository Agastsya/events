import images from './images';

const eventServices = [
  {
    title: 'Wedding Planning',
    price: 'Starting at $3000',
    tags: 'Venue | Catering | Floral Design',
  },
  {
    title: 'Corporate Events',
    price: 'Starting at $2500',
    tags: 'Presentations | Networking | Snacks',
  },
  {
    title: 'Birthday Parties',
    price: 'Starting at $1500',
    tags: 'Decor | Cake | Entertainment',
  },
  {
    title: 'Anniversary Celebrations',
    price: 'Starting at $1800',
    tags: 'Customized Themes | Photography | Catering',
  },
  {
    title: 'Charity Galas',
    price: 'Starting at $5000',
    tags: 'Formal Setup | Live Auction | Entertainment',
  },
];

const addOns = [
  {
    title: 'DJ and Music',
    price: '$800',
    tags: 'Sound System | Playlist | Host',
  },
  {
    title: 'Photo Booth',
    price: '$500',
    tags: 'Custom Backdrops | Instant Prints',
  },
  {
    title: 'Thematic Decor',
    price: '$1000',
    tags: 'Custom Themes | Stage Setup',
  },
  {
    title: 'Live Performers',
    price: '$1200',
    tags: 'Musicians | Dancers | Artists',
  },
  {
    title: 'Catering Upgrades',
    price: 'Varies',
    tags: 'Gourmet Menus | Premium Desserts | Beverages',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Event Planner 2023',
    subtitle: 'Recognized for excellence in event management and design.',
  },
  {
    imgUrl: images.award01,
    title: 'Customer Choice Award',
    subtitle: 'Voted as the most preferred event planner by clients.',
  },
  {
    imgUrl: images.award05,
    title: 'Innovative Designs',
    subtitle: 'Awarded for creative and unique event concepts.',
  },
  {
    imgUrl: images.award03,
    title: 'Excellence in Execution',
    subtitle: 'Celebrated for flawless event execution and attention to detail.',
  },
];

export default { eventServices, addOns, awards };
