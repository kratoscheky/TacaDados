import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { InteractiveTray } from "./tray/InteractiveTray";
import { Sidebar } from "./controls/Sidebar";
import {Tags} from "./tacaficha/tags";

export function App() {
  return (
    <Container disableGutters maxWidth="md">
      <Stack direction="row" justifyContent="center">
        <Tags />
        <Sidebar />
        <InteractiveTray />
      </Stack>
    </Container>
  );
}
