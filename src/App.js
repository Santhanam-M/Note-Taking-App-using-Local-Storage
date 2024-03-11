import NoteForm from "./components/NoteForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { Typography } from "@mui/material";

function App() {
  const [notes, setNotes] = useState([]);

  //add notes
  const addNote = (noteObj) => {
    setNotes([...notes, noteObj]);
  };

    //deleting notes
    function deleteNote(id){
      const result = notes.filter((ele)=>{
        return ele.id !== id
      })
      setNotes(result)
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
            <NoteForm addNote={addNote} />
          </Grid>

          <Grid item lg={9}>
            <NoteList notes={notes} deleteNote={deleteNote}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
