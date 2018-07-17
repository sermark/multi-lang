import React, { Component } from "react";
import Main from "./containers/containerMain";
import { IntlProvider } from "react-intl";
import localeLang from "./assets/index";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import de from "react-intl/locale-data/de";

addLocaleData([...ru, ...en, ...de]);

class App extends Component {
  componentDidMount() {
    this.props.actions.setLang(localStorage.lang || "en");
  }

  render() {
    const { language } = this.props;
    return (
      <IntlProvider locale={language} messages={localeLang[language]}>
        <Main />
      </IntlProvider>
    );
  }
}

export default App;
