import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

export interface AvatarComponentProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  isOnline?: boolean;
}

export const AvatarComponent: React.FC<AvatarComponentProps> = ({
  src,
  isOnline = false,
  ...props
}) => {
  return (
    <img
      src={src}
      className={`${styles.avatar} ${isOnline ? styles.online : ''}`}
      {...props}
    />
  );
};
