"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MechanicalPage() {
  // Hardware problems
  const hardwareProblems = [
    {
      id: 18,
      title: "Automated Waste Segregation System",
      description:
        "Design and develop an automated waste segregation system that can efficiently separate different types of waste materials.",
      difficulty: "Medium",
      tags: ["Waste Management", "Automation", "Sustainability"],
      sdg: "SDG 11: Sustainable Cities and Communities",
      fullDescription:
        "The goal is to design and develop an automated waste segregation system that can efficiently separate different types of waste materials such as plastic, metal, glass, paper, and organic waste. The system should use sensors, computer vision, or other technologies to identify and sort waste items accurately. It should be able to handle a variety of waste sizes and shapes and operate continuously with minimal human intervention. The solution should be cost-effective, energy-efficient, and suitable for implementation in municipal waste management facilities or community waste collection centers.",
    },
    {
      id: 19,
      title: "Portable Water Purification System",
      description:
        "Create a portable water purification system that can effectively remove contaminants from various water sources.",
      difficulty: "Medium",
      tags: ["Water Purification", "Portable Systems", "Environmental Health"],
      sdg: "SDG 6: Clean Water and Sanitation",
      fullDescription:
        "The objective is to create a portable water purification system that can effectively remove contaminants from various water sources, making it safe for drinking and other uses. The system should be lightweight, compact, and easy to transport, making it suitable for use in emergency situations, remote areas, or during outdoor activities. It should be capable of removing bacteria, viruses, parasites, heavy metals, and other harmful substances from water. The solution should be user-friendly, requiring minimal maintenance and technical knowledge to operate. Additionally, it should be energy-efficient, possibly utilizing renewable energy sources like solar power, and have a reasonable cost to ensure accessibility for a wide range of users.",
    },
    {
      id: 21,
      title: "Automated Vertical Farming System",
      description:
        "Design and develop an automated vertical farming system that optimizes space, water usage, and energy consumption.",
      difficulty: "Hard",
      tags: ["Agriculture", "Automation", "Sustainability"],
      sdg: "SDG 2: Zero Hunger",
      fullDescription:
        "The Automated Vertical Farming System aims to revolutionize urban agriculture by maximizing crop yield in limited spaces while minimizing resource consumption. This system should integrate IoT sensors, automated irrigation, and climate control to create optimal growing conditions for various crops. Using vertical stacking and efficient lighting, it should enable year-round cultivation regardless of external weather conditions. The solution should include features like nutrient monitoring, pest detection, and harvest prediction to ensure consistent, high-quality produce. By reducing water usage by at least 90% compared to traditional farming and eliminating the need for pesticides, this system will promote sustainable urban food production. The design should be modular, scalable, and adaptable to different urban environments, from residential buildings to commercial spaces.",
    },
    {
      id: 22,
      title: "Smart Irrigation System for Precision Agriculture",
      description:
        "Develop a smart irrigation system that uses sensors and weather data to optimize water usage in agricultural fields.",
      difficulty: "Medium",
      tags: ["Agriculture", "Water Conservation", "IoT"],
      sdg: "SDG 6: Clean Water and Sanitation",
      fullDescription:
        "The Smart Irrigation System for Precision Agriculture aims to revolutionize water management in farming by delivering the right amount of water to crops at the right time. Using soil moisture sensors, weather forecasting data, and crop-specific algorithms, the system will automatically adjust irrigation schedules and water distribution. This precision approach will reduce water waste, prevent over or under-watering, and optimize crop growth conditions. The solution should include features like remote monitoring and control via a mobile app, automated alerts for system issues, and data analytics for long-term irrigation planning. By potentially reducing water usage by up to 50% compared to conventional irrigation methods, this system will contribute to sustainable agriculture practices, especially in water-scarce regions. The design should be adaptable to various farm sizes, crop types, and existing irrigation infrastructure, making it accessible to both small-scale and commercial farmers.",
    },
    {
      id: 23,
      title: "Portable Solar-Powered Refrigeration System",
      description:
        "Design a portable refrigeration system powered by solar energy for storing vaccines, medicines, or food in remote areas.",
      difficulty: "Hard",
      tags: ["Renewable Energy", "Refrigeration", "Healthcare"],
      sdg: "SDG 7: Affordable and Clean Energy",
      fullDescription:
        "The Portable Solar-Powered Refrigeration System aims to address the critical need for reliable cold storage in areas with limited or no access to electricity. This system will harness solar energy to power a compact, efficient refrigeration unit capable of maintaining stable low temperatures required for preserving vaccines, medicines, or perishable food items. The design should incorporate high-efficiency solar panels, advanced battery storage for overnight operation, and a well-insulated refrigeration chamber with precise temperature control. The system should be durable, weather-resistant, and easily transportable, making it suitable for use in remote healthcare facilities, disaster relief operations, or rural communities. Features should include temperature monitoring, low-power alerts, and potentially different temperature zones for various storage needs. By providing a sustainable and reliable cold chain solution, this system will help reduce vaccine wastage, extend the shelf life of medications, and decrease food spoilage in underserved regions.",
    },
    {
      id: 37,
      title: "Automated Pothole Detection and Repair System",
      description:
        "Develop a system that can automatically detect and repair potholes on roads using advanced sensing and material application technologies.",
      difficulty: "Hard",
      tags: ["Infrastructure", "Automation", "Transportation"],
      sdg: "SDG 9: Industry, Innovation, and Infrastructure",
      fullDescription:
        "Road infrastructure deterioration, particularly potholes, poses significant safety hazards, vehicle damage, and traffic disruptions. Traditional repair methods are labor-intensive, time-consuming, and often result in temporary fixes. An automated pothole detection and repair system can revolutionize road maintenance by combining advanced sensing technologies with automated repair mechanisms. The system should use sensors, computer vision, or LiDAR to identify and assess potholes, then deploy a repair mechanism that can fill and seal the damaged area with appropriate materials. This solution will enhance road safety, reduce maintenance costs, and minimize traffic disruptions through faster, more efficient repairs.",
    },
    {
      id: 41,
      title: "Automated Vertical Farming System (Duplicate)",
      description:
        "Design and develop an automated vertical farming system that optimizes space, water usage, and energy consumption.",
      difficulty: "Hard",
      tags: ["Agriculture", "Automation", "Sustainability"],
      sdg: "SDG 2: Zero Hunger",
      fullDescription:
        "Design and develop an automated vertical farming system that optimizes space, water usage, and energy consumption. The system should use IoT sensors to monitor plant health, automate irrigation, and adjust lighting based on plant needs. It should be modular, scalable, and suitable for urban environments with limited space. The solution can include features like nutrient monitoring, pest detection, and harvest prediction.",
    },
  ]

  // Software problems
  const softwareProblems = []

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/#theme">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Themes
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-4 bg-black/70 rounded-lg border border-cyan-500/30">
              <Cog className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Mechanical
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore mechanical engineering challenges that focus on designing physical systems and solutions. These
            problem statements aim to address real-world issues through innovative mechanical design and engineering.
          </motion.p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-900/50">
              Hardware Solutions
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-900/50">
              Software Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {hardwareProblems.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        problem.difficulty === "Hard"
                          ? "bg-red-500/20 text-red-300"
                          : problem.difficulty === "Medium"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{problem.description}</p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                    <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {problem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {problem.sdg && (
                    <div className="mt-3 pt-3 border-t border-cyan-500/20">
                      <span className="text-xs text-cyan-300">{problem.sdg}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            {softwareProblems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {softwareProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-white">{problem.title}</h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.difficulty === "Hard"
                            ? "bg-red-500/20 text-red-300"
                            : problem.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{problem.description}</p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">Problem Statement:</h3>
                      <p className="text-gray-300 text-sm">{problem.fullDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {problem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-md text-xs text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {problem.sdg && (
                      <div className="mt-3 pt-3 border-t border-cyan-500/20">
                        <span className="text-xs text-cyan-300">{problem.sdg}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">No software problems available in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

