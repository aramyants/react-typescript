type ButtonProps = {
  variant: 'primary' | 'secondary',
  children: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const CustomButton = ({variant, children, ...props}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...props}>
      {children}
    </button>
  );
}
