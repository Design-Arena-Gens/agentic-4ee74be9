'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './styles.css'

export default function CinematicStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [currentScene, setCurrentScene] = useState(0)
  const [audioPlaying, setAudioPlaying] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.15) setCurrentScene(0)
      else if (v < 0.3) setCurrentScene(1)
      else if (v < 0.45) setCurrentScene(2)
      else if (v < 0.6) setCurrentScene(3)
      else if (v < 0.75) setCurrentScene(4)
      else setCurrentScene(5)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying)
  }

  return (
    <div ref={containerRef} className="story-container">
      <RainEffect />
      <AudioControl audioPlaying={audioPlaying} toggleAudio={toggleAudio} />

      <Scene1 scrollYProgress={scrollYProgress} />
      <Scene2 scrollYProgress={scrollYProgress} />
      <Scene3 scrollYProgress={scrollYProgress} />
      <Scene4 scrollYProgress={scrollYProgress} />
      <Scene5 scrollYProgress={scrollYProgress} />
      <Scene6 scrollYProgress={scrollYProgress} />

      <SceneIndicator currentScene={currentScene} />
    </div>
  )
}

function Scene1({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2])

  return (
    <motion.section
      className="scene scene-1"
      style={{ opacity, scale }}
    >
      <motion.div
        className="scene-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="city-night">
          <div className="buildings">
            <div className="building" style={{ height: '200px', left: '5%' }}></div>
            <div className="building" style={{ height: '280px', left: '15%' }}></div>
            <div className="building" style={{ height: '160px', left: '25%' }}></div>
            <div className="building" style={{ height: '240px', left: '35%' }}></div>
            <div className="building" style={{ height: '200px', left: '45%' }}></div>
            <div className="building" style={{ height: '300px', left: '55%' }}></div>
            <div className="building" style={{ height: '180px', left: '65%' }}></div>
            <div className="building" style={{ height: '220px', left: '75%' }}></div>
            <div className="building" style={{ height: '260px', left: '85%' }}></div>
          </div>

          <motion.div
            className="man-walking"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="man-silhouette">
              <div className="man-head"></div>
              <div className="man-body"></div>
              <div className="man-leg-left"></div>
              <div className="man-leg-right"></div>
            </div>
          </motion.div>
        </div>

        <motion.h1
          className="scene-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          A Quiet Night
        </motion.h1>

        <motion.p
          className="scene-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          The city sleeps, but one soul wanders...
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

function Scene2({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0.15, 0.3], [100, 0])

  return (
    <motion.section
      className="scene scene-2"
      style={{ opacity }}
    >
      <motion.div className="scene-content" style={{ y }}>
        <div className="streetlight-scene">
          <motion.div
            className="streetlight"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="light-pole"></div>
            <div className="light-head">
              <div className="light-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="dog-hiding"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="dog-small">
              <div className="dog-head">
                <div className="dog-ear-left"></div>
                <div className="dog-ear-right"></div>
                <div className="dog-eye-left"></div>
                <div className="dog-eye-right"></div>
              </div>
              <div className="dog-body-small"></div>
              <motion.div
                className="injury-mark"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            className="man-discovers"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div className="man-silhouette">
              <div className="man-head"></div>
              <div className="man-body"></div>
            </div>
          </motion.div>
        </div>

        <motion.h2
          className="scene-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          A Chance Encounter
        </motion.h2>

        <motion.p
          className="scene-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Under the soft glow of a streetlight, a small life trembles...
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

function Scene3({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.3, 0.45], [0.9, 1])

  return (
    <motion.section
      className="scene scene-3"
      style={{ opacity }}
    >
      <motion.div className="scene-content" style={{ scale }}>
        <motion.div
          className="pickup-moment"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="hands-gentle"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="hand-left">
              <div className="palm"></div>
              <div className="finger"></div>
              <div className="finger"></div>
              <div className="finger"></div>
            </div>
            <div className="hand-right">
              <div className="palm"></div>
              <div className="finger"></div>
              <div className="finger"></div>
            </div>
          </motion.div>

          <motion.div
            className="dog-in-hands"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="dog-small">
              <div className="dog-head">
                <div className="dog-ear-left"></div>
                <div className="dog-ear-right"></div>
                <div className="dog-eye-left"></div>
                <div className="dog-eye-right"></div>
              </div>
              <div className="dog-body-small"></div>
            </div>
          </motion.div>

          <motion.div
            className="heart-particles"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            ❤️
          </motion.div>
        </motion.div>

        <motion.h2
          className="scene-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Gentle Touch
        </motion.h2>

        <motion.p
          className="scene-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          With tender care, he lifts the fragile creature into his arms...
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

function Scene4({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0])

  return (
    <motion.section
      className="scene scene-4"
      style={{ opacity }}
    >
      <motion.div className="scene-content">
        <div className="home-scene">
          <div className="room">
            <div className="window">
              <div className="window-pane"></div>
              <motion.div
                className="rain-outside"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>

            <div className="lamp">
              <div className="lamp-shade"></div>
              <div className="lamp-glow"></div>
            </div>

            <motion.div
              className="food-bowl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bowl"></div>
              <motion.div
                className="food"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="dog-eating"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="dog-small">
                <motion.div
                  className="dog-head"
                  animate={{ rotateZ: [-5, 5, -5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <div className="dog-ear-left"></div>
                  <div className="dog-ear-right"></div>
                </motion.div>
                <div className="dog-body-small"></div>
                <motion.div
                  className="dog-tail"
                  animate={{ rotateZ: [-20, 20, -20] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              className="man-watching"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <div className="man-silhouette">
                <div className="man-head"></div>
                <div className="man-body"></div>
                <motion.div
                  className="smile"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.h2
          className="scene-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          A Warm Home
        </motion.h2>

        <motion.p
          className="scene-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Safe at last, the little one discovers warmth and nourishment...
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

function Scene5({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0])

  return (
    <motion.section
      className="scene scene-5"
      style={{ opacity }}
    >
      <motion.div className="scene-content">
        <div className="healing-montage">
          <motion.div
            className="playing-scene"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="ball"
              animate={{
                x: [-100, 100, -100],
                y: [0, -50, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>

            <motion.div
              className="dog-playing"
              animate={{ x: [-80, 80, -80] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="dog-healthy">
                <div className="dog-head">
                  <div className="dog-ear-left"></div>
                  <div className="dog-ear-right"></div>
                  <div className="dog-eye-left"></div>
                  <div className="dog-eye-right"></div>
                </div>
                <div className="dog-body-healthy"></div>
                <motion.div
                  className="dog-tail"
                  animate={{ rotateZ: [-30, 30, -30] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="walking-together"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <div className="man-silhouette">
              <div className="man-head"></div>
              <div className="man-body"></div>
              <div className="man-leg-left"></div>
              <div className="man-leg-right"></div>
            </div>

            <div className="leash"></div>

            <motion.div
              className="dog-healthy"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 0.4, repeat: Infinity }}
            >
              <div className="dog-head">
                <div className="dog-ear-left"></div>
                <div className="dog-ear-right"></div>
              </div>
              <div className="dog-body-healthy"></div>
              <motion.div
                className="dog-tail"
                animate={{ rotateZ: [-40, 40, -40] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hearts-floating"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="heart-float"
                style={{ left: `${10 + i * 12}%` }}
                animate={{
                  y: [0, -100, -200],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                ❤️
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.h2
          className="scene-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Healing Together
        </motion.h2>

        <motion.p
          className="scene-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Days turn to weeks. Wounds heal. Joy returns. Two souls mend as one...
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

function Scene6({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0.75, 1], [0.8, 1])

  return (
    <motion.section
      className="scene scene-6"
      style={{ opacity, scale }}
    >
      <motion.div className="scene-content">
        <motion.div
          className="final-scene"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="sunset">
            <motion.div
              className="sun"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </div>

          <div className="silhouette-duo">
            <div className="man-silhouette">
              <div className="man-head"></div>
              <div className="man-body"></div>
            </div>

            <div className="dog-healthy">
              <div className="dog-head">
                <div className="dog-ear-left"></div>
                <div className="dog-ear-right"></div>
              </div>
              <div className="dog-body-healthy"></div>
              <motion.div
                className="dog-tail"
                animate={{ rotateZ: [-30, 30, -30] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              ></motion.div>
            </div>
          </div>

          <motion.div
            className="final-hearts"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span style={{ fontSize: '60px' }}>❤️</span>
          </motion.div>
        </motion.div>

        <motion.h2
          className="scene-title final-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Forever Changed
        </motion.h2>

        <motion.p
          className="scene-text final-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          In saving a life, he found his own salvation.
          <br />
          Sometimes the ones we rescue... rescue us.
        </motion.p>

        <motion.div
          className="credits"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <p>A Story of Compassion</p>
          <p>Scroll to experience the journey</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function RainEffect() {
  return (
    <div className="rain-container">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="raindrop"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 1 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

function AudioControl({ audioPlaying, toggleAudio }: { audioPlaying: boolean, toggleAudio: () => void }) {
  return (
    <motion.button
      className="audio-control"
      onClick={toggleAudio}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {audioPlaying ? '🔊' : '🔇'}
    </motion.button>
  )
}

function SceneIndicator({ currentScene }: { currentScene: number }) {
  const scenes = ['Night', 'Discovery', 'Rescue', 'Home', 'Healing', 'Forever']

  return (
    <div className="scene-indicator">
      {scenes.map((scene, i) => (
        <motion.div
          key={i}
          className={`indicator-dot ${i === currentScene ? 'active' : ''}`}
          animate={{
            scale: i === currentScene ? 1.5 : 1,
            opacity: i === currentScene ? 1 : 0.5
          }}
        >
          <span className="indicator-label">{scene}</span>
        </motion.div>
      ))}
    </div>
  )
}
