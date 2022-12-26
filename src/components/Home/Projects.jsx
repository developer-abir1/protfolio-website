import React from 'react';
import { useState } from 'react';

const Projects = () => {
  const activeStyle = 'bg-[#00ADB5] btn btn-ghost  hover:bg-[#00ADB5]';

  const [selected, setSeleted] = useState('');
  console.log(selected);
  return (
    <div>
      <div>
        <h2 className="text-white text-6xl font-bold space-x-4 ">
          <span>My recent</span>
          <span className="text-[#00ADB5]">works</span>
        </h2>
        <div className="text-white flex mt-12 space-x-2  ">
          {['all', 'UI/UX', 'font-end', 'web-development', 'mern-stack'].map(
            (x) => (
              <div>
                <button
                  onClick={() => setSeleted(x)}
                  className={selected === x ? activeStyle : ` btn btn-ghost`}
                >
                  {x}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
