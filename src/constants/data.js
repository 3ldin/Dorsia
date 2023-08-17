import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.awardlogo,
    title: 'Michelin Star',
    subtitle: 'Dorsia proudly boasts multiple Michelin stars',
  },
  {
    imgUrl: images.awardlogo,
    title: 'Iconic Dishes',
    subtitle: 'Our signature dishes have garnered praise for their delectable taste and artistic presentation.',
  },
  {
    imgUrl: images.awardlogo,
    title: 'Exclusive Wine Selection',
    subtitle: 'Our cellar holds an exquisite collection of rare and distinguished wines',
  },
  {
    imgUrl: images.awardlogo,
    title: 'Culinary Innovation Awards',
    subtitle: 'Dorsia has received accolades for its innovative and harmonious flavor combinations.',
  },
];

export default { wines, cocktails, awards };
