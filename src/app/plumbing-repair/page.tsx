import GEOArticle from '@/components/GEOArticle';
import { plumbingRepairData } from '@/lib/content';

export default function PlumbingRepairPage() {
  return <GEOArticle {...plumbingRepairData} />;
}

export function generateMetadata() {
  return {
    title: '管道维修完整指南 | ProPlumberGuides',
    description: '80%的常见管道问题可以自己解决，关键在于准确判断问题严重程度。',
  };
}
