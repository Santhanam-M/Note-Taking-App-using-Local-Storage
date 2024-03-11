import NoteItem from "./NoteItem";
import Grid from "@mui/material/Grid";

function NoteList(props) {
  const { notes, deleteNote } = props;

  return (
      <Grid container spacing={2}>
        {notes.map((ele) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={ele.id}>
            <NoteItem {...ele} deleteNote={deleteNote} />
          </Grid>
        ))}
      </Grid>
  );
}

export default NoteList;
