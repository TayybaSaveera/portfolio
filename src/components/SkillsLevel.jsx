import React from "react";

function SkillsLevel({ skillName, percentage }) {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex justify-between items-end">
        <h1 className="text-xl font-bold"> {skillName}</h1>
        <h1 className="text-sm"> {percentage}</h1>
      </div>
      <div className="w-full bg-slate-200 h-2 rounded-full">
        <div
          className="h-2 bg-[#E7D4B5] rounded-full"
          style={{ width: `${percentage}` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillsLevel;
