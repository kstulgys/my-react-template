import { Stack, HStack } from '@chakra-ui/react';
import { Calendar } from '@irishlife/ilgroupdesignsystem.organisms.calendar';
import { Accordion } from '@irishlife/ilgroupdesignsystem.molecules.accordion';
import { Alert } from '@irishlife/ilgroupdesignsystem.molecules.alert';
import { Choice } from '@irishlife/ilgroupdesignsystem.molecules.choice';
import { Button } from '@irishlife/ilgroupdesignsystem.atoms.button';
import { Text } from '@irishlife/ilgroupdesignsystem.atoms.text';
import { ArrowRightCircleIcon } from '@irishlife/ilgroupdesignsystem.icons';

const accordionItems = [
  { id: 1, title: 'hello', text: 'world' },
  { id: 2, title: 'hello2', text: 'world2' },
  { id: 3, title: 'hello3', text: 'world3' },
];

const timeSlotsItems = [
  { id: 1, label: 'hello', value: 'hello' },
  { id: 2, label: 'hello2', value: 'hello2' },
  { id: 3, label: 'hello3', value: 'hello3' },
  { id: 4, label: 'hello4', value: 'hello4' },
];

const choicesItems = [
  { id: 1, label: 'hello', value: 'hello' },
  { id: 2, label: 'hello2', value: 'hello2' },
  { id: 3, label: 'hello3', value: 'hello3' },
  { id: 4, label: 'hello4', value: 'hello4' },
];

function App() {
  return (
    <Stack spacing={10} p={10}>
      <Text variant="caption-lg">Hello Team</Text>
      <Alert status="success">Hello World</Alert>
      <Choice isBinary options={choicesItems} columns={[1, 3, 2]} />
      <HStack>
        <Button>Normal button</Button>
        <Button rightIcon={<ArrowRightCircleIcon fontSize={32} />}>Button with icon</Button>
      </HStack>
      <Accordion items={accordionItems} />
      <Calendar timeSlots={timeSlotsItems} />
    </Stack>
  );
}

export default App;
