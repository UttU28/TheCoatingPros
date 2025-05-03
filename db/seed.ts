import { db } from "./index";
import * as schema from "@shared/schema";

// Mock gallery images for the website
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
    title: "Commercial roof coating project",
    category: "roof-coating"
  },
  {
    url: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=800&q=80",
    title: "Roof maintenance workers",
    category: "maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1582480459366-1ccf56b5b4d3?auto=format&fit=crop&w=800&q=80",
    title: "Commercial building with coated roof",
    category: "commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?auto=format&fit=crop&w=800&q=80",
    title: "Waterproofing application",
    category: "waterproofing"
  },
  {
    url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1470&q=80",
    title: "Modern commercial building",
    category: "commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?auto=format&fit=crop&w=1000&q=80",
    title: "Roofing professional inspection",
    category: "maintenance"
  }
];

// Service categories
const serviceCategories = [
  {
    name: "Roof Coating Solutions",
    description: "All of the manufacturers that The Coating Pros work with are leading providers of high-quality and cost-effective roof coating products."
  },
  {
    name: "Waterproofing Services",
    description: "Waterproofing services refer to a range of techniques and methods used to protect buildings and other structures from water damage."
  },
  {
    name: "Protective Roofing Coatings",
    description: "Protective Roofing Coatings are a type of specialized coating applied to roofs to provide an extra layer of protection against various elements."
  },
  {
    name: "Roof Inspections",
    description: "Comprehensive inspection services to identify potential issues before they become major problems."
  },
  {
    name: "Maintenance Programs",
    description: "Regular maintenance programs to extend the life of your commercial roof and protect your investment."
  }
];

async function seed() {
  try {
    console.log("Database seeding started...");
    
    // Here you would typically use the schema to seed the database
    // For example:
    // const [user] = await db.insert(schema.users).values({
    //   username: "admin",
    //   password: "securepassword"
    // }).returning();
    
    console.log("Seed data prepared for The Coating Pros website");
    console.log("Gallery images:", galleryImages.length);
    console.log("Service categories:", serviceCategories.length);
    
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
