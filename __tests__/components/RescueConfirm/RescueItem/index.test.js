import React from 'react';
import { render } from '@testing-library/react-native';

import RescueItem from '~/components/RescueConfirm/RescueItem';

const mockRescueData = [
  {
    nome: 'INVESTIMENTO I',
    objetivo: 'Minha aposentadoria',
    saldoTotalDisponivel: 39321.29,
    indicadorCarencia: 'N',
    acoes: [
      {
        id: '1',
        nome: 'BBAS3',
        percentual: 28.1,
      },
      {
        id: '2',
        nome: 'VALE3',
        percentual: 20.71,
      },
      {
        id: '3',
        nome: 'PETR4',
        percentual: 21.63,
      },
      {
        id: '4',
        nome: 'CMIG3',
        percentual: 12.41,
      },
      {
        id: '5',
        nome: 'OIBR3',
        percentual: 17.15,
      },
    ],
  },
];

describe('RescueItem', () => {
  it('Should render rescue name correctly', () => {
    const { getByTestId } = render(<RescueItem rescueData={mockRescueData} />);

    expect(getByTestId('rescueName')).toBe(mockRescueData[0].name);
  });
});
