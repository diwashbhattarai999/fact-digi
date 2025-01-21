import { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TableOfContents = ({ content }: { content: string }) => {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>([]);

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const elements = tempDiv.querySelectorAll('h2, h3, h4');

    const headingData = Array.from(elements).map((el) => ({
      id: el.textContent || '',
      text: el.textContent || '',
    }));

    setHeadings(headingData);
  }, [content]);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a className="text-blue-600 hover:underline" href={`#${heading.id}`}>
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TableOfContents;
