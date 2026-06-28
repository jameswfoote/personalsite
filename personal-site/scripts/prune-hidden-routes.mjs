import { existsSync, rmSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const config = JSON.parse(readFileSync(join(rootDir, 'app/siteConfig.json'), 'utf8'));

if (!config.showPublications) {
  for (const fileName of ['publications.html', 'publications.txt']) {
    const filePath = join(rootDir, 'out', fileName);
    if (existsSync(filePath)) {
      rmSync(filePath);
    }
  }
}
