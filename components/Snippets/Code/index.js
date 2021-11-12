import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

export default function Code () {
  const codeString = `
  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
  import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
  
  export default function Code () {
    const codeString = 'const random = (abc, def) => {\n\t\tconsole.log('Working!')\n\t\treturn abc + def\n}'
    console.log()
  
    return (
      <SyntaxHighlighter
        language="javascript"
        style={coldarkDark}
        lineNumberStyle={{ opacity: '0.4' }}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    )
  }
  
  `

  return (
    <div>
      <Highlight
        {...defaultProps}
        language="jsx"
        code={codeString}
        theme={theme}
      >
        {
          ({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, index) => (
                <div key={index} {...getLineProps({ line, key: index })}>
                  <span>{index + 1}</span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })}></span>
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )
        }
      </Highlight>
    </div>
  )
}
