import emailjs from '@emailjs/browser';

// Scroll to passed id.
const scrollToTargetId = (targetId: string) => {
    if (!targetId) return;
    const section = document.querySelector(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type APIReturnType = 'standby' | 'loading' | 'success' | 'error';

// Send email.
const sendEmail = async (formObj: HTMLFormElement): Promise<APIReturnType> => {
    if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) return 'error';

    return emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formObj,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(
        () => 'success', // Successfully sent
        () => 'error' // Error happened
    )
}

export { scrollToTargetId, sendEmail }
export type { APIReturnType };