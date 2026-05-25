import React from 'react';

type GlossaryTermProps = {
  to: string;
  term: string;
  tooltip: string;
};

export default function GlossaryTerm({to, term, tooltip}: GlossaryTermProps) {
  return (
    <a className="glossary-term" href={to}>
      <span className="glossary-term__label">{term}</span>
      <span className="glossary-term__tooltip" role="tooltip">
        {tooltip}
      </span>
    </a>
  );
}
