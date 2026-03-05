import { create } from 'zustand';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormState {
  formStatus: FormStatus;
  setFormStatus: (status: FormStatus) => void;
  resetForm: () => void;
}

export const useContactForm = create<ContactFormState>((set) => ({
  formStatus: 'idle',
  setFormStatus: (status) => set({ formStatus: status }),
  resetForm: () => set({ formStatus: 'idle' }),
}));

