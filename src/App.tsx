import { Box, Typography } from '@mui/material';

import { STEPS } from './steps';

function App() {
  return (
    <>
      <Typography variant="h1" sx={{ mb: 2 }}>
        UI
      </Typography>
      {STEPS.ui.map((step, index) => {
        return (
          <Box key={step.name} className="step" sx={{ my: 4 }}>
            <hr />
            <Box sx={{ my: 3 }}>
              <Typography variant="h2" sx={{ mt: 2 }}>
                {step.name}
              </Typography>
              <Typography variant="caption" sx={{ color: 'action.disabled' }}>
                Last updated: {step.lastUpdated}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <step.Component key={index} step={step} />
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default App;
