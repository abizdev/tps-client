import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'pages', 'components', 'lib', 'utils'] // Specify directories to lint
  }
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/shared/config/i18n/request.ts',
});
export default withNextIntl(nextConfig);
