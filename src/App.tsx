import { Stack, HStack, Box } from '@chakra-ui/react';
import { Calendar } from '@irishlife/ilgroupdesignsystem.organisms.calendar';
import { Accordion } from '@irishlife/ilgroupdesignsystem.molecules.accordion';
import { Alert } from '@irishlife/ilgroupdesignsystem.molecules.alert';
import { Choice } from '@irishlife/ilgroupdesignsystem.molecules.choice';
import { Button } from '@irishlife/ilgroupdesignsystem.atoms.button';
import { Text } from '@irishlife/ilgroupdesignsystem.atoms.text';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon, CheckIcon, PlusOutlineCircleIcon } from '@irishlife/ilgroupdesignsystem.icons';
import { Sidebar } from '@irishlife/ilgroupdesignsystem.organisms.sidebar';
import { Navbar } from '@irishlife/ilgroupdesignsystem.organisms.navbar';
import { Avatar } from '@irishlife/ilgroupdesignsystem.atoms.avatar';

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

const sidebarItems = [
  { id: 1, label: 'Overview', value: '0verview', icon: ArrowLeftCircleIcon },
  { id: 2, label: 'Health', value: 'health', icon: CheckIcon },
  { id: 3, label: 'Investments', value: 'investments', icon: PlusOutlineCircleIcon },
  { id: 4, label: 'Hello', value: 'Hello', icon: PlusOutlineCircleIcon },
];

function App() {
  return (
    <div>
      <Navbar onLogoClick={() => alert('logo clicked!')}>
        <Button>Hello</Button>
        <Avatar />
      </Navbar>
      <Sidebar items={sidebarItems} onLogoClick={() => alert('logo clicked sidebar!')}>
        <Content />
      </Sidebar>
    </div>
  );
}

function Content() {
  return (
    <Stack spacing={10}>
      <Text variant="caption-lg">Hello Team</Text>
      <Alert status="success">Hello World</Alert>
      <Choice isBinary options={choicesItems} columns={[1, 3, 2]} />
      <HStack>
        <Button>Normal button</Button>
        <Button rightIcon={<ArrowRightCircleIcon fontSize={28} />}>Button with icon</Button>
      </HStack>
      <Accordion items={accordionItems} />
      <Calendar timeSlots={timeSlotsItems} />
    </Stack>
  );
}

export default App;
