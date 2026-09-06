'use client';

import { useRef, useState, type FormEvent } from 'react';
import { submitContactForm, type ContactFormState } from '../../app/contact/actions';

const initialContactFormState: ContactFormState = {
  success: false,
  fieldErrors: {},
  values: {
    name: '',
    email: '',
    company: '',
    country: '',
    service: '',
    description: '',
  },
};

const serviceOptions = [
  'Cloud & DevOps Engineering',
  'Managed Cloud & Infrastructure',
  'Cloud Migration & Modernisation',
  'Fractional / Dedicated Technology Team',
  'Software Engineering',
  'Backup & Disaster Recovery',
  'Streaming Infrastructure',
  'Not Sure / Need Guidance',
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="mt-2 text-sm text-functional-error" role="alert">{message}</p>;
}

export function ContactForm() {
  const [state, setState] = useState(initialContactFormState);
  const [isPending, setIsPending] = useState(false);
  const allowNativeSubmit = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (allowNativeSubmit.current) {
      allowNativeSubmit.current = false;
      return;
    }

    event.preventDefault();
    setIsPending(true);

    try {
      const nextState = await submitContactForm(state, new FormData(event.currentTarget));
      setState(nextState);

      if (nextState.validated) {
        allowNativeSubmit.current = true;
        event.currentTarget.requestSubmit();
      } else {
        setIsPending(false);
      }
    } catch {
      setState({
        ...state,
        formError: "We couldn't send your details. Please check the form and try again.",
      });
      setIsPending(false);
    }
  }

  return (
    <form
      action="/"
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-describedby={state.formError ? 'contact-form-error' : undefined}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="contact-bot-field">Do not fill this field</label>
        <input id="contact-bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.formError && (
        <div id="contact-form-error" className="border border-functional-error bg-functional-error/10 p-4 text-sm text-functional-error" role="alert">
          <p className="font-semibold">We couldn't send your details.</p>
          <p className="mt-1">{state.formError.replace("We couldn't send your details. ", '')}</p>
        </div>
      )}

      {state.success && (
        <div className="border border-functional-success bg-functional-success/10 p-4 text-sm text-functional-success" role="status">
          <p className="font-semibold">Thanks. Your project details have been received.</p>
          <p className="mt-1">We will review the information and respond using the contact details you provided.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" defaultValue={state.values.name} aria-invalid={Boolean(state.fieldErrors.name)} aria-describedby={state.fieldErrors.name ? 'name-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus" />
          <FieldError id="name-error" message={state.fieldErrors.name} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">Business Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" defaultValue={state.values.email} aria-invalid={Boolean(state.fieldErrors.email)} aria-describedby={state.fieldErrors.email ? 'email-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus" />
          <FieldError id="email-error" message={state.fieldErrors.email} />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-text-primary">Company</label>
          <input id="company" name="company" type="text" required autoComplete="organization" placeholder="Company name" defaultValue={state.values.company} aria-invalid={Boolean(state.fieldErrors.company)} aria-describedby={state.fieldErrors.company ? 'company-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus" />
          <FieldError id="company-error" message={state.fieldErrors.company} />
        </div>

        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-text-primary">Country</label>
          <input id="country" name="country" type="text" required autoComplete="country-name" placeholder="Select country" defaultValue={state.values.country} aria-invalid={Boolean(state.fieldErrors.country)} aria-describedby={state.fieldErrors.country ? 'country-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus" />
          <FieldError id="country-error" message={state.fieldErrors.country} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-text-primary">Service Required</label>
        <select id="service" name="service" required defaultValue={state.values.service} aria-invalid={Boolean(state.fieldErrors.service)} aria-describedby={state.fieldErrors.service ? 'service-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus">
          <option value="">Select a service</option>
          {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
        <FieldError id="service-error" message={state.fieldErrors.service} />
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-text-primary">Short Project Description</label>
        <textarea id="description" name="description" required rows={6} placeholder="Briefly describe the current environment, problem or project requirement." defaultValue={state.values.description} aria-invalid={Boolean(state.fieldErrors.description)} aria-describedby={state.fieldErrors.description ? 'description-error' : undefined} className="w-full rounded-button border border-border-default bg-bg-surface px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-state-focus" />
        <FieldError id="description-error" message={state.fieldErrors.description} />
      </div>

      <button type="submit" disabled={isPending} className="inline-flex min-h-12 items-center justify-center rounded-button bg-brand-primary px-6 py-3 text-base font-medium text-text-on-brand transition-colors duration-150 ease-standard hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-state-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
        {isPending ? 'Sending…' : 'Send Project Details'}
      </button>

      <p className="text-sm text-text-muted">By submitting this form, you agree that the information provided may be used to respond to your enquiry. See the Privacy Policy for details.</p>
    </form>
  );
}
