'use client';
import { useEffect } from 'react';
import Button from '../Button/Button';
import SplitButton from '../SplitButton/SplitButton';
import './Header.scss';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header({ ...props }) {
    const router = useRouter()
    const pathname = usePathname()
    const {

    } = props

    function handleButtonClick(item: any) {
        if (item === 'PDF') {
            window.open('troy-bedingfield-resume.pdf');
        } else if (item === 'DOC') {
            window.open('troy-bedingfield-resume.doc');
        } else {
            window.open('troy-bedingfield-resume.pdf');
        }
    }

    function handleMobileMenuClick(item: any) {
        if (item === 'Home') {
            router.push('/')
        } else if (item === 'Design') {
            router.push('/design')
        } else if (item === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/troy-bedingfield-0b5850a/', '_blank');
        } else if (item === 'GitHub') {
            window.open('https://github.com/troybedingfield/', '_blank');
        }
    }

    function handleLinkedinClick() {
        window.open('https://www.linkedin.com/in/troy-bedingfield-0b5850a/', '_blank');
    }
    function handleGithubClick() {
        window.open('https://github.com/troybedingfield/', '_blank');
    }



    return (
        <header>
            <div className="header-container">
                <div className="left-header left relative flex items-center gap-4">
                    <div className='mobile-left-menu'>
                        <MobileMenu menuItems={['Home', 'Design', 'LinkedIn', 'GitHub']} handleMobileMenuClick={handleMobileMenuClick} />
                    </div>
                    <div className="header-name text-center" onClick={() => router.push('/')}>Troy Bedingfield</div>
                    <div className='desktop-left-menu'>
                        {/* {(() => {
                            if (pathname === '/design') {
                                return <Button fill='clear' customColor='#000000' customBGColor='var(--color-clear-button-hover)' maxHeight={36} classNames='flex items-center'>Design</Button>;
                            } else {
                                return <Button fill='clear' customColor='#000000' maxHeight={36} classNames='flex items-center' buttonClick={() => router.push('/design')}>Design</Button>;
                            }
                        })()} */}
                        {pathname === '/design' ?
                            <Button fill='clear' customColor='#000000' customBGColor='var(--color-clear-button-hover)' maxHeight={36} classNames='flex items-center'>Design</Button>
                            :
                            <Button fill='clear' customColor='#000000' maxHeight={36} classNames='flex items-center' buttonClick={() => router.push('/design')}>Design</Button>

                        }

                    </div>

                    {/* <Button fill='clear' customColor='#000000' buttonClick={handleGithubClick}>GitHub</Button> */}
                </div>
                <div className="right">
                    <div className='desktop-right-menu'>
                        <Button fill='clear' customColor='#000000' buttonClick={handleLinkedinClick}>LinkedIn</Button>
                        <Button fill='clear' customColor='#000000' buttonClick={handleGithubClick}>GitHub</Button>
                    </div>

                    {/* <div className='mobile-right-menu'>
                        <SplitButton dropdownItems={['Design', 'LinkedIn', 'GitHub']} buttonClick={handleMobileMenuClick}></SplitButton>
                    </div> */}
                    {/* <a href="https://www.linkedin.com/in/troy-bedingfield-0b5850a/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/troybedingfield/" target="_blank">GitHub</a> */}

                    <SplitButton dropdownItems={['PDF', 'DOC']} buttonClick={handleButtonClick}>Resume</SplitButton>
                </div>
            </div>
        </header>
    )

}