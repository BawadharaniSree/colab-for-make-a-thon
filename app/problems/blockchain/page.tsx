"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Blocks } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlockchainPage() {
  // Hardware problems
  const hardwareProblems = []

  // Software problems
  const softwareProblems = [
    {
      id: 49,
      title: "Blockchain-Based Supply Chain Traceability System",
      description:
        "Develop a blockchain solution that enables end-to-end traceability and transparency in supply chains.",
      difficulty: "Hard",
      tags: ["Supply Chain", "Traceability", "Distributed Ledger"],
      sdg: "SDG 12: Responsible Consumption and Production",
      fullDescription:
        "Modern supply chains are complex, opaque, and vulnerable to fraud, counterfeiting, and inefficiencies. Stakeholders and consumers lack visibility into product origins, manufacturing conditions, and distribution paths, leading to trust issues and compliance challenges. Traditional centralized tracking systems are susceptible to manipulation and often create information silos between different supply chain participants. A blockchain-based supply chain traceability system can address these challenges by creating an immutable, transparent record of a product's journey from source to consumer. This solution should enable real-time tracking, secure data sharing between stakeholders, and verification of product authenticity and compliance. By enhancing transparency and accountability, this system will reduce fraud, improve quality control, and enable more sustainable and ethical supply chain practices.",
    },
  ]

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
              <Blocks className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Blockchain
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Explore blockchain challenges that focus on creating decentralized applications and systems. These problem
            statements aim to leverage blockchain technology to enhance trust, transparency, and security in various
            domains.
          </motion.p>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-cyan-900/50">
              Hardware Solutions
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-cyan-900/50">
              Software Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-0">
            {hardwareProblems.length > 0 ? (
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
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400">No hardware problems available in this category.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="software" className="mt-0">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

