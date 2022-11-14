import React, { useRef, useState } from 'react';
import Image from "next/image";
import { sendEmail } from '../utils/utils';
import type { APIReturnType } from '../utils/utils';
import indexStyles from '../../styles/index.module.css';
import contactStyles from '../../styles/contact.module.css';
import ResultMessage from '../ResultMessage';
import LoadingIndicator from '../LoadingIndicator';
import SectionLayout from '../SectionLayout';

const Contact = () => {
    const [formStat, setFormStat] = useState<APIReturnType>('standby');
    const formRef = useRef<HTMLFormElement>(null);

    const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef?.current) return;
        setFormStat('loading');
        // Send email through emailJS
        const res: APIReturnType = await sendEmail(formRef.current);
        setFormStat(res);
    };

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
                    {isLoading ?
                        <LoadingIndicator />
                        : 'Submit'
                    }
                </button>
            </form>
        );
    };

    const contactFormUI = getContactUI(formStat);

    return (
        <SectionLayout sectionId='contact'>
            <h2 className={indexStyles.sectionTitle}>Contact</h2>
            <div className={contactStyles.contactSectionContainer}>
                <div className={contactStyles.contactIntro}>
                    <h3 className={contactStyles.myName}>
                        Soma Ikeda
                    </h3>
                    <p className={contactStyles.location}>
                        🍁Burnaby, BC, Canada
                    </p>
                    <p className={contactStyles.contactIntroDetail}>
                        If you ever want to grab a coffee/bubble tea or just want a quick chat - you can find me on social media or you can send me a message here!
                    </p>
                    <div className={contactStyles.snsIcons}>
                        <a
                            href="https://www.linkedin.com/in/soma-ikeda-99b9741b6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/assets/linkedin.png"
                                alt="linkedin icon"
                                width={25}
                                height={25}
                            />
                        </a>

                        <a
                            href="https://github.com/Soma-dev0808"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/assets/github.png"
                                alt="github icon"
                                width={25}
                                height={25}
                            />
                        </a>
                    </div>

                </div>
                {contactFormUI}
            </div>
        </SectionLayout>
    );
};

export default Contact;
