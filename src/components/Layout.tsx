import { Menu, Users, X } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { VpIcons } from '../utils/VpIcons';
import { classNames, topBarLinks } from '../utils';
import logo from '../assets/logo.png';
import Button from './Button';
import ProfileCard from './ProfileCard';
import Card from './Card';
const Layout = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className=" p-4 border-b lg:px-12 ">
        <div className="mx-auto grid grid-cols-2 lg:flex items-center">
          <div className="order-1 flex items-center">
            {/* Mobile Menu Button */}
            <button className="lg:hidden mr-4" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            {/* Logo component */}
            <Link
              to={'/'}
              className="flex items-center text-green-800 font-bold text-xl md:h-10 overflow-hidden"
            >
              <img
                src={logo}
                alt="VendPal"
                className="object-cover md:h-full md:w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}

          <Card
            noBorder
            className={classNames(
              isMobileMenuOpen
                ? 'block mt-4 max-lg:space-y-2 max-lg:border-t max-lg:pt-4'
                : 'hidden',
              'order-3 lg:order-2 lg:flex items-center lg:ml-8 max-lg:col-span-2 bg-schemes-surface-container p-2 min-h-[4.75rem]'
            )}
          >
            {topBarLinks?.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={classNames(
                  pathname === link.path ? 'bg-white' : '',
                  'flex items-center px-4 py-2 gap-2 font-medium text-sm xl:text-lg hover:bg-black/5 rounded-2xl'
                )}
              >
                {link.icon as ReactNode}
                {link.label}
              </Link>
            ))}
          </Card>
          <div className="flex items-center justify-end space-x-4 order-2 lg:order-3 ml-auto w-max">
            <Button variant="icon">{VpIcons['bell']()}</Button>
            <Button variant="icon">{VpIcons['message']()}</Button>
            {/* Mobile Sidebar Toggle */}
            <Button
              variant="icon"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <Users className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content*/}
      <div className=" grid sm:grid-cols-12 xl:grid-cols-[444px_auto] xl:max-h-[calc(100vh-109px)] lg:overflow-hidden">
        {/* Profile Card - Desktop */}
        <div className="hidden col-span-12 lg:col-span-3 xl:col-auto lg:block border-r py-6 lg:h-[calc(100vh-109px)] lg:overflow-auto no-scrollbar">
          {/* Existing Profile Card Content */}
          <ProfileCard />
        </div>

        {/* Profile Card - Mobile */}
        <div
          className={`
          lg:hidden fixed inset-y-0 right-0 transform w-80  shadow-lg
          transition-transform duration-300 ease-in-out z-50 bg-white h-screen
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          <>
            <button className="my-4 px-6" onClick={toggleSidebar}>
              <X className="w-6 h-6" />
            </button>
            <div className="h-[calc(100vh-40px)] overflow-auto no-scrollbar">
              <ProfileCard />
            </div>
          </>
        </div>

        {/* Main Content Area */}
        <div className="sm:col-span-12 lg:col-span-9 xl:col-auto py-6 lg:h-[calc(100vh-109px)] lg:overflow-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
