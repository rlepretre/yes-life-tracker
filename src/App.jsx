import React, { useState } from "react";
import { ThingList } from "./components/ThingList";
import { NavBar } from "./components/NavBar";
import { ThingForm } from "./components/ThingForm";
import { NotificationCenter } from "./components/NotificationCenter";

export function App() {
  const [activities, setActivities] = useState([]);
  const [notification, setNotification] = useState("");

  return (
    <div>
      <NavBar />
      <NotificationCenter notification={notification} />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <ThingList activities={activities} setActivities={setActivities} />
            <ThingForm
              setActivities={setActivities}
              setNotification={setNotification}
            />
          </div>
        </div>
      </div>
      setNotification={setNotification}
    </div>
  );
}
