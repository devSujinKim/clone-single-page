import dynamic from 'next/dynamic';

const AlwaysIcon = dynamic(() => import('./components/AlwaysIcon'));
const EarthIcon = dynamic(() => import('./components/EarthIcon'));
const FacebookIcon = dynamic(() => import('./components/FacebookIcon'));
const LogoIcon = dynamic(() => import('./components/LogoIcon'));
const MailFillIcon = dynamic(() => import('./components/MailFillIcon'));
const MailIcon = dynamic(() => import('./components/MailIcon'));
const NaverIcon = dynamic(() => import('./components/NaverIcon'));
const PercentIcon = dynamic(() => import('./components/PercentIcon'));
const PhoneIcon = dynamic(() => import('./components/PhoneIcon'));
const ProtectIcon = dynamic(() => import('./components/ProtectIcon'));
const SearchIcon = dynamic(() => import('./components/SearchIcon'));
const ShippingIcon = dynamic(() => import('./components/ShippingIcon'));
const YoutubeIcon = dynamic(() => import('./components/YoutubeIcon'));

export {
  AlwaysIcon,
  EarthIcon,
  FacebookIcon,
  LogoIcon,
  MailFillIcon,
  MailIcon,
  NaverIcon,
  PercentIcon,
  PhoneIcon,
  ProtectIcon,
  SearchIcon,
  ShippingIcon,
  YoutubeIcon,
};
