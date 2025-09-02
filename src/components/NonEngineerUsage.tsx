'use client'

import { motion } from 'framer-motion'
import { 
  FileText, Users, BookOpen, PenTool, Briefcase, 
  Calendar, Image, Music, Video, Database,
  TrendingUp, Presentation, FileSpreadsheet, Award
} from 'lucide-react'
import { useState } from 'react'

export default function NonEngineerUsage() {
  const [selectedRole, setSelectedRole] = useState(0)

  const roles = [
    {
      title: 'ライター・編集者',
      icon: <PenTool size={30} />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      useCases: [
        {
          title: '記事の共同執筆',
          description: '複数の執筆者で記事を共同編集。変更履歴も完全に管理',
          example: 'ブログ記事、技術文書、マニュアル作成',
        },
        {
          title: 'バージョン管理',
          description: '原稿の全てのバージョンを保存。いつでも過去の版に戻せる',
          example: '書籍の執筆、論文の推敲、契約書の管理',
        },
        {
          title: 'レビュー・校正',
          description: 'Pull Requestを使って編集者からフィードバックを受ける',
          example: '翻訳作業、編集作業、校正プロセス',
        },
      ],
    },
    {
      title: 'デザイナー',
      icon: <Image size={30} />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      useCases: [
        {
          title: 'デザインファイル管理',
          description: 'デザインの変更履歴を管理し、クライアントと共有',
          example: 'UIデザイン、ロゴデザイン、Webデザイン',
        },
        {
          title: 'アセット共有',
          description: 'アイコン、画像、フォントなどのリソースをチームで共有',
          example: 'デザインシステム、ブランドガイドライン',
        },
        {
          title: 'ポートフォリオ',
          description: 'GitHub Pagesで無料でポートフォリオサイトを公開',
          example: '作品集、実績紹介、個人サイト',
        },
      ],
    },
    {
      title: 'マーケター',
      icon: <TrendingUp size={30} />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      useCases: [
        {
          title: 'キャンペーン管理',
          description: 'マーケティング資料やキャンペーン素材を一元管理',
          example: 'LP作成、広告素材、メールテンプレート',
        },
        {
          title: 'A/Bテスト記録',
          description: 'テストパターンと結果を体系的に記録・管理',
          example: '広告文言テスト、デザインテスト、効果測定',
        },
        {
          title: '競合分析',
          description: '競合他社のオープンソースプロジェクトを分析',
          example: '技術トレンド把握、採用技術調査',
        },
      ],
    },
    {
      title: 'プロジェクトマネージャー',
      icon: <Briefcase size={30} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      useCases: [
        {
          title: 'タスク管理',
          description: 'Issuesとプロジェクトボードでタスクを可視化',
          example: 'スプリント管理、バグトラッキング、機能要望管理',
        },
        {
          title: '進捗管理',
          description: 'マイルストーンで期限を設定し、進捗を追跡',
          example: 'リリース計画、四半期目標、KPI管理',
        },
        {
          title: 'ドキュメント管理',
          description: '仕様書や議事録をWikiで一元管理',
          example: 'プロジェクト仕様、会議録、ナレッジベース',
        },
      ],
    },
    {
      title: '研究者・学生',
      icon: <BookOpen size={30} />,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      useCases: [
        {
          title: '論文管理',
          description: 'LaTeX文書の共同執筆とバージョン管理',
          example: '学術論文、研究ノート、実験データ',
        },
        {
          title: 'データ共有',
          description: '研究データやコードを公開し、再現可能性を確保',
          example: '統計分析、実験結果、データセット',
        },
        {
          title: '共同研究',
          description: '世界中の研究者と協力してプロジェクトを進める',
          example: 'オープンサイエンス、国際共同研究',
        },
      ],
    },
    {
      title: '人事・採用',
      icon: <Users size={30} />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      useCases: [
        {
          title: '候補者評価',
          description: 'エンジニアのGitHubプロフィールから実力を評価',
          example: 'コード品質確認、貢献度チェック、技術スタック把握',
        },
        {
          title: '社内文書管理',
          description: '就業規則や社内ルールをバージョン管理',
          example: '就業規則、評価制度、研修資料',
        },
        {
          title: 'オンボーディング',
          description: '新入社員向けの資料を整備・更新',
          example: '入社ガイド、環境構築手順、社内ツール説明',
        },
      ],
    },
  ]

  const tools = [
    {
      name: 'GitHub Desktop',
      description: 'コマンドライン不要のGUIアプリ',
      level: '初心者向け',
      icon: '🖥️',
    },
    {
      name: 'GitHub Mobile',
      description: 'スマホからプロジェクト管理',
      level: '全レベル',
      icon: '📱',
    },
    {
      name: 'GitHub Pages',
      description: '無料でWebサイトを公開',
      level: '初級～中級',
      icon: '🌐',
    },
    {
      name: 'GitHub Codespaces',
      description: 'ブラウザで開発環境を構築',
      level: '中級以上',
      icon: '☁️',
    },
  ]

  const successStories = [
    {
      company: 'Spotify',
      usage: 'ドキュメント管理',
      description: 'API仕様書やガイドラインをGitHubで管理',
    },
    {
      company: 'The Guardian',
      usage: 'ジャーナリズム',
      description: 'データジャーナリズムプロジェクトで活用',
    },
    {
      company: 'NASA',
      usage: '研究データ共有',
      description: '宇宙開発プロジェクトのコード・データを公開',
    },
    {
      company: '政府機関',
      usage: '透明性向上',
      description: '公共データや政策文書をオープンソース化',
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">非エンジニア</span>でも活用できる
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          GitHubはコード管理だけじゃない！
          <br />
          様々な職種で活用できる実践的な使い方をご紹介
        </p>
      </motion.div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">職種別の活用方法</h3>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {roles.map((role, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedRole(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedRole === index
                  ? `${role.bgColor} ${role.color} ring-2 ring-offset-2`
                  : 'bg-white text-gray-700 border border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-2">
                {role.icon}
                <span>{role.title}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${roles[selectedRole].bgColor} rounded-2xl p-8`}
        >
          <h4 className={`text-xl font-bold mb-6 flex items-center ${roles[selectedRole].color}`}>
            {roles[selectedRole].icon}
            <span className="ml-2">{roles[selectedRole].title}の活用例</span>
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            {roles[selectedRole].useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h5 className="font-bold mb-2">{useCase.title}</h5>
                <p className="text-gray-600 text-sm mb-3">{useCase.description}</p>
                <div className="text-xs text-gray-500 italic">
                  例: {useCase.example}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center mb-8">便利なツール</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h4 className="font-bold mb-2">{tool.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                {tool.level}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center mb-8">実際の活用事例</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-lg">{story.company}</h4>
                <span className="px-3 py-1 bg-github-success/10 text-github-success rounded-full text-xs font-medium">
                  {story.usage}
                </span>
              </div>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">始めるのは簡単！</h3>
        <p className="mb-6 text-lg">
          プログラミング知識は不要。今すぐ始められます
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm">アカウント作成</div>
            <div className="text-xs opacity-80">無料で簡単登録</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm">リポジトリ作成</div>
            <div className="text-xs opacity-80">プロジェクト開始</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm">ファイルアップロード</div>
            <div className="text-xs opacity-80">ドラッグ&ドロップで簡単</div>
          </div>
        </div>

        <button className="mt-6 px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
          無料で始める
        </button>
      </motion.div>
    </div>
  )
}