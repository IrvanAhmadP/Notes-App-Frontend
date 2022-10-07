import { Link } from "react-router-dom";

function DataNotFound() {
  return (
    <div className="flex h-[calc(100vh_-_128px_-_57px)] items-center justify-center md:h-[calc(100vh_-_162px_-_57px)]">
      <p className="font-semibold">
        Data not found,{" "}
        <Link className="text-blue-500" to="/new-note">
          create a note
        </Link>
        .
      </p>
    </div>
  );
}

export default DataNotFound;
