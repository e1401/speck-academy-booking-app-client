import React from 'react';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest,
  Successfull,
  Unsuccessfull
} from '../';

import Error404 from '../../common/error404/Error404';

import { Footer } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    <CitizensSelectHall />
    <CitizensSubmitRequest />

    <CitizensSelectDateTime />

    <CitizensAdminLogin />
    <Error404 />
    <Successfull />
    <Unsuccessfull />
    <Footer />
  </React.Fragment>
);

export default CitizensPage;
