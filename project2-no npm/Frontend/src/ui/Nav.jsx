import { NavLink } from 'react-router-dom';

const links = [
  {
    text: 'virus scan',
    path: '/virusscan',
  },
  {
    text: 'vulnerability scan',
    path: '/vulnerabilityscan',
  },
  {
    text: 'directory scan',
    path: '/directoryscan',
  },
  {
    text: 'site info scan',
    path: '/siteinfo',
  },
  {
    text: 'Help',
    path: '/help',
  },
];

function Nav() {
  return (
    <ul className="mt-3 flex gap-3 text-[17px] font-semibold capitalize md:mt-0">
      {links.map((link, index) => (
        <li
          key={index}
          className="transition-all duration-300 hover:text-primary-0"
        >
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
