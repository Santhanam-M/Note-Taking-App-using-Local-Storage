import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function NoteForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: Number(new Date()),
      title: title,
      content: content,
      createdAt: new Date(),
    };
    addNote(note);
    setTitle("");
    setContent("");
  };

  return (
    <Box sx={{ pl: 2, pb: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "100%", backgroundColor: "" }}
          label="Title"
          id="outlined-size-small"
          size="small"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />

        <TextField
          sx={{ mt: 3, mb: 3, width: "100%" }}
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />

        <input type="submit" value="Add Notes" />
      </form>
    </Box>
  );
}

export default NoteForm;
