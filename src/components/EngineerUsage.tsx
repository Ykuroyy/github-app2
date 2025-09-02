'use client'

import { motion } from 'framer-motion'
import { Code, Terminal, GitBranch, GitMerge, GitPullRequest, Users, Zap, Shield, Rocket, Bug } from 'lucide-react'
import { useState } from 'react'

export default function EngineerUsage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  const getActiveButtonClass = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-500 text-white shadow-lg'
      case 'green': return 'bg-green-500 text-white shadow-lg'
      case 'purple': return 'bg-purple-500 text-white shadow-lg'
      default: return 'bg-blue-500 text-white shadow-lg'
    }
  }

  const getStepBgClass = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100'
      case 'green': return 'bg-green-100'
      case 'purple': return 'bg-purple-100'
      default: return 'bg-blue-100'
    }
  }

  const getStepTextClass = (color: string) => {
    switch(color) {
      case 'blue': return 'text-blue-600'
      case 'green': return 'text-green-600'
      case 'purple': return 'text-purple-600'
      default: return 'text-blue-600'
    }
  }

  const workflows = [
    {
      title: '個人開発',
      icon: <Code size={24} />,
      steps: [
        { action: 'リポジトリ作成', description: 'プロジェクトの新規作成' },
        { action: 'コード編集', description: 'ローカルで開発' },
        { action: 'コミット', description: '変更を記録' },
        { action: 'プッシュ', description: 'GitHubに送信' },
      ],
      color: 'blue',
    },
    {
      title: 'チーム開発',
      icon: <Users size={24} />,
      steps: [
        { action: 'Issue作成', description: 'タスクや問題を記録' },
        { action: 'ブランチ作成', description: '機能ごとに分岐' },
        { action: 'Pull Request', description: 'レビュー依頼' },
        { action: 'マージ', description: 'メインに統合' },
      ],
      color: 'green',
    },
    {
      title: 'CI/CD',
      icon: <Rocket size={24} />,
      steps: [
        { action: 'コード更新', description: '変更をプッシュ' },
        { action: '自動テスト', description: 'GitHub Actions実行' },
        { action: 'ビルド', description: '自動でビルド処理' },
        { action: 'デプロイ', description: '本番環境に反映' },
      ],
      color: 'purple',
    },
  ]

  const bestPractices = [
    {
      icon: <GitBranch className="text-orange-500" size={30} />,
      title: 'ブランチ戦略',
      description: 'main/develop/featureブランチを使い分け、整理された開発フローを維持',
    },
    {
      icon: <GitPullRequest className="text-blue-500" size={30} />,
      title: 'コードレビュー',
      description: 'Pull Requestでチームメンバーからフィードバックを受け、品質向上',
    },
    {
      icon: <Shield className="text-green-500" size={30} />,
      title: 'セキュリティ',
      description: 'Dependabotで依存関係の脆弱性を自動検出、セキュリティを強化',
    },
    {
      icon: <Zap className="text-yellow-500" size={30} />,
      title: '自動化',
      description: 'GitHub Actionsでテスト、ビルド、デプロイを自動化し効率化',
    },
    {
      icon: <Bug className="text-red-500" size={30} />,
      title: 'Issue管理',
      description: 'バグや機能要望をIssueで管理、プロジェクトボードで可視化',
    },
    {
      icon: <Terminal className="text-purple-500" size={30} />,
      title: 'CLI活用',
      description: 'Git CLIやGitHub CLIでコマンドラインから効率的に操作',
    },
  ]

  const dailyCommands = [
    { command: 'git clone [URL]', description: 'リポジトリをローカルにコピー' },
    { command: 'git add .', description: '変更をステージングエリアに追加' },
    { command: 'git commit -m "message"', description: '変更を記録' },
    { command: 'git push origin main', description: 'リモートリポジトリに送信' },
    { command: 'git pull', description: '最新の変更を取得' },
    { command: 'git branch [name]', description: '新しいブランチを作成' },
    { command: 'git checkout [branch]', description: 'ブランチを切り替え' },
    { command: 'git merge [branch]', description: 'ブランチを統合' },
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
          <span className="gradient-text">エンジニア</span>の使い方
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          プロのエンジニアがGitHubをどのように活用しているか、
          <br />
          実際のワークフローと共に詳しく解説します
        </p>
      </motion.div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">開発ワークフロー</h3>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {workflows.map((workflow, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveWorkflow(index)}
              className={`px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                activeWorkflow === index
                  ? getActiveButtonClass(workflow.color)
                  : 'bg-white text-gray-700 border border-gray-300 hover:shadow-md hover:border-gray-400'
              }`}
            >
              <div className="flex items-center space-x-2">
                {workflow.icon}
                <span>{workflow.title}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeWorkflow}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h4 className="text-xl font-bold mb-6 flex items-center">
            {workflows[activeWorkflow].icon}
            <span className="ml-2">{workflows[activeWorkflow].title}のフロー</span>
          </h4>
          
          <div className="grid md:grid-cols-4 gap-4">
            {workflows[activeWorkflow].steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hover:border-github-info transition-colors">
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full ${getStepBgClass(workflows[activeWorkflow].color)} flex items-center justify-center mr-3`}>
                      <span className={`${getStepTextClass(workflows[activeWorkflow].color)} font-bold`}>
                        {index + 1}
                      </span>
                    </div>
                    <h5 className="font-semibold text-gray-900">{step.action}</h5>
                  </div>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
                {index < workflows[activeWorkflow].steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-400">
                    →
                  </div>
                )}
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
        <h3 className="text-2xl font-bold text-center mb-8">ベストプラクティス</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPractices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className="flex items-start">
                <div className="mr-4">{practice.icon}</div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900">{practice.title}</h4>
                  <p className="text-sm text-gray-700">{practice.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-github-dark text-white rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Terminal className="mr-3" />
          よく使うGitコマンド
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {dailyCommands.map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <code className="text-github-success font-mono text-sm block mb-1">
                {cmd.command}
              </code>
              <p className="text-gray-300 text-sm">{cmd.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-github-success/20 rounded-lg border border-github-success/40">
          <p className="text-sm">
            💡 <strong>プロのコツ：</strong>エイリアスを設定して、よく使うコマンドを短縮できます。
            例：<code className="mx-1">git config --global alias.co checkout</code>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-github-info to-purple-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">実際のプロジェクト例</h3>
          <p className="mb-6">
            世界中の有名プロジェクトがGitHubで開発されています
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <div className="font-bold">React</div>
              <div className="text-xs opacity-90">Facebook</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="font-bold">VS Code</div>
              <div className="text-xs opacity-90">Microsoft</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="font-bold">TensorFlow</div>
              <div className="text-xs opacity-90">Google</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="font-bold">Linux</div>
              <div className="text-xs opacity-90">Linus Torvalds</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}