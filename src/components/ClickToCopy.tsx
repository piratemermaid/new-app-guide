import { Box } from "@mui/material";

interface Props {
  children: string;
}

export const ClickToCopy = ({ children }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <Box onClick={handleCopy} style={{ cursor: "pointer" }}>
      {children}
    </Box>
  );
};
