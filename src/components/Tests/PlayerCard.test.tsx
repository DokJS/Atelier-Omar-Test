import PlayerCard from '../PlayerCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const player = {
  id: 52,
  firstname: 'Novak',
  lastname: 'Djokovic',
  shortname: 'N.DJO',
  sex: 'M',
  country: {
    picture: 'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
    code: 'SRB',
  },
  picture: 'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
  data: {
    rank: 2,
    points: 2542,
    weight: 80000,
    height: 188,
    age: 31,
    last: [1, 1, 1, 1, 1],
  },
};

describe('PlayerCard', () => {
  const setSelectedPlayerIndex = jest.fn();
  test('should renders player card with informations passed', () => {
    render(<PlayerCard player={player} setSelectedPlayerIndex={setSelectedPlayerIndex} index={10} />);
    expect(screen.getByAltText('NovakDjokovic')).toBeInTheDocument();
    expect(screen.getByText('Novak Djokovic')).toBeInTheDocument();
    expect(screen.getByText('#2')).toBeInTheDocument();
    expect(screen.getByText('2542')).toBeInTheDocument();
    expect(screen.getByText('SRB')).toBeInTheDocument();
  });
  test('should call setSelectedPlayerIndex when the user clicks on the card', () => {
    render(<PlayerCard player={player} setSelectedPlayerIndex={setSelectedPlayerIndex} index={10} />);
    userEvent.click(screen.getByText('Novak Djokovic'));
    expect(setSelectedPlayerIndex).toHaveBeenCalledTimes(1);
  });
});
