import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const StepTitle = ({ children }: Props) => {
  return (
    <Typography variant="body1" sx={{ color: 'primary.main' }}>
      {children}
    </Typography>
  );
};
