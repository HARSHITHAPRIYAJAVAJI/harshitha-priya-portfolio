import { useState, useCallback } from 'react';

export const useClipboard = (timeout: number = 2000) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string, id: string = 'default') => {
      if (!navigator?.clipboard) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), timeout);
        } catch (err) {
          console.error('Fallback: Copy failed', err);
        }
        document.body.removeChild(textArea);
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), timeout);
      } catch (error) {
        console.error('Failed to copy text: ', error);
        setCopiedId(null);
      }
    },
    [timeout]
  );

  return { copiedId, isCopied: (id: string = 'default') => copiedId === id, copy };
};
