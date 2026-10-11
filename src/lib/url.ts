const basis = import.meta.env.BASE_URL.replace(/\/$/, '');

// Interner Link, der auch unter einem Unterpfad (GitHub-Pages-Testadresse) funktioniert.
export const url = (pfad: string) => basis + pfad;
