import { Table } from './styles';

const BestSellersTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Article</th>
          <th>Publisher</th>
          <th>Sales</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>What whas the trend in 2020 and you didn&apos;t use it</td>
          <td>tog.design</td>
          <td>200</td>
          <td>R$ 10,90</td>
        </tr>
        <tr>
          <td>Where you can apply desgin in your life</td>
          <td>tog.design</td>
          <td>100</td>
          <td>R$ 18,90</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BestSellersTable;
