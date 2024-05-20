import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import BasicComponent from './components/BasicComponent';
import StateManagementComponent from './components/StateManagementComponent';
import ConditionalRenderingComponent from './components/ConditionalRenderingComponent';
import FormComponent from './components/FormComponent';
import ParentComponent from './components/ParentComponent';
import HOCComponent from './components/HOCComponent';
import LifecycleComponent from './components/LifecycleComponent';
import ContextComponent from './components/ContextComponent';
import PerformanceOptimizedComponent from './components/PerformanceOptimizedComponent';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedComponent from './components/ProtectedComponent';
import OptimisticUIComponent from './components/OptimisticUIComponent';
import { AppProvider } from './context/AppContext';
import './App.css';

// Import LazyLoadedComponent with React.lazy
const LazyLoadedComponent = React.lazy(() => import('./components/LazyLoadedComponent'));


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/auth">Auth</Link></li>
              <li><Link to="/protected">Protected</Link></li>
              <li><Link to="/basic">Basic</Link></li>
              <li><Link to="/state">State Management</Link></li>
              <li><Link to="/conditional">Conditional Rendering</Link></li>
              <li><Link to="/form">Form</Link></li>
              <li><Link to="/parent">Parent Component</Link></li>
              <li><Link to="/hoc">HOC</Link></li>
              <li><Link to="/lifecycle">Lifecycle</Link></li>
              <li><Link to="/context">Context</Link></li>
              <li><Link to="/performance">Performance</Link></li>
              <li><Link to="/optimistic">Optimistic UI</Link></li>
              <li><Link to="/lazy">Lazy Loaded</Link></li>
            </ul>
          </nav>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/protected" element={<ProtectedRoute><ProtectedComponent /></ProtectedRoute>} />
                <Route path="/basic" element={<BasicComponent />} />
                <Route path="/state" element={<StateManagementComponent />} />
                <Route path="/conditional" element={<ConditionalRenderingComponent />} />
                <Route path="/form" element={<FormComponent />} />
                <Route path="/parent" element={<ParentComponent />} />
                <Route path="/hoc" element={<HOCComponent />} />
                <Route path="/lifecycle" element={<LifecycleComponent />} />
                <Route path="/context" element={<ContextComponent />} />
                <Route path="/performance" element={<PerformanceOptimizedComponent />} />
                <Route path="/optimistic" element={<OptimisticUIComponent />} />
                {/* Use LazyLoadedComponent with Suspense for lazy loading */}
                <Route path="/lazy" element={<LazyLoadedComponent />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
