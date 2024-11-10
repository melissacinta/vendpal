import { Loader2Icon } from 'lucide-react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default Spinner;
