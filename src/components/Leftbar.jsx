import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <Tab.Group vertical>
      <Tab.List>
        <Tab>Recent</Tab>
        <Tab>Drafts</Tab>
        <Tab>Trash</Tab>
        <Tab>Posted</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
