import { Tab, Tabs } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  selectedStack: Stack | null;
  setSelectedStack: Dispatch<SetStateAction<Stack | null>>;
};

export const StackTabs: React.FC<Props> = ({
  selectedStack,
  setSelectedStack,
}) => {
  return (
    <>
      <Tabs
        value={selectedStack}
        onChange={(_event, newValue) => {
          setSelectedStack(newValue as Stack);
          setSelectedStack(null);
        }}
        aria-label="stack tabs"
      >
        <Tab label="UI" value="ui" onClick={() => setSelectedStack('ui')} />
        <Tab
          label="Backend"
          value="be"
          onClick={() => setSelectedStack('be')}
        />
        <Tab
          label="Database"
          value="db"
          onClick={() => setSelectedStack('db')}
        />
      </Tabs>
    </>
  );
};
