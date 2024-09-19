import React from 'react';
import Publisher from '../components/Publisher';

const PublisherPage: React.FC = () => {
  return (
        <>
        <Publisher
        name="Ryan Curtis"
        bio="Hey! my name is Ryan,I'm 26 and I am a freelance 3D Artist with around four years of experience."
        title='3D Artist'
        rating={4.8}
        reveiw={889}
        coursesCount={6}
        studentsCount={4897}
      />
      </>
  );
};

export default PublisherPage;
