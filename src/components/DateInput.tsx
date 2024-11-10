import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { VpIcons } from '../utils/VpIcons';
import { format } from 'date-fns';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  prefix?: string;
}

const DateInput: React.FC<{ prefix?: string }> = ({ prefix }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const ExampleCustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, prefix }, ref) => (
      <div className="flex items-center gap-2 max-sm:flex-col">
        <span>{prefix}</span>
        <button
          onClick={onClick}
          ref={ref}
          className="flex items-center space-x-2 bg-schemes-surface-container px-4 py-2 rounded-xl transition-all duration-300 ease-linear"
        >
          {VpIcons['calendar']()}
          <span>{format(new Date(value as string), 'dd LLLL, yyyy')}</span>
        </button>
      </div>
    )
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => date && setStartDate(date)}
      customInput={<ExampleCustomInput prefix={prefix} />}
    />
  );
};

export default DateInput;
