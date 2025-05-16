"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/images/TEUS.JPG",
      alt: "TEC",
      title: "Freshman Year",
    },
    {
      src: "/images/DIDI.JPG",
      alt: "DIDI",
      title: "DIDI Internship 2024",
    },
    {
      src: "/images/RESICLOTEAM.jpg",
      alt: "Expo Ingenierias",
      title: "ResicloApp Expo Ingenierias Participation",
    },
    {
      src: "/images/EGADE.JPG",
      alt: "Global Family Business Report",
      title: "Part Time Intern at EGADE",
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Journey
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={500} // Replace with appropriate width
                height={750} // Replace with appropriate height
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
