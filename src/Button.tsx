import React, { FC, MouseEvent, ReactNode } from 'react';
import styles from './Button.module.css';
import { MdEdit } from "react-icons/md"
interface ButtonProps {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  type?: 'button' | 'submit';
  icon?: number;
}



export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading = false,
  href,
  target,
  type = 'button',
  icon = 0,
}) => {
  const buttonContent: ReactNode = (loading ? 'Loading...' : label);

  const renderIcon = (position: 'left' | 'right') => {
    if (position === 'left' && (icon % 2) === 1) {
      return <MdEdit />;
    }
    if (position === 'right' && (Math.floor(icon / 2) % 2) === 1) {
      return <MdEdit />;
    }
    return <span style={{ width: '1em', display: 'inline-block' }}></span>;
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className="button"
        style={{ textDecoration: 'none' }}
      >
        {buttonContent}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={(disabled || loading) ? (disabled?styles.button_disabled:styles.button_loading) : styles.button}
    >
      <div className={styles.button_index}>
        {renderIcon('left')}
        <span style={{ margin: '0 0.5em' }}>{buttonContent}</span>
        {renderIcon('right')}
      </div>
    </button>
  );
};
