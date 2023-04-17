import { Button as AntButton } from 'antd';

type ButtonProps = {
  type: 'primary' | 'ghost' | 'dashed' | 'default';
  children: string;
  size: 'large' | 'middle' | 'small';
};

export function Button({ type, children, size }: ButtonProps) {
  return (
    <AntButton block={true} type={type} size={size}>
      {children}
    </AntButton>
  );
}
