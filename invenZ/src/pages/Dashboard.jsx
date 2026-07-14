import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { icon: '📦', value: '1,245', label: 'Total Products', change: '+12%', color: 'primary' },
    { icon: '⚠️', value: '8', label: 'Low Stock', change: '+5%', color: 'warning' },
    { icon: '🏢', value: '24', label: 'Suppliers', change: '+2', color: 'success' },
    { icon: '💰', value: 'Rs.45,000', label: 'Total Value', change: '+8%', color: 'info' },
  ];

  const lowStockItems = [
    { name: 'Rice', quantity: 2, status: 'danger' },
    { name: 'Sugar', quantity: 8, status: 'warning' },
    { name: 'Wheat Flour', quantity: 45, status: 'success' },
  ];

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>📊 Dashboard</h1>
        <p>Welcome back! Here's what's happening with your inventory.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">
        <Card title="📈 Recent Sales" icon="📈">
          <div className="chart-placeholder">
            <p>📊 Sales chart will appear here</p>
          </div>
        </Card>

        <Card title="⚠️ Low Stock Alerts" icon="⚠️" borderColor="warning">
          <div className="low-stock-list">
            {lowStockItems.map((item, index) => (
              <div key={index} className={`stock-item ${item.status}`}>
                <span className="stock-name">{item.name}</span>
                <span className="stock-quantity">{item.quantity} left</span>
                {item.status === 'danger' && (
                  <button className="stock-action">Order</button>
                )}
                {item.status === 'success' && (
                  <span className="stock-status">✅ In Stock</span>
                )}
                {item.status === 'warning' && (
                  <span className="stock-status">⚠️ Low</span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;