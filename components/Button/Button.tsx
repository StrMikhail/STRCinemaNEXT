import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg'
export const Button = ({ children, mode, arrow='none', className, ...props }: ButtonProps) : JSX.Element => {
    return (
        <button className={cn(styles.card, className, {
                [styles.primary]: mode === 'primary',
                [styles.ghost]: mode === 'ghost',
                                [styles.ghost]: mode === 'ghost'

            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right',
            })}>  
            <ArrowIcon/>
                </span>}
        </button>
    )
};
