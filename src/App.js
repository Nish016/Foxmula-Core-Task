import React from "react";
import "./App.css";
import Column from "./Components/Column";
import {FaAddressCard , FaRegEdit, FaClock} from "react-icons/fa";
import {MdPersonAdd , MdPerson} from "react-icons/md";

function App() {
  let data = [
    {
      title: "MON",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "TUE",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "WED",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },
      ],
    },
    {
      title: "THU",
      data: [
        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "FRI",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "SAT",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "SUN",
      data: [
        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
  ];
  return (
    <>
    <div className = "i_card">

      <div className = "batch"> 
        <h4>Batch Name | PHY_B1</h4>
        <FaRegEdit />
      </div>

      <div className = "cardOne">
        <FaAddressCard />
        <p>Nishkarsh Dahiya</p>
        <MdPersonAdd size = "24px"/>
      </div>

      
      <div className = "cardTwo">
        <MdPerson />
        <p>125 students</p>
      </div>

      <div className = "cardThree">
        <FaClock />
        <div className = "activity">
          <p>Upcoming Activity</p>
          <p>Thu, 25th May</p>
          <h4>12:00 PM - 12:00 PM</h4>
        </div>

        <button className = "button">View</button>
      </div>


    </div>






    <div className={"table"}>
      {data.map((item, index) => (
        <Column key={index} data={item} />
      ))}
    </div>
    </>
  );
}
export default App;
