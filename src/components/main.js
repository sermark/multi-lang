import React, { Fragment } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

const Main = props => {
  return (
    <Fragment>
      <h1>
        <FormattedMessage id="app.hello_world" />
      </h1>
      <p>
        <FormattedMessage id="app.hello_world2" />
      </p>

      <h1>
        <FormattedMessage id="app.any_text" />
      </h1>
      <button onClick={() => props.actions.setLang("en")}>en</button>
      <button onClick={() => props.actions.setLang("ru")}>ru</button>
      <button onClick={() => props.actions.setLang("de")}>de</button>
    </Fragment>
  );
};

export default injectIntl(Main);
