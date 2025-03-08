'use client';

import './Button.scss'

type ButtonProps = Readonly<{
    children?: string,
    type?: "submit" | "reset" | "button" | undefined,
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'disabled' | undefined,
    fill?: 'solid' | 'outline' | 'clear' | undefined,
    border?: 'true' | undefined,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large' | undefined,
    uppercase?: 'true' | undefined,
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: number,
    minHeight?: number,
    customBGColor?: string,
    customColor?: string,
    classNames?: string,
    formAction?: string,
    customBorderColor?: string,
    buttonClick?: React.MouseEventHandler<HTMLButtonElement>
}>

export default function Button({ children, ...props }: ButtonProps) {
    const {
        color = 'default',
        disabled,
        fill = 'solid',
        size = 'medium',
        uppercase,
        border,
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        customBGColor,
        customBorderColor,
        customColor,
        buttonClick,
        formAction,
        classNames,
        type,
    } = props

    return (
        <button
            type={type}
            style={{
                ...(minWidth && { minWidth: minWidth + 'px' }),
                ...(maxWidth && { maxWidth: maxWidth + 'px' }),
                ...(minHeight && { minHeight: minHeight + 'px' }),
                ...(customBGColor && { backgroundColor: customBGColor })
            }}
            className={[color, fill, size, border ?? '', uppercase ?? '', classNames ?? classNames].join(' ')}
            onClick={buttonClick}
            formAction={formAction}
            disabled={disabled}>
            {children}
        </button>
    )
}