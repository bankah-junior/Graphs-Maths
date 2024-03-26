import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ProbGraph = () => {
    const [heading, setHeading] = useState("Entropy of a binary random variable with outcome probability p");
    const [func, setFunc] = useState("H(p) = -plog(p) - (1 - p)log(1 - p)");
    const [points, setPoints] = useState(
      "0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0"
    );
  
    const resultData = [];
  
    let myData = points.split(",");
  
    // H(p) = -plog(p) - (1 - p)log(1 - p)
    for (let i = 0; i <= myData.length; i++) {
      let ans =
        -myData[i] * Math.log(myData[i]) -
        (1 - myData[i]) * Math.log(1 - myData[i]);
      if (isNaN(ans)) {
        ans = 0.0;
      }
      resultData.push(Math.trunc(ans * 100) / 100);
    }
  
    function handleGenerate(e) {
      e.preventDefault();
    }
  
    return (
      <div className="flex flex-col items-center w-full space-y-8 md:space-y-0 md:flex-row md:space-x-4">
        <form class="shadow-2xl p-4 mt-6 w-11/12 md:w-1/3" onSubmit={handleGenerate}>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="heading"
              id="heading"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setHeading(e.target.value)}
            />
            <label
              for="heading"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Heading
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="formula"
              id="formula"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setFunc(e.target.value)}
            />
            <label
              for="formula"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Formula (H(p) = -plog(p) - (1 - p)log(1 - p))
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="x-values"
              id="x-values"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setPoints(e.target.value)}
            />
            <label
              for="x-values"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              X-Values
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div className="w-11/12 md:w-full">
          <div className="p-4 shadow-2xl">
            <br />
            <h1 className="text-center">{heading}</h1>
            <br />
            <Line
              data={{
                labels: myData, // P i.e. x-axis
                datasets: [
                  {
                    label: func, // Function
                    data: resultData, // Calculated Values
                    borderWidth: 2, // Line Width
                    borderColor: 'rgba(0,0,0,1.0)',
                    backgroundColor: 'black',
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    );
}

export default ProbGraph