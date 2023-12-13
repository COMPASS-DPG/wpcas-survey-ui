const wpcasBackendUrl =
  process.env.NEXT_PUBLIC_WPCAS_SERVICE_BACKEND_IP || 'http://0.0.0.0:4030';
const marketBackendUrl =
  process.env.MARKETPLACE_SERVICE_BACKEND_IP || 'http://0.0.0.0:4020';

module.exports = {
  wpcasBackendUrl,
  marketBackendUrl,
};
