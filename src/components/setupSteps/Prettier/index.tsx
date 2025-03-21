import { CodeBlock } from "~/components/CodeBlock";

type Props = {
  step: Step;
};

export const PrettierSetupStep = ({ step }: Props) => {
  return (
    <div>
      <h3>Prettier</h3>
      <p>Last updated: {step.lastUpdated}</p>
      <p>1. Install Prettier if needed</p>
      <CodeBlock>{`npm i --save-dev prettier TODO check this`}</CodeBlock>
      <p>
        2. Create prettier config in project root
        <CodeBlock>touch .prettierrc</CodeBlock>
      </p>
      <p>Recommended rules:</p>
      <CodeBlock multiline>
        {`
  {
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "tabWidth": 2,
    "useTabs": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    "printWidth": 80,
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "proseWrap": "preserve"
  }

`}
      </CodeBlock>
      <p>3. Ignore node modules</p>
      <CodeBlock> touch .prettierignore</CodeBlock>
      <CodeBlock>
        {`
  //.prettierignore

  */node_modules/*

`}
      </CodeBlock>
      <p>4. Format all files (prevents formatting in code diffs)</p>
      Add script to package.json:
      <CodeBlock>
        {`"format-all": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,css}\""`}
      </CodeBlock>
    </div>
  );
};
