'use client'

import { motion } from 'framer-motion'
import { Github, Code2, Users, GitBranch } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-github-dark to-gray-900 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Code2 size={60} />
        </div>
        <div className="absolute top-20 right-20 animate-float animation-delay-2000">
          <GitBranch size={50} />
        </div>
        <div className="absolute bottom-20 left-20 animate-float animation-delay-4000">
          <Users size={55} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Github size={80} className="text-white" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            GitHub<span className="text-github-success">を学ぼう</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            コードの共有から、プロジェクト管理まで。
            <br />
            エンジニアじゃなくても使える、世界最大の開発プラットフォーム
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-github-success text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg">
              今すぐ始める
            </button>
            <button className="px-8 py-4 bg-white text-github-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              詳しく見る
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-github-success mb-2">100M+</div>
              <div className="text-gray-400">世界中のユーザー</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-github-warning mb-2">330M+</div>
              <div className="text-gray-400">リポジトリ数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-github-info mb-2">4M+</div>
              <div className="text-gray-400">組織・企業</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}