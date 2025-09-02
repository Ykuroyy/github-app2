'use client'

import { motion } from 'framer-motion'
import { Github, GitBranch, Users, FileCode, History, Shield, Globe, Package } from 'lucide-react'
import { useState } from 'react'

export default function WhatIsGitHub() {
  const [selectedFeature, setSelectedFeature] = useState(0)

  const features = [
    {
      icon: <FileCode size={40} />,
      title: 'コード管理',
      description: 'プログラムコードを安全に保存・管理できる場所。複数のバージョンを管理し、いつでも過去の状態に戻せます。',
      detail: 'まるで文書の「保存」と「元に戻す」機能が超強力になったようなもの！',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <GitBranch size={40} />,
      title: 'バージョン管理',
      description: '変更履歴を全て記録。誰が、いつ、何を変更したかが分かります。',
      detail: 'Googleドキュメントの変更履歴のように、全ての変更が記録されます。',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Users size={40} />,
      title: 'チーム協業',
      description: '世界中の人々と一緒にプロジェクトを進められます。',
      detail: '離れた場所にいるチームメンバーとリアルタイムで協力できます。',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Globe size={40} />,
      title: 'オープンソース',
      description: '世界中のプロジェクトを見たり、貢献したりできます。',
      detail: 'Wikipedia のように、みんなで作り上げるプロジェクトに参加できます。',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Shield size={40} />,
      title: 'セキュリティ',
      description: 'プライベートリポジトリで機密情報を安全に管理。',
      detail: '大切なデータを安全に保管し、許可した人だけがアクセスできます。',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: <Package size={40} />,
      title: 'プロジェクト管理',
      description: 'タスク管理、課題追跡、プロジェクトボードなどの機能。',
      detail: 'TrelloやAsanaのようなプロジェクト管理ツールが内蔵されています。',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
  ]

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          GitHubとは？
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          GitHubは、コードを保存・共有・管理するためのプラットフォームです。
          <br />
          でも、実はコード以外にも様々なファイルを管理できる万能ツールなんです！
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center mb-6">
            <Github size={40} className="text-github-dark mr-4" />
            <h3 className="text-2xl font-bold">基本概念</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-github-success/10 p-2 rounded-lg mr-4">
                <History size={24} className="text-github-success" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">リポジトリ</h4>
                <p className="text-gray-600">プロジェクトの保管庫。フォルダのようなもの</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-github-info/10 p-2 rounded-lg mr-4">
                <FileCode size={24} className="text-github-info" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">コミット</h4>
                <p className="text-gray-600">変更を保存する行為。セーブポイントのようなもの</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-github-warning/10 p-2 rounded-lg mr-4">
                <GitBranch size={24} className="text-github-warning" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">ブランチ</h4>
                <p className="text-gray-600">並行して作業するための分岐。下書きのようなもの</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-github-dark to-gray-800 text-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">なぜGitHubが重要？</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-github-success mr-2">✓</span>
              <span>世界中の開発者が使う標準ツール</span>
            </li>
            <li className="flex items-start">
              <span className="text-github-success mr-2">✓</span>
              <span>ポートフォリオとして就職活動に活用</span>
            </li>
            <li className="flex items-start">
              <span className="text-github-success mr-2">✓</span>
              <span>オープンソースプロジェクトへの貢献</span>
            </li>
            <li className="flex items-start">
              <span className="text-github-success mr-2">✓</span>
              <span>チーム開発の効率化</span>
            </li>
            <li className="flex items-start">
              <span className="text-github-success mr-2">✓</span>
              <span>ドキュメント管理にも活用可能</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-sm">
              💡 <strong>豆知識：</strong>GitHubは2008年に設立され、2018年にMicrosoftに買収されました。
              現在では1億人以上のユーザーが利用しています！
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">主な機能</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeature(index)}
              className={`p-4 rounded-xl transition-all card-hover ${
                selectedFeature === index
                  ? `${feature.bgColor} ring-2 ring-offset-2 ring-${feature.color}`
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`flex flex-col items-center ${feature.color}`}>
                {feature.icon}
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {feature.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <motion.div
          key={selectedFeature}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`${features[selectedFeature].bgColor} rounded-2xl p-8`}
        >
          <div className="flex items-start">
            <div className={`mr-4 ${features[selectedFeature].color}`}>
              {features[selectedFeature].icon}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">{features[selectedFeature].title}</h4>
              <p className="text-gray-700 mb-3">{features[selectedFeature].description}</p>
              <p className="text-sm text-gray-600 italic">
                {features[selectedFeature].detail}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}