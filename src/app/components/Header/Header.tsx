'use client';
import SplitButton from '../SplitButton/SplitButton';
import './Header.scss';
import { useRouter } from 'next/navigation';

export default function Header({ ...props }) {
    const router = useRouter()
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

    return (
        <header>
            <div className="header-container">
                <div className="left">
                    <div className="header-name text-center" onClick={() => router.push('/')}>Troy Bedingfield</div>
                </div>
                <div className="right">
                    <a href="https://www.linkedin.com/in/troy-bedingfield-0b5850a/" target="_blank">LinkedIn</a>

                    <SplitButton dropdownItems={['PDF', 'DOC']} buttonClick={handleButtonClick}>Resume</SplitButton>
                </div>
            </div>
        </header>
    )

}