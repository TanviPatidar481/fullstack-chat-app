// import { config } from "dotenv";
// import { connectDB } from "../lib/db.js";
// import User from "../models/user.model.js";

// config();

// const seedUsers = [
//   // Female Users
//   {
//     email: "tanvi.patidar@example.com",
//     fullName: "Tanvi Patidar",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     email: "snehal.pawar@example.com",
//     fullName: "Snehal Vinod Pawar",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     email: "jiya.joshi@example.com",
//     fullName: "Jiya Joshi",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
//   },
//   {
//     email: "sakshi.gaud@example.com",
//     fullName: "Sakshi Gaud",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     email: "tanisha.choudhary@example.com",
//     fullName: "Tanisha Choudhary",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
//   },
//   {
//     email: "amita.kumari@example.com",
//     fullName: "Amita Kumari",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//   {
//     email: "sneha.gautam@example.com",
//     fullName: "Sneha Gautam",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
//   },
//   {
//     email: "anshul.tiwari@example.com",
//     fullName: "Anshul Tiwari",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
//   },

//   // Male Users
//   {
//     email: "harshil.patidar@example.com",
//     fullName: "Harshil Patidar",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     email: "arjun.kumar@example.com",
//     fullName: "Arjun Kumar",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
//   {
//     email: "adi.singh@example.com",
//     fullName: "Adi Singh",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     email: "raman.sharma@example.com",
//     fullName: "Raman Sharma",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
//   {
//     email: "mahesh.joshi@example.com",
//     fullName: "Mahesh Joshi",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     email: "ashok.verma@example.com",
//     fullName: "Ashok Verma",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
//   },
//   {
    
//     email: "dev.rai@example.com",
//     fullName: "Dev Rai",
//     password: "123456",
//     profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
//   },
// ];

// const seedDatabase = async () => {
//   try {
//     await connectDB();

//     await User.insertMany(seedUsers);
//     console.log("Database seeded successfully");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   }
// };

// // Call the function
// seedDatabase();

import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

config();

const seedUsers = [
  // Female Users
  {
    email: "tanvi.patidar@example.com",
    fullName: "Tanvi Patidar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "snehal.pawar@example.com",
    fullName: "Snehal Vinod Pawar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "jiya.joshi@example.com",
    fullName: "Jiya Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "sakshi.gaud@example.com",
    fullName: "Sakshi Gaud",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "tanisha.choudhary@example.com",
    fullName: "Tanisha Choudhary",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "amita.kumari@example.com",
    fullName: "Amita Kumari",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "sneha.gautam@example.com",
    fullName: "Sneha Gautam",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "anshul.tiwari@example.com",
    fullName: "Anshul Tiwari",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "jayesh.rawtiya@example.com",
    fullName: "Jayesh Rawtiya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "arjun.kumar@example.com",
    fullName: "Arjun Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "adi.singh@example.com",
    fullName: "Adi Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "raman.sharma@example.com",
    fullName: "Raman Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "mahesh.joshi@example.com",
    fullName: "Mahesh Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "ashok.verma@example.com",
    fullName: "Ashok Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "dev.rai@example.com",
    fullName: "Dev Rai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Hash passwords before saving
    const usersWithHashedPasswords = await Promise.all(
      seedUsers.map(async (user) => {
        const hashedPassword = await bcryptjs.hash(user.password, 12);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(usersWithHashedPasswords);
    console.log("Database seeded successfully with hashed passwords");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();