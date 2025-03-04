import { createPortal } from "react-dom"
import './Toast.scss'
import { RefObject, useRef } from "react"

export default function Toast({ ...props }) {
    const { message, type, state = 'close' } = props

    const toast = useRef<HTMLDivElement | null>(null)

    function dismiss(ref: RefObject<HTMLDivElement | null>) {
        // console.log(ref);
        ref.current?.classList.remove('open');
        ref.current?.classList.add('close');
    }

    return (
        <div ref={toast} className={["toast", type + "-toast", state].join(' ')}>
            <div className="toast-interior">
                {message}
            </div>

            <a className="toast-close" onClick={() => dismiss(toast)}>

            </a>
        </div>

    )
}
