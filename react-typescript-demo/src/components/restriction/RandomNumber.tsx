type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

export const RandomNumber: React.FC<RandomNumberProps> = ({
  value,
  isPositive = false,
  isNegative = false,
  isZero = false,
}) => {
  return (
  <div>
    {value} {isPositive && 'is positive'}
    {isNegative && 'is negative'}
    {isZero && 'is zero'}
  </div>
  )
};
