import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import { RoundedButton } from "src/components/";

function NewNoteButton() {
  return (
    <Link to="/new-note">
      <div className="fixed bottom-[72px] right-4 z-10 ">
        <RoundedButton color="bg-blue-500 text-white">
          <PlusIcon className="m-auto h-6" />
        </RoundedButton>
      </div>
    </Link>
  );
}

export default NewNoteButton;
