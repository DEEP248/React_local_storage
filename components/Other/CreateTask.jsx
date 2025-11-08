import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, settaskTitle] = useState("");
  const [taskDesc, settaskDesc] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignto, setassignto] = useState("");
  const [category, setcategory] = useState("");
  const [task, settask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    settaskTitle("");
    settaskDesc("");
    settaskDate("");
    setassignto("");
    setcategory("");
    settask({
      taskTitle,
      taskDesc,
      taskDate,
      assignto,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData.employees;
    data.forEach(function (elem) {
      if (elem.firstName == assignto) {
          elem.tasks.push(task);
          elem.newTasksCount += 1;
      }
    });
    setUserData(data);
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="flex flex-wrap w-full bg-gray-800/60 border border-gray-700 rounded-2xl p-8 items-start justify-between shadow-lg backdrop-blur-sm"
      >
        {/* Left Section */}
        <div className="w-full lg:w-[48%] space-y-5">
          {/* Task Title */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter Task Title"
              className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
              className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Assign To
            </h3>
            <input
              value={assignto}
              onChange={(e) => {
                setassignto(e.target.value);
              }}
              type="text"
              placeholder="Employee name"
              className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-medium px-5 py-2 rounded-lg mt-5 shadow-md hover:shadow-emerald-500/30"
          >
            Create Task
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[48%] mt-8 lg:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Description
            </h3>
            <textarea
              value={taskDesc}
              onChange={(e) => {
                settaskDesc(e.target.value);
              }}
              placeholder="Enter Task Description"
              rows="10"
              className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
