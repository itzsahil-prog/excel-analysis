import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FileUpload from './components/FileUpload';
import ColumnSelector from './components/ColumnSelector';
import ChartGenerator from './components/ChartGenerator';
import ChartDownload from './components/ChartDownload';
import UploadHistory from './components/UploadHistory';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/upload" component={FileUpload} />
        <Route path="/select-columns" component={ColumnSelector} />
        <Route path="/generate-chart" component={ChartGenerator} />
        <Route path="/download-chart" component={ChartDownload} />
        <Route path="/upload-history" component={UploadHistory} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;