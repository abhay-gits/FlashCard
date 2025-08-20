import React from "react";

export default function MarkdownGuide() {
  const guide = `
# Markdown Syntax Guide

## Headings
# H1  
## H2  
### H3  
#### H4  
##### H5  
###### H6  

## Emphasis
*italic* or _italic_  
**bold** or __bold__  
***bold + italic***  

## Lists
Ordered List
1. Item 1
2. Item 2
  1. Nested item

Unordered List
- Item 1
- Item 2
  - Nested item

## Links & Images
[OpenAI](https://openai.com)  
![Alt text](https://via.placeholder.com/100)

## Code
Inline \`code\`

\`\`\`js
function hello() {
  console.log("Hello world");
}
\`\`\`

## Blockquote
> This is a blockquote

## Horizontal Rule
---
***
___

`;

  return (
    <div className="markdown-guide bg-base-200 p-6 rounded-xl overflow-x-auto">
      <pre className="text-sm whitespace-pre-wrap">{guide}</pre>
    </div>
  );
}
