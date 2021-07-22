import { useCallback, useState } from "react";

export const useModalState = (defaultIsOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);

  return { isOpen, onToggle, onClose, onOpen };
};
