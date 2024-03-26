import React from "react";

const App = () => {
  let tValues = [];
  const startTValue = 1;
  const endTValue = 3;
  const stepSizeValue = 1 / 128;
  for (let i = startTValue; i <= endTValue; i += stepSizeValue) {
    tValues.push(i);
  }

  let xValues = [2];
  let startXValue = 2;
  const endXValue = tValues.length;
  for (let i = 2; i <= endXValue; i++) {
    let newX =
      startXValue +
      stepSizeValue *
        (Math.pow(tValues[i - 2], -2) *
          (tValues[i - 2] * startXValue - Math.pow(startXValue, 2)));
    xValues.push(newX.toFixed(6));
    startXValue = newX;
  }

  let numberofIterations = [];
  for (let i = 0; i < tValues.length; i++) {
    numberofIterations[i] = i;
  }

  return (
    <>
      <div className="p-4">
        {/* <h1 className="p-4 m-4 text-2xl font-bold text-center text-black border-4">
          Total Number of Iterations:{" "}
          <span className="text-red-600">{xValues.length}</span>
        </h1> */}
        <br />

        <h2 class="text-4xl font-extrabold">Question 1</h2>
        <p class="my-4 text-lg">
          Solve the initial value problem by using Euler&apos;s method:
        </p>
        <p class="mb-4 text-lg font-normal">
          <code>
            x<sup>'</sup> = t<sup>-2</sup>(tx-x<sup>2</sup>), x(1) = 2, on the
            interval[1,3] using h = <sup>1</sup>&frasl;<sub>128</sub>
          </code>
        </p>

        <br />
        <br />

        <center>
          <span className="p-4 m-4 text-2xl font-bold text-center text-black border-4">
            Solution
          </span>
        </center>
        <code>
          x<sub>i+1</sub> = x<sub>i</sub> + h(t<sup>-2</sup>(tx-x<sup>2</sup>))
        </code>
        <br />

        <br />

        {numberofIterations.map((val, index) => (
          <div className="my-8">
            <h2 class="text-2xl font-bold">Iteration {index + 1}</h2>
            <code>
              x<sub>{index + 1}</sub> = x<sub>{index}</sub> + h(t<sup>-2</sup>
              (tx-x<sup>2</sup>))
              <br />x<sub>{index + 1}</sub> = {xValues[index]} + h((
              {tValues[index]})<sup>-2</sup>(({tValues[index]})({xValues[index]}
              )-(
              {xValues[index]})<sup>2</sup>))
              <br />x<sub>{index + 1}</sub> = {xValues[index + 1]}
            </code>
          </div>
        ))}

        <br />
        <br />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Iterations
                </th>
                <th scope="col" className="px-6 py-3">
                  t<sub>n</sub>
                </th>
                <th scope="col" className="px-6 py-3">
                  x<sub>n</sub>
                </th>
                <th scope="col" className="px-6 py-3">
                  x<sub>n+1</sub>
                </th>
              </tr>
            </thead>
            <tbody>
              {numberofIterations.map((val, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {val}
                  </th>
                  <td className="px-6 py-4">{tValues[index]}</td>
                  <td className="px-6 py-4">{xValues[index]}</td>
                  <td className="px-6 py-4">{xValues[index + 1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
