import { type FormEvent, useState } from 'react';

const EMAIL = 'nikolic.aleks90@gmail.com';
const FORMSPREE_ACTION = 'https://formspree.io/xgenowod';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  const dismissSuccess = () => setSubmitState('idle');

  return (
    <section id="contact" className="contact sectionContainer">
      <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="800">
        Get In Touch
      </h2>

      <div className="contactContainer">
        <div className="emailMe" id="emailMe">
          <h4 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
            Drop me a line!
          </h4>
          <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
            Not a fan of forms? Send me an <a href={`mailto:${EMAIL}`}>email</a>. 🤘
          </p>
          <input
            className="myEmail"
            id="myEmail"
            type="text"
            readOnly
            value={EMAIL}
            onClick={copyEmail}
            onKeyDown={(e) => e.key === 'Enter' && copyEmail()}
            aria-label="Email address, click to copy"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
          />
          {copied ? (
            <p className="copyPrompt" role="status">
              Copied to Clipboard!
            </p>
          ) : null}
        </div>

        <div>
          <form id="contactForm" className="contactForm" onSubmit={onSubmit}>
            {submitState === 'success' ? (
              <div className="emailSent">
                <p>Your message successfully submitted. Thank you, I will get back to you soon!</p>
                <button type="button" id="closePopup" onClick={dismissSuccess} aria-label="Dismiss message">
                  <i className="fas fa-times" aria-hidden />
                </button>
              </div>
            ) : null}
            {submitState === 'error' ? (
              <div className="emailSent" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
                <p>Something went wrong. Please try again or email me directly.</p>
                <button type="button" onClick={() => setSubmitState('idle')} aria-label="Dismiss error">
                  <i className="fas fa-times" aria-hidden />
                </button>
              </div>
            ) : null}
            <div>
              <input type="text" id="name" name="name" placeholder="Your name" required />
              <input type="text" id="email" name="email" placeholder="Email address" required />
            </div>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" required />
            <button type="submit" id="submit" name="submit" className="formSubmit" disabled={submitState === 'submitting'}>
              {submitState === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
