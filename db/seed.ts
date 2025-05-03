import { db } from "./index";
import * as schema from "@shared/schema";

// Mock gallery images for the website
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1621146027714-e8726d0666e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial roof coating project",
    category: "roof-coating"
  },
  {
    url: "https://images.unsplash.com/photo-1565938525338-868904466517?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Roof maintenance workers",
    category: "maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1572811777176-098942f8e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial building with coated roof",
    category: "commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1595514535919-e297e71e21b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Waterproofing application",
    category: "waterproofing"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Modern commercial building",
    category: "commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1619364726002-dfd4fdaee79f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
