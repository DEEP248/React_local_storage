import React from "react";

const TaskNumber = ({data}) => {
  const cards = [
    { color: "from-purple-500 to-indigo-500", title: "New Task", count: data.taskCounts.newTask },
    { color: "from-sky-500 to-blue-600", title: "In Progress", count: data.taskCounts.active },
    { color: "from-emerald-500 to-green-600", title: "Completed", count: data.taskCounts.completed },
    { color: "from-rose-500 to-pink-600", title: "Overdue", count: data.taskCounts.failed },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-linear-to-br ${card.color} p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
        >
          <h2 className="text-4xl font-bold">{card.count}</h2>
          <h3 className="text-lg font-medium mt-2 opacity-90">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNumber;
