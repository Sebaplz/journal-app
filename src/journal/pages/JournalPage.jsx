import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { AddOutlined } from "@mui/icons-material";
import { NoteView } from "../views/NoteView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod
        adipisci modi veritatis? Autem, possimus mollitia. Dolorum facere,
        provident laudantium architecto modi adipisci sequi amet quos, minima
        cum obcaecati odio.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
