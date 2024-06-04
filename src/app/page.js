"use client";
import { useState } from "react";

const HomePage = () => {
  const [age, setAge] = useState("");
  return (
    <div className="flex items-center justify-center px-5 w-full min-h-screen">
      <div className="w-full sm:w-[350px] rounded-md shadow p-4 border">
        <label htmlFor="age">Enter your age</label>
        <input
          type="number"
          id="age"
          className="border outline-none w-full block mt-2 rounded py-2 px-4"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {age?.length > 1 && (
          <span className="mt-2 text-red-600 block text-sm font-medium">
            User with this age already exists. Please try again in next year.
          </span>
        )}
      </div>
    </div>
  );
};

export default HomePage;
