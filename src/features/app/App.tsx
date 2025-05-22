import { Grid, Button } from "@chakra-ui/react";
import * as Tone from "tone";

function App() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"];
  const brightColors = [
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FF8C33",
    "#33FFA1",
    "#A133FF",
    "#FF33D4",
    "#33D4FF",
    "#FF5733",
  ];

  return (
    <Grid
      m={0}
      p={0}
      w={"100vw"}
      h="100vh"
      templateColumns="repeat(3, 1fr)"
      gap={0}
    >
      {notes.map((note, i) => (
        <Button
          m={0}
          p={0}
          w="100%"
          h="100%"
          borderRadius={0}
          bg={brightColors[i]}
          key={note}
          onClick={() => {
            synth.triggerAttackRelease(note, "8n");
          }}
          _active={{
            filter: "brightness(200%)",
          }}
        />
      ))}
    </Grid>
  );
}

export default App;
