import { useState } from "react";

export function ThingForm({ setActivities, setNotification }) {
  const [activity, setActivity] = useState("");
  const [points, setPoints] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pointsValue = parseInt(points) || 1;

    if (activity) {
      setActivities((prev) => [...prev, [activity, pointsValue]]);
      setActivity("");
      setPoints("1");

      setNotification("Congrats ! 🎉");
      setTimeout(() => setNotification(""), 1500);
    }
  };

  const handleCtrlZ = (e) => {
    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();
      setActivities((prev) => prev.slice(0, -1));
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleCtrlZ} className="py-6">
      <div className="flex flex-row gap-4">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Took my lazy ass for a run"
          className="input input-bordered flex-1"
          id="activity_input"
        />
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          className="input input-bordered w-24"
          required
          placeholder="1"
          min="1"
          max="10"
          id="points_input"
          title="Must be between be 1 to 10"
        />
        <p className="text-accent text-3xl">yp</p>
      </div>
      <button type="submit" className="btn btn-primary mt-4" id="add_points">
        Add thing
      </button>
    </form>
  );
}
