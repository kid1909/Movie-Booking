import { IoTicketOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'

const links = [
  {
    text: 'ticket',
    icon: <IoTicketOutline />,
    toggleBar: false,
  },
  {
    text: 'theaters',
    icon: <CiLocationOn />,
    toggleBar: false,
  },
  {
    text: 'search',
    icon: <CiSearch />,
    toggleBar: false,
  },

  {
    text: 'account',
    icon: <CiUser />,
    toggleBar: false,
  },
]
export const movies = [
  {
    _id: 1,
    title: 'Hunger Game',
    releaseDate: '2023-07-16',
    availableDate: ['2023-08-16', '2023-08-17'],
    length: '135 minutes',
    rating: 'PG13',
    summary:
      'The Hunger Games: The Ballad of Songbirds & Snakes follows a young Coriolanus (Tom Blyth) who is the last hope for his failing lineage, the one-proud Snow family that has fallen from grace in a post-war Capitol. With his livelihood threatened, Snow is reluctantly assigned to mentor Lucy Gray Baird (Rachel Zegler), a tribute from the impoverished District 12. But after Lucy Gray’s charm captivates the audience of Panem, Snow sees an opportunity to shift their fates. With everything he has worked for hanging in the balance, Snow unites with Lucy Gray to turn the odds in their favor. Battling his instincts for both good and evil, Snow sets out on a race against time to survive and reveal if he will ultimately become a songbird or a snake.',
    genrer: 'Action, Adventure',
    posterURL:
      'https://res.cloudinary.com/domjuxgd5/image/upload/v1701985895/f207yqys6jtv0docigpl.webp',
    new: 'true',
    totalSeats: {
      A: { A1: false, A2: false, A3: true, A4: true, A5: true },
      B: { B1: true, B2: true, B3: true, B4: true, B5: true },
      // ... Add more sections if needed
    },
  },
  {
    _id: 2,
    title: 'Godzilla',
    releaseDate: '2023-07-16',

    length: '153 minutes',
    rating: 'PG13',
    summary:
      'Japan, devastated after the war, faces a new threat in the form of Godzilla. How will the country confront this impossible situation?',
    genrer: 'Action, Adventure,Drama',
    posterURL:
      'https://res.cloudinary.com/domjuxgd5/image/upload/v1701984052/godzilla_h6b4y8.webp',
    new: 'true',
    totalSeats: {
      A: { A1: false, A2: true, A3: true, A4: true, A5: true },
      B: { B1: true, B2: true, B3: true, B4: true, B5: true },
      // ... Add more sections if needed
    },
  },
  {
    _id: 3,
    title: 'Godzilla',
    releaseDate: '2023-07-16',
    availableDate: ['2023-08-16', '2023-08-17'],
    length: '153 minutes',
    rating: 'PG13',
    summary:
      'Japan, devastated after the war, faces a new threat in the form of Godzilla. How will the country confront this impossible situation?',
    genrer: 'Action, Adventure,Drama',
    posterURL:
      'https://res.cloudinary.com/domjuxgd5/image/upload/v1701984052/godzilla_h6b4y8.webp',
    new: 'true',
    A: { A1: false, A2: true, A3: true, A4: true, A5: true },
    B: { B1: true, B2: false, B3: false, B4: true, B5: true },
  },
]

export const pageNavLinks = [
  { text: 'what new', path: 'whatson' },
  { text: 'Premium Experiences', path: 'premiumexperience' },
  { text: 'Food & Drink', path: 'foodndrink' },
  { text: 'Gift Cards', path: 'giftcards' },
]

export const carousel = [
  {
    id: 1,
    title: 'Trolls',
    description: '',
    img: 'https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2F01_TBT_WEB_CINEPLEX_1920X336_ENG_NP_KM_F01_101323_20231117153747_0.jpg&w=1200&q=100',
  },
  {
    id: 2,
    title: 'The Hunger Games',
    description: '',
    img: 'https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2FHG_Cineplex_EN_NowPlaying_1920x336_20231117105228_0.jpg&w=1200&q=100',
  },
  {
    id: 3,
    title: 'Five Nights',
    description: '',
    img: 'https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2FCPXRotator_1440_FiveNightsAtFreddys%2520.jpg&w=1200&q=100',
  },
  {
    id: 4,
    title: 'Napoleon',
    description: '',
    img: 'https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2FNPLN_1920x336_ER_Banners_CAN_NP_20231122132209_0.jpg&w=1200&q=100',
  },
  {
    id: 5,
    title: 'Rewards',
    description: '',
    img: 'https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2Fmodernization%2F23-0416-CPGC-CPXHolidayGiftBundle2023-Rotator-Desktop-Normal-1920x336-EN_20231115144520_0.jpg&w=1200&q=100',
  },
]

export default links
