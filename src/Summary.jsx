import * as React from "react";

function toNumber(value) {
  var formatedValue = value.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatedValue;
}

function Summary({ period, data }) {
  return (
    <>
      <h2>Resultado</h2>
      <p>
        Em {period} meses, você terá {toNumber(data[data.length - 1])}
      </p>
      <h3>Detalhamento</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Mes</th>
            <th scope="col">Valor</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map(({ label, value }) => (
            <tr key={label}>
              <td>{label}</td>
              <td>{`${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Summary;
