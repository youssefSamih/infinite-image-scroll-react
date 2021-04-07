import FormSettings from 'modules/settings/components/FormSettings';
import SettingProvider from 'modules/settings/provider/SettingProvider';
import React from 'react';
import Layout from 'ui/Layout';

const Settings = () => {
  return (
    <Layout>
      <SettingProvider>
        <FormSettings />
      </SettingProvider>
    </Layout>
  );
};

export default Settings;
