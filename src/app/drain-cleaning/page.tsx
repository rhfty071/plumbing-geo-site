import GEOArticle from '@/components/GEOArticle';
import { drainCleaningData } from '@/lib/content';

export default function DrainCleaningPage() {
  return <GEOArticle {...drainCleaningData} />;
}

export function generateMetadata() {
  return {
    title: '排水疏通完全手册 | ProPlumberGuides',
    description: '90%的家庭排水堵塞不需要化学药剂，物理疏通最安全有效。',
  };
}
