// Lightweight loader/executor for Google reCAPTCHA v3
// Requires VITE_RECAPTCHA_SITE_KEY to be set in your frontend env

declare global {
	interface Window {
		grecaptcha?: {
			ready: (cb: () => void) => void;
			execute: (siteKey: string, opts: { action: string }) => Promise<string>;
		};
	}
}

let recaptchaScriptLoadingPromise: Promise<void> | null = null;

const getSiteKey = (): string => {
	const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
	if (!siteKey) {
		throw new Error("Missing VITE_RECAPTCHA_SITE_KEY in environment");
	}
	return siteKey;
};

export const loadRecaptcha = (): Promise<void> => {
	if (typeof window === "undefined") return Promise.resolve();
	if (window.grecaptcha) return Promise.resolve();
	if (recaptchaScriptLoadingPromise) return recaptchaScriptLoadingPromise;

	const siteKey = getSiteKey();
	recaptchaScriptLoadingPromise = new Promise<void>((resolve, reject) => {
		const script = document.createElement("script");
		script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
		document.head.appendChild(script);
	});

	return recaptchaScriptLoadingPromise;
};

export const executeRecaptcha = async (action: string): Promise<string> => {
	await loadRecaptcha();
	const siteKey = getSiteKey();
	return new Promise<string>((resolve, reject) => {
		if (!window.grecaptcha) {
			return reject(new Error("reCAPTCHA is not available on window"));
		}
		window.grecaptcha.ready(() => {
			window.grecaptcha!
				.execute(siteKey, { action })
				.then(resolve)
				.catch((err) => reject(err));
		});
	});
};


