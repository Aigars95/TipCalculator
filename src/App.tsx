import React, { useEffect, useState } from 'react';
import './App.scss';
import DataInputContainer from './components/DataInputContainer/DataInputContainer';
import DataOutputContainer from './components/DataOutputContainer/DataOutputContainer';

const App = () => {
  const [tipsAndTotalAmount, setTipsAndTotalAmount] = useState({ tips: 0, total: 0 });
  const [resetStatus, setResetStatus] = useState(false);
  const handlerTipsAndTotalAmounts = (tips:number, total:number) => {
    setTipsAndTotalAmount({ tips, total });
  };

  const handlerReset = (status: boolean) => {
    setResetStatus(status);
  };
  return (
    <div className="App">
      <div className="main__container">
        <DataInputContainer getTipsAndTotalAmounts={handlerTipsAndTotalAmounts} dataReset={resetStatus} getResetStatus={handlerReset} />
        <DataOutputContainer tipsAndTotalAmounts={tipsAndTotalAmount} getResetStatus={handlerReset} />
      </div>

    </div>

  );
};

export default App;
