export function Moon() {
  return (
    <div className="flex justify-center items-center h-full hover:animate-wiggle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon-icon lucide-moon"
      >
        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
      </svg>
    </div>
  );
}
export function Sun() {
  return (
    <div className="flex justify-center items-center h-full group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun-icon lucide-sun"
      >
        <circle cx="12" cy="12" r="4" />

        <path
          d="M12 2v2"
          className="transition-opacity opacity-0  group-hover:opacity-100 duration-100"
        />

        <path
          d="M12 20v2"
          className="transition-opacity opacity-0 group-hover:opacity-100 duration-200"
        />

        <path
          d="m4.93 4.93 1.41 1.41"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-400"
        />

        <path
          d="m17.66 17.66 1.41 1.41"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-600"
        />

        <path
          d="M2 12h2"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-800"
        />

        <path
          d="M20 12h2"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-1000"
        />

        <path
          d="m6.34 17.66-1.41 1.41"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-1200"
        />

        <path
          d="m19.07 4.93-1.41 1.41"
          className="opacity-0 transition-opacity group-hover:opacity-100 duration-1400"
        />
      </svg>
    </div>
  );
}

// i could directly
