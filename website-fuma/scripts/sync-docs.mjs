import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const repoRoot = path.resolve(projectRoot, '..');
const sourceDocs = path.join(repoRoot, 'docs');
const targetDocs = path.join(projectRoot, 'content', 'docs');

async function removeContents(dir) {
  await fs.mkdir(dir, { recursive: true });
  const entries = await fs.readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map((entry) => fs.rm(path.join(dir, entry.name), { recursive: true, force: true })),
  );
}

async function copyTree(src, dst) {
  await fs.mkdir(dst, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);

    if (entry.isDirectory()) {
      await copyTree(srcPath, dstPath);
      continue;
    }

    if (entry.isFile()) {
      await fs.copyFile(srcPath, dstPath);
    }
  }
}

function hasFrontmatter(content) {
  return content.startsWith('---\n') || content.startsWith('---\r\n');
}

function extractHeadingTitle(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m);
  if (heading?.[1]) {
    return heading[1].trim();
  }

  return fallback;
}

function yamlEscape(value) {
  return value.replace(/"/g, '\\"');
}

function normalizeTitleFromFilename(filePath) {
  const name = path.basename(filePath, path.extname(filePath));
  const noPrefix = name.replace(/^\d+-/, '');
  return noPrefix.replace(/-/g, ' ');
}

function adaptContent(filePath, content) {
  let next = content;

  if (!hasFrontmatter(next)) {
    const fallbackTitle = normalizeTitleFromFilename(filePath);
    const title = extractHeadingTitle(next, fallbackTitle);
    next = `---\ntitle: \"${yamlEscape(title)}\"\n---\n\n${next}`;
  }

  next = next.replace(
    "import GlossaryTerm from '@site/src/components/GlossaryTerm';",
    "import GlossaryTerm from '@/components/GlossaryTerm';",
  );

  next = next.replace(/to="\/(?!docs\/)/g, 'to="/docs/');

  return next;
}

async function processMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processMarkdownFiles(fullPath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.md')) {
      continue;
    }

    const raw = await fs.readFile(fullPath, 'utf8');
    const adapted = adaptContent(fullPath, raw);
    await fs.writeFile(fullPath, adapted, 'utf8');
  }
}

async function run() {
  await removeContents(targetDocs);
  await copyTree(sourceDocs, targetDocs);
  await processMarkdownFiles(targetDocs);
  console.log('Docs synchronized into website-fuma/content/docs');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
