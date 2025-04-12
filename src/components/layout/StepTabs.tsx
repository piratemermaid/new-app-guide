import { Button, Stack } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

import { STEPS } from '~/steps';

type Props = {
  selectedStack: Stack | null;
  selectedStep: StepName | null;
  setSelectedStep: Dispatch<SetStateAction<StepName | null>>;
};

export const StepTabs: React.FC<Props> = ({
  selectedStack,
  selectedStep,
  setSelectedStep,
}) => {
  if (!selectedStack) return null;

  const steps = STEPS[selectedStack];

  if (!steps) return null;

  return (
    <Stack spacing={1}>
      {steps.map((step) => (
        <Button
          key={step.name}
          onClick={() => setSelectedStep(step.name)}
          variant={selectedStep === step.name ? 'contained' : 'outlined'}
          color="secondary"
        >
          {step.name}
        </Button>
      ))}
    </Stack>
  );
};
