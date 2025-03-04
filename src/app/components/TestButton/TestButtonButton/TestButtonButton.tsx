'use client';

import './TestButtonButton.scss'

type ButtonProps = Readonly<{
    children?: string,
    color?: string,
    fill?: string,
    border?: string,
    disabled?: boolean,
    size?: string,
    uppercase?: boolean,
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

export default function TestButtonButton({ children, ...props }: ButtonProps) {
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
        classNames
    } = props

    return (
        <button
            style={{ minWidth: minWidth + 'px', maxWidth: maxWidth + 'px', minHeight: minHeight + 'px', maxHeight: maxHeight + 'px', backgroundColor: customBGColor, color: customColor, borderColor: customBorderColor }}
            // eslint-disable-next-line
            className={[color, fill, size, border ?? 'border', uppercase ? 'text-uppercase' : '', classNames ? classNames : ''].join(' ')}
            onClick={buttonClick}
            formAction={formAction}
            disabled={disabled}>
            {children}
        </button>


    )
}