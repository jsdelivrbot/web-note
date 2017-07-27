import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { config } from 'utils'
import {Button} from 'antd'

function Home() {
  return (
    <div className={styles.normal}>
    	<h1 className={styles.logo}>
    		<img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
    	</h1>
      <p className={styles.title}>Yay! Welcome to antd dva demo!</p>
      <Button className={styles.home_go} type="primary" icon='smile-o'> Let's go </Button>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
