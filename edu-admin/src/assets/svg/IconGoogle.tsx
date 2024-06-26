const IconGoogle = ({ size = '48' }: { size?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <path
        fill="#4285F4"
        d="M45.12 24.73c0-1.29-.11-2.52-.31-3.71H24v7.02h11.86c-.51 2.64-2.04 4.87-4.34 6.36v5.27h6.99c4.09-3.77 6.61-9.33 6.61-14.94z"
      />
      <path
        fill="#34A853"
        d="M24 46c6.02 0 11.06-1.99 14.74-5.4l-6.99-5.27c-2.07 1.4-4.69 2.24-7.75 2.24-5.96 0-11-4.03-12.8-9.49H3.07v5.48C6.75 41.87 14.74 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.2 28.08C10.66 26.68 10.36 25.14 10.36 23.5c0-1.64.3-3.18.84-4.58V13.44H3.07C1.11 17.1 0 20.71 0 24.5s1.11 7.4 3.07 11.06l8.13-7.48z"
      />
      <path
        fill="#EA4335"
        d="M24 9.5c3.29 0 6.27 1.13 8.62 3.33l6.43-6.43C34.9 2.34 29.87 0 24 0 14.74 0 6.75 4.13 3.07 11.94l8.13 5.48C13 12.03 18.04 9.5 24 9.5z"
      />
    </svg>
  );
};
export default IconGoogle;
