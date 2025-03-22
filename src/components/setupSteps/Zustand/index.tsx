import { Box, Stack, Typography } from '@mui/material';

import { CodeBlock } from '~/components';

export const ZustandSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography>1. Install</Typography>
        <CodeBlock>npm install zustand</CodeBlock>
      </Box>

      <Box>
        <Typography>2. Set up Store</Typography>
        <Typography>
          Example with some values persisted in local storage:
        </Typography>
        <CodeBlock multiline>{`
    import { create } from 'zustand';
    import { persist } from 'zustand/middleware';

    type State = {
      darkMode: boolean;
      toggleDarkMode: () => void;
    };

    export const useStore = create<State, [['zustand/persist', Partial<State>]]>(
      persist(
        (set, get) => ({
          darkMode: false,
          toggleDarkMode: () => {
            const darkMode = get().darkMode;
            return set({ darkMode: !darkMode });
          }
        }),
        {
          name: 'userSettings',
          partialize: (state: State) => ({
            darkMode: state.darkMode
          })
        }
      )
    );
        `}</CodeBlock>
      </Box>

      <Box>
        <Typography>3. Use store values in components</Typography>
        <CodeBlock>{`const { darkMode } = useStore((state) => state.darkMode);`}</CodeBlock>
      </Box>
    </Stack>
  );
};
