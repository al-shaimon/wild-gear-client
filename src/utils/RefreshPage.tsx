import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const useBeforeUnload = (message: string) => {
  // Show Warning before refresh the page
  const cart = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    if (cart.length > 0) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cart.length, message]);
};

export default useBeforeUnload;
