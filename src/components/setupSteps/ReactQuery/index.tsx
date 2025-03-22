import { Box, Stack } from '@mui/material';

import { CodeBlock, ExampleTitle, StepTitle } from '~/components';

export const ReactQuerySetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install</StepTitle>
        <CodeBlock>npm i @tanstack/react-query</CodeBlock>
      </Box>

      <Box>
        <StepTitle>2. Set Up Query Client</StepTitle>
        <CodeBlock>{`
  //main.tsx
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
  
  const queryClient = new QueryClient();

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
        `}</CodeBlock>
      </Box>

      <Box>
        <StepTitle>3. Add dev tools</StepTitle>
        <CodeBlock>npm i @tanstack/react-query-devtools</CodeBlock>
        <CodeBlock>
          {`
    // main.tsx
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

    function App() {
      return (
        <QueryClientProvider client={queryClient}>
          {/* The rest of your application */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )
    }
      `}
        </CodeBlock>
      </Box>

      <Box>
        <StepTitle>4. Query Setup</StepTitle>
        <CodeBlock>{`
    import axios from 'axios';
    import { useQuery, UseQueryResult } from '@tanstack/react-query';

    import { API_BASE_URL } from '~/constants';
    import type { User } from 'shared-types/user';

    const getUser = async () => {
      const response = await axios.get(API_BASE_URL + '/api/user/1');
      return response.data;
    };

    export const useUser = (): UseQueryResult<User> => {
      const query = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      });

      return query;
    };

        `}</CodeBlock>
      </Box>

      <Box>
        <StepTitle>5. Mutation Setup</StepTitle>
        <ExampleTitle>Example: Mutation with optimistic update</ExampleTitle>
        <CodeBlock>{`
    import { collection, doc, runTransaction } from 'firebase/firestore';
    import { useMutation, useQueryClient } from '@tanstack/react-query';

    import db from '/src/config/firestore';
    import { useStore } from '../../store';

    type MutationVars = {
      notes: string;
    };

    const updateGameNotes = async (notes: string, gameId: string) => {
      return await axios.post(API_BASE_URL + '/api/games/update', { notes, gameId });
    }

    export const useUpdateGameNotes = () => {
      const currentGameId = useStore((state) => state.currentGameId);

      const queryClient = useQueryClient();

      return useMutation({
        mutationFn: ({ notes }: MutationVars) =>
          updateGameNotes(notes, currentGameId),
        onMutate: async ({ notes }) => {
          await queryClient.cancelQueries({ queryKey: ['games'] });

          const previousData = queryClient.getQueryData(['games']);

          queryClient.setQueryData(['games'], (oldGames: any) => {
            return oldGames.map((g) =>
              g.id === currentGameId ? { ...g, notes } : g
            );
          });

          return { previousData };
        },
        onError: (_err, _vars, context) => {
          queryClient.setQueryData(['games'], context?.previousData);
        },
      });
    };
        `}</CodeBlock>
      </Box>
    </Stack>
  );
};
