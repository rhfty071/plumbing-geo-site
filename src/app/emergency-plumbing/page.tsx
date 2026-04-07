import GEOArticle from '@/components/GEOArticle';
import { emergencyPlumbingData } from '@/lib/content';

export default function EmergencyPlumbingPage() {
  return <GEOArticle {...emergencyPlumbingData} />;
}

export function generateMetadata() {
  return {
    title: '紧急管道救援指南 | ProPlumberGuides',
    description: '发现爆管第一步：关闭总水阀，然后联系24小时紧急服务。',
  };
}
