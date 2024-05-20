// pages/api/getFiles.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'app', 'aulas', '_mdx-content');
  console.log('Directory Path:', directoryPath); // Log para depuração

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Failed to read directory:', err); // Log de erro
      return res.status(500).json({ error: 'Failed to read directory' });
    }

    // Filtra apenas arquivos .mdx
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    console.log('Files:', mdxFiles); // Log dos arquivos lidos

    res.status(200).json(mdxFiles);
  });
}
