'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import { isSanityConfigured } from '../../../sanity/env';

export default function Studio() {
  if (!isSanityConfigured) {
    return (
      <div style={{ padding: '48px', fontFamily: 'system-ui, sans-serif', maxWidth: '640px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px' }}>Sanity is not connected yet</h1>
        <p>
          Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to <code>.env.local</code> (see <code>.env.local.example</code>),
          then restart the dev server and reload this page.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
