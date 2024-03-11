import Footer from "../components/Footer/footer";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "@heroicons/react/solid";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import moment from "moment";

const BookAppointment = () => {
  const [time, setTime] = useState(new Date());
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
  // const [isScheduling, setIsScheduling] = useState(false);
  // const [isScheduled, setIsScheduled] = useState(false);
  // const [scheduleErr, setScheduleErr] = useState("");
  // const handleScheduled = (date) => {
  //   setIsScheduling(true);
  //   setScheduleErr("");
  //   fakeRequest(date)
  //     .then((json) => {
  //       setScheduleErr("");
  //       setIsScheduled(true);
  //       console.log("fake response: ", json);
  //     })
  //     .catch((err) => {
  //       setScheduleErr(err);
  //     })
  //     .finally(() => {
  //       setIsScheduling(false);
  //     });
  // };

  return (
    <div className="bg-blue-300">
      <div class="relative bg-gradient-to-bl from-blue-100 via-transparent bg-white dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <img src="https://img.freepik.com/free-vector/cardiologist-online-service-platform-idea-heart-care-medical-diagnostic-doctors-treat-heart-disease-online-appointment-flat-vector-illustration_613284-3189.jpg?w=740&t=st=1709826423~exp=1709827023~hmac=c44199067e3df963a3bd4decd84441701524ebd51fd4f2b6cb726f0e7632f173"></img>
            </div>

            <div>
              <form>
                <div className="lg:max-w-lg lg:mx-auto  ">
                  <div className=" sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg bg-white">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 text-black">
                        Consult Your Doctor
                      </h1>
                    </div>

                    <div className="mt-12">
                      <div className="grid grid-cols-1 gap-5">
                        <div>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder=""
                            />
                            <label
                              for="name"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-green-500"
                            >
                              First name
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="int"
                              id="age"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="your age"
                            />
                            <label
                              for="age"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Age
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="text"
                              id="category"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder=" "
                            />
                            <label
                              for="category"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Category
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="relative">
                            <input
                              type="int"
                              id="hs-hero-signup-form-floating-input-company-name"
                              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                              placeholder="your number"
                            />
                            <label
                              for="contact number"
                              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Contact Number
                            </label>
                          </div>
                        </div>
                        {/* <div className="flex justify-start bg-gray-200 p-4 rounded-lg items-center">
      <CalendarIcon className="h-6 w-6 text-gray-600 mr-3" />
      <DatePicker
        className="border rounded px-3 bg-gray-200 py-2 w-full"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy" // Set the date format as needed
        placeholderText="Select a date"
        // Disable past dates
        todayButton="Today" // Button to select today's date
        showYearDropdown // Display dropdown to select year
        scrollableYearDropdown // Allow scrolling year dropdown
        yearDropdownItemNumber={10} // Display 10 years at a time
      />
    </div> */}
                       <div>
      <TimePicker
        onChange={handleTimeChange}
        value={time}
        clearIcon={null} // Hides the clear icon
      />
      <p>Selected time: {time.toLocaleTimeString()}</p> {/* Convert Date object to string */}
    </div>
    
                        {/* <div>
                          <DatePicker
                            showIcon
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            icon={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 48 48"
                              >
                                <mask id="ipSApplication0">
                                  <g
                                    fill="none"
                                    stroke="#fff"
                                    strokeLinejoin="round"
                                    strokeWidth="4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      d="M40.04 22v20h-32V22"
                                    ></path>
                                    <path
                                      fill="#fff"
                                      d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                    ></path>
                                  </g>
                                </mask>
                                <path
                                  fill="currentColor"
                                  d="M0 0h48v48H0z"
                                  mask="url(#ipSApplication0)"
                                ></path>
                              </svg>
                            }
                          />
                        </div> */}
                      </div>

                      <div class="mt-5">
                        <button
                          type="submit"
                          onClick={() => {
                            alert("book appoitnment");
                          }}
                          class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-black-800 dark:after:border-gray-700">
            <span class="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:bg-blue-400 dark:to-violet-400">
              15,000
            </span>
            individuals have trusted HealthLink
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;
