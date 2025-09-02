'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Github, FileText, GitBranch, Plus, Check, 
  Edit, Users, MessageSquare, GitMerge, Play,
  ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react'

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState('repository')
  const [repoStep, setRepoStep] = useState(0)
  const [issueStep, setIssueStep] = useState(0)
  const [prStep, setPrStep] = useState(0)

  const demos = [
    {
      id: 'repository',
      title: 'リポジトリ作成',
      description: 'プロジェクトの始まりから公開まで',
      icon: <Github size={24} />,
    },
    {
      id: 'issue',
      title: 'Issue管理',
      description: 'タスクや問題を管理する方法',
      icon: <MessageSquare size={24} />,
    },
    {
      id: 'pullrequest',
      title: 'Pull Request',
      description: 'コードレビューと協力の流れ',
      icon: <GitMerge size={24} />,
    },
  ]

  const repoSteps = [
    {
      title: 'リポジトリ作成',
      description: '新しいプロジェクトを始めます',
      action: 'Create Repository',
      visual: (
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          <div className="mb-2">$ Creating new repository...</div>
          <div className="text-white">✅ Repository 'my-awesome-project' created</div>
        </div>
      )
    },
    {
      title: 'READMEファイル追加',
      description: 'プロジェクトの説明を書きます',
      action: 'Add README.md',
      visual: (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <FileText size={16} className="mr-2" />
            <span className="font-semibold">README.md</span>
          </div>
          <div className="text-sm text-gray-600">
            # My Awesome Project<br/>
            This is a great project that does amazing things!
          </div>
        </div>
      )
    },
    {
      title: 'コミット',
      description: '変更を保存します',
      action: 'Commit changes',
      visual: (
        <div className="bg-github-success/10 border border-github-success/20 rounded-lg p-4">
          <div className="flex items-center text-github-success">
            <Check size={16} className="mr-2" />
            <span className="font-semibold">Commit: Add README.md</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Author: yamashita • 2 minutes ago
          </div>
        </div>
      )
    },
    {
      title: '公開完了',
      description: '世界中に公開されました！',
      action: 'Repository is live',
      visual: (
        <div className="bg-gradient-to-r from-github-info to-purple-600 text-white rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🎉</div>
          <div className="font-semibold">プロジェクト公開中！</div>
          <div className="text-xs opacity-90">github.com/yamashita/my-awesome-project</div>
        </div>
      )
    },
  ]

  const issueSteps = [
    {
      title: 'Issue作成',
      description: '新しいタスクや問題を報告',
      action: 'Create Issue',
      visual: (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="font-semibold">#1 Add dark mode support</span>
          </div>
          <div className="text-sm text-gray-600">
            Users are requesting dark mode functionality...
          </div>
        </div>
      )
    },
    {
      title: 'ラベル付け',
      description: 'カテゴリーと優先度を設定',
      action: 'Add labels',
      visual: (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="font-semibold">#1 Add dark mode support</span>
          </div>
          <div className="flex gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">enhancement</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">high priority</span>
          </div>
        </div>
      )
    },
    {
      title: 'アサイン',
      description: '担当者を決めます',
      action: 'Assign to developer',
      visual: (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="font-semibold">#1 Add dark mode support</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={14} className="mr-1" />
            <span>Assigned to: developer-san</span>
          </div>
        </div>
      )
    },
    {
      title: '進行中',
      description: '開発が開始されました',
      action: 'In Progress',
      visual: (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="font-semibold">#1 Add dark mode support</span>
          </div>
          <div className="text-sm text-yellow-700">
            🔄 In Progress - Working on implementation
          </div>
        </div>
      )
    },
  ]

  const prSteps = [
    {
      title: 'ブランチ作成',
      description: '新機能用のブランチを作成',
      action: 'Create branch',
      visual: (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center">
            <GitBranch size={16} className="mr-2 text-purple-600" />
            <span className="font-semibold">feature/dark-mode</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">from main</div>
        </div>
      )
    },
    {
      title: 'コード変更',
      description: '機能を実装します',
      action: 'Write code',
      visual: (
        <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm">
          <div className="text-green-400">+ const theme = useTheme()</div>
          <div className="text-green-400">+ const toggleDark = () =&gt; {"{"}</div>
          <div className="text-green-400">+   setTheme('dark')</div>
          <div className="text-green-400">+ {"}"}</div>
        </div>
      )
    },
    {
      title: 'Pull Request作成',
      description: 'レビューを依頼します',
      action: 'Create PR',
      visual: (
        <div className="bg-github-info/10 border border-github-info/20 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <GitMerge size={16} className="mr-2 text-github-info" />
            <span className="font-semibold">Add dark mode support</span>
          </div>
          <div className="text-sm text-gray-600">
            feature/dark-mode → main • Ready for review
          </div>
        </div>
      )
    },
    {
      title: 'レビュー&マージ',
      description: 'コードがレビューされ、統合されます',
      action: 'Merge PR',
      visual: (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Check size={16} className="mr-2 text-purple-600" />
            <span className="font-semibold text-purple-800">Merged successfully!</span>
          </div>
          <div className="text-sm text-purple-700">
            🎉 Dark mode feature is now live!
          </div>
        </div>
      )
    },
  ]

  const getCurrentSteps = () => {
    switch(activeDemo) {
      case 'repository': return { steps: repoSteps, currentStep: repoStep, setter: setRepoStep }
      case 'issue': return { steps: issueSteps, currentStep: issueStep, setter: setIssueStep }
      case 'pullrequest': return { steps: prSteps, currentStep: prStep, setter: setPrStep }
      default: return { steps: repoSteps, currentStep: repoStep, setter: setRepoStep }
    }
  }

  const { steps, currentStep, setter } = getCurrentSteps()

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
          インタラクティブデモ
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          実際のGitHub操作を体験してみましょう。
          <br />
          クリックして各ステップを進めていけます
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {demos.map((demo) => (
            <motion.button
              key={demo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDemo === demo.id
                  ? 'bg-github-info text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:shadow-md hover:border-gray-400'
              }`}
            >
              <div className="flex items-center space-x-2">
                {demo.icon}
                <div className="text-left">
                  <div className="font-semibold">{demo.title}</div>
                  <div className="text-xs opacity-75">{demo.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="text-lg font-bold flex items-center">
              {demos.find(d => d.id === activeDemo)?.icon}
              <span className="ml-2">{demos.find(d => d.id === activeDemo)?.title}</span>
            </h3>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-500">
                ステップ {currentStep + 1} / {steps.length}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setter(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                >
                  <ChevronUp size={16} />
                </button>
                <button
                  onClick={() => setter(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                >
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  key={`${activeDemo}-${currentStep}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{steps[currentStep].title}</h4>
                  <p className="text-gray-700 mb-4">{steps[currentStep].description}</p>
                  <button 
                    onClick={() => setter(Math.min(steps.length - 1, currentStep + 1))}
                    className="px-4 py-2 bg-github-success text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
                  >
                    <Play size={16} className="mr-2" />
                    {steps[currentStep].action}
                  </button>
                </motion.div>
              </div>

              <div>
                <motion.div
                  key={`${activeDemo}-visual-${currentStep}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-40 flex items-center justify-center"
                >
                  {steps[currentStep].visual}
                </motion.div>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-github-info to-purple-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setter(index)}
                    className={`p-1 rounded ${
                      index === currentStep ? 'text-github-info font-semibold' : 'hover:text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-6"
        >
          <h4 className="text-lg font-bold mb-3">💡 実践のコツ</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium mb-1">コミットメッセージ</div>
              <div className="text-gray-300">何を変更したか明確に書く</div>
            </div>
            <div>
              <div className="font-medium mb-1">ブランチ名</div>
              <div className="text-gray-300">機能や修正内容を反映</div>
            </div>
            <div>
              <div className="font-medium mb-1">レビュー</div>
              <div className="text-gray-300">建設的なフィードバックを心がける</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}