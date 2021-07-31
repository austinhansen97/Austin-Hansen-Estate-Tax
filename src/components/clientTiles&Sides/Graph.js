import "./Graph.css";

function Graph(props) {
  //css fill-bar graph % calculation
  let barFillWidth = props.description;
  barFillWidth = Math.round((11700000 / barFillWidth) * 100) + "%";

  //  css border elimination when non-taxable fill is 100%
  let endBorder = 0;
  if (props.description > 11700000) {
    endBorder = 5 + "px solid rgb(10, 42, 63)";
  } else {
    endBorder = 0 + "px";
  }

  //   ------------

  //   non-taxable calculation
  let nonTaxableEstateValue = 0;
  if (props.description > 11700000) {
    nonTaxableEstateValue = 11700000;
  } else {
    nonTaxableEstateValue = Number(props.description);
  }
  nonTaxableEstateValue = nonTaxableEstateValue.toLocaleString();

  //  taxable calculation: for legend near the bar chart
  let taxableEstateValue = props.description;
  if (taxableEstateValue > 11700000) {
    taxableEstateValue = props.description - 11700000;
  } else {
    taxableEstateValue = 0;
  }
  taxableEstateValue = taxableEstateValue.toLocaleString();

  //   total estate value
  let totalValue = props.description;
  totalValue = Number(totalValue).toLocaleString();

  return (
    <div className="bar-area">
      <div className="base-bar">
        <div
          className="fill-bar"
          style={{ width: barFillWidth, borderRight: endBorder }}
        ></div>
      </div>

      <div className="second-base-bar"></div>
      <div className="labels">
        <div className="label1">Non-taxable: ${nonTaxableEstateValue}</div>
        <div className="label2">+ Taxable: ${taxableEstateValue}</div>
        <div className="label3">= Total Estate Value: ${totalValue}</div>
      </div>
    </div>
  );
}

export default Graph;
