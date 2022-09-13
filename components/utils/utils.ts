import emailjs from '@emailjs/browser';

// Scroll to passed id.
const scrollToTargetId = (targetId: string) => {
    if (!targetId) return;
    const section = document.querySelector(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

type APIReturnType = 'standby' | 'loading' | 'success' | 'error';

const sleep = (time: number) => new Promise((resolve) => setTimeout(() => resolve(''), time))

// Send email.
const sendEmail = async (formObj: HTMLFormElement): Promise<APIReturnType> => {

    if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) return 'error';

    await sleep(3000);

    return testPromise(true).then(
        res => res as APIReturnType,
        err => err as APIReturnType
    );

    // return emailjs.sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     formObj,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    // ).then(
    //     () => 'success', // Successfully sent
    //     () => 'error' // Error happened
    // )
}

const testPromise = (stat: boolean) => {
    return new Promise((resolve, reject) => {
        if (stat) {
            resolve('success');
        }
        else {
            reject('error');
        }
    })
}


export { scrollToTargetId, sendEmail }
export type { APIReturnType };