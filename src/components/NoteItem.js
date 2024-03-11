import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, Button } from "@mui/material";

function NoteItem(props) {
  const { id, title, content, createdAt, deleteNote } = props;

  function removeNote(){
    deleteNote(id)
  }

  return (
    <div>
      <Card sx={{ width: 325, mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>

          <Typography variant="body1">{content}</Typography>

          <Typography variant="body2" sx={{ mt: 3 }}>
            was created on {new Date(createdAt).toLocaleString()}
          </Typography>

          <Button variant="contained" size="small" sx={{ mt: 2, mr: 2 }}>
            Edit
          </Button>
          <Button variant="contained" size="small" sx={{ mt: 2 }} onClick={removeNote}>
            Delete
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteItem;
