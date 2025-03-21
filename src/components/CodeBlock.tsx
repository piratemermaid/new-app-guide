type Props = {
  multiline?: boolean;
  children: string;
};

export const CodeBlock = ({ multiline, children }: Props) => {
  console.log("TODO: multiline vs inline");
  return (
    <div style={{ background: "darkblue" }}>
      <code>
        <pre>{children}</pre>
      </code>
    </div>
  );
};
