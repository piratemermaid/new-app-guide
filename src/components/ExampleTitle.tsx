import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const ExampleTitle = ({ children }: Props) => {
  return (
    <Typography variant="body2" sx={{ color: 'secondary.main' }}>
      {children}
    </Typography>
  );
};
