import { useEffect, useRef, useState } from 'react';

const Accounts = (): JSX.Element => {
  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputElement) {
      inputElement.focus();
    }
  };

  // Hàm này được gọi mỗi khi component re-render, điều này làm cho component re-render không cần thiết.
  const setInputRef = (element) => {
    if (inputElement !== element) {
      setInputElement(element);
    }
  };

  console.log('Component re-rendered');

  return (
    <div>
      <input ref={setInputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default Accounts;
