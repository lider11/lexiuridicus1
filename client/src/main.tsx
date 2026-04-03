import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

class RootErrorBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean; message: string }> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message || 'Error inesperado en frontend.' };
  }

  componentDidCatch(error: Error) {
    console.error('Frontend crash:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: 24, marginBottom: 8 }}>Se detectó un error en la aplicación</h1>
          <p style={{ marginBottom: 12 }}>{this.state.message}</p>
          <p>Recarga la página. Si persiste, comparte este mensaje al equipo técnico.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
