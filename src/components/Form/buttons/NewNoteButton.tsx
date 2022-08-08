import { Link } from "react-router-dom";

function NewNoteButton() {
  return (
    <Link to="/new-note">
      <button className="fixed bottom-[72px] z-10 right-4 bg-blue-500 hover:bg-blue-600 h-12 w-12 text-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Link>
  );
}

export default NewNoteButton;
