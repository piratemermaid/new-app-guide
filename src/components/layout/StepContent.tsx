import { Box, Typography } from '@mui/material';
import { STEPS } from '~/steps';

type Props = {
  selectedStack: Stack | null;
  selectedStep: StepName | null;
};

export const StepContent: React.FC<Props> = ({
  selectedStack,
  selectedStep,
}) => {
  if (!selectedStack) return null;

  const step = STEPS[selectedStack]?.find((s) => s.name === selectedStep);
  if (!step) return null;

  return (
    <Box className="step">
      <Box>
        <step.Component step={step} />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'action.disabled' }}>
          Last updated: {step.lastUpdated}
        </Typography>
      </Box>
    </Box>
  );
};
