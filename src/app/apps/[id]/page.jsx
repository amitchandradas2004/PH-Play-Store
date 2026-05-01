import InstallToggleButton from "@/components/apps/InstallToggleButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";
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
  // console.log(app);

  // const totalRatings = app.ratings.reduce((sum , item )=> sum + item.count , 0);
  let totalRatings = 0;
  app.ratings.forEach((rating) => {
    totalRatings += rating.count;
  });
  // console.log(totalRatings);

  return (
    <main>
      <section className="container mx-auto px-4 py-10 my-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 shadow-xl   rounded-2xl p-5 my-5">
          <div className="rounded-3xl h-50 overflow-hidden">
            <Image
              src={app.image}
              alt={app.title}
              height={220}
              width={200}
              className="object-cover rounded-3xl my-auto items-center overflow-hidden mx-auto"
              // sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-3 w-full">
            <h3 className="text-3xl font-bold">{app.title}</h3>
            <p className="font-medium text-xl">
              Developed by{" "}
              <span className="text-[#632EE3]">{app.companyName}</span>
            </p>
            <hr />
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <div className="border border-gray-400 rounded-2xl p-4 shadow-md transition hover:-translate-y-0.5 h-38 items-center text-center">
                <span className="text-4xl  flex justify-center">
                  {" "}
                  <PiDownloadSimpleBold />
                </span>
                <p className="text-xl font-medium">Downloads</p>
                <h3 className="text-2xl font-bold">{app.downloads}</h3>
              </div>
              <div className="border border-gray-400 rounded-2xl p-4 shadow-md transition hover:-translate-y-0.5 h-38 items-center text-center">
                <span className="text-4xl  flex justify-center">
                  {" "}
                  <IoStarSharp />
                </span>
                <p className="text-xl font-medium">Average Ratings</p>
                <h3 className="text-2xl font-bold">{app.ratingAvg}</h3>
              </div>
              <div className="border border-gray-400 rounded-2xl p-4 shadow-md transition hover:-translate-y-0.5 h-38 items-center text-center">
                <span className="text-4xl  flex justify-center">
                  <MdRateReview />
                </span>
                <p className="text-xl font-medium">Total Reviews</p>
                <h3 className="text-2xl font-bold">{app.reviews}</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
           <InstallToggleButton/>
              <Link href="/apps" className="btn btn-warning btn-md">
                Back To Apps
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-base-300 bg-base-100 shadow-xl p-5">
          <h2 className="text-3xl font-bold">Ratings</h2>
          <div className="mt-6 space-y-4">
            {app.ratings.map((rating) => {
              const width = Math.max((rating.count / totalRatings) * 100, 4);
              return (
                <div
                  key={rating.name}
                  className="grid gap-1  md:grid-cols[120px_1fr_110px] md:items-center"
                >
                  <span className="font-medium text-base-content/70">
                    {rating.name}
                  </span>
                  <div className="h-2 overflow-hidden rounded-full bg-base-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${width}% ` }}
                    />
                  </div>
                  <span className="text-right font-semibold">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppDetailsPage;
