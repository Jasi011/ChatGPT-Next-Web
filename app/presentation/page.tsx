"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";

type Slide = {
  id: string;
  content: JSX.Element;
};

type PptSlide = {
  title: string;
  content: string[];
};

const usePresentationData = () => {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "intro",
        content: (
          <>
            <div className="emoji">🚀</div>
            <div className="title">AI-Native 工作方式转型</div>
            <div className="subtitle">从路径依赖到 AI 优先的思维重构</div>
            <div className="intro-text">60分钟互动工作坊</div>
          </>
        ),
      },
      {
        id: "journey",
        content: (
          <>
            <div className="title">今天的旅程</div>
            <div className="card">
              <div className="emoji-large">💭</div>
              <div className="card-time">0-5分钟</div>
              <div className="large-text">破冰：你的AI使用现状</div>
            </div>
            <div className="card">
              <div className="emoji-large">🧠</div>
              <div className="card-time">5-15分钟</div>
              <div className="large-text">认知刷新：什么是真正的AI原生？</div>
            </div>
            <div className="card">
              <div className="emoji-large">🔍</div>
              <div className="card-time">15-35分钟</div>
              <div className="large-text">核心环节：盘点我们的失血点</div>
            </div>
            <div className="card">
              <div className="emoji-large">⚡</div>
              <div className="card-time">35-55分钟</div>
              <div className="large-text">共创：AI-Native解决方案设计</div>
            </div>
            <div className="card">
              <div className="emoji-large">🎯</div>
              <div className="card-time">55-60分钟</div>
              <div className="large-text">承诺：每个人的行动计划</div>
            </div>
          </>
        ),
      },
      {
        id: "icebreaker",
        content: (
          <>
            <div className="title">破冰互动</div>
            <div className="box">
              <div className="large-text">请每位在便签上写下：</div>
              <div className="large-text">✓ 你今天用了几次AI工具？</div>
              <div className="large-text">✓ 用来做什么？</div>
              <div className="large-text">✓ 有没有让AI帮你做决策？</div>
            </div>
            <div className="highlight">
              <div className="medium-text">⏱️ 2分钟写，3分钟分享（选3-4位）</div>
            </div>
            <div className="quote">
              <div className="medium-text">🎯 教练观察：大部分人是在问答还是协作？</div>
            </div>
          </>
        ),
      },
      {
        id: "ai-native",
        content: (
          <>
            <div className="title">AI原生公司在做什么？</div>
            <div className="card">
              <h3 className="card-title">HeyGen</h3>
              <p className="large-text">📍 每个员工日均与AI对话150+次</p>
              <p className="medium-text">💡 AI不是工具，是工作流的一部分</p>
            </div>
            <div className="card">
              <h3 className="card-title">OpenAI</h3>
              <p className="large-text">📍 产品迭代由AI生成90%的初始代码</p>
              <p className="medium-text">💡 人类负责判断和方向，AI负责执行</p>
            </div>
            <div className="card">
              <h3 className="card-title">Cursor团队</h3>
              <p className="large-text">📍 所有文档由AI实时生成</p>
              <p className="medium-text">💡 AI是环境，不是助手</p>
            </div>
            <div className="highlight">
              <div className="large-text">💡 他们和我们的差距在哪里？</div>
            </div>
          </>
        ),
      },
      {
        id: "environment",
        content: (
          <>
            <div className="title">从工具到环境</div>
            <div className="box">
              <div className="box-title">AI是工具</div>
              <div className="large-text">我命令 → AI执行</div>
              <div className="medium-text">效率提升、自动化、替代重复劳动</div>
            </div>
            <div className="box">
              <div className="box-title">AI是伙伴</div>
              <div className="large-text">我讨论 → AI共创</div>
              <div className="medium-text">增强决策、反馈、启发盲点</div>
            </div>
            <div className="box">
              <div className="box-title">AI是环境</div>
              <div className="large-text">工作流原生嵌入AI</div>
              <div className="medium-text">重新设计流程、AI优先、持续学习</div>
            </div>
          </>
        ),
      },
      {
        id: "pain-points",
        content: (
          <>
            <div className="title">盘点失血点</div>
            <div className="box">
              <div className="large-text">分4组，每组选一个场景：</div>
              <div className="grid4">
                <div className="grid-item">🏷️ 产品上新与标签管理</div>
                <div className="grid-item">🔍 搜索质量优化与迭代</div>
                <div className="grid-item">📊 客户报告与数据分析</div>
                <div className="grid-item">💬 品牌沟通与内容产出</div>
              </div>
            </div>
            <div className="highlight">
              <div className="medium-text">① 列出最耗时的3个环节（5分钟）</div>
              <div className="medium-text">② 分析为什么失血（5分钟）</div>
              <div className="medium-text">③ 如果AI优先会怎么变（10分钟）</div>
            </div>
          </>
        ),
      },
      {
        id: "group-guide",
        content: (
          <>
            <div className="title">分组工作指引</div>
            <div className="grid2">
              <div className="grid-card danger">
                <h3>现状失血点</h3>
                <div className="medium-text">
                  <p>• 具体是什么工作？</p>
                  <p>• 谁在做？花多少时间？</p>
                  <p>• 为什么痛苦低效？</p>
                </div>
              </div>
              <div className="grid-card success">
                <h3>AI优先方案</h3>
                <div className="medium-text">
                  <p>• 如果重来，AI可以做什么？</p>
                  <p>• 人类还需要做什么？</p>
                  <p>• 需要什么支持？</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="large-text">💡 别问AI能不能，而是问如果AI能，我们要怎么重新设计流程</div>
            </div>
          </>
        ),
      },
      {
        id: "sharing",
        content: (
          <>
            <div className="title">小组分享</div>
            <div className="box">
              <div className="large-text">⏱️ 每组3分钟</div>
              <div className="large-text highlight-text">分享要点：</div>
              <div className="medium-text">
                <p>• 最大的失血点是什么？</p>
                <p>• AI重构后的新流程长什么样？</p>
                <p>• 需要哪些支持才能落地？</p>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "maturity",
        content: (
          <>
            <div className="title">AI成熟度诊断</div>
            <div className="diagnosis-row">
              <div className="diagnosis-title">AI感知力</div>
              <div className="diagnosis-box danger">当前：看到问题想到传统方案</div>
              <div className="arrow">→</div>
              <div className="diagnosis-box success">目标：看到问题先问AI能否重构</div>
            </div>
            <div className="diagnosis-row">
              <div className="diagnosis-title">人机协作</div>
              <div className="diagnosis-box danger">当前：AI做执行人做全部决策</div>
              <div className="arrow">→</div>
              <div className="diagnosis-box success">目标：AI参与决策人做最终判断</div>
            </div>
            <div className="diagnosis-row">
              <div className="diagnosis-title">流程设计</div>
              <div className="diagnosis-box danger">当前：在现有流程上加AI</div>
              <div className="arrow">→</div>
              <div className="diagnosis-box success">目标：以AI能力为前提重新设计</div>
            </div>
          </>
        ),
      },
      {
        id: "experiment",
        content: (
          <>
            <div className="title">30天实验</div>
            <div className="card gradient">
              <div className="card-title">第1周：建立AI对话习惯</div>
              <div className="medium-text">▸ 每个人每天至少10次AI对话</div>
              <div className="medium-text">▸ 记录哪些任务可以交给AI</div>
            </div>
            <div className="card gradient">
              <div className="card-title">第2-3周：试点流程重构</div>
              <div className="medium-text">▸ 选1个高频痛点场景</div>
              <div className="medium-text">▸ 设计AI优先的新流程并测试</div>
            </div>
            <div className="card gradient">
              <div className="card-title">第4周：复盘与推广</div>
              <div className="medium-text">▸ 分享成功案例</div>
              <div className="medium-text">▸ 制定下一阶段改造计划</div>
            </div>
          </>
        ),
      },
      {
        id: "commitment",
        content: (
          <>
            <div className="title">个人承诺</div>
            <div className="commitment-box">
              <div className="large-text">每个人写下：</div>
              <div className="commitment-item">1. 我要改变的1个具体工作习惯</div>
              <div className="commitment-item">2. 我要尝试的1个AI优先方案</div>
              <div className="commitment-item">3. 我1周后的检查点是什么</div>
            </div>
            <div className="highlight">
              <div className="large-text">📸 拍照留存，互相监督</div>
            </div>
          </>
        ),
      },
      {
        id: "summary",
        content: (
          <>
            <div className="title">记住今天的核心</div>
            <div className="card gradient-strong">
              💡 AI不是在旧流程上打补丁，而是重新设计的机会
            </div>
            <div className="card gradient-strong">
              💡 培养AI Sense：看到问题，先问AI能否改变规则
            </div>
            <div className="card gradient-strong">
              💡 从工具思维到环境思维：AI是我们工作的操作系统
            </div>
            <div className="card gradient-strong">
              💡 行动胜于完美：从小实验开始，快速迭代
            </div>
            <div className="closing">
              真正的AI原生，不是用了多少AI工具，而是整个团队开始用AI的方式思考问题。
            </div>
            <div className="emoji">🚀 开始你的AI-Native之旅！</div>
          </>
        ),
      },
    ],
    []
  );

  const pptSlides: PptSlide[] = useMemo(
    () => [
      {
        title: "AI-Native 工作方式转型",
        content: [
          "从路径依赖到 AI 优先的思维重构",
          "60分钟互动工作坊",
        ],
      },
      {
        title: "今天的旅程",
        content: [
          "0-5分钟：破冰 - 你的AI使用现状",
          "5-15分钟：认知刷新 - 什么是真正的AI原生？",
          "15-35分钟：核心环节 - 盘点我们的失血点",
          "35-55分钟：共创 - AI-Native解决方案设计",
          "55-60分钟：承诺 - 每个人的行动计划",
        ],
      },
      {
        title: "破冰互动",
        content: [
          "请写下：今天用了几次AI工具、用来做什么、是否让AI帮决策",
          "2分钟书写，3分钟分享",
          "教练观察：问答还是协作？",
        ],
      },
      {
        title: "AI原生公司案例",
        content: [
          "HeyGen：日均AI对话150+次，AI是工作流的一部分",
          "OpenAI：AI生成90%初始代码，人类负责判断方向",
          "Cursor团队：文档由AI实时生成，AI是环境",
        ],
      },
      {
        title: "从工具到环境",
        content: [
          "AI是工具：命令-执行，聚焦效率提升与自动化",
          "AI是伙伴：讨论-共创，增强决策与启发盲点",
          "AI是环境：流程原生嵌入AI，持续学习",
        ],
      },
      {
        title: "盘点失血点",
        content: [
          "场景：产品上新、搜索优化、客户报告、品牌沟通",
          "任务：列出耗时环节、分析失血原因、设计AI优先流程",
        ],
      },
      {
        title: "分组工作指引",
        content: [
          "现状失血点：工作内容、责任人、耗时、痛点",
          "AI优先方案：AI能做什么、人要做什么、所需支持",
          "思考：如果AI能，我们如何重设流程？",
        ],
      },
      {
        title: "小组分享",
        content: [
          "每组3分钟",
          "分享：最大失血点、AI新流程、落地所需支持",
        ],
      },
      {
        title: "AI成熟度诊断",
        content: [
          "AI感知力：从传统方案到先问AI能否重构",
          "人机协作：从AI执行到AI参与决策",
          "流程设计：从加AI到以AI能力重构",
        ],
      },
      {
        title: "30天实验",
        content: [
          "第1周：建立AI对话习惯，记录可交付任务",
          "第2-3周：选高频痛点，设计并测试AI优先流程",
          "第4周：复盘推广，制定下一阶段计划",
        ],
      },
      {
        title: "个人承诺",
        content: [
          "改变1个具体工作习惯",
          "尝试1个AI优先方案",
          "设定1周后的检查点，拍照互相监督",
        ],
      },
      {
        title: "记住今天的核心",
        content: [
          "AI是重新设计流程的机会",
          "培养AI Sense：先问AI能否改变规则",
          "AI是操作系统：从工具到环境",
          "行动胜于完美：小实验快速迭代",
        ],
      },
    ],
    []
  );

  return { slides, pptSlides };
};

const PresentationPage = () => {
  const { slides, pptSlides } = usePresentationData();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrentSlide((index) => Math.max(0, index - 1));
      }

      if (event.key === "ArrowRight") {
        setCurrentSlide((index) => Math.min(slides.length - 1, index + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slides.length]);

  const handlePrev = () => setCurrentSlide((index) => Math.max(0, index - 1));
  const handleNext = () =>
    setCurrentSlide((index) => Math.min(slides.length - 1, index + 1));

  const handleDownload = async () => {
    if (typeof window === "undefined") return;

    const pptxFactory = (window as typeof window & { PptxGenJS?: new () => any }).PptxGenJS;

    if (!pptxFactory) {
      alert("PPTX 生成库尚未加载，请稍后再试。");
      return;
    }

    const pptx = new pptxFactory();
    pptx.author = "AI-Native Workshop";
    pptx.company = "AI-Native";
    pptx.layout = "LAYOUT_WIDE";
    pptx.title = "AI-Native 工作方式转型";

    pptSlides.forEach((slide) => {
      const pptSlide = pptx.addSlide();
      pptSlide.background = { color: "3B0764" };
      pptSlide.addText(slide.title, {
        x: 0.5,
        y: 0.4,
        w: 9,
        fontSize: 30,
        bold: true,
        color: "FFFFFF",
      });

      slide.content.forEach((text, idx) => {
        pptSlide.addText(text, {
          x: 0.7,
          y: 1.2 + idx * 0.7,
          w: 8.6,
          fontSize: 18,
          color: "E0E7FF",
          lineSpacing: 24,
        });
      });
    });

    await pptx.writeFile({ fileName: "AI-Native-Workshop.pptx" });
  };

  return (
    <div className="page-root">
      <Script
        src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.11.1/dist/pptxgen.bundle.min.js"
        strategy="afterInteractive"
      />
      <button className="download-btn" onClick={handleDownload}>
        下载PPTX
      </button>
      <div className="container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev} disabled={currentSlide === 0}>
          上一页
        </button>
        <span>
          <span>{currentSlide + 1}</span> / {slides.length}
        </span>
        <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>
          下一页
        </button>
      </div>
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
        }

        .page-root {
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .slide {
          display: none;
          min-height: 80vh;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .slide.active {
          display: block;
        }

        .title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 30px;
          color: #60efff;
        }

        .subtitle {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 20px;
          color: #60efff;
        }

        .intro-text {
          text-align: center;
          margin-top: 40px;
          font-size: 1.5rem;
        }

        .emoji {
          text-align: center;
          font-size: 4rem;
        }

        .card,
        .box,
        .highlight,
        .commitment-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 25px;
          border-radius: 15px;
          margin: 20px 0;
        }

        .card {
          border-left: 5px solid #60efff;
        }

        .box {
          border-left: 5px solid #60efff;
        }

        .box-title {
          font-size: 1.8rem;
          color: #60efff;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .gradient {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
        }

        .gradient-strong {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3));
          font-size: 1.4rem;
        }

        .card-title {
          font-size: 1.8rem;
          color: #60efff;
          margin-bottom: 15px;
        }

        .card-time {
          color: #60efff;
          font-weight: bold;
        }

        .emoji-large {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .large-text {
          font-size: 1.6rem;
          line-height: 1.6;
        }

        .medium-text {
          font-size: 1.3rem;
          line-height: 1.5;
        }

        .highlight-text {
          color: #60efff;
          font-weight: bold;
          margin: 20px 0;
        }

        .highlight {
          border-left: 5px solid gold;
          background: rgba(255, 215, 0, 0.2);
        }

        .quote {
          background: rgba(255, 215, 0, 0.15);
          padding: 20px;
          border-radius: 15px;
          margin-top: 20px;
          font-style: italic;
        }

        .grid4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
          margin: 20px 0;
        }

        .grid-item {
          background: rgba(255, 255, 255, 0.15);
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          font-size: 1.3rem;
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .grid-card {
          padding: 25px;
          border-radius: 15px;
          border-left: 5px solid transparent;
        }

        .grid-card h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .grid-card.danger {
          background: rgba(239, 68, 68, 0.2);
          border-left-color: #ef4444;
        }

        .grid-card.success {
          background: rgba(34, 197, 94, 0.2);
          border-left-color: #22c55e;
        }

        .diagnosis-row {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 15px;
        }

        .diagnosis-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #60efff;
          min-width: 120px;
        }

        .diagnosis-box {
          flex: 1;
          padding: 15px;
          border-radius: 10px;
          font-size: 1.1rem;
        }

        .diagnosis-box.danger {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }

        .diagnosis-box.success {
          background: rgba(34, 197, 94, 0.2);
          color: #86efac;
        }

        .arrow {
          font-size: 2rem;
        }

        .commitment-box {
          border: 3px solid #9333ea;
          background: rgba(147, 51, 234, 0.2);
          padding: 40px;
        }

        .commitment-item {
          font-size: 1.6rem;
          color: #60efff;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
        }

        .closing {
          background: rgba(255, 215, 0, 0.2);
          padding: 30px;
          border-radius: 20px;
          border-left: 5px solid gold;
          font-size: 1.6rem;
          font-style: italic;
          text-align: center;
          margin-top: 30px;
        }

        .controls {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          padding: 15px 30px;
          border-radius: 50px;
          display: flex;
          gap: 20px;
          align-items: center;
          color: white;
        }

        .controls button {
          background: #667eea;
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
        }

        .controls button:disabled {
          opacity: 0.3;
        }

        .download-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10b981;
          border: none;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .slide {
            padding: 25px;
          }

          .controls {
            width: calc(100% - 40px);
            justify-content: space-between;
          }

          .title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.6rem;
          }

          .large-text {
            font-size: 1.3rem;
          }

          .medium-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PresentationPage;
