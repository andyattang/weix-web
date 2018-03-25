import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function EvaluateResultPage() {
  return (
    <MainLayout target="evlTab" location="result"></MainLayout>
  );
}

EvaluateResultPage.propTypes = {
};

export default connect()(EvaluateResultPage);
