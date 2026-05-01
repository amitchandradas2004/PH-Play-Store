import React, { createContext, useState } from "react";

const InstallAppContext = createContext();
const InstalledAppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const data = {
    installedApps,
    setInstalledApps,
  };

  return (
    <div>
      <InstallAppContext.Provider value={data}>
        {children}
      </InstallAppContext.Provider>
    </div>
  );
};

export default InstalledAppProvider;
createContext;
