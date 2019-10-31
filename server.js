const { createUpwardServer } = require('@magento/upward-js');

async function serve() {
  await createUpwardServer({
    port: 8000,
    bindLocal: true,
    logUrl: true,
    upwardPath: './upward.yml'
  });
}

serve();