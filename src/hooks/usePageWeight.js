import { useEffect } from "react"

export const usePageWeight = () => {

    useEffect(() => {
        const sendPageWeight = () => {
            const pageWeight = document.getElementsByTagName('html')[0].innerHTML.length;

            if (typeof newrelic !== 'undefined') {
                newrelic.addPageAction('pageWeight', { pageWeight });
            };
        };
        window.addEventListener('load', sendPageWeight);

        return () => {
            window.removeEventListener('load', sendPageWeight);
        }
    }, [])
}
