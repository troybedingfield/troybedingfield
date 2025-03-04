import { FormEvent, RefObject, useRef, useState } from "react";
import Button from "../Button/Button"
import Toast from "../Toast/Toast";
import './Contact.scss'

import ReCAPTCHA from "react-google-recaptcha";




export default function Contact({ ...props }) {
    const { } = props


    const api = "https://d2nbfvp176.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";

    const email = useRef<HTMLInputElement | null>(null);
    const name = useRef<HTMLInputElement | null>(null);
    const message = useRef<HTMLTextAreaElement | null>(null);
    const form = useRef<HTMLFormElement | null>(null);

    const [showToast, setShowToast] = useState(false)

    const recaptcha = useRef<ReCAPTCHA | null>(null)



    async function handleFormSubmit(event: FormEvent<HTMLFormElement>, email: RefObject<null | HTMLInputElement>, name: RefObject<null | HTMLInputElement>, message: RefObject<null | HTMLTextAreaElement>) {

        event.preventDefault();

        const captchaValue = recaptcha.current?.getValue()

        if (!captchaValue) {
            alert('Please verify the reCAPTCHA!')
        } else {
            // make form submission
            const formData = {
                FullName: name.current?.value,
                Email: email.current?.value,
                Comment: message.current?.value
            }

            const response = await fetch(api, {
                method: 'POST',
                body: JSON.stringify(formData),

            });

            const resData = response;

            if (resData.status !== 200) {
                throw new Error('Failed to send email')
            }

            if (resData.status === 200) {
                console.log('Email Succesfully sent!');
                return openToast();
            }
        }
    }





    function openToast() {
        form.current?.reset();
        setShowToast(prevState => !prevState);
        setTimeout(() => {
            setShowToast(prevState => !prevState);
        }, 3000)
    }


    return (
        <>

            {showToast && <Toast state="open" type="success" message="Email Succesfully sent!" />}
            <div className="form-container">
                <p className="text-center font42">Interested in working together?</p>
                <form ref={form} onSubmit={(e) => handleFormSubmit(e, email, name, message)}>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input required ref={email} type="email" className="form-control" name="Email" aria-describedby="emailHelp" placeholder="Enter email"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input required ref={name} type="text" className="form-control" name="FullName" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea required ref={message} className="form-control" rows={5} name="Comment">
                        </textarea>
                    </div>
                    <div >
                        {/* <re-captcha (resolved)="resolved($event)" siteKey="{{SITE_KEY}}">
            </re-captcha> */}
                    </div>
                    <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY!} />
                    <Button maxWidth={88}

                    >Submit</Button>
                </form>
            </div>
        </>
    )
}