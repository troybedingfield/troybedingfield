'use client';
import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import './SplitButton.scss'
import { AnimatePresence, motion } from 'motion/react';






export default function SplitButton(props: {
    children: ReactNode,
    dropdownItems: string[],
    buttonClick: (item: string) => void
}) {
    const { children, dropdownItems, buttonClick } = props

    const [isOpen, setIsOpen] = useState(false);



    const [dropdownValue, setDropdownValue] = useState(dropdownItems[0]);

    // console.log(dropdownValue);

    const dropdown = useRef<HTMLDivElement | null>(null);

    useOutsideClick(dropdown);

    function splitOpen() {
        setIsOpen(isOpen => !isOpen);
        if (dropdown.current) {
            setIsOpen(false);
        }

    }

    function handleDropdownClick(item: string) {
        // console.log(item)
        setDropdownValue(item);
        splitOpen();
    }

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    function useOutsideClick(ref: RefObject<HTMLDivElement | null>) {

        useEffect(() => {

            const handleClickOutside = (event: MouseEvent) => {
                // console.log(event.target)
                if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
                    // console.log(ref.current.contains(event.target))
                    splitOpen();
                }
            }

            if (ref) {
                // Bind the event listener
                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    // Unbind the event listener on clean up
                    document.removeEventListener("mouseup", handleClickOutside);
                };
            }
        }, [ref])

    }

    return (
        <div className="split-container">
            <button className=""
                // onClick={() => buttonClick(dropdownValue)}>
                onClick={() => buttonClick(dropdownValue)}>
                {children ?? dropdownValue}
            </button>
            <div className="dropdown">
                <button onClick={splitOpen}>
                    <span className={isOpen ? "up-arrow" : "down-arrow"}></span>
                </button>
                <AnimatePresence>
                    {!isOpen ? null : (<motion.div key="modal"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} className="dropdown-content" ref={dropdown}>
                        {/* <a >
                    
                    </a> */}

                        {dropdownItems.map((item: string, index: number) => {
                            return (<motion.a initial={{ opacity: 0 }}
                                animate={{ opacity: 1, }}
                                transition={{ delay: 0.1 }}
                                exit={{ opacity: 0 }} key={index} onClick={() => handleDropdownClick(item)}>{item}</motion.a>)
                        })}



                    </motion.div>)}
                </AnimatePresence>
            </div>
        </div>
    )
}