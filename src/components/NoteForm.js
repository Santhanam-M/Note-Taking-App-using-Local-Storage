import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function NoteForm(props) {
  const { addNote, editId, editTitle, editContent, updateNote } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: editId ? editId : Number(new Date()),
      title: title,
      content: content,
      createdAt: new Date(),
    };
    {editId ? updateNote(note) : addNote(note)}
    setTitle("");
    setContent("");
  };

  useEffect(()=>{
    if(editTitle && editContent){
      setTitle(editTitle)
      setContent(editContent)
    }
  }, [editTitle, editContent])

  const handleCancel = ()=>{
    setTitle("")
    setContent("")
  }

  return (
    <Box sx={{ pl: 2, pb: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "100%", backgroundColor: "#FFFFF7" }}
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
          sx={{ mt: 3, mb: 3, width: "100%", backgroundColor : "#FFFFF7" }}
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

        <input type="submit" value={(editTitle && editContent) ? "Update Notes" : "Add Notes"} />
      </form>
    </Box>
  );
}

export default NoteForm;
