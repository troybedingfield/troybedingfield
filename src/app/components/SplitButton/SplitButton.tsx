'use client';
import { useEffect, useRef, useState } from 'react';
import './SplitButton.scss'
import { AnimatePresence, motion } from 'motion/react';






export default function SplitButton({ ...props }) {
    const { children, dropdownItems, buttonClick } = props

    const [isOpen, setIsOpen] = useState(false);



    const [dropdownValue, setDropdownValue] = useState(dropdownItems[0]);

    // console.log(dropdownValue);

    const dropdown = useRef<any | undefined>();

    useOutsideClick(dropdown);

    function splitOpen() {
        setIsOpen(isOpen => !isOpen);

    }

    function handleDropdownClick(item: any) {
        // console.log(item)
        setDropdownValue(item);
        splitOpen();
    }

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    function useOutsideClick(ref: any) {

        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    splitOpen();
                }
            }

            if (ref) {
                // Bind the event listener
                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    // Unbind the event listener on clean up
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }
        }, [ref])

    }

    return (
        <div className="split-container">
            <button className=""
                onClick={() => buttonClick(dropdownValue)}>
                {children ? children : dropdownValue}
            </button>
            <div className="dropdown">
                <button onClick={splitOpen}>
                    <span className="down-arrow"></span>
                </button>
                <AnimatePresence>
                    {!isOpen ? null : (<motion.div key="modal"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} className="dropdown-content" ref={dropdown}>
                        {/* <a >
                    
                    </a> */}

                        {dropdownItems.map((item: any, index: number) => {
                            return (<a key={index} onClick={() => handleDropdownClick(item)}>{item}</a>)
                        })}



                    </motion.div>)}
                </AnimatePresence>
            </div>
        </div>
    )
}