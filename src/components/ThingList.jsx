import React, { useState } from "react";

export function ThingList({ activities, setActivities }) {
  const handleDelete = (index) => {
    setActivities((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">
        How many <span className="text-accent">yes things </span> did you do
        today?
      </h1>
      <div className="pt-6">
        <ul className="list bg-base-100 rounded-box shadow-md">
          {activities.length === 0 ? (
            <p>No activities yet</p>
          ) : (
            activities.map(([activity, points], index) => (
              <li key={index} className="list-row p-4">
                <div className="text-2xl">{activity}</div>
                <div className="text-2xl opacity-80 justify-self-end">
                  {points}
                </div>
                <button
                  className="btn btn-danger btn-square btn-ghost"
                  onClick={() => handleDelete(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
