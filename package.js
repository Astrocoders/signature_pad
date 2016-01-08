Package.describe({
  name: 'astrocoders:signature-pad',
  version: '1.5.2',
  summary: 'Library for drawing smooth signatures.',
  git: 'https://github.com/Astrocoders/signature_pad',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.4.2');
  
  api.addFiles([
    'signature_pad.js',
  ], 'client');
});
