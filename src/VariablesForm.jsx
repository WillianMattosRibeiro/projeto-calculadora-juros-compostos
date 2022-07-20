import * as React from "react";
import defaultState from "./defaultState";

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, growthRate, monthlyContribution } = state;

  return (
    <section>
      <h2>Estratégia</h2>
      <div className="flex">
        <label htmlFor="initialAmount">
          Valor Inicial (R$)
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={initialAmount}
            onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
          />
        </label>
        <label htmlFor="period">
          Tempo de Investimento (Meses)
          <input
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
          />
        </label>
        <label htmlFor="growthRate">
          Juros Anual (%)
          <input
            type="number"
            id="growthRate"
            name="growthRate"
            value={growthRate}
            onChange={({ target }) => setState({ ...state, growthRate: Number(target.value) })}
          />
        </label>
        <label htmlFor="monthlyContribution">
          Valor Aporte Mensal (R$)
          <input
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
        </label>
      </div>
      <button type="button" onClick={() => onUpdate(state)}>
        Calcular
      </button>
    </section>
  );
}

export default VariablesForm;
