import { useState } from 'react';
import { Box, Stack } from '@mui/material';

import { StepContent, StackTabs, StepTabs } from '~/components/layout';

function App() {
  const [selectedStack, setSelectedStack] = useState<Stack | null>(null);
  const [selectedStep, setSelectedStep] = useState<StepName | null>(null);

  return (
    <Stack alignItems="flex-start" spacing={2}>
      <StackTabs
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
      />
      <Stack
        direction="row"
        spacing={3}
        alignItems="space-between"
        sx={{ width: '95vw' }}
      >
        <StepTabs
          selectedStack={selectedStack}
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />
        <Box sx={{ width: '100%' }}>
          <StepContent
            selectedStack={selectedStack}
            selectedStep={selectedStep}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
