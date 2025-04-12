import { Box, Link, Stack, Typography } from '@mui/material';
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
    <Stack className="step" spacing={1}>
      <Box>
        <step.Component step={step} />
      </Box>
      <Box>
        {step.docsUrl ? (
          <Link
            href={step.docsUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="body2" sx={{ color: 'primary.main' }}>
              View Documentation
            </Typography>
          </Link>
        ) : (
          <Typography variant="body2" sx={{ color: 'action.disabled' }}>
            TODO: docs url
          </Typography>
        )}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'action.disabled' }}>
          Last updated: {step.lastUpdated}
        </Typography>
      </Box>
    </Stack>
  );
};
