import NoteForm from "./components/NoteForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { Typography } from "@mui/material";

function App() {
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  function editNote(addId, addTitle, addContent) {
    setEditId(addId);
    setEditTitle(addTitle);
    setEditContent(addContent);
  }

  function updateNote(newNote) {
    const changeNote = notes.map((ele) => {
      if (ele.id == newNote.id) {
        return { ...ele, ...newNote };
      } else {
        return { ...ele };
      }
    });
    setNotes(changeNote)
    setEditTitle("")
    setEditContent("")
  }

  //add notes
  const addNote = (noteObj) => {
    setNotes([...notes, noteObj]);
  };

  //deleting notes
  function deleteNote(id) {
    const result = notes.filter((ele) => {
      return ele.id !== id;
    });
    setNotes(result);
  }

  //getting data form localstorage
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  //adding notes to localstorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box bgcolor="#DDD0C8">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", pt: 3, pb: 3 }}
        >
          Note Taking App
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <NoteForm
              addNote={addNote}
              editId={editId}
              editTitle={editTitle}
              editContent={editContent}
              updateNote={updateNote}
            />
          </Grid>

          <Grid item lg={9}>
            <NoteList
              notes={notes}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
