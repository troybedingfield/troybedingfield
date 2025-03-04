'use client';
import { type RefObject, useEffect, useRef, useState } from 'react';
import './MobileMenu.scss'
import { AnimatePresence, motion } from 'motion/react';






export default function MobileMenu(props: {
    menuItems: (string | string[])[],
    handleMobileMenuClick: (item: string) => void
}) {
    const { menuItems, handleMobileMenuClick } = props

    const [isOpen, setIsOpen] = useState(false);



    const [, setDropdownValue] = useState(menuItems[0]);

    // console.log(dropdownValue);

    const dropdown = useRef<HTMLDivElement | null>(null);

    useOutsideClick(dropdown);

    function handleMenuIconClick() {
        setIsOpen(isOpen => !isOpen);
        if (dropdown.current) {
            setIsOpen(false);
        }
    }

    function handleDropdownClick(item: string) {
        // console.log(item)
        setDropdownValue(item);
        handleMobileMenuClick(item);
        handleMenuIconClick();
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
                    handleMenuIconClick();
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


        <div className="mobileMenuContainer flex relative">
            {/* <button className=""
                    onClick={() => buttonClick(dropdownValue)}>
                    {children ? children : dropdownValue}
                </button> */}
            <div id="desktop-clear" className='relative flex' onClick={handleMenuIconClick}>
                <div
                    id="closeIconDesktop"
                    className={isOpen ? 'open' : undefined}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="dropdown">

                {/* <button onClick={handleMenuIconClick}>
                        <span className="down-arrow"></span>
                    </button> */}
                <AnimatePresence>
                    {!isOpen ? null : (<motion.div key="modal"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} className="dropdown-content" ref={dropdown}>
                        {/* <a >
                    
                    </a> */}

                        {menuItems.map((item: string | string[], index: number) => {
                            if (Array.isArray(item)) {

                                return (item.map((subItem: string, subIndex: number) => {
                                    return (<motion.a initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, }}
                                        transition={{ delay: 0.1 }}
                                        exit={{ opacity: 0 }} className='subItem' key={subIndex} onClick={() => handleDropdownClick(subItem)}>{subItem}</motion.a>)
                                }))
                            } else {
                                return (<motion.a initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, }}
                                    transition={{ delay: 0.1 }}
                                    exit={{ opacity: 0 }} key={index} onClick={() => handleDropdownClick(item)}>{item}</motion.a>)
                            }

                        })}



                    </motion.div>)}
                </AnimatePresence>
            </div>
        </div>

    )
}