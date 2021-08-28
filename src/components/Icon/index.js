import dynamic from 'next/dynamic';

const AlwaysIcon = dynamic(() => import('./components/AlwaysIcon'));
const EarthIcon = dynamic(() => import('./components/EarthIcon'));
const LogoIcon = dynamic(() => import('./components/LogoIcon'));
const MailIcon = dynamic(() => import('./components/MailIcon'));
const PercentIcon = dynamic(() => import('./components/PercentIcon'));
const ProtectIcon = dynamic(() => import('./components/ProtectIcon'));
const SearchIcon = dynamic(() => import('./components/SearchIcon'));
const ShippingIcon = dynamic(() => import('./components/ShippingIcon'));

export {
  AlwaysIcon,
  EarthIcon,
  LogoIcon,
  MailIcon,
  PercentIcon,
  ProtectIcon,
  SearchIcon,
  ShippingIcon,
};
