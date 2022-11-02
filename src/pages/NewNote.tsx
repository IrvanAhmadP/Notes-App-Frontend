import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Textarea, SimpleButton } from "src/components";
import { addNote } from "src/utils/api";
import { useInput, useInputValidation } from "src/hooks/useInput";
import { useLocale } from "src/contexts/localeContext";
import { newNoteContent } from "src/utils/content";
import MainLayout from "src/layouts/MainLayout";

function NewNote() {
  const { locale } = useLocale();
  const t = newNoteContent()[locale];
  const navigate = useNavigate();
  const [title, titleError, handleTitleChange, handleTitleReset] =
    useInputValidation("title");
  const [body, handleBodyChange, handleBodyReset] = useInput();

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  const handleResetNote = () => {
    handleTitleReset();
    handleBodyReset();
  };

  const handleSaveNote = () => {
    addNote({ title, body });
    handleResetNote();
    navigate("/");
  };

  return (
    <MainLayout>
      <h2 className="pt-2 text-xl font-semibold capitalize">{t.title}</h2>

      <Input
        label={t.titleInput}
        name="title"
        value={title}
        placeholder={t.titleInput}
        error={titleError}
        handleChange={handleTitleChange}
      />

      <Textarea
        label={t.bodyInputLabel}
        placeholder={t.bodyInputPlaceholder}
        value={body}
        handleChange={handleBodyChange}
      />

      <div className="float-right my-2 grid w-56 grid-cols-2 gap-2">
        <SimpleButton
          color="bg-red-400 text-white"
          handleClick={handleResetNote}
        >
          {t.resetButton}
        </SimpleButton>
        <SimpleButton
          disabled={title === "" || titleError !== ""}
          color="bg-blue-400 text-white"
          handleClick={handleSaveNote}
        >
          {t.saveButton}
        </SimpleButton>
      </div>
    </MainLayout>
  );
}

export default NewNote;
