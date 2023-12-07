import { IoTicketOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'

const links = [
  {
    text: 'ticket',
    path: 'ticket',
    icon: <IoTicketOutline />,
  },
  {
    text: 'theaters',
    path: 'theaters',
    icon: <CiLocationOn />,
  },
  {
    text: 'search',
    path: 'search',
    icon: <CiSearch />,
  },

  {
    text: 'profile',
    path: 'profile',
    icon: <CiUser />,
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
