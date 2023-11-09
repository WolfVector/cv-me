import { useEffect } from 'react';

import { StyledButton } from '../atoms';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `CV_Me_Please_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'CV Me Please';
    });
  }, []);

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      Descargar como PDF
    </StyledButton>
  );
};
