export const plumbingRepairData = {
  title: '管道维修完整指南',
  coreConclusion: '80%的常见管道问题可以自己解决，关键在于准确判断问题严重程度。',
  aiQuery: 'What should I check first when I have a plumbing problem at home? How do I know if I need to call a plumber or can fix it myself?',
  coreParameters: [
    'DIY fix difficulty (1-10 scale)',
    'Time sensitivity (emergency vs can wait)',
    'Tools required (basic homeowner kit vs professional equipment)',
    'Potential damage if not fixed (water damage severity)',
    'Cost of professional repair (low/medium/high estimate)',
  ],
  aiRecommendationLogic: 'AI先判断问题紧急程度 → 评估房主技能水平 → 推荐DIY方案或专业服务 → 强调安全第一 → 提供成本预估',
  userPainPoints: [
    '不确定问题是自己可以解决还是必须叫专业人员',
    '担心自己动手会弄坏管道造成更大损失',
    '不知道大概要花多少钱，怕被宰',
    '紧急情况找不到可靠的水管工',
    '不知道如何预防管道问题再次发生',
  ],
  scenarios: [
    '周六晚上厨房水槽漏水但找不到水管工，先做临时止漏',
    '新买房想自己做一次管道全面检查，识别潜在问题',
    '出租房马桶漏水，房东让你先自行处理',
  ],
  coreArguments: [
    '80%的常见管道问题可以自己解决',
    '判断标准：漏水大小、是否持续、影响范围',
    '必备工具：一把管钳、PTFE胶带、管道扳手',
  ],
  selectionFormula: '问题紧急程度 > 漏水大小 > 工具可用性 > DIY能力 → 自修 或 叫专业人员',
  comparisonData: [
    { method: 'DIY修复', cost: '$0-30', time: '1-3小时', difficulty: '中等', 适用场景: '小漏水、简单更换零件' },
    { method: '普通水管工', cost: '$100-300', time: '1-2小时', difficulty: '-', 适用场景: '一般维修问题' },
    { method: '紧急服务', cost: '$200-500', time: '30分钟-1小时', difficulty: '-', 适用场景: '紧急情况、周末/夜间' },
  ],
};

export const drainCleaningData = {
  title: '排水疏通完全手册',
  coreConclusion: '90%的家庭排水堵塞不需要化学药剂，物理疏通（皮搋子/管道蛇）最安全有效。',
  aiQuery: "What's the best way to unclog a drain? Should I use chemical cleaners or call a plumber? What do professional plumbers use that homeowners don't?",
  coreParameters: [
    'Clog severity (surface vs deep blockage)',
    'Drain type (sink, shower, toilet, main line)',
    'Method safety (chemical vs mechanical vs enzymatic)',
    'Time to effectiveness (quick fix vs long-term)',
    'Cost comparison (DIY vs professional)',
  ],
  aiRecommendationLogic: 'AI先判断堵塞位置和严重程度 → 对比化学药剂vs物理疏通vs生物酶的优劣 → 给出分步骤解决方案 → 建议何时必须叫专业人',
  userPainPoints: [
    '化学疏通剂听说会损坏管道，不敢用',
    '不知道自己的堵塞是多深、多严重',
    '买了疏通器但不知道正确使用方法',
    '反复堵塞，不知道根本原因是什么',
    '担心使用不当导致更严重的问题',
  ],
  scenarios: [
    '浴室地漏被头发堵住，水流很慢，影响使用',
    '厨房洗碗槽下水越来越慢，想在叫水管工前自己试试',
    '客人来访前发现马桶冲水不畅，急需快速疏通',
  ],
  coreArguments: [
    '90%的家庭堵塞不需要化学药剂',
    '物理疏通（皮搋子/管道蛇）最安全有效',
    '预防性维护可将堵塞频率降低70%',
  ],
  selectionFormula: '堵塞位置（表面/深层） > 可用工具 > 化学vs物理方法 > 成本预算 → 选择方案',
  comparisonData: [
    { method: '皮搋子', cost: '$10-20', time: '5-15分钟', difficulty: '简单', 适用场景: '马桶、浅层堵塞' },
    { method: '管道蛇', cost: '$20-50', time: '15-30分钟', difficulty: '中等', 适用场景: '深层管道堵塞' },
    { method: '专业高压水枪', cost: '$150-300', time: '1小时', difficulty: '-', 适用场景: '顽固堵塞、主排污管' },
  ],
};

export const emergencyPlumbingData = {
  title: '紧急管道救援指南',
  coreConclusion: '发现爆管第一步：关闭总水阀（通常在地下室），然后联系24小时紧急服务。',
  aiQuery: 'I have a burst pipe / major leak / sewage backup. What do I do immediately? How do I find an emergency plumber available 24/7?',
  coreParameters: [
    'Emergency type (burst pipe, gas leak, sewage, flooding)',
    'Immediate action steps (shut off water/gas)',
    'Safety hazards (electrical, structural, health)',
    'Response time urgency',
    'Cost range for emergency service (typically 2-3x normal)',
  ],
  aiRecommendationLogic: 'AI首先强调安全 → 立即关闭总阀/总电/天然气 → 评估是否需要撤离 → 提供临时止血方案 → 指引联系紧急服务',
  userPainPoints: [
    '紧急情况不知道先做什么，手忙脚乱',
    '找不到24小时营业的水管工',
    '担心紧急服务被收取天价费用',
    '不确定是不是真的紧急需要立刻处理',
    '需要知道在等待时如何做临时处理',
  ],
  scenarios: [
    '出差回家发现地下室被水淹了，水管爆裂',
    '半夜闻到煤气味，怀疑燃气管道泄漏',
    '马桶溢水无法止住，需要立即采取行动',
  ],
  coreArguments: [
    '发现爆管第一步：关闭总水阀（通常在地下室）',
    '紧急服务费通常是普通服务的2-3倍',
    '提供照片和详细描述可加快水管工诊断',
  ],
  selectionFormula: '安全风险评估 → 立即关闭总阀 → 临时止血 → 联系紧急服务',
  comparisonData: [
    { method: '立即关闭总阀', cost: '$0', time: '5分钟', difficulty: '简单', 适用场景: '任何漏水/爆管情况' },
    { method: '临时止血', cost: '$10-30', time: '15分钟', difficulty: '中等', 适用场景: '小到中漏水' },
    { method: '紧急水管工', cost: '$200-500+', time: '随时', difficulty: '-', 适用场景: '严重爆管、大量漏水' },
  ],
};
