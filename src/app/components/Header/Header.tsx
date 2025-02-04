'use client';
import { useEffect } from 'react';
import Button from '../Button/Button';
import SplitButton from '../SplitButton/SplitButton';
import './Header.scss';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';

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

    function handleLinkedinClick() {
        window.open('https://www.linkedin.com/in/troy-bedingfield-0b5850a/', '_blank');
    }
    function handleGithubClick() {
        window.open('https://github.com/troybedingfield/', '_blank');
    }



    return (
        <header>
            <div className="header-container">
                <div className="left flex items-center gap-4">
                    <div className="header-name text-center" onClick={() => router.push('/')}>Troy Bedingfield</div>
                    {(() => {
                        if (pathname === '/design') {
                            return <Button fill='clear' customColor='#000000' customBGColor='var(--color-clear-button-hover)' maxHeight={36} classNames='flex items-center'>Design</Button>;
                        } else {
                            return <Button fill='clear' customColor='#000000' maxHeight={36} classNames='flex items-center' buttonClick={() => router.push('/design')}>Design</Button>;
                        }
                    })()}

                    {/* <Button fill='clear' customColor='#000000' buttonClick={handleGithubClick}>GitHub</Button> */}
                </div>
                <div className="right">
                    <Button fill='clear' customColor='#000000' buttonClick={handleLinkedinClick}>LinkedIn</Button>
                    <Button fill='clear' customColor='#000000' buttonClick={handleGithubClick}>GitHub</Button>
                    {/* <a href="https://www.linkedin.com/in/troy-bedingfield-0b5850a/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/troybedingfield/" target="_blank">GitHub</a> */}

                    <SplitButton dropdownItems={['PDF', 'DOC']} buttonClick={handleButtonClick}>Resume</SplitButton>
                </div>
            </div>
        </header>
    )

}