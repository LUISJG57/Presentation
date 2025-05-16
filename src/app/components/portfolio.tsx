"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "excercise", "family", "freetime"]

  const works = [
    {
      id: 1,
      title: "Coding",
      category: "freetime",
      image: "/images/CODING.JPG",
      year: "2022",
    },
    {
      id: 2,
      title: "Climbing",
      category: "excercise",
      image: "/images/DANI.JPG",
      year: "2024",
    },
    {
      id: 3,
      title: "GYM",
      category: "excercise",
      image: "/images/GYM.JPG",
      year: "2022",
    },
    {
      id: 4,
      title: "Carne Asada with my family",
      category: "family",
      image: "/images/LUIS.JPG",
      year: "2024",
    },
    {
      id: 5,
      title: "Coffee with my sister",
      category: "family",
      image: "/images/PATY.JPG",
      year: "2023",
    },
    {
      id: 6,
      title: "Borregos Football Game",
      category: "freetime",
      image: "/images/ITESM.JPG",
      year: "2024",
    },
    {
        id: 7,
        title: "Pera",
        category: "family",
        image: "/images/PERA.JPG",
        year: "2024",
    },
    {
        id: 8,
        title: "BJJ",
        category: "excercise",
        image: "/images/BJJ.JPG",
        year: "2024",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
          My Hobbies
        </h2>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
