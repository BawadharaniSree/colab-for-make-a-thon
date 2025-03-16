"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Brain, Clock, BellRing, Instagram  } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIProblemsPage() {
  const [dots, setDots] = useState(".")

  // Animation for the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Particle animation config
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/#theme">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Themes
            </Button>
          </Link>

{/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-4 bg-black/70 rounded-lg border border-cyan-500/30">
              <Brain className="h-12 w-12 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Artificial Intelligence
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl"
          >
            Get ready to explore cutting-edge AI problem statements that will challenge your skills and creativity.
          </motion.p>

*/}


        </div>

        

        {/* Stay Tuned Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center py-16 md:py-24"
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Clock className="h-12 w-12 md:h-16 md:w-16 text-cyan-400" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Stay Tuned
          </motion.h2>

          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-center text-gray-300">Problem statements coming soon{dots}</p>
          </motion.div>

          <motion.div
            className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg max-w-md w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
            <BellRing className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-medium text-white">Stay Updated!</h3>
            </div>
            <p className="text-gray-300 mb-4">Follow our Instagram page for the latest updates and announcements.</p>
            <a href="https://www.instagram.com/eceasvce?igsh=eXB1aTR6eWZldGht" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>

     {/*      <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-black/70 border border-cyan-500/30 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                Notify Me
              </Button>
            </div>
            
            */} 


          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
