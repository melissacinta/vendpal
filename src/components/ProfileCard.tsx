// src/components/ProfileCard.jsx
import { useEffect, useState } from 'react';
import { VpIcons } from '../utils/VpIcons';
import Button from './Button';
import { api } from '../service/mockApi';
import { UserProfile } from '@/service/types';
import Spinner from './Spinner';
import Card from './Card';

const ProfileCard = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.getUserProfile();
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white xl:min-w-[21.5313rem]">
      <div className="px-[1.5313rem]">
        <Card className="p-6 mb-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 xl:gap-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mb-4 overflow-hidden">
                <img src={profile?.avatar} alt={profile?.name} />
              </div>
              <h2 className="text-[1.75rem] leading-9 font-medium mb-2">
                {profile?.name}
              </h2>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              {VpIcons['mail']()}
              <span>{profile?.email}</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              {VpIcons['globe']()}
              <span>{profile?.location}</span>
            </div>
            <Button>{VpIcons['setUp']()}Set up your account</Button>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">TEAMS</h3>
            <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
              {profile?.role}
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {VpIcons['departments']()}
                <span>Departments</span>
              </div>
              <span>{profile?.stats.departments}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {VpIcons['units']()}
                <span>Units</span>
              </div>
              <span>{profile?.stats.units}</span>
            </div>
            <Button>
              {VpIcons['upgrade']()}
              Upgrade your plan
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">LINKS</h3>
          {profile?.socialLinks.map((link, index) => (
            <Button key={index} className="!justify-start">
              {VpIcons['links']()} {link.platform}
            </Button>
          ))}
        </Card>
      </div>

      <div className="px-8 py-8 border-t border-schemes-outline mt-4">
        <div className="flex items-center justify-center space-x-4 text-xs lg:text-sm">
          <span>Terms of Service</span>
          <span>{VpIcons['ellipse']()}</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
