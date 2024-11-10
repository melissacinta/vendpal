import { classNames } from '../utils';
import { ReactNode } from 'react';

const Card = ({
  children,
  noBorder,
  className,
}: {
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
}) => {
  return (
    <div
      className={classNames(
        noBorder ? '' : 'border border-schemes-outline',
        'rounded-3xl',
        className as string
      )}
    >
      {children}
    </div>
  );
};

export default Card;
