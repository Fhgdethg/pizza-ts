import React from 'react';

interface ISpinnerProps {
  size?: number;
  isCover?: boolean;
  isFixed?: boolean;
  className?: string;
}

const Spinner: React.FC<ISpinnerProps> = ({
  size = 38,
  isCover = false,
  isFixed = false,
  className,
}) => {
  const classes = `spinner_overlay ${className} ${
    isCover ? 'cover' : ''
  } ${isFixed ? 'fixed' : ''}`;

  return (
    <div className={classes}>
      <div
        className='lds_ring'
        style={{
          width: size,
          height: size,
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              style={{
                width: size,
                height: size,
                borderWidth: size / 10,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Spinner;
