import Layout from '@/components/layout/Layout';
import React from 'react'

function MainLayout({ children }: {
    children: React.ReactNode;
  }) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default MainLayout