import React, { useEffect, useRef, useState } from 'react';
import './DataInputContainer.scss';
import personIcon from '../../assets/images/icon-person.svg';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import RadioButton from '../RadioButton/RadioButton';

type DataInputContainerProps ={
  getTipsAndTotalAmounts: (tips: number, total: number) =>void;
  dataReset: boolean;
  getResetStatus: (status: boolean) => void;
}

const DataInputContainer = ({ getTipsAndTotalAmounts, dataReset, getResetStatus }:DataInputContainerProps) => {
  const [bill, setBill] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [tipsPercentInput, setTipsPercentInput] = useState('');
  const tipsPercentageValues = ['5', '10', '15', '25', '50'];
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');
  const billRegex = /^\d+\.?\d?\d?/;
  const onlyNumberRegex = /[^.\d]/g;
  let tipPercent = 0;

  const deleteAllData = () => {
    setBill('');
    setPeopleCount('');
    setTipsPercentInput('');
    setSelectedRadioBtn('');
    getResetStatus(false);
  };

  const handleRadioClick = (radioValue: string) => {
    setTipsPercentInput('');
    setSelectedRadioBtn(radioValue);
  };
  useEffect(() => {
    deleteAllData();
  }, [dataReset]);

  useEffect(() => {
    if (bill && peopleCount && (tipsPercentInput || selectedRadioBtn)) {
      tipPercent = parseFloat(selectedRadioBtn);

      if (tipsPercentInput) {
        setSelectedRadioBtn('');
        tipPercent = parseFloat(tipsPercentInput);
      }

      let tips = ((parseFloat(bill) * tipPercent) / 100) / parseFloat(peopleCount);
      tips = parseFloat(tips.toString().replace(/(?<=\...)[^.]*$/, ''));

      const total = (parseFloat(bill) / parseFloat(peopleCount)) + ((parseFloat(bill) * tipPercent) / 100)
        / parseFloat(peopleCount);

      getTipsAndTotalAmounts(tips, total);
    }

    if (!tipsPercentInput && !selectedRadioBtn) {
      getTipsAndTotalAmounts(0, 0);
    }
  }, [bill, tipsPercentInput, peopleCount, selectedRadioBtn]);

  return (
    <div>
      <div className="data__container">

        <label
          className="input__label"
          htmlFor="input--bill"
        >
          <span className="label__text">Bill</span>
          <input
            id="input--bill"
            className="input__data"
            placeholder="0"
            type="text"
            value={bill}
            onChange={(e) => {
              const res = e.target.value.match(billRegex);
              if (res) {
                setBill(res.toString());
              }
              if (res === null) {
                setBill('');
              }
            }}
          />
          <span className="input__icon">
            <img src={dollarIcon} alt="Dollar" />
          </span>
        </label>

        <span className="input__label">Select Tip % </span>
        <div className="tip__container">
          {tipsPercentageValues.map((value) => (
            <RadioButton
              key={value}
              labelID={value}
              inputValue={value}
              inputName="tipsPercent"
              selectedRadio={selectedRadioBtn}
              getRadioValue={handleRadioClick}
            />
          ))}
          <div>
            <input
              className="input__data"
              placeholder="Custom"
              type="text"
              value={tipsPercentInput}
              onChange={(e) => setTipsPercentInput(e.target.value.replace(onlyNumberRegex, ''))}
            />
          </div>
        </div>

        <label
          className="input__label"
          htmlFor="input--people"
        >
          <span className="label__text">Number of People</span>
          <input
            id="input--people"
            className="input__data"
            placeholder="0"
            type="text"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value.replace(onlyNumberRegex, ''))}
          />
          <span className="input__icon">
            <img src={personIcon} alt="Person icon" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default DataInputContainer;
