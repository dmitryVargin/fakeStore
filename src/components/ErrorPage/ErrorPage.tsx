import React, { useEffect } from 'react';
import logToMyCustomService from '../../utils/functions/logToMyCustomService';

const ErrorPage = () => {
  useEffect(() => {
    logToMyCustomService();
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      Что-то пошло не так (скорее всего отдыхает апи)
    </div>
  );
};

export default ErrorPage;
