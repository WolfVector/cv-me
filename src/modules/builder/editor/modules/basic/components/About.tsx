import React, { Fragment } from 'react';
import { RichtextEditor } from 'src/helpers/common/components/richtext';

const About = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  return (
    <Fragment>
      <RichtextEditor
        label="Acerca de"
        value={basicTabs.summary}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'summary');
        }}
        name="summary"
      />
      <RichtextEditor
        label="Objetivo"
        value={basicTabs.objective}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'objective');
        }}
        name="objective"
      />
    </Fragment>
  );
};

export default About;
