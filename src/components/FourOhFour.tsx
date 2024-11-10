import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';
import { VpIcons } from '../utils/VpIcons';
import Button from './Button';

const FourOhFour = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* SVG Illustration */}
        <div className="w-full max-w-md mx-auto">{VpIcons['fourOhFour']()}</div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
          <p className="text-lg text-palettes-neutral-25 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have gone on a little
            adventure. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => navigate(-1)} className="w-full sm:w-auto">
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>

          <Button
            onClick={() => navigate('/')}
            variant="primary"
            className="w-full sm:w-auto"
          >
            <HomeIcon className="w-5 h-5" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
