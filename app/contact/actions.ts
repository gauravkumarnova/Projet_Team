const serviceOptions = new Set([
  'Cloud & DevOps Engineering',
  'Managed Cloud & Infrastructure',
  'Cloud Migration & Modernisation',
  'Fractional / Dedicated Technology Team',
  'Software Engineering',
  'Backup & Disaster Recovery',
  'Streaming Infrastructure',
  'Not Sure / Need Guidance',
]);

export interface ContactFormState {
  success: boolean;
  validated?: boolean;
  formError?: string;
  fieldErrors: Record<string, string>;
  values: Record<string, string>;
}

function stringValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
}

function getValues(formData: FormData) {
  return {
    name: stringValue(formData, 'name'),
    email: stringValue(formData, 'email'),
    company: stringValue(formData, 'company'),
    country: stringValue(formData, 'country'),
    service: stringValue(formData, 'service'),
    description: stringValue(formData, 'description'),
  };
}

function isSpamSubmission(formData: FormData) {
  return stringValue(formData, 'bot-field').length > 0;
}

export function validateContactForm(formData: FormData): ContactFormState {
  const values = getValues(formData);
  const fieldErrors: Record<string, string> = {};

  if (isSpamSubmission(formData)) {
    return {
      success: false,
      formError: "We couldn't send your details. Please check the form and try again.",
      fieldErrors: {},
      values,
    };
  }

  if (!values.name) fieldErrors.name = 'Enter your name.';
  if (!values.email) {
    fieldErrors.email = 'Enter your business email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = 'Enter a valid business email.';
  }
  if (!values.company) fieldErrors.company = 'Enter your company name.';
  if (!values.country) fieldErrors.country = 'Enter your country.';
  if (!values.service || !serviceOptions.has(values.service)) fieldErrors.service = 'Select the service you need.';
  if (!values.description) fieldErrors.description = 'Describe the current environment, problem or project requirement.';

  if (values.name.length > 120) fieldErrors.name = 'Use 120 characters or fewer.';
  if (values.email.length > 254) fieldErrors.email = 'Use 254 characters or fewer.';
  if (values.company.length > 160) fieldErrors.company = 'Use 160 characters or fewer.';
  if (values.country.length > 100) fieldErrors.country = 'Use 100 characters or fewer.';
  if (values.description.length > 4000) fieldErrors.description = 'Use 4000 characters or fewer.';

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors, values };
  }

  return {
    success: false,
    validated: true,
    fieldErrors: {},
    values,
  };
}
