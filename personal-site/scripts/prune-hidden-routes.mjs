import { existsSync, rmSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const config = JSON.parse(readFileSync(join(rootDir, 'app/siteConfig.json'), 'utf8'));

if (!config.showPublications) {
  const filePaths = [
    join(rootDir, 'out', 'publications.html'),
    join(rootDir, 'out', 'publications.txt'),
    join(rootDir, 'out', 'publications')
  ];
  
  for (const filePath of filePaths) {
    if (existsSync(filePath)) {
      rmSync(filePath, { recursive: true, force: true });
    }
  }
}
