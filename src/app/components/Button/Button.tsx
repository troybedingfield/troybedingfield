'use client';

import './Button.scss'

export default function Button({ ...props }) {
    const {
        children,
        color = 'default',
        disabled,
        fill = 'solid',
        size = 'medium',
        uppercase,
        maxWidth,
        minWidth,
        customBGColor,
        buttonClick
    } = props

    return (
        <button style={{ minWidth: minWidth + 'px', maxWidth: maxWidth + 'px' }} className={[color, fill, size].join(' ')} onClick={buttonClick}>{children}</button>
    )
}