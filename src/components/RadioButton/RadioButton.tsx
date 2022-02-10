import React from 'react';
import './RadioButton.scss';

type RadioButtonProps = {
  labelID: string;
  inputValue: string;
  inputName: string;
  selectedRadio: string;
  getRadioValue: (radioValue: string) => void;
}
const RadioButton = ({
  labelID, inputValue, inputName, selectedRadio, getRadioValue,
}: RadioButtonProps) => {
  const isRadioSelected = (value: string): boolean => selectedRadio === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    getRadioValue(e.currentTarget.value);
  };
  return (
    <div className="radio__button">
      <label
        className="radio__label"
        htmlFor={labelID}
        style={{
          backgroundColor: isRadioSelected(inputValue) ? '#26C0AB' : '#00474B',
          color: isRadioSelected(inputValue) ? '#00474B' : '#fff',
        }}
      >
        <input
          className="radio__input"
          type="radio"
          id={labelID}
          value={inputValue}
          name={inputName}
          checked={isRadioSelected(inputValue)}
          onChange={handleRadioClick}
        />
        {`${inputValue}%`}
      </label>
    </div>

  );
};

export default RadioButton;
