import dynamic from 'next/dynamic';

const LogoIcon = dynamic(() => import('./components/LogoIcon'));
const MailIcon = dynamic(() => import('./components/MailIcon'));
const SearchIcon = dynamic(() => import('./components/SearchIcon'));

export { LogoIcon, MailIcon, SearchIcon };
