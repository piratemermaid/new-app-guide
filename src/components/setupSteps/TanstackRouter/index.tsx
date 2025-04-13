import { Box, Stack, Typography } from '@mui/material';
import { CodeBlock } from '~/components/CodeBlock';
import { StepTitle } from '~/components/StepTitle';

export const TanstackRouterSetupStep = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <StepTitle>1. Install</StepTitle>
        <CodeBlock>
          npm install -D @tanstack/router-plugin @tanstack/react-router-devtools
        </CodeBlock>
      </Box>

      <Stack spacing={1}>
        <Box>
          <StepTitle>2. Configure Vite plugin</StepTitle>
        </Box>
        <Box>
          <Typography>Add to vite config:</Typography>
          <CodeBlock>
            {`import {TanStackRouterVite} from '@tanstack/router-plugin/vite'`}
          </CodeBlock>
          <CodeBlock>
            {`TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),`}
          </CodeBlock>
        </Box>
        <Box>
          <Typography>Example:</Typography>
          <CodeBlock multiline>
            {`
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    // ...,
    ],
    })`}
          </CodeBlock>
        </Box>
      </Stack>

      <Box>
        <StepTitle>3. Create router files</StepTitle>
        <CodeBlock>{`mkdir src/routes`}</CodeBlock>
        <CodeBlock>{`touch src/routes/__root.tsx`}</CodeBlock>
        <CodeBlock>{`touch src/routes/index.tsx`}</CodeBlock>
        <CodeBlock>{`touch src/routes/about.tsx`}</CodeBlock>
        <CodeBlock>{`touch src/main.tsx`}</CodeBlock>
      </Box>

      <Box>4. Set up files</Box>
      <CodeBlock multiline>
        {`// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})`}
      </CodeBlock>
      <CodeBlock multiline>
        {`// src/routes/index.tsx
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}`}
      </CodeBlock>
      <CodeBlock multiline>{`// src/routes/about.tsx
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}`}</CodeBlock>
      <Box>
        <StepTitle>5. Add to main.tsx:</StepTitle>
        <CodeBlock>{`import { RouterProvider, createRouter } from '@tanstack/react-router'
`}</CodeBlock>
        <CodeBlock>{`import { routeTree } from './routeTree.gen'`}</CodeBlock>
        <CodeBlock>{`const router = createRouter({ routeTree })`}</CodeBlock>
        <CodeBlock multiline>
          {`declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}`}
        </CodeBlock>
        <CodeBlock>{`<RouterProvider router={router} />`}</CodeBlock>
      </Box>

      <Box>
        <StepTitle>6. Configure routes</StepTitle>
        <Typography>Example:</Typography>
        <CodeBlock multiline>
          {`import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}`}
        </CodeBlock>
      </Box>

      <Box>
        <StepTitle>7. Dev Tools</StepTitle>
        <CodeBlock>
          {`import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'`}
        </CodeBlock>
        <CodeBlock multiline>
          {`const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})`}
        </CodeBlock>
      </Box>

      <Box>
        <StepTitle>Link Example</StepTitle>
        <CodeBlock multiline>
          {`import { Link } from '@tanstack/react-router'

function Component() {
  return (
    <Link
      to="/somewhere/$somewhereId"
      params={{ somewhereId: 'baz' }}
      search={(prev) => ({ ...prev, foo: 'bar' })}
    >
      Click me
    </Link>
  )
}`}
        </CodeBlock>
      </Box>
    </Stack>
  );
};
