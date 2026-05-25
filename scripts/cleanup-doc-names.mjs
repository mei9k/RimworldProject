import fs from 'node:fs';
import path from 'node:path';

const repo = process.cwd();

const replacements = new Map([
  ['00-indice.md', 'indice.md'],
  ['01-concepto-y-estilo.md', 'concepto-y-estilo.md'],
  ['02-creacion-de-personajes.md', 'creacion-de-personajes.md'],
  ['03-atributos-y-habilidades.md', 'atributos-y-habilidades.md'],
  ['04-tiradas-y-criticos.md', 'tiradas-y-criticos.md'],
  ['05-combate.md', 'combate.md'],
  ['06-danio-y-curacion.md', 'danio-y-curacion.md'],
  ['07-equipo-e-inventario.md', 'equipo-e-inventario.md'],
  ['08-diseno-y-balance-de-armas.md', 'diseno-y-balance-de-armas.md'],
  ['09-protesis-y-ciberimplantes.md', 'protesis-y-ciberimplantes.md'],
  ['10-compendio-consumibles-medicos.md', 'compendio-consumibles-medicos.md'],
  ['11-compendio-drogas.md', 'compendio-drogas.md'],
  ['01-resumen.md', 'resumen.md'],
  ['02-cronologia.md', 'cronologia.md'],
  ['03-facciones.md', 'facciones.md'],
  ['04-fundaciones.md', 'fundaciones.md'],
  ['05-ia-y-robotica.md', 'ia-y-robotica.md'],
  ['06-leyendas.md', 'leyendas.md'],
  ['07-mapas.md', 'mapas.md'],
]);

function walk(dir, output = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, output);
    } else {
      output.push(fullPath);
    }
  }

  return output;
}

const files = [
  path.join(repo, 'README.md'),
  path.join(repo, 'mainOverview.md'),
  path.join(repo, 'website-fuma', 'README.md'),
  path.join(repo, 'website-fuma', 'src', 'app', '(home)', 'page.tsx'),
  ...walk(path.join(repo, 'docs')).filter((file) => /\.md$/i.test(file)),
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  for (const [oldValue, newValue] of replacements) {
    content = content.split(oldValue).join(newValue);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

const legacyWebsite = path.join(repo, 'website');
if (fs.existsSync(legacyWebsite)) {
  fs.rmSync(legacyWebsite, {recursive: true, force: true});
}

console.log('cleanup complete');
