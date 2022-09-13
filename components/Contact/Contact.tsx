import React, { useRef, useState } from 'react'
import { sendEmail } from '../utils/utils';
import type { APIReturnType } from '../utils/utils';
import indexStyles from '../../styles/index.module.css'
import contactStyles from '../../styles/contact.module.css'
import ResultMessage from '../ResultMessage';

const Contact = () => {
    const [formStat, setFormStat] = useState<APIReturnType>('standby');
    const formRef = useRef<HTMLFormElement>(null);

    const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef?.current) return;
        setFormStat('loading');
        // Send email through emailJS
        const res: APIReturnType = await sendEmail(formRef.current);
        setFormStat(res)
    }

    const getContactUI = (status: APIReturnType) => {

        if (status === 'success' || status === 'error') {
            return <ResultMessage resultStat={status} />;
        }

        const isLoading = status === 'loading';

        return (
            <form
                ref={formRef}
                className={contactStyles.contactForm}
                onSubmit={handleContactForm}
            >

                {/* Full name */}
                <input
                    type="text"
                    name="full_name"
                    placeholder="Full name"
                    required
                    disabled={isLoading}
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    disabled={isLoading}
                />

                {/* Subject */}
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={isLoading}
                />

                {/* Message */}
                <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    required
                    disabled={isLoading}
                />

                <button
                    className={`${indexStyles.button} ${contactStyles.buttonSubmit}`}
                    disabled={isLoading}
                >
                    Submit
                </button>
            </form>
        )
    }

    const contactUI = getContactUI(formStat);

    return (
        <section
            id="contact"
            className={indexStyles.sections}
        >
            <div className={indexStyles.wrapper}>
                <h2 className={indexStyles.sectionTitle}>Contact</h2>
                {contactUI}
            </div>
        </section>
    )
}

export default Contact
