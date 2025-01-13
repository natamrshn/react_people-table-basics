import React from 'react';
import { Person } from '../../types/Person';
import { PersonLink } from '../PersonLink/PersonLink';

interface PeopleTableProps {
  people: Person[];
  selectedPerson: string | null;
  onRowClick: (name: string) => void;
}

export const PeopleTable: React.FC<PeopleTableProps> = ({
  people,
  selectedPerson,
  onRowClick,
}) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr
            key={person.name}
            data-cy="person"
            className={
              person.name === selectedPerson ? 'has-background-warning' : ''
            }
            onClick={() => onRowClick(person.name)}
          >
            <td>
              <PersonLink person={person} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died || '-'}</td>
            <td>
              {person.motherName ? (
                <PersonLink
                  person={people.find(p => p.name === person.motherName)}
                  nameOverride={person.motherName}
                />
              ) : (
                '-'
              )}
            </td>
            <td>
              {person.fatherName ? (
                <PersonLink
                  person={people.find(p => p.name === person.fatherName)}
                  nameOverride={person.fatherName}
                />
              ) : (
                '-'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
