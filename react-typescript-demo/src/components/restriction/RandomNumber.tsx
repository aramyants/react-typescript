type RandomNumberType = {
  value: number
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
}

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

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
