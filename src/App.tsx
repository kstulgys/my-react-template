import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Calendar } from '@irishlife/ilgroupdesignsystem.organisms.calendar';
import { Accordion } from '@irishlife/ilgroupdesignsystem.molecules.accordion';

function App() {
  return (
    <Stack p={10} spacing={6}>
      <Calendar />
      <Accordion
        items={[
          { id: 1, title: 'hello', text: 'world' },
          { id: 2, title: 'hello2', text: 'world2' },
          { id: 3, title: 'hello2', text: 'world2' },
          { id: 4, title: 'hello2', text: 'world2' },
        ]}
      />
    </Stack>
  );
}

export default App;
