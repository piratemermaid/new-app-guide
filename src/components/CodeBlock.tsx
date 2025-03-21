import { Box } from "@mui/material";

type Props = {
  multiline?: boolean;
  children: string;
};

export const CodeBlock = ({ multiline, children }: Props) => {
  console.log("TODO: multiline vs inline");
  return (
    <Box style={{ background: "darkblue" }}>
      <code>
        <pre>{children}</pre>
      </code>
    </Box>
  );
};
