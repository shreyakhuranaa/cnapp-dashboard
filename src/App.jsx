import React, { useState, useReducer } from 'react';
import { Plus, X, Search, MoreHorizontal, RotateCcw } from 'lucide-react';

const initialData = {
  categories: {
    'cspm': {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: {
        'widget1': {
          id: 'widget1',
          name: 'Cloud Accounts',
          text: 'Random text for Cloud Accounts widget',
          type: 'donut-simple',
          data: {
            total: 2,
            connected: 2,
            notConnected: 0
          }
        },
        'widget2': {
          id: 'widget2',
          name: 'Cloud Account Risk Assessment',
          text: 'Random text for Risk Assessment widget',
          type: 'donut-complex',
          data: {
            total: 9659,
            failed: 1689,
            warning: 681,
            notAvailable: 36,
            passed: 7253
          }
        }
      }
    },
    'cwpp': {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: {
        'widget3': {
          id: 'widget3',
          name: 'Top 5 Namespace Specific Alerts',
          text: 'No graph data available',
          type: 'empty'
        },
        'widget4': {
          id: 'widget4',
          name: 'Workload Alerts',
          text: 'No graph data available',
          type: 'empty'
        }
      }
    },
    'registry': {
      id: 'registry',
      name: 'Registry Scan',
      widgets: {
        'widget5': {
          id: 'widget5',
          name: 'Image Risk Assessment',
          text: 'Random text for Image Risk Assessment',
          type: 'progress-bar',
          data: {
            total: 1470,
            critical: 9,
            high: 150
          }
        },
        'widget6': {
          id: 'widget6',
          name: 'Image Security Issues',
          text: 'Random text for Security Issues',
          type: 'progress-bar-simple',
          data: {
            total: 2,
            critical: 2,
            high: 0
          }
        }
      }
    }
  }
};

// All available widgets for search and add functionality
const allAvailableWidgets = [
  { id: 'widget1', name: 'Cloud Accounts', category: 'CSPM Executive Dashboard', categoryId: 'cspm', text: 'Random text for Cloud Accounts widget' },
  { id: 'widget2', name: 'Cloud Account Risk Assessment', category: 'CSPM Executive Dashboard', categoryId: 'cspm', text: 'Random text for Risk Assessment widget' },
  { id: 'widget3', name: 'Top 5 Namespace Specific Alerts', category: 'CWPP Dashboard', categoryId: 'cwpp', text: 'No graph data available' },
  { id: 'widget4', name: 'Workload Alerts', category: 'CWPP Dashboard', categoryId: 'cwpp', text: 'No graph data available' },
  { id: 'widget5', name: 'Image Risk Assessment', category: 'Registry Scan', categoryId: 'registry', text: 'Random text for Image Risk Assessment' },
  { id: 'widget6', name: 'Image Security Issues', category: 'Registry Scan', categoryId: 'registry', text: 'Random text for Security Issues' },
  { id: 'widget7', name: 'Network Security', category: 'CSPM Executive Dashboard', categoryId: 'cspm', text: 'Random text for Network Security' },
  { id: 'widget8', name: 'Compliance Status', category: 'CWPP Dashboard', categoryId: 'cwpp', text: 'Random text for Compliance Status' },
  { id: 'widget9', name: 'Vulnerability Scan', category: 'Registry Scan', categoryId: 'registry', text: 'Random text for Vulnerability Scan' },
  { id: 'widget10', name: 'Access Control', category: 'CSPM Executive Dashboard', categoryId: 'cspm', text: 'Random text for Access Control' }
];

function dashboardReducer(state, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.categoryId]: {
            ...state.categories[action.categoryId],
            widgets: {
              ...state.categories[action.categoryId].widgets,
              [action.widget.id]: action.widget
            }
          }
        }
      };
    case 'REMOVE_WIDGET':
      const { [action.widgetId]: removed, ...remainingWidgets } = state.categories[action.categoryId].widgets;
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.categoryId]: {
            ...state.categories[action.categoryId],
            widgets: remainingWidgets
          }
        }
      };
    case 'RESET_DASHBOARD':
      return initialData;
    default:
      return state;
  }
}

function SimpleDonutChart({ data }) {
  const { total, connected, notConnected } = data;
  const connectedPercent = total > 0 ? (connected / total) * 100 : 0;
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative mr-4">
        <svg width="80" height="80" className="transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeDasharray={`${(connectedPercent / 100) * 188} 188`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">{total}</div>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-gray-700">Connected ({connected})</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
          <span className="text-gray-700">Not Connected ({notConnected})</span>
        </div>
      </div>
    </div>
  );
}

function ComplexDonutChart({ data }) {
  const { total, failed, warning, notAvailable, passed } = data;
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative mr-4">
        <svg width="100" height="100" className="transform -rotate-90">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="160 60" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#dc2626" strokeWidth="12" strokeDasharray="40 180" strokeDashoffset="-160" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="20 200" strokeDashoffset="-200" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{total}</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
          <span>Failed ({failed})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <span>Warning ({warning})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
          <span>Not available ({notAvailable})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span>Passed ({passed})</span>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ data, name }) {
  const { total, critical, high } = data;
  const riskPercent = total > 0 ? ((critical + high) / total) * 100 : 0;
  
  return (
    <div className="text-center">
      <div className="text-lg font-bold mb-2">{total}</div>
      <div className="text-sm text-gray-600 mb-4">
        {name === 'Image Risk Assessment' ? 'Total Vulnerabilities' : 'Total Images'}
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
        <div 
          className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
          style={{width: `${Math.min(riskPercent, 100)}%`}}
        ></div>
      </div>
      <div className="flex justify-between text-xs">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-600 rounded-full mr-1"></div>
          <span>Critical ({critical})</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
          <span>High ({high})</span>
        </div>
      </div>
    </div>
  );
}

function SearchModal({ isOpen, onClose, data, onAddWidget, onRemoveWidget }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get all widgets currently in dashboard
  const currentWidgets = new Set();
  Object.values(data.categories).forEach(category => {
    Object.keys(category.widgets).forEach(widgetId => {
      currentWidgets.add(widgetId);
    });
  });

  // Filter widgets based on search term
  const filteredWidgets = allAvailableWidgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleWidget = (widget) => {
    if (currentWidgets.has(widget.id)) {
      // Remove widget
      onRemoveWidget(widget.categoryId, widget.id);
    } else {
      // Add widget
      const newWidget = {
        id: widget.id,
        name: widget.name,
        text: widget.text,
        type: 'empty'
      };
      onAddWidget(widget.categoryId, newWidget);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] max-w-[90vw] max-h-[80vh]">
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-lg font-medium">Search Widgets</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search widgets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2 mb-6 max-h-[400px] overflow-y-auto">
            {filteredWidgets.length > 0 ? (
              filteredWidgets.map(widget => (
                <div key={widget.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                  <div>
                    <div className="font-medium text-sm">{widget.name}</div>
                    <div className="text-xs text-gray-500">{widget.category}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      currentWidgets.has(widget.id) 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {currentWidgets.has(widget.id) ? 'Added' : 'Available'}
                    </span>
                    <button
                      onClick={() => handleToggleWidget(widget)}
                      className={`px-3 py-1 text-xs rounded ${
                        currentWidgets.has(widget.id)
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {currentWidgets.has(widget.id) ? 'Remove' : 'Add'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No widgets found matching "{searchTerm}"
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddWidgetModal({ isOpen, onClose, onAdd, onRemove, data }) {
  const [activeTab, setActiveTab] = useState('CSPM');
  const [selectedWidgets, setSelectedWidgets] = useState(new Set());

  // Get current widgets in dashboard
  const getCurrentWidgets = () => {
    const currentWidgets = new Set();
    Object.values(data.categories).forEach(category => {
      Object.keys(category.widgets).forEach(widgetId => {
        currentWidgets.add(widgetId);
      });
    });
    return currentWidgets;
  };

  // Available widgets organized by category tabs
  const availableWidgets = {
    'CSPM': [
      { id: 'cloud_accounts', name: 'Cloud Accounts', categoryId: 'cspm', text: 'Random text for Cloud Accounts widget' },
      { id: 'risk_assessment', name: 'Cloud Account Risk Assessment', categoryId: 'cspm', text: 'Random text for Risk Assessment widget' },
      { id: 'security_score', name: 'Security Score', categoryId: 'cspm', text: 'Random text for Security Score widget' },
      { id: 'compliance_overview', name: 'Compliance Overview', categoryId: 'cspm', text: 'Random text for Compliance widget' }
    ],
    'CWPP': [
      { id: 'namespace_alerts', name: 'Top 5 Namespace Specific Alerts', categoryId: 'cwpp', text: 'No Graph data available!' },
      { id: 'workload_alerts', name: 'Workload Alerts', categoryId: 'cwpp', text: 'No Graph data available!' },
      { id: 'container_security', name: 'Container Security', categoryId: 'cwpp', text: 'Random text for Container Security' },
      { id: 'runtime_protection', name: 'Runtime Protection', categoryId: 'cwpp', text: 'Random text for Runtime Protection' }
    ],
    'Image': [
      { id: 'image_risk', name: 'Image Risk Assessment', categoryId: 'registry', text: 'Random text for Image Risk Assessment' },
      { id: 'security_issues', name: 'Image Security Issues', categoryId: 'registry', text: 'Random text for Security Issues' },
      { id: 'vulnerability_scan', name: 'Vulnerability Scan Results', categoryId: 'registry', text: 'Random text for Vulnerability Scan' },
      { id: 'malware_detection', name: 'Malware Detection', categoryId: 'registry', text: 'Random text for Malware Detection' }
    ],
    'Ticket': [
      { id: 'open_tickets', name: 'Open Security Tickets', categoryId: 'cspm', text: 'Random text for Open Tickets' },
      { id: 'resolved_tickets', name: 'Resolved Tickets', categoryId: 'cwpp', text: 'Random text for Resolved Tickets' },
      { id: 'high_priority', name: 'High Priority Issues', categoryId: 'registry', text: 'Random text for High Priority Issues' },
      { id: 'sla_compliance', name: 'SLA Compliance', categoryId: 'cspm', text: 'Random text for SLA Compliance' }
    ]
  };

  const currentWidgets = getCurrentWidgets();

  const handleWidgetToggle = (widget) => {
    if (currentWidgets.has(widget.id)) {
      // Remove widget
      onRemove(widget.categoryId, widget.id);
    } else {
      // Add widget
      const newWidget = {
        id: widget.id,
        name: widget.name,
        text: widget.text,
        type: 'empty'
      };
      onAdd(widget.categoryId, newWidget);
    }
  };

  const handleConfirm = () => {
    onClose();
    setSelectedWidgets(new Set());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] max-w-[90vw] max-h-[80vh]">
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-lg font-medium">Add Widget</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">Personalise your dashboard by adding the following widget</p>
          
          {/* Tab Navigation */}
          <div className="flex border-b mb-4">
            {Object.keys(availableWidgets).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Widget List */}
          <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
            {availableWidgets[activeTab]?.map(widget => {
              const isActive = currentWidgets.has(widget.id);
              return (
                <div key={widget.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => handleWidgetToggle(widget)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm flex-grow">{widget.name}</span>
                  {isActive && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Added
                    </span>
                  )}
                </div>
              );
            }) || []}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreOptionsMenu({ isOpen, onClose, onRefresh, onExport }) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="py-1">
        <button
          onClick={() => {
            onRefresh();
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        >
          <RotateCcw size={14} />
          Refresh Dashboard
        </button>
        <button
          onClick={() => {
            onExport();
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Export Data
        </button>
        <button
          onClick={onClose}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [data, dispatch] = useReducer(dashboardReducer, initialData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const handleAddWidget = (categoryId, widget) => {
    dispatch({ type: 'ADD_WIDGET', categoryId, widget });
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', categoryId, widgetId });
  };

  const handleRefresh = () => {
    dispatch({ type: 'RESET_DASHBOARD' });
    alert('Dashboard refreshed to default state!');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dashboard-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">CNAPP Dashboard</h1>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              <Search size={16} />
              Search widgets
            </button>
            
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Widget
              <Plus size={16} />
            </button>
            
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
              title="Refresh Dashboard"
            >
              <RotateCcw size={18} />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
                title="More Options"
              >
                <MoreHorizontal size={18} />
              </button>
              
              <MoreOptionsMenu
                isOpen={isMoreMenuOpen}
                onClose={() => setIsMoreMenuOpen(false)}
                onRefresh={handleRefresh}
                onExport={handleExport}
              />
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm">
              <span>🕒</span>
              <span>Last 2 days</span>
              <span>▼</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {Object.values(data.categories).map(category => (
          <div key={category.id} className="mb-8">
            <h2 className="text-lg font-bold mb-4">{category.name}</h2>
            
            <div className="grid grid-cols-3 gap-4">
              {Object.values(category.widgets).map(widget => (
                <div key={widget.id} className="bg-white border border-gray-200 rounded-lg p-4 min-h-[250px]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-sm">{widget.name}</h3>
                    <button
                      onClick={() => handleRemoveWidget(category.id, widget.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center h-40">
                    {widget.type === 'donut-simple' && widget.data && <SimpleDonutChart data={widget.data} />}
                    {widget.type === 'donut-complex' && widget.data && <ComplexDonutChart data={widget.data} />}
                    {widget.type === 'progress-bar' && widget.data && <ProgressBar data={widget.data} name={widget.name} />}
                    {widget.type === 'progress-bar-simple' && widget.data && <ProgressBar data={widget.data} name={widget.name} />}
                    {(widget.type === 'empty' || widget.type === 'custom') && (
                      <div className="text-center text-gray-500">
                        <div className="text-3xl mb-2">📊</div>
                        <div className="text-sm">{widget.text || 'No Graph data available!'}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <div
                onClick={() => setIsAddModalOpen(true)}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[250px] flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50"
              >
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mb-3">
                  <Plus size={20} className="text-gray-400" />
                </div>
                <span className="text-gray-600 text-sm">Add Widget</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Modals */}
      <AddWidgetModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddWidget}
        onRemove={handleRemoveWidget}
        data={data}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        data={data}
        onAddWidget={handleAddWidget}
        onRemoveWidget={handleRemoveWidget}
      />

      {/* Click outside to close more menu */}
      {isMoreMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}
    </div>
  );
}