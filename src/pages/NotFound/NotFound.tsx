import * as React from 'react';
import { Link } from 'react-router-dom';

import { URLS } from '../../constants';

export default (): React.ReactElement => (
  <div>
    <h1>Not found</h1>
    <p>This page does not exist</p>
    <Link to={URLS.MAIN}>Go to main page</Link>
  </div>
);
