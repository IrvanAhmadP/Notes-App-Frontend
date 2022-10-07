import { Link } from "react-router-dom";

function NoteNotFound() {
  return (
    <div className="flex h-[calc(100vh_-_128px)] items-center justify-center md:h-[calc(100vh_-_162px)]">
      <p className="font-semibold">
        Note not found, return to{" "}
        <Link className="text-blue-500" to="/">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}

export default NoteNotFound;
