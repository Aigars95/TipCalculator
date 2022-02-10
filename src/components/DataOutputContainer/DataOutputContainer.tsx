import React from 'react';
import './DataOutputContainer.scss';
import Button from '../Button/Button';

type DataOutputContainerProps = {
  tipsAndTotalAmounts: {
    tips: number;
    total: number;
},
  getResetStatus: (staus: boolean) => void;
}

const DataOutputContainer = ({ tipsAndTotalAmounts, getResetStatus }: DataOutputContainerProps) => {
  const i = '';
  return (
    <div className="output__container">
      <div className="output__row__wrapper">
        <div className="output__row">
          <span className="output__row__label">
            Tip Amount
            <span className="output__row__note">/ person</span>
          </span>
          <span className="output__row__value">
            $
            {tipsAndTotalAmounts.tips.toFixed(2)}
          </span>
        </div>
        <div className="output__row">
          <span className="output__row__label">
            Total
            <span className="output__row__note">/ person</span>
          </span>
          <span className="output__row__value">
            $
            {tipsAndTotalAmounts.total.toFixed(2)}
          </span>
        </div>
      </div>
      <Button buttonText="Reset" handlerClick={() => getResetStatus(true)} />
    </div>
  );
};

export default DataOutputContainer;
