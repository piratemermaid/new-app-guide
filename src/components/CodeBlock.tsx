import { Box } from '@mui/material';

import { ClickToCopy } from '~/components';

type Props = {
  multiline?: boolean;
  children: string;
};

export const CodeBlock = ({ multiline, children }: Props) => {
  console.log('TODO: multiline vs inline');
  return (
    <Box style={{ background: 'darkblue' }}>
      <code>
        <pre>
          <ClickToCopy>{children}</ClickToCopy>
        </pre>
      </code>
    </Box>
  );
};
