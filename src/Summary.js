import React from "react";
import { useTasksQuery } from "./api/api.hooks";

export const Summary = () => {
  const { data: tasks } = useTasksQuery();
  var taskEffort = 0;
  var taskOpen = 0;
  var effortOpen = 0;
  if (tasks.length) {
    for (var i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      taskEffort = taskEffort + (task ? parseInt(tasks[i].effort || 0) : 0);
      if (!task.archived) {
        taskOpen = taskOpen + 1;
        effortOpen = effortOpen + (parseInt(task.effort) || 0);
      }
    }
  }
  const summary = [
    { label: "Tasks open", value: taskOpen },
    { label: "Effort open", value: effortOpen },
    { label: "Total tasks", value: tasks ? tasks.length : 0 },
    { label: "Total effort", value: taskEffort },
  ];

  return (
    <div className="flex flex-col justify-end">
      <small>
        <strong>Sumarry:</strong>
        <ul style={{ display: "flex" }}>
          <div style={{ marginRight: "15px" }}>
            {summary.map((item, index) => {
              if (index < 2) {
                return (
                  <li>
                    {item.label}: {item.value}
                  </li>
                );
              }
              return null;
            })}
          </div>
          <div>
            {summary.map((item, index) => {
              if (index >= 2) {
                return (
                  <li key={item.label}>
                    {item.label}: {item.value}
                  </li>
                );
              }
              return null;
            })}
          </div>
        </ul>
      </small>
      <div>
        {(() => {
          return (
            <button
              onClick={() => {
                window.location.reload();
              }}
              style={{
                backgroundColor: "lightgray",
                marginTop: "10px",
                padding: "5px",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Refresh data
            </button>
          );
        })()}
      </div>
    </div>
  );
};
