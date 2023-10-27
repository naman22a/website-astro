declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_SANITY_TOKEN: string;
            VITE_SANITY_PROJECT_ID: string;
            VITE_EMAILJS_SERVICE_ID: string;
            VITE_EMAILJS_TEMPLATE_ID: string;
            VITE_EMAILJS_PUBLIC_KEY: string;
        }
    }
}

export {};
