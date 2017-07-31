import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less';
import { config } from 'utils'
import {Button} from 'antd'

function Dashboard({dashboard, dispatch}) {
  return (
    <div className={styles.dashboard}>
    	<h3>dashboard页</h3>
    </div>
  );
}

Dashboard.propTypes = {
	dashboard: PropTypes.object,
	dispatch: PropTypes.func,
};

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard);
