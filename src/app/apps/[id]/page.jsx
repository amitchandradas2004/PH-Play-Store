import React from "react";
const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};
const AppDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "params");

  const apps = await appsPromise();
  // console.log(apps, "all apps");
  const app = apps.find((app) => app.id == id);
  console.log(app);

  return (
    <div>
      <h3>This is App Details Page</h3>
    </div>
  );
};

export default AppDetailsPage;
