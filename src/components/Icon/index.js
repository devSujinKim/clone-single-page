import dynamic from 'next/dynamic';

const AlwaysIcon = dynamic(() => import('./components/AlwaysIcon'));
const EarthIcon = dynamic(() => import('./components/EarthIcon'));
const FacebookIcon = dynamic(() => import('./components/FacebookIcon'));
const LogoIcon = dynamic(() => import('./components/LogoIcon'));
const MailIcon = dynamic(() => import('./components/MailIcon'));
const NaverIcon = dynamic(() => import('./components/NaverIcon'));
const PercentIcon = dynamic(() => import('./components/PercentIcon'));
const ProtectIcon = dynamic(() => import('./components/ProtectIcon'));
const SearchIcon = dynamic(() => import('./components/SearchIcon'));
const ShippingIcon = dynamic(() => import('./components/ShippingIcon'));
const YoutubeIcon = dynamic(() => import('./components/YoutubeIcon'));

export {
  AlwaysIcon,
  EarthIcon,
  FacebookIcon,
  LogoIcon,
  MailIcon,
  NaverIcon,
  PercentIcon,
  ProtectIcon,
  SearchIcon,
  ShippingIcon,
  YoutubeIcon,
};
