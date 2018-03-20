import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout';

function EvaluatePage() {
  return (
    <MainLayout location="eval"></MainLayout>
  );
}

EvaluatePage.propTypes = {
};

export default connect()(EvaluatePage);
