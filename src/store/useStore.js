import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  notes: [],

  login: (user) => set({ user }),
  logout: () => set({ user: null }),

  setNotes: (notes) => set({ notes }),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (updatedNote) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    )
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter((note) => note.id !== id)
  })),
}));
