// ProgramList.tsx
import React from 'react';
import Program from './Program';

interface ProgramListProps {
  programs: { title: string; description: string }[];
}

const ProgramList: React.FC<ProgramListProps> = ({ programs }) => {
  return (
    <>
      {programs.map((program, index) => (
        <Program
          key={index}
          title={program.title}
          description={program.description}
        />
      ))}
    </>
  );
};

export default ProgramList;
