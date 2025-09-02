'use client'

import { motion } from 'framer-motion'
import { Github, Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  const links = [
    {
      title: '学習リソース',
      items: [
        { label: 'GitHub公式ドキュメント', href: '#' },
        { label: 'Git基礎講座', href: '#' },
        { label: 'オープンソース入門', href: '#' },
        { label: 'コミュニティガイド', href: '#' },
      ]
    },
    {
      title: 'ツール',
      items: [
        { label: 'GitHub Desktop', href: '#' },
        { label: 'GitHub Mobile', href: '#' },
        { label: 'GitHub CLI', href: '#' },
        { label: 'VS Code拡張', href: '#' },
      ]
    },
    {
      title: 'コミュニティ',
      items: [
        { label: 'GitHub Community', href: '#' },
        { label: 'GitHub Education', href: '#' },
        { label: 'Developer Program', href: '#' },
        { label: 'GitHub Campus', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-github-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Github size={32} />
              <span className="text-xl font-bold">GitHub Learning</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              GitHubを学ぶためのインタラクティブな学習アプリ。
              プログラミング初心者からプロまで、誰でも活用できる知識をお届けします。
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>for learners</span>
            </div>
          </motion.div>

          {links.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span>{item.label}</span>
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 GitHub Learning App. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                お問い合わせ
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            このアプリはGitHubの学習を目的として作成されています。GitHub, Inc.の公式サービスではありません。
          </p>
        </div>
      </div>
    </footer>
  )
}