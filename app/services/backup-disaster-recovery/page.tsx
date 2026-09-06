import { ServiceDetailPage } from '../../../components/marketing';
import { backupRecovery } from '../../../lib/service-details';
import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata(
  'Backup & Disaster Recovery Services | Cloud & Infrastructure Recovery',
  'Backup assessment, database backups, infrastructure snapshots, restore procedures, recovery planning and disaster-recovery readiness.',
  '/services/backup-disaster-recovery/',
);

export default function BackupDisasterRecoveryPage() {
  return <ServiceDetailPage config={backupRecovery} />;
}
