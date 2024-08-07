import React from "react";
import { useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();
  return <div>{intl.formatMessage({ id: "welcome" })}</div>;
};

export default Home;
